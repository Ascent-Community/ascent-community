import { SessionProvider } from "next-auth/react";

type RootProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: RootProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Providers;
