import React, {useState} from 'react'

TextForm.defaultProps ={
    heading: "Enter text here to analyze",
    thanksTitle: "** Thank you for using TextUtils **"
}

export default function TextForm(props) {
    
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleUpClick = () => {        
        let newText = text.toUpperCase();
        setText(newText);
        if(text.length>0){
            props.showAlert("converted to uppercase","Success");
        }else{
            props.showAlert("Type anything to convert in uppercase","Warning");
        }
    }
    const handleLowerClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        if(text.length>0){
            props.showAlert("converted to lowercase","Success");
        }else{
            props.showAlert("Type anything to convert in lowercase","Warning");
        }
    }
    const handleWhiteSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        if(text.length>0){
            props.showAlert("White space removed","Success");
        }else{
            props.showAlert("type anything for remove white space","Warning");
        }
    }
    const handleClearText = () => {
        setText("");        
    }
    const handleCopyText = () => {
        let text = document.getElementById('textForm');
        text.select();
        navigator.clipboard.writeText(text.value);
        if(text.value.length>0){
            props.showAlert("Text copied","Success");
        }else{
            props.showAlert("Nothing to copy","Warning");
        }
    }
    const [text, setText] = useState("");
  return (
    <div className={`w-11/12 md:w-3/4 mx-auto  ${props.mode==='light'?'text-black':'text-white'}`} >
        
        <h1 className='text-2xl font-semibold my-5 mr-4 md:inline-block'>{props.heading}</h1>
        <span className='block text-center md:inline my-3 text-xl font-semibold'>{text.length>0?props.thanksTitle:" "} </span>
        <textarea className={`border border-gray-400 resize-none w-full ${props.mode==='light'?'bg-white text-black':'bg-gray-900 text-white'}`} value={text} id="textForm" cols="50" rows="5" onChange={handleOnChange}></textarea>
        <div className='flex gap-4 flex-wrap mt-4'>
        <button onClick={handleUpClick} className='bg-blue-600 py-2 px-5  text-white rounded-md'>Convert to uppercase</button>

        <button onClick={handleLowerClick} className='bg-blue-600 py-2 px-5  text-white rounded-md'>Convert to lowercase</button>

        <button onClick={handleWhiteSpace} className='bg-blue-600 py-2 px-5 text-white rounded-md'>Remove white space</button>

        <button onClick={handleClearText} className='bg-blue-600 py-2 px-5  text-white rounded-md'>Clear Text</button>
        <button onClick={handleCopyText} className='bg-blue-600 py-2 px-5  text-white rounded-md'>Copy Text</button>
        </div>
       <div className='my-4 md:my-8'>
            <h1 className='text-3xl font-semibold'>Text Summary</h1>
            <div className=''>
                <span className='font-medium text-base mr-4'>{text.split(" ").length} Words</span> 
                <span className='font-medium text-base'>{text.length} Characters</span>
                {/* <p> {0.08 * text.split(" ").length}Mins to read</p> */}
                <h2 className='my-3 text-2xl font-medium'>Preview</h2>
                <p className='text-base font-normal'>{text.length>0?text:"Enter your text in the above input field to preview the text here"}</p>
            </div>
       </div>
    </div>
  )
}
