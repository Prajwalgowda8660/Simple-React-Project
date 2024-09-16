import React,{useState } from "react";
function ChildComponent({ message,count}){
    return(
        <div>
         <h1>{message}</h1>;
         <h1>Count Value:{count}</h1>
         </div>
    );
}
    function ParentComponent(){
    const [msg,setMsg]=useState("Hello from Parent!");
    const[count,setCount]=useState(0);
     
    const handleChange=() =>
    {
        setMsg("Message updated!");
        setCount(count +1);
    }
    const handleReset=() =>{
        setMsg("Hello from Parent");
        setCount(0);
    }

    console.log("Count",count)
    return(
        <div>
        <ChildComponent message={msg} count={count}/>
            <button onClick ={handleChange}>Update Message</button>
            <button onClick ={handleReset}>Rese</button>
        </div>
    );
}
export default ParentComponent;