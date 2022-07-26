import * as fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import {decode} from 'html-entities';
import prettier from "prettier";
import { addCommentsInHTMLTags, compileMjml } from "./utils";
import { EmailWrapper } from "./EmailWrapper";
import { EmptyTemplate } from "./EmptyTemplate";
import currentCampaing from "./AllCampaings";

const [campaignName, campaignPath] = currentCampaing;

const renderHTML = () => {
  import(campaignPath).then(({default: Component}) => {
    const rawStringMarkup = ReactDOMServer.renderToString(<EmailWrapper><Component /></EmailWrapper>)
    const markupWithHTMLCommented = addCommentsInHTMLTags(rawStringMarkup);
    const compiledMarkupFromMJML = compileMjml(markupWithHTMLCommented);
    const markupWithoutHTMLComments = compiledMarkupFromMJML.replace(/<!--\s|\s-->/g, '')
    const staticHTML = ReactDOMServer.renderToStaticMarkup(<EmptyTemplate htmlData={markupWithoutHTMLComments} />);
    const outputFile = `./HTML_TEMPLATES/${campaignName}.html`;
    const prettyHtml = prettier.format(decode(staticHTML), { parser: "html" });
    fs.writeFileSync(outputFile, prettyHtml);
    console.log(`${campaignName} email built!`);
  });
}

renderHTML();
