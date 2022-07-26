import React from 'react'
import {styles} from './CustomComponentStyles'

export const CustomComponent = () => {
    const { customWrapper, tdCustom, divTextCustom } = styles;
    return (
        <div style={customWrapper} >
            <table
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
                            <div style={{...divTextCustom, fontWeight: "bold"}}>
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
                            "Bilbo was now beginning to feel really uncomfortable. Whenever Smaug's roving eye, seeking for him in the shadows, flashed across him, he trembled, and an accountable desire seized hold of him to rush out and reveal himself and tell all the truth to Smaug. In fact he was in grievous danger of coming under the dragon-spell."
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
  )
}
