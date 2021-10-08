import { useEffect, useRef } from "react";
const LINK_CLASS = "m-2 p-2 border-b border-b-gold font-semibold text-white relative inline-block overflow-hidden transition duration-200"
export default function Header({ title }) {
  const btn = useRef()
  const menu = useRef()

  useEffect(() => {
    // btn?.addEventListener("click", () => {
    //   menu.classList.toggle("hidden");
    // });
    // return () => (btn?.addEventListener("click", () => {
    //   menu.classList.toggle("hidden");
    // }))
  });
  return (
    <nav className="bg-black shadow-lg sticky z-10 w-full" style={{ top: '-1px' }}>
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between">

          <a href="/" className="flex items-center py-4 px-2">
            <img src="/images/JS_3.svg" alt="gold hexagon with a S & J intertwined"
              className='h-12 w-12'
            />
          </a>

          {/* <!-- Primary Navbar items --> */}
          <div className="nav hidden md:flex items-center">
            <a className={LINK_CLASS} href="/our-story">Our Story</a>
            <a className={LINK_CLASS} href="/schedule">Schedule</a>
            <a className={LINK_CLASS} href="/travel">Travel</a>
            <a className={LINK_CLASS} href="/registry">Registry</a>
            <a className={LINK_CLASS} href="/faqs">FAQs</a>
            <a className={LINK_CLASS} href="/rsvp">RSVP</a>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" ref={btn}>
              <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>


        {/* <!-- mobile menu --> */}
        <div className="hidden mobile-menu" ref={menu}>
          <ul className="">
            <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
            <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
            <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
            <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
