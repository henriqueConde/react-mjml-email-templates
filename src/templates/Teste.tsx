import { MjmlButton, MjmlColumn, MjmlImage, MjmlSection, MjmlText } from 'mjml-react'
import React from 'react'
import { CustomComponent } from '../components/CustomComponent'


function Teste() {
  return (
    <>
      <MjmlSection fullWidth backgroundColor="#efefef">
        <MjmlColumn>
          <MjmlImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Friedrich_Wilhelm_Theodor_Heyser_-_Ophelia.jpg/1280px-Friedrich_Wilhelm_Theodor_Heyser_-_Ophelia.jpg" />
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <MjmlButton padding="20px" backgroundColor="#346DB7" href="#">
              Something is rotten in the state of Denmark.
          </MjmlButton>
        </MjmlColumn>
      </MjmlSection>
      <MjmlSection>
        <MjmlColumn>
          <MjmlText><a href="#">Go Back</a></MjmlText>
        </MjmlColumn>
      </MjmlSection>
    </>
  )
}

export default Teste