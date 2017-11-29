import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowProfile from './components/ShowProfile'
import EditProfile from './components/EditProfile'

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

        <EditProfile
            firstName={ user.firstName }
            lastName={ user.lastName }
            profileImage={ user.profileImage }
            onChangeValue={ (newValue, key) => {
                this.onChangeValue(newValue, key)
              }
            }
        />
      </div>
    );
  }
}

export default App;
