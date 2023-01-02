import React, { PureComponent } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

class CodeBlock extends PureComponent {
  render() {
    const { value } = this.props
    return (
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {value}
      </SyntaxHighlighter>
    )
  }
}

export default CodeBlock