import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button, Alert} from "reactstrap"
import Header from "../Header/Header";

export default class CadastrarFuncionario extends Componentfe{
    constructor(props) {
        super(props)
        this.state = {
            message : this.props.state ? this.props.state.message: '',
        };
    }

    signIn = () => {
        const url = "http://localhost:8080/funcionario";
        const data = {
            nomeDeFuncionario: this.nomeDeFuncionario,
            email: this.email,
            nivelZupper: this.nivelZupper,
            dataDeContratacao: this.dataDeContratacao
        };
        let token = localStorage.getItem("token");
        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-type": "application/json",
                Authorization: token,
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
            <Header title = "Cadastrar Funcionario"/>
            <hr/>
             {
                  this.state.message !== ''? (
                      <Alert color='success' className='text-center'>{this.state.message}</Alert>
                  ) : ''
              }
              <Form>
                      <FormGroup>
                          <Label for = "nomeDeFuncionario"> Nome De Funcionario </Label>
                          <Input type= "text" id= "nomeDeFuncionario" onChange={e => this.nomeDeFuncionario = e.target.value}placeholder="Informe o nome do funcionario: "/>
                      </FormGroup>
                  <FormGroup>
                      <Label for = "email"> Email </Label>
                      <Input type = "text" id= "email" onChange={e => this.email = e.target.value} placeholder="Informe o Email do funcionario: "/>
                  </FormGroup>
                  <FormGroup>
                      <Label for = "nivelZupper"> Nível Zupper </Label>
                      <Input type = "text" id = "nivelZupper" onChange={e => this.email = e.target.value} placeholder="Informe Nível Zupper do funcionario: "/>
                  </FormGroup>
                  <FormGroup>
                      <Label for = "dataDeContratacao"> Data De Contratação </Label>
                      <Input type = "date" id = "dataDeContratacao" onChange={e => this.email = e.target.value} placeholder="Informe Nível Zupper do funcionario: "/>
                  </FormGroup>
                  <Button color="primary" onClick={this.signIn}> Cadastrar </Button>
               </Form>  
          </div>
            );
    }
    
}