import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const AmbassadorSpace = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-black via-gray-900 to-red-900 mb-16 rounded-2xl shadow-xl">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-red-400 bg-clip-text text-transparent text-center">
          Ambasador: Mads Polska
        </h3>
        <p className="text-gray-300 mb-6 text-lg text-center max-w-2xl">
          Odwiedźcie również nasze social media i bądźcie na bieżąco z
          najnowszymi wydarzeniami oraz inspiracjami ze świata motoryzacji!
        </p>
        <div className="flex gap-6 justify-center">
          <a
            href="https://www.instagram.com/mads_polska?igsh=MXUwZHpsa2tqczZ3eQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-600 transition-colors text-4xl"
            aria-label="Instagram Mads Polska"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/madspolska?mibextid=wwXIfr&rdid=lHkhAyUbLmacRVe4#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-600 transition-colors text-4xl"
            aria-label="Facebook Mads Polska"
          >
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AmbassadorSpace;
