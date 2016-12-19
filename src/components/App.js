import React, { Component } from 'react'
import './App.sass'

class App extends Component {

  constructor () {
    super()
    this.state = {

    }
  }

  componentDidMount () {
    window.fetch('https://api.github.com/users/dannmcc').then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({
        name: data.name,
        location: data.location,
        imageURL: data.avatar_url,
        bio: data.bio
      })
    })
  }

  render () {
    return <div>
      <header>
        <div className='info'>

          <figure className='profilePic'>
            <img src={this.state.imageURL} height={200} width={200} />
          </figure>
          <h1>I'm Dan</h1>
          <p> {this.state.bio} </p>
        </div>
      </header>
      <main>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </main>
    </div>
  }
}

export default App
