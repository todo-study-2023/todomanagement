import axios from "axios";
//axios 인스턴스 생성
//백엔드 접속정보로 create
//instance intercept
//if(error){ retrun response.data }
//throw error
//export

//TODO axios config 만들어서 해보기!!

const api = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
    Accept: "application/json",
  },
  baseURL: "http://3.36.113.120:1337/api",
});

api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
