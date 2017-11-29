import React from 'react'

function EditProfile({ firstName, lastName, profileImage, onChangeValue }) {
  return (
      <div>
        <label>
          First name:
          {' '}
          <input type="text" value={ firstName }
             onChange={ (event) => {
                 onChangeValue(event.target.value, 'firstName')
               }
             }
          />
        </label>
        <div />
        <label>
          Last name:
          {' '}
          <input type="text" value={ lastName }
             onChange={ (event) => {
                 onChangeValue(event.target.value, 'lastName')
               }
             }
          />
        </label>
        <div />
        <label>
          Image Url:
          {' '}
          <input type="text" value={ profileImage }
             onChange={ (event) => {
                 onChangeValue(event.target.value, 'profileImage')
               }
             }
          />
        </label>
      </div>
  )
}

export default EditProfile