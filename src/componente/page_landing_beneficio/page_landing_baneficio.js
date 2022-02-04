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
        
}
}