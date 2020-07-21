import React from 'react';

function person(props) {
return( 
<div className='personName'>
<h1 onClick={props.click}>{props.name}</h1>
 <p>Age:{props.age}</p>
 
</div>
);
};  export default person;