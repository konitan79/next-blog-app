import { Article } from '@/types';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type ArticleListProps = {
    articles:Article[];
}

const ArticleList = ({articles}:ArticleListProps) => {
  return (
    <div>
    <article className='shadow my-4 flex flex-col'>
        <Link href="#" className='hover:opacity-75'>
            <Image
                src="https://source.unsplash.com/collection/1346951/1000×500?sig=5"
                alt=""
                width={1280}
                height={300}
            />
        </Link>

        <div className='bg-white flex flex-col justify-start p-6'>
            <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
            <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-3'>Next.jsの勉強中</Link>
            <p className='text-sm text-slate-900 pb-3'>By Sample,published on 2024/04/04</p>
            <Link href="#" className='text-slate-900 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minima voluptatibus quasi. Eligendi, provident? Asperiores, animi, enim libero aliquam doloribus quis ad voluptatibus totam tempore a dolore ullam voluptatum consequuntur.</Link>
            <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>

    </article>

    <article className='shadow my-4 flex flex-col'>
        <Link href="#" className='hover:opacity-75'>
            <Image
                src="https://source.unsplash.com/collection/1346951/1000×500?sig=7"
                alt=""
                width={1280}
                height={300}
            />
        </Link>

        <div className='bg-white flex flex-col justify-start p-6'>
            <Link href="#" className='text-blue-700 pb-4 font-bold'>Technology</Link>
            <Link href="#" className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-3'>Next.jsの勉強中</Link>
            <p className='text-sm text-slate-900 pb-3'>By Sample,published on 2024/04/04</p>
            <Link href="#" className='text-slate-900 pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minima voluptatibus quasi. Eligendi, provident? Asperiores, animi, enim libero aliquam doloribus quis ad voluptatibus totam tempore a dolore ullam voluptatum consequuntur.</Link>
            <Link href="#" className='text-pink-800 hover:text-black'>続きを読む</Link>
        </div>
    </article>
    </div>
  )
}

export default ArticleList