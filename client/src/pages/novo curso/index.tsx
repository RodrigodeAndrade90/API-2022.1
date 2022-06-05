import React, { Component } from "react";
import axios from "axios";
import M from "materialize-css";

// LOCAL CSS
import '../novo perfil/novoperfil.css'

// COMPONENTS
import Input from "../../components/input/input";
import InputValue from "../../components/input/inputValue";
import General from "../../components/general";
import DisableOption from "../../components/dropdown/disableOption";
import Option from "../../components/dropdown";
import Css from "../../assets/style/style";
import { FormErrors } from "../../utils/formErrors/formErrors";

class NovoCurso extends Component {
    state = {
        cargos: [],
        curso_nome: "",
        car_id: ""
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/cargos/`)
            .then((res) => {
                console.log(res.data);

                const cargos = res.data

                this.setState({ cargos })
            })
    }
    handleChange = event => {
        this.setState({
            ...this.state,
            [event.target.name]: event.target.value
        });
        console.log(this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            curso_nome: this.state.curso_nome,
            car_id: this.state.car_id
        }

        axios.post("http://localhost:5000/curso/createNewCurso", data).then((res) => {
            M.toast({ html: res.data, classes: "green darken-4 rounded" })

            this.setState({
                curso_nome: "",
                car_id: "",
            })
        })


    }
    render() {
        return (
            <>
                <General />

                <Css ref="./novoperfil.css" />

                <div className="conteudo">
                    <h3>Novo Curso</h3>
                    <div className="form">
                        <div className="teste1 row">
                            <form action="">
                                <InputValue value={this.state.curso_nome} lenght={100} div="input-field" type="text" class="validate" stateName="curso_nome" id="curso" fname={this.handleChange} name="Nome do curso" />
                                <select onChange={this.handleChange} name="car_id" className="browser-default" id="car_id" >
                                    <option value="" disabled selected>Cargo que o curso será destinado</option>
                                    {this.state.cargos.map(car => <option key={car.car_id} value={car.car_id}>{car.car_descricao}</option>)}
                                </select>
                            </form>
                            <div className="botao-novoperfil">
                                <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Criar!</button>
                                {/*<ButtonMat fname={this.handleSubmit} class="waves-effect waves-light btn" name="Criar!" iClass="{}" />*/}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NovoCurso;