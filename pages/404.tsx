import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("./");
    }, 5000);
  }, []);
  return (
    <div className="not-found">
      <h1>Page not found...</h1>
      <h2>Url is not on this website.</h2>

      <Link href="./"> Go to homepage</Link>
    </div>
  );
};

export default NotFound;
