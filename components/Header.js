import Link from 'next/link'
import AppBar from 'material-ui/AppBar';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <AppBar />
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
    </div>
)

export default Header
