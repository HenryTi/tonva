import * as React from 'react';
import '../../css/va-lmr.css';
export interface LMRProps {
    className?: string | string[];
    left?: string | JSX.Element;
    right?: string | JSX.Element;
    onClick?: () => void;
}
export declare class LMR extends React.Component<LMRProps> {
    render(): JSX.Element;
}
