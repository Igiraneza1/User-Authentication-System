'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser, SignedIn} from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function DashboardPage() {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/sign-in"); // Redirect if not signed in
    }
  }, [isSignedIn, router]);

  useEffect(() => {
    const saveUser = async () => {
      if (user) {
        const userRef = doc(db, "users", user.id);
        await setDoc(
          userRef,
          {
            name: user.fullName,
            email: user.primaryEmailAddress?.emailAddress,
          },
          { merge: true }
        );
      }
    };
    saveUser();
  }, [user]);

  return (
    <SignedIn>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome, {user?.firstName}</h1>
        </div>
        <div className="flex justify-center items-center gap-6">

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">User Profile</h2>
            <p className="text-gray-700">Name: {user?.fullName}</p>
            <p className="text-gray-700">Email: {user?.primaryEmailAddress?.emailAddress}</p>
          </div>

        </div>
      </div>
    </SignedIn>
  );
}
