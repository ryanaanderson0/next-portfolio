import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ryan Anderson's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <div className={styles.header}>
          <ul>
            <li>
              <a>[logo]</a>
              <a>Work</a>
              <a>About</a>
              <a>Contact</a>
              <a>
                <button>Resume</button>
              </a>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <section>
          <div className={styles.container}>
            <h2>Hi, I'm Ryan &#128075; </h2>
            <h1 className={styles.title}>I'm a Front End Developer</h1>
            <p className={styles.description}>
              I focus on clean, scalable web experiences for ethically conscious
              companies.
            </p>
          </div>
        </section>

        <section
          className={`${styles.border} ${styles.checker_background} ${styles.container}`}
        >
          <h2>Past Work</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>Documentation </h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </div>

            <div className={`${styles.card} ${styles.box_shadow}`}>
              <div className={styles.card_title}>
                <h3>Learn </h3>
              </div>

              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </div>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Examples </h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h3>Deploy </h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </section>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        // main {
        //   flex: 1;
        //   display: flex;
        //   flex-direction: column;
        //   justify-content: center;
        //   align-items: center;
        // }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
        button {
          text-transform: uppercase;

          background-color: #ffffff;
          padding: 0.75rem 1rem;
          border-radius: 0.25rem;
          border: solid 0.125rem #121212;
          box-shadow: 0.25rem 0.25rem #121212;
          cursor: pointer;
        }

        section {
          min-width: 100%;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: PT Mono, -apple-system, BlinkMacSystemFont, Segoe UI,
            Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
            Helvetica Neue, sans-serif;
          border: #000 4px solid;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
