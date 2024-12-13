import { useState } from "react";
import { HiBackward, HiForward } from "react-icons/hi2";

const testimoni = [
  {
    date: "November 16",
    text: "I actually called in for tax planing instead of responding to an audit.Thomas gave a concise explanation of my situation in easy-to-understand terms and suggested ways to reduce my tax liability. his obviously very knowledgeable and patient, totally recommended!. ",
    rating: 5,
    name: "Huan C",
    location: "Austin, Tx",
    avater: "https://via.placeholder.com/50",
  },

  {
    date: "November 16",
    text: "I actually called in for tax planing instead of responding to an audit.Thomas gave a concise explanation of my situation in easy-to-understand terms and suggested ways to reduce my tax liability. his obviously very knowledgeable and patient, totally recommended!. ",
    rating: 5,
    name: "Temitayo",
    location: "Austin, Tx",
    avater: "https://via.placeholder.com/50",
  },

  {
    date: "November 16",
    text: "I actually called in for tax planing instead of responding to an audit.Thomas gave a concise explanation of my situation in easy-to-understand terms and suggested ways to reduce my tax liability. his obviously very knowledgeable and patient, totally recommended!. ",
    rating: 5,
    name: "Goodluck",
    location: "Austin, Tx",
    avater: "https://via.placeholder.com/50",
  },

  //   {
  //     date: "November 16",
  //     text: "I actually called in for tax planing instead of responding to an audit.Thomas gave a concise explanation of my situation in easy-to-understand terms and suggested ways to reduce my tax liability. his obviously very knowledgeable and patient, totally recommended!. ",
  //     rating: 5,
  //     name: "Omomugabe",
  //     location: "Austin, Tx",
  //     avater: "https://via.placeholder.com/50",
  //   },

  //   {
  //     date: "November 16",
  //     text: "I actually called in for tax planing instead of responding to an audit.Thomas gave a concise explanation of my situation in easy-to-understand terms and suggested ways to reduce my tax liability. his obviously very knowledgeable and patient, totally recommended!. ",
  //     rating: 5,
  //     name: "Adeleke",
  //     location: "Austin, Tx",
  //     avater: "https://via.placeholder.com/50",
  //   },

  //   {
  //     date: "November 16",
  //     text: "I actually called in for tax planing instead of responding to an audit.Thomas gave a concise explanation of my situation in easy-to-understand terms and suggested ways to reduce my tax liability. his obviously very knowledgeable and patient, totally recommended!. ",
  //     rating: 5,
  //     name: "Temitope",
  //     location: "Austin, Tx",
  //     avater: "https://via.placeholder.com/50",
  //   },
];

function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimoni.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((next) => (next === testimoni.length - 1 ? 0 : next + 1));
  };

  return (
    <>
      <div className="ml-[20px]md:p-4 p-2">
        <h2 className="mb-[17px] ml-[5px] text-[20px] font-bold text-slate-600">
          Testimomials
        </h2>
        <div className="">
          <div className="md:flex">
            {testimoni.map((test, index) => (
              <>
                {" "}
                <div
                  key={index}
                  className={`transform rounded-xl bg-[rgb(248,248,249)] font-bold leading-normal opacity-90 transition-all duration-500 ease-in-out md:w-[600px] ${index === currentIndex ? "scale-100" : "scale-90"} `}
                >
                  <p className="mb-10 p-[15px]">{test.date}</p>
                  <p className="p-[15px]">{test.text}</p>
                  <div className="flex p-[15px] text-yellow-600">
                    {"*".repeat(test.rating)}
                    {"*".repeat(5 - test.rating)}
                    <h6 className="ml-1 mt-[3px] text-[10px]">5</h6>
                  </div>
                  <div className="p-[15px]">
                    <img
                      src="leke.jpg.HEIC"
                      alt="leke"
                      className="h-[5%] w-[10%] rounded-full object-cover"
                    />
                  </div>
                  <div className="p-[15px]">
                    {test.name}
                    {test.location}
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
        <div className="mt-[10px] hidden items-center justify-center space-x-[20px] text-[50px] text-slate-600 md:flex">
          <button onClick={handlePrev}>
            <HiBackward />
          </button>
          <button onClick={handleNext}>
            <HiForward />
          </button>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
