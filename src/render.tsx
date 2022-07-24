import * as fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { Mjml, MjmlBody, MjmlHead, MjmlPreview, MjmlTitle } from 'mjml-react'
import mjml2html from 'mjml'
import { MJMLParsingOptions } from 'mjml-core'
import {decode} from 'html-entities';
import prettier from "prettier";

const templates = {
  Fashion_Concierge_Email_1: './templates/Teste',
  Template: './templates/Template'
}

const campaignName = process.argv[2];

const options: MJMLParsingOptions = {
  keepComments: true,
  beautify: false,
  validationLevel: "skip",
}

const compileMjml = (str: string) => {
  const { html } = mjml2html(str, options);
  return html; 
}

const renderHTML = () => {
  import(templates[campaignName]).then(({default: Component}) => {
    const rawStringMarkup = ReactDOMServer.renderToString(<EmailWrapper><Component /></EmailWrapper>)
    const markupWithHTMLCommented = addCommentsInHTMLTags(rawStringMarkup);
    const compiledMarkupFromMJML = compileMjml(markupWithHTMLCommented);
    const markupWithoutHTMLComments = compiledMarkupFromMJML.replace(/<!--\s|\s-->/g, '')
    const staticHTML = ReactDOMServer.renderToStaticMarkup(<EmptyTemplate htmlData={markupWithoutHTMLComments} />);
    const outputFile = `./src/HTML_TEMPLATES/${campaignName}.html`;
    const prettyHtml = prettier.format(decode(staticHTML), { parser: "html" });
    fs.writeFileSync(outputFile, prettyHtml);
  });
}

renderHTML();

// This step is necessary because MJML compiler do not understand HTML tags
// if we want to use custom code different from MJML components
// we need to compile the markup with the HTML commented so MJML compiler does his job without any problems
// once the code is compiled we can remove the comments in the HTML tags
function addCommentsInHTMLTags(rawToStringMarkup: string) {
  const rawMarkupArray = rawToStringMarkup.split('');
  rawMarkupArray.forEach((char, index) => {
    if(char === '>') {
      rawMarkupArray[index] = char + ' ';
    }
  })
  const markupArrayWithSpaces = rawMarkupArray.join('').split(/\s(?=<)/g);

  markupArrayWithSpaces.forEach((char, index) => {
    const condition = !char.includes('<mj') && !char.includes('</mj')
    if(condition) {
      markupArrayWithSpaces[index] = '<!--' + char + '-->'
    }
  })

  return markupArrayWithSpaces.join('')
}

function EmptyTemplate({htmlData}) {
  return (
    <>
      {htmlData}
    </>
  )
}

function EmailWrapper({children}) {
  return (
    <>
      <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
      </MjmlHead>
      <MjmlBody width={500}>
        {children}
      </MjmlBody>
      </Mjml>
    </>
  )
}
