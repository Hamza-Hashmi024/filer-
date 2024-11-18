import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          ></div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
            <div className="text-center">
              <h1 className="text-balance text-2xl font-semibold tracking-tight text-[#47464C] sm:text-6xl">
                Welcome to Your Trusted Business Partner
              </h1>
              <p className="mt-8 text-lg font-medium text-[#47464C] sm:text-xl/8">
                Empowering your growth and unlocking new opportunities for success. Discover solutions tailored to meet your unique needs, all in one place.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <button
                  onClick={() => navigate("/get-started")}
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
                  style={{ backgroundColor: '#B4C424' }}
                >
                  Get started
                </button>
                <button
                  onClick={() => navigate("/services")}
                  className="text-sm/6 font-semibold text-[#47464C]"
                >
                  Explore Our Services →
                </button>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#B4C424] to-[#47464C] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

