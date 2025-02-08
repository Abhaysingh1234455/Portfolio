import { FaReact, FaGitAlt,FaNodeJs, FaPython,FaJava, FaGithub, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiMongodb,SiTailwindcss,SiBootstrap,SiPostgresql,SiNextdotjs, SiHtml5, SiCss3, SiJavascript, SiExpress } from 'react-icons/si';
import "./Services.css"

const skillsData = [
    { name: 'C', icon: <SiCplusplus size={60} className="si-cplusplus" /> },
    { name: 'C++', icon: <SiCplusplus size={60} className="si-cplusplus" /> },
    { name: 'CSS3', icon: <SiCss3 size={60} className="si-css3" /> },
    { name: 'Express.js', icon: <SiExpress size={60} className="si-express" /> },
    { name: 'Git', icon: <FaGitAlt size={60} className="fa-git-alt" /> },
    { name: 'GitHub', icon: <FaGithub size={60} className="fa-github" /> },
    { name: 'MongoDB', icon: <SiMongodb size={60} className="si-mongodb" /> },
    { name: 'HTML5', icon: <SiHtml5 size={60} className="si-html5" /> },
    { name: 'Java', icon: <FaJava size={60} className="fa-java" /> },
    { name: 'Bootstrap', icon: <SiBootstrap size={60} className="text-purple-600" /> },
    { name: 'Node.js', icon: <FaNodeJs size={60} className="text-green-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql size={60} className="text-blue-500" /> },
    { name: 'Python', icon: <FaPython size={60} className="text-yellow-600" /> },
    { name: 'Next.js', icon: <SiNextdotjs size={60} className="text-gray-800" /> },
    { name: 'TailwindCSS', icon: <SiTailwindcss size={60} className="text-teal-400" /> },
    { name: 'JavaScript', icon: <SiJavascript size={60} className="si-javascript" /> },
    { name: 'Linux', icon: <FaLinux size={60} className="fa-linux" /> },
    { name: 'Machine Learning', icon: <FaReact size={60} className="fa-react" /> },
  ];

function Skills() {
  return (
    <div className="container mx-auto py-16" id='Skills'>
      <h1 className="text-4xl font-extrabold mb-10 text-center "><span className='gradient-text'>S</span>kills</h1>
      <div className="icons">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2"
          >
            {skill.icon}
            <span className="text-xl font-semibold">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
