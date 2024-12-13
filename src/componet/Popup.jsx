function Popup({ setOpenPopup }) {
  return (
    <div className="absolute inset-0 z-40 h-[100%] w-[100%] bg-black bg-opacity-50">
      <div className="mt-[50px] md:flex md:items-center md:justify-center">
        <form
          action="https://getform.io/f/bgddqeqa"
          method="POST"
          className="mb-20 flex h-[800px] flex-col rounded-xl bg-slate-700 md:mb-0 md:h-[610px] md:w-[700px]"
        >
          <button
            className="ml-[360px] flex text-right text-[27px] text-white md:ml-[670px]"
            onClick={() => setOpenPopup(false)}
          >
            X
          </button>
          <div className="ml-5 mt-10 flex flex-col md:flex-row md:space-x-6">
            <div className="flex flex-col">
              <label className="text-white">First Name</label>
              <input
                type="text"
                name="firstname"
                required
                className="w-80 rounded-xl border-2 border-black p-3"
                placeholder="FirstName"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-white">Last Name</label>
              <input
                type="text"
                name="lastname"
                required
                className="w-80 rounded-xl border-2 border-black p-3"
                placeholder="LastName"
              />
            </div>
          </div>

          <div className="ml-5 mt-10 flex flex-col md:flex-row md:space-x-6">
            <div className="flex flex-col">
              <label className="text-white">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-80 rounded-xl border-2 border-black p-3"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-white">Phone Number</label>
              <input
                type="number"
                name="number"
                required
                className="w-80 rounded-xl border-2 border-black p-3"
                placeholder="Number"
              />
            </div>
          </div>
          <div className="ml-5 mt-10 flex flex-col">
            <label className="text-white">Message</label>
            <input
              type="text"
              name="message"
              required
              className="w-80 rounded-xl border-2 border-black p-[70px] md:w-[670px]"
              placeholder="Please Enter Your Message Here"
            />
          </div>
          <div className="ml-8 mt-5 md:ml-20">
            <button
              type="submit"
              className="w-[300px] rounded-full border-2 bg-white p-5"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Popup;
