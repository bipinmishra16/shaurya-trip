"use client";

import Image from "next/image";
import MyImage from "@/public/images.png";
import { motion } from "framer-motion";
import MyAudio from "@/components/MyAudio";

const MyProfile = () => {
  return (
    <>
    <div className="flex flex-col items-center gap-6 rounded-3xl bg-black p-8 text-center md:flex-row md:items-center md:justify-start md:gap-8 md:text-left">
      {/* Image */}
      <div className="relative h-50 w-50">
        {/* Animated Border */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full bg-[conic-gradient(red,orange,yellow,lime,cyan,blue,purple,red)]"
        />

        {/* Black gap between border and image */}
        <div className="absolute inset-[4px] rounded-full bg-black" />

        {/* Image */}
        <div className="absolute inset-[8px] overflow-hidden rounded-full">
          <Image src={MyImage} alt="My Image" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div>
        <h1 className="text-[32px] font-extrabold text-white md:text-5xl">
          My Name is Shaurya
        </h1>
        <p className="mt-0 text-lg text-semibold text-gray-400 md:text-2xl">
          Mango Lassi • Kurkure Momos • Jeera Soda
        </p>
      </div>
      
    </div>
    <MyAudio />
    </>
  );
};

export default MyProfile;
