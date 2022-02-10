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

class ListUsuario extends Component {
  delete = (email) => {
    this.props.deleteUsuario(email);
  };
  onEdit = (usuario) => {
    PubSub.publish("edit-usuario", usuario);
  };

  render() {
    const { usuarios } = this.props;
    return (
      <Table className="table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr>
              <td>{usuario.email}</td>
              <td>
                <Button
                  color="info"
                  size="sm"
                  onClick={(e) => this.onEdit(usuario)}
                >
                  Editar
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  onClick={(e) => this.delete(usuario.email)}
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

class FormUsuario extends Component {
  state = {
    model: {
      senha:"",  
      email: ""
    },
  };

  componentWillMount() {
    PubSub.subscribe("edit-usuario", (topic, usuario) => {
      this.setState({ model: usuario });
    });
  }

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
  };

  create = () => {
    this.setState({ model: {senha: "", email: ""} });
    this.props.usuarioCreate(this.state.model);
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
              placeholder="Informe o email"
              onChange={(e) => this.setValues(e, "email")}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="form-row">
            <Label for="senha"> Nova Senha </Label>
            <Input
              id="nome"
              type="password"
              value={this.state.model.nome}
              placeholder="Informe a nova senha"
              onChange={(e) => this.setValues(e, "senha")}
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

class DashboardUsuario extends Component {
  url = "http://localhost:8080/usuario";

  state = {
    usuarios: [],
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
      .then((usuarios) => this.setState({ usuarios }))
      .catch((e) => console.log(e));
  }

  save = (usuario) => {
    let data = {
      senha: usuario.senha,
      email: usuario.email,
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
      .then((newUsuario) => {
        let { usuarios } = this.state;
        usuarios.push(newUsuario);
        this.setState({
          usuarios,
          message: { text: "Senha atualizada com sucesso. ", alert: "success" },
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
        const usuarios = this.state.usuarios.filter((usuario) => usuario.email !== email);
        this.setState({
          usuarios,
          message: { text: "Usuario deletado com sucesso. ", alert: "danger" },
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
            <h2 className="font-weight-bold text-center">Atualizar senha de usuario</h2>
            <FormUsuario usuarioCreate={this.save} />
          </div>
          <div className="col-md-6 my-3">
            <h2 className="font-weight-bold text-center">Lista de Usuarios </h2>
            <ListUsuario usuarios={this.state.usuarios} deleteUsuario={this.delete} />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardUsuario;