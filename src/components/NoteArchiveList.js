import React from 'react'

import NoteItem from './NoteItem'

const NoteArchiveList = ({ notes, onDeleteNote, onToggleStatus }) => {
  const archivedNotes = notes.filter((note) => note.archived === true)

  return (
    <>
      <h2>Arsip</h2>
      {archivedNotes.length !== 0 ? (
        <section className="notes-list">
          {archivedNotes.map((note) => (
            <NoteItem
              key={note.id}
              {...note}
              onDeleteNote={onDeleteNote}
              onToggleStatus={onToggleStatus}
            />
          ))}
        </section>
      ) : (
        <p className="notes-list__empty-message">Tidak ada catatan</p>
      )}
    </>
  )
}

export default NoteArchiveList
