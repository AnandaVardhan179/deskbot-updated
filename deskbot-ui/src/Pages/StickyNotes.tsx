import React, { useEffect, useState } from 'react';
import Note from '../components/Note';

const StickyNotes = () => {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState('');
  const [color, setColor] = useState('yellow'); // store color name

  // Map color names to hex values for rendering
  const colorMap: Record<string, string> = {
    pink: "#f8bbd0",
    blue: "#bbdefb",
    yellow: "#fff9c4",
    green: "#c8e6c9"
  };

  const fetchNotes = async () => {
    const res = await fetch('http://localhost:8080/api/notes');
    const data = await res.json();
    setNotes(data);
  };

  const addNote = async () => {
    if (!content) return;

    const res = await fetch('http://localhost:8080/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, color })
    });

    if (res.ok) {
      setContent('');
      fetchNotes();
    }
  };

  const deleteNote = async (id: number) => {
    await fetch(`http://localhost:8080/api/notes/${id}`, {
      method: 'DELETE'
    });
    fetchNotes();
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Sticky Notes</h2>
      <textarea
        placeholder="Write your note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={4}
        cols={30}
      />
      <br />
      <label>Select Color: </label>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="pink">Pink</option>
      </select>
      <br />
      <button onClick={addNote} style={{ marginTop: '10px' }}>Save Note</button>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={{ ...note, color: colorMap[note.color] }}
            onDelete={deleteNote}
          />
        ))}
      </div>
    </div>
  );
};

export default StickyNotes;
