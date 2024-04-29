import React from "react";

interface Props {
  mainHeading: string;
  subHeading: string;
}

const Heading = ({ mainHeading, subHeading }: Props) => {
  return (
    <div className="text-center p-3">
      <p className="text-[#CC926A] text-[18px] text-opacity-90">
        {mainHeading}
      </p>
      <h1 className="mt-[1rem] text-[40px] text-black text-opacity-80">
        {subHeading}
      </h1>
    </div>
  );
};

export default Heading;
