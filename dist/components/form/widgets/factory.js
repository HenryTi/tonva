"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.factory = void 0;
var React = __importStar(require("react"));
var textWidget_1 = require("./textWidget");
var textareaWidget_1 = require("./textareaWidget");
var passwordWidget_1 = require("./passwordWidget");
var updownWidget_1 = require("./updownWidget");
var numberWidget_1 = require("./numberWidget");
var dateWidget_1 = require("./dateWidget");
var checkBoxWidget_1 = require("./checkBoxWidget");
var selectWidget_1 = require("./selectWidget");
var radioWidget_1 = require("./radioWidget");
var rangeWidget_1 = require("./rangeWidget");
var idWidget_1 = require("./idWidget");
var buttonWidget_1 = require("./buttonWidget");
var arrComponent_1 = require("./arrComponent");
var imageWidget_1 = require("./imageWidget");
var tagWidget_1 = require("./tagWidget");
var widgetsFactory = {
    id: {
        dataTypes: ['id'],
        widget: idWidget_1.IdWidget,
    },
    text: {
        dataTypes: ['integer', 'number', 'string'],
        widget: textWidget_1.TextWidget
    },
    textarea: {
        dataTypes: ['string'],
        widget: textareaWidget_1.TextAreaWidget
    },
    password: {
        dataTypes: ['string'],
        widget: passwordWidget_1.PasswordWidget
    },
    date: {
        dataTypes: ['date'],
        widget: dateWidget_1.DateWidget
    },
    datetime: {
        dataTypes: ['date'],
        widget: dateWidget_1.DateTimeWidget
    },
    time: {
        dataTypes: ['date'],
        widget: dateWidget_1.TimeWidget
    },
    month: {
        dataTypes: ['date'],
        widget: dateWidget_1.MonthWidget
    },
    select: {
        dataTypes: ['integer', 'number', 'string', 'date', 'boolean'],
        widget: selectWidget_1.SelectWidget
    },
    url: {
        dataTypes: ['string'],
        widget: passwordWidget_1.UrlWidget
    },
    email: {
        dataTypes: ['string'],
        widget: passwordWidget_1.EmailWidget
    },
    number: {
        dataTypes: ['integer', 'number'],
        widget: numberWidget_1.NumberWidget
    },
    updown: {
        dataTypes: ['integer', 'number'],
        widget: updownWidget_1.UpdownWidget
    },
    color: {},
    checkbox: {
        dataTypes: ['boolean', 'integer', 'number'],
        widget: checkBoxWidget_1.CheckBoxWidget
    },
    image: {
        dataTypes: ['string'],
        widget: imageWidget_1.ImageWidget,
    },
    checkboxes: {},
    radio: {
        dataTypes: ['integer', 'number', 'string', 'date', 'boolean'],
        widget: radioWidget_1.RadioWidget
    },
    tagSingle: {
        dataTypes: ['integer'],
        widget: tagWidget_1.TagSingleWidget
    },
    tagMulti: {
        dataTypes: ['string'],
        widget: tagWidget_1.TagMultiWidget
    },
    range: {
        dataTypes: ['integer'],
        widget: rangeWidget_1.RangeWidget,
    },
    button: {
        dataTypes: ['button', 'submit'],
        widget: buttonWidget_1.ButtonWidget,
    }
};
function factory(context, itemSchema, children, fieldProps) {
    if (context === undefined) {
        debugger;
        return null;
    }
    if (itemSchema === undefined)
        return undefined;
    var name = itemSchema.name, type = itemSchema.type;
    switch (type) {
        case 'arr':
            var arrSchema = context.getItemSchema(name);
            return React.createElement(arrComponent_1.ArrComponent, { parentContext: context, arrSchema: arrSchema, children: children });
        default:
            break;
    }
    var typeWidget;
    var ui = context.getUiItem(name);
    function getTypeWidget(t) {
        switch (t) {
            default: return textWidget_1.TextWidget;
            case 'id': return idWidget_1.IdWidget;
            case 'integer': return updownWidget_1.UpdownWidget;
            case 'number': return numberWidget_1.NumberWidget;
            case 'string': return textWidget_1.TextWidget;
            case 'date': return dateWidget_1.DateWidget;
            case 'boolean': return checkBoxWidget_1.CheckBoxWidget;
            case 'button':
            case 'submit': return buttonWidget_1.ButtonWidget;
        }
    }
    if (ui === undefined) {
        typeWidget = getTypeWidget(type);
    }
    else {
        var widgetType = ui.widget;
        switch (widgetType) {
            default:
                if (widgetType !== undefined) {
                    var widgetFactory = widgetsFactory[widgetType];
                    typeWidget = widgetFactory.widget;
                }
                if (typeWidget === undefined)
                    typeWidget = getTypeWidget(type);
                break;
            case 'custom':
                typeWidget = ui.WidgetClass;
                break;
            case 'group':
                return React.createElement("span", null, "impletment group");
        }
        //label = uiLabel || name;
    }
    var widgets = context.widgets;
    var widget = widgets[name];
    if (!widget) {
        widget = new typeWidget(context, itemSchema, fieldProps, children);
        widget.init();
        widgets[name] = widget;
    }
    return React.createElement(widget.container, null);
    /*
    if (isRow === false) {
        let WidgetElement = observer(() => widget.container());
        return <WidgetElement />;
    }
    else {
        let widgetElement = widget.container();
        return widgetElement;
    }
    */
}
exports.factory = factory;
//# sourceMappingURL=factory.js.map