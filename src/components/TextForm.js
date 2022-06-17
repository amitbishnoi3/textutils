import React, {useState} from 'react'

TextForm.defaultProps ={
    heading: "Enter text here to analyze"
}

export default function TextForm(props) {
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {        
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleWhiteSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState("");
  return (
    <div className={`w-1/2 mx-auto h-screen ${props.mode==='light'?'text-black':'text-white'}`} >
        
        <h1 className='text-3xl font-semibold my-5'>{props.heading}</h1>
        <textarea className={`border border-gray-400 resize-none w-full ${props.mode==='light'?'bg-white text-black':'bg-[#2a2a2a] text-white'}`} value={text} id="textForm" cols="50" rows="5" onChange={handleOnChange}></textarea>
        <div>
        <button onClick={handleUpClick} className='bg-blue-600 py-2 px-5 mx-2 text-white rounded-md'>Convert to uppercase</button>

        <button onClick={handleLowerClick} className='bg-blue-600 py-2 px-5 mx-2 text-white rounded-md'>Convert to lowercase</button>

        <button onClick={handleWhiteSpace} className='bg-blue-600 py-2 px-5 text-white rounded-md'>Remove white space</button>
        </div>
       <div className='my-8'>
            <h1 className='text-3xl font-semibold'>Text Summary</h1>
            <div className=''>
                <span className='font-medium text-base mr-4'>{text.split(" ").length} Words</span> 
                <span className='font-medium text-base'>{text.length} Characters</span>
                {/* <p> {0.08 * text.split(" ").length}Mins to read</p> */}
                <h2 className='my-3 text-2xl font-medium'>Preview</h2>
                <p className='text-base font-normal'>{text}</p>
            </div>
       </div>
    </div>
  )
}
