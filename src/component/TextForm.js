import React , {useState}  from "react"

export default function TextForm(props) {
    const [text, setText] = useState('Enter text here');

    const handleUpperCaseClick = () => {
        setText(text.toUpperCase());
    }
    const handleLowerCaseClick = () => {
        setText(text.toLocaleLowerCase());
    }
    const handleRemoveExtraSpace = () => {
        setText(text.replace(/[\n\r\s\t]+/g, ' '));
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text);
    }
    const handleClearText = () => {
        setText("");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const onClickTextArea = (event) => {
        if(text === 'Enter text here'){
            setText("");
        }
    }

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" id="myBox"  style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} value={text} onClick={onClickTextArea} onChange={handleOnChange} rows="8">Enter</textarea>
             </div>

            <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick} >Convert To upper case</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick} >Convert To lower case</button>
            <button className="btn btn-primary mx-1" onClick={handleRemoveExtraSpace} >Clear extra space Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopyText} >Copy Text to clipboard</button>
            <button className="btn btn-primary mx-1" onClick={handleClearText} >Clear text area</button>

            <div className="container my-3" style={{color: props.mode==='dark'?'light':'dark'}}>
                <h1>Text Summary</h1>
                <p>Text has {text.split(" ").length} words and {text.length} chars</p>
                <h1>Preview</h1>
                <p>{text}</p>
            </div>
        </div>
        </>
    );
};



