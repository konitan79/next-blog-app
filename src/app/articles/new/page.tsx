import React from 'react'

const CreateBlogpage = () => {
  return (
    <div className='min-h-screen py-8 px-4 md:px-12'>
        <h2 className='text-2xl font-bold mb-4'>ブログ新規作成</h2>

        <form className='bg-slate-200 rounded p-6 shadow-lg'>
            <div className='mb-4'>
                <label className='text-gray-700 font-bold mb-2 text-sm'>URL</label>
                <input type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' />
            </div>

            <div className='mb-4'>
                <label className='text-gray-700 font-bold mb-2 text-sm'>タイトル</label>
                <input type="text" className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' />
            </div>

            <div className='mb-4'>
                <label className='text-gray-700 font-bold mb-2 text-sm'>本文</label>
                <textarea className='shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none' />
            </div>

            <button type="submit" className='px-4 py-2 rounded-md border bg-orange-300'>Btn</button>
        </form>
    </div>
  )
}

export default CreateBlogpage