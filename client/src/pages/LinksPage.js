import React,{useState,useContext,useCallback,useEffect} from 'react'
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../Components/Loader";
//import {LinkCard} from "../Components/LinkCard";
import {LinksList} from "../Components/LinksList";

export const LinksPage = () => {
    const [links,setLinks]=useState([])
    const {loading,request}=useHttp()
    const {token}=useContext(AuthContext)
debugger
    const fetchLinks=useCallback(async ()=>{
        try {
            const fetched= await request('/api/link','GET',null,{
                Authorization:`Bearer ${token}`
            })
            setLinks(fetched)
        }catch (e) {

        }
    },[token,request])
    useEffect(()=>{
        fetchLinks()
    },[fetchLinks])
    if(loading){
        return <Loader/>
    }
    return (
        <>
            {!loading  && <LinksList links={links}/>}
        </>
    )
}