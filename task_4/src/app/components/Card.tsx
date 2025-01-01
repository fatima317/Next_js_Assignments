import React from 'react';
import Image from 'next/image';

interface Tprops{
  name:string;
  rollno:number;
  day:string;
  imageSrc:string;
}
const Card = (props:Tprops) => {
  return (
    <div className='bg-slate-600 rounded-lg shadow-lg font-bold md:w-1/2 m-4'>
      <h1 className='text-xl p-5 text-center text-white'>Student ID Card</h1> 
      <div className='bg-white relative bottom-3'><br />
      <Image src={props.imageSrc} alt="profile picture" width={90}height={90}
          className="bg-transparent relative left-72 top-6 border-slate-600 border-l-2 border-r-2 border-t-2 border-b-2 "/>
          <div className='relative bottom-16 left-10'>
        <h1 className='mb-2 '>Name: {props.name}</h1>
        <h2 className='mb-2'>Roll No: {props.rollno}</h2>
        <h3 className=''>Day: {props.day}</h3>
    <div className='bg-slate-600 m-5'></div>
    </div>
    </div>
    </div>
  )
}
export  default Card;

