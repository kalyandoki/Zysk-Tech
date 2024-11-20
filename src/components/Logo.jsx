const Logo = () => {
  return (
    <div className="bg-gray-20 w-full py-10 shadow-xl">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 text-lg md:text-xl font-medium mb-10">
          Join 4,000+ companies already growing
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 items-center justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPQ6PBmWCp-4EMsN8AaC7nSYE22ArRodyrZA&s"
            alt="Logo 1"
            className="h-20 mx-auto"
          />
          <img
            src="data:image/png;base64,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"
            alt="Logo 2"
            className="h-20 mx-auto"
          />
          <img
            src="data:image/png;base64,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"
            alt="Logo 3"
            className="h-20 mx-auto"
          />
          <img
            src="data:image/png;base64,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"
            alt="Logo 4"
            className="h-20 mx-auto"
          />
          <img
            src="data:image/png;base64,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"
            alt="Logo 5"
            className="h-20 mx-auto"
          />
          <img
            src="data:image/png;base64,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"
            alt="Logo 6"
            className="h-20 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;