import { BASE_URL } from "../constants/urls";
import axios from "axios";
import { goToFeed } from "../routes/coordinator";


export const login = (body, clear, history, setRightButtonText) => {
  axios
    .post(`${BASE_URL}/user/login`, body)
    .then((ans) => {
      localStorage.setItem("token", ans.data.token);
      clear();
      goToFeed(history);
      setRightButtonText('Logout')
    })
    .catch((err) => alert(err.response.data.message));
};

export const signup = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/signup`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        alert("Usuário cadastrado com sucesso!");
        clear();
        setIsLoading(false);
        goToFeed(history);
        setRightButtonText("Logout");
      })
      .catch((err) => {
        setIsLoading(false);
      });
  };
