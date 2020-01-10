import * as React from 'react';
import { observable, autorun } from 'mobx';
import classNames from 'classnames';
import { factory } from './widgets';
import 'font-awesome/css/font-awesome.min.css';
import { ContextContainer, FormContext } from './context';
import { formRes } from './formRes';
import { resLang } from '../res';
export class Form extends React.Component {
    constructor(props) {
        super(props);
        this.watch = () => {
            let { formData } = this.props;
            if (formData === undefined)
                return;
            //this.initData(formData);
            this.calcSelectOrDelete();
        };
        /*
            async buttonClick(buttonName:string) {
                this.formContext.checkRules()
                if (this.formContext.hasError === true) return;
        
                let {onButtonClick} = this.formContext.form.props;
                if (onButtonClick === undefined) {
                    alert(`you should define form onButtonClick`);
                    return;
                }
                let ret = await onButtonClick(buttonName, this.formContext);
                if (ret === undefined) return;
                this.formContext.setError(buttonName, ret);
            }
        */
        this.DefaultContainer = (content) => {
            return React.createElement("form", { className: classNames(this.props.className), onSubmit: e => e.preventDefault() }, content);
        };
        this.DefaultFieldContainer = (label, content) => {
            let { fieldLabelSize } = this.props;
            if (fieldLabelSize > 0) {
                let labelView;
                if (label === null) {
                    fieldLabelSize = 0;
                }
                else {
                    labelView = React.createElement("label", { className: classNames('col-sm-' + fieldLabelSize, 'col-form-label') }, label);
                }
                let fieldCol = 'col-sm-' + (12 - fieldLabelSize);
                return React.createElement("div", { className: "form-group row" },
                    labelView,
                    React.createElement("div", { className: fieldCol }, content));
            }
            return React.createElement("div", { className: "form-group" },
                label === null ? null : React.createElement("label", { className: "col-form-label" }, label),
                content);
        };
        this.DefaultFieldClass = undefined;
        this.DefaultButtonClass = 'text-center py-2';
        this.DefaultRes = resLang(formRes);
        this.ArrContainer = (label, content) => {
            return React.createElement("div", null,
                React.createElement("div", { className: classNames('small text-muted text-center bg-light py-1 px-3 mt-4 mb-1') }, label),
                content);
        };
        this.RowContainer = (content) => {
            let cn = classNames({
                'py-3': true
            });
            return React.createElement("div", { className: cn }, content);
        };
        this.RowSeperator = React.createElement("div", { className: "border border-gray border-top" });
        let { schema, uiSchema, Container, FieldContainer, FieldClass, ButtonClass, res, } = props;
        this.Container = Container || this.DefaultContainer;
        this.FieldContainer = FieldContainer || this.DefaultFieldContainer;
        this.FieldClass = FieldClass !== undefined && FieldClass !== '' && FieldClass !== null ? FieldClass : this.DefaultFieldClass;
        this.res = res || this.DefaultRes;
        this.ButtonClass = ButtonClass || this.DefaultButtonClass;
        this.schema = schema;
        this.itemSchemas = {};
        for (let itemSchema of this.schema) {
            this.itemSchemas[itemSchema.name] = itemSchema;
        }
        this.uiSchema = uiSchema;
        this.disposer = autorun(this.watch);
        this.data = {};
    }
    renderContent() {
        this.initData(this.props.formData);
        let { children } = this.props;
        if (children !== undefined) {
            this.formContext = new FormContext(this, true);
            return React.createElement(React.Fragment, null, children);
        }
        let Templet;
        if (this.uiSchema !== undefined) {
            Templet = this.uiSchema.Templet;
        }
        if (Templet !== undefined) {
            this.formContext = new FormContext(this, true);
            return typeof (Templet) === 'function' ? Templet(this.data) : Templet;
        }
        this.formContext = new FormContext(this, false);
        return React.createElement(React.Fragment, null, this.schema.map((v, index) => {
            return React.createElement(React.Fragment, { key: index }, factory(this.formContext, v, children));
        }));
    }
    initData(formData) {
        if (formData === undefined)
            formData = {};
        if (this.uiSchema !== undefined) {
            let { items } = this.uiSchema;
            if (items !== undefined) {
                for (let i in items) {
                    let ui = items[i];
                    let dv = ui.defaultValue;
                    if (dv !== undefined) {
                        if (formData[i] === undefined) {
                            formData[i] = dv;
                        }
                    }
                }
            }
        }
        for (let itemSchema of this.schema) {
            this.initDataItem(itemSchema, this.data, formData);
        }
    }
    initDataItem(itemSchema, data, formData) {
        let { name, type } = itemSchema;
        if (type === 'button')
            return;
        if (type !== 'arr') {
            data[name] = formData[name];
            return;
        }
        let arrItem = itemSchema;
        let { arr: arrItems } = arrItem;
        if (arrItems === undefined)
            return;
        let arrDict = arrItem.itemSchemas = {};
        for (let item of arrItems) {
            arrDict[item.name] = item;
        }
        let val = formData[name];
        if (val === undefined)
            val = [];
        else if (Array.isArray(val) === false)
            val = [val];
        let arr = [];
        for (let row of val) {
            let { $isSelected, $isDeleted } = row;
            let r = {
                $source: row,
                $isSelected: $isSelected,
                $isDeleted: $isDeleted,
            };
            for (let item of arrItems) {
                this.initDataItem(item, r, row);
            }
            arr.push(r);
        }
        // 如果没有observable，行删除标志点击不管用
        // 不知道这里为什么要去掉observable。有可能会有别的问题
        data[name] = observable(arr);
        //data[name] = arr;
        return;
    }
    calcSelectOrDelete() {
        for (let itemSchema of this.schema) {
            this.arrItemOperated(itemSchema);
        }
    }
    arrItemOperated(itemSchema) {
        let { name, type } = itemSchema;
        if (type !== 'arr')
            return;
        if (this.data === undefined)
            return;
        let formArrVal = this.data[name];
        if (formArrVal === undefined)
            return;
        let { arr: arrItems } = itemSchema;
        for (let row of formArrVal) {
            let { $source } = row;
            if ($source === undefined)
                continue;
            let { $isSelected, $isDeleted } = $source;
            row.$isSelected = $isSelected;
            row.$isDeleted = $isDeleted;
            //console.log($isSelected, $isDeleted);
            for (let item of arrItems) {
                this.arrItemOperated(item);
            }
        }
    }
    componentDidMount() {
        let { beforeShow } = this.props;
        if (beforeShow !== undefined)
            beforeShow(this.formContext);
    }
    componentWillUnmount() {
        if (this.disposer !== undefined)
            this.disposer();
    }
    render() {
        let content = this.renderContent();
        return React.createElement(ContextContainer.Provider, { value: this.formContext },
            React.createElement(this.formContext.renderErrors, null),
            this.Container(content));
    }
}
//# sourceMappingURL=form.js.map