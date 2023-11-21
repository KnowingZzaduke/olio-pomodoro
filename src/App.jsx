import "../compile-css/output.css";
import { Input, Button, Image } from "@nextui-org/react";
import logoOlio from "/logo-olio.png";
import { useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  function handleSubmitData(e) {
    console.log("envió");
    e.preventDefault();
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
<<<<<<< HEAD
              type="text"
              label="Usuario"
              placeholder="Ingresa el nombre de usuario"
=======
              type="date"
              label="Fecha de factura"
              placeholder="Ingresa la fecha de la factura"
>>>>>>> 7a0b9edf4b305f875f15ad2862c0bb9bf74d93de
            />
          </fieldset>
          <fieldset>
            <Input
              isRequired
<<<<<<< HEAD
              type="password"
              label="Contraseña"
              placeholder="Ingresa la contraseña"
            />
          </fieldset>
          <Button color="success" type="submit">Enviar</Button>
=======
              type="time"
              label="Hora de la factura"
              placeholder="Ingresa la hora de la factura"
            />
          </fieldset>
          <fieldset className="flex flex-col" style={{ gap: "15px" }}>
            <Select label="Selecciona una categoría de los productos">
              <SelectItem>Categorías</SelectItem>
            </Select>
            <Select label="Selecciona un producto">
              <SelectItem>Productos</SelectItem>
            </Select>
          </fieldset>
>>>>>>> 7a0b9edf4b305f875f15ad2862c0bb9bf74d93de
        </form>
      </div>
    </div>
  );
}

export default App;
