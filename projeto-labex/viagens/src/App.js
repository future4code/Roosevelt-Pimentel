import './App.css';
import React, { useEffect} from "react";
import styled from "styled-components";
import axios from 'axios';
import useForm from './pages/useForm'; 


const App = () => {

  const {form, onChange, cleanFields} = useForm({ email: "" , password: ""})

  // const mudaPais = (event) => {
  //   setPais(event.target.value)
  // }

  const fazerLogin = (event) => {
    event.preventDefault()

    // const body = {
    //   email: email,
    //   password: senha
    // }
   console.log (form)
   cleanFields();
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={fazerLogin}>
        <input
          type="email"
          value={form.email}
          onChange={onChange}
          placeholder={"email"}
          required
        />
        <input
          type="password"
          value={form.password}
          onChange={onChange}
          placeholder={"senha"}
          pattern={"^.{6,}"}
          title={"sua senha dever ter no mínimo 6 caracteres"}
          required
        />
        {/* <input
        placeholder={"pais"}
        value={pais}
        onChange={mudaPais}
        pattern={"[A-Z]{3}"}
        title={'código do país com 3 letras maiúscula'}
        /> */}
         
        <button>Fazer Login</button>
      </form>
    </div>
  );
};

export default App;
