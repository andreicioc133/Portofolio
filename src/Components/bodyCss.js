import React from 'react'
import { linearGradients } from '../styles/styles'

export function bodyCss() {

    const documentStyle = document.body.style

    return(
        documentStyle.backgroundImage = linearGradients.purpleToBlue,
        documentStyle.fontFamily = "Open Sans, cursive",
        documentStyle.margin = 0,
        documentStyle.padding = 0
    )
}
