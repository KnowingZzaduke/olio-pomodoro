import "../../compile-css/output.css";
import {
  Input,
  Button,
  Select,
  SelectSection,
  SelectItem,
  Image,
} from "@nextui-org/react";
import logoOlio from "/logo-olio.png";

function FormSendData() {
  return (
    <div
      className="flex flex-col align-middle justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center flex flex-col items-center">
        <form
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
              type="date"
              label="Fecha de factura"
              placeholder="Ingresa la fecha de la factura"
            />
          </fieldset>
          <fieldset>
            <Input
              isRequired
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
          <fieldset>
            <Input
              isRequired
              type="number"
              label="Total de ventas"
              placeholder="Ingresa el total de la venta"
            />
          </fieldset>
          <fieldset>
            <Input
              isRequired
              type="number"
              label="Caja/Efectivo"
              placeholder="Ingresa el total de la caja o efectivo"
            />
          </fieldset>
          <Button color="success">Enviar</Button>
        </form>
      </div>
    </div>
  );
}

export default FormSendData;
