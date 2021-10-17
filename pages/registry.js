import Script from 'next/script'

const Registry = () => {
  return (
    <div className="md:py-10 mx-auto max-w-3xl">
      <div className="flex flex-col md:flex-row items-center p-4 md:p-0 md:mb-4 md:justify-evenly">
        <div className="md:w-1/5 md:mr-3">
          <h1 className="font-semibold text-5xl leading-tight">Registry</h1>
        </div>
        <div className="md:w-2/5">
          You want to buy us a gift!?
          <br />
          First of all, thank you! That's very kind.
        </div>
      </div>
      <hr className="my-6 md:my-10 md:mx-12" />
      <Script
        id="zola-registry"
        dangerouslySetInnerHTML={{
          __html: `!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");`
        }}
      />
      <div className="md:w-4/5 mx-auto p-4 md:p-0">
        <div className="mt-5 md:mt-8">
          <p>
            As you know we've lived together for awhile now, we even bought a house in January! So we've got quite a few things already. So we've decided to add a handful things to a registry, but mainly we'd ask for a contribution to our honeymoon fund!
          </p>

          <p className="my-6 md:mb-10">We're planning on going to St. Thomas, USVI! We are big travelers and to say that the last 20 months have been challenging is putting it kindly. We look forward to spending the beginning of our married life on a beach, doing water sports, exploring on a hike, and doing a little dancing.</p>

          <a className="zola-registry-embed" href="www.zola.com/registry/sashaandjenessa" data-registry-key="sashaandjenessa">Our Zola Wedding Registry</a>
        </div>
      </div>
    </div>
  );
}

export default Registry;
