import React from "react";

interface PageProps {
  heading: string;
  description: string;
}

const HeadingComponent: React.FC<PageProps> = ({ heading, description }) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h2 className="text-[12px] font-bold uppercase text-gray-500">
        {heading}
      </h2>
      <p className="text-3xl font-semibold"> {description}</p>
    </div>
  );
};

export default HeadingComponent;
