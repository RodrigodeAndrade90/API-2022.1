import { Component } from "react";
import axios from "axios";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
import { cnpj, cpf } from "cpf-cnpj-validator";

// LOCAL CSS
import './cursos.css'

// COMPONENTS
import ButtonMat from '../../components/button/buttonMat'
import Check from "../../components/input/check";
import CheckChecked from "../../components/input/checkChecked";
import General from "../../components/general";
import Collapse from "../../components/collapse";
import Css from "../../assets/style/style";
import React from "react";
import ProgressBar from "../../components/progressBar/progressBar";

class Cursos extends Component {
    state = {
        colaborador: [],
        historico: [],
        cargo: [],
        departamento: [],
        info_academica: [],
        head_colaborador: [],
        car_id: String,
        dep_id: String,
        id: getCookie("id")
    };
    handleSubmit: any;

    componentDidMount() {
        let url = window.location.href.split("/")
        if (url[3] === "PerfilColaborador") {
            this.state.id = url[4]
        }

        axios.get(`http://localhost:5000/infocolab/getInfoById/${this.state.id}`)
            .then((res) => {
                console.log(res.data);
                const colaborador = res.data.user;
                const head_colaborador = res.data.head_user;
                const historico = res.data.historico
                let dep_id = res.data.user[0].departamento_dep_id
                let car_id = res.data.user[0].cargo_car_id

                axios.get(`http://localhost:5000/cargos/userCargo/${car_id}`).then((res) => {
                    console.log(res.data);
                    const cargo = res.data;
                    this.setState({ cargo });
                })

                axios.get(`http://localhost:5000/departamentos/userDep/${dep_id}`).then((res) => {
                    console.log(res.data);
                    const departamento = res.data;
                    this.setState({ departamento });
                }
                )

                console.log(dep_id);

                this.setState({ historico })
                this.setState({ colaborador });
                this.setState({ head_colaborador });
            }
            )

        axios.get(`http://localhost:5000/infoacademica/getInfoAcademica/${this.state.id}`).then((res) => {
            console.log(res.data);
            const info_academica = res.data;
            this.setState({ info_academica });
        })
    }

    render() {

        return (
            <>
                <General />
                <Css ref="./perfil.css" />
                <div className="conteudo">
                    <div className="row">

                        <div className="col col s12 m12 l7">
                            <div className="teste3">
                                <ProgressBar per_params={"0%"} params={0} />
                            </div>
                        </div>

                        <div className="col s12 m12 l5">
                            <div className="teste3">
                                <p><label>Total de aulas: </label></p>
                                <p></p>
                            </div>
                        </div>

                        <div className="col col s12">
                            <div className="teste3">
                                <div className="video center-align">
                                    <video width="90%" controls>
                                        <source ref={"https://www.youtube.com/watch?v=CyJ4mKuv6E0"} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        </div>

                        <div className="col col s12 teste3" >
                            <h4>Conteúdo dos cursos</h4>
                            <div className="col col s12">

                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title="JavaScript" desc1={<p><label>Aula 1:</label></p>}
                                        desc2={<p><label>Aula 2:</label></p>}
                                        desc3={<p><label>Aula 3:</label></p>}
                                        desc4={<p><label>Aula 4:</label></p>}
                                        desc5={<p><label>Aula 5:</label></p>}
                                        desc6={null} />
                                </ul>

                            </div>
                            <div className="col col s12">

                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title="React" desc1={<p><label>Aula 1:</label></p>}
                                        desc2={<p><label>Aula 2:</label></p>}
                                        desc3={<p><label>Aula 3:</label></p>}
                                        desc4={<p><label>Aula 4:</label></p>}
                                        desc5={<p><label>Aula 5:</label></p>}
                                        desc6={null} />
                                </ul>

                            </div>
                            <div className="col col s12">

                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title="LGPD" desc1={<p><label>Aula 1:</label></p>}
                                        desc2={<p><label>Aula 2:</label></p>}
                                        desc3={<p><label>Aula 3:</label></p>}
                                        desc4={<p><label>Aula 4:</label></p>}
                                        desc5={<p><label>Aula 5:</label></p>}
                                        desc6={null} />
                                </ul>

                            </div>
                            <div className="col col s12">

                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title="GitHub" desc1={<p><label>Aula 1:</label></p>}
                                        desc2={<p><label>Aula 2:</label></p>}
                                        desc3={<p><label>Aula 3:</label></p>}
                                        desc4={<p><label>Aula 4:</label></p>}
                                        desc5={<p><label>Aula 5:</label></p>}
                                        desc6={null} />
                                </ul>

                            </div>
                            <div className="col col s12">

                                <ul className="collapsible popout" data-collapsible="accordion">
                                    <Collapse title="Typescript" desc1={<p><label>Aula 1:</label></p>}
                                        desc2={<p><label>Aula 2:</label></p>}
                                        desc3={<p><label>Aula 3:</label></p>}
                                        desc4={<p><label>Aula 4:</label></p>}
                                        desc5={<p><label>Aula 5:</label></p>}
                                        desc6={null} />
                                </ul>

                            </div>
                        </div>

                    </div>


                </div>

            </>
        )
    }
}

export default Cursos;