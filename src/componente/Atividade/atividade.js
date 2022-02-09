import React,{Component}from"react";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import Header from "../Header/Header";

export default class index extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: this.props.state ? this.props.state.message :"",
            successmessage: this.props.state ? this.props.state.successmessage :"",

        };
    }

    cadastrarAtividade= (atividade) => {
        const url = "http://localhost:8080/atividadefisica";
        const data = {
          nome: this.nome,
          cidade: this.cidade,
          bairro: this.bairro,
          horario: this.horario,
          data: this.data,
          endereco: this.endereco,
          responsavel: this.responsavel,
          contato: this.contato,
        };
        const requestInfo = {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
              "Content-Type": "application/json",
              "Authorization": localStorage.getItem('token')
            }),
          };
          fetch(url, requestInfo)
            .then((response) => {
              if (response.ok) {
                this.setState({successmessage:"Atividade cadastrada com sucesso"})
                console.log(response)
                return response;
              }
            })
            .catch( e => {
              this.setState({message: e.message});   
            });
          };
      
        render() {
          return (

            <div>
            <Header title="Cadastro de Atividade" />
          {
            this.state.message !== ''? (
              <Alert color='danger' className='text-center'>{this.state.message}</Alert>
            ) : ''
          }
        <div/>
         {
            this.state.successmessage !== ''? (
              <Alert color='success' className='text-center'>{this.state.successmessage}</Alert>
            ) : ''
         }
            <hr/>
            <Form>
              <FormGroup>
                <Label for="Nome">Nome</Label>
                <Input type="text" id="nome" placeholder="Informe o seu nome:" onChange={(e) => (this.nome = e.target.value)}/>
              </FormGroup>
              <FormGroup>
                <Label for="Cidade">Cidade</Label>
                <Input type="text" id="cidade" placeholder="Informe a Cidade:" onChange={(e) => (this.cidade= e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="Bairro">Bairro</Label>
                <Input type="text" id="bairro" placeholder="Informe seu Bairro:" onChange={(e) => (this.bairro = e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="Horario">Horario</Label>
                <Input type="text" id="Horario" placeholder="Horario:" onChange={(e) => (this.horario = e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="Data">Data</Label>
                <Input type="text" id="Data" placeholder="Data:" onChange={(e) => (this.data = e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="Endereço">Endereço</Label>
                <Input type="text" id="Endereço" placeholder="Endereço:" onChange={(e) => (this.endereco = e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="Responsável">Responsável</Label>
                <Input type="text" id="Responsável" placeholder="Responsável:" onChange={(e) => (this.responsavel = e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="Contato">Contato</Label>
                <Input type="text" id="Contato" placeholder="Contato:" onChange={(e) => (this.contato = e.target.value)} />
              </FormGroup>
              <Button color="primary" block onClick={this.cadastrarAtividade}>
                Cadastrar
              </Button>
            </Form>
          </div>
        
          );
}
}