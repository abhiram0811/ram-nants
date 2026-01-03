'use client'

import TopNav from "./TopNav";
import Markdown from "markdown-to-jsx";
import Mermaid from "./Mermaid";

// Custom Code component to handle mermaid blocks
function CodeBlock({ className, children }) {
    // Check if this is a mermaid code block
    if (className === 'lang-mermaid' || className === 'mermaid') {
        return <Mermaid chart={children} />
    }
    
    // Regular code block
    return (
        <code className={className}>
            {children}
        </code>
    )
}

// Custom Pre component to extract language from code blocks
function PreBlock({ children, ...props }) {
    // If the child is a code element with mermaid class, render Mermaid
    if (children?.props?.className === 'lang-mermaid') {
        return <Mermaid chart={children.props.children} />
    }
    
    return <pre {...props}>{children}</pre>
}

export default function MDX(props) {
    const { text } = props // gives us access to the text attribute (or the value assigned to it really)
    
    const markdownOptions = {
        overrides: {
            pre: {
                component: PreBlock,
            },
            code: {
                component: CodeBlock,
            },
        },
    }
    
    return (
        <section className="mdx-container">
            <TopNav {...props} />
            <article>
                {text.trim() ? (
                    <Markdown options={markdownOptions}>{text}</Markdown>
                ) : (
                    'Hop in the editor to create a new note'
                )}
            </article>
        </section>
    )
}