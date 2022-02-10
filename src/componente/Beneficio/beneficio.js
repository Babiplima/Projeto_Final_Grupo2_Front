import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button, Alert} from "reactstrap"
import Header from "../Header/header";

export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
          message: this.props.state ? this.props.state.message :"",
          successmessage: this.props.state ? this.props.state.successmessage :"",

      };
  }
  CadastrarBeneficio= (beneficio) => {
    const url = "http://localhost:8080/beneficio";
    const data = {
      nome: this.nome,
      descricao: this.descricao,
      link: this.link,
      nivelZupper: this.nivelZupper     
    };
      const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization':localStorage.getItem('token')
            }),
        };
        fetch(url, requestInfo)
        .then( response => {
          if(response.ok){
            this.setState({successmessage: "Benefício cadastrado com sucesso"})
            console.log(response)
            return response;
        }
      })
        .catch( e => {
          this.setState({message: e.message});   
        });
      };
    
    render() {
        return(
            <div>
                <Header title = "Cadastro de Benefício"/>
                {

                    this.state.message !== ''? (
                        <Alert color='success' className='text-center'>{this.state.message}</Alert>
                    ) : ''
                }
                <div/>
                {
                    this.state.message !== ''? (
                      <Alert color='danger' className='text-center'>{this.state.message}</Alert>
                  ) : ''
                }
                 <hr/>
                         <Form>
                        <FormGroup>
                            <Label for = "Nome"> Nome </Label>
                            <Input type= "text" id= "nome" onChange={e => this.nome = e.target.value}placeholder="Informe seu nome: "/>
                        </FormGroup>
                    <FormGroup>
                        <Label for = "descricao" >Descrição </Label>
                        <Input type= "descricao" id= "descricao" onChange={e => this.descricao = e.target.value} placeholder="Informe a descrição do benefício: "/>
                    </FormGroup>
                    <FormGroup>
                        <Label for = "link" >Link </Label>
                        <Input type= "link" id= "link" onChange={e => this.link = e.target.value} placeholder="Informe o link do benefício: "/>
                    </FormGroup>
                    <FormGroup>
                        <Label for = "nivelZupper" >nivelZupper </Label>
                        <Input type= "nivelZupper" id= "nivelZupper" onChange={e => this.nivelZupper = e.target.value} placeholder="Informe o seu nível Zupper: "/>
                    </FormGroup>
                    <Button color="primary" block onClick={this.CadastrarBeneficio}> CADASTRAR BENEFÍCIO </Button>
                 </Form>  
            </div>
      );
    }
}