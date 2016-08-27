import classnames from 'classnames';
import React, { Component, PropTypes } from 'react';
import Icon from './Icon';

/**
 * Dropdown 触发组件.
 */
export default class DropdownTrigger extends Component{
    //prop type校验
    static propTypes = {
        //子节点
        children: PropTypes.element.isRequired,
    }
    //渲染
    render(){
        let { trigger, toggleMenu, className, children, ...others } = this.props,
            options = {
                children: <span>{children.props.children}<Icon className="dropdown-caret" right type="caret-down"/></span>
            };

        if(trigger === 'click'){
            options.onClick = toggleMenu;
        }

        children = React.cloneElement(children, options);

        return(
            <span {...others} className={classnames('dropdown-toggle', className)}>
                { children }
            </span>
        );
    }

}