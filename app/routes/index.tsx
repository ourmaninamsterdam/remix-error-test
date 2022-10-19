import React from 'react';

export default function Index() {

  // UNCOMMENT BELOW TO THROW A RUNTIME ERROR - YOU WILL SEE AN ERROR IN THE BROWSER
  // React.useEffect(() => {
  //   throw new Error("You'll see me in the browser");
  // }, []);
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {/* UNCOMMENT BELOW TO TRIGGER COMPILATION ERROR - YOU WON'T SEE AN ERROR IN THE BROWSER */}
      {/* <h200>Welcome to Remix</h1> */}
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
