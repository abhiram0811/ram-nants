'use client'

import TopNav from "./TopNav";
import Markdown from "markdown-to-jsx";
import Mermaid from "./Mermaid";

// Mermaid diagram type keywords
const MERMAID_KEYWORDS = [
    'flowchart',
    'sequenceDiagram', 
    'classDiagram',
    'stateDiagram',
    'erDiagram',
    'gantt',
    'pie',
    'gitGraph',
    'mindmap',
    'timeline',
    'graph TB',
    'graph TD',
    'graph BT',
    'graph RL',
    'graph LR'
];

// Check if text appears to be a mermaid diagram
function isMermaidDiagram(text) {
    const trimmed = text.trim();
    return MERMAID_KEYWORDS.some(keyword => trimmed.startsWith(keyword));
}

// Custom Pre component to handle code blocks including mermaid
function PreBlock({ children, ...props }) {
    // Check if this is a code block with mermaid
    if (children && typeof children === 'object' && children.props) {
        const { className, children: code } = children.props;
        
        // Check if it's explicitly marked as mermaid
        if (className && className.includes('mermaid')) {
            return <Mermaid chart={code} />
        }
        
        // Also check if the code content looks like mermaid (for untagged code blocks)
        if (typeof code === 'string' && isMermaidDiagram(code)) {
            return <Mermaid chart={code} />
        }
    }
    
    return <pre {...props}>{children}</pre>
}

export default function MDX(props) {
    const { text } = props
    
    const markdownOptions = {
        overrides: {
            pre: {
                component: PreBlock,
            },
        },
    }
    
    // Check if the entire text is a standalone mermaid diagram (not wrapped in markdown)
    const trimmedText = text.trim();
    const isStandaloneMermaid = trimmedText && isMermaidDiagram(trimmedText) && !trimmedText.includes('```');
    
    return (
        <section className="mdx-container">
            <TopNav {...props} />
            <article>
                {trimmedText ? (
                    isStandaloneMermaid ? (
                        // Render directly as mermaid if it's a standalone diagram
                        <Mermaid chart={trimmedText} />
                    ) : (
                        // Otherwise parse as markdown
                        <Markdown options={markdownOptions}>{text}</Markdown>
                    )
                ) : (
                    'Hop in the editor to create a new note'
                )}
            </article>
        </section>
    )
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