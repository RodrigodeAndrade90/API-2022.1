import { Component } from "react";
import axios from "axios";
import { getCookie } from "../../utils/cookieUtil/cookieUtil";
// LOCAL CSS
import './perfil.css'

// COMPONENTS
import ButtonMat from '../../components/button/buttonMat'
import Check from "../../components/input/check";
import CheckChecked from "../../components/input/checkChecked";
import General from "../../components/general";
import Collapse from "../../components/collapse";
import Css from "../../assets/style/style";
import React from "react";

class PerfilColab extends Component {
    
    state = {
        colaborador: [],
        head_colaborador: [],
        id: getCookie("id")
    };

    componentDidMount() {
        let url = window.location.href.split("/")
        if (url[3] == "PerfilColaborador"){ 
            this.state.id = url[4]
        }
        axios.get(`http://localhost:5000/infocolab/allUserInfo/${this.state.id}`)
            .then((res) => {
                console.log(res.data);

                const colaborador = res.data.user;

                const head_colaborador = res.data.head_user;
                this.setState({ colaborador });
                this.setState({ head_colaborador });
            }
        )
    }

    render() {

        return (
            <>
                <General />
                <Css ref="./perfil.css" />
                <div className="conteudo">
                    <div className="row">
                        <div className="col s12 m12 l7">
                            <div className="teste1">
                                <div className="row" id="info">
                                    <div className="col s12 m12 l5 center-align">
                                        <div className="foto center-align">
                                            <i className="fa-regular fa-user fa-7x"></i>
                                        </div>
                                    </div>
                                    <div className="col s12 m12 l7 center-align">
                                        {this.state.colaborador.map(info => <h5 key={info.con_id} className="name">{info.con_nome}</h5>)}
                                        <p>
                                            {this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>CPF:</label> {info.user_cpf}</p>)}
                                            <p><label>Data de admissão:</label> xx/yy/zzzz</p>
                                            <p><label>Data de desligamento:</label> --/--/----</p>
                                            {this.state.colaborador.map(info => <p key={info.con_id}><label>Tipo de Contratação:</label> {info.cont_descricao}</p>)}
                                            {this.state.colaborador.map(info => <p key={info.con_id}><label>E-mail:</label> {info.con_email}</p>)}
                                            {this.state.colaborador.map(info => <p key={info.con_id}><label>Tel:</label> ({info.con_ddd}) {info.con_telefone}</p>)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m12 l5">
                            <div className="teste1">
                                <h4>Contrato</h4>
                                <div className="contrato-info center-align">
                                    <p>
                                        <ButtonMat fname={"a"} class="waves-effect waves-light btn-large center-align " name="Visualizar" iClass="fa-solid fa-book-open-reader" />
                                    </p>
                                    <p id="p1">ou</p>
                                    <p id="p2">
                                        <ButtonMat fname={"a"} class="waves-effect waves-light btn-large center-align" name="Baixar em PDF" iClass="fa-solid fa-file-arrow-down" />
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col s12">
                            <div className="teste2">
                                <h4>Informações</h4>
                                <div className="teste2-info ">
                                    {this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Departamento:</label> {info.dep_descricao}</p>)}
                                    {this.state.colaborador.map(info => <p  key={info.colaborador_con_id}><label>Cargo:</label> {info.car_descricao}</p>)}
                                    <p><label>Status:</label> ----</p>
                                    {this.state.head_colaborador.map(info => <p key={info.con_id}><label>Head:</label> {info.con_nome} - {info.car_descricao}</p>)}
                                    {this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Salário:</label> R${info.car_salario}</p>)}
                                    <p><label>Tempo de casa:</label> ----</p>
                                </div>
                            </div>
                        </div>

                        <div className="col col s12 m12 l8">
                            <div className="teste3">
                                <ul className="collapsible popout" data-collapsible="accordion">

                                    <Collapse title="Informações Pessoais" desc1={this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Gênero:</label> {info.user_genero}</p>)}
                                        desc2={this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Nacionalidade:</label> {info.user_nacionalidade}</p>)}
                                        desc3={this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Naturalidade:</label> {info.user_naturalidade}</p>)}
                                        desc4={this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Raça:</label> {info.user_raca}</p>)}
                                        desc5={this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Data de Nascimento:</label> {info.data_nascimento} <em>({info.idade} Anos)</em></p>)}
                                        desc6={null} />

                                    <Collapse title="Informações do Endereço" desc1={this.state.colaborador.map(info => <p key={info.con_id}><label>Endereço:</label> {info.end_rua}, n° {info.end_numero}, {info.end_bairro} </p>)}
                                        desc2={this.state.colaborador.map(info => <p key={info.con_id}><label>Estado:</label> {info.end_estado}</p>)}
                                        desc3={this.state.colaborador.map(info => <p key={info.con_id}><label>CEP:</label> {info.end_cep}</p>)}
                                        desc4={this.state.colaborador.map(info => <p key={info.con_id}><label>Região:</label> {info.end_regiao}</p>)}
                                        desc5={this.state.colaborador.map(info => <p key={info.con_id}><label>Complemento:</label> {info.end_complemento}</p>)}
                                        desc6={null} />


                                    <Collapse title="Dados Acadêmicos"
                                        desc1={this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Formação:</label> {info.qua_formacao}</p>)}
                                        desc2={this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Instituição:</label> {info.qua_nome_instituição}</p>)}
                                        desc3={this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Curso:</label> {info.qua_curso}</p>)}
                                        desc4={this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Línguas:</label> {info.qua_lingua}</p>)}
                                        desc5={null}
                                        desc6={null} />

                                    <Collapse title="Documentos Profissionais" desc1="Contribuição Sindical"
                                        desc2="Termo de PI"
                                        desc3="Cartão de PIS"
                                        desc4="Certificado de reservista"
                                        desc5="Atestado de Saúde Ocupacional"
                                        desc6="" />

                                    <Collapse title="Estado Civil"
                                        desc1={this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Estado Civil:</label> {info.user_estado_civil}</p>)}
                                        desc2="Certidão de casamento"
                                        desc3="CPF do conjuge"
                                        desc4="RG do conjuge"
                                        desc5=""
                                        desc6="" />

                                    <Collapse title="Paternidade/Maternidade"
                                        desc1={this.state.colaborador.map(info => <p key={info.colaborador_con_id}><label>Dependentes:</label> {info.user_filho}</p>)}
                                        desc2="Certidão de nascimento"
                                        desc3="Certificado de vacinação"
                                        desc4="Comprovante de frequência escolar"
                                        desc5="Pensão alimentícia"
                                        desc6="" />

                                    <Collapse title="Informações do desligamento" desc1="Não houve desligamento" desc2="" desc3="" desc4="" desc5="" desc6="" />

                                </ul>
                            </div>
                        </div>

                        <div className="col col s12 m12 l4">
                            <div className="teste3">
                                <h4>Benefícios</h4>
                                <form action="#">
                                  {this.state.colaborador.map(info=> 
                                    <p key={info.colaborador_con_id} className="grid-check">
                                        <CheckChecked value="" name="Plano de Saúde" />

                                        <Check value="" name="Vale Transporte" />

                                        <Check value="" name="Vale Refeição" />

                                        <Check value="" name="Auxílio Creche" />
                                    </p>
                                    )}
                                </form>
                            </div>
                        </div>

                        <div className="col col s12 m12 l4">
                            <div className="teste4">
                                <div className="botao-edicao center-align">
                                    <p>
                                        <ButtonMat fname={""} class="waves-effect waves-light btn-large" name="Editar" iClass="fa-solid fa-user-pen" />
                                    </p>
                                    
                                    <p>
                                        <ButtonMat fname={""} class="waves-effect waves-light btn-large" name="Excluir" iClass="fa-solid fa-user-slash" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default PerfilColab;