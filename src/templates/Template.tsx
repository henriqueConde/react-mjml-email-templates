import React from 'react'
import {MjmlButton, MjmlColumn, MjmlImage, MjmlSection, MjmlText, MjmlRaw } from 'mjml-react'
import { CustomComponent } from '../components/CustomComponent'

const Template = () => {
  return (
    <>
    <MjmlSection background-color="#f0f0f0">
      <MjmlColumn>
        <MjmlText font-style="italic" font-size="20px" color="#626262">My Company</MjmlText>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection background-url="http://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg" background-size="cover" background-repeat="no-repeat">
      <MjmlColumn width="600px">
        <MjmlText align="center" color="#fff" font-size="40px" font-family="Helvetica Neue">Slogan here</MjmlText>
        <MjmlButton background-color="#F63A4D" href="#">Promotion</MjmlButton>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection background-color="#fafafa">
      <MjmlColumn width="400px">
        <MjmlText font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">My Awesome Text</MjmlText>
        <MjmlText color="#525252">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus, sit amet suscipit nibh. Proin nec commodo purus.
          Sed eget nulla elit. Nulla aliquet mollis faucibus.</MjmlText>
        <MjmlButton background-color="#F45E43" href="#">Learn more</MjmlButton>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection background-color="white">
      <MjmlColumn>
        <MjmlImage width="200px" src="https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg"></MjmlImage>
      </MjmlColumn>
      <MjmlColumn>
        <MjmlText font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">Find amazing places</MjmlText>
        <MjmlText color="#525252">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.</MjmlText>
      </MjmlColumn>
    </MjmlSection>
    <CustomComponent />
    <MjmlSection background-color="#fbfbfb">
      <MjmlColumn>
        <MjmlImage width="100px" src="http://191n.mj.am/img/191n/3s/x0l.png"></MjmlImage>
      </MjmlColumn>
      <MjmlColumn>
        <MjmlImage width="100px" src="http://191n.mj.am/img/191n/3s/x01.png"></MjmlImage>
      </MjmlColumn>
      <MjmlColumn>
        <MjmlImage width="100px" src="http://191n.mj.am/img/191n/3s/x0s.png"></MjmlImage>
      </MjmlColumn>
    </MjmlSection>
    </>
  )
}

export default Template