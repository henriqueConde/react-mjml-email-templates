import * as fs from "fs";
import prettier from "prettier";
import React, {lazy} from "react";
import ReactDOMServer from "react-dom/server";
import { Mjml, MjmlBody, MjmlButton, MjmlColumn, MjmlHead, MjmlImage, MjmlPreview, MjmlSection, MjmlText, MjmlTitle, render } from 'mjml-react'
const he = require('he');
import mjml2html from 'mjml'
import {decode} from 'html-entities';
import App from './App'
import { styles } from './styles'

const templates = {
  Fashion_Concierge_Email_1: './components/Teste',
}

const campaignName = 'Fashion_Concierge_Email_1';

const TRANSLATIONS = {
  greeting: 'HIIIIIIIIII',
}

const options = {
  keepComments: true,
  beautify: false,
  validationLevel: 'skip'
}


const compileMjml = (str) => {
  const { html } = mjml2html(str, options);
  return html; 
}


const renderHTML = () => {
  import(templates[campaignName]).then(({default: Component}) => {
    const teste = ReactDOMServer.renderToString(<EmailWrapper><Component /></EmailWrapper>)
    console.log(teste);
    const res = addCommentsInHTMLTags(teste);
    console.log(res);
    const algo = compileMjml(res);
    const hmm = algo.replace(/<!--\s|\s-->/g, '')
    let staticHTML = ReactDOMServer.renderToStaticMarkup(<EmptyTemplate htmlData={hmm} />);
    let outputFile = `./output.html`;
    fs.writeFileSync(outputFile, decode(staticHTML));
  });
  
}

function addCommentsInHTMLTags(str) {
  return str.trim().replace(/<[^mj|/mj]+.[^m]*>/g, "<!--$&-->");
}

renderHTML();

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