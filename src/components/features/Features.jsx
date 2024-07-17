import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Crafting responsive and dynamic websites that offer seamless user experiences across all devices."
         
        />

        <Card
          title="App Development"
          des="Creating intuitive and high-performance mobile applications to enhance user engagement and accessibility."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Enhancing website visibility and search engine rankings through strategic SEO practices and keyword optimization."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Creating high-performance, user-friendly mobile applications for both Android and iOS platforms to meet your business needs."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Crafting intuitive and engaging user experiences through thoughtful design and user research to enhance product usability."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Providing reliable and secure web hosting solutions to ensure your website remains accessible and performs optimally."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features