'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser, SignedIn } from "@clerk/nextjs";

export default function DashboardPage() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/sign-in");
    }
  }, [isSignedIn, router]);

  return (
    <SignedIn>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8">Welcome, {user?.firstName}!</h1>

        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">User Profile</h2>
          <p className="text-gray-700 mb-2"><span className="font-medium">Name:</span> {user?.fullName}</p>
          <p className="text-gray-700"><span className="font-medium">Email:</span> {user?.primaryEmailAddress?.emailAddress}</p>
        </div>
      </div>
    </SignedIn>
  );
}
