export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div class="parallax relative bg-fixed bg-bottom bg-no-repeat bg-cover opacity-70">
        <div class="caption w-full text-center">
          <h1 class="font-semibold text-6xl text-white" style={{ textShadow: "4px 1px 10px black" }}>We're getting married!</h1>
        </div>
      </div>

      <div className="w-full p-3 md:py-5 md:px-5">
        <div className="flex-col max-w-2xl mx-auto items-center justify-center text-center">
          <div className="md:my-6">
            <h2 className="text-4xl">The Beginning</h2>
            <h3 className="font-semibold my-2">- 02.05.19 -</h3>
            <p>
              We met in one of our favorite places, the gym. During the 2019 Crossfit Open, J, who has an annoying but adorable habit of being very supportive, was cheering for every class on Fridays in February during the competition. Sasha, who was attending the early sessions to AVOID the large late night classes, was simply minding her business. J kept coming and cheering and Sasha kept working out and trying to ignore J in the corner. Eventually Sasha started to come to later classes to cheer for J, and their other mutual friends (though I'm pretty sure Sasha was solely coming to cheer for me, J 🙃)
            </p>
          </div>
        </div>

        <hr className="mx-auto w-3/4 my-12 md:w-48 md:my-20" />

        <div className="flex-col max-w-2xl mx-auto items-center justify-center text-center">
          <div className="md:my-6">
            <h2 className="text-4xl">The Proposal</h2>
            <h3 className="font-semibold my-2">- 07.17.20 -</h3>
            <p>
              I woke up one day and knew it was time to propose. There's nobody I'd rather spend my time with in the world than Sasha. So I began plotting. I knew I wanted to involve some of the people we love most in the world, but not do it 'in public'. I came up with the idea for the cards just when we were playing Phase10 one night, we played that game A LOT. I lose to Sasha A LOT, so it was perfect.
            </p>
            <p>
              Sasha knew I was proposing probably for weeks, but for sure the day of & before. I can't keep a secret from her. I wanted to just tell her I was doing it so she knew! Which isn't the point but oh well.
            </p>
            <p>
              I was so nervous, everybody that was there could probably tell. My hands were shaking, I was sweating so much,
            </p>
          </div>
          <img src="/images/proposal.jpeg" alt="" className="" />
        </div>

        <div class="parallax relative bg-fixed bg-bottom bg-no-repeat bg-cover opacity-70">
          <div class="caption w-full text-center">
            <div class="font-semibold text-6xl text-white" style={{ textShadow: "4px 1px 10px black" }}>We're getting married!</div>
            <a href="/rsvp" className="border p-3 font-semibold">RSVP</a>
          </div>
        </div>
      </div>
    </div>
  )
}
