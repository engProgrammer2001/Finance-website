import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUpSection = () => {
  return (
    <div className="bg-gradient-to-tr from-yellow-500 to-green-500 p-8 my-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <CountUpCard
          imgSrc="/assets/about/countup.png"
          end={321}
          label="Our Happy Clients"
        />
        <CountUpCard
          imgSrc="/assets/about/amount.png"
          end={210}
          label="Disbursed Amount"
          suffix=" Cr"
        />
        <CountUpCard
          imgSrc="/assets/about/branch.png"
          end={13}
          label="Branches In India"
        />
        <CountUpCard
          imgSrc="/assets/about/state_cover.png"
          end={30}
          label="State Covered"
        />
      </div>
    </div>
  );
};

const CountUpCard = ({ imgSrc, end, label, suffix = '' }) => {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center"
    >
      <img className="w-24 h-24 mb-4" alt={label} src={imgSrc} />
      {inView && (
        <h2 className="text-5xl font-bold text-primary">
          <CountUp end={end} duration={2} suffix={suffix} />
          +
        </h2>
      )}
      <p className="text-muted-foreground text-2xl mt-2">{label}</p>
    </div>
  );
};

export default CountUpSection;
