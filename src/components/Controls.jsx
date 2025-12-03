import React from 'react';
import {
    Quotes,
    PencilSimple,
    Palette,
    TextAlignLeft,
    TextAlignCenter,
    TextAlignRight,
    DownloadSimple,
    Spinner,
    Layout
} from '@phosphor-icons/react';

export default function Controls({
    quote, setQuote,
    author, setAuthor,
    book, setBook,
    theme, setTheme,
    font, setFont,
    alignment, setAlignment,
    fontSize, setFontSize,
    authorSize, setAuthorSize,
    bookSize, setBookSize,
    layout, setLayout,
    imageHeight, setImageHeight,
    downloadImage, isDownloading
}) {
    return (
        <div className="w-full lg:w-1/3 space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <div className="space-y-4">
                <h2 className="font-semibold text-slate-700 flex items-center gap-2">
                    <PencilSimple size={20} /> Conteúdo
                </h2>

                <div>
                    <label className="block text-xs font-medium text-slate-500 mb-1">Frase</label>
                    <textarea
                        rows="4"
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                        placeholder="Digite sua frase aqui..."
                        value={quote}
                        onChange={(e) => setQuote(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1">Autor</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="Nome do Autor"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1">Livro (Opcional)</label>
                        <input
                            type="text"
                            className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
                            placeholder="Título do Livro"
                            value={book}
                            onChange={(e) => setBook(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <hr className="border-slate-100" />

            {/* Personalization */}
            <div className="space-y-4">
                <h2 className="font-semibold text-slate-700 flex items-center gap-2">
                    <Palette size={20} /> Estilo
                </h2>

                {/* Theme/Background Selector */}
                <div>
                    <label className="block text-xs font-medium text-slate-500 mb-2">Tema</label>
                    <div className="grid grid-cols-5 gap-2">
                        <button
                            onClick={() => setTheme({ classes: 'bg-white text-slate-900', border: '' })}
                            className={`w-10 h-10 rounded-full bg-white border border-slate-300 hover:scale-110 transition-transform ring-2 focus:ring-indigo-500 ${theme.classes === 'bg-white text-slate-900' ? 'ring-indigo-500 scale-110' : 'ring-transparent'}`}
                            title="Minimalista"
                        ></button>
                        <button
                            onClick={() => setTheme({ classes: 'bg-slate-900 text-white', border: 'border-slate-700' })}
                            className={`w-10 h-10 rounded-full bg-slate-900 border border-slate-700 hover:scale-110 transition-transform ring-2 focus:ring-indigo-500 ${theme.classes === 'bg-slate-900 text-white' ? 'ring-indigo-500 scale-110' : 'ring-transparent'}`}
                            title="Dark"
                        ></button>
                        <button
                            onClick={() => setTheme({ classes: 'bg-gradient-to-br from-indigo-500 to-purple-600 text-white', border: 'border-white/20' })}
                            className={`w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 hover:scale-110 transition-transform ring-2 focus:ring-indigo-500 ${theme.classes.includes('from-indigo-500') ? 'ring-indigo-500 scale-110' : 'ring-transparent'}`}
                            title="Aurora"
                        ></button>
                        <button
                            onClick={() => setTheme({ classes: 'bg-gradient-to-tr from-amber-200 to-yellow-500 text-amber-900', border: 'border-amber-900/10' })}
                            className={`w-10 h-10 rounded-full bg-gradient-to-tr from-amber-200 to-yellow-500 hover:scale-110 transition-transform ring-2 focus:ring-indigo-500 ${theme.classes.includes('from-amber-200') ? 'ring-indigo-500 scale-110' : 'ring-transparent'}`}
                            title="Gold"
                        ></button>
                        <button
                            onClick={() => setTheme({ classes: 'bg-[url(https://images.unsplash.com/photo-1507842217159-a28f2d79e756?q=80&w=1000&auto=format&fit=crop)] bg-cover bg-center text-white relative isolate', border: 'border-white/20', hasImage: true })}
                            className={`w-10 h-10 rounded-full bg-stone-500 bg-[url(https://images.unsplash.com/photo-1507842217159-a28f2d79e756?q=80&w=100&auto=format&fit=crop)] bg-cover hover:scale-110 transition-transform ring-2 focus:ring-indigo-500 ${theme.hasImage ? 'ring-indigo-500 scale-110' : 'ring-transparent'}`}
                            title="Textura Papel"
                        ></button>
                    </div>
                </div>

                {/* Font Selector */}
                <div>
                    <label className="block text-xs font-medium text-slate-500 mb-2">Fonte</label>
                    <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                        <button
                            onClick={() => setFont('font-playfair')}
                            className={`flex-1 py-1.5 text-sm rounded transition-all ${font === 'font-playfair' ? 'bg-white shadow-sm text-slate-900 font-semibold ring-1 ring-slate-200' : 'text-slate-600 hover:bg-white/50'}`}
                        >
                            Clássica
                        </button>
                        <button
                            onClick={() => setFont('font-lora')}
                            className={`flex-1 py-1.5 text-sm rounded transition-all font-lora ${font === 'font-lora' ? 'bg-white shadow-sm text-slate-900 font-semibold ring-1 ring-slate-200' : 'text-slate-600 hover:bg-white/50'}`}
                        >
                            Serifa
                        </button>
                        <button
                            onClick={() => setFont('font-inter')}
                            className={`flex-1 py-1.5 text-sm rounded transition-all font-inter ${font === 'font-inter' ? 'bg-white shadow-sm text-slate-900 font-semibold ring-1 ring-slate-200' : 'text-slate-600 hover:bg-white/50'}`}
                        >
                            Moderna
                        </button>
                        <button
                            onClick={() => setFont('font-cinzel')}
                            className={`flex-1 py-1.5 text-sm rounded transition-all font-cinzel ${font === 'font-cinzel' ? 'bg-white shadow-sm text-slate-900 font-semibold ring-1 ring-slate-200' : 'text-slate-600 hover:bg-white/50'}`}
                        >
                            Épica
                        </button>
                    </div>
                </div>

                {/* Alignment */}
                <div>
                    <label className="block text-xs font-medium text-slate-500 mb-2">Alinhamento</label>
                    <div className="flex gap-2">
                        <button onClick={() => setAlignment('text-left')} className={`p-2 rounded transition-colors ${alignment === 'text-left' ? 'bg-slate-200 text-slate-900' : 'hover:bg-slate-100 text-slate-600'}`}>
                            <TextAlignLeft size={20} />
                        </button>
                        <button onClick={() => setAlignment('text-center')} className={`p-2 rounded transition-colors ${alignment === 'text-center' ? 'bg-slate-200 text-slate-900' : 'hover:bg-slate-100 text-slate-600'}`}>
                            <TextAlignCenter size={20} />
                        </button>
                        <button onClick={() => setAlignment('text-right')} className={`p-2 rounded transition-colors ${alignment === 'text-right' ? 'bg-slate-200 text-slate-900' : 'hover:bg-slate-100 text-slate-600'}`}>
                            <TextAlignRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Layout */}
                <div>
                    <label className="block text-xs font-medium text-slate-500 mb-2">Layout</label>
                    <div className="flex gap-2 bg-slate-100 p-1 rounded-lg">
                        <button
                            onClick={() => setLayout('default')}
                            className={`flex-1 py-1.5 text-xs rounded transition-all ${layout === 'default' ? 'bg-white shadow-sm text-slate-900 font-semibold ring-1 ring-slate-200' : 'text-slate-600 hover:bg-white/50'}`}
                        >
                            Padrão
                        </button>
                        <button
                            onClick={() => setLayout('centered')}
                            className={`flex-1 py-1.5 text-xs rounded transition-all ${layout === 'centered' ? 'bg-white shadow-sm text-slate-900 font-semibold ring-1 ring-slate-200' : 'text-slate-600 hover:bg-white/50'}`}
                        >
                            Centro
                        </button>
                        <button
                            onClick={() => setLayout('spread')}
                            className={`flex-1 py-1.5 text-xs rounded transition-all ${layout === 'spread' ? 'bg-white shadow-sm text-slate-900 font-semibold ring-1 ring-slate-200' : 'text-slate-600 hover:bg-white/50'}`}
                        >
                            Espalhado
                        </button>
                        <button
                            onClick={() => setLayout('inverted')}
                            className={`flex-1 py-1.5 text-xs rounded transition-all ${layout === 'inverted' ? 'bg-white shadow-sm text-slate-900 font-semibold ring-1 ring-slate-200' : 'text-slate-600 hover:bg-white/50'}`}
                        >
                            Invertido
                        </button>
                    </div>
                </div>

                {/* Adjustments */}
                <div className="space-y-3 pt-2">
                    <label className="block text-xs font-medium text-slate-500">Ajustes</label>

                    {/* Font Size */}
                    <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                            <span>Tamanho da Frase</span>
                            <span>{fontSize}px</span>
                        </div>
                        <input
                            type="range"
                            min="16"
                            max="64"
                            value={fontSize}
                            onChange={(e) => setFontSize(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>

                    {/* Author Size */}
                    <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                            <span>Tamanho do Autor</span>
                            <span>{authorSize}px</span>
                        </div>
                        <input
                            type="range"
                            min="10"
                            max="32"
                            value={authorSize}
                            onChange={(e) => setAuthorSize(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>

                    {/* Book Size */}
                    <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                            <span>Tamanho do Livro</span>
                            <span>{bookSize}px</span>
                        </div>
                        <input
                            type="range"
                            min="8"
                            max="24"
                            value={bookSize}
                            onChange={(e) => setBookSize(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>

                    {/* Image Height */}
                    <div>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                            <span>Altura da Imagem</span>
                            <span>{imageHeight}px</span>
                        </div>
                        <input
                            type="range"
                            min="400"
                            max="1000"
                            step="10"
                            value={imageHeight}
                            onChange={(e) => setImageHeight(parseInt(e.target.value))}
                            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                        />
                    </div>
                </div>
            </div>

            {/* Download Button */}
            <button
                onClick={downloadImage}
                disabled={isDownloading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-indigo-200 transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isDownloading ? (
                    <>
                        <Spinner className="animate-spin" size={20} /> Gerando...
                    </>
                ) : (
                    <>
                        <DownloadSimple size={20} /> Baixar PNG
                    </>
                )}
            </button>
        </div>
    );
}
