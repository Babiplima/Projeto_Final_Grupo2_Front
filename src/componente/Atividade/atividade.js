import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button, Alert} from "reactstrap"
import Header from "../Header/header";

export default class Atividade extends Component {
  constructor(props) {
    super(props)
    this.state = {
        message : this.props.state ? this.props.state.message: '',
    };
}

signIn = () => {
    const url = "http://localhost:8080/atividadefisica";
    const data = {
        nome: this.nome,
        cidade: this.cidade,
        bairro:this.bairro,
        horario: this.horario,
        data:this.data,
        endereco:this.endereco,
        responsavel:this.responsavel,
        contato:this.contato
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
        console.log("Cadastrado de atividade realizado com sucesso")
        this.setState({message: "O cadastro da atividade foi realizado com sucesso"})
        return response
    }).catch( e => {
        console.log("Usuário inválido")
    }
    );
}

render() {
    return(
        <div>
        <Header title = "Cadastro de Atividade"/>
        <hr/>
         {
              this.state.message !== ''? (
                  <Alert color='success' className='text-center'>{this.state.message}</Alert>
              ) : ''
          }
          <Form>
                  <FormGroup>
                      <Label for = "nome"> Nome Da Atividade </Label>
                      <Input type= "text" id= "nome" onChange={e => this.nome = e.target.value}placeholder="Informe o nome da atividade "/>
                  </FormGroup>
              <FormGroup>
                  <Label for = "cidade"> Cidade </Label>
                  <Input type = "text" id= "cidade" onChange={e => this.cidade = e.target.value} placeholder="Informe a cidade onde esta ocorrendo a atividade: "/>
              </FormGroup>
              <FormGroup>
                  <Label for = "bairro"> Bairro </Label>
                  <Input type = "text" id= "bairro" onChange={e => this.bairro = e.target.value} placeholder="Informe o nome do bairro onde esta ocorrendo a atividade: "/>
              </FormGroup>
              <FormGroup>
                  <Label for = "horario"> Horario </Label>
                  <Input type = "text" id = "horario" onChange={e => this.horario = e.target.value} placeholder="Informe o horário que estará ocorrendo a atividade "/>
              </FormGroup>
              <FormGroup>
                  <Label for = "data"> Data </Label>
                  <Input type = "text" id = "data" onChange={e => this.data = e.target.value} placeholder="Informe a data que ocorrá a atividade "/>
              </FormGroup>
              <FormGroup>
                  <Label for = "endereco"> Endereco </Label>
                  <Input type = "text" id = "endereco" onChange={e => this.endereco = e.target.value} placeholder="Informe o endereço e ou local onde ocorrerá a atividade "/>
              </FormGroup>
              <FormGroup>
                  <Label for = "responsavel"> Responsável </Label>
                  <Input type = "text" id = "responsavel" onChange={e => this.responsavel = e.target.value} placeholder="Informe o nome do responsável presente para realizar a atividade "/>
              </FormGroup>
              <FormGroup>
                  <Label for = "contato"> Contato - Telefone </Label>
                  <Input type = "text" id = "contato" onChange={e => this.contato = e.target.value} placeholder="Informe o telefone do responsável pela a atividade "/>
              </FormGroup>
              <Button color="primary" onClick={this.signIn}> CADASTRAR DE ATIVIDADE </Button>
           </Form>  
      </div>
        );
}

}