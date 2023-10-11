import { useState } from "react";
import Styles from "../Components/login.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("EMAIL");
  const [senha, setSenha] = useState("senha");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangeSenha(event) {
    setSenha(event.target.value);
  }

  function mensagemDeErro(mensagem = "Mensagem de erro") {
    toast.error(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  function mensagemDeSucesso(mensagem = "") {
    toast.success(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  async function submitDoFormulario(event) {
    event.preventDefault();

    const form = new FormData();
    form.append("email", email);
    form.append("password", senha);

    const options = {
      method: "POST",
      mode: "cors",
      body: form,
    };

    try {
      const response = await fetch(
        "https://webapp353621.ip-45-79-142-173.cloudezapp.io/api/login",
        options
      );
      mensagemDeSucesso("Logado com sucesso");
      const data = await response.json();
      const token = data.token;
      const nomeUsuario = data.user.name;
      const emailUsario = data.user.email;

      localStorage.setItem("token", token);
      localStorage.setItem("nomeUsuario", nomeUsuario);
      localStorage.setItem("emailUsario", emailUsario);

      navigate("/");
    } catch (error) {
      mensagemDeErro("NÃ£o foi possivel realizar login");
    }
  }

  return (
    <>
      <div className={Styles.logincontainer}>
        <h2>Login</h2>
        <form onSubmit={submitDoFormulario}>
          <label for="email">Email: {email}</label>
          <br />
          <input
            type="text"
            id="email"
            name="email"
            required
            onChange={onChangeEmail}
          />
          <br />

          <label for="senha">Senha: {senha}</label>
          <br />
          <input
            type="password"
            id="senha"
            name="senha"
            required
            onChange={onChangeSenha}
          />
          <br />

          <button type="submit">Entrar</button>
        </form>
      </div>
    </>
  );
}

export { Login };