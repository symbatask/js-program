import React, { Fragment, Component } from 'react'

import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/vsDark'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`

const styles = {
    boxSizing: 'border-box',
    fontFamily: "'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif ",
    counterReset: "line",
    ...theme.plain
}

class EditorExample extends Component {
  state = { code: exampleCode }

  onValueChange = code => {
    this.setState({ code })
  }

  highlight = code => (
    <Highlight {...defaultProps} theme={theme} code={code} language="javascript">
      {({ tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, id) => <span {...getTokenProps({ token, id })} />)}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  )

  render() {
    return (
      <Editor
        value={this.state.code}
        onValueChange={this.onValueChange}
        highlight={this.highlight}
        padding={10}
        style={styles}
        className="editor-wrapper"
      />
    )
  }
}
export default EditorExample
