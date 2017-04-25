//url for first page in case needed later
//let urlWhole = "https://wrapapi.com/use/akataz/kabbage/blog/0.0.1?page=&number=&wrapAPIKey=dMt6hI4PqgHSAvReqRIl8PnRbEVC6r72";

let url = "https://wrapapi.com/use/akataz/kabbage/blog/0.0.1?page=";
let wrapAPIKey = "wrapAPIKey=dMt6hI4PqgHSAvReqRIl8PnRbEVC6r72";
import fetch from 'isomorphic-unfetch';

const getPosts = async (number = "", page = "") => {
  const res = await fetch(`${url}${page}&number=${number}&${wrapAPIKey}`)
  const data = await res.json()
  console.log(`Data fetched. Success: ${data.data.post}`)
  return {
    posts: data.data.post
  }
}

export default getPosts;
