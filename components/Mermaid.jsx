'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

mermaid.initialize({
    startOnLoad: false,
    theme: 'dark',
    securityLevel: 'loose',
    fontFamily: 'monospace',
})

export default function Mermaid({ chart }) {
    const containerRef = useRef(null)
    const [svg, setSvg] = useState('')

    useEffect(() => {
        const renderChart = async () => {
            if (chart && containerRef.current) {
                try {
                    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`
                    const { svg } = await mermaid.render(id, chart)
                    setSvg(svg)
                } catch (error) {
                    console.error('Mermaid rendering error:', error)
                    setSvg(`<pre style="color: #ff6b6b;">Error rendering diagram: ${error.message}</pre>`)
                }
            }
        }
        renderChart()
    }, [chart])

    return (
        <div 
            ref={containerRef} 
            className="mermaid-container"
            dangerouslySetInnerHTML={{ __html: svg }} 
        />
    )
}
