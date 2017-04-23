import Link from 'next/link';
import Header from '../components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default () => (
  <MuiThemeProvider>
    <div>
      <Header />
      <div>Hello World. <Link href='/about'><a>About</a></Link></div>
    </div>
  </MuiThemeProvider>
)
