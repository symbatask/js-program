import ReactMarkdown from "react-markdown";
import CodeBlock from "./CodeBlock";

const MarkdownToHtml = ({content}) => {
  return (
    <div className="custom-html-style ">
      <ReactMarkdown source={content} renderers={{code: CodeBlock}} escapeHtml={false}/>
    </div>
  )
}

export default MarkdownToHtml