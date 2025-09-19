import TopNav from "./TopNav";

export default function MDX(props) {
    const { text } = props // gives us access to the text attribute (or the value assigned to it really)
    return (
        <section className="mdx-container">
            <TopNav {...props} />
            <article>

                    {text.trim() || 'Hop in the editor to create a new note'}

            </article>
        </section>
    )
}