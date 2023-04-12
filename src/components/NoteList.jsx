import React from 'react'
// import PropTypes from 'prop-types'
import NoteItem from './NoteItem'

const NoteList = ({ notes, onDelete, onArchive }) => {
  return (
    <div className="note-list">
      {
        notes.map((note) =>
          <NoteItem
            key={note.id}
            id={note.id}
            onDelete={onDelete} onArchive={onArchive} onActive={onActive}
            {...note} />)
      }
    </div>
  )
}


// NoteList.propTypes = {
//   notes: PropTypes.arrayOf(PropTypes.object).isRequired,
//   onDelete: PropTypes.func.isRequired
// }

export default NoteList
