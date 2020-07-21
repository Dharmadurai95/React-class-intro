import React from 'react';

const inputText = (props)=> {
    return (
    <input type='text' onChange={props.changed} value={props.value}/>
    );
};
export default inputText;