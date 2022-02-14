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

class ListAtividadeFisica extends Component {
  delete = (id) => {
    this.props.deleteAtividadeFisica(id);
  };
  onEdit = (atividadeFisica) => {
    PubSub.publish("edit-atividadeFisica", atividadeFisica);
  };

  render() {
    const { atividades } = this.props;
    return (
      <Table className="table-bordered text-center">
        <thead className="thead-dark">
          <tr>
            <th>Nome De Atividade</th>
            <th>Cidade</th>
            <th>Bairro</th>
            <th>Horario</th>
            <th>Data</th>
            <th>Endereco</th>
            <th>Responsavel</th>
            <th>Contato</th>
          </tr>
        </thead>
        <tbody>
          {atividades.map((atividadeFisica) => (
            <tr key={atividadeFisica.id}>
              <td>{atividadeFisica.nome}</td>
              <td>{atividadeFisica.cidade}</td>
              <td>{atividadeFisica.bairro}</td>
              <td>{atividadeFisica.horario}</td>
              <td>{atividadeFisica.data}</td>
              <td>{atividadeFisica.endereco}</td>
              <td>{atividadeFisica.responsavel}</td>
              <td>{atividadeFisica.contato}</td>
              <td>
                <Button
                  color="danger"
                  size="sm"
                  onClick={(e) => this.delete(atividadeFisica.id)}
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

  class FormAtividadeFisica extends Component {
    state = {
      model: {
        nome: "",
        cidade: "",
        bairro: "",
        horario:"",
        data:"",
        endereco:"",
        responsavel:"",
        contato:""
        },
    };
  
    componentWillMount() {
      PubSub.subscribe("edit-atividadeFisica", (topic, atividadeFisica) => {
        this.setState({ model: atividadeFisica });
      });
    }
  
    setValues = (e, field) => {
      const { model } = this.state;
      model[field] = e.target.value;
      this.setState({ model });
    };
  
    create = () => {
      this.setState({ model: {
        nome: "",
        cidade: "",
        bairro: "",
        horario:"",
        data:"",
        endereco:"",
        responsavel:"",
        contato:""
        } });
      this.props.atividadeCreate(this.state.model);
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
                placeholder="Informe o nome da atividade"
                onChange={(e) => this.setValues(e, "nome")}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-row">
              <Label for="Cidade">Cidade</Label>
              <Input
                id="cidade"
                type="text"
                value={this.state.model.cidade}
                placeholder="Informe a cidade onde ocorre a atividade:"
                onChange={(e) => this.setValues(e, "cidade")}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-row">
              <Label for="bairro"> Bairro </Label>
              <Input
                id="bairro"
                type="text"
                value={this.state.model.bairro}
                placeholder="Informe o nome do bairro onde ocorrerá a atividade"
                onChange={(e) => this.setValues(e, "bairro")}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-row">
              <Label for="horario"> Horario </Label>
              <Input
                id="horario"
                type="text"
                value={this.state.model.horario}
                placeholder="Informe o horário onde ocorrerá a atividade"
                onChange={(e) => this.setValues(e, "horario")}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-row">
              <Label for="data"> Data </Label>
              <Input
                id="data"
                type="text"
                value={this.state.model.data}
                placeholder="Informe a data que ocorrerá a atividade"
                onChange={(e) => this.setValues(e, "data")}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-row">
              <Label for="endereco"> Endereco </Label>
              <Input
                id="endereco"
                type="text"
                value={this.state.model.endereco}
                placeholder="Informe onde ocorrerá a atividade"
                onChange={(e) => this.setValues(e, "endereco")}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-row">
              <Label for="responsavel"> Responsavel </Label>
              <Input
                id="responsavel"
                type="text"
                value={this.state.model.responsavel}
                placeholder="Informe o nome do responsável da atividade"
                onChange={(e) => this.setValues(e, "responsavel")}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <div className="form-row">
              <Label for="contato"> Contato </Label>
              <Input
                id="contato"
                type="text"
                value={this.state.model.contato}
                placeholder="Informe o nome do contato (telefone) responsável pela atividade"
                onChange={(e) => this.setValues(e, "contato")}
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
  
  class DashboardAtividadeFisica extends Component {
    url = "http://localhost:8080/atividade";
  
    state = {
     atividades: [],
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
        .then((atividades) => this.setState({ atividades }))
        .catch((e) => console.log(e));
    }
  
    save = (atividadeFisica) => {
        let data = {
          nome: atividadeFisica.nome,
          cidade: atividadeFisica.cidade,
          bairro:atividadeFisica.bairro,
          horario:atividadeFisica.horario,
          data:atividadeFisica.data,
          endereco:atividadeFisica.endereco,
          responsavel:atividadeFisica.responsavel,
          contato:atividadeFisica.contato        
        };
        // Pegar o token para atualizar o valor
        // const token = localStorage.getItem("token");
        const requestInfo = {
          method: "PUT",
          body: JSON.stringify(data),
          headers: new Headers({
            "Content-type": "application/json",
           // "const token": localStorage.getItem("token")
            // enviar token no cabeçario da requisição
            // Authorization: token,
          }),
        };
        fetch(this.url, requestInfo)
          .then((response) => response.json())
          .then((newAtividadeFisica) => {
            let { atividades } = this.state;
            atividades.push(newAtividadeFisica);
            this.setState({
              atividades,
              message: { text: "Atividade atualizada com sucesso. ", alert: "success" },
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
          const atividades = this.state.atividades.filter((atividade) => atividade.id !== id);
          this.setState({
            atividades,
            message: { text: "Atividade Física excluída com sucesso. ", alert: "danger" },
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
              <h2 className="font-weight-bold text-center">Atualizar Atividade</h2>
              <FormAtividadeFisica atividadeFisicaCreate={this.save} />
            </div>
            <div className="col-md-6 my-3">
              <h2 className="font-weight-bold text-center">Lista de atividades </h2>
              <ListAtividadeFisica atividades={this.state.atividades} deleteAtividadeFisica={this.delete} />
            </div>
          </div>
        </div>
      );
    }
  }
  export default DashboardAtividadeFisica;
  