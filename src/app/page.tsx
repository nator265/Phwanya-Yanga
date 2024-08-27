"use client"
import Image from "next/image";
import React from "react"
import Header from "./components/header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="border h-[80vh] md:hidden">
        <Image src="/burger-front2.jpg" width={500} height={100} alt="Juicy-Burger" />
      </div>

      <div className='h-[80vh] w-[100wh] hidden md:flex overflow-hidden'>
        <div className="w-[40%] h-[80vh]">

        </div>
        <motion.div 
          className="border h-[80vh] w-[60%] overflow-hidden bg-cover bg-center" 
          style={{ backgroundImage: 'url(/burger-front2.jpg)' }}
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
        {/* Content can go here */}
      </motion.div>
      </div>
    </main>
  );
}
