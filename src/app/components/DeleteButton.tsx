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
        await deleteArticles(id);
        router.push("/");
        router.refresh();
    }
  return (
    <div className='bg-red-500 hover:bg-red-600 rounded-md px-5 py-2 inline cursor-pointer' onClick={deleteClick}>削除</div>
  )
}

export default DeleteButton