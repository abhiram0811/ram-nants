import TopNav from "./TopNav";
import Markdown from "markdown-to-jsx";

export default function MDX(props) {
    const { text } = props // gives us access to the text attribute (or the value assigned to it really)
    return (
        <section className="mdx-container">
            <TopNav {...props} />
            <article>
                {text.trim() ? (
                    <Markdown>{text}</Markdown>
                ) : (
                    'Hop in the editor to create a new note'
                )}
            </article>
        </section>
    )
}