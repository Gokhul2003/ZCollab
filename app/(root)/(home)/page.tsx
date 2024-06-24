import React from 'react'
import MeetingTypeList from '@/components/MeetingTypeList';
const page = () => {
  const now=new Date();
  // const time=now.toLocaleTimeString('en-us',{hour:'2-digit', minute:'2-digit'})
  const date=(new Intl.DateTimeFormat('en-us',{dateStyle:'full'})).format(now)
  const options: Intl.DateTimeFormatOptions = { 
    hour: '2-digit', 
    minute: '2-digit', 
    timeZone: 'Asia/Kolkata' 
  };
  const timeInIndia = now.toLocaleTimeString('en-IN', options);
  return (
    <section className="flex size-full flex-col gap-5 text-white">
    <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover"/*bg-hero defined in tailwind css config */>
      <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
        <h2 className="glassmorphism max-w-[273px] rounded py-2 text-center text-base font-normal">
        ZCollab is your all-in-one solution 😀..
        </h2>
        <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold lg:text-7xl">{timeInIndia}</h1>
        <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
        </div>
      </div>
    </div>
    <MeetingTypeList />

   </section>
  )
}

export default page
