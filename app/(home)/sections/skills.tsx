export default function Skills() {
  return (
    <>
      <h3 className='text-2xl md:text-3xl mb-3 mt-3 font-bold text-left'>
        My <span className='text-orange'>current toolkit</span>
      </h3>
      <SkillsDisplay />
    </>
  );
}

const SkillsDisplay = () => {
  interface SkillIcon {
    classInfo: string;
    label: string;
  }

  const skillIcons: SkillIcon[] = [
    { classInfo: "devicon-nextjs-original-wordmark text-white", label: "NextJS" },
    { classInfo: "devicon-firebase-plain text-yellow", label: "Firebase" },
    { classInfo: "devicon-tailwindcss-plain text-cyan", label: "Tailwind" },
    { classInfo: "devicon-fastapi-plain text-blue", label: "FastAPI" },
    { classInfo: "devicon-c-plain text-[#9aa5ce]", label: "C" },
    { classInfo: "devicon-angularjs-plain text-red", label: "Angular" },
    { classInfo: "devicon-vitejs-plain text-yellow", label: "Vite" },
    { classInfo: "devicon-docker-plain text-blue", label: "Docker" },
    { classInfo: "devicon-mongodb-plain text-green", label: "MongoDB" },
    { classInfo: "devicon-amazonwebservices-plain-wordmark text-yellow", label: "AWS" },
    { classInfo: "devicon-mysql-plain text-blue", label: "MySQL" },
    { classInfo: "devicon-sass-original text-red", label: "SASS" }
  ];

  return (
    <div className='relative'>
      {/* <Image
        className='hidden md:block absolute border-0 lg:-bottom-[30%] -z-10 pointer-events-none select-none'
        src={wires_bottom_2}
        loading='eager'
        alt=''
      /> */}
      <div
        className='grid grid-cols-4 gap-x-8 gap-y-2 justify-center bg-grey-card border-2 rounded-lg
                  border-grey-light order-2 p-3 md:p-5 lg:order-1 text-center z-50 h-48'
      >
        {skillIcons.map((icon: SkillIcon, i: number) => {
          return (
            <div key={i} className='flex gap-2 items-center justify-start'>
              <i className={`${icon.classInfo} text-left text-4xl z-30`} />
              <p className='text-xs text-left z-30 select-none'>{icon.label}</p>
            </div>
          );
        })}
        <div
          className='absolute bg-[repeating-linear-gradient(transparent,transparent_2px,#000000_2px,#000000_4px)] top-0 left-0
                          w-full h-full opacity-10 z-30 animate-scanlines'
          style={{ backgroundSize: "100% 200px" }}
        />
      </div>
    </div>
  );
};
