import React from 'react';
import { IObservableValue } from 'mobx';
export declare function autoHideTips(tips: IObservableValue<boolean | string | JSX.Element>, templet?: string | JSX.Element | ((v: string | JSX.Element) => JSX.Element), timeout?: number): React.FunctionComponentElement<any>;
