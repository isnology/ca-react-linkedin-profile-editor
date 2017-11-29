import React from 'react'

function ShowProfile({ firstName, lastName, profileImage }) {
  return (
    <div>
      <h1>Linkedin Profile Editor</h1>
      <img src={ profileImage } alt="Profile" />
      <p>Name: { firstName } { lastName }</p>
    </div>
  )
}

export default ShowProfile