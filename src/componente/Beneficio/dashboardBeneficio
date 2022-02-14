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

class ListBeneficio extends Component {
  delete = (id) => {
    this.props.deleteBeneficio(id);
  };
  onEdit = (beneficio) => {
    PubSub.publish("edit-beneficio", beneficio);
  };

  render() {
    const { beneficios } = this.props;
    return (
      <Table className="table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th>id</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {beneficios.map((beneficio) => (
            <tr>
              <td>{beneficio.id}</td>
              <td>
                <Button
                  color="info"
                  size="sm"
                  onClick={(e) => this.onEdit(beneficio)}
                >
                  EDITAR
                </Button>
                <Button
                  color="danger"
                  size="sm"
                  onClick={(e) => this.delete(beneficio.id)}
                >
                  DELETAR
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

class FormBeneficio extends Component {
  state = {
    model: {
      nome:"",  
      descricao: "",
      link:"",
      nivelZupper:""    
    },
  };

  componentWillMount() {
    PubSub.subscribe("edit-beneficio", (topic, beneficio) => {
      this.setState({ model: beneficio });
    });
  }

  setValues = (e, field) => {
    const { model } = this.state;
    model[field] = e.target.value;
    this.setState({ model });
  };

  create = () => {
    this.setState({ model: {nome: "", descricao: "",link:"",nivelZupper:""} });
    this.props.beneficioCreate(this.state.model);
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <div className="form-row">
            <Label for="nome"> Nome </Label>
            <Input
              id="nome"
              type="text"
              value={this.state.model.nome}
              placeholder="Informe o seu nome"
              onChange={(e) => this.setValues(e, "nome")}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="form-row">
            <Label for="descricao"> Descrição </Label>
            <Input
              id="descricao"
              type="text"
              value={this.state.model.descricao}
              placeholder="Informe a descrição"
              onChange={(e) => this.setValues(e, "descricao")}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="form-row">
            <Label for="link"> Link </Label>
            <Input
              id="link"
              type="text"
              value={this.state.model.link}
              placeholder="Informe o link"
              onChange={(e) => this.setValues(e, "link")}
            />
          </div>
        </FormGroup>
        <FormGroup>
          <div className="form-row">
            <Label for="nivelZupper"> Nivel Zupper </Label>
            <Input
              id="nivelZupper"
              type="text"
              value={this.state.model.nivelZupper}
              placeholder="Informe o seu nível de Zupper"
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

class DashboardBeneficio extends Component {
  url = "http://localhost:8080/beneficio";

  state = {
    beneficios: [],
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
      .then((beneficios) => this.setState({ beneficios }))
      .catch((e) => console.log(e));
  }

  save = (beneficio) => {
    let data = {
      nome: beneficio.nome,
      descricao:beneficio.descricao,
      link:beneficio.link,
      nivelZupper:beneficio.nivelZupper
    };
    
    const requestInfo = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-type": "application/json",
        
      }),
    };
    fetch(this.url, requestInfo)
      .then((response) => response.json())
      .then((newBeneficio) => {
        let { beneficios } = this.state;
        beneficios.push(newBeneficio);
        this.setState({
          beneficios,
          message: { text: "Beneficio atualizado com sucesso. ", alert: "success" },
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

  delete = (id) => {
    const token = localStorage.getItem("token");
    const requestInfo = {
      method: "DELETE",
      headers: new Headers({
        "Content-type": "application/json",
        Authorization: token,
      }),
    };
    fetch(`${this.url}/${id}`, requestInfo)
      .then((rows) => {
        const beneficios = this.state.beneficios.filter((beneficio) => beneficio.id !== id);
        this.setState({
          beneficios,
          message: { text: "Benefício deletado com sucesso. ", alert: "danger" },
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
            <h2 className="font-weight-bold text-center">ATUALIZAR BENEFÍCIO </h2>
            <FormBeneficio beneficioCreate={this.save} />
          </div>
          <div className="col-md-6 my-3">
            <h2 className="font-weight-bold text-center">Lista de Benefícios </h2>
            <ListBeneficio beneficios={this.state.beneficios} deleteBeneficio={this.delete} />
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardBeneficio;