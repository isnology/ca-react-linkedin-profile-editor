import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowProfile from './components/ShowProfile'

class App extends Component {
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImage: 'https://randomuser.me/api/portraits/lego/1.jpg'
    }
  }

  onChangeValue = (newValue, key) => {
    this.setState((prevState) => {
      const newUser = { ...prevState.user, [key]: newValue }
      return {
        user: newUser
      }
    })
  }

  render() {
    const user = this.state.user

    return (
      <div className="App">
        <ShowProfile
            firstName={ user.firstName }
            lastName={ user.lastName }
            profileImage={ user.profileImage }
        />

        <label>
          First name:
          {' '}
          <input type="text" value={ user.firstName }
            onChange={ (event) => {
                this.onChangeValue(event.target.value, 'firstName')
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
                this.onChangeValue(event.target.value, 'lastName')
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
                this.onChangeValue(event.target.value, 'profileImage')
              }
            }
          />
        </label>
      </div>
    );
  }
}

export default App;
