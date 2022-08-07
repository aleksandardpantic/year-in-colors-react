import React, { Component } from 'react'
import './Day.scss'

export default class Day extends Component {
    constructor(props){
        super(props)
        this.state = {
            day: props.data.day,
            month: props.data.month,
            mood: props.data.mood
        }
        this.toggleMood = this.toggleMood.bind(this);
    }
    toggleMood(){
      if (this.state.mood==="bad") {
        this.setState({mood: "excellent"})
      } else {
        this.setState({mood: "good"})
      }
      
    }
    
  render() {
    const mood = this.state.mood
    return (
      <div className='container'>
        <div className = {["field",mood].join(" ")} onClick={this.toggleMood}></div>
      </div>
    )
  }
}
