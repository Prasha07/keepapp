import React from "react";

const Footer =() =>{
    const year=new Date().getFullYear();
    return(
        <>
            <footer>
            {/* hum chahte hai  copyright k bad jo current year chl rha wo aaye  */}
                <h4>Copyright © {year}</h4>
                <p>All rights reserved</p>
            </footer>
        </>
    )
}
export default Footer;