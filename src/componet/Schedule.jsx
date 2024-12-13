import { HiHome, HiPhone } from "react-icons/hi";
import { HiBookOpen } from "react-icons/hi2";

function Schedule() {
  return (
    <div className="p-5 md:p-20">
      <h2>Schedule a Consult</h2>
      <div className="md:flex md:space-x-[300px]">
        <div className="mt-16 items-center rounded-lg bg-[rgb(248,248,249)] md:w-[400px] md:p-16">
          <div className="mb-20">
            <h4 className="flex text-center">
              <HiHome className="mt-1 h-3 w-7" /> Address
            </h4>
            <p className="text-[15px] font-light">
              The Law Office of Thomas Northman
            </p>
            <p className="text-[15px] font-light">306 Green st.</p>
            <p className="text-[15px] font-light">Suite 1305</p>
            <p className="text-[15px] font-light">San Francisco, CA 5604</p>
          </div>
          <div className="mb-20">
            <h4 className="flex text-center">
              <HiBookOpen className="mt-1 h-3 w-7" />
              Email
            </h4>
            <p className="text-[15px] font-light">areolaadeleke10@yahoo.com</p>
          </div>

          <div>
            <h4 className="flex text-center">
              <HiPhone className="mt-1 h-3 w-7" />
              Phone
            </h4>
            <p className="text-[15px] font-light">08147994799</p>
          </div>
        </div>

        <div>
          <form
            action="https://getform.io/f/bgddqeqa"
            method="POST"
            className="flex flex-col"
          >
            <div className="mt-10 flex flex-col gap-9 md:flex-row md:gap-0 md:space-x-6">
              <div className="flex flex-col">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstname"
                  required
                  className="w-80 rounded-xl border-2 border-slate-500 p-3"
                  placeholder="FirstName"
                />
              </div>
              <div className="flex flex-col">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  required
                  className="w-80 rounded-xl border-2 border-slate-500 p-3"
                  placeholder="LastName"
                />
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-9 md:flex-row md:gap-0 md:space-x-6">
              <div className="flex flex-col">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-80 rounded-xl border-2 border-slate-500 p-3"
                  placeholder="Email"
                />
              </div>

              <div className="flex flex-col">
                <label>Phone Number</label>
                <input
                  type="number"
                  name="number"
                  required
                  className="w-80 rounded-xl border-2 border-slate-500 p-3"
                  placeholder="Number"
                />
              </div>
            </div>
            <div className="mt-10 flex flex-col">
              <label>Message</label>
              <input
                type="text"
                name="message"
                required
                className="w-80 rounded-xl border-2 border-slate-500 p-[70px] md:w-[670px]"
                placeholder="Please Enter Your Message Here"
              />
            </div>
            <div className="mmd:ml-20 ml-4 mt-5">
              <button
                type="submit"
                className="mb-10 w-[300px] rounded-full border-2 bg-slate-600 p-5 text-white md:mb-0"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
