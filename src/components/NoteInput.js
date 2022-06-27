import React, { useState } from 'react'

const NoteInput = ({ onFormSubmit }) => {
  const [note, setNote] = useState({ title: '', body: '' })
  const [maxCharacters, setMaxCharacters] = useState(50)

  const handleChange = (event) => {
    let { name, value, maxLength } = event.target
    setNote((prevState) => ({ ...prevState, [name]: value }))

    if (name === 'title') {
      const charLength = maxLength - value.length
      setMaxCharacters(Number(charLength))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const noteObject = {
      id: +new Date(),
      title: note.title,
      body: note.body,
      createdAt: +new Date(),
      archived: false,
    }

    onFormSubmit(noteObject)
  }

  return (
    <section className="note-input">
      <h2>Buat Catatan</h2>
      <form action="" onSubmit={handleSubmit}>
        <p className="note-input__title__char-limit">
          Sisa karakter: {maxCharacters}
        </p>
        <input
          className="note-input__title"
          type="text"
          placeholder="Ini adalah judul ..."
          required=""
          name="title"
          onChange={handleChange}
          maxLength="50"
        />
        <textarea
          className="note-input__body"
          type="text"
          placeholder="Tuliskan catatanmu di sini ..."
          required=""
          name="body"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Buat</button>
      </form>
    </section>
  )
}

export default NoteInput
