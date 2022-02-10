/* eslint-disable no-undef */
import React, { Component } from "react";
import PubSub from "pubsub-js";

import {
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  Row
} from "reactstrap";

class ListFuncionario extends Component {
  delete = (email) => {
    this.props.deleteFuncionario(email);
  };
  onEdit = (funcionario) => {
    PubSub.publish("edit-funcionario", funcionario);
  };

  render() {
    const { funcionarios } = this.props;
    return (
      <Table className="table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th>Nome De Funcionario</th>
            <th>Email</th>
            <th>Nivel Zupper</th>
            <th>Data de contratação</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map((funcionario) => (
            <tr>
              <td>{funcionario.nomeDeFuncionario}</td>
              <td>{funcionario.usuario.email}</td>
              <td>{funcionario.nivelZupper}</td>
              <td>{funcionario.dataDeContratacao}</td>
              <td>
                <Button
                  color="danger"
                  size="sm"
                  onClick={(e) => this.delete(funcionario.usuario.email)}
                >
                  Deletar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

  class FormFuncionario extends Component {
    state = {
      model: {
        nomeDeFuncionario: "",
        email: "",
        nivelZupper: "",
        dataDeContratacao:""
        },
    };
  
    componentWillMount() {
      PubSub.subscribe("edit-funcionario", (topic, funcionario) => {
        this.setState({ model: funcionario });
      });
    }
  
    setValues = (e, field) => {
      const { model } = this.state;
      model[field] = e.target.value;
      this.setState({ model });
    };
  
    create = () => {
      this.setState({ model: {nomeDeFuncionario: "",
        email: "",
        nivelZupper: "",
        dataDeContratacao:""
        } });
      this.props.funcionarioCreate(this.state.model);
    };
  
    render() {
      return (
        <Form>
          <FormGroup>
            <div className="form-row">
              <Label for="email"> Email </Label>
              <Input
                id="email"
                type="text"
                value={this.state.model.email}
                placeholder="Informe o email do zupper"
                onChange={(e) => this.setValues(e, "email")}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-row">
              <Label for="nivelZupper">Nível zupper</Label>
              <Input
                id="nivelZupper"
                type="text"
                value={this.state.model.nivelZupper}
                placeholder="Informe o novo nível:"
                onChange={(e) => this.setValues(e, "nivelZupper")}
              />
            </div>
          </FormGroup>
          <Button color="primary" block onClick={this.create}>
            ATUALIZAR
          </Button>
        </Form>
      );
    }
  }
  
  class DashboardFuncionario extends Component {
    url = "http://localhost:8080/funcionario";
  
    state = {
     funcionarios: [],
      message: {
        text: "",
        alert: "",
      },
    };
  
    componentDidMount() {
      let token = localStorage.getItem("token");
      const requestInfo = {
        method: "GET",
        headers: new Headers({
          "Content-type": "application/json",
          Authorization: token,
        }),
      };
      fetch(this.url, requestInfo)
        .then((response) => response.json())
        .then((funcionarios) => this.setState({ funcionarios }))
        .catch((e) => console.log(e));
    }
  
    save = (funcionario) => {
        let data = {
          nomeDeFuncionario: funcionario.nomeDeFuncionario,
          email: funcionario.email,
          nivelZupper: funcionario.nivelZupper,
          dataDeContratacao: funcionario.dataDeContratacao,
        };
        // Pegar token para atualizar valor
        // const token = localStorage.getItem("token");
        const requestInfo = {
          method: "PUT",
          body: JSON.stringify(data),
          headers: new Headers({
            "Content-type": "application/json",
            // enviar token no cabeçario da requisição
            // Authorization: token,
          }),
        };
        fetch(this.url, requestInfo)
          .then((response) => response.json())
          .then((newFuncionario) => {
            let { funcionarios } = this.state;
            funcionarios.push(newFuncionario);
            this.setState({
              funcionarios,
              message: { text: "Nível atualizada com sucesso. ", alert: "success" },
            });
            this.timerMessage(3000);
          })
          .catch((e) => console.log(e));
      };
  
    timerMessage = (duration) => {
      setTimeout(() => {
        this.setState({ message: { text: "", alert: "" } });
      }, duration);
    };
  
    delete = (email) => {
      const token = localStorage.getItem("token");
      const requestInfo = {
        method: "DELETE",
        headers: new Headers({
          "Content-type": "application/json",
          Authorization: token,
        }),
      };
      fetch(`${this.url}/${email}`, requestInfo)
        .then((rows) => {
          const funcionarios = this.state.funcionarios.filter((funcionario) => funcionario.email !== email);
          this.setState({
            funcionarios,
            message: { text: "funcionario deletado com sucesso. ", alert: "danger" },
          });
          this.timerMessage(3000);
        })
        .catch((e) => console.log(e));
    };
  
    render() {
      return (
        <div>
          {this.state.message.text !== "" ? (
            <Alert color={this.state.message.alert} className="text-center">
              {this.state.message.text}
            </Alert>
          ) : (
            ""
          )}
          <div className="row">
            <div className="col-md-6 my-3">
              <h2 className="font-weight-bold text-center">Atualizar Nível de funcionario</h2>
              <FormFuncionario funcionarioCreate={this.save} />
            </div>
            <div className="col-md-6 my-3">
              <h2 className="font-weight-bold text-center">Lista de funcionarios </h2>
              <ListFuncionario funcionarios={this.state.funcionarios} deleteFuncionario={this.delete} />
            </div>
          </div>
        </div>
      );
    }
  }
  
  export default DashboardFuncionario;