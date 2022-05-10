import React from 'react'
const TextBox = (props) => {
    return (
        <div>
            <input defaultValue={props.initialValue} onChange={props.changeValueHandler} />
        </div>)
}
export default TextBox
