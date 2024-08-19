import React from 'react';
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaEnvelope, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import 'animate.css/animate.min.css'


export default function Home({onclick}){

    const FAXTwitter = () =>{
        return(
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='20px' height='20px' fill='#E0F7FA' className="hover:text-blue-500"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
        )
    }
    return(
    <>
        <div className="h-screen w-full flex flex-row justify-between items-center px-[8%]">
            <div className="w-[50%] flex flex-col justify-center gap-7 ml-24 mb-32 animate__animated animate__fadeInLeft">
                <h1 className="text-left text-5xl font-bold tracking-wider">Felix Akojenu (Garrison)</h1>
                <p className='text-3xl animate__animated animate__pulse animate__infinite pl-4'>An Aspiring Software Engineer</p>
                <ul className="w-[50%] text-lg flex flex-row justify-between p-0">
                    <div className="transition duration-300 ease-in-out transform hover:scale-500">
                        <a href="https://x.com/FelixAkojenu?s=09"><FAXTwitter /></a>
                    </div>
                    <div className="transform hover:scale-200 transition duration-300">
                        <a href="https://www.instagram.com/akojenu_felix?igsh=bjU0MGxoMWtpOG91" className='no-color hover:text-pink-500'><FaInstagram size={20} /></a>
                    </div>
                    <div className="transition duration-300 ease-in-out transform hover:scale-105">
                        <a href="https://www.linkedin.com/in/felix-akojenu" className='no-color hover:text-blue-500'><FaLinkedin size={20} /></a>
                    </div>
                    <div className="transition duration-300 ease-in-out transform hover:scale-105">
                        <a href="https://api.whatsapp.com/send?phone=2349033777308&text=Hi%20there%2C%0AYou%27ve%20reached%20Felix.%20Nice%20to%20meet%20you%0A%0AWhat%20do%20you%20want%3F%F0%9F%98%80" className='no-color hover:text-green-500'><FaWhatsapp size={20} /></a>
                    </div>
                </ul>
            </div>
            <nav className='w-[100px] h-[40%] mr-5 mb-10 animate__animated animate__fadeInRight'>
                <ul className="h-[80%] text-lg flex space-y-4 flex-col justify-between">
                    <div className="p-2 hover:text-blue-500" onClick={()=>onclick('home')}>
                        <FaHome size={27} />
                    </div>
                    <div className="p-2 hover:text-blue-500" onClick={()=>onclick('about')}>
                        <FaUser size={27} />
                    </div>
                    <div className="p-2 hover:text-blue-500" onClick={()=>onclick('resume')}>
                        <FaFileAlt size={27}  />
                    </div>
                    <div className="p-2 hover:text-blue-500" onClick={()=>onclick('portfolio')}>
                        <FaBriefcase size={27} />
                    </div>
                    <div className="p-2 hover:text-blue-500" onClick={()=>onclick('contact')}>
                        <FaEnvelope size={27} />
                    </div>
                </ul>
            </nav>
        </div>

    </>
    )
}