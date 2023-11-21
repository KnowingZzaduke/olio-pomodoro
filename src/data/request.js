import axios from "axios";
export const request = {
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
      const response = await axios.post("/api/savedata?action=savedata", formData);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  loaddata: async function () {
    try {
      const response = await axios.get("/api/loaddata?action=loaddata");
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
