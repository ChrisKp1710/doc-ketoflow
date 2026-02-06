import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

// Helper to init mermaid only once
const initMermaid = () => {
    if (typeof window !== 'undefined' && !window.mermaidInitialized) {
        mermaid.initialize({
            startOnLoad: false,
            suppressErrorRendering: true, // Prevent error text from polluting the UI
            theme: 'base',
            securityLevel: 'loose',
            themeVariables: {
                primaryColor: '#F2F2F7',
                primaryTextColor: '#1C1C1E', // Keep dark for nodes if they are white
                primaryBorderColor: '#D1D1D6',
                lineColor: '#A1A1A6', // Lighter grey
                secondaryColor: '#E5F1FB',
                tertiaryColor: '#FFFFFF',
                fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
                
                // Sequence Diagram Specifics
                signalColor: '#A1A1A6',
                signalTextColor: '#A1A1A6', // Lighter text for signals
                actorTextColor: '#1C1C1E', // Actors correspond to nodes (white bg)
                activationBorderColor: '#666',
                noteTextColor: '#1C1C1E',
            }
        });
        window.mermaidInitialized = true;
    }
};

export default function Mermaid({ chart, chartId }) {
    const ref = useRef(null);
    const [svg, setSvg] = useState('');

    useEffect(() => {
        initMermaid(); // Ensure init happened

        if (ref.current && chart) {
            // detailed unique id to prevent collisions in Strict Mode or rapid re-renders
            const uniqueId = `mermaid-${chartId || 'auto'}-${Math.random().toString(36).substr(2, 9)}`;
            
            // Clean up the chart string (remove leading indentations/newlines)
            const cleanChart = chart
                .replace(/^[\n\r]+/, '') // Remove leading newlines
                .split('\n')
                .map(line => line.trim()) // Trim every line
                .join('\n');

            try {
                mermaid.render(uniqueId, cleanChart).then(({ svg }) => {
                    setSvg(svg);
                }).catch(e => {
                    console.error("Mermaid Render Error:", e);
                    setSvg(`<div class="text-red-500 p-4 border border-red-500 rounded bg-red-500/10 text-xs font-mono whitespace-pre-wrap">Error rendering diagram:\n${e.message}</div>`);
                });
            } catch (e) {
                 console.error("Mermaid Sync Error:", e);
                 setSvg(`<div class="text-red-500 p-4">Sync Error: ${e.message}</div>`);
            }
        }
    }, [chart, chartId]);

    return (
        <div 
            className="diagram-wrapper group relative flex justify-center w-full" 
            dangerouslySetInnerHTML={{ __html: svg }}
            ref={ref}
        />
    );
}
