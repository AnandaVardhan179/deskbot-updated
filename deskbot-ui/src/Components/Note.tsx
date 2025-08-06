import React from 'react';

const Note = ({ note, onDelete }) => {
  const { id, content, color } = note;

  const styles = {
    backgroundColor: color || '#fff9c4',
    padding: '1rem',
    margin: '1rem',
    width: '200px',
    minHeight: '150px',
    borderRadius: '8px',
    boxShadow: '2px 2px 5px rgba(0,0,0,0.2)',
    position: 'relative'
  };

  return (
    <div style={styles}>
      <button
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          border: 'none',
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          cursor: 'pointer'
        }}
        onClick={() => onDelete(id)}
      >
        ×
      </button>
      <div>{content}</div>
    </div>
  );
};

export default Note;
