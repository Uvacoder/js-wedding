const Travel = () => {
  return (
    <div className="md:pt-10 mx-auto max-w-5xl">
      <div className="flex flex-col md:flex-row p-4 items-center md:p-0 md:mb-4 md:justify-evenly">
        <div className="md:w-1/5 md:mr-3">
          <h1 className="font-semibold text-5xl leading-tight">Travel</h1>
        </div>
        <div className="md:w-2/5">
          Below you’ll find details about the venue, parking, and hotel recommendations near the venue.
        </div>
      </div>

      <hr className="my-6 md:my-10 md:mx-12" />

      <div className="flex flex-col p-4 md:p-0 md:flex-row md:justify-evenly">
        <div className="md:w-1/5 md:mr-2">
          <h2 className="font-semibold">
            The Where
          </h2>
        </div>
        <div className="md:w-2/5">
          <div className="pb-4">
            <h3 className="font-bold mb-2">Wedding Venue</h3>
            <div>
              <span className="font-bold">Watson Block</span>
              <address>
                126 N. 1st Ave
                <br />
                Minneapolis, MN
                <br />
                55411
              </address>
              <p className="mt-2">There are a couple of public pay lots within walking distance. We recommend carpooling, and/or utilizing Uber/Lyft.</p>
            </div>
          </div>

          <div className="border-t border-b border-white py-4">
            <h3 className="font-bold">Traveling by car</h3>
            <p>
              We recommend renting a car to easily get around Minneapolis. Everything in general is within a 20 minute drive (including the airport).
            </p>
          </div>

          <div className="py-4">
            <h3 className="font-bold">Traveling by plane</h3>
            <p>
              The Minneapolis-Saint Paul (MSP) airport is a 20 minute drive from the venue and hotel.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-4 items-center md:p-0 md:my-6 md:flex-row md:justify-evenly">
        <div className="md:w-1/5 md:mr-3">
          <h2 className="font-semibold mb-2">
            The Stay
          </h2>
          <span className="font-bold">Loews Minneapolis</span>
          <address className="mb-2">
            601 N 1st Ave
            <br />
            Minneapolis, MN
            <br />
            55403
          </address>

          <p className="text-xs">
            Use Code:
            <br />
            <span>White & Yunginger Wedding</span>
            <br />
            <br />
            <strong>Please use this link when booking your room, otherwise you may pay higher rates.</strong>
          </p>
          <a href="https://www.loewshotels.com/minneapolis-hotel/white-yunginger-wedding" target="_blank" rel="noopener" className="px-3 py-2 font-medium my-2 rounded-sm border border-gold text-gold transition-colors duration-300 hover:text-black hover:bg-gold">
            Book your room
          </a>
        </div>

        <div className="md:w-2/5">
          <img src="/images/hotel.jpeg" alt="" className="rounded" />
          <p className="text-xs mt-2">
            Check-In: Friday, Dec 31, 2021 | Check-Out: Saturday, Jan 1, 2022
          </p>
        </div>
      </div>
    </div>
  );
}

export default Travel;
