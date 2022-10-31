import React, { useState } from 'react'
export default function Textform(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted To Uppercase","success");
    }
    const handlelowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showalert("Converted To Lowercase","success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showalert("Text Cleared","success");
    }
    const handleCopySpaces = ()=>{
        navigator.clipboard.writeText(text);
        props.showalert("Copied To Clipboard!","success");
    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showalert("Extra Spaces Removed","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    return (<>
        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1 >{props.Heading}</h1>
            <div className='mb-3'>
                <textarea className='form-control' style={{ backgroundColor: props.mode === 'dark' ? '#230028' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlelowClick}>Convert To lowercase</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopySpaces}>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
            <h1 >Your Text Summary</h1>
            <p >{text.split(/\s+/).filter((Element)=>{return Element.length!==0}).length} words and {text.length} characters</p>
            <p >{0.08 * text.split(" ").filter((Element)=>{return Element.length!==0}).length} Minutes read</p>
            <h2 >Preview</h2>
            <p >{text.length>0?text:"Enter The Text Above To Preview It"}</p>
        </div>
    </>
    )
}