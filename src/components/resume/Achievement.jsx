
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 pb-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 overflow-y-auto max-h-[calc(100vh-300px)]">
          <ResumeCard
            title="Best Student Club Award"
            subTitle="Google Developer Group, ICT University (Dec 2025)"
            result="Success"
            des="Recognized as the best student club on campus for the academic year 2025, acknowledging outstanding leadership, member engagement, and impactful activities."
          />
          <ResumeCard
            title="Certificate of Appreciation"
            subTitle="Student Union Government, ICT University"
            result="Success"
            des="Received certificate of appreciation from the Student Union Government for exceptional contributions to arranging and organizing campus events and initiatives."
          />
          <ResumeCard
            title="AWS Cloud Practitioner"
            subTitle="Amazon Web Services (Jul-Aug 2025)"
            result="Success"
            des="Certified in AWS Cloud Practitioner, demonstrating foundational knowledge of AWS services, cloud concepts, and best practices across all AWS domains."
          />
          <ResumeCard
            title="GitHub Manager - GDG on Campus"
            subTitle="Google Developer Group (Oct 2025)"
            result="Success"
            des="Officially recognized as GitHub Manager for Google Developer Group, managing repositories, documentation, and collaborative workflows."
          />
          <ResumeCard
            title="Front End Development Libraries"
            subTitle="By FreeCodeCamp (Nov 2024)"
            result="Success"
            des="Certification demonstrating proficiency in front-end development libraries and frameworks, including React, Redux, and related technologies."
          />
          <ResumeCard
            title="Postman Student Expert"
            subTitle="By Postman (Oct 2024)"
            result="Success"
            des="Earned Student Expert certification by Postman, showcasing expertise in API testing, development, and documentation using the Postman platform."
          />
          <ResumeCard
            title="ALX Virtual Assistant"
            subTitle="ALX Ghana (Sep 2024)"
            result="Success"
            des="Completed ALX Virtual Assistant program, demonstrating proficiency in virtual assistance, project management, and organizational skills."
          />
          <ResumeCard
            title="STEM Bootcamp"
            subTitle="STEM Ignited (Aug 2024)"
            result="Success"
            des="Successfully completed STEM Bootcamp, gaining expertise in science, technology, engineering, and mathematics through intensive practical training."
          />
          <ResumeCard
            title="Responsive Web Design"
            subTitle="By FreeCodeCamp"
            result="Success"
            des="This certification demonstrates proficiency in creating responsive web designs, ensuring web applications are visually appealing and functional across various devices and screen sizes."
          />
          <ResumeCard
            title="JavaScript and Data Structures"
            subTitle="By FreeCodeCamp"
            result="Success"
            des="This certification validates expertise in JavaScript programming and data structures, covering essential concepts such as algorithms, object-oriented programming, and efficient data manipulation techniques."
          />
          <ResumeCard
            title="Git and GitHub Certification"
            subTitle="By AMigoscode"
            result="Success"
            des="This certification equips with essential Git and GitHub skills, focusing on version control, branching, merging, and collaboration."
          />
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Skills</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 overflow-y-auto max-h-[calc(100vh-300px)]">
          <ResumeCard
            title="Mastering Prompt Engineering & ChatGPT"
            subTitle="Professional Development"
            result="Success"
            des="Advanced certification in prompt engineering and ChatGPT, focusing on effective AI interaction, optimization, and practical applications in development."
          />
          <ResumeCard
            title="Certified Agile Leadership"
            subTitle="Professional Certification"
            result="Success"
            des="Certification demonstrating competency in agile leadership principles, team management, and implementing agile methodologies in projects."
          />
          <ResumeCard
            title="React Advanced Certification"
            subTitle="Professional Development"
            result="Success"
            des="Advanced certification in React.js covering hooks, state management, performance optimization, and advanced patterns."
          />
          <ResumeCard
            title="Android Development"
            subTitle="Professional Development"
            result="Success"
            des="Comprehensive certification in Android app development, covering Java/Kotlin, Android SDK, and best practices for mobile application development."
          />
          <ResumeCard
            title="Data Science Career Path"
            subTitle="Professional Development"
            result="Success"
            des="Completed Data Science career path covering data analysis, visualization, machine learning, and statistical methods."
          />
          <ResumeCard
            title="Project Management"
            subTitle="Professional Certification"
            result="Success"
            des="Certified in project management methodologies, covering planning, execution, monitoring, and successful project delivery."
          />
          <ResumeCard
            title="Database Management"
            subTitle="Professional Certification"
            result="Success"
            des="Expertise in database design, SQL, and management systems for efficient data storage and retrieval."
          />
          <ResumeCard
            title="Linux & Shell Scripting"
            subTitle="Professional Certification"
            result="Success"
            des="Advanced knowledge of Linux operating system and shell scripting for system administration and automation."
          />
          <ResumeCard
            title="Java for Beginners"
            subTitle="Professional Certification"
            result="Success"
            des="Comprehensive introduction to Java programming, covering object-oriented principles, syntax, and practical application development."
          />
          <ResumeCard
            title="Agile Methodology"
            subTitle="Professional Development"
            result="Success"
            des="In-depth certification in Agile methodology, Scrum, and iterative development practices for team collaboration."
          />
          <ResumeCard
            title="NanoSatellite Mission Design"
            subTitle="Advanced Technology Certification"
            result="Success"
            des="Specialized certification in nanoSatellite design and mission planning, covering aerospace engineering and satellite technology."
          />
          <ResumeCard
            title="Won the Cloud Challenge"
            subTitle="By Microsoft"
            result="Success"
            des="Achieved first place in a prestigious cloud computing challenge organized by Microsoft, showcasing advanced skills in cloud infrastructure, deployment, and management. This accomplishment highlights expertise in leveraging Microsoft Azure services and cloud solutions effectively."
          />
          <ResumeCard
            title="Security Cyber Badges"
            subTitle="By ISC"
            result="Success"
            des="Earned the Security Cyber Badges Entry Level certification by ISC, demonstrating foundational understanding of cybersecurity principles, threat mitigation, and best practices. This achievement underscores commitment to securing digital environments."
          />
          <ResumeCard
            title="Google Developer Profile"
            subTitle="By Google"
            result="Success"
            des="Achieved success in building a Google Developer profile, showcasing proficiency in Google technologies, programming languages, and development frameworks. Ready to innovate and create impactful solutions leveraging Google's vast resources."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
