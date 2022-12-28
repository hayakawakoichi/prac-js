import { FC } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type CodeBlockProps = {
  code: string
}

export const CodeBlock: FC<CodeBlockProps> = ({ code }) => {
  return (
    <pre
      style={{
        margin: '2rem',
        padding: '1rem',
        borderRadius: '5px',
        whiteSpace: 'pre-wrap',
      }}
    >
      <SyntaxHighlighter
        language="javascript"
        style={vscDarkPlus}
        showLineNumbers
      >
        {`${code}`}
      </SyntaxHighlighter>
    </pre>
  )
}
