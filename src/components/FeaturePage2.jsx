import FeaturePage3 from "./FeaturePage3";
import { FaSmile } from "react-icons/fa";
import { FiLink } from "react-icons/fi";
import { MdGroup } from "react-icons/md";
import { HiLightningBolt } from "react-icons/hi";
import { TbMessages } from "react-icons/tb";
import { TbMessageCircleHeart } from "react-icons/tb";

const FeaturePage2 = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] py-12 px-6 md:px-16">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-[#6941C6] text-lg font-medium mb-4">Features</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Analytics that feels like it’s from the future
          </h1>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center bg-white shadow-md rounded-md mb-2">
            <div className="text-center p-6">
              <TbMessages className="text-gray-800 text-6xl mx-auto border shadow-md p-4 rounded-lg" />
              <p className="mt-4 mb-4 text-xl font-bold text-gray-800">
                Share team inboxes
              </p>
              <p className="text-gray-700">
                Whether you have a team of 2 or 200, our shared team inboxes
                keep everyone on the same page and in the loop.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white shadow-md rounded-md mb-2">
            <div className="text-center p-6">
              <HiLightningBolt className="text-gray-800 text-6xl mx-auto border shadow-md p-4 rounded-lg" />
              <p className="mt-4 mb-4 text-xl font-bold text-gray-800">
                Deliver instant answers
              </p>
              <p className="text-gray-700">
                An all-in-one customer service platform that helps you balance
                everything your customers need to be happy.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white shadow-md rounded-md mb-2">
            <div className="text-center p-6">
              <MdGroup className="text-gray-800 text-6xl mx-auto border shadow-md p-4 rounded-lg" />
              <p className="mt-4 mb-4 text-xl font-bold text-gray-800">
                Manage your team with reports
              </p>
              <p className="text-gray-700">
                Measure what matters with Untitled’s easy-to-use reports. You
                can filter, export, and drill down on the data in a couple of
                clicks.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white shadow-md rounded-md mb-2">
            <div className="text-center p-6">
              <FaSmile className="text-gray-800 text-6xl mx-auto border shadow-md p-4 rounded-lg" />
              <p className="mt-4 mb-4 text-xl font-bold text-gray-800">
                Connect with customers
              </p>
              <p className="text-gray-700">
                Solve a problem or close a sale in real-time with chat. If no
                one is available, customers are seamlessly routed to email
                without confusion.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-white shadow-md rounded-md mb-2">
            <div className="text-center p-6">
              <FiLink className="text-gray-800 text-6xl mx-auto border shadow-md p-4 rounded-lg" />
              <p className="mt-4 mb-4 text-xl font-bold text-gray-800">
                Connect the tools you already use
              </p>
              <p className="text-gray-700">
                Explore 100+ integrations that make your day-to-day workflow
                more efficient and familiar. Plus, our extensive developer
                tools.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center bg-white shadow-md rounded-md mb-2">
            <div className="text-center p-6">
              <TbMessageCircleHeart className="text-gray-800 text-6xl mx-auto border shadow-md p-4 rounded-lg" />
              <p className="mt-4 mb-4 text-xl font-bold text-gray-800">
                Our people make the difference
              </p>
              <p className="text-gray-700">
                We’re an extension of your customer service team, and all of our
                resources are free. Chat to our friendly team 24/7 when you need
                help.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white shadow-md border py-10 px-4 md:px-16 rounded-lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <img
              src="https://i.imgur.com/G7KO6dF.jpeg"
              alt="SI"
              className="mx-auto w-1/4 h-14 mt-4 rounded-2xl"
            />
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8">
            We’ve been using Untitled to kick start every new project and can’t
            imagine working without it.
          </h2>

          <div className="flex flex-col items-center gap-4">
            <img
              src="https://s3-alpha-sig.figma.com/img/fcd7/e604/94e98ef4a34b3228a1783b7f500b0df6?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=npOE-K~i6hA8OvsL-lkmHTLZO0szKxBMK2dS-ibFk~M8TF1Zuyn5g2XC76wwKZfkbzxd4KKHU~GkoKsitYpmA38qrAkfDFnCijoMaeoZ3Jclmt26V6lVvOCxuTFARnL1yLhxW2b2HWShcAczS4MwUwZt3V2vr4uwTyYbYf5Dv7G1Z6vGLCpb90XfoTRWIbK1tNoQpbe1epuVYldwlzMG0xf7WDTRrQ2gVdjqQwskRDoAprK452J4-C87Sah0ynFq7gH7wspr7i0l3eeyuZfWlRUHYN3E06FLJgrxutC6zQhaELLdrtFfIRXvkzp25lDi3pGhLTw7zGkFuKgOV7wkwA__"
              alt="Candice Wu"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <p className="font-bold text-lg text-gray-900 mb-1">Candice Wu</p>
              <p className="text-gray-700">Product Manager, Sisyphus</p>
            </div>
          </div>
        </div>
      </div>
      <FeaturePage3 />
    </>
  );
};

export default FeaturePage2;
