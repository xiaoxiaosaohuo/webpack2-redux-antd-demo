/// <reference types="react" />
import React from 'react';
import { AbstractTooltipProps } from '../tooltip';
export interface PopconfirmProps extends AbstractTooltipProps {
    title: React.ReactNode;
    onConfirm?: (e: React.MouseEvent<any>) => void;
    onCancel?: (e: React.MouseEvent<any>) => void;
    okText?: React.ReactNode;
    cancelText?: React.ReactNode;
}
export interface PopconfirmContext {
    antLocale?: {
        Popconfirm?: any;
    };
}
export default class Popconfirm extends React.Component<PopconfirmProps, any> {
    static defaultProps: {
        prefixCls: string;
        transitionName: string;
        placement: string;
        trigger: string;
    };
    static contextTypes: {
        antLocale: React.Requireable<any>;
    };
    context: PopconfirmContext;
    constructor(props: PopconfirmProps);
    componentWillReceiveProps(nextProps: PopconfirmProps): void;
    confirm: (e: any) => void;
    cancel: (e: any) => void;
    onVisibleChange: (visible: any) => void;
    setVisible(visible: any): void;
    render(): JSX.Element;
}
