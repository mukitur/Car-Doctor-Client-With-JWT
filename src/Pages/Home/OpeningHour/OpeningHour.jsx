import { FaCalendarCheck } from 'react-icons/fa6';
const OpeningHour = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-5 mb-16 bg-black p-4 rounded-lg">
      {/* first part */}
      <div className="flex-1 text-white my-8">
        <div className="flex gap-3 items-center">
          <FaCalendarCheck className="text-5xl text-orange-700" />
          <div>
            <p>We are open monday-frida</p>
            <h3 className="text-2xl font-bold">7:00 am - 9:00 pm</h3>
          </div>
        </div>
      </div>
      {/* 2nd part */}
      <div className="flex-1 text-white my-8">
        <div className="flex gap-3 items-center">
          <FaCalendarCheck className="text-5xl text-orange-700" />
          <div>
            <p>Have a question?</p>
            <h3 className="text-2xl font-bold">+2546 251 2658</h3>
          </div>
        </div>
      </div>
      {/* 3rd part */}
      <div className="flex-1 text-white my-8">
        <div className="flex gap-3 items-center">
          <FaCalendarCheck className="text-5xl text-orange-700" />
          <div>
            <p>Need a repair? our address</p>
            <h3 className="text-2xl font-bold">Liza Street, New York</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningHour;
