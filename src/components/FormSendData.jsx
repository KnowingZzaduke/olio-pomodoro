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
import { useEffect, useState } from "react";
function FormSendData() {
  const [sendParams, setSendParams] = useState({
    fecha: null,
    hora: null,
    categoria: null,
    productos: null,
    totalVentas: null,
    tipoPago: null,
    finalPago: null,
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(sendParams);
    for (let key in sendParams) {
      if (sendParams[key] === null) {
        alert(`El valor ${key} está vacío`);
      } else {
      }
    }
  }

  useEffect(() => {
    console.log(sendParams);
  }, [sendParams]);
  return (
    <div
      className="flex flex-col align-middle justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
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
              value={sendParams.fecha}
              onChange={(e) => setSendParams(...sendParams.fecha, e.target.value)}
            />
          </fieldset>
          <fieldset>
            <Input
              isRequired
              type="time"
              label="Hora de la factura"
              placeholder="Ingresa la hora de la factura"
              value={sendParams.hora}
              onChange={(e) => setSendParams(...sendParams.hora, e.target.value)}
            />
          </fieldset>
          <fieldset className="flex flex-col" style={{ gap: "15px" }}>
            <Select
              label="Selecciona una categoría de los productos"
              selectionMode="multiple"
              selectedKeys={sendParams.categoria}
              onChange={() =>
                setSendParams(
                  ...sendParams.categoria,
                  new Set(e.target.value.split(","))
                )
              }
            >
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
              label="Total de venta"
              placeholder="Ingresa el total de la venta"
            />
          </fieldset>
          <fieldset className="flex flex-col" style={{ gap: "15px" }}>
            <Select label="Selecciona el tipo de pago">
              <SelectItem>Tarjeta</SelectItem>
              <SelectItem>Efectivo</SelectItem>
            </Select>
          </fieldset>
          <fieldset>
            <Input
              isRequired
              type="number"
              label="Total"
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
