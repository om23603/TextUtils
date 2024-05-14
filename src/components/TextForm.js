import React,{useState} from 'react'

export default function TextForm(props) {

    const countWords =(str) => {
        const wordsArray = str.split(/\s+/);
        const nonEmptyWords = wordsArray.filter(word => word.trim() !== '');
        return nonEmptyWords.length;
    }

    const handleUpClick= () => {
        setText(text.toUpperCase());
        props.showAlert("String converted to uppercase.", "success");
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("String converted to lowercase.", "success");
    }

    const handleSpaceClick = () => {
        setText(text.split(/[ ] + /).join(" "));
        props.showAlert("Removed extra spaces.", "success");
    }

    const handleClearClick = () => {
        setText("");
        props.showAlert("Text area cleared.", "success");
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied to clipboard.", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const[text, setText] = useState('');
    return (
        <>
        <div className="container my-3">
            <h1 className={`text-${props.mode==='light'?'dark':'light'} mb-4`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className= {`form-control text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor: props.mode==='dark'?'#6060608a':'white'}} value={text} onChange={handleOnChange}   id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleSpaceClick}>Remove Extra Spaces</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy text</button>
        </div>
        <div className={`container my-2 text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Your text summary</h2>
            <p>{countWords(text)} words and {text.length} characters</p>
            <p>{0.008 * text.split("").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}