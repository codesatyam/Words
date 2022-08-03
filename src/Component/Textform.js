//import React from 'react'
import React, { useState } from 'react';


export default function Textform(props) {
    const handleUpClick=()=>{
    //  console.log("Clicked  "+ text);
      let newtext=text.toUpperCase();
      setText(newtext)
    }
    const handleOnClick=()=>{
       // console.log("Clicked  "+ text);
        let newtext=text.toLowerCase();
        setText(newtext)
      }

      const handleNumberClick=(text)=>{
        // console.log("Clicked  "+ text);
        var str = text.match(/\d+/g, "")+'';
        var s = str.split(',').join('');
        console.log(s);
        //  setText(s)
       }
       const handleClearClick=()=>{
         setText("");
       }
      // const handleColurBlueClick=()=>{
      //    setTextColor("blue")
      //  }
      //  const handleColurBlackClick=()=>{
      //   setTextColor("black")
      // }
    const handleOnChange=(event)=>{
        console.log("Changed");
       setText(event.target.value);
      }
    // const [textColor, setTextColor] = useState('black');
    const [text, setText] = useState('Enter text here');
   // text='new text'; //wrong way.
   // setText("Enter your details"); //correct way but not work.
  return (
      <>
      <div className='container my-3' style={{color: props.mode==='dark' ? 'white':'black'}} value={text} onChange={handleOnChange}>
       <h4>{props.heading}  </h4>
       <div  className="mb-3" >
         {/* //textColor ; it is used to change colur but not used  */}
       <textarea  className="form-control" style={{color:props.mode==='light' ? 'black':'white' ,backgroundColor: props.mode==='light' ? 'white':'#6c757d'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleOnClick}>Convert to lowercase</button>
       {/* <button className="btn btn-primary mx-2" onClick={handleColurBlueClick}>Blue text</button> */}
       {/* <button className="btn btn-primary mx-2" onClick={handleColurBlackClick}>Black text</button> */}
       <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
       {/* <button className="btn btn-primary mx-2" onClick={handleNumberClick}>Only Num text</button> */}
      </div>
      <div className="conatiner marx" style={{color: props.mode==='dark' ? 'white':'black'}}>
          <h5>Your Text Summery</h5>
          <p>{text.split(" ").length} Words and {text.length} Characters</p>
          <p>{0.008*text.split(" ").length} Minutes to read</p>
          <h5>Preview</h5>
          <p>{text}</p>
      </div>
      </>
  )
}
