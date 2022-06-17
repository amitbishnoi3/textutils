import React, { useState } from 'react'

About.defaultProps = {
    heading: "About TextUtils"
}

export default function About(props) {
    const [myStyle, setMyStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })

    const [btntext, setBtnText] = useState("Enable dark mode")
    const toggleMode = () => {
            if(myStyle.color == "black"){
                setMyStyle({
                    color: "white",
                    backgroundColor: "black"
                }) 
                setBtnText("Enable light mode") 
            }else{
                setMyStyle({
                    color: "black",
                    backgroundColor: "white"
                }) 
                setBtnText("Enable dark mode")
            }
    }

    return (
        <div style={myStyle} className='w-1/2 mx-auto border border-gray-400 p-4 mt-7 rounded'>
            <h1 className='font-semibold text-3xl text-center my-5'>{props.heading}</h1>
            <p className='my-5'>
                Welcome to the TextUtils a Text Generator Tool
                A very handy online text tool where you can change between lower case and upper case letters, where you can capitalize, uncapitalize, convert to mix case and transform your text. Explore the options below:
            </p>
            <ul>
                <li>Convert to uppercase</li>
                <li>Convert to lowercase</li>
                <li>remove white space</li>
            </ul>
            <button className='px-5 py-2 bg-blue-400 text-white my-8' onClick={toggleMode}>{btntext}</button>
        </div>
    )
}
