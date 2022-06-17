import React from 'react'


Header.defaultProps = {
  logoText: "TextUtils",
  menuItem1: "Home",
  menuItem2: "About",
}

export default function Header(props) {
  return (
    <header className={`${props.mode === 'light' ? 'bg-gray-100 text-black' : 'bg-gray-900 text-white'} `}>
      <nav className='flex justify-between p-6 items-baseline'>
        <div className="logo">
          <span className='text-2xl'>{props.logoText}</span>
        </div>
        <ul className='flex gap-7 basis-8/12 font-bold'>
          <li className=''><a href="">{props.menuItem1}</a></li>
          <li className=''><a href="">{props.menuItem2}</a></li>
          {/* <li className=''><a href="/">{props.menuItem3}</a></li> */}
        </ul>        
        <div>
          <label className="switch" htmlFor="modeToggle">          
            <input id="modeToggle"  type="checkbox" onClick={props.toggleMode}/>            
            <span className="slider"></span>
          </label>
          <span className='ml-4'>
          {`${props.mode === 'light' ? 'Enable dark mode' : 'Enable light mode'}`}
          </span>
          
        </div>
      </nav>
    </header>
  )
}
