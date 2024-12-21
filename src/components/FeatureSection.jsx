import Logo from "./LogoPage";
import { FaArrowRight } from "react-icons/fa";
import { RiVideoLine } from "react-icons/ri";

const FeatureSection = () => {
  return (
    <>
      <div className="bg-grey-100 py-12 px-6 md:px-16">
        <div className="w-full flex-col items-center justify-center mx-auto rounded-3xl">
          <div className="flex items-center justify-center">
            <div className="flex w-full md:w-1/3 items-center justify-between border bg-[#f9eff9] rounded-full shadow-md mb-4 p-1">
              <span className="text-sm ml-1 font-semibold bg-[#ffffff] text-[#6941C6] p-2 rounded-full md:p-2">
                New Feature
              </span>
              <div className="md:flex flex items-center md:p-2">
                <p className="text-sm md:text-lg text-[#6941C6]">
                  Check out the team dashboard
                </p>
                <FaArrowRight className="text-[#6941C6] md:text-sm md:ml-1" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-semibold text-black mb-6">
              Beautiful analytics to grow smarter
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Powerful, self-serve product and growth analytics to help you
              convert, engage, and retain more users. Trusted by over 4,000
              startups.
            </p>

            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <div className="flex items-center gap-2 bg-gray-200 text-gray-800 px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
                <RiVideoLine className="text-gray-500 text-2xl animate-pulse" />
                <span className="text-sm md:text-base font-medium text-gray-700">
                  Demo
                </span>
              </div>

              <button className="bg-[#6941C6] text-sm md:text-base font-medium text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <img
          className="mt-6 bg-black p-1 border-collapse rounded-2xl z-1"
          src="https://s3-alpha-sig.figma.com/img/081a/4c6e/48bee3c577d90c805ebc6abe73e441d3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SR~9DeM3vhGlHKTXqXxCLv7xU~J9DMhzVlb9nhLAkmmQdHwgtmcnRzEqg7WwXFOcNtIvLiBTjRYjoGT7uQXK8AHbUTzZpx42v~ozCdmt7qHZj1lKKSIKoa6gPKqfUXn-o8KOTZ-fDnMdb-cjkgkWKG6DX9M-CRhMCFB2zIiKHR~1WTRiLVdrM43n8tKebyUMUtIc3quxvOQoYDRo4I4IuTBNY18XSQpng4IChSOb~38dEboVgA71IqMYd4KHCFzjhwVnCJEi2stv55O5ehPHzMyTg~BqZ~vrqibehhAcYl1iqiSDCYUR1Y4bNLhOfShsTULsjiFZfSHq-e2PVn93hQ__"
          alt="Team Dashboard"
        />
      </div>
      <Logo />
    </>
  );
};

export default FeatureSection;
