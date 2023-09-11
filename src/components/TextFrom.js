import React, { useState } from 'react';


export default function TextFrom(props) {


   

    const handleUpclick = () => {
        alert("upper case was clicked")
        setText("you have click in button");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoclick = () => {
        // alert("upper case was clicked")
        setText("you have click in button");
        let newText = text.toLowerCase();
        setText(newText);

    }

    const copyclick = () => {
        // alert ("sure? you have to be copy this text");
        var text = document.getElementById("mybox")
        text.select();
        navigator.clipboard.writeText(text.value)

    }
    const clearSpaceclick = () => {


        var text = document.getElementById("mybox")
        text.value = ' ';


    }
    const handleOnChonge = (event) => {
        // alert("upper case was clicked")
        setText(event.target.value)


    }



    const [text, setText] = useState("enter txt here");

    return (
        <>
            <div className='container'style={{color:props.mode==="dark"?"white":"black"}} >
                <h2>{props.heading}</h2>
                <div className="dudun mb-3" >
                    {/* <label for="mybox" class="form-label"> text area</label> */}
                    <textarea className="form-control" id="mybox" style={{backgroundColor :props.mode==="dark"?"#302f3a":"white" ,color:props.mode==="dark"?"white":"black"}} onChange={handleOnChonge} rows="8" coloum="9" value={text}></textarea>
                </div>
                <div class="my-2">
                    <button className="btn btn-primary  mx-2 " onClick={handleUpclick}   >convert to upper case</button>
                    <button className="btn btn-primary mx-2" onClick={handleLoclick}   >convert to lower case</button>
                    <button className="btn btn-primary mx-2" onClick={clearSpaceclick}   >clear text</button>
                    <button className="btn btn-primary mx-2" onClick={copyclick}   >copy text</button>
                </div>

            </div>
            <div style={{color:props.mode==="dark"?"white":"black"}} className="container my-2">

                <h1>your text summary</h1>
                <p>{text.split(" ").length} words and {text.length}cracters</p>
                <p>{0.008 * text.split(" ").length}  minuites read</p>


                <h2 style={{ color :  props.mode==="dark"?"white":"black"}} >preview</h2>

                <p>{text.length>0?text:"Enter somthing in the text box to previews"}</p>





            </div>






        </>
    )
}
