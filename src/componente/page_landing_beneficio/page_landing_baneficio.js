import react,{Component}from"react";
import { Form, FormGroup, Label, Input, Button,Alert } from "reactstrap";
import Header from "../header";

export default class page_landing_beneficio extends Component{
    constructor(props){
        super(props);
        this.state = {
            message: this.props.state ? this.props.state.message :"",
        };
    }

    cadastrarBeneficio= () => {
        const url = "http://localhost:8080/beneficio";
        const data = {
          nome: this.nome,
          descricao: this.descricao,
          link: this.link,
          NivelZupper: this.NivelZupper,
        };
        const requestInfo = {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
              "Content-Type": "application/json",
            }),
          };
          fetch(url, requestInfo)
            .then((response) => {
              if (response.ok) {
                return response;
              }
            })
            .catch( e => {
              console.log("Este benefício não existe")
          });
        };
      
        render() {
          return (

            <div>
            <Header title="Cadastro de Beneficio" />
            <hr></hr>
            <Form>
              <FormGroup>
                <Label for="Nome">Nome</Label>
                <Input
                  type="text"
                  id="nome"
                  placeholder="Informe a seu nome:"
                  onChange={(e) => (this.nome = e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="descricao">descricao</Label>
                <Input type="text" id="descricao" placeholder="Descrição:" onChange={(e) => (this.descricao = e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="link">link</Label>
                <Input type="text" id="link" placeholder="Link:" onChange={(e) => (this.link = e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="NivelZupper">NivelZupper</Label>
                <Input type="text" id="NivelZupper" placeholder="NivelZupper:" onChange={(e) => (this.NivelZupper = e.target.value)} />
              </FormGroup>
              <Button color="primary" block onClick={this.cadastrarBeneficio}>
                Cadastrar
              </Button>
            </Form>
          </div>
        
          );
}
}