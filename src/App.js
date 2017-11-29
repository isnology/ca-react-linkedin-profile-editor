import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImage: 'https://randomuser.me/api/portraits/lego/1.jpg'
    }
  }

  onChangeName = (newValue, name) => {
    this.setState((prevState) => {
      const newUser = { ...prevState.user, [name]: newValue }
      return {
        user: newUser
      }
    })
  }

  render() {
    const user = this.state.user

    return (
      <div className="App">
        <h1>Linkedin Profile Editor</h1>
        <img src={ user.profileImage } />
        <p>Name: { user.firstName } { user.lastName }</p>

        <label>
          First name:
          {' '}
          <input type="text" value={ user.firstName }
            onChange={ (event) => {
                this.onChangeName(event.target.value, 'firstName')
              }
            }
          />
        </label>
        <div />
        <label>
          Last name:
          {' '}
          <input type="text" value={ user.lastName }
            onChange={ (event) => {
                this.onChangeName(event.target.value, 'lastName')
              }
            }
          />
        </label>
        <div />
        <label>
          Image Url:
          {' '}
          <input type="text" value={ user.profileImage }
            onChange={ (event) => {
                this.onChangeName(event.target.value, 'profileImage')
              }
            }
          />
        </label>
      </div>
    );
  }
}

export default App;
