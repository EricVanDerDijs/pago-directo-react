import React, { Component } from 'react'
import { Dropdown, Segment, Button, Input} from 'semantic-ui-react'


let countryOptions = [
  { key: 'ar', value: 'AR', flag: 'ar', text: 'Argentina' },
  { key: 'bo', value: 'BO', flag: 'bo', text: 'Bolivia' },
  { key: 'br', value: 'BR', flag: 'br', text: 'Brasil' },
  { key: 'co', value: 'CO', flag: 'co', text: 'Colombia' },
  { key: 'cl', value: 'CL', flag: 'cl', text: 'Chile' },
  { key: 'pe', value: 'PE', flag: 'pe', text: 'Peru' },
  { key: 've', value: 'VE', flag: 've', text: 'Venezuela' },
]

class UserForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){

    event.preventDefault();
   for (let prop in this.state){
     console.log(prop + " : " + this.state[prop]);
   }
    fetch('https://cors-anywhere.herokuapp.com/http://pagodirectotest.herokuapp.com/v1/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state),
    })
    .then(res => res.json())
    .then(res => {
      console.log('response: ' + JSON.stringify(res))
    })
    .catch(err => console.log(err))
    for (let prop in this.state) {
      this.setState({
        [prop]: ''
      })
    }
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <Segment.Group>
          <Segment>
            <Input transparent 
            type='email' placeholder='Dirección de Correo electronico'
            name='email' value={this.state.email}
            onChange={this.handleChange} />
          </Segment>
          <Segment>
            <Input transparent 
            type='text' placeholder='Su nombre de usuario'
            name='username' value={this.state.username}
            onChange={this.handleChange} />
          </Segment>
          <Segment>
            <Input transparent type='password' 
            placeholder="Contraseña (mínimo 8 caracteres)" 
            name='password' value={this.state.password}
            onChange={this.handleChange} />
          </Segment>
        </Segment.Group>

        <Dropdown placeholder='Selecione su país' fluid floating selection options={countryOptions} icon={null} />

        <Button fluid> Crear Cuenta </Button>
        <Segment basic textAlign='center'>
          La manera más inteligente La manera más inteligente La manera más inteligente
        </Segment>
      </form>
    )
  }
}
export default UserForm