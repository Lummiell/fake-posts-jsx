import React from 'react'
import {  Link } from "react-router-dom";

const Landing = () =>{
    return <div style={{width:'5%',margin:' 20% auto'}}>
       <Link to='/Posts'>Ir para posts</Link>
    </div>
}
export default Landing;
