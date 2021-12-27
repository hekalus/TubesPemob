// https://documenter.getpostman.com/view/3479169/Szf7zncp?version=latest#236e4205-de53-41e0-bfc2-f17d396f9741

export const categories = [
  {
    code: "",
    pic: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Bogor_coa.png",
    name: "business",
  },
  {
    code: "",
    pic: "http://3.bp.blogspot.com/-VYgIc8W36rA/UETGZ0ixmRI/AAAAAAAAGwM/qVncHuLU-d4/s1600/LOGO+KOTA+BANDUNG.png",
    name: "entertainment",
  },
  {
    code: "",
    pic: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Coat_of_arms_of_Bekasi.png",
    name: "health",
  },
  {
    pic: "https://seeklogo.com/images/P/pemda-garut-logo-242D0CCF1C-seeklogo.com.png",
    name: "Garut",
  },
  {
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
    code: "in",
    name: "India",
  },
  {
    code: "us",
    name: "USA",
  },
  {
    code: "au",
    name: "Australia",
  },
  {
    code: "ru",
    name: "Russia",
  },
  {
    code: "fr",
    name: "France",
  },
  {
    code: "gb",
    name: "United Kingdom",
  },
  {
  code: "id",
  name: "Indonesia",
},
];

export const sources = [
  {
    id: "detik.com",
    name: "Detik.com",
    pic: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Logo_Kompasdotcom.png",
  },
  {
    id: "suara.com",
    name: "Suara",
    pic: "https://4.bp.blogspot.com/-5pyHguCUj-I/W8nZfhFeKkI/AAAAAAAAANA/uSNifRnpC7Y9YXO0V1-4187UlPaGSAUEwCPcBGAYYCw/s1600/Lowongan%2BKerja%2BTerbaru%2BTribun%2BNetwork.png",
  },
  {
    id: "tribunnews.com",
    name: "Fox News",
    pic: "https://1.bp.blogspot.com/-kHu49VPf9wE/YCJ1Q6P68ZI/AAAAAAAAImM/84neu8-v6084-wcxUOkDwHbo-l740vfTwCLcBGAsYHQ/s600/Detikcom.png",
  },
  {
    id: "merdeka.com",
    name: "Google News",
    pic: "https://kampungdesigner.com/wp-content/uploads/edd/2020/06/Logo-Liputan6-by-kampungdesigner.jpg",
  },
];

export const BASE_URL = "https://newsapi.org/v2";

export const getNewsAPI = (category, country = "id") => {
  return `${BASE_URL}/top-headlines?country=${country}&category=${category}&apiKey=dfa73438304945af99f059e43103e42b`;
};

export const getSourceAPI = (source) => {
  return `${BASE_URL}/everything?domains=${source}&apiKey=dfa73438304945af99f059e43103e42b`;
};
