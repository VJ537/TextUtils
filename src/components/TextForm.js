import React,{useState} from 'react'

export default function TextForm(props) {
   const handleUpClick= ()=>{
console.log("Uppercase was clicked" + text)
let newText = text.toUpperCase();
setText(newText);
props.showAlert("All words converted to uper case","success");
    }
  const  handleLowClick = ()=>{
    let newText = text.toLowerCase();
setText(newText)
props.showAlert("All words converted to lower case","success");
  }
  const  handleClearClick = ()=>{
    let newText = ("");
setText(newText)
props.showAlert("All words clear","success");
  }
    const handleOnChange= (event)=>{
console.log("On Change")
setText(event.target.value);
    }
 const handleCopy = ()=>{
 //var text = document.getElementById("myBox")
 //text.select();
 //text.setSelectionRange(0,9999);
 navigator.clipboard.writeText(text);
 //document.getSelection().removeAllRanges();
 props.showAlert("Copie to clipboard","success");
    }
    const handleSpaces = ()=>{
      let newText =text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("All extra spaces  removed","success");
    }
    const [text, setText] = useState("")
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>
        {props.heading}  
      </h1>
<div className="mb-3" >
  
  <textarea className="form-control" value= {text} placeholder="Enter text here" style={{backgroundColor:props.mode==='dark'?'#202c52':'white',color:props.mode==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert To Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert To Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSpaces}>RemoveSpace</button>
    </div>
    <div className="container my-2" style={{color:props.mode==='dark'?'white':'black'}} >
        <h1>Your text summary</h1>
        <p>{text.split (/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split (" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h3>Preview  </h3>
        <p>{text} </p>
    </div>
    </> 
  )
  
}
