import { useState } from "react";
import Popup from "./Popup";

function Sections() {
  const [openPopup, setOpenPopup] = useState(false);
  return (
    <div className="pt-[100px]">
      {openPopup && <Popup setOpenPopup={setOpenPopup} />}
      <section className="justify-center p-[50px] md:ml-[10px] md:flex md:gap-0 md:space-x-[200px]">
        <div>
          <h4 className="ml-[10px]">TAX LAWYER</h4>
          <h3 className="w-[300px] text-[50px] leading-snug">
            Guiding You Through <span className="text-slate-600">Tax</span>{" "}
            Complexity
          </h3>
          <p className="mt-[20px] md:w-[600px]">
            We simplify tax complexities with tailored strategies, resolving
            disputes and ensuring compliance for local and internatinal needs
          </p>
          <button
            className="mt-[30px] rounded-full bg-slate-600 px-6 py-4 text-white"
            onClick={() => setOpenPopup((open) => !open)}
          >
            Start Consultation
          </button>

          <div>
            <ul className="mt-[50px] flex cursor-pointer flex-col gap-5 text-center md:flex-row md:space-x-3">
              <li className="rounded-full border px-4 py-2 hover:bg-slate-500 hover:text-white md:px-4 md:py-2">
                Internatinal Taxation
              </li>
              <li className="rounded-full border px-4 py-2 hover:bg-slate-500 hover:text-white">
                Tax Disputes
              </li>
              <li className="rounded-full border px-4 py-2 hover:bg-slate-500 hover:text-white">
                Tax Planing
              </li>
            </ul>
          </div>

          <div>
            <ul className="mb-20 mt-[10px] flex cursor-pointer flex-col gap-5 text-center md:mb-0 md:flex-row md:space-x-3">
              <li className="rounded-full border px-4 py-2 hover:bg-slate-500 hover:text-white">
                Tax Compliance
              </li>
              <li className="rounded-full border px-4 py-2 hover:bg-slate-500 hover:text-white">
                Consultation
              </li>
            </ul>
          </div>
        </div>
        <div className="">
          <img
            src="law.jpg"
            alt="law"
            className="rounded-lg sm:w-[800px] md:w-[500px]"
          />
        </div>
      </section>

      <section>
        <div>
          <h4 className="rounded-full bg-[rgb(248,248,248)] p-[50px] text-center text-black">
            &quot;Tax law is apuzzle-one that, with the right insight, can
            reveal a clear path forward.&quot;
          </h4>
        </div>
        <div className="mt-[20px] md:ml-[50px]">
          <h5 className="font-bold">Discover Our Brand</h5>
          <img
            src="taxess.jpg"
            alt="taxess"
            className="mt-[20px] rounded-lg md:mb-0 md:h-[400px] md:w-[97%]"
          />
        </div>
        <div className="ml-[10px] justify-center p-[50px] md:flex md:space-x-[200px]">
          <div>
            <h5 className="mb-10 font-bold">About Thomas</h5>
            <p className="leading-[50px] md:mt-[200px] md:w-[700px]">
              Thomas started his own practice in 2012 and prior to that, worked
              in verious law firms in and around san francisco. He also formerly
              worked at the United State Tax Court and in the Tax Division of
              the Justice Department, where he helped prosecute a number of
              sophisticated, international tax shelters
            </p>
          </div>
          <img
            src="leke.jpg.HEIC"
            alt="leke"
            className="mt-20 rounded-lg md:mt-0 md:h-[600px] md:w-[500px]"
          />
        </div>
      </section>
    </div>
  );
}

export default Sections;
