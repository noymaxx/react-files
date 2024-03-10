import { useState } from "react";
import Input from "./components/input";

function App() {

  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar Senha")
  const [customSize, setCustomSize] = useState(12);
  const [showInput, setShowInput] = useState(false);

  const passwordSize = showInput ? customSize : 8;

  function generate() {

    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*()_+";
    let newPassword = "";

    for(let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * caracteres.length);
      newPassword += caracteres[position]
   }

    setPassword(newPassword);
    setCopyText("Copiar Senha");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Senha Copiada!");
  }

  return (
    <div className="App">
      <h1> Gerador de Senhas </h1>
      <div>
        <label htmlFor="showInput">Customizar Tamanho: </label>
        <input 
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput(currentState => !currentState)}
        />
      </div>
      {showInput ? (
         <div>
        <label htmlFor='passwordSize'>Tamanho da Senha: </label>
        <Input passwordSize={customSize} setPasswordSize={setCustomSize}/>
      </div>
      ) : null}
      <button onClick={generate}> Gerar Senha de {passwordSize} caracteres </button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}

export default App
