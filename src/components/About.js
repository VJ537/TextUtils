import React, { useState } from 'react'

export default function About(props) {
    const [myStyle,setMyStyle]=useState({
        color:'black',
        backgroundColor:'white'
    })
    const [btnText, setBtnText]= useState('Enable Dark Mode')
  const  toggleStyle = ()=>{
if(myStyle.color== 'black'){
    setMyStyle({
        color:'white',
        backgroundColor:'black'
    })
    setBtnText('Enable Light Mode')
}
else{
    setMyStyle({
        color:'black',
        backgroundColor:'white'
    
})
setBtnText('Enable Dark Mode')
    }
}

  return (
    <div className='container my-3' style={{backgroundColor:props.mode==='dark'?'#202c52':'white',color:props.mode==='dark'?'white':'black'}}>
        <h2>About Us</h2>
      
<div className='my-3'>
    <button type="button" className="btn btn-primary " onClick={toggleStyle}>{btnText}</button>
</div>

    </div>
  )
}
