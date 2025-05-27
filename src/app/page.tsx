'use client';

import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Create Your Account</h1>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => router.push('/sign-up')}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push('/sign-in')}
            className="border border-indigo-600 px-4 py-2 rounded hover:bg-indigo-600 transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
