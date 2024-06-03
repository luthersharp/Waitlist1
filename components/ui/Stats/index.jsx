import SectionWrapper from "../../SectionWrapper";

const Stats = () => {
  const stats = [
    {
      data: "100",
      title: "Episodes",
    },
    {
      data: "5x",
      title: "your downloads ",
    },
  ];

  return (
    <SectionWrapper>
      <h2 className=" text-center font-semibold text-slate-900 text-lg lg:text-2xl">What you can reach with Podsynk in 12Months👇</h2>
      <div className='custom-screen lg: flex justify-center sm:block'>
        <ul className='mt-7  inline-grid grid-cols-2 items-center justify-center gap-x-12 gap-y-10 sm:flex sm:flex-wrap md:gap-x-24'>
          {stats.map((item, idx) => (
            <li key={idx} className='text-center '>
              <h3 className='text-4xl text-teal-400 font-semibold'>
                {item.data}
              </h3>
              <p className='mt-3 text-gray-600 font-medium'>{item.title}</p>
            </li>

          ))}
          <li>
          <p className="text-slate-900 font-bold text-2xl text-center ">Strong <span className="text-teal-400">Personal</span> Brand</p>
          </li>
          <li>
          <p className="text-slate-900 font-bold text-2xl text-center ">Elite <span className="text-teal-400">professional</span><br/>Network</p>
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
};


export default Stats