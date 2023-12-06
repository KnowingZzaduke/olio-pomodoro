import "../../compile-css/output.css";
import { Input, Button, Image } from "@nextui-org/react";
import logoOlio from "/logo-olio.png";
import { request } from "../data/request";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

function FormAddProducts() {
  const [sendParams, setSendParams] = useState({
    nombreproducto: "",
    categoria: "",
    precio: null,
  });

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const SESSION = Cookies.get("dyzam-app");
      const SESSIONDECRYPT = await request.decryptdata(SESSION);
      if (SESSIONDECRYPT.salida === "exito") {
        console.log(SESSIONDECRYPT.data.idusuario);
        setSendParams({
          ...sendParams,
          idUsuario: SESSIONDECRYPT.data.idusuario,
        });
      }
    };

    fetchData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(sendParams);
    for (let key in sendParams) {
      if (sendParams[key] === null) {
        alert(`El valor ${key} está vacío`);
      }
    }
    const response = await request.saveData(sendParams);
    if (response.data.salida === "exito") {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, [3000]);
    }
  }
  return (
    <div
      className="flex flex-col align-middle justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center flex flex-col items-center">
        <h1 className="py-2" style={{ fontSize: "2rem" }}>
          Formulario de agregar facturas
        </h1>
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
              type="text"
              label="Nombre del producto"
              placeholder="Ingresa el nombre del producto"
              value={sendParams.nombreproducto}
              onChange={(e) =>
                setSendParams({ ...sendParams, nombreproducto: e.target.value })
              }
            />
          </fieldset>
          <fieldset>
            <Input
              isRequired
              type="text"
              label="Categoria del producto"
              placeholder="Ingresa la categoria del producto"
              value={sendParams.categoria}
              onChange={(e) =>
                setSendParams({ ...sendParams, categoria: e.target.value })
              }
            />
          </fieldset>
          <fieldset>
            <Input
              isRequired
              type="number"
              label="Precio del producto"
              placeholder="Ingresa el precio del producto"
              value={sendParams.precioproducto}
              onChange={(e) =>
                setSendParams({ ...sendParams, precioproducto: e.target.value })
              }
            />
          </fieldset>
          <Button color="success" type="submit">
            Enviar
          </Button>
          {showAlert === true ? (
            <p className="text-center underline" style={{ color: "green" }}>
              Producto agregado correctamente
            </p>
          ) : (
            <></>
          )}
        </form>
      </div>
    </div>
  );
}

export default FormAddProducts;
