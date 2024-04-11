import { notFound } from "next/navigation";
import { Article } from "./types"

export const getAllArticles = async():Promise<Article[]>=> {
    const res = await fetch('http://localhost:3001/posts',{cache:"no-store"});
    if(!res.ok){
    throw new Error('エラーが発生しました。');
    }

    await new Promise((resolve)=>setTimeout(resolve,1500));

    const Articles = await res.json();
    return Articles;
}

export const getDetailArticles = async(id:string):Promise<Article>=> {
    const res = await fetch(`http://localhost:3001/posts/${id}`,{
        next:{revalidate:60},
    });
    if(res.status === 404){
        notFound();
    }
    if(!res.ok){
    throw new Error('エラーが発生しました。');
    }

    await new Promise((resolve)=>setTimeout(resolve,1000));

    const Articles = await res.json();
    return Articles;
}