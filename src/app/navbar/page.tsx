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
    <nav className="bg-white shadow-md  flex justify-between items-center">
      <button
        onClick={handleHomeClick}
        className="text-indigo-600 font-semibold hover:text-indigo-800 focus:outline-none"
      >
        Home
      </button>
      <button
        onClick={handleDashboardClick}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
      >
        Dashboard
      </button>
    </nav>
  );
}
