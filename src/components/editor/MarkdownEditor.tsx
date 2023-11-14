import React from "preact/compat";
import MDEditor from '@uiw/react-md-editor';
import { getCodeString } from 'rehype-rewrite';
import katex from 'katex';
import 'katex/dist/katex.css';

const mdKaTeX = `This is to display the 
\`\$\$\c = \\pm\\sqrt{a^2 + b^2}\$\$\`
 in one line

\`\`\`KaTeX
c = \\pm\\sqrt{a^2 + b^2}
\`\`\`
`;

export const MarkdownEditor = () => {
  const [value, setValue] = React.useState(mdKaTeX);
  return (
    <MDEditor
      value={value}
      onChange={(val: string | ((prevState: string) => string)) => setValue(val)}
      previewOptions={{
        components: {
          code: ({ inline, children = [], className, ...props }) => {
            const txt: string = children[0] || '';
            if (inline) {
              if (typeof txt === 'string' && /^\$\$(.*)\$\$/.test(txt)) {
                const html = katex.renderToString(txt.replace(/^\$\$(.*)\$\$/, '$1'), {
                  throwOnError: false,
                });
                return <code dangerouslySetInnerHTML={{ __html: html }} />;
              }
              return <code>{txt}</code>;
            }
            const code = props.node && props.node.children ? getCodeString(props.node.children) : txt;
            if (
              typeof code === 'string' &&
              typeof className === 'string' &&
              /^language-katex/.test(className.toLocaleLowerCase())
            ) {
              const html = katex.renderToString(code, {
                throwOnError: false,
              });
              return <code style={{ fontSize: '150%' }} dangerouslySetInnerHTML={{ __html: html }} />;
            }
            return <code className={String(className)}>{children}</code>;
          },
        },
      }}
    />
  );
}