import { Mjml, MjmlBody, MjmlButton, MjmlColumn, MjmlHead, MjmlImage, MjmlPreview, MjmlSection, MjmlText, MjmlTitle, render } from 'mjml-react'
import React from 'react'
import {styles} from '../styles'

const generate = () => {
  return (
    <Mjml>
      <MjmlHead>
        <MjmlTitle>Last Minute Offer</MjmlTitle>
        <MjmlPreview>Last Minute Offer...</MjmlPreview>
      </MjmlHead>
      <MjmlBody width={500}>
        <MjmlSection fullWidth backgroundColor="#efefef">
          <MjmlColumn>
            <MjmlImage src="https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" />
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlButton padding="20px" backgroundColor="#346DB7" href="https://www.wix.com/">
              This Yet Another Template
            </MjmlButton>
          </MjmlColumn>
        </MjmlSection>
        <MjmlSection>
          <MjmlColumn>
            <MjmlText><a href="/">Go Back</a></MjmlText>
          </MjmlColumn>
        </MjmlSection>
      </MjmlBody>
    </Mjml>
  );
};

function Teste() {
  const { html } = render(generate(), { validationLevel: 'soft' });
  return (
    <div style={styles.container}>
        {html}
    </div>
  )
}

export default Teste