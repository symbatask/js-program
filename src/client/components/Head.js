import React from 'react'
import {Helmet} from 'react-helmet'

const Head = (props) => (
    <Helmet>
        <title>IT Bootcamp | {props.title}</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="theme-color" content="#f6e05e"/>
    </Helmet>
)

export default Head