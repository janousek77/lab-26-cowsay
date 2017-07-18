import './style/main.scss'
import cowsay from 'cowsay-browser'
import faker from 'faker'
import React from 'react'
import ReactDom from 'react-dom'

class Navbar extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <header>
        <h2>Generate Cowsay Lorem</h2>
      </header>
    )
  }
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: 'this should change',
    }

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e){
    this.setState((state) => {
      return {
        text: faker.lorem.words(15)
      }
    })
  }

  render(){
    return (
      <div>
        <Navbar />
        <pre>
          {cowsay.say({ text: this.state.text, e: 'oO', T: 'U' })}
        </pre>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root')
)
