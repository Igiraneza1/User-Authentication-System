'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  const handleDashboardClick = () => {
    if (isSignedIn) {
      router.push('/dashboard');
    } else {
      router.push('/sign-in');
    }
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <nav className="bg-gray-600 py-3 shadow-md  flex justify-center items-center">
      <button
        onClick={handleHomeClick}
        className="text-gray-300 font-bold hover:text-indigo-800 focus:outline-none"
      >
        Home
      </button>
      <button
        onClick={handleDashboardClick}
        className=" text-gray-300 font-bold px-4 py-2 rounded-md hover:text-indigo-800 transition"
      >
        Dashboard
      </button>
    </nav>
  );
}
