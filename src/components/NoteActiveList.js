import React from 'react'

import NoteItem from './NoteItem'

const NoteActiveList = ({ notes, onDeleteNote, onToggleStatus }) => {
  const activeNotes = notes.filter((note) => note.archived === false)

  return (
    <>
      <h2>Catatan Aktif</h2>
      {activeNotes.length !== 0 ? (
        <section className="notes-list">
          {activeNotes.map((note) => (
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

export default NoteActiveList
