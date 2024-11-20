const LogoPage = () => {
  return (
    <div className="bg-gray-20 w-full py-10 shadow-xl">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-lg md:text-xl font-medium mb-10">
          Join 4,000+ companies already growing
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 items-center justify-center">
          <img
            src="https://i.imgur.com/OSaNkdI.jpeg"
            alt="BO"
            className="h-20 mx-auto"
          />
          <img
            src="https://i.imgur.com/Cr4xcZc.jpeg"
            alt="LI"
            className="h-20 mx-auto"
          />
          <img
            src="https://i.imgur.com/7irpnoO.jpeg"
            alt="FE"
            className="h-20 mx-auto"
          />
          <img
            src="https://i.imgur.com/7rcDnyX.jpeg"
            alt="SP"
            className="h-20 mx-auto"
          />
          <img
            src="https://i.imgur.com/onoRpxQ.jpeg"
            alt="GL"
            className="h-20 mx-auto"
          />
          <img
            src="https://i.imgur.com/ViezFNK.jpeg"
            alt="NI"
            className="h-20 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPage;
