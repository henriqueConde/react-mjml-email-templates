import { Mjml, MjmlBody, MjmlButton, MjmlColumn, MjmlHead, MjmlImage, MjmlPreview, MjmlSection, MjmlText, MjmlTitle, render } from 'mjml-react'
import React from 'react'
import { CustomComponent } from '../components/CustomComponent'


function Teste() {
  return (
    <>
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
      <MjmlSection></MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <MjmlText><a href="/">Go Back</a></MjmlText>
        </MjmlColumn>
      </MjmlSection>
      <CustomComponent />
    </>
  )
}

export default Teste