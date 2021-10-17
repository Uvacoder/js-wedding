const Schedule = () => {
  return (
    <div className="md:pt-10 mx-auto max-w-5xl w-full">
      <div className="flex flex-col md:flex-row p-4 items-center md:p-0 md:mb-4 md:justify-evenly">
        <div className="md:w-1/5 md:mr-3">
          <h1 className="font-semibold text-5xl leading-tight">Schedule</h1>
        </div>
        <div className="md:w-2/5">
          All wedding day events will take place at Watson Block.
          See <a href="/travel" className="inline font-semibold text-gold hover:text-white transition duration-300">here</a> for more info.
        </div>
      </div>

      <hr className="my-6 md:my-10 md:mx-12" />

      <div className="flex flex-col md:flex-row p-4 md:p-0 md:mb-12 md:justify-evenly">
        <div className="md:w-1/5 md:mr-2">
          <h2 className="font-semibold">
            The When
          </h2>
        </div>
        <div className="md:w-2/5">
          <p>
            <span className="font-medium my-1 inline-block">Welcome drinks</span> – 5:30pm
            <br />
            <span className="font-medium my-1 inline-block">Ceremony</span> – 6:15pm
            <br />
            <span className="font-medium my-1 inline-block">Cocktail Hour</span> – 6:30pm
            <br />
            <span className="font-medium my-1 inline-block">Dinner</span> – 7:15pm
            <br />
            <span className="font-medium my-1 inline-block">Party w/ <a href="https://instagram.com/heymissbrit" target="_blank" rel="noopener nofollow" className="inline font-semibold text-gold hover:text-white transition duration-300">DJ Miss Brit</a></span> – 8:30pm
            <br />
            <span className="font-medium my-1 inline-block">Champagne Toast</span> – 12:00am
            <br />
            <span className="font-medium my-1 inline-block">After Party</span> – 12:30am
          </p>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
