import React from 'react'; // Assuming you're using React



const Accordion = () => {
  return (
    <div className='mt-10'>

      <h3 className=' text-center mt-5 font-bold text-lg lg:text-xl underline underline-offset-4 decoration-teal-400'>Why PodSynk?</h3>

      <div className="lg:px-14 px-2  mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">

        <div className='border shadow-md bg-slate-50 shadow-teal-200 px-1 border-slate-900 rounded p-3'>
          <h4 className='underline underline-offset-8 text-center  font-bold text-slate-900'>
            Find podcast guests /hosts <span className='text-teal-400'>Instantly</span>
          </h4>
          <p className='text-center lg:mt-3 mt-2 text-slate-500'>Stop searching for podcast guests! Browse our directory, get automatic matches, and chat & book directly within our platform.<br/>No more endless emails & scheduling headaches.</p>
        </div>

        <div className='border shadow-md bg-slate-50 shadow-teal-200 px-1 border-slate-900 rounded p-3'>
          <h4 className='underline underline-offset-8 text-center font-bold text-slate-900'>
            Ai <span className='text-teal-400'>Powered</span> production tools
          </h4>
          <p className='text-center lg:mt-3 mt-2 text-slate-500'>Ditch the podcast stress! Our AI tackles research, planning & tasks. Plus, get discounts on recording tools !</p>
        </div>

        <div className='border shadow-md bg-slate-50 shadow-teal-200 px-1 border-slate-900 rounded p-3'>
          <h4 className='underline underline-offset-8 text-center font-bold text-slate-900'>
           Tailored strategies for <span className='text-teal-400'>Growth</span>
          </h4>
          <p className='text-center lg:mt-3 mt-2 text-slate-500'>After Publsihing Our AI tailors proven strategies for you to grow your podcast across platforms to Maximize your reach. <br/>We also gamify tasks to keep you motivated</p>
        </div>

        <div className='border shadow-md bg-slate-50 shadow-teal-200 px-1 border-slate-900 rounded p-3'>
          <h4 className='underline underline-offset-8 text-center font-bold text-slate-900'>
          It's about your Personal Brand <span className=' line-through decoration-teal-400'>Not Only Podcasting</span>
          </h4>
          <p className='text-center lg:mt-3 mt-2 text-slate-500'>Yes our purpose is not just creating and growing a podcast we aim to help build your personal brand, reach business & career goals. We provide the tools for your voice to unlock your potential.  Podcast your way to success!</p>
        </div>

        <div className='border shadow-md bg-slate-50 shadow-teal-200 px-1 border-slate-900 rounded p-3'>
          <h4 className='underline underline-offset-8 text-center font-bold text-slate-900'>
          We facilitate the process of fidning <span className='text-teal-400'>Sponsors</span>
          </h4>
          <p className='text-center lg:mt-3 mt-2 text-slate-500'>We work hard to bring top brands to our platform, connecting you with perfect matches.  Exclusive opportunities await (conditions apply)</p>
        </div>

        <div className='border shadow-md bg-slate-50 shadow-teal-200 px-1 border-slate-900 rounded p-3'>
          <h4 className='underline underline-offset-8 text-center font-bold text-slate-900'>
          Get access to premium coaching & mentorships <span className='text-teal-400'>FOR FREE!!</span>
          </h4>
          <p className='text-center lg:mt-3 mt-2 text-slate-500'>We work hard to bring top brands to our platform, connecting you with perfect matches.  Exclusive opportunities await (conditions apply)</p>
        </div>


       

        

       
      </div>
    </div>
  );
};

export default Accordion;