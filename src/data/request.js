import axios from "axios";
export const request = {
  loaddata: async function () {
    try {
      const response = await axios.get("/api.php?action=loaddata");
      return response;
    } catch (error) {
      console.error(error);
    }
  },
};
