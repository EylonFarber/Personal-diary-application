import React from 'react'

export default function NewEntryButton() {
  return (
    <button
      className="btn"
      onClick={() => document.getElementById("my_modal_1").showModal()}
    >
      New entry
    </button>  )
}
