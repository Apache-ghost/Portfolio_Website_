
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
import ScrollIndicator from '../decorations/ScrollIndicator';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black relative min-h-screen"
    >
      <LeftBanner />
     <RightBanner />
      <ScrollIndicator />
    </section>
  );
}

export default Banner