import React ,{use, useState} from 'react'
import propTypes from 'prop-types'


export default function TextForm(props) {
  
  // const [myStyle, setMyStyle] = useState({
  //   backgroundColor: 'white',
  //   color: 'black' 
  // })

  // const [btntext,setBtnText] = useState('enable dark  mode')  
  // const handledarkmode = () => {
  //   if (myStyle.color === 'white') {
  //       setMyStyle({
  //           backgroundColor: 'white',
  //           color: 'black'
  //       })
  //       setBtnText('enable dark mode')
  //   } else {
  //       setMyStyle({
  //           backgroundColor: 'black',
  //           color: 'white'
  //       })
  //       setBtnText('enable light mode')
  //   }
  // }

    const handleupperclick = () => { 
        console.log("upper case was clicked")
        let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("upper case was changed","success");
    }
const handleOnchange = (event) => { 
    console.log("on change")
    setText(event.target.value)
}
const handlelowercase = () => {
    console.log("lower case was clicked")
    let newText = text.toLowerCase();
    setText(newText)
   props.showAlert("lower case was changed","success");
}
const handleclear = () => {
    console.log("clear was clicked")
    let newText = '';
    setText(newText)
    props.showAlert("text was cleared","success");
}
const copytext = () => {  
    console.log("copy was clicked")
    let text = document.getElementById("mybox")
    text.select()
    navigator.clipboard.writeText(text.value)
}
const removespace = () => {
    console.log("remove space was clicked")
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("extra space was removed","success");
}



const [text, setText] = useState('enter text here')
  return (<>
    <div className='container'>
  
  <div className="form-group">

    <label htmlFor="exampleFormControlTextarea1">{props.heading}</label>
    <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="8"></textarea>
  </div>
  <button type="button" onClick={handleupperclick} className="btn btn-primary mx-2">Convert to UpperCase</button>
<button type="button"onClick={handlelowercase} className="btn btn-primary mx-2">Convert to LowerCase</button>
  <button type="button" onClick={handleclear} className="btn btn-primary mx-2">Clear Text</button>
    <button type="button" onClick={copytext} className="btn btn-primary mx-2">Copy Text</button>
  <button type="button" onClick={removespace} className="btn btn-primary mx-2">Remove Extra Space</button>
    </div>
<div className="container" >
  <h1>Your text summary</h1>
  <p>{text.split(" ").length}words & {text.length} characters</p>
  <p>{0.008 *text.split(" ").length}Time required to read</p>
  <h2>Preview</h2>
  <p>{text}</p>
  
  {/* <button type="button"  onClick={handledarkmode} className="btn btn-primary">{btntext}</button> */}
</div>


</>
  )
}
