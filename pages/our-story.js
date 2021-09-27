import { Parallax, Background } from 'react-parallax';
const insideStyles = {
  bottom: "10%",
  left: "20%",
  transform: "translate(-50%,-50%)"
};
const Container = () => (
  <Parallax bgImage={"/images/hero.jpeg"}>
    <div style={{ height: 500 }}>
      <div className="absolute font-display text-7xl text-black font-semibold" style={insideStyles}>Our Story</div>
    </div>

  </Parallax>
);

const OurStory = () => (
  <div className="w-full">
    <div className="relative">
      <Container />
    </div>

    <div className="w-full max-w-5xl">
      We both work in music—Malcolm is a DJ, and I’m an artist manager. I got invited to see him perform at a place downtown. After his set, I struck up a conversation, and we immediately hit it off. We exchanged numbers, and the rest is history.
    </div>

    <div>
      <div><img src="https://via.placeholder.com/300x400" alt="" /></div>
      <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  </div>
)

export default OurStory;
