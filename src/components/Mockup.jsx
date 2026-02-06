import React from 'react';

export default function Mockup({ title, content }) {
    return (
        <div className="flex flex-col items-center">
            <div className="text-sm font-bold text-[var(--text-secondary)] mb-4 uppercase tracking-wider">{title}</div>
            <div className="relative bg-[#1C1C1E] text-[#E5E5E5] font-mono p-8 rounded-[40px] w-[350px] h-[520px] shadow-2xl border-[8px] border-[#3A3A3C] overflow-hidden flex items-center justify-center">
                <pre className="text-xs leading-relaxed whitespace-pre text-left">
                    {content}
                </pre>
            </div>
        </div>
    );
}
