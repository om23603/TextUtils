import React,{useState} from 'react'

export default function TextForm(props) {

    const countWords =(str) => {
        const wordsArray = str.split(/\s+/);
        const nonEmptyWords = wordsArray.filter(word => word.trim() !== '');
        return nonEmptyWords.length;
    }

    const handleUpClick= () => {
        // console.log('Uppercase was clicked ' + text);
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
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard.", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);
    }

    const[text, setText] = useState('');
    return (
        <>
        <div className="container my-3">
            <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>{props.heading}</h1>
            <div className="mb-3">
                <textarea className= {`form-control text-${props.mode==='light'?'dark':'light'}`} style={{backgroundColor: props.mode==='dark'?'grey':'white'}} value={text} onChange={handleOnChange}   id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleSpaceClick}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy text</button>
        </div>
        <div className={`container my-2 text-${props.mode==='light'?'dark':'light'}`}>
            <h2>Your text summary</h2>
            <p>{countWords(text)} words and {text.length} characters</p>
            <p>{0.008 * text.split("").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it"}</p>
        </div>
        </>
    )
}