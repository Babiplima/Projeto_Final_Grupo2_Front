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
}