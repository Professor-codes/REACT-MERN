import React from 'react'
// import PropTypes from 'prop-types'

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
                            <a href="</" >{props.two}</a>
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
                    <button className='nav-btn'>Get an app</button>
                    <button className='nav-btn'>Sign in</button>
                </div>
            </header>
        </div>
    )
}

// Deprecated!

// Navbar.propTypes = {
//     title: PropTypes.string,
//     one: PropTypes.string,
//     two: PropTypes.string,
//     three: PropTypes.string,
//     four: PropTypes.string
// }

// Navbar.defaultProps = {
//     title: 'Logo',
// }