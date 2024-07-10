import React, {useState, useCallback} from 'react';
import Title from './components/title';

import Count from  './components/count';

import CountBtn from  './components/countBtn';

import Age from './components/age';

import AgeBtn from './components/ageBtn';

const App = ()=>{


    const [count, setCount] = useState(0);

    const [age, setAge] = useState(20);


    // const incrementCount = ()=> {
    //     setCount(count+1)
    // }

    // const incrementAge = ()=> {
    //     setAge(age+1)
    // }


    //useCallBack listen the function is changed or not if the ftn is changed then 
    //it will only re-render the dependency component
    
    const incrementCount = useCallback(()=> {
        // setCount(count+1)
        setCount(prevCount => prevCount+1)
        
    },[])

    const incrementAge = useCallback(()=> {
        // setAge(age+1)
        setAge(prevAge => prevAge+1)
    },[])


    return(
        <>
            <Title/>


            <Count
                count = {count}
            />

            <CountBtn
                countHandler={incrementCount}
            />

            <Age
                age={age}
            />

            <AgeBtn
                ageHandler={incrementAge}
            />
        </>
    )
}

export default App