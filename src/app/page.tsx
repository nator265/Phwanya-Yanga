"use client"
import Image from "next/image";
import React from "react"
import Header from "./components/header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="">
      <div className="h-[80vh] w-[100wh] md:hidden overflow-hidden">
        <motion.div 
        className="border h-[80vh] w-[100wh] overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: 'url(/burger.jpg)' }}
        initial={{ opacity: 0, }} 
        animate={{ opacity: 1, }} 
        transition={{ duration: 1, ease: "easeOut" }}>
          <Header />
          <div className='text-white backdrop-blur-[3px] h-[100%] w-[100%]'>
            <div className=' w-[100%] h-[50%] flex justify-center items-center'>
              <div className='flex justify-center items-center w-[100%]'>
                <div className='border w-[60%] p-2 mr-2'>
                  Burger with fries...
                </div>
                <div>
                  Search
                </div>
              </div>
            </div>
            <div className='mt-10 p-5 bg-[#0000006b] backdrop-blur-md w-[100%] h-[50%] text-center'>
              <h2>
                Hot Deals
              </h2> 
            </div>
          </div>
        </motion.div>
      </div>
      <div className='h-[90vh] w-[100wh] hidden md:flex overflow-hidden'>
        <motion.div 
        className="border h-[90vh] w-[100%] overflow-hidden bg-cover bg-center" 
        style={{ backgroundImage: 'url(/burger.jpg)' }}
        initial={{ opacity: 0, }} 
        animate={{ opacity: 1, }} 
        transition={{ duration: 1, ease: "easeOut" }}>
          <Header /> 
        </motion.div>
      </div>
      
    </main>
  );
}
