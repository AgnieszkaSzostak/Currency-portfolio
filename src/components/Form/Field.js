import React from "react";

const Field = (props) => {
    const {label, tag, type, name, onChange, value} = props
    return( <>
        <label htmlFor={name}>{label}</label>
        {tag === 'select'
           ? <select id={name} name={name} value={value} onChange={onChange}>
                    {props.children}
                </select>
           : <input id={name} name={name} type={type} value={value} onChange={onChange}></input>
        }
    </>)
}

export default Field