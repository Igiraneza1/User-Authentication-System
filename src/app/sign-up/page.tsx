'use client';

import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-400 p-10">
      
        <SignUp
          appearance={{
            elements: {
              formButtonPrimary: "bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md",
              card: "shadow-none",
              headerTitle: "text-xl font-semibold text-center",
              footerActionLink: "text-indigo-600 hover:underline",
            },
            variables: {
              colorPrimary: "#4F46E5",
              borderRadius: "8px",
            }
          }}
          afterSignUpUrl="/dashboard"
          afterSignInUrl="/dashboard"
        />
      
    </div>
  );
}
