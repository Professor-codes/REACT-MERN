import React from 'react'

export default function Navbar(props) {
    return (
        <div className='container'>
            <header className='header d-flex justify-content-between'>
                <h3>{props.title}</h3>
                <nav className=''>
                    <ul className='d-flex list-unstyled justify-content-center'>
                        <li>
                            <a href="/">{props.one}</a>
                        </li>
                        <li>
                            <a href="/">{props.two}</a>
                        </li>
                        <li>
                            <a href="/">{props.three}</a>
                        </li>
                        <li>
                            <a href="/">{props.four}</a>
                        </li>
                    </ul>
                </nav>
                <div className='explore'>
                    <button>Book a demo</button>
                    <button>Sign in</button>
                </div>
            </header>
        </div>
    )
}
