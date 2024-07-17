
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p> */}
          {/* <h2 className="text-3xl md:text-4xl font-bold">Company Experience</h2> */}
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Responsive Web Certification "
            subTitle="By FreeCodeCamp"
            result="Success"
            des="This certification demonstrates proficiency in creating responsive web designs, ensuring web 
            applications are visually appealing and functional across various devices and screen sizes."
          />
          <ResumeCard
            title="Git and Github Certification"
            subTitle="By AMigoscode."
            result="Success"
            des="This certification from Amigoscode equips you with essential Git and GitHub skills, focusing on 
            version control, branching, merging, and collaboration."
          />
          <ResumeCard
            title="JavaScript and DataStructure Certification "
            subTitle="By Freecodecamp"
            result="Success"
            des="This certification validates expertise in JavaScript programming and data structures, covering
             essential concepts such as algorithms, object-oriented programming, and efficient data manipulation
              techniques."
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2> */}
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Won the cloud challenge in school"
            subTitle="By Microsoft"
            result="Success"
            des="Achieved first place in a prestigious cloud computing challenge organized by Microsoft,
             showcasing advanced skills in cloud infrastructure, deployment, and management. This accomplishment
              highlights expertise in leveraging Microsoft Azure services and cloud solutions effectively."
          />
          <ResumeCard
            title="Security cyber badges"
            subTitle="By ISC"
            result="Success"
            des="Earned the Security Cyber Badges Entry Level certification by ISC, demonstrating a foundational 
            understanding of cybersecurity principles, threat mitigation, and best practices. This achievement 
            underscores a commitment to securing digital environments and a solid grasp of essential cybersecurity skills."
          />
          <ResumeCard
            title="Google developer profile"
            subTitle="By Google"
            result="Success"
            des=" Achieved success in building a Google Developer profile, showcasing proficiency in Google technologies,
             programming languages, and development frameworks. This accomplishment reflects a deep understanding of 
             Google's ecosystem, including APIs, cloud services, and application development tools. Ready to innovate 
             and create impactful solutions leveraging Google's vast resources and developer community."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
