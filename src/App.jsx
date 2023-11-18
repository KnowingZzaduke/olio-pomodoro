import "../compile-css/output.css";
import {
  Input,
  Button,
  Select,
  SelectSection,
  SelectItem,
} from "@nextui-org/react";
function App() {
  return (
    <div
      className="flex flex-col align-middle justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center flex flex-col items-center">
        <h2 className="font-bold text-xl">Olio y Pomodoro</h2>
        <form
          className="flex flex-col border-2 border-solid rounded p-2"
          style={{ width: "500px", minWidth: "400px", gap: "15px" }}
        >
          <fieldset>
            <Input
              isRequired
              type="text"
              label="Nombre de usuario"
              placeholder="Ingresa el nombre de usuario"
            />
          </fieldset>
          <Button color="success">Enviar</Button>
        </form>
      </div>
    </div>
  );
}

export default App;
