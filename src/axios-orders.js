import axios from "axios";

const instance = axios.create({
  baseURL: "https://shooter-trainer.firebaseio.com/",
});

export default instance;
