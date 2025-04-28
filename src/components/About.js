import React, {useState} from 'react'

export default function About() {

     const [myStyle, setMyStyle] = useState({

        backgroundColor: 'white',
        color: 'black' 
     })
const [btntext,setBtnText] = useState('enable dark  mode')
    const handledarkmode = () => {  
        if (myStyle.color === 'white') {
            setMyStyle({
                backgroundColor: 'white',
                color: 'black'
            })
            setBtnText('enable dark mode')
        } else {
            setMyStyle({
                backgroundColor: 'black',
                color: 'white'
            })
            setBtnText('enable light mode')
        }
    }
        
  return (<>
    <div className='container my-3' style={myStyle}>
        <h1>About Us</h1>
        <div className="media">
  <img src="..." className="mr-3" alt="..."/>
  <div class="media-body">
    <h5 className="mt-0">Media heading</h5>
    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
  </div>
</div>
      <div className="container"> 
        <button type="button"  onClick={handledarkmode} className="btn btn-primary">{btntext}</button>
      </div>
    </div>
    </>
  )
}
