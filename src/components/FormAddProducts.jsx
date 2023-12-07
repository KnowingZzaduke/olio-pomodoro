import "../../compile-css/output.css";
import {
  Input,
  Button,
  Image,
  Select,
  SelectSection,
  SelectItem,
  CheckboxGroup,
  Checkbox,
} from "@nextui-org/react";
import logoOlio from "/logo-olio.png";
import { request } from "../data/request";
import { useEffect, useState } from "react";

function FormAddProducts() {
  const [sendParams, setSendParams] = useState({
    categoria: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const [showProductsSelect, setShowProductsSelect] = useState(false);
  const [dataCategory, setDataCategory] = useState([]);
  async function loadCategory() {
    try {
      const response = await request.loadcategory();
      if (response.data.salida === "exito") {
        const uniqueData = {};
        response.data.data.forEach((element) => {
          const category = element.categoria;
          if (!uniqueData[category]) {
            uniqueData[category] = new Set();
          }
          uniqueData[category].add(category);
        });
        const finallyData = Object.keys(uniqueData);
        if (finallyData.length !== 0) {
          setDataCategory(finallyData);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    for (let key in sendParams) {
      if (sendParams[key] === null) {
        alert(`El valor ${key} está vacío`);
      }
    }
    try {
      const response = await request.saveProducts(sendParams);
      if (response.data.salida === "exito") {
        setSendParams({...sendParams, categoria: ""})
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, [3000]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCategory();
  }, []);

  useEffect(() => {
    if (showProductsSelect === false) {
      setSendParams({ ...sendParams, categoria: "" });
    } else {
      loadCategory();
    }
  }, [showProductsSelect]);
  return (
    <div
      className="flex flex-col align-middle justify-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center flex flex-col items-center">
        <h1 className="py-2" style={{ fontSize: "2rem" }}>
          Formulario de agregar categorías
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col border-2 border-solid rounded p-4"
          style={{
            maxWidth: "500px",
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
          {showProductsSelect === false ? (
            <fieldset>
              <Input
                isRequired
                type="text"
                label="Categoría del producto"
                placeholder="Ingresa la categoria del producto"
                value={sendParams.categoria}
                onChange={(e) =>
                  setSendParams({ ...sendParams, categoria: e.target.value })
                }
              />
            </fieldset>
          ) : (
            <fieldset className="flex flex-col" style={{ gap: "15px" }}>
              <Select
                label="Selecciona una categoría de los productos"
                selectedKeys={sendParams.categoria}
                onSelectionChange={(newSelection) =>
                  setSendParams({ ...sendParams, categoria: newSelection })
                }
                style={{ maxWidth: "400px" }}
              >
                {dataCategory &&
                  dataCategory.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
              </Select>
            </fieldset>
          )}
          {/* <div className="text-start">
            <Checkbox
              color="primary"
              isSelected={showProductsSelect}
              onValueChange={setShowProductsSelect}
            >
              <p
                className="underline"
                style={{ fontSize: "13px", color: "red" }}
              >
                Seleccionar una categoria ya creada
              </p>
            </Checkbox>
          </div> */}

          {/* <fieldset>
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
              type="number"
              label="Precio del producto"
              placeholder="Ingresa el precio del producto"
              value={sendParams.precioproducto}
              onChange={(e) =>
                setSendParams({ ...sendParams, precioproducto: e.target.value })
              }
            />
          </fieldset> */}
          <Button color="success" type="submit">
            Enviar categoría
          </Button>
          {showAlert === true ? (
            <p className="text-center underline" style={{ color: "green" }}>
              Categoría agregada correctamente
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
