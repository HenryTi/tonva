import * as React from 'react';
import '../../css/va-badge.css';
export interface BadgeProps {
    className?: string;
    badge?: string | number;
    size?: 'xs' | 'sm' | 'lg';
    color?: 'secondary' | 'success' | 'danger' | 'primary' | 'info' | 'warning';
    badgeAlign?: 'left' | 'center' | 'right';
    badgeVertical?: 'top' | 'middle' | 'bottom';
}
export declare class Badge extends React.Component<BadgeProps> {
    render(): JSX.Element;
}
