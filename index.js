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
        const response = fetch("http://localhost:9001/session/persist-message", {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors',
            body: 
              this.state.message
            
    })
  }

    readMessages(){
    console.log('readMessages')
          fetch("http://localhost:9001/session/read-message", {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'GET',
            mode: 'no-cors'
    }).then(function(response) {
      return response.json();
    }).then(data => {
      debugger     
    });
  }

  deleteSession(){
    console.log('deleteSession')
              const response = fetch("http://localhost:9001/session/destroy", {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: 'POST',
            mode: 'no-cors'
    })

         console.log('destroy result',response)
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