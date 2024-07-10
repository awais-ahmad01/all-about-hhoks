// import React, {Component} from 'react';

import React, {useRef} from 'react';  // useref used to give ref of DOMelement

// class App extends Component{


//     constructor(props){
//         super(props)

//         this.inputText = React.createRef();
//     }

    
//     triggerHandler = ()=>{
//         // console.log('Hello')
//         // console.log(this.inputText)
//         console.log(this.inputText.current)
//     }



//     render(){

//         return(
//             <>
//                 <h1>Form</h1>
//                 <input type='text' ref={this.inputText}/>
//                 <button onClick={this.triggerHandler}>Trigger</button>
//             </>
//         )
//     }
// }

const App = ()=>{

    const inputText = useRef();

    const triggerHandler = ()=>{
        console.log(inputText.current.value)
    }

    return(
        <>
            <h1>Form</h1>

            {/* <input type='text' ref={inputText}/> */}

            <InputComponent  
                ref = {inputText}
            />

            <button onClick={triggerHandler}>Trigger</button>
        </>
    )

}

const InputComponent = React.forwardRef((props, ref)=>{
    return <input type='text' ref={ref}/>
})


export default App

