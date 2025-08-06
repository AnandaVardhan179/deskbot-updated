import { useState } from 'react';
import StickyNotes from './pages/StickyNotes';

function App() {
  const [command, setCommand] = useState('');
  const [response, setResponse] = useState('');
  const [showNotes, setShowNotes] = useState(false);

  const sendCommand = async () => {
    const normalized = command.trim().toLowerCase();

    if (normalized === 'open notes') {
      setShowNotes(true);
      setResponse('📌 Sticky Notes opened.');
      return;
    }

    try {
      const res = await fetch(`http://localhost:8080/api/command?text=${encodeURIComponent(command)}`);
      const text = await res.text();
      setResponse(text);
    } catch (error) {
      setResponse('❌ Failed to connect to backend.');
    }
  };

  const goBack = () => {
    setShowNotes(false);
    setCommand('');
    setResponse('');
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🧠 DeskBot</h1>

      {!showNotes && (
        <>
          <p>Type a command and click <strong>Run</strong>:</p>

          <input
            type="text"
            placeholder="e.g., open chrome or open notes"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            style={{ padding: '10px', width: '300px', fontSize: '16px' }}
          />
          <button
            onClick={sendCommand}
            style={{
              marginLeft: '10px',
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Run
          </button>

          {response && (
            <div style={{ marginTop: '20px', padding: '10px', background: '#eee' }}>
              <strong>DeskBot says:</strong> {response}
            </div>
          )}
        </>
      )}

      {showNotes && (
        <div>
          <button
            onClick={goBack}
            style={{
              marginBottom: '10px',
              padding: '8px 16px',
              fontSize: '14px',
              backgroundColor: '#dc3545',
              color: 'white',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            ← Back to Command Mode
          </button>
          <StickyNotes />
        </div>
      )}
    </div>
  );
}

export default App;
