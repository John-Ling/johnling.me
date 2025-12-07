const WhySection = () => {
  return (
    <section className='min-h-screen flex flex-col justify-center items-center px-5 sm:px-6 lg:px-13 xl:px-25 lg:w-11/12 max-w[1920px] mx-auto'>
      <div className='max-w-3xl w-full'>
        <h2 className='text-6xl text-green font-bold' style={{ animationDelay: "600ms" }}>
          Why?
        </h2>
        <h3 className='text-3xl mb-3 mt-3 font-bold'>Why code?</h3>
        <p className='mb-5'>
          As insincere as it sounds, it&apos;s the truth. I enjoy applying the theory and skills I
          know to build things for myself and help others.
        </p>
        <p className='mb-5'>
          While I enjoy programming as a hobby for myself first and foremost, my dream is to be able
          to create something with a positive impact on someone even in a minor way.
        </p>
        <p className='mb-5'>
          I&apos;m a firm believer in the Butterfly Effect (hence the animation on my hero page) and
          I believe that if I continue to work and put myself out there, eventually one miniscule
          event can bring about the positive change I want.
        </p>
        <p className='mb-5'>
          I&pos;m not quite sure when that will happen but until then. I&apos;ll be enjoying the
          process to learn and better myself.
        </p>
        <p>Thanks for visiting. Hope you enjoyed the website :)</p>
      </div>
    </section>
  );
};

export default WhySection;
