import React from "react";
export interface AxProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    aClassName?: string;
    naClassName?: string;
}
export declare const Ax: (axProps: AxProps) => JSX.Element;
export declare const A: (props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => JSX.Element;
