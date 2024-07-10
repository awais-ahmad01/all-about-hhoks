import React, {useState} from 'react';

const Count = ({count})=>{

    console.log('2-Count')
    

    return(
        <>
            <h1>Count is: {count}</h1>
        </>
    )
}

export default React.memo(Count)