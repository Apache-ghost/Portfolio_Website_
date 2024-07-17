
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2006 - 2020</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Software Engineering"
            subTitle="The ICT University (2022 - 2026)"
            result="3.90/4"
            des="A comprehensive program focusing on the principles of software design, development, and maintenance,
             equipping students with the skills to create efficient and innovative software solutions for 
             various industries. 
           "
          />
          <ResumeCard
            title="Secondary & High School education"
            subTitle="G.B.H.S Koutaba (2015 - 2022)"
            result="4.75/5"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also
             called post-secondary education."
          />
          <ResumeCard
            title="primary education"
            subTitle="G.B.H.S Ebolowa(2009- 2015)"
            result="4.47/5"
            des="Providing foundational learning experiences and nurturing young minds to develop essential skills, 
            knowledge, and values for academic success and personal growth."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="eOfbit Society Training coordinator"
            subTitle=" Core Team (2023 - Present)"
            result="eOfbit Society"
            des="Leading training programs and coordinating educational initiatives to enhance members' 
            skills in cutting-edge technologies and industry practices."
          />
          <ResumeCard
            title="Social Media Manager"
            subTitle="Core Team- (2023 - 2024)"
            result="NgCodeX"
            des="Developing and executing social media strategies to increase brand awareness, engagement, 
            and audience growth across various platforms."
          />
          <ResumeCard
            title="Wordpress Developer"
            subTitle="N-Tec - (2022 - 2023)"
            result="Cameroon"
            des="Specializing in building and customizing WordPress websites, creating custom themes 
            and plugins, and ensuring optimal website performance and user experience."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
