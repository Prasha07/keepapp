import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import Note from "./Note";
import { useState } from "react";
const App=() =>{
  const [additem,setadditem]=useState([]);
  // note isliye rkhe hai taki wo cureent note aceess kr ske jispe likh rhe (usetate wala note hai)
  const addnote =(note) =>{
  //  array me store kra k note ko ek ek kr k display krana h jitne element(notes) ho array me sb button click krne pe
   setadditem((prevdata) =>{
    return [...prevdata,note]; 
   });
  }
  const ondelete =(id) =>{
     setadditem((olddata) =>
     olddata.filter((currdata,index)=>{
      // mtlb un sbhi element (note) ko dikhao array k jiska index given id se match nhi kr rha
      // sirf ek index aur id match krega wo hi del krna hai tomfilter method k through wo element nhi dikhega ab (del ho gya)
      
        return index !== id;
     })
     );
  };
return (
  <>
     <Header/>
     {/* ye prop bhej rhe taki click krne pe button pe note acess kr ske createnote bhi  */}
     <CreateNote passNote={addnote}/>
     {/* array.map(functon(currval,index,arr),thisval) */}
      {additem.map((val,index) =>{
        return <Note 
        key={index} 
        id={index}
        title={val.title}
        content={val.content}
        // ab ek particuklar ko del krna h to array me store h notes to index ki help se hi krnge ofcourse
        deleteitem={ondelete} />
      })}
     <Footer/>
  </>
)
}
export default App;