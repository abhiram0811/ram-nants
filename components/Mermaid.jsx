'use client'

import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'

let isInitialized = false

export default function Mermaid({ chart }) {
    const containerRef = useRef(null)
    const [svg, setSvg] = useState('')

    useEffect(() => {
        if (!isInitialized) {
            mermaid.initialize({
                startOnLoad: false,
                theme: 'dark',
                securityLevel: 'loose',
                fontFamily: 'monospace',
            })
            isInitialized = true
        }

        const renderChart = async () => {
            if (chart && containerRef.current) {
                try {
                    const cleanChart = typeof chart === 'string' ? chart.trim() : String(chart).trim()
                    const id = 'mermaid-' + Math.random().toString(36).substr(2, 9)
                    const { svg } = await mermaid.render(id, cleanChart)
                    setSvg(svg)
                } catch (error) {
                    console.error('Mermaid rendering error:', error)
                    // Show a helpful error message with the original code
                    const errorHtml = `
                        <div style="background: #2d1f1f; border: 1px solid #ff6b6b; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
                            <p style="color: #ff6b6b; margin: 0 0 0.5rem 0; font-weight: bold;">⚠️ Mermaid Syntax Error</p>
                            <p style="color: #ffaa88; margin: 0 0 1rem 0; font-size: 0.9rem;">${error.message}</p>
                            <details style="color: #888;">
                                <summary style="cursor: pointer; margin-bottom: 0.5rem;">Show raw diagram code</summary>
                                <pre style="background: #1a1a2e; padding: 1rem; border-radius: 4px; overflow-x: auto; white-space: pre-wrap; color: #ccc;">${chart.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</pre>
                            </details>
                        </div>
                    `
                    setSvg(errorHtml)
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
