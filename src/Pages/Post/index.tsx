import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import api from '../../services/api'
interface Comentario{
    postId:number,
    id:number,
    name:string,
    email:string,
    body:string
}
const Post = () =>{
    let { id } = useParams();
    const [comentarios,setComentarios] = useState<Comentario[]>([]);
    useEffect(()=>{
        api.get(`/comments?postId=${id}`).then(res=>{
            setComentarios(res.data)
        })
    },[])
    
    return <div>
        <h1>Comentários do post {id}</h1>
        <Link to='/Posts'>Voltar à listagem de posts</Link>
    <ul style={{listStyle:'none'}}>

        {comentarios.map(comentario=>{
            return(
            <li 
            key={comentario.id}
            style={{paddingBottom:'30px',}}
            >
            <b>{comentario.name} ({comentario.email}):</b><br/>
            {comentario.body}
            </li>)
        })}
    </ul>
</div>
}
export default Post;