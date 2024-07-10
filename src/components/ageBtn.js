import React, {useState} from 'react';

const AgeBtn = ({ageHandler})=>{
    
    console.log('5-AgeBtn')

    return(
        <>
          <button onClick={ageHandler}>Increment Age</button>

        </>
    )
}

export default React.memo(AgeBtn)
// export default AgeBtn