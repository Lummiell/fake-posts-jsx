import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom';
import {ItemListaPost,ListaPost} from './styles'
interface Grupo{
    userid:number,
    id:number,
    title:string,
    body:string
}
const Posts = () =>{
    const history = useHistory()
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
        <ListaPost >
            {Posts.map(post=>{
                return(
                <ItemListaPost 
                onClick={()=>{
                    history.push(`/Posts/${post.id}`)
                }}
                key={post.id}
                >
                <b>{post.id}</b>: {post.title}
                </ItemListaPost>)
            })}
        </ListaPost>
    </div>
}
export default Posts;