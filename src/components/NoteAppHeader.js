import React from 'react'

const NoteAppHeader = ({ search, onSearchNote }) => {
  return (
    <header className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          type="text"
          value={search}
          placeholder="Cari catatan ..."
          onChange={(event) => {
            onSearchNote(event.target.value)
          }}
        />
      </div>
    </header>
  )
}

export default NoteAppHeader
