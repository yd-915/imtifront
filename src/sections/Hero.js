import { useState } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

const Hero = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);

  return (
    <div className="w-full py-10 bg-black">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-3/4">
        <header className="flex items-center justify-between space-x-3">
          <Link href="/">
            <a className="text-2xl text-violet-600 font-bold">IMTIJAAB</a>
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {!showMenu ? (
              <MenuIcon className="w-8 h-8" />
            ) : (
              <XIcon className="w-8 h-8" />
            )}
          </button>
          <div
            className={[
              'items-center justify-center md:flex-row md:flex md:relative md:bg-transparent md:shadow-none md:top-0 md:backdrop-blur-none md:space-x-3',
              showMenu
                ? 'absolute z-50 flex flex-col py-5 space-x-0 rounded shadow-xl md:py-0 left-8 right-8 bg-white top-24 space-y-3 md:space-y-0 px-5'
                : 'hidden',
            ].join(' ')}
          >
            <nav className="flex flex-col w-full space-x-0 space-y-3 text-center md:space-y-0 md:space-x-3 md:flex-row">
              <a className="px-5 py-2 rounded text-violet-600 hover:bg-white-100">About</a>
              <a className="px-5 py-2 rounded text-violet-600 hover:bg-white-100">Pricing</a>
              <a className="px-5 py-2 rounded text-violet-600 hover:bg-white-100">Testimonials</a>
         
            </nav>
            <Link
              href={
                sessionStatus === 'authenticated' ? '/account' : '/auth/login'
              }
            >
              <a className="w-full px-5 py-2 text-center text-white bg-violet-500 rounded shadow hover:bg-white-500">
                {sessionStatus === 'authenticated'
                  ? 'Go to Dashboard'
                  : 'Login'}
              </a>
            </Link>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center pt-10 mx-auto md:w-3/5">
          <h1 className="text-6xl font-extrabold text-center">
            <span className="block text-white">Build. Test. Sell.</span>
            <span className="block text-violet-600">The Ultimate API Platform Is Here!</span>
          </h1>
          
        </div>
        <div className="flex items-center justify-center space-x-5">
          <a className="px-10 py-3 text-center text-white bg-violet-500 rounded shadow hover:bg-white-500 text-violet"  href="https://imtistore.vercel.app/">
            Begin
          </a>
          <a className="px-10 py-3 text-center text-violet-500 rounded shadow hover:bg-white-50" href="https://imtijab.vercel.app/">
            Get Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
