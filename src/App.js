import React, {useState} from 'react';

const App = ({initialCount})=>{
    // state 
    let [count, setCount] = useState(initialCount);

    const addOne = ()=> {
        setCount(count+1);
    }

    const restOne = ()=>{
        setCount(prevCount => {
            return prevCount - 1
        })
    }




    return(
        <>
        
            <div>
                Count:{count}
            </div>

            <button onClick={addOne}>Add One +1</button>

            <button onClick={restOne}>Rest One -1</button>

            <button onClick={()=> setCount(initialCount)}>Reset</button>
        
        </>
    )
}

export default App