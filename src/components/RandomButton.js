import React from 'react'

function RandomButton({ children, onButtonPress }) {
  return (
      <button type="button"
        onClick={ (event) => {
            onButtonPress()
          }
        }
      >
        { children }
      </button>
  )
}

export default RandomButton
