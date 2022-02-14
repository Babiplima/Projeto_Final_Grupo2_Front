import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button, Alert} from "reactstrap"
import Header from "../Header/Header";



export default class CadastrarUsuario extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message : this.props.state ? this.props.state.message: '',
        };
    }

    signIn = () => {
        const url = "http://localhost:8080/usuario";
        const data = {
           email: this.email,
           senha: this.senha
        };
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        };
        fetch(url, requestInfo)
        .then( response => {
            console.log("Cadastrado com sucesso")
            this.setState({message: "O cadastro foi efetuado com sucesso"})
            return response
        }).catch( e => {
            console.log("Usuário inválido")
        }
        );
    }
    render() {
        return(
            <div>
                <Header title = "Cadastrar Usuário"/>
              <hr/>
               {
                    this.state.message !== ''? (
                        <Alert color='success' className='text-center'>{this.state.message}</Alert>
                    ) : ''
                }
                <Form>
                        <FormGroup>
                            <Label for = "email"> Email </Label>
                            <Input type= "text" id= "email" onChange={e => this.email = e.target.value}placeholder="Informe seu email: "/>
                        </FormGroup>
                    <FormGroup>
                        <Label for = "password"> Senha </Label>
                        <Input type= "password" id= "password" onChange={e => this.senha = e.target.value} placeholder="Informe sua senha: "/>
                    </FormGroup>
                    <Button color="primary" onClick={this.signIn}> Enviar </Button>
                 </Form>  
            </div>
      );
    }
}