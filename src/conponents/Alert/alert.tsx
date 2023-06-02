import React from "react";
import classNames from "classnames";
export type AlertType = 'success' | 'default' | 'danger' | 'warning'

export interface AlertProps {
    // alert title
    title: string;
    // alert description
    description?: string;
    //alert type
    type?: AlertType;
    //close envent
    onClose?: () => void;
    //close icon
    closable?: boolean;
}

const Alert: React.FC<AlertProps> = (props) => {
    const { title, description, type, onClose, closable } = props;
    const classes = classNames()

    return (
        <div>
            <span>{title}</span>
            {description}
            {closable}
        </div>
    )
    
}

Alert.defaultProps = {
    type: 'default',
    closable: true
}

export default Alert;