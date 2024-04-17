"use client";

import { createArticles } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const CreateBlogpage = () => {
    const router = useRouter();
    const [id,setId] = useState<string>("");
    const [title,setTitle] = useState<string>("");
    const [content,setContent] = useState<string>("");
    const [loading,setLoading] = useState<boolean>(false);

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        setLoading(true);
        /* await createArticles(id,title,content); */

        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        await fetch(`${API_URL}/api/create`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({id,title,content}),
        });

        setLoading(false);
        router.push("/");
        router.refresh();
    }
  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
        <h2 className='text-2xl font-bold mb-4'>ブログ新規作成</h2>

        <form className='bg-slate-200 rounded p-6 shadow-lg' onSubmit={handleSubmit}>
            <div className='mb-4'>
                <label className='text-gray-700 font-bold mb-2 text-sm'>URL</label>
                <input type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' onChange={(e) => setId(e.target.value)}/>

            </div>

            <div className='mb-4'>
                <label className='text-gray-700 font-bold mb-2 text-sm'>タイトル</label>
                <input type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' onChange={(e)=>setTitle(e.target.value)}/>
            </div>

            <div className='mb-4'>
                <label className='text-gray-700 font-bold mb-2 text-sm'>本文</label>
                <textarea className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' onChange={(e)=>setContent(e.target.value)}/>
            </div>

            <button type="submit" className={`px-4 py-2 rounded-md border ${loading ? "bg-orange-300 cursor-not-allowed":"bg-orange-400 hover:bg-orange-500"}`} disabled={loading}>Btn</button>
        </form>
    </div>
  )
}

export default CreateBlogpage