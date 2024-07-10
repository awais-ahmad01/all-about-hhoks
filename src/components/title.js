import React from 'react';

const Title = ()=>{
    
    console.log('1-Title')

    return(
        <>
            <h1>My App</h1>
            <hr/>
        </>
    )
}

export default React.memo(Title)  //memo lsten the prop and it will only re-render if the peops changes

//the main purpose of using memo is just to avoid unnecessary re rendering