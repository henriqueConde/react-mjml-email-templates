import { MJMLParsingOptions } from 'mjml-core'
import mjml2html from 'mjml'

// This step is necessary because MJML compiler do not understand HTML tags
// if we want to use custom code different from MJML components
// we need to compile the markup with the HTML commented so MJML compiler does his job without any problems
// once the code is compiled we can remove the comments in the HTML tags
export function addCommentsInHTMLTags(rawToStringMarkup: string) {
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
        markupArrayWithSpaces[index] = '<!-- ' + char + ' -->'
      }
    })
  
    return markupArrayWithSpaces.join('')
  }

  const options: MJMLParsingOptions = {
    keepComments: true,
  }

  export const compileMjml = (str: string) => {
    const { html } = mjml2html(str, options);
    return html; 
  }