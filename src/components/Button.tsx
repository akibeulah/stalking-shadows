import React, { type FC, useRef } from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string
}

const Button: FC<ButtonProps> = (props) => {
    const ref = useRef<HTMLButtonElement | null>(document.createElement('button'))
    const { children, backgroundColor, color, style } = props

    let _style: React.CSSProperties = style || {};

    if (backgroundColor) _style.backgroundColor = backgroundColor;
    if (color) _style.color = color;

    return (
        <button ref={ref} style={_style} {...props}>
            {children}
        </button>
    );
}

export default Button;