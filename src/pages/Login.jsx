import "./Login.css"

export function Login() {
  return <div className="containerLogin">
    <header className="headerLogin">
    <img src="/src/assets/Logo.png" alt="" />
      <h3>Login</h3>
    </header>

    <form action="">
      <div className="inputContainerLogin">
        <label htmlFor="usuario">Usuario:   </label>
        <input 
        type="text"
        name="usuario" 
        id="usuario" 
        placeholder="Insira o seu Usuário"/>
      </div>

      <div className="inputContainerLogin">
        <label htmlFor="senha">Senha:   </label>
        <input 
        type="text"
        name="senha" 
        id="senha" 
        placeholder="Insira sua senha"/>
      </div>

    <button className="ButtonLogin" href="/home">
      Login
    </button>

    <div className="footerLogin">
      <p>Ainda não tem uma conta ?</p>
      <a href="">Crie uma Conta</a>
    </div>

    </form>
    </div>
}

export default Login