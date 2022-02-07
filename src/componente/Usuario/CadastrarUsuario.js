import React, {Component} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap"
import Header from "../Header/Header";


export default class CadastrarUsuario extends Component {
    render() {
        return(
            <div>
                <Header title = "Cadastrar Usuário"/>
              <hr/>
                <Form>
                        <FormGroup>
                            <Label for = "email"> Email </Label>
                            <Input type= "text" id= "email" placeholder="Informe seu email: "/>
                        </FormGroup>
                    <FormGroup>
                        <Label for = "password"> Senha </Label>
                        <Input type= "password" id= "password" placeholder="Informe sua senha: "/>
                    </FormGroup>
                    <Button color="primary"> Enviar </Button>
                 </Form>  
            </div>
      );
    }
}