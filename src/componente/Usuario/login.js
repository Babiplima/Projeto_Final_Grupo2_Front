import React, {Component} from 'react';
import {Form, FormGroup, Input, Button, Alert} from 'reactstrap';
import Header from '../Header/Header';



export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message : this.props.state?this.props.state.message: '',
        };
    }   

    signIn = () => {
        const url = "http://localhost:8080/login";
        const data = {
            email: this.email,
            senha: this.password,
        };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };
        fetch(url, requestInfo)
        .then(response => {
            if(response.ok){
                console.log("O login foi realizado com sucesso.")
                return response.headers.get("Authorization")
            }
            throw new Error("Email ou senha inválido")
        }).then(token => {
            localStorage.setItem('token', token);
            this.props.history.push("/dashboardUsuario");
        }).catch( e => {
            this.setState({message: e.message})
            console.log(this.email, this.password)
        });
    }

    render() {
        return(
            <div>
            <Header title='AjudaZupper'/>
            {
                    this.state.message !== ''? (
                        <Alert color='danger' className='text-center'>{this.state.message}</Alert>
                    ) : ''
                }
            <Form>
                <FormGroup>
                    <Input type='text' id='email' placeholder='Email' onChange={e => this.email = e.target.value}/>
                </FormGroup>
                <FormGroup>
                    <Input type='password' id='password' placeholder='Senha' onChange={e => this.password = e.target.value}/>
                </FormGroup>
                <Button color='primary' onClick={this.signIn}>Entrar</Button>
            </Form>
        </div>
        )
    }
} 