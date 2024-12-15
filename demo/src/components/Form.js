import React, { useState } from 'react';
import '../App.css';

export default function Form(props) {
    let [text, setText] = useState('');

    let handleOnChange = (event) => {
        setText(event.target.value);
    }
    let handleUpperCaseClick = () => {
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    let handleLowerCaseClick = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    let handleCopyClick = () => {
        console.log('copied');
        let text = document.getElementById('text-area');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    let handleExtraSpace = () => {
        let removespace = text.split(/[ ]+/);
        setText(removespace.join(' '))
    }

    let handleClearClick = () => {
        setText('');
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {/* LEFT PART - DISPLAY */}
                    <div className="col-6">
                        <h5 className='text-center mt-5 text-decoration-underline'>{props.heading}</h5>
                        <textarea className='form-control mx-auto my-5 area' id='text-area' rows={8} value={text} onChange={handleOnChange}></textarea>
                        <div className="d-flex justify-content-center">
                            <button onClick={handleUpperCaseClick}>Upper</button>
                            <button onClick={handleLowerCaseClick}>Lower</button>
                            <button onClick={handleCopyClick}>Copy</button>
                            <button onClick={handleExtraSpace}>Space</button>
                            <button onClick={handleClearClick}>Clear</button>
                        </div>
                    </div>
                    {/* RIGHT PART - DATA */}
                    <div className="col-6">
                        <div className="text-center mt-5">
                            <h5 className='text-decoration-underline'>Text data</h5>
                            <div className="d-flex justify-content-evenly mt-5">
                                <p className='word'>
                                    {text.trim().length > 0 ? text.trim().split(/\s+/).length : 0} words
                                </p>
                                <p className='char'>
                                    {text.length} characters
                                </p>
                            </div>
                        </div>
                        <h5 className='text-center mt-5 mb-5 text-decoration-underline'>Text preview</h5>
                        <p className='preview'>{text}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
