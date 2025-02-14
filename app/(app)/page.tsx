"use client";

import Lenis from "lenis";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";

const landingContent = {
  section_one: {
    mini_title: "สวัสดี! 👋",
    title: "ไทยเทลส์",
    subtitle: "คอนเวนชั่น",
    description:
      "พวกเราคืองาน Furry Convention ที่จัดขึ้นโดยทีมงานอาสาสมัครชาวไทยที่มีใจรักในตัวละคร Furry มาตั้งแต่ปี 2015 โดยมุ่งหวังที่จะสร้างพื้นที่ให้ผู้คนในชุมชนได้มีพื้นที่พบปะแลกเปลี่ยน แบ่งปันจินตนาการ และร่วมสร้างสรรค์ผลงานศิลปะที่เป็นเอกลักษณ์",
  },
  section_two: {
    title: "เราตั้งใจจะสร้างพื้นที่ให้กับทุกคนได้เป็นตัวของตัวเอง",
    description:
      "ที่งานของเรา คุณจะได้เข้าร่วมเวิร์คช็อปและสัมมนาที่หลากหลาย ตั้งแต่การแสดงและการเคลื่อนไหว การสร้างคอสตูมและเฟอร์สูท ไปจนถึงการวาดภาพ ออกแบบ เขียนเรื่อง และทำแอนิเมชั่น นอกจากนี้ยังมีงานแสดงผลงานศิลปะสุดพิเศษที่รวบรวมผลงานชั้นเยี่ยมจากศิลปินมากมาย ให้คุณได้เลือกชมและเป็นเจ้าของ พร้อมไฮไลท์สำคัญอย่างขบวนพาเหรดเฟอร์สูทสุดอลังการที่รวมตัวคอสเพลย์เฟอร์สูทกว่า 1,000 ชุด และกิจกรรมสนุกๆ อีกมากมายที่รอให้คุณมาร่วมสัมผัสประสบการณ์!",
  },
};

export default function Home() {
  const { section_one, section_two } = landingContent;
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 30]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className='flex flex-col min-h-screen w-full items-center mt-[20vh] mb-[20vh]'>
      <div className='flex flex-col justify-center w-full max-w-screen-xl px-[2rem] lg:px-[10rem] h-full ]'>
        <motion.div
          style={{ marginBottom: "1rem" }}
          animate={{
            fontSize: ["5rem", "5rem", "5rem", "2rem"],
            opacity: [0, 1, 1, 1],
            y: ["280%", "200%", "200%", "0%"],
          }}
          transition={{
            duration: 2,
            times: [0, 0.3, 0.6, 1],
            ease: "easeInOut",
            type: "keyframes",
          }}
        >
          <h1 className='leading-none font-bold'>{section_one.mini_title}</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease: "easeInOut" }}
        >
          <h1 className='text-[5rem] lg:text-[6rem] leading-none font-bold'>
            {section_one.title}
          </h1>

          <span className='text-[5rem] lg:text-[6rem] leading-none font-bold'>
            {section_one.subtitle}
          </span>
          <p className='text-[1.3rem] lg:text-[1.5rem] max-w-[90vh] w-full text-left leading-normal mt-4'>
            {section_one.description}
          </p>
          <div className='flex flex-row gap-4 mt-8'>
            <button className='border px-4 py-2 rounded-lg'>
              Our Team Members
            </button>
            <button className='border px-4 py-2 rounded-lg'>Join us?</button>
          </div>
        </motion.div>
      </div>
      <motion.div
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.9, ease: "easeInOut" }}
        className='flex flex-col w-full h-[70vh] mt-[15vh] mb-[15vh]'
      >
        <motion.div
          style={{ y, scale: 1.2 }}
          className='fixed top-0 left-0 w-full h-full pointer-events-none'
        >
          <Image
            src='/img/2025.jpg'
            alt='furry convention'
            quality={100}
            fill
            className='object-cover'
          />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.9, ease: "easeInOut" }}
        className='flex flex-col justify-center w-full max-w-screen-xl px-[2rem] lg:px-[10rem] h-full'
      >
        <h1 className='text-[3rem] lg:text-[3.5rem] leading-tight lg:leading-none font-bold max-w-[80vh]'>
          {section_two.title}
        </h1>
        <p className='text-[1.1rem] lg:text-[1.3rem] max-w-[90vh] w-full text-left leading-normal mt-5 font-normal'>
          {section_two.description}
        </p>
      </motion.div>
    </div>
  );
}
