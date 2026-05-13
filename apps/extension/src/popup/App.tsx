import { useEffect, useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [translation, setTranslation] = useState('');
  const [loading, setLoading] = useState(false);

  const translate = async (input: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `http://localhost:8000/translate?text=${encodeURIComponent(input)}&target=en`
      );
      const data = await res.json();
      setTranslation(data.translation || 'No result');
    } catch {
      setTranslation('Error: API not running');
    }
    setLoading(false);
  };

  return (
    <div style={{
      width: '320px', padding: '16px',
      background: '#0a0c12', color: '#e8eaf2',
      fontFamily: 'sans-serif', minHeight: '200px'
    }}>
      <h2 style={{ color: '#00e5ff', fontSize: '14px', marginBottom: '12px' }}>
        ⚡ LEXIFLOW
      </h2>
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Type or paste text here..."
        style={{
          width: '100%', background: '#1e2235',
          color: '#e8eaf2', border: '1px solid #2a3050',
          borderRadius: '6px', padding: '8px', fontSize: '13px'
        }}
        rows={3}
      />
      <button
        onClick={() => translate(text)}
        style={{
          marginTop: '8px', width: '100%',
          background: '#00e5ff', color: '#0a0c12',
          border: 'none', borderRadius: '6px',
          padding: '8px', cursor: 'pointer', fontWeight: 'bold'
        }}
      >
        {loading ? 'Translating...' : 'Translate'}
      </button>
      {translation && (
        <div style={{
          marginTop: '12px', padding: '10px',
          background: '#1e2235', borderRadius: '6px',
          borderLeft: '3px solid #00e5ff', fontSize: '13px'
        }}>
          {translation}
        </div>
      )}
    </div>
  );
}
