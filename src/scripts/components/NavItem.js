import classnames from 'classnames';
import React, { Component } from 'react';

/**
 * NavItem 组件
 */
export default class NavItem extends Component{
    //构造函数
    constructor(props, context){
        super(props, context);
    }
    //props校验
    static propTypes ={
        disabled: React.PropTypes.bool,
        active: React.PropTypes.bool,
        eventKey: React.PropTypes.any,
        href: React.PropTypes.string,
        changeActiveHandle: React.PropTypes.func,
    }
    //默认props
    static defaultProps = {
        disabled: false,
        active: false,
    }
    onClickHandle(){
        !this.props.disabled && this.props.changeActiveHandle(this.props.eventKey);
    }
    渲染
    render(){
        // debugger;
        let { disabled, active, classname, href, changeActiveHandle, eventKey } = this.props;

        let classes = {
            disabled: disabled,
            active: active,
        };

        return(
            <li className={classnames('nav-item', classname)} 
            onClick={this.onClickHandle.bind(this)}>
                <a href={href} className={classnames('nav-link', classes)}>
                    {this.props.children}
                </a>
            </li>
        );
    }
}