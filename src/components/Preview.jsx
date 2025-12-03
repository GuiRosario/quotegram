import React, { forwardRef } from 'react';
import { Quotes } from '@phosphor-icons/react';

const Preview = forwardRef(({
    quote,
    author,
    book,
    theme,
    font,
    alignment,
    fontSize,
    authorSize,
    bookSize,
    layout,
    imageHeight
}, ref) => {

    // Determine flex alignment based on text alignment
    let flexAlign = 'items-center';
    if (alignment === 'text-left') flexAlign = 'items-start';
    if (alignment === 'text-right') flexAlign = 'items-end';

    // Determine layout classes
    let containerClasses = `w-[400px] sm:w-[500px] p-12 flex flex-col relative overflow-hidden ${theme.classes} ${font} ${alignment} ${flexAlign}`;
    let contentClasses = "z-10 flex-grow flex items-center justify-center w-full";
    let footerClasses = `z-10 w-full opacity-90 transition-colors flex flex-col gap-1 ${theme.border || 'border-slate-200'}`;
    let iconClasses = "z-10 opacity-50 mb-4";

    // Layout Logic
    if (layout === 'default') {
        containerClasses += " justify-between";
        footerClasses += " mt-8 border-t pt-6";
    } else if (layout === 'centered') {
        containerClasses += " justify-center gap-8";
        footerClasses += " items-center border-t-0 pt-0 mt-4";
        // Override flex alignment for centered layout
        if (alignment === 'text-left') footerClasses = footerClasses.replace('items-center', 'items-start');
        if (alignment === 'text-right') footerClasses = footerClasses.replace('items-center', 'items-end');
    } else if (layout === 'spread') {
        containerClasses += " justify-between";
        contentClasses = "z-10 flex items-start justify-center w-full mt-8";
        footerClasses += " mt-auto border-t pt-6";
    } else if (layout === 'inverted') {
        containerClasses += " justify-between flex-col-reverse";
        iconClasses += " rotate-180 mt-4 mb-0"; // Rotate icon for fun
        footerClasses += " mb-8 border-b pb-6";
    }

    return (
        <div className="w-full lg:w-2/3 flex flex-col items-center justify-center bg-slate-100/50 rounded-2xl border border-slate-200 p-8 min-h-[500px]">
            <div className="mb-4 text-sm text-slate-400 font-medium">
                Pré-visualização
            </div>

            {/* The Card to Capture */}
            <div className="shadow-2xl transition-all duration-300">
                <div
                    ref={ref}
                    id="preview-card"
                    style={{ height: `${imageHeight}px` }}
                    className={containerClasses}
                >
                    {/* Overlay for bg images */}
                    {theme.hasImage && (
                        <div className="absolute inset-0 bg-black/40 pointer-events-none z-0"></div>
                    )}

                    {/* Decorative Icon Top */}
                    {layout !== 'inverted' && (
                        <div className={iconClasses}>
                            <Quotes weight="fill" className="text-4xl" />
                        </div>
                    )}

                    {/* Quote Text */}
                    <div className={contentClasses}>
                        <p
                            style={{ fontSize: `${fontSize}px` }}
                            className="leading-relaxed font-medium break-words max-w-full"
                        >
                            "{quote}"
                        </p>
                    </div>

                    {/* Author & Book Info */}
                    <div className={footerClasses}>
                        <p
                            style={{ fontSize: `${authorSize}px` }}
                            className="uppercase tracking-widest font-bold font-inter"
                        >
                            {author}
                        </p>
                        {book && (
                            <p
                                style={{ fontSize: `${bookSize}px` }}
                                className="italic opacity-80 font-lora"
                            >
                                {book}
                            </p>
                        )}
                    </div>

                    {/* Decorative Icon Bottom (for inverted) */}
                    {layout === 'inverted' && (
                        <div className={iconClasses}>
                            <Quotes weight="fill" className="text-4xl" />
                        </div>
                    )}
                </div>
            </div>

            <p className="mt-6 text-xs text-slate-400">
                Dica: Use emojis ou quebras de linha para estilizar ainda mais.
            </p>
        </div>
    );
});

export default Preview;
