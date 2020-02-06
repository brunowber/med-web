// import React, { Component, useState } from "react";
// import { Form, Col, Button } from 'react-bootstrap';

// export default class Financeiro extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             cod: 0,
//             nome: props.nome,
//             email: props.email,
//             login: props.login,
//             senha: props.senha,
//             nomeValidator: null,
//             senhaValidator: null,
//             loginValidator: null,
//             emailValidator: null,
//             validated: false
//         };
//     }

//     handleChange = event => {
//         this.setState({
//             [event.target.id]: event.target.value
//         });
//     }

//     onBlur = event => {
//         const target = event.target;
//         console.log(target.value)
//         switch (target.id) {
//             case 'nome':
//                 this.setState({ nomeValidator: this.state.nome.length >= 3 })
//             case 'email':
//                 this.setState({ emailValidator: target.value.length > 6})
//                 break;
//             case 'login':
//                 this.setState({ loginValidator: target.value.length > 5 })
//                 break;
//             case 'senha':
//                 this.setState({ senhaValidator: target.value.length > 5 })
//                 break;
//             default:
//                 break;
//         }
//         this.setState({ validated: this.state.nomeValidator && this.state.emailValidator && this.state.loginValidator && this.state.senhaValidator })
//     }

//     render() {
//         return (
//             <Form>
//                 <Form.Row>
//                     <Col>
//                         <Form.Group controlId="nome">
//                             <Form.Control
//                                 isValid={this.state.nomeValidator == null ? null : this.state.nomeValidator}
//                                 isInvalid={this.state.nomeValidator == null ? null : !this.state.nomeValidator}
//                                 placeholder="Nome"
//                                 value={this.state.nome}
//                                 onChange={this.handleChange}
//                                 onBlur={this.onBlur}
//                             />
//                             <Form.Control.Feedback type="invalid">Nome precisa ter ao menos 3 dígitos </Form.Control.Feedback>
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="email">
//                             <Form.Control
//                                 isValid={this.state.emailValidator == null ? null : this.state.emailValidator}
//                                 isInvalid={this.state.emailValidator == null ? null : !this.state.emailValidator}
//                                 placeholder="email@email.com"
//                                 value={this.state.email}
//                                 onChange={this.handleChange}
//                                 onBlur={this.onBlur}
//                             />
//                             <Form.Control.Feedback type="invalid">Email precisa ter ao menos 6 dígitos </Form.Control.Feedback>
//                         </Form.Group>
//                     </Col>
//                 </Form.Row>
//                 <Form.Row>
//                     <Col>
//                         <Form.Group controlId="login">
//                             <Form.Control
//                                 isValid={this.state.loginValidator == null ? null : this.state.loginValidator}
//                                 isInvalid={this.state.loginValidator == null ? null : !this.state.loginValidator}
//                                 placeholder="Login"
//                                 value={this.state.login}
//                                 onChange={this.handleChange}
//                                 onBlur={this.onBlur}
//                             />
//                             <Form.Control.Feedback type="invalid">Login precisa ter ao menos 5 dígitos </Form.Control.Feedback>
//                         </Form.Group>
//                     </Col>
//                     <Col>
//                         <Form.Group controlId="senha">
//                             <Form.Control
//                                 isValid={this.state.senhaValidator == null ? null : this.state.senhaValidator}
//                                 isInvalid={this.state.senhaValidator == null ? null : !this.state.senhaValidator}
//                                 placeholder="Senha"
//                                 value={this.state.senha}
//                                 onChange={this.handleChange}
//                                 onBlur={this.onBlur}
//                                 type="password"
//                             />
//                             <Form.Control.Feedback type="invalid">Senha precisa ter ao menos 5 dígitos </Form.Control.Feedback>
//                         </Form.Group>
//                     </Col>
//                 </Form.Row>
//                 <Form.Row>
//                     <Col>
//                         <Button
//                             block
//                             bssize="large"
//                             disabled={!this.state.validated}
//                             type="submit"
//                         >Gravar</Button>
//                     </Col>
//                 </Form.Row>
//             </Form >
//         );
//     }
// }