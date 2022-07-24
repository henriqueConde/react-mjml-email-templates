import * as fs from "fs";
import prettier from "prettier";
import React, {lazy} from "react";
import ReactDOMServer from "react-dom/server";
import {styles} from './styles'

const templates = {
  Fashion_Concierge_Email_1: './components/Teste',
}

const campaignName = process.argv[2];

const render = () => {
    import(templates[campaignName]).then(({default: Component}) => {
      let html = ReactDOMServer.renderToString(<App styles={styles}><Component /></App>);
      console.log(html);
      let htmlWDoc = "<!DOCTYPE html>" + html;
      let prettyHtml = prettier.format(htmlWDoc, { parser: "html" });
      let outputFile = `./src/HTML_TEMPLATES/${campaignName}.html`;
      fs.writeFileSync(outputFile, prettyHtml);
      console.log(`Wrote ${outputFile}`);
    });
    
}

render();

function App({styles, children}) { 
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Hello world</title>
      </head>
      <body>
        <div style={styles.container}>
          {children}
        </div>
      </body>
    </html>
  );
}