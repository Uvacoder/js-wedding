const Travel = () => {
  return (
    <div className="max-w-6xl">
      <div>
        Below you’ll find details about parking, shuttles, and hotel recommendations near the venue.
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <h2 className="font-semibold">
            The Where
          </h2>
        </div>
        <div className="md:w-1/2">

          <div className="py-4">
            <h3 className="font-bold">Wedding Venue</h3>
            <div>
              <span className="font-bold">Watson Block</span>
              <address className="mt-3">
                126 N. 1st Ave
                <br />
                Minneapolis, MN
                <br />
                55411
              </address>
            </div>
          </div>

          <div className="border-t border-b border-white py-4">
            <h3 className="font-bold">Traveling by car</h3>
            <p>
              Provide any important travel details or tips. You may want to include parking directions, estimated travel time, tips for avoiding traffic, and a description of the entrance.
            </p>
          </div>

          <div className="py-4">
            <h3 className="font-bold">Traveling by plane</h3>
            <p>
              Provide any important travel details or tips. You may want to include shuttle pick-up location and times, car rental options, and estimated travel time from the airport.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="font-semibold">
              The Stay
            </h2>
            <span className="font-bold">Loews Minneapolis</span>
            <address className="mt-3">
              126 N. 1st Ave
              <br />
              Minneapolis, MN
              <br />
              55411
            </address>

            <a href="https://www.loewshotels.com/minneapolis-hotel/white-yunginger-wedding" target="_blank" className="px-3 py-2 font-medium my-2 rounded-sm border border-gold text-gold transition-colors duration-300 hover:text-black hover:bg-gold">
              Book your room
            </a>

          </div>

          <div className="md:w-1/2">
            <div className="py-4">
              <div>
                picture
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Travel;
