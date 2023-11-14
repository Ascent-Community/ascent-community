"use client";

import { signIn, useSession, signOut } from "next-auth/react";

export const AuthSection = () => {
  const { data: session, status } = useSession();

  function handleSignIn() {
    signIn("github");
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {!session && status !== "loading" && (
        <button onClick={handleSignIn}>SignIn</button>
      )}
      {session && <button onClick={handleSignOut}>SignOut</button>}

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
};
