'use client';

import { useEffect } from "react";
import { SignedIn, SignedOut, useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function DashboardPage() {
  const { user } = useUser();

  useEffect(() => {
    const saveUser = async () => {
      if (user) {
        const userRef = doc(db, "users", user.id);
        await setDoc(userRef, {
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
        }, { merge: true });
      }
    };
    saveUser();
  }, [user]);

  return (
    <>
      <SignedIn>
        <div className="p-6 space-y-4">
          <h1 className="text-xl font-bold">Welcome to your dashboard 🎉</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="p-6">
          <p>Please <SignInButton /> to access the dashboard.</p>
        </div>
      </SignedOut>
    </>
  );
}
