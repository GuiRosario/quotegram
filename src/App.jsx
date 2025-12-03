import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { Quotes, CheckCircle } from '@phosphor-icons/react';
import Controls from './components/Controls';
import Preview from './components/Preview';

function App() {
  // State
  const [quote, setQuote] = useState('O segredo da vida não é ter tudo que você quer, mas amar tudo que você tem.');
  const [author, setAuthor] = useState('George Orwell');
  const [book, setBook] = useState('1984');
  const [theme, setTheme] = useState({ classes: 'bg-white text-slate-900', border: '' });
  const [font, setFont] = useState('font-playfair');
  const [alignment, setAlignment] = useState('text-center');
  const [fontSize, setFontSize] = useState(30);
  const [authorSize, setAuthorSize] = useState(14);
  const [bookSize, setBookSize] = useState(12);
  const [layout, setLayout] = useState('default');
  const [imageHeight, setImageHeight] = useState(600);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const cardRef = useRef(null);

  const downloadImage = async () => {
    if (!cardRef.current) return;

    setIsDownloading(true);
    try {
      const canvas = await html2canvas(cardRef.current, {
        scale: 3,
        useCORS: true,
        backgroundColor: null,
        logging: false,
      });

      const link = document.createElement('a');
      link.download = `citacao-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();

      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (err) {
      console.error(err);
      alert('Ocorreu um erro ao gerar a imagem. Tente novamente.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="bg-slate-50 text-slate-800 font-inter min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-2 text-indigo-600">
          <Quotes weight="fill" className="text-2xl" />
          <span className="font-bold text-lg tracking-tight">Quote.io</span>
        </div>

      </nav>

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8 items-start justify-center">
        <Controls
          quote={quote} setQuote={setQuote}
          author={author} setAuthor={setAuthor}
          book={book} setBook={setBook}
          theme={theme} setTheme={setTheme}
          font={font} setFont={setFont}
          alignment={alignment} setAlignment={setAlignment}
          fontSize={fontSize} setFontSize={setFontSize}
          authorSize={authorSize} setAuthorSize={setAuthorSize}
          bookSize={bookSize} setBookSize={setBookSize}
          layout={layout} setLayout={setLayout}
          imageHeight={imageHeight} setImageHeight={setImageHeight}
          downloadImage={downloadImage}
          isDownloading={isDownloading}
        />

        <Preview
          ref={cardRef}
          quote={quote}
          author={author}
          book={book}
          theme={theme}
          font={font}
          alignment={alignment}
          fontSize={fontSize}
          authorSize={authorSize}
          bookSize={bookSize}
          layout={layout}
          imageHeight={imageHeight}
        />
      </main>

      {/* Success Toast */}
      <div
        className={`fixed bottom-5 right-5 bg-emerald-500 text-white px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 flex items-center gap-2 z-50 ${showToast ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
      >
        <CheckCircle weight="bold" size={24} />
        <span>Imagem baixada com sucesso!</span>
      </div>
    </div>
  );
}

export default App;
