import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom';
import {ItemListaPost,ListaPost,PostsContainter} from './styles'
import { SyncLoader } from "react-spinners";
interface Grupo{
    userid:number,
    id:number,
    title:string,
    body:string
}

const Posts = () =>{
    const history = useHistory()
    const [Posts,setPosts] = useState<Grupo[]>([]);
    const [carregando,setCarregando] = useState(true);
    
    useEffect(()=>{
        setCarregando(true)
        api.get('/posts').then(res=>{
            setPosts(res.data)
            setCarregando(false)
        })
    },[])
    function RenderLista(){
        return <ListaPost >
            {Posts.map(post=>{
                return(
                <ItemListaPost 
                onClick={()=>{
                    history.push(`/Posts/${post.id}`)
                }}
                key={post.id}
                >
                <b>{post.title}</b><br/>{post.body}
                </ItemListaPost>)
            })}
        </ListaPost>
    }
    return <PostsContainter>
        <h1>
            Listagem de Posts
        </h1>
        <p>Clique para ver comentários</p>
        {carregando ? <SyncLoader color='#110001'/>:<RenderLista/>}
    </PostsContainter>
}
export default Posts;