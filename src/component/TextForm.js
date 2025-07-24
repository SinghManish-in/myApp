import React , {useState}  from "react"



export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');
    const handleUpClick = () => {
        console.log("Upper case clicked");
        setText(text.toUpperCase());
    }
    const handleOnChange = (event) => {
        console.log("Text changed"+text);
        setText(event.target.value);
    }
    const onClickTextArea = (event) => {
        setText("");
        // if(event.target.value === 'Enter text here'){
        //     setText("");
        // }
        
            
    }
    return (
        <>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" value={text} onClick={onClickTextArea} onChange={handleOnChange} rows="8">Enter</textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert To Upper Case</button>
        </>
    );
};



