import Link from 'next/link';

export default () => (
  <div>
    <div>Is this thing on? <Link href='/about'><a style={{ fontSize: 50 }}>About</a></Link></div>
    <div>Probably time to go home <Link href='/index'><a>Home</a></Link></div>
    <div>This site was made using Next.js which is a sweet library that bundles React, routing, Hot Module Loading, Babel Transpiling, and
      probaly a whole host of other cool stuff that I haven't discovered yet.  Deployed using Now, a sweet deployment solution created by the same
      awesome folks who created Next.js</div>
  </div>
)
