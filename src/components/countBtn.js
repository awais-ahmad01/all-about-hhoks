import React, {useState} from 'react';

const CountBtn = ({countHandler})=>{

    console.log('3-CountBtn')
    

    return(
        <>
            <button onClick={countHandler}>Increment Count</button>
        </>
    )
}

export default React.memo(CountBtn)  

// export default CountBtn 

//but there is a problem the memo is not recognized the function 
//that it is same or not bcz ftn is instantiated again 
//it can detect the props and values but not the functions