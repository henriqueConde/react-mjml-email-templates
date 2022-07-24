import * as fs from "fs";
import prettier from "prettier";
import React, {lazy} from "react";
import ReactDOMServer from "react-dom/server";
import {styles} from './styles'
import { Mjml, MjmlBody, MjmlButton, MjmlColumn, MjmlHead, MjmlImage, MjmlPreview, MjmlSection, MjmlText, MjmlTitle, render } from 'mjml-react'
import {
  namedEntityToHexCode,
  fixConditionalComment
} from 'mjml-react/utils';
const he = require('he');
import mjml2html from 'mjml'
import {decode} from 'html-entities';


const templates = {
  Fashion_Concierge_Email_1: './components/Teste',
}

const campaignName = process.argv[2];


// const result = namedEntityToHexCode(html);

const TRANSLATIONS = {
  greeting: 'HIIIIIIIIII',
}

// const {html} = render((<mjml><mj-head><mj-title>Last Minute Offer</mj-title><mj-preview>Last Minute Offer...</mj-preview></mj-head><mj-body width="500px"><div><p>AAAAAAAAAAAAA</p><h1>BBBBBBBBBBBBB</h1></div><div><h1>TEEEEEEEEEEESTE</h1></div><mj-section><mj-column><mj-button padding="20px" background-color="#346DB7" href="https://www.wix.com/">HIIIIIIIIII</mj-button></mj-column></mj-section></mj-body></mjml>), {validtionLevel: 'skip'})

const options = {
  keepComments: true,
  beautify: false,
  validationLevel: 'skip'
}

const htmlOutput = mjml2html(`

  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            Hello World!
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`, options)

// /(<\s*[a-zA-Z][^>]*>(.*?)<\s*/\s*[a-zA-Z]>)/

const compileMjml = (str) => {
  const { html } = mjml2html(str, options);
  return html; 
}


const renderHTML = () => {
  import(templates[campaignName]).then(({default: Component}) => {
    const teste = ReactDOMServer.renderToString(<EmailWrapper><ComponentTest /></EmailWrapper>)
    const res = addCommentsInHTMLTags(teste);
    const algo = compileMjml(res);
    const hmm = algo.replace(/<!--\s|\s-->/g, '')
    let staticHTML = ReactDOMServer.renderToStaticMarkup(<EmptyTemplate htmlData={hmm} />);
    let outputFile = `./output.html`;
    fs.writeFileSync(outputFile, decode(staticHTML));
  });
  
}


// \s(?=</[^mj|/mj]+.*>)


// \s(?=<\/[^mj|/mj]+.[^ml]*>)

function addCommentsInHTMLTags(str) {
  return str.trim().replace(/<[^mj|/mj]+.[^ml]*>/g, "<!--$&-->");
  // const aff = str.trim().split('');
  // aff.forEach((char, index) => {
  //   const isHTMLClosingTag = char + aff[index + 1] === '</' && (char + aff[index + 1] +  aff[index + 2] !== '</m');
  //   const isHTMLOpeningTag = char === '<' && char + aff[index + 1] !== '</' && char + aff[index + 1] !== '<m';
  //   if(isHTMLOpeningTag) {
  //     aff[index] = '<!--' + char;
  //   } else if(isHTMLClosingTag) {
  //     aff[index] = ' ' + char;
  //   }
  //   // console.log(char + aff[index + 1] +  aff[index + 2])
  //   // if(char + aff[index + 1] +  aff[index + 2] !== '</m') {
  //   //   aff[index] = ' ' + char;
  //   // }
  // })
  // const htmlArrayWithOpeningHTMLTagsCommented = aff.join('').split(/\s(?=<\/[^mj|/mj]+.[^ml]*>)/);

  // const teste = htmlArrayWithOpeningHTMLTagsCommented.map(codeLine => {
  //   return codeLine.replace(/>{1}?/, ">-->");
  // });

  // // console.log(teste.join(''));

  // // const htmlTagsFullyCommented = htmlWithOpeningHTMLTagsCommented.replace(/\s(?=<\/[^mj|/mj]+.[^ml]*>)/, "-->")
  // // console.log(htmlTagsFullyCommented);


  // // aff.forEach((char, index) => {
  // //   const condition = char + aff[index + 1] !== '</' && char + aff[index + 1] !== '<m' && char === '<'; 
  // //   if(condition) {
  // //     aff[index] = ' <!--' + char;
  // //   }

  // //   if(char + aff[index + 1] === '</' && char + aff[index + 1] !== '<m' && char === '<') {
  // //     aff[index] = ' ' + char;
  // //   }
  // // })

  // // const strWithHalfComment = aff.join('');

  // // const teste = (strWithHalfComment.split(/\s(?=<\/[^mj|/mj]+.*>)/g));
  
  // // teste.forEach((char, index) => {
  // //   if(index > 0) {
  // //     teste[index] = '-->' + char;
  // //   }
  // // })

  // // console.log(teste.join(''));


  // // const algo = aff.join('');
  // // const resSplit = algo.split(/\s(?=<m[a-zA-Z]+.*>)/);
  // // console.log(resSplit.join('').split(''))
  // // resSplit.join('').split('').forEach((char, index) => {
  // //   if(char === '<' && aff[index + 1] !== 'm') {
  // //     aff[index] = '<!-- '
  // //   }
  // // })
}

renderHTML();

function EmptyTemplate({htmlData}) {
  return (
    <>
      {htmlData}
    </>
  )
}

function ComponentTest() {
  return(
    <div>
      <h1>
        TEEEEEEEEEEESTE
      </h1>
    </div>
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

function App() { 
    return (
      <>
          <div>
            <p>AAAAAAAAAAAAA</p>
          </div>
          <ComponentTest />
          <MjmlSection>
            <MjmlColumn>
              <MjmlButton
                padding="20px"
                backgroundColor="#346DB7"
                href="https://www.wix.com/"
                >
                   {/* <h1>BBBBBBBBBBBBB</h1> */}
                {TRANSLATIONS.greeting}
              </MjmlButton>
            </MjmlColumn>
          </MjmlSection>
      </>
    )
}