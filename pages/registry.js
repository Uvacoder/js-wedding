import Script from 'next/script'

const Registry = () => {
  return (
    <div className="w-full max-w-5xl h-full">
      <Script
        id="zola-registry"
        dangerouslySetInnerHTML={{
          __html: `!function(e,t,n){var s,a=e.getElementsByTagName(t)[0];e.getElementById(n)||(s=e.createElement(t),s.id=n,s.async=!0,s.src="https://widget.zola.com/js/widget.js",a.parentNode.insertBefore(s,a))}(document,"script","zola-wjs");`
        }}
      />
      <div className="">
        <p>
          You want to buy us a gift!? First of all, thank you! That's very kind.
        </p>

        <p>
          As you know we've lived together for awhile now. We even bought a house in January! So we've got quite a few things already. So we've decided to add a handful things to a registry, but mainly we'd ask for a contribution to our honeymoon fund!
        </p>

        <p>We're planning on going to St. Thomas, USVI! We are big travelers and to say that the last 20 months have been challenging is putting it kindly. We look forward to spending the beginning of our married life on a beach, doing water sports, exploring on a hike, and doing a little dancing.</p>

        <div className="mt-5 md:mt-8 pt-5 md:pt-8 border-white border-t">
          <a class="zola-registry-embed" href="www.zola.com/registry/sashaandjenessa" data-registry-key="sashaandjenessa">Our Zola Wedding Registry</a>
        </div>
      </div>
    </div>
  );
}

export default Registry;
