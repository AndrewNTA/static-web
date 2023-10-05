import Img2 from './images/img2.png';
import Img1 from './images/img1.png';
import MenuIcon from './images/icon-menu.svg';
import MailIcon from './images/icon-mail.png';
import Img3 from './images/img3.png';
import Img4 from './images/img4.png';
import Img5 from './images/img5.png';
import Img6 from './images/img6.png';
import FacebookIcon from './images/icon-facebook.svg';
import ChromeIcon from './images/icon-chrome.svg';
import PinterestIcon from './images/icon-pinterest.svg';
import TwitterIcon from './images/icon-twitter.svg';

function Card({ src, text }) {
  return (
    <div className="sm:w-3/10">
      <img src={src} alt="card-img" />
      <div className="text-xs sm:text-sm pt-2 pb-10 sm:pt-8 sm:pb-0 font-semibold">
        {text}
      </div>
    </div>
  );
}
export default function App() {
  return (
    <div className="container lg mx-auto text-neutral-500">
      <div className="w-full p-4 sm:p-14 flex justify-between items-center">
        <img src={MenuIcon} alt="menu" className="w-5 sm:w-8" />
        <img src={Img1} alt="logo" className="w-12 sm:w-32" />
        <img src={MailIcon} alt="mail" className="w-5 sm:w-8" />
      </div>
      <div className="w-full border-t-2" />
      <img src={Img2} alt="bg" className="w-full p-4 sm:p-14" />
      <div className="w-full p-4 sm:p-14">
        <div className="text-center font-extrabold text-xl sm:text-3xl tracking-wider">
          TRUSTED QUALITY SURPLUS
        </div>
        <div className="w-32 sm:w-40 h-0.5 sm:h-1 my-6 sm:my-8 bg-neutral-500 mx-auto" />
        <div className="text-center italic font-semibold text-base sm:text-xl tracking-wider mt-5">
          Designed & Manufactured in Philadelphia
        </div>
        <div className="text-center font-semibold text-sm sm:text-base tracking-wider mt-8 sm:mt-16">
          Neuarmy Surplus Co. is a Philadelphia-based outpost supplying Limited
          Issue & Standard Issue shirts, Hand-made Field Pouches, Hand-painted
          Wood Signage, Linocut Prints, Large Format Prints, and Other Quality
          Goods. Originaly established in 2002, NSCo. is rooted in thoughtful
          design, quality craftsmanship and hustle
        </div>
        <div className="w-full border-t-2 my-10 sm:my-20" />
      </div>
      <div className="sm:flex sm:justify-between px-4 sm:px-14">
        <Card
          key={1}
          src={Img3}
          text="A behind the scenes look at the process of hand-painting wood signage. White wash, projection, sketches, painting, and detail shots."
        />
        <Card
          key={2}
          src={Img4}
          text="We take time to source our surplus base on overall quality and aesthetic. Here's a few things to know about these salvaged materials"
        />
        <Card
          key={3}
          src={Img5}
          text="An in-depth look at the process of creating our Limited Issues Shirts. Stamping, packaging, detail images, and process shots."
        />
      </div>
      <div className="w-full p-4 sm:p-14">
        <div className="w-full border-t-2 my-4 sm:my-10" />
        <img src={Img6} alt="bg" className="w-full py-4 sm:p-6 mx-auto" />
      </div>
      <div className="w-full border-t-2" />
      <div className="flex justify-center items-center py-4 sm:py-8">
        <div className="font-semibold sm:font-bold text-xxs sm:text-lg px-2 sm:px-4">
          SHIPING INFO
        </div>
        <div className="font-semibold sm:font-bold text-xxs sm:text-lg px-2 sm:px-4">
          RETURNS POLICY
        </div>
        <div className="font-semibold sm:font-bold text-xxs sm:text-lg px-2 sm:px-4">
          TERMS AND CONDITIONS
        </div>
      </div>
      <div className="w-full border-t-2" />
      <div className="w-full p-4 sm:p-8 flex justify-between items-center">
        <div className="w-full flex items-center">
          <img src={ChromeIcon} alt="chrome icon" className="w-6 sm:w-8 ml-2" />
          <img src={PinterestIcon} alt="pinterest icon" className="w-6 sm:w-8 ml-2" />
          <img src={TwitterIcon} alt="twitter icon" className="w-6 sm:w-8 ml-2" />
          <img src={FacebookIcon} alt="facebook icon" className="w-6 sm:w-8 ml-2" />
        </div>
        <div className="font-semibold text-xs sm:text-base whitespace-nowrap">© Neuarmy Surplus</div>
      </div>
    </div>
  );
}
