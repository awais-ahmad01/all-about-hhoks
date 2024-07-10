import React, {useState} from 'react';

const Age = ({age})=>{

    console.log('4-Age')
    

    return(
        <>
            <h1>Age is: {age}</h1>
       </>
    )
}

export default React.memo(Age)