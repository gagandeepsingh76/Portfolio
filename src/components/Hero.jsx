import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {

  
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-28 md:mt-5 lg:5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className="mt-28 md:mt-5 lg:5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey there! I'm <span className='text-[#915EFF]'>Gagandeep Singh</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Aspiring AI Engineer | IT Student | Passionate About Machine Learning & AI | Exploring Cybersecurity & Problem-Solving
          </p>
          <p className="mt-4 text-secondary text-xl max-w-6xl leading-relaxed">
            I am a third-year  student specializing in Information Technology with a strong passion for technology and innovation. With a keen interest in exploring the ever-evolving tech landscape.
          </p>
        </div>
      </div>

      


    </section>
  );
};

export default Hero;
