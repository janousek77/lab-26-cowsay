import './style/main.scss'
import cowsay from 'cowsay-browser'
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
  }

  render(){
    return(
      <Navbar />
      // cowsay.say({
	    //  text : "I'm a moooodule",
	    //  e : "oO",
	    //  T : "U "
      // })
    )
  }
}

ReactDom.render(<App/>, document.getElementById('root')
)
