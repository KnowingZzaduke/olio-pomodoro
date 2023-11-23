import axios from "axios";
export const request = {
  login: async function (data) {
    const formData = new FormData();
    formData.append("usuario", data.usuario);
    formData.append("contrasena", data.contrasena);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/savedata?action=login",
        formData
      );
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  },
  saveData: async function (data) {
    const formData = new FormData();
    formData.append("fecha", data.fecha);
    formData.append("hora", data.hora);
    formData.append(
      "categoria",
      data.categoria.values().next().value.toString()
    );
    formData.append(
      "productos",
      data.productos.values().next().value.toString()
    );
    formData.append("totalVentas", data.totalVentas);
    formData.append("tipoPago", data.tipoPago.values().next().value.toString());
    formData.append("finalPago  ", data.finalPago);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/savedata?action=savedata",
        formData
      );
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  },
  loaddata: async function () {
    try {
      const response = await axios.get("http://localhost:8080/api/loaddata?action=loaddata");
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  },
};
