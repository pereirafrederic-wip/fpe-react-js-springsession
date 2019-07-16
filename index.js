import React, { Component } from 'react';
import { render } from 'react-dom';
import { Button } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      message: '',
      messages: []
    };

    this.onChangeMessage = this.onChangeMessage.bind(this)
    this.persistMessage = this.persistMessage.bind(this)
  this.readMessages = this.readMessages.bind(this)
    this.deleteSession = this.deleteSession.bind(this)
  }

  
  onChangeMessage(event){
    event.preventDefault();
    console.log(event.target.value)
    this.setState({ message:event.target.value })
  }

  persistMessage(event){
    event.preventDefault();
    console.log('persist')
        const response = fetch("http://localhost:9001/persist-message", {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors',
            body: {
              msg : this.state.message
            }
    })

 let result = 
    response.then(response => { return  response.json()})
    console.log('result', result)
  }

    readMessages(){
    console.log('readMessages')
          const response = fetch("http://localhost:9001/read-message", {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'GET',
            mode: 'no-cors'
    })

 let result = 
    response
    .then(response=> {
      return response.body}).then(response => { return  response.json()})


      console.log('read result',result)
  }

  deleteSession(){
    console.log('deleteSession')
              const response = fetch("http://localhost:9001/destroy", {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
    })

 let result = 
    response
    .then(response=> {
      return response.body}).then(response => { return  response.json()})

         console.log('destroy result',result)
  }


  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleText">messages</Label>
            <Input type="textarea" name="text" id="exampleText" value={this.state.message} onChange={this.onChangeMessage}></Input>
          </FormGroup>
          <Button color="primary" onClick={this.persistMessage}>persist</Button>
        </Form>
                <br />
           {this.state.messages.map(message => <p>{message}</p> )}
        <br />
        <Button color="secondary" onClick={this.readMessages}>read</Button>
        <br />
        <br />
        <br />
        <Button color="danger" onClick={this.deleteSession}>Delete session</Button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
/*


*/


/*




*/

/*

*/


/*
  
*/