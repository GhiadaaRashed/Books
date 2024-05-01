import "./Nav.css"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ReactSwitch from 'react-switch'
import openmagazine from './../../assets/images/openMagazine.png'
import moon from "./../../assets/images/moon.png"
import light from "./../../assets/images/light.png"
const Nav = ({ theme, setTheme }) => {
    const toggle_mode = () => {
        theme == 'light' ? setTheme("dark") : setTheme("light")
    }
    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify(theme))
    }, [theme])
    const [state, setstate] = useState(false)
    return (
        <div className="nav">
            <div className="navPosition">
                <p className="logo">B-World</p>
                <img src={openmagazine} />
            </div>
            <div className={state ? "navcontainer active" : "navcontainer"}>
                <svg onClick={() => {
                    setstate(!state)
                }} className="cancel" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <g clip-path="url(#clip0_121_1230)">
                        <path d="M18.0456 1.54572L16.4541 -0.0457764L8.99985 7.40922L1.5456 -0.0457764L-0.0458984 1.54572L7.4091 8.99997L-0.0458984 16.4542L1.5456 18.0457L8.99985 10.5907L16.4541 18.0457L18.0456 16.4542L10.5906 8.99997L18.0456 1.54572Z" fill="#937DC2" />
                    </g>
                    <defs>
                        <clipPath id="clip0_121_1230">
                            <rect width="18" height="18" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <ul>
                    <li><Link to='/deploy_react_app_github_pages_vercel'>Home</Link></li>
                    <li><Link to='/deploy_react_app_github_pages_vercel'>News</Link></li>
                    <li><Link to='/deploy_react_app_github_pages_vercel'>Promotion of the mount</Link> </li>
                    <li><Link to='/deploy_react_app_github_pages_vercel'>Plublishs</Link></li>
                    <li><Link to='/deploy_react_app_github_pages_vercel'>Subscribe to the newsletter</Link></li>
                </ul>
                <svg className="line" xmlns="http://www.w3.org/2000/svg" width="254" height="1" viewBox="0 0 254 1" fill="none">
                    <line y1="0.5" x2="256" y2="0.5" stroke="#937DC2" />
                </svg>
                <div className="darklight">
                    {theme == 'light' ? <img onClick={() => {toggle_mode()}} src={moon}/> : <img onClick={() => {toggle_mode()}} src={light} />}
                    <p>{theme == 'light' ? "dark mood" : "light mood"}</p>
                    <div onClick={() => {
                        toggle_mode()
                    }} className="switch">
                        <ReactSwitch />
                    </div>
                </div>
            </div>
            <svg onClick={() => {
                setstate(!state)
            }} className="slid" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 6H20M4 12H20M4 18H20" stroke="#937DC2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </div>
    )
}

export default Nav