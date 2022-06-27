import React, { useState } from 'react'

import NoteAppBody from './NoteAppBody'
import NoteAppHeader from './NoteAppHeader'
import { getInitialData } from '../utils/index'

const NoteApp = () => {
  const [notes, setNotes] = useState(getInitialData())
  const [search, setSearch] = useState('')

  const handleSubmit = (noteObject) => {
    setNotes((prevState) => [...prevState, noteObject])
  }

  const handleDelete = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId)
    setNotes(() => newNotes)
  }

  const handleToggle = (noteId) => {
    const noteIndex = notes.findIndex((note) => note.id === noteId)
    const toggleNote = notes.splice(noteIndex, 1)
    const changedNote = {
      ...toggleNote[0],
      archived: !toggleNote[0].archived,
    }
    setNotes([...notes, changedNote])
  }

  const handleSearch = (keyword) => {
    setSearch(keyword)
  }

  const filtered = !search
    ? notes
    : notes.filter((note) =>
        note.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
  return (
    <>
      <NoteAppHeader onSearchNote={handleSearch} search={search} />
      <NoteAppBody
        onDeleteNote={handleDelete}
        onFormSubmit={handleSubmit}
        onToggleStatus={handleToggle}
        notes={filtered}
      />
    </>
  )
}

export default NoteApp
