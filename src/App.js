import React, { Component } from 'react';
import './App.css';
import ShowProfile from './components/ShowProfile'
import EditProfile from './components/EditProfile'
import ToggleButton from './components/ToggleButton'
import RandomButton from './components/RandomButton'
import axios from 'axios'

class App extends Component {
  state = {
    user: {
      firstName: 'Alice',
      lastName: 'Jones',
      profileImage: 'https://randomuser.me/api/portraits/lego/1.jpg'
    },
    toggleButton: {
      value: false,
      [false]: 'Show Edit Fields',
      [true]: 'Show Profile Data'
    }
  }

  onChangeValue = (newValue, key) => {
    this.setState((prevState) => {
      const newUser = { ...prevState.user, [key]: newValue }
      return { user: newUser }
    })
  }

  onToggleChange = () => {
    this.setState(({ toggleButton }) => {
      toggleButton.value = !toggleButton.value
      toggleButton.text = [toggleButton.value].text
      return { toggleButton }
    })
  }

  onButtonPress = () => {
    axios.get('https://randomuser.me/api/')
    .then((response) => {
      const name = response.data.results[0].name
      const newUrl = response.data.results[0].picture.large
      this.setState(({ user }) => {
        const newUser = { ...user, profileImage: newUrl, firstName: name.first, lastName: name.last }
        return { user: newUser }
      })
    })
    .catch((error) => {
      console.log(error)
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
          { toggleButton[toggleButton.value] }
        </ToggleButton>
        <RandomButton onButtonPress={ () => {
            this.onButtonPress()
          }
        }
        >
          Press for Random Profile Picture
        </RandomButton>
      </div>
    );
  }
}

export default App;
