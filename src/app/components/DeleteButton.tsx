"use client";
import { deleteArticles } from '@/blogAPI';
import { useRouter } from 'next/navigation';
import React from 'react'


type DeleteButton ={
    id:string;
}

const DeleteButton = ({id}:DeleteButton) => {
    const router = useRouter();
    const deleteClick = async()=>{
       /*  await deleteArticles(id); */

        const API_URL = process.env.NEXT_PUBLIC_API_URL;
        await fetch(`${API_URL}/api/blog/${id}`,{
          method:"DELETE",
        });

        router.push("/");
        router.refresh();
    }
  return (
    <div className='bg-red-500 hover:bg-red-600 rounded-md px-5 py-2 inline cursor-pointer' onClick={deleteClick}>削除</div>
  )
}

export default DeleteButton