const WhySection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="p-5 lg:w-1/2">
        <h2 className="text-5xl text-green" style={{animationDelay: "600ms"}}>Why?</h2>
        <h3 className="text-3xl mb-3 mt-3">Why code?</h3>
        <p className="mb-5">
          As insincere as it sounds, it&apos;s the truth. I enjoy applying  the theory and 
          skills I know to build things for myself and help others.
        </p>
        <p className="mb-5">
          While I enjoy programming as a hobby for myself first and foremost, 
          my dream is to be able to create something with a positive impact on someone even in a minor way.
        </p>
        <p className="mb-5">
          I&apos;m not quite sure what that thing will be but until that happens, 
          I&apos;m more than happy making things for myself.
        </p>
        <p>Thanks for visiting. Hope you enjoyed the website :)</p>
      </div>
    </section>
  )
}

export default WhySection;