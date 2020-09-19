import Head from "next/head";
import { useCallback, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [text, setText] = useState("");
  const [english, setEnglish] = useState("");
  const handleSubmit = useCallback(
    async (e) => {
      setEnglish('');
      e.preventDefault();
      const data = await fetch("/api/translate", {
        method: "POST",
        body: JSON.stringify({
          text: text,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
      setEnglish(data.text);
    },
    [text]
  );
  return (
    <div className="container">
      <Head>
        <title>True English</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h2>True English</h2>

        <p className={styles.description}>
          Enter your text to translate to "true" english
        </p>
        {english && (
          <div className={styles.card}>
            <p>{english}</p>
          </div>
        )}
        <div className={styles.card}>
          <form onSubmit={handleSubmit}>
            <textarea
              className="u-full-width"
              placeholder="Enter text to translate"
              id="exampleMessage"
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <input
              className="button-primary"
              type="submit"
              value="Submit"
            ></input>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{" "}
          Kacha Mukabe
        </a>
      </footer>
    </div>
  );
}
