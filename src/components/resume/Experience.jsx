
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
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
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021-2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Trainer & LeaderShip Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cyber Leader"
            subTitle="The ICT University (2023 - 2024)"
            result="eOfbit Society"
            des="Leading training programs and coordinating educational initiatives to enhance members' 
            skills in cutting-edge technologies and industry practices."
          />
          <ResumeCard
            title="Class Delegate"
            subTitle="The ICT University  (2022 - 2023)"
            result="Yaounde"
            des="A responsible and proactive role entrusted with representing the interests and concerns of classmates,
             facilitating communication between students and faculty, and contributing to a positive learning environment."
          />
          <ResumeCard
            title="Secondary School Teacher"
            subTitle="Complexe Islamic Secondary School (2021 - 2021)"
            result="KOUTABA"
            des="A dedicated educator focused on fostering academic growth, critical thinking, and personal 
            development among students. Implements engaging teaching strategies, mentors students, and 
            contributes to a supportive learning community."
            />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
