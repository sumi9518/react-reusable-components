import React from 'react';
import  propTypes from 'prop-types';

const Alert = (props) => {
    return (
        <div>
            {
                props.show &&
                <div onClick={props.toggle} className={`alert alert-${props.type}`} role="alert">
                    {props.message ? props.message : props.children}
                </div>
            }
        </div>
    );
};
Alert.propTypes = {
    type: propTypes.string.isRequired,
    message: propTypes.string,
    show: propTypes.bool,
    toggle : propTypes.func
}
Alert.defaultProps={
    type:"primary",
    message: "default message",
    show: true,
    toggle() {}
}

export default Alert;