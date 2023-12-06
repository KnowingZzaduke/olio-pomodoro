import axios from "axios";
import CryptoJS from "crypto-js";
export const request = {
  login: async function (data) {
    const formData = new FormData();
    formData.append("usuario", data.usuario);
    formData.append("contrasena", data.contrasena);
    try {
      const response = await axios.post(
        "http://127.0.0.1/api.php?action=login",
        formData
      );
      console.log(response);
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
    formData.append("total", data.finalPago);
    formData.append("idUsuario", data.idUsuario);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1/api.php?action=savedata",
        formData
      );
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  },
  saveProducts: async function (data) {
    const formData = new FormData();
    formData.append("nombreproducto", data.nombreproducto);
    formData.append(
      "categoria",
      typeof data.categoria === "string"
        ? data.categoria
        : data.categoria.values().next().value.toString()
    );
    formData.append("precioproducto", data.precioproducto);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://127.0.0.1/api.php?action=saveproducts",
        formData
      );
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  },
  loaddata: async function (id) {
    const formData = new FormData();
    formData.append("idusuario", id);
    try {
      const response = await axios.post(
        "http://127.0.0.1/api.php?action=loaddata",
        formData
      );
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  },
  loadcategory: async function (id) {
    try {
      const response = await axios.get(
        "http://127.0.0.1/api.php?action=loadcategory"
      );
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  },
  decryptdata: function (data) {
    const bytes = CryptoJS.AES.decrypt(data, "FDhfd678GHSDFS23");
    const decrypted = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decrypted;
  },
  encryptData: function (data) {
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      "FDhfd678GHSDFS23"
    );
    return encrypted;
  },
};
