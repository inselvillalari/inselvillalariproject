import { useEffect } from "react";
import HomePage from "./home";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, []);

  return <HomePage />;
}
