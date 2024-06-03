// components/FeatureSection.js
import Image from 'next/image';

import profile from '../../../public/profile.png';
import dashboard from '../../../public/dashboard.png';
import messaging from '../../../public/messaging.png';
import calendar from '../../../public/calendar.png';
import branddeals from '../../../public/sponsors.png';
import matches from '../../../public/matches.png'

const features = [
  { image: matches,heading:" Find Podcast Guests /Hosts Effortlessly!",subheading:"Let Us Match You:", description: 'We have a podcast guest finder that matches you with Guests/Hosts, you will receive notification for your perfect match. No efforts needed' },
  { image: profile,heading:'for guests/ hosts '  ,subheading:"Create/Explore Profiles",description: ' Explore Your guest/ohst profile to know more about them, but also create yours and make as a funcitonal webiste to promote your selft/Podcast' },
  { image: dashboard,subheading:"Manually Find Podcast Guests / Hosts:", heading:" Brows  profiles Manualy", description: 'Explore our Podcast Guest Network: Navigate through our comprehensive Podcast Guest /Host Directory and easily search for Guests/Hosts with our advanced search filters.' },
  { image: messaging,subheading:"Chat with Guests/Hosts", heading:": No need to leave the platform.", description: 'Send/Receive DMs:Send files, voice messages and Share your calendar with one click' },
  { image: calendar,subheading:"Built in calendar", heading:"that is connected to other calendars", description: 'We provide you wih a calendar and other tools to help you Find guests /hosts and book them but also prepare for the episode' },
  { image: branddeals,subheading:"Section to find, message and ",heading:"Atrract Sponsors", description: `Yes this section has brands that are willing work with podcasts (if you fit the conditions) also if you're a small podcast we provide you programs to grow and land sponsors.` },
];

const FeatureSection = () => {
    return (
        <section className="relative max-w-screen-xl mt-0 lg:mt-3 mx-auto px-4 lg:px-28 md:px-8">
            <h3 className='text-xl lg:text-4xl lg:mt-8 text-center mt-5 font-bold'>All in one place 👇</h3>
        {features.map((feature, index) => (
          <div key={index} className="relative z-10 gap-5 items-center lg:grid lg:grid-cols-2 lg:gap-8 my-8">
            <div className={`flex-1 mx-auto sm:w-9/12 lg:w-auto ${index % 2 === 1 ? 'lg:order-last' : ''}`}>
              <div className="flex-1 max-w-lg py-1 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                <h3 className="text-xl text-gray-800 font-semibold md:text-4xl">
                  <span className='text-teal-400 underline-offset-4'>{feature.subheading}</span> {feature.heading} 
                </h3>
              </div>
              <Image 
                src={feature.image} 
                alt={`Image for ${feature.heading}`}
                width={450}
                className='shadow-lg shadow-teal-300 rounded border-slate-900 border'
              />
            </div>
            <div className="flex-1 max-w-lg py-1 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
              <p className="text-center text-gray-500 leading-relaxed mt-1 lg:mt-0">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    );
  };

  export default FeatureSection;
  
