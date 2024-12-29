import "/styles/devicon.min.css";

const SkillsDisplay = () => {
  interface SkillIcon {
    classInfo: string,
    label: string,
  };

  const skillIcons: SkillIcon[] = [
    {classInfo: "devicon-python-plain text-blue", label: "Python"},
    {classInfo: "devicon-react-original text-cyan", label: "React"},
    {classInfo: "devicon-firebase-plain text-yellow", label: "Firebase"},
    {classInfo: "devicon-tailwindcss-plain text-cyan", label: "Tailwind"},
    {classInfo: "devicon-nextjs-original-wordmark text-white", label: "NextJS"},
    {classInfo: "devicon-c-plain text-[#9aa5ce]", label: "C"},
    {classInfo: "devicon-docker-plain text-blue", label: "Docker"},
    {classInfo: "devicon-nginx-original text-green", label: "NGINX"},
    {classInfo: "devicon-bootstrap-plain text-magenta", label: "Bootstrap"},
    {classInfo: "devicon-mysql-plain text-blue", label: "MySQL"},
    {classInfo: "devicon-nodejs-plain-wordmark text-green", label: "NodeJS"},
    {classInfo: "devicon-ubuntu-plain text-orange-light", label: "Ubuntu"}
  ];

  return (
    <>
    {/* render skills display */}
    {skillIcons.map((icon: SkillIcon, i: number) => {
      return (
        <div key={i} className="opacity-0 skill-icon" style={{animationDelay: `${(i + 1) * 100}ms`}}>
          <i className={`${icon.classInfo}  text-5xl md:text-6xl lg:text-7xl flex-1 p-5 `} />
          <p className="text-xs md:text-sm text-center m-2 font-bold">{icon.label}</p>
        </div>  
      )
    })}
    </>
  )
}
export default SkillsDisplay;