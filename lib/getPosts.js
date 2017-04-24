
let url = "https://wrapapi.com/use/akataz/kabbage/blog/0.0.1?page=";
let wrapAPIKey = "wrapAPIKey=dMt6hI4PqgHSAvReqRIl8PnRbEVC6r72";


export default getPosts = (number = "", page = "") => {
  fetch(`${url}${page}&number=${number}&${wrapAPIKey}`)
  .then((results) => {
    console.log(results)
  })
  .catch((error) => {
    console.log(error);
  })
}
