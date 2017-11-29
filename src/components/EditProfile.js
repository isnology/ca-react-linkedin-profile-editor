import React from 'react'

function EditProfile({ description, completed = false, onToggleCompleted, onDescriptionChange }) {
  return (
      <div className="item">
        <button type='button'
                onClick={ (event) => {
                  onToggleCompleted()
                }
                }
        >
          { completed ? '✅' : '❎' }
        </button>
        <input type="text"
               onChange={ (event) => {
                 onDescriptionChange(event.target.value)
               }
               }
               value={ description }
        />
      </div>
  )
}



export default EditProfile