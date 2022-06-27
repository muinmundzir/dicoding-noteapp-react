import React from 'react'

import { showFormattedDate } from '../utils'

const NoteItem = ({
  id,
  title,
  body,
  archived,
  createdAt,
  onDeleteNote,
  onToggleStatus,
}) => {
  const handleDelete = (noteId) => {
    onDeleteNote(noteId)
  }

  const handleToggle = (noteId) => {
    onToggleStatus(noteId)
  }

  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{showFormattedDate(createdAt)}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <div className="note-item__action">
        <button
          className="note-item__delete-button"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
        {archived ? (
          <button
            className="note-item__archive-button"
            onClick={() => handleToggle(id)}
          >
            Pindahkan
          </button>
        ) : (
          <button
            className="note-item__archive-button"
            onClick={() => handleToggle(id)}
          >
            Arsipkan
          </button>
        )}
      </div>
    </div>
  )
}

export default NoteItem
