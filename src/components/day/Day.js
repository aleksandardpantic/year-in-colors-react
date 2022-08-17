import React, { Component } from 'react'
import './Day.scss'
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {TextField }from '@material-ui/core';
import { Button } from '@material-ui/core';


export default class Day extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            mood: props.data.mood,
            newMood: 0,
            id: props.data.id,
            day: props.data.day,
            month: props.data.month,
            text: props.data.text,
            newText: "",
            chaged: false

        }
        this.editMood = this.editMood.bind(this)
        this.handleToClose = this.handleToClose.bind(this)
        this.onChangeValue = this.onChangeValue.bind(this)
        this.save = this.save.bind(this)
        this.onChangeText = this.onChangeText.bind(this)
    }
    editMood(){
     
      this.setState({open: true})
      
    }
    handleToClose(){
      this.setState({open: false})
      
    }
    getMood(){
      switch (this.state.mood) {
          case 0 :
              return "";
          case 1 :
              return "awful";
          case 2 :
              return "bad"; 
          case 3 :
              return "neutral";
          case 4 :
              return "good";
          case 5 :
              return "excellent";  
          default:
              return "";
          
      }
  }
  onChangeValue(event){
    let value = parseInt(event.target.value)
    
    this.setState({newMood: value, chaged: true})
    
  }
  onChangeText(event){
    this.setState({newText: event.target.value, chaged: true})
  }
  save(){
    if (this.state.chaged) {
      this.setState({mood: this.state.newMood, text: this.state.newText, open: false})
    } else {
      this.setState({open:false, chaged: false})
    }
    
    
    
  }
  
  render() {
    
    return (
      <div className='container'>
        <div className = {["field",this.getMood()].join(" ")} onClick={this.editMood} >
        
        </div>
        <Dialog open={this.state.open} >
        <DialogTitle>{"Izmena dana "+ this.state.day + ". " + this.state.month}</DialogTitle>
        <DialogContent>
          
          <DialogContentText>
            Izaberi raspoloženje za ovaj dan
          </DialogContentText>
          <div className='form' onChange={this.onChangeValue}>

            <input type="radio" value="5" name="mood"/> <p>&#128524;</p>
            <input type="radio" value="4" name="mood"/> <p>&#128515;</p>
            <input type="radio" value="3" name="mood"/> <p>&#128528;</p>
            <input type="radio" value="2" name="mood" /> <p>&#128532;</p>
            <input type="radio" value="1" name="mood"/> <p>&#128546;</p>
            <input type="radio" value="0" name="mood"/> <div className="box"></div>

          </div>
          <div className="text" onChange={this.onChangeText}>
            
            <TextField name="text" id="standard-basic" label="Kratak opis" variant="standard" defaultValue={this.state.text} helperText="255 karaktera" />
          </div>
          <DialogActions>
          <Button onClick={this.handleToClose} 
                  color="primary" autoFocus>
            Zatvori
          </Button>
          <Button  onClick={this.save} 
                  color="primary" >
            Sačuvaj
          </Button>
        </DialogActions>
          
        </DialogContent>
        
        
      </Dialog>
      </div>
    )
  }
}
