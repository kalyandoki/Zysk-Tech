import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const FaQuestionPage = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);

  return (
    <>
      <div className="bg-white py-12 shadow-md px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Frequently asked questions
          </h1>

          <p className="text-md md:text-lg text-[#475467] p-2 md:p-4 mb-4 md:mb-6 ">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <h1 className="text-sm md:text-lg font-semibold text-gray-800">
                Is there a free trial available?
              </h1>

              <button
                onClick={() => {
                  setIsOpen1(!isOpen1);
                }}
                className="text-gray-500 hover:text-gray-800 text-2xl font-bold"
              >
                {isOpen1 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-500" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-500" />
                )}
              </button>
            </div>

            {isOpen1 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-lg font-semibold text-gray-800">
                Can I change my plan later?
              </p>

              <button
                onClick={() => {
                  setIsOpen2(!isOpen2);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen2 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-500" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-500" />
                )}
              </button>
            </div>

            {isOpen2 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Yes, you can change your plan later. Whether youre referring to
                a subscription plan, project scope, or technology stack, many
                plans allow for adjustments over time based on your evolving
                needs. Its important to understand the terms of the plan you’re
                on (such as contract length or cancellation fees) if its related
                to a service or subscription. However, in most cases, you can
                modify your approach, features, or strategy as you progress
                through your project or service.
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-lg font-semibold text-gray-800">
                What is your cancellation policy?
              </p>

              <button
                onClick={() => {
                  setIsOpen3(!isOpen3);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen3 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-500" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-500" />
                )}
              </button>
            </div>

            {isOpen3 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Notice Period: How far in advance you need to notify for
                cancellation (e.g., immediate, 30 days). Refund Eligibility:
                Whether youll receive a full, partial, or no refund, and if
                applicable, any fees deducted. Contractual Obligations: If
                you`re in a fixed-term agreement, there may be penalties for
                early cancellation. Process: Steps to initiate cancellation,
                such as contacting support, filling out a form, or using an
                online portal.
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-lg font-semibold text-gray-800">
                Can other info be added to an invoice?
              </p>

              <button
                onClick={() => {
                  setIsOpen4(!isOpen4);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen4 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-500" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-500" />
                )}
              </button>
            </div>

            {isOpen4 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Customer Details: Customer`s tax ID (e.g., GSTIN, VAT number).
                Contact person’s name and designation. Invoice Customizations:
                Purchase Order (PO) number or reference. Project name or
                description. Payment Details: Payment terms (e.g., `Net 30
                days``). Bank account details for direct transfer.
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-lg font-semibold text-gray-800">
                How does billing work?
              </p>

              <button
                onClick={() => {
                  setIsOpen5(!isOpen5);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen5 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-500" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-500" />
                )}
              </button>
            </div>

            {isOpen5 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                1. Agreement on Terms Before billing starts, both parties agree
                on pricing, payment terms (e.g., due dates, penalties for late
                payments), and the billing cycle (e.g., monthly, one-time,
                milestone-based). 2. Tracking Goods/Services Record the details
                of what was provided (e.g., product quantities, hours of
                service, subscription period). 3. Invoice Creation An invoice is
                generated, which typically includes: Invoice number. Business
                and customer details.
              </p>
            )}

            <hr className="mt-4 border-gray-300" />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm md:text-lg font-semibold text-gray-800">
                How do I change my account email?
              </p>

              <button
                onClick={() => {
                  setIsOpen6(!isOpen6);
                }}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                {isOpen6 ? (
                  <CiCircleMinus className="font-bold md:text-2xl text-gray-500" />
                ) : (
                  <CiCirclePlus className="font-bold md:text-2xl text-gray-500" />
                )}
              </button>
            </div>

            {isOpen6 && (
              <p className="mt-4 text-sm md:text-base text-gray-600">
                Log In to Your Account Use your current credentials to access
                your account. Navigate to Account Settings Look for a section
                like `Profile,`` `Account Settings,`` or `Personal
                Information.`` Find the Email Field Locate the option to edit
                your email address.
              </p>
            )}
          </div>
        </div>

        <div className="max-w-8xl mx-auto mt-12 mb-4 bg-gray-100 p-6 rounded-lg">
          <div className="flex justify-center items-cente  max-w-xl mx-auto">
            <img
              src="https://s3-alpha-sig.figma.com/img/a48e/1aea/866434aa73c311701a963ddc75997754?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kLauCRybBCEQFoNwLwmiTad1T~QAh3W4BFWiskYz9h2aLVGfRr0A77nXkj0UMFEqtMl1zb60PUqvEKdjHlaxlaZAHWUErKAGP8QuauVbbk4uk~13K4BxDZA8pvC41J95WPMcdmgzbtbTXLFpM7pjUB7pt2DqmuahxmJVLFMnOOKrc~tVcstFC1KzmM-EMmoD168jBC56BAQX~FvmSS5uHb78UIHeqCUkD2Hf-hh-NFLbYMJPrQoa6vKEwNrqpDpuFfgRjRlXAKi1~wPeyfpHRwqCn8BJoWCZVnth0p4EF2-~GriOraWhnf6DBVpEFUBynjvU9V6JEAorPRheZ7351w__"
              alt="FAQ Image 1"
              className="w-1/4 object-cover border-r rounded-full h-1/4"
            />

            <img
              src="https://s3-alpha-sig.figma.com/img/27a8/497d/5cb712a39a846f3d49443b8283852dca?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nj1dhHJvIwqKXhqEFQBNONRc113LfBUCy-0oGmZDlV-0qwv3paPWz0AhVnQlAh8n743SJAQqGwNLiwvqu3NiQ9~~dKI4SWiBp2mbdzu24CDTSpWbMk0FEEt0uVMuvErbYlh9Pde79A8RnQNPX3caI61XMQJCUadFzsB~ttGXFaOo0p7ClgWKFwmgcfU3E-J3ndwBSnXjNCJTlD5Hv6HQgE-sC1MBhgTzwj8iPj9R7JWd7W~rQS-7fZMnnSDxZTlNSk1Fqgsui~tlkGHx0rgj2wZJbBmDpjWc89e8iiNE7MBk9Pvs6p2WxGu61oX4SNdJPXybNcQ109-58cGnbCDhxA__"
              alt="FAQ Image 2"
              className="w-1/3 h-1/4 object-cover rounded-full"
            />

            <img
              src="https://s3-alpha-sig.figma.com/img/7ab6/3dcb/71188af6aa830e9296f62671157262d1?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L3BxbJ4qZcpFGuofUtxaqy6jhwCFJi-fEveMWznXTsMIEv~cyo14pmdwtoJB9kz58feAGo2I1R84izMTlnqRrcs1aEv6JQOyvQAke0ZXA9Co5FF2rYh0dNBymmmgOuyZ1XCLeaPUlGEHusrCENCUct~8z7YQFkI9G-ZLTkv~F9B3vdFhTaIBMZ8IGqR1co~KuP~nWsn~kYsP-LLTzWs~tGsHUhCkI66~BxyPCUQk3sAxV4hCbk21V2PzWhreAsdFlZ21s0YGWyBCmpoMENAzqWkSigGHY6HY0cgVmfvSQ0WhDgszlKnAzd8~37hE7KZIcPwXrJlYhWDLJGEv8HhG2A__"
              alt="FAQ Image 3"
              className="w-1/4 h-1/4 object-cover border-l rounded-full"
            />
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-3">
              Still have questions?
            </h2>

            <p className="text-lg text-[#475467] mb-6">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <button className="bg-[#6941C6] text-sm md:text-base font-medium text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700">
              Get in touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaQuestionPage;
