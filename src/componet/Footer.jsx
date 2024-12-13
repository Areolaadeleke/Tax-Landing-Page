import { HiReceiptTax } from "react-icons/hi";

function Footer() {
  return (
    <div className="bg-slate-700 text-white">
      <footer className="space-x-16">
        <div className="flex flex-col items-center justify-center pt-10">
          <HiReceiptTax className="text-center text-[50px]" />
          <h4>THOMAS NORTHMAN</h4>
          <p className="text-[15px] font-light">TAX LAWYER</p>
        </div>

        <div className="mt-10 gap-5 md:mr-0 md:flex md:items-center md:justify-center">
          <ul className="mr-20 hidden cursor-pointer text-white md:mr-0 md:flex md:space-x-20">
            <li>About</li>
            <li>Disputes</li>
            <li>International</li>
            <li>Rates & Fees</li>
            <li className="mr-20 md:mr-0">Contact</li>
          </ul>
        </div>
        <div className="mr-10 mt-10 flex items-center justify-center md:mr-0">
          <p className="mb-10">&copy;Copyright 2024 al right Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
