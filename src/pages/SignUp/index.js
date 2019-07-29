import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '../../assets/images/logo.svg';
import { signUpRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),

  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O campo e-mail é obrigatório!'),

  password: Yup.string()
    .min(6, 'A senha precisa ter no mínimo 6 caracteres')
    .required('A senha é obrigatória!'),
});

export default function SignUp() {
  const dispath = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispath(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input name="password" type="password" placeholder="Sua Senha" />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
