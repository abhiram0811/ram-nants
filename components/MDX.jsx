'use client'

import TopNav from "./TopNav";
import Markdown from "markdown-to-jsx";
import Mermaid from "./Mermaid";

// Custom Pre component to handle code blocks including mermaid
function PreBlock({ children, ...props }) {
    // Check if this is a code block
    if (children && typeof children === 'object' && children.props) {
        const { className, children: code } = children.props;
        
        // Check if it's a mermaid code block
        if (className === 'lang-mermaid' || className === 'language-mermaid') {
            return <Mermaid chart={code} />
        }
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