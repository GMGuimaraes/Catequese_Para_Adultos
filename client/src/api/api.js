import axios from "axios";

const catequese = axios.create({
  baseURL: "http://localhost:4003",
});

export default catequese;
