import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript, SiReact, SiNodedotjs, SiSpringboot, SiPostgresql } from 'react-icons/si';
import Typical from 'react-typical';
import { useInView } from 'react-intersection-observer';

const PortfolioPage = () => {
  const { ref: headerRef, inView: headerVisible } = useInView({ threshold: 0.1 });
  const { ref: aboutRef, inView: aboutVisible } = useInView({ threshold: 0.1 });
  const { ref: projectRef, inView: projectVisible } = useInView({ threshold: 0.1 });
  const { ref: techStackRef, inView: techStackVisible } = useInView({ threshold: 0.1 });
  const { ref: contactRef, inView: contactVisible } = useInView({ threshold: 0.1 });


  

  return (
    <div className="bg-black min-h-screen text-white">
      <header ref={headerRef} className={`bg-gray-800 flex justify-between items-center p-4 transition-opacity duration-1000 ${headerVisible ? 'opacity-100' : 'opacity-20'}`}>
        <div className="flex items-center">
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li onClick={() => document.getElementById('introduction').scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-red-500 transition duration-300">Home</li>
            <li onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-red-500 transition duration-300">About</li>
            <li onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-red-500 transition duration-300">Skills</li>
            <li onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-red-500 transition duration-300">Projects</li>
            <li onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="cursor-pointer hover:text-red-500 transition duration-300">Contact</li>
          </ul>
        </nav>
      </header>

      {/* Introduction Section */}
      <section id="introduction" className={`flex items-center justify-between p-16 relative transition-opacity duration-1000 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-1/2">
          <h1 className="text-6xl font-bold mb-6"> <Typical
              steps={['Ruchita Raje', 1000]}
              loop={1}
              wrapper="span"
            /></h1>
          <h2 className="text-4xl font-bold mb-4">Web Developer</h2>
          
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="bg-red-500 text-white px-6 py-2 rounded-full mt-4 transition transform hover:scale-105 hover:bg-red-600 duration-300">
            Contact
          </button>
          <div className="flex space-x-4 mt-8">
            <FaLinkedin size={30} className="cursor-pointer hover:text-red-500 transition duration-300" />
            <FaGithub size={30} className="cursor-pointer hover:text-red-500 transition duration-300" />
          </div>
        </div>
        <div className="w-1/2 relative">
          <div className="w-80 h-80 bg-red-500 rounded-full absolute top-0 right-0 z-0"></div>
          <img
            src="/me1.jpg"
            alt="Ruchita"
            className="w-80 h-80 rounded-full object-cover relative z-10 mx-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>
{/* About Me Section */}
<section id="about" ref={aboutRef} className={`p-16 transition-opacity duration-1000 ${aboutVisible ? 'opacity-100' : 'opacity-0'}`}>
  <h2 className="text-4xl font-bold mb-6 text-red-500 underline text-center">About</h2>
  <div className="flex flex-col md:flex-row w-full">
    <div className="md:w-1/3 mb-6 md:mb-0">
      <img 
        src="/me3.jpg" 
        alt="About Me"
        className="w-full h-auto max-w-xs mx-auto shadow-lg transition-transform duration-300 transform hover:scale-105 hover:-translate-y-2 object-cover"
        style={{ height: '400px', width: '300px', borderRadius: '50% / 60%' }}  
      />
    </div>
    <div className="md:w-2/3 md:pl-8 flex items-center justify-center">
      <p className="text-lg mb-4 text-center md:text-left">
        I'm Ruchita Raje, a passionate and dedicated web developer with a strong foundation in creating intuitive and visually appealing websites. Currently in my pre-final year as a student, I'm actively seeking opportunities to apply my skills and grow as a professional. With proficiency in frontend and backend technologies, I bring strong communication, problem-solving, and teamwork abilities, which help me collaborate effectively in team environments. Open to work and excited for new opportunities!
      </p>
    </div>
  </div>
</section>




      {/* Project Showcase */}
<section id="projects" ref={projectRef} className={`p-16 transition-opacity duration-1000 ${projectVisible ? 'opacity-100' : 'opacity-0'}`}>
  <h2 className="text-4xl font-bold mb-12 text-red-500 text-center underline">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <ProjectItem 
      video="/project2.mp4" 
      title="Herbal Garden Website"
      description="A website dedicated to promoting herbal gardening with tips and resources."
    />
    <ProjectItem 
      video="/social_media.mp4" 
      title="Social Media Marketing Landing Page"
      description="A landing page designed for social media marketing services."
    />
  </div>
  <div className="text-center mt-12">
    <a href="/RESUME_2.pdf" target="_blank" rel="noopener noreferrer">
      <button className="bg-red-500 text-white px-6 py-2 rounded-full transition transform hover:scale-105 hover:bg-red-600 duration-300">
        View CV
      </button>
    </a>
    <a href="/RESUME_2.pdf" download>
      <button className="bg-red-500 text-white px-6 py-2 rounded-full transition transform hover:scale-105 hover:bg-red-600 duration-300 ml-4">
        Download CV
      </button>
    </a>
  </div>
</section>

      {/* Skills Section - Updated layout */}
      <section ref={techStackRef} id="skills" className={`p-16 transition-opacity duration-1000 ${techStackVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-12 text-red-500 text-center underline">Skills</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <SkillItem icon={SiTailwindcss} name="TAILWIND" />
            <SkillItem icon={SiJavascript} name="JAVASCRIPT" />
            <SkillItem icon={SiReact} name="REACT" />
          </div>
          <div className="space-y-4">
            <SkillItem icon={SiNodedotjs} name="NODE JS" />
            <SkillItem icon={SiSpringboot} name="SPRING BOOT" />
            <SkillItem icon={SiPostgresql} name="POSTGRESQL" />
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" ref={contactRef} className={`p-16 transition-opacity duration-1000 ${contactVisible ? 'opacity-100' : 'opacity-0'}`}>
        <h2 className="text-4xl font-bold mb-12 text-red-500 text-center underline">Contact Me</h2>
        <div className="flex justify-between">
          <div className="w-1/2">
            <p className="text-lg mb-4">Phone: 7905624079</p>
            <p className="text-lg mb-4">Email: ruchita05arje@gamil.com</p>
          </div>
          <form className="w-1/2">
            <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 rounded" />
            <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 rounded" />
            <textarea placeholder="Your Message" className="w-full mb-4 p-2 rounded h-32"></textarea>
            <button type="submit" className="bg-red-500 text-white px-6 py-2 rounded-full transition transform hover:scale-105 hover:bg-red-600 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-gray-800 p-4 text-center transition-opacity duration-1000 ${headerVisible ? 'opacity-100' : 'opacity-20'}`}>
        <p>© {new Date().getFullYear()} Ruchita. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#introduction" className="hover:text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#skills" className="hover:text-red-500">Skills</a>
          <a href="#projects" className="hover:text-red-500">Projects</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </div>
      </footer>
    </div>
  );
};

const ProjectItem = ({ video, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <video src={video} className="w-full h-40 object-cover" autoPlay loop muted playsInline />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const SkillItem = ({ icon: Icon, name }) => {
  return (
    <div className="flex items-center justify-between">
      <Icon size={40} />
      <span className="text-lg uppercase">{name}</span>
      <div className="w-1/2 h-1 bg-red-500"></div>
    </div>
  );
};

export default PortfolioPage;