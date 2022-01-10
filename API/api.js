// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741

export const categories = [
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/hard-working.png",
    name: "business",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/movie-projector.png",
    name: "entertainment",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/stethoscope.png",
    name: "health",
  },
  {
    code: "",
    pic: "https://img.icons8.com/fluent/96/000000/microscope.png",
    name: "science",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/trophy.png",
    name: "sports",
  },
  {
    pic: "https://img.icons8.com/fluent/96/000000/artificial-intelligence.png",
    name: "technology",
  },
];

export const country = [
  {
  code: "id",
  name: "Indonesia",
},
];

export const sources = [
  {
    id: "detik.com",
    name: "Detik.com",
    pic: "https://1.bp.blogspot.com/-kHu49VPf9wE/YCJ1Q6P68ZI/AAAAAAAAImM/84neu8-v6084-wcxUOkDwHbo-l740vfTwCLcBGAsYHQ/s600/Detikcom.png",
  },
  {
    id: "suara.com",
    name: "Suara",
    pic: "https://javara.co.id/wp-content/uploads/2019/12/Suara.com-Logo.jpg",
  },
  {
    id: "tribunnews.com",
    name: "Tribun",
    pic: "https://kampungdesigner.com/wp-content/uploads/edd/2020/06/Logo-Tribun-by-kampungdesigner.jpg",
  },
  {
    id: "merdeka.com",
    name: "Merdeka",
    pic: "https://kitabisa-userupload-01.s3-ap-southeast-1.amazonaws.com/_production/partner/208/34_208_1463712141_56250944_f.jpg",
  },
];

export const BASE_URL = "https://newsapi.org/v2";

export const getNewsAPI = (category, country = "id") => {
  return `${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=dfa73438304945af99f059e43103e42b`;
};

export const getSourceAPI = (source) => {
  return `${BASE_URL}/everything?domains=${source}&apiKey=dfa73438304945af99f059e43103e42b`;
};
