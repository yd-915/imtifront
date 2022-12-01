import { CheckIcon } from '@heroicons/react/outline';

const Pricing = () => {
  return (
    <div className="w-full py-10 bg-black">
      <div className="relative flex flex-col px-5 mx-auto space-y-5 md:w-3/4">
        <div className="flex flex-col items-center">
          <h6 className="font-bold text-center text-violet-400 uppercase">
            Pricing
          </h6>
          <h2 className="text-4xl font-bold text-center">
            <span className="block text-white">
              Pricing. For all levels.
            </span>
          </h2>
         
        </div>
        <div className="flex flex-col p-10 space-x-0 space-y-5 bg-violet-400 rounded-lg md:space-y-0 md:space-x-5 md:flex-row">
          <div className="flex flex-col items-start overflow-hidden bg-white border rounded-lg md:w-1/2">
            <div className="w-full p-10 space-y-5">
              <span className="px-5 py-1 text-sm text-violet0-400 uppercase bg-gray-400 rounded-full">
                Base
              </span>
              <h2 className="space-x-2 text-6xl">
                <span className="font-extrabold">BASE</span>
            
              </h2>
            </div>
            <div className="flex flex-col w-full h-full p-10 space-y-5 bg-gray-100 border-t">
              <a
                className="px-10 py-3 text-lg text-center text-blue-600 bg-white rounded shadow hover:bg-blue-50"
                href="#!"
              >
               10$/month
              </a>
              <div className="space-y-5">
                <h6 className="uppercase">What&apos;s Included</h6>
                <ul className="leading-10 list-none list-inside">
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Up to 10 listings</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Up to 5 Users</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>1 Intergrations</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Up to 10GB</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
           <div className="flex flex-col p-10 space-x-0 space-y-5 bg-gray-200 rounded-lg md:space-y-0 md:space-x-5 md:flex-row">
          <div className="flex flex-col items-start overflow-hidden bg-white border rounded-lg md:w-1/2">
            <div className="w-full p-10 space-y-5">
              <span className="px-5 py-1 text-sm text-violet-600 uppercase bg-gray-100 rounded-full">
                Pro
              </span>
              <h2 className="space-x-2 text-6xl">
                <span className="font-extrabold">PRO</span>

              </h2>
            </div>
            <div className="flex flex-col w-full h-full p-10 space-y-5 bg-gray-100 border-t">
              <a
                className="px-10 py-3 text-lg text-center text-blue-600 bg-white rounded shadow hover:bg-blue-50"
                href="#!"
              >
                15$/month
              </a>
              <div className="space-y-5">
                <h6 className="uppercase">What&apos;s Included</h6>
                <ul className="leading-10 list-none list-inside">
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Up to 20 listings</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Up to 10 Users</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Up to 3 intergrations</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Up to 50GB</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start overflow-hidden bg-white border rounded-lg md:w-1/2">
            <div className="w-full p-10 space-y-5">
              <span className="px-5 py-1 text-sm text-blue-600 uppercase bg-blue-100 rounded-full">
                Premium
              </span>
              <h2 className="space-x-2 text-6xl">
                <span className="font-extrabold">ELITE</span>
                
              </h2>
            </div>
            <div className="flex flex-col w-full h-full p-10 space-y-5 bg-gray-100 border-t">
              <a
                className="px-10 py-3 text-lg text-center text-blue-600 bg-white rounded shadow hover:bg-blue-50"
                href="#!"
              >
                30$/month
              </a>
              <div className="space-y-5">
                <h6 className="uppercase">What&apos;s Included</h6>
                <ul className="leading-10 list-disc list-inside">
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Everything in PRO</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Unlimited listings</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Unlimited Users</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>All intergrations</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Custom Branding</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Video Call/Whiteboard intergration</span>
                  </li>
                  <li className="flex items-center space-x-5">
                    <CheckIcon className="w-5 h-5 text-green-600" />
                    <span>Up to 100GB Storage</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
  );
};

export default Pricing;
