import Link from 'next/link';
import getPosts from '../lib/getPosts'

export default () => (
  <div>
    <div>Is this thing on? <Link href='/about'><a style={{ fontSize: 50 }}>About</a></Link></div>
    <div>Probably time to go home <Link href='/index'><a>Home</a></Link></div>
  </div>
)
