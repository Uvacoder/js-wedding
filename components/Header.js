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
    // <div className="flex items-center justify-between w-full px-3 py-4 sticky top-0 z-10 bg-black">
    //   <a href="/">
    //     <img src="/images/JS_3.svg" alt="gold hexagon with a S & J intertwined"
    //       className='h-12 w-12'
    //     />
    //   </a>

    //   <div className="flex items-center nav hidden md:flex items-center space-x-1">
    //     <a className={LINK_CLASS} href="/our-story">Our Story</a>
    //     <a className={LINK_CLASS} href="/schedule">Schedule</a>
    //     <a className={LINK_CLASS} href="/travel">Travel</a>
    //     <a className={LINK_CLASS} href="/registry">Registry</a>
    //     <a className={LINK_CLASS} href="/faqs">FAQs</a>
    //     <a className={LINK_CLASS} href="/rsvp">RSVP</a>
    //   </div>

    <nav class="bg-black shadow-lg sticky top-0 z-10 w-full">
      <div class="w-full max-w-6xl mx-auto px-4">
        <div class="flex justify-between">

          <a href="#" class="flex items-center py-4 px-2">
            <img src="/images/JS_3.svg" alt="gold hexagon with a S & J intertwined"
              className='h-12 w-12'
            />
          </a>

          {/* <!-- Primary Navbar items --> */}
          <div class="nav hidden md:flex items-center">
            <a className={LINK_CLASS} href="/our-story">Our Story</a>
            <a className={LINK_CLASS} href="/schedule">Schedule</a>
            <a className={LINK_CLASS} href="/travel">Travel</a>
            <a className={LINK_CLASS} href="/registry">Registry</a>
            <a className={LINK_CLASS} href="/faqs">FAQs</a>
            <a className={LINK_CLASS} href="/rsvp">RSVP</a>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button" ref={btn}>
              <svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>


        {/* <!-- mobile menu --> */}
        <div class="hidden mobile-menu" ref={menu}>
          <ul class="">
            <li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
            <li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
            <li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
            <li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
          </ul>
      </div>
      </div>
    </nav>
    // </div>
  )
}
