const Hero = () => {
  return (
    <div>


<section
   className="relative  bg-[url(https://i.ibb.co/vBwY2jn/hero.webp)] bg-cover bg-center bg-no-repeat"
>
<div className="absolute inset-0 bg-gradient-to-r from-white/50 to-white/50"></div>


  <div
     className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div  className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
      <h1  className="text-3xl font-extrabold sm:text-5xl">
Soluciones Industriales
        <strong  className="block font-extrabold text-rose-700">
          para tu empresa
       </strong>
      </h1>


      <div  className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
           className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Contactanos
        </a>

    
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default Hero;
