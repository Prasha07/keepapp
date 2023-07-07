import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// note rkhe h taki current jo type kar rhe h jo current note bna rhe
// usko add kr ske array me jo ki pura prev store kiya h notes phle se
const Note =(props) =>{
    const deleteNote =() =>{
        // id bheje h uska jisko del krna h id me index hai to pta chl jayega kon sa element (note) del krna hai array ka
        props.deleteitem(props.id);
    }
   return (
    <>
        <div className="note">
            <h1> {props.title}</h1>
            <br />
            <p>{props.content}</p>
            <button  className="btn" onClick={deleteNote}>
            <DeleteOutlineIcon className="deleteicon"/> 
            </button>
        </div>
    </>
   )
}
export default Note;