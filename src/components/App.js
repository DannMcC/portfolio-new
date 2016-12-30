import React, { Component } from 'react'
import './App.sass'
import PortfolioItems from './PortfolioItems.js'

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
        bio: data.bio,
        current: data.repos_url
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

      <PortfolioItems />

    </div>
  }
}

export default App
