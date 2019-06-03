import React from "react";

export default function RenderIcon(props) {

    return (typeof props.icon === 'string') ?
        <img alt="" src={props.icon} />
        : props.icon;
}