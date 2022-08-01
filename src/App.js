/* eslint-disable no-unused-vars */
import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}
export default App

/*class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state

    let authButton

    if (isLoggedIn === true) {
      // eslint-disable-next-line react/button-has-type

      authButton = <button>Logout</button>
    }

    // eslint-disable-next-line react/button-has-type
    else authButton = <button>Login</button>

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />

        {authButton}
      </div>
    )
  }
}

export default App

//or

class App extends Component {
  state = {
    isLoggedIn: true,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />

        {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
      </div>
    )
  }
}

export default App ?? // or
  class App extends Component {
    state = {
      isLoggedIn: false,
    }

    render() {
      const {isLoggedIn} = this.state

      return (
        <div className="container">
          <Welcome greeting="Hello" name="User" />

          {isLoggedIn && <button>Logout</button>}

          {!isLoggedIn && <button>Login</button>}
        </div>
      )
    }
  }

export default App
