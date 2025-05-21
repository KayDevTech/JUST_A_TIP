'use client'
import Scheduleitem from "./Scheduleitem";
import { motion } from "framer-motion"

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-48 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50"
      >
        Launch Schedule
      </motion.h1>
      <Scheduleitem title="NG-21" date="Dec 9th" location="Florida" />
      <Scheduleitem title="Starlink" date="Dec 20th" location="Texas" />
      <Scheduleitem title="Starlink" date="Jan 13th" location="Florida" />
      <Scheduleitem title="Turksat 6A" date="Feb 22nd" location="Florida" />
      <Scheduleitem title="NROL-186" date="Mar 1st" location="California" />
      <Scheduleitem title="GOES-U" date="Mar 8th" location="California" />
      <Scheduleitem title="ASTRA 1P" date="Apr 8th" location="Texas" />
    </section>
  );
};

export default Schedule