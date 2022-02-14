import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button, Alert} from "reactstrap"
import Header from "../Header/header";

export default class Beneficio extends Component {
  constructor(props) {
    super(props)
    this.state = {
        message : this.props.state ? this.props.state.message: '',
    };
}

CadastrarBeneficio = () => {
    const url = "http://localhost:8080/beneficio";
    const data = {
        nome: this.nome,
        descricao: this.descricao,
        link:this.link,
        nivelZupper: this.nivelZupper
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
        console.log("Cadastrado de benefício realizado com sucesso")
        this.setState({message: "O cadastro do benefício foi realizado com sucesso"})
        return response
    }).catch( e => {
        console.log("Usuário inválido")
    }
    );
}

render() {
    return(
        <div>
        <Header title = "Cadastro de Benefício"/>
        <hr/>
         {
              this.state.message !== ''? (
                  <Alert color='success' className='text-center'>{this.state.message}</Alert>
              ) : ''
          }
          <Form>
                  <FormGroup>
                      <Label for = "nome"> Nome Do Benefício </Label>
                      <Input type= "text" id= "nome" onChange={e => this.nome = e.target.value}placeholder="Informe o nome do benefício "/>
                  </FormGroup>
              <FormGroup>
                  <Label for = "descricao"> Descrição </Label>
                  <Input type = "text" id= "descricao" onChange={e => this.descricao = e.target.value} placeholder="Informe a descrição do benefício: "/>
              </FormGroup>
              <FormGroup>
                  <Label for = "link"> Link </Label>
                  <Input type = "text" id= "link" onChange={e => this.link = e.target.value} placeholder="Informe o link para o acesso do benefício: "/>
              </FormGroup>
              <FormGroup>
                  <Label for = "nivelZupper"> Nível Zupper </Label>
                  <Input type = "text" id = "nivelZupper" onChange={e => this.nivelZupper = e.target.value} placeholder="Informe o Nível Zupper do funcionario: "/>
              </FormGroup>
              <Button color="primary" onClick={this.CadastrarBeneficio}> CADASTRAR BENEFÍCIO </Button>
           </Form>  
      </div>
        );
}

}