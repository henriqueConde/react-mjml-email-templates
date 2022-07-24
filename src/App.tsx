import React from "react";
import Teste from "./components/Teste";
  
function App({styles, children}) { 
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Hello world</title>
      </head>
      <body>
        <div style={styles.container}>
          <span>D</span>
          <div>
            <p>Desmond Nyamador</p>
            <p>I just learned an easy way to style React Components</p>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}

export default App;