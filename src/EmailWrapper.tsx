import { Mjml, MjmlBody, MjmlHead, MjmlPreview, MjmlTitle } from 'mjml-react'
import React from 'react';

export function EmailWrapper({children}) {
    return (
      <>
        <Mjml>
        <MjmlHead>
          <MjmlTitle>Bilbo Baggins SA</MjmlTitle>
        </MjmlHead>
        <MjmlBody width={500}>
          {children}
        </MjmlBody>
        </Mjml>
      </>
    )
  }