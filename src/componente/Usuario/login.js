import React, {Component} from 'react';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import Header from '../Header/header';



export default class Login extends Component {

    render() {
        return(
            <div>
            <Header title='AjudaZupper'/>
            <Form>
                <FormGroup>
                    <Input type='text' id='email' placeholder='Email'/>
                </FormGroup>
                <FormGroup>
                    <Input type='password' id='password' placeholder='Senha'/>
                </FormGroup>
                <Button color='primary'>Entrar</Button>
            </Form>
        </div>
        )
    }
} 