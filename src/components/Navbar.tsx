const Navbar = () => {
    return (
      <div>
        <nav className="flex-no-wrap relative flex w-full p-6 items-center justify-between bg-[#191919] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-8 ">
          <div className="flex w-full justify-center px-3 lg:justify-between">
            <a
              className=" mb-4 ml-2 mr-5 mt-3 flex items-center text-white hover:text-red-900 focus:text-white dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0 lg:block"
              href="#"
            >
              <img
                src="https://i.ibb.co/xY1Tws9/LOGO-INDUCALL-ULTIMO-MARZO-17-2021.png"
                style={{ height: "80px" }}
                alt="TE Logo"
                loading="lazy"
              />
            </a>
            <ul className="list-style-none flex items-center pl-0 space-x-4">
              <li>
                <a
                  className="text-white  transition duration-200 hover:text-rose-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="#nosotros"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  className="text-white  transition duration-200 hover:text-rose-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="#"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a
                  className="text-white  transition duration-200 hover:text-rose-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                  href="#"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Navbar;
  