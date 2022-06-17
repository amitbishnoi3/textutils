import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert-box w-full p-4 ${props.mode==='light'?'bg-slate-300':'bg-gray-800'}`} >
        <span className='text-green-700'> {props.alert.type} : {props.alert.message} </span> 
    </div>
  )
}
