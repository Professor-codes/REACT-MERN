import React, { useState } from 'react'

export default function About() {

    let [aboutModeStyle, setAboutModeStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    })

    let [aboutButtonMode, setAboutButtonMode] = useState({
        border: 'none',
        color: 'white',
        backgroundColor: 'black',
    })

    let [buttonText, setButtonText] = useState('Dark mode')

    let toggleMode = () => {
        if (aboutModeStyle.color === 'black') {
            setAboutModeStyle({
                color: 'white',
                backgroundColor: 'black',
            })
            setAboutButtonMode({
                border: 'none',
                color: 'black',
                backgroundColor: 'white',
            })
            setButtonText('Light mode')
        }
        else {
            setAboutModeStyle({
                color: 'black',
                backgroundColor: 'white',
            })
            setAboutButtonMode({
                border: 'none',
                color: 'white',
                backgroundColor: 'black',
            })
            setButtonText('Dark mode')
        }
    }

    return (
        <div>
            <div className="container">

                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-6 about" style={aboutModeStyle}>
                        <p className='text-start about-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi reprehenderit ab recusandae id reiciendis facilis officia hic quibusdam ex perferendis. Facere rem tempora labore est odio ad totam unde delectus eius. Ad obcaecati et accusamus dignissimos facere, accusantium quam fugit!</p>
                        <button className='mt-4 me-5 float-end' style={aboutButtonMode}>Get in touch</button>
                    </div>
                </div>

                <div className="container d-flex justify-content-center mt-5">
                <button onClick={toggleMode}>{buttonText}</button>
                </div>

            </div>
        </div>
    )
}
