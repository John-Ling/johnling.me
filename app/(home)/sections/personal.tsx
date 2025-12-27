export default function Personal() {
  return (
    <section className='h-4/5 flex flex-col justify-center mx-auto items-center lg:flex-row mt-5 gap-10 w-10/12 md:w-8/12 z-30'>
      <div className='max-w-3xl w-full'>
        <h3 className='text-2xl md:text-3xl mb-3 mt-3 font-bold text-left'>
          My <span className='text-orange'>GitHub activity</span>
        </h3>
        <p className='mb-5'>
          I enjoy applying the theory and skills I know to build things for myself and help others.
          As insincere as it sounds, it&apos;s the truth.
        </p>
        <p className='mb-5'>
          While I enjoy programming as a hobby for myself first and foremost, my dream is to be able
          to create something with a positive impact on someone even in a minor way.
        </p>
        <p className='mb-5'>
          I like to believe in the Butterfly Effect (hence the animation on my hero page). A concept
          in chaos theory where a minute change in a complex system can yield large effects. I
          imagine that if I continue to work, challenge and develop myself, eventually one minute
          event can bring about the positive outcome I want.
        </p>
        <p className='mb-5'>
          I&apos;m not quite sure when that will happen but until then, I&apos;ll be enjoying the
          process of learning, trying, failing and trying again.
        </p>
        <p>Thanks for visiting. Hope you enjoyed the website :)</p>
      </div>
    </section>
  );
}
