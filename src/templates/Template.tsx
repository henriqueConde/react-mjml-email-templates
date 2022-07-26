import React from 'react'
import {MjmlButton, MjmlColumn, MjmlImage, MjmlSection, MjmlText } from 'mjml-react'
import { CustomComponent } from '../components/CustomComponent'

const Template = () => {
  return (
    <>
    <MjmlSection background-color="#f0f0f0">
      <MjmlColumn>
        <MjmlText font-style="italic" font-size="20px" color="#626262">Smaug SA</MjmlText>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection background-url="https://br.web.img2.acsta.net/r_654_368/newsv7/15/01/23/19/15/175696.jpg" background-size="cover" background-repeat="no-repeat">
      <MjmlColumn width="600px">
        <MjmlText align="center" color="#fff" font-size="40px" font-family="Helvetica Neue">Never laugh at live dragons, Bilbo you fool!</MjmlText>
        <MjmlButton background-color="#133d13" href="https://tolkiengateway.net/wiki/Rivendell">Go to Rivendell Here</MjmlButton>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection background-color="#fafafa">
      <MjmlColumn width="400px">
        <MjmlText font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">The Hobbit</MjmlText>
        <MjmlText color="#525252">The Hobbit (AKA Bilbo Baggins FIRE) is a series consisting of three high fantasy adventure films directed by Peter Jackson. The three films are The Hobbit: An Unexpected Journey (2012), The Hobbit: The Desolation of Smaug (2013), and The Hobbit: The Battle of the Five Armies (2014).[5] The films are based on the 1937 novel The Hobbit by J. R. R. Tolkien, with large portions of the trilogy inspired by the appendices to The Return of the King, which expand on the story told in The Hobbit, as well as new material and characters written especially for the films. Together they act as a prequel to Jackson's The Lord of the Rings film trilogy.</MjmlText>
        <MjmlButton background-color="red" href="https://en.wikipedia.org/wiki/The_Hobbit_(film_series)">Learn more</MjmlButton>
      </MjmlColumn>
    </MjmlSection>
    <MjmlSection background-color="white">
      <MjmlColumn>
        <MjmlImage width="200px" src="https://www.ivancavini.com/wp-content/uploads/2019/12/new-rivendell-small.jpg"></MjmlImage>
      </MjmlColumn>
      <MjmlColumn>
        <MjmlText font-style="italic" font-size="20px" font-family="Helvetica Neue" color="#626262">Find amazing places</MjmlText>
        <MjmlText color="#525252">"I kill where I wish and none dare resist. I laid low the warriors of old and their like is not in the world today. Then I was but young and tender. Now I am old and strong, Thief in the Shadows!"</MjmlText>
      </MjmlColumn>
    </MjmlSection>
    <CustomComponent />
    <MjmlSection background-color="#fbfbfb">
      <MjmlColumn>
        <MjmlImage width="100px" src="https://i.pinimg.com/originals/a2/de/36/a2de3683f96cc181cdda37d3e35e7635.jpg"></MjmlImage>
      </MjmlColumn>
      <MjmlColumn>
        <MjmlImage width="100px" src="https://w7.pngwing.com/pngs/607/646/png-transparent-lord-of-the-rings-illustration-the-lord-of-the-rings-logo-arwen-isildur-lord-of-the-rings-logo-white-text-film.png"></MjmlImage>
      </MjmlColumn>
      <MjmlColumn>
        <MjmlImage width="100px" src="https://i.pinimg.com/originals/a2/de/36/a2de3683f96cc181cdda37d3e35e7635.jpg"></MjmlImage>
      </MjmlColumn>
    </MjmlSection>
    </>
  )
}

export default Template