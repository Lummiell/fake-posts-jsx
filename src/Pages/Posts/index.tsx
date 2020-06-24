import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { Link } from 'react-router-dom';
interface Grupo{
    userid:number,
    id:number,
    title:string,
    body:string
}
const Posts = () =>{
    const [Posts,setPosts] = useState<Grupo[]>([]);
    useEffect(()=>{
        api.get('/posts').then(res=>{
            setPosts(res.data)
        })
    },[])
    return <div>
        <h1>
            Listagem de Posts
        </h1>
        <ul style={{listStyle:'none'}}>
            {Posts.map(post=>{
                return(
                <li 
                key={post.id}
                >
                <b>{post.id}º</b>: <Link to={`/Posts/${post.id}`}> {post.title}</Link>
                </li>)
            })}
        </ul>
    </div>
}
export default Posts;