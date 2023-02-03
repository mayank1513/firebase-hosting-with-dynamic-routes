import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";

export default function () {
  const router = useRouter();

  useEffect(() => {
    if (location.pathname === "/") router.push("/home");
    else router.push(location.pathname);
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <h1> Loading... </h1>
      </main>
    </div>
  );
}
