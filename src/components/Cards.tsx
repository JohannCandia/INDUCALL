import { Fade } from "react-awesome-reveal";

const Cards = () => {
  return (
    <>
      <div className="w-full  z-50 sticky  px-6 bg-zinc-900">
        <Fade cascade damping={0.2}>

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between w-full mb-6 lg:flex-row">
            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                  Lorem Ipsum Is Cool.
                </h2>
                <p className="text-white text-base md:text-lg">
                  {" "}
                  Lorem Ipsum is so cool and awesome to act and so cool to
                  think. And very awesome to eat and talk.
                </p>
              </div>
              <div className="flex items-center space-x-3"></div>
            </div>
            <img
              alt="logo"
              width="450"
              height="450"
              src="https://images.unsplash.com/photo-1542304074-9c8ce93b52fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </div>
     

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <img
              alt="logo"
              width="450"
              height="450"
              src="https://images.unsplash.com/photo-1515023677547-593d7638cbd6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />

            <div className="mb-16 lg:mb-0 lg:max-w-lg lg:pr-5">
              <div className="max-w-xl mb-6">
                <h2 className="font-sans text-3xl sm:mt-0 mt-6 font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                  Step 2 : Awesome Is Lorem Ipsum
                </h2>
                <p className="text-white text-base md:text-lg">
                  Lorem Ipsum is so cool and awesome to act and so cool to
                  think. And very awesome to eat and talk.
                </p>
              </div>
              <div className="flex items-center space-x-3"></div>
            </div>
          </div>
        </div>
     

        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between w-full mb-10 lg:flex-row">
            <img className="mb-10  lg:mb-0 lg:max-w-lg lg:pr-5" />
            <div className="max-w-xl mb-6">
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none max-w-lg mb-6">
                Step 3 : Cool and awesome is lorem ipsum
              </h2>
              <p className="text-white text-base md:text-lg">
                Lorem Ipsum is so cool and awesome to act and so cool to think.
                And very awesome to eat and talk.
              </p>
            </div>

            <img
              alt="logo"
              width="450"
              height="450"
              src="https://images.unsplash.com/photo-1546195643-70f48f9c5b87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </div>
        </div>
        </Fade>
      </div>
    </>
  );
};

export default Cards;
