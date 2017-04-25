import Link from 'next/link';
import Header from '../components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getPosts from '../lib/getPosts'


const Index = () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <div>Hello World. <Link href='/about'><a>About</a></Link></div>
    </div>
  </MuiThemeProvider>
)
Index.getInitialProps = () => {
  return getPosts();
}

export default Index;
