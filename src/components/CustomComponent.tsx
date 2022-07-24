import React from 'react'
import {styles} from '../styles'

export const CustomComponent = () => {
    const { customWrapper, tdCustom, divTextCustom } = styles;
    return (
        <div style={customWrapper} >
            <table
            border={0}
            cellPadding={0}
            cellSpacing={0}
            role="presentation"
            style={{verticalAlign: "top"}}
            width="100%"
            >
                <tbody>
                    <tr>
                        <td
                            align="left"
                            style={tdCustom}
                        >
                            <div style={divTextCustom}>
                            THIS IS A CUSTOM COMPONENT
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td
                            align="left"
                            style={tdCustom}
                        >
                            <div style={divTextCustom}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Proin rutrum enim eget magna efficitur, eu
                            semper augue semper. Aliquam erat volutpat. Cras id
                            dui lectus. Vestibulum sed finibus lectus.
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}
