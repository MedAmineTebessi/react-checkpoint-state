import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Person: {
        fullName: "Khaled",
        bio: "alh mou7ammed",
        imgSrc: "image", 
        profession: "Développeur full stack 2ad donya"
      },
      shows: false
    }
  }

  toggleShow() {
    this.setState((prevState)=>{
      return {shows: !prevState.shows}
    })
    //console.log(this.state.shows)
  }

  render() {
    const { Person, shows } = this.state;
    return(
      <>
      <button onClick={()=>this.toggleShow()}>{shows? "Hide profile": "Show profile"}</button>
      {
        shows && (
          <>
          <h1>{Person.fullName}</h1>
          </>
        )
      }
      </>
    )
  }
}

export default App;
