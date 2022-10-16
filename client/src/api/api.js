import axios from "axios";

const turma = axios.create({
  baseURL: "http://localhost:4003",
});

export default turma;
