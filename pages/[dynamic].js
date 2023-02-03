import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export default function () {
  const router = useRouter();
  const { dynamic } = router.query;
  return (
    <div>
      <main className={styles.main}>
        <h1> {dynamic} </h1>
      </main>
    </div>
  );
}
