import { rejects } from 'assert';
import { resolve } from 'path';
import React from 'react'

const testFunc = async()=>{
    await callFunc('1回目');
    await callFunc('2回目');
    await callFunc('3回目');
}

const callFunc = (cnt:any)=>{
    return new Promise((resolve:any)=>{
        setTimeout(()=>{
            console.log(cnt);
            resolve();
        },5000); 
    });
};
testFunc();
console.log("4回目");

const page = () => {
  return (
    <div>page</div>
  )
}

export default page