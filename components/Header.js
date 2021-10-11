import { useState } from "react";
const LINK_CLASS = "m-2 p-2 border-b border-gold font-semibold text-white relative inline-block overflow-hidden transition duration-200"
const MOBILE_LINK_CLASS = "mx-3 px-1 py-3 border-b border-gold font-semibold text-white"
export default function Header() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);
  const toggle = () => setToggleMobileMenu(!toggleMobileMenu);

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
            <a className={LINK_CLASS} href="/schedule">Schedule</a>
            <a className={LINK_CLASS} href="/travel">Travel</a>
            <a className={LINK_CLASS} href="/registry">Registry</a>
            <a className={LINK_CLASS} href="/faqs">FAQs</a>
            <a className={LINK_CLASS} href="/rsvp">RSVP</a>
          </div>

          {/* <!-- Mobile menu button --> */}
          <div className="md:hidden flex items-center p-4">
            <button className="outline-none mobile-menu-button" onClick={toggle}>
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
        <div className={`${!toggleMobileMenu && 'hidden'} slide-down md:hidden flex flex-col pb-5`}>
          <a className={MOBILE_LINK_CLASS} href="/schedule">Schedule</a>
          <a className={MOBILE_LINK_CLASS} href="/travel">Travel</a>
          <a className={MOBILE_LINK_CLASS} href="/registry">Registry</a>
          <a className={MOBILE_LINK_CLASS} href="/faqs">FAQs</a>
          <a className={MOBILE_LINK_CLASS} href="/rsvp">RSVP</a>
        </div>
      </div>
    </nav>
  )
}
