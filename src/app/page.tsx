"use client"
import Image from "next/image";
import React from "react"
import Header from "./components/header";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="">
      <Header />

      <div className="h-[90vh] w-[100wh] md:hidden overflow-hidden">
        <div className="border h-[90vh] w-[100wh] overflow-hidden relative top-0 z-1">
          <Image
          src="/burger.jpg"
          alt="Juicy Burger"
          layout="responsive"
          height={200}
          width={200}
          objectFit="cover"
          quality={100}
          /> 
        </div>
      </div>

      <div className='h-[90vh] w-[100wh] hidden md:flex overflow-hidden'>
        <motion.div 
          className="border h-[90vh] w-[100%] overflow-hidden bg-cover bg-center" 
          style={{ backgroundImage: 'url(/burger.jpg)' }}
          initial={{ opacity: 0, x: -100 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >

        </motion.div>
      </div>
    </main>
  );
}
