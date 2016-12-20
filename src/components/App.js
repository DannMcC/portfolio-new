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
        <div className='blog'>
          <article>
            {/* <header style='background-image: url(./dan.png);' /> */}
            <div>
              <h3>Bee Movie</h3>
              <p>According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don’t care what humans think is impossible.</p>
              <a className='more' href='#'>Read More</a>
            </div>
          </article>
          <article>
            {/* <header style="background-image: url('https://tctechcrunch2011.files.wordpress.com/2015/04/codecode.jpg?w=738')" /> */}
            <div>
              <h3>blog</h3>
              <p>Yellow, black. Yellow, black. Yellow, black. Yellow, black. Ooh, black and yellow! Let’s shake it up a little. Barry! Breakfast is ready! Ooming! Hang on a second. Hello? - Barry? - Adam? - Oan you believe this is happening? - I can’t.</p>
              <a className='more' href='#'>Read More!!</a>
            </div>
          </article>
        </div>
      </main>
    </div>
  }
}

export default App
