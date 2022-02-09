import React from "react";
import {Form, FormGroup, Label, Input, Button, Alert} from "reactstrap"
import Header from "../Header/Header";

export default class CadastrarFuncionario extends Comment{
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