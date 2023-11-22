import "../compile-css/output.css";
import { Input, Button, Image } from "@nextui-org/react";
import logoOlio from "/logo-olio.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { request } from "./data/request";
function App() {
  const navigate = useNavigate();
  const [sendParams, setSendParams] = useState({
    usuario: "",
    contrasena: "",
  });
  async function handleSubmitData(e) {
    console.log("envió");
    e.preventDefault();
    console.log(sendParams);
    for (let key in sendParams) {
      if (sendParams[key] === "") {
        alert(`El campo ${key} no puede ir vacío`);
      } else {
        const response = await request.login(sendParams);
        if (response) {
          console.log(response);
        }
      }
    }
    navigate("/dashboard");
  }
  return (
    <div
      className="flex flex-col align-middle justify-center bg_signin"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center flex flex-col items-center">
        <form
          onSubmit={handleSubmitData}
          className="flex flex-col border-2 border-solid rounded p-4"
          style={{
            width: "500px",
            minWidth: "400px",
            gap: "15px",
            backgroundColor: "#D5DBDB",
          }}
        >
          <div className="flex justify-center">
            <Image
              width={400}
              alt="Logo-olio-pomodoro"
              src={logoOlio}
              className="py-4"
            />
          </div>
          <fieldset>
            <Input
              isRequired
              type="text"
              label="Usuario"
              placeholder="Ingresa el nombre de usuario"
              onChange={(e) =>
                setSendParams({ ...sendParams, usuario: e.target.value })
              }
            />
          </fieldset>
          <fieldset>
            <Input
              isRequired
              type="password"
              label="Contraseña"
              placeholder="Ingresa la contraseña"
              onChange={(e) =>
                setSendParams({ ...sendParams, contrasena: e.target.value })
              }
            />
          </fieldset>
          <Button color="success" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
