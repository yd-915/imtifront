const Features = () => {
  return (
    <div className="w-full py-10 bg-black">
      <div className="relative flex flex-col w-3/4 mx-auto space-y-5">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-blue-600 uppercase">
            Features
          </h6>
          <h2 className="text-4xl font-bold text-center text-white">
            <span className="block">A better way to do APIs</span>
          </h2>
        
        </div>
        <div className="flex flex-col py-10 space-x-0 space-y-10 md:space-y-0 md:space-x-5 md:flex-row">
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full" />
            <h3 className="text-lg font-bold text-white">Collaberative Editing</h3>
            <p className="text-center text-purple-400">
             Write, edit and export your code with team members using our feature-packed editor.
            </p>
          </div>
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full" />
            <h3 className="text-lg font-bold text-white">Test, test, test</h3>
            <p className="text-center text-purple-400">
              Our intergrated Api testing ecosystem lets you test endpoints collaberatively. 
            </p>
          </div>
          <div className="flex flex-col items-center justify-start px-5 space-y-3 md:w-1/3">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full" />
            <h3 className="text-lg font-bold text-white">Marketplace</h3>
            <p className="text-center text-purple-400">
              Done Building? Done Testing? Add your fresh API to the imtiStre! (not a typo, were just trying to be cool)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
