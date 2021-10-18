export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="parallax relative bg-no-repeat bg-cover opacity-70">
        <div className="caption w-full text-center">
          <div className="font-semibold text-white flex flex-col bg-opacity-70 rounded p-2 mx-auto max-w-xs sm:bg-black md:bg-opacity-0 md:max-w-none md:w-4/5">
            <h1 className="font-semibold text-5xl text-white" style={{ textShadow: "3px 1px 10px rgba(0,0,0,0.8)" }}>We're getting married!</h1>
          </div>
        </div>
      </div>

      <div className="w-full p-3 md:py-5 md:px-5">
        <div className="flex-col max-w-2xl mx-auto items-center justify-center text-center">
          <div className="md:my-6">
            <h2 className="text-4xl">WEDDING DAY</h2>
            <h3 className="font-semibold mb-2">- 12.31.21 -</h3>
            <p>
              5:30PM – 12:30 AM
              <br />
              Watson Block
              <br />
              126 N. 1st Ave, Minneapolis, MN, 55411
              <br />
              Attire: Formal Dress Requested
            </p>
          </div>
        </div>

        <hr className="my-6 md:my-10 md:mx-12" />
        <div className="flex-col max-w-2xl mx-auto items-center justify-center text-center">
          <div className="md:my-6">
            <h2 className="text-4xl">The Beginning</h2>
            <h3 className="font-semibold mb-2">- 02.05.19 -</h3>
            <p>
              We met in one of our favorite places, the gym. During the 2019 Crossfit Open, J, who has an annoying but adorable habit of being very supportive, was cheering for every class on Fridays in February during the competition. Sasha, who was attending the early sessions to AVOID the large late night classes, was simply minding her business.
            </p>
            <p>
              J kept coming and cheering and Sasha kept working out and trying to ignore J in the corner. Eventually Sasha started to come to later classes to cheer for J, and their other mutual friends (though I'm pretty sure Sasha was solely coming to cheer for me, J 🙃)
            </p>
            <p>
              We went on our first date shortly after the Open was over. We easily could have talked for hours, but eventually ended a bit awkwardly when J attempted to buckle Sasha into her truck. J quickly redeemed herself on another date, and then another.
            </p>
          </div>
        </div>

        <hr className="my-6 md:my-10 md:mx-12" />

        <div className="flex-col max-w-2xl mx-auto items-center justify-center text-center">
          <div className="md:my-6">
            <h2 className="text-4xl">The Proposal</h2>
            <h3 className="font-semibold mb-2">- 07.19.20 -</h3>

            <img src="/images/hero.jpeg" alt="" className="rounded my-3 md:my-6" />
            <p>
              I woke up one day and knew it was time to propose. There's nobody I'd rather spend my time with in the world than Sasha. So I began plotting. I knew I wanted to involve some of the people who we love most in the world, but not do it 'in public'. I came up with the idea for the cards just when we were playing Phase10 one night, we played that game A LOT. I lose to Sasha A LOT, so it was perfect.
            </p>
            <p>
              Sasha knew I was proposing probably for weeks, but for sure the day of & before. I can't keep a secret from her. I wanted to just tell her I was doing it so she knew! Which isn't the point but oh well. I didn't tell her and our friends and family actually kept the secret. Sasha has some spidey senses but went along with it!
            </p>
            <p>
              I was so nervous, everybody that was there could probably tell. My hands were shaking, I was sweating so much. But once she was in front of me grinning I knew it was exactly what I was supposed to be doing and who I was supposed to be doing it with.
            </p>
          </div>
        </div>

      </div>
      <div className="bg-cover bg-no-repeat flex opacity-70 parallax-bottom relative md:mt-10">
        <div className="caption-bottom text-center">
          <div className="font-semibold text-white flex flex-col bg-black bg-opacity-70 rounded p-4 mx-auto max-w-xs">
            <p style={{ textShadow: "3px 1px 10px rgba(0,0,0,0.8)" }}>
              We look forward to sharing this moment with you and bringing in a new year together.
            </p>
            <a href="/rsvp" className="px-3 py-2 font-medium my-2 rounded-sm border border-black text-black bg-gold transition-colors duration-300 hover:text-gold hover:bg-black">RSVP</a>
          </div>
        </div>
      </div>
    </div>
  )
}
