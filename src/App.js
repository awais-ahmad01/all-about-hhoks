import React, {useState, useEffect} from 'react';
import Post from './Post'

const App = ({initialCount})=>{
    // state 
    // let [count, setCount] = useState(initialCount);

    let [state, setState] = useState({
        count:initialCount,
        user:'Awais'
    });


    let [posts, setPost] = useState([
        {
            name:'super awesome hooks',
            body:'Everyting you need for hooks'
        }
    ])


    // const addOne = ()=> {
    //     setCount(count+1);
    // }

    // const restOne = ()=>{
    //     setCount(prevCount => {
    //         return prevCount - 1
    //     })
    // }


    
    const restOne = ()=>{
        setState(prevState => {
            return {...state, count: state.count - 1}
        })
    }


    const addPost = ()=> {
        let newPost = {
            name: 'Sugar is bad',
            body: 'Coffee is good'
        }


        setPost([
            ...posts, newPost
        ])
    }

    const removePosts =()=>{
        setPost([])
    }




    // const hey = 'Assalam O Alaikom!!';

    // const alertSomething =()=>{
    //     alert('Something')
    // }

    // useEffect(()=>{
    //     // console.log(useEffect)
    //     // console.log(hey)
    //     // console.log(alerSomething())

    //     console.log(state)
    // }, [state])   //it will trigger only when state updated
    

    // useEffect(()=>{

    //     console.log(posts)
    // }, [posts])   //it will trigger only when posts updated

    // useEffect(()=>{
    //     console.log('Mounted')
    // }, [])   //it will trigger only when component is mounted and then for any update it will not trigger



    return(
        <>
            
            <h1>{state.user}</h1>
            <div>
                Count:{state.count}
            </div>

            <button onClick={()=> setState({...state, count: state.count + 1
            })}>Add One +1</button>


            {/* <button onClick={addOne}>Add One +1</button> */}
        
            <button onClick={restOne}>Rest One -1</button>

            {/* <button onClick={()=> setCount(initialCount)}>Reset</button> */}
            
            <button onClick={()=> setState({...state, count:initialCount})}>Reset</button>


            <hr/>

            {posts.map((item, i)=>(

                <Post 
                    item = {item}
                    key={i}
                />

                // <div key={i}>
                //     <div>
                //         Name: {item.name}
                //     </div>
                //     <div>
                //         Body: {item.body}
                //     </div>
                //     <hr/>
                // </div>
            ))}

            <button onClick={addPost}>Add new Post</button>

            
            <button onClick={removePosts}>Remove Posts</button>
        </>
    )
}

export default App