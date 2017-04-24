import Link from 'next/link';
import Header from '../components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import fetch from 'isomorphic-unfetch';

const Index = () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <div>Hello World. <Link href='/about'><a>About</a></Link></div>
    </div>
  </MuiThemeProvider>
)
Index.getInitialProps = async () => {
    let url = "https://wrapapi.com/use/akataz/kabbage/blog/0.0.1?page=&number=&wrapAPIKey=dMt6hI4PqgHSAvReqRIl8PnRbEVC6r72";
    const res = await fetch(url)
    const data = await res.json()

    console.log(`Data fetched. Success: ${data.data.post}`)

    return {
      movies: data.data.post
    }
}

export default Index;




//
// export default getPosts = (number = "", page = "") => {
//   fetch(`${url}${page}&number=${number}&${wrapAPIKey}`)
//   .then((results) => {
//     console.log(results)
//   })
//   .catch((error) => {
//     console.log(error);
//   })
// }
