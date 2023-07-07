import React from "react";

// import to use material ui icons
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
const CreateNote =(props) =>{
    // ye isliye hai taki click krne pe write note hi title aur + ka button show ho
    const[expand,setexpand]=useState(false);

    const[note,setnote]=useState({
        title:"",
        content:"",
    });
    // type krne pe jo bhi type kr rhe title ya content me wo display ho isk liye itemevent fun h
    const inputevent =(event) =>{
    //    const value=event.target.value;
    //    const name=event.target.name;
    // above one is exactly same as
    // simply it is object destructuring form. 
    const {name,value} =event.target;
       setnote((prevdata)=>{
         return {
            ...prevdata,
            // we can do it via if else .see prev lectures
            // agr name title hai to uski value jo hai wo
            // ho jaye change kr k jo kr rhe (onchange  jo value set kr rhe)
            // same for content.
            [name]:value,
         }
       })
    }
    const addevent =()=>{
        // addnote function call ho jayega 
        // note bheje h taki jo bhi cureently type kr k changes la rhe wo sb array me add ho jaye aur visible ho previous notes k sth ye wala bhi + pe
        // click krne pe  
        props.passNote(note);
        // ab jb wo + dbane pe display ho gya to ab hum chahenge ki wapas se placeholder display ho ab dusra note k liye to usk liye 
        setnote({
            title:"",
            content:"",
        })
    };
    const expandit =() =>{
        setexpand(true);
    }
    const backtonormal =() =>{
        setexpand(false);
    }
    return(
      <>
        <div className="main_note" onDoubleClick={backtonormal}>
            <form>
            {/* autocomplete off hai taki jo likhe the phle uska pta na chle */}
            {/* agr expand true ho to hi ye dikhe wrna na dikhe */}
            {/* Ternary operator used */}
              { expand?
               <input type="text" 
               value={note.title}
               name="title"
               onChange={inputevent}
               placeholder="title" 
               autoComplete="off"></input>:null}

               <textarea rows="" column="" 
                value={note.content}
                name="content"
                onChange={inputevent}
                placeholder="Add a note..."
                onClick={expandit}
                ></textarea>
                {/* ternary operator used agr expand ki value true hui to hi buttom show hga */}
                {expand?
               <Button className="buttonn"onClick={addevent}>
                <AddIcon className="plus_sign"/>
               </Button>:null}
            </form>
        </div>
      </>
    )
}
export default CreateNote;