import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowProfile from './components/ShowProfile'
import EditProfile from './components/EditProfile'
import ToggleButton from './components/ToggleButton'

class App extends Component {
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImage: 'https://randomuser.me/api/portraits/lego/1.jpg'
    },
    toggleButton: {
      value: false,
      text: 'Show Edit Fields'
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

  onToggleChange = () => {
    this.setState(({ toggleButton }) => {
      toggleButton.value = !toggleButton.value
      return { toggleButton }
    })
  }


  render() {
    const user = this.state.user
    const toggleButton = this.state.toggleButton

    return (
      <div className="App">
        { !toggleButton.value &&
          <ShowProfile
              firstName={ user.firstName }
              lastName={ user.lastName }
              profileImage={ user.profileImage }
          />
        }
        { toggleButton.value &&
          <EditProfile
              firstName={ user.firstName }
              lastName={ user.lastName }
              profileImage={ user.profileImage }
              onChangeValue={ (newValue, key) => {
                  this.onChangeValue(newValue, key)
                }
              }
          />
        }
        <ToggleButton onToggleChange={ () => {
            this.onToggleChange()
          }
        }
        >
          { toggleButton.text }
        </ToggleButton>
      </div>
    );
  }
}

export default App;
