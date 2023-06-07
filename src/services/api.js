import axios from "axios";

//Base da API: https://api.themoviedb.org/3/
//URL da API: https://api.themoviedb.org/3/movie/157336?api_key=63953b6a086adaa6a3cab16bec33d1fc&append_to_response=videos


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;