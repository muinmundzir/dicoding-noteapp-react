import React from 'react'

import NoteActiveList from './NoteActiveList'
import NoteArchiveList from './NoteArchiveList'
import NoteInput from './NoteInput'

const NoteAppBody = ({ notes, onFormSubmit, onDeleteNote, onToggleStatus }) => {
  return (
    <main className="note-app__body">
      <NoteInput onFormSubmit={onFormSubmit} />
      <NoteActiveList
        notes={notes}
        onDeleteNote={onDeleteNote}
        onToggleStatus={onToggleStatus}
      />
      <NoteArchiveList
        notes={notes}
        onDeleteNote={onDeleteNote}
        onToggleStatus={onToggleStatus}
      />
    </main>
  )
}

export default NoteAppBody
