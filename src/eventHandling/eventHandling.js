import React,{useState} from "react";

function EventHandlingDemo(){
    const [inputValue, setInputval]=useState('');
    const [counter,setCounter]=useState(0);

    const handleInputChange=(event)=>{
        setInputval(event.target.value);
        console.log('Input Value:',event.target.value);
    };

    const handleButton=()=>{
        setCounter(counter+1);
        console.log('Button Clicked. Counter:',counter+1);
    };

    const handleForm= (event) =>{
        event.preventDefault();
        alert('Form Submitted with input: ${inputValue}');
    };
    return(
        <div>
            <h1>ReactEvent Handling Demo</h1>
            {}
            <div>
                <label htmlFor="inputField">Type Something</label>
                <input id="inputField" type="text" value={inputValue} onChange={handleInputChange}/>
                <p>Current Input:{inputValue}</p>
            </div>
            {}
            <div>
                <button onClick={handleButton}>Click me!</button>
                <p>Button Clicked:{counter}</p>
            </div>
            <div>
                <form onSubmit={handleForm}>
                    <label htmlFor="submitField">Submit this Input: </label>
                    <input id="submitField" type="text" value={inputValue} onChange={handleInputChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );

}
export default EventHandlingDemo;