import React, { Component } from 'react'
import Navbar from '../components/navbar'
import UserForm from '../components/user-form'
import { Grid, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../public/css/signup.css'

class Signup extends Component {
  render(){
    return(
      <div>
        {/* Status Bar */}
        <Navbar text='Crea Gratis una Cuenta de Pago Directo' />
        
        {/* Body */}
        <Grid centered padded>
          <Grid.Column mobile={15} tablet={8} computer={6}>

            <Segment basic textAlign='center' className='introText'>
              <h4>Empecemos</h4>
              <p>La manera más inteligente de llevar tu negocio</p>
            </Segment>

            {/* SignUp Form */}
            <UserForm />

          </Grid.Column>
        </Grid>

      </div>
    )
  }
}

export default Signup