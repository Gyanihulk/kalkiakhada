import Link from 'next/link'
import { Tabs, Tab } from 'components/Tabs'

const LoginSignupNav = ({ active = '' }) => (
  <Tabs className="LoginSignupNavTabs">
    <Tab isActive={active === 'signup'} className="LoginSignupNavTab">
      <Link href="/signup">
        <a>Signup</a>
      </Link>
    </Tab>

    <Tab isActive={active === 'login'} className="LoginSignupNavTab">
      <Link href="/login">
        <a>Login</a>
      </Link>
    </Tab>
  </Tabs>
)

export default LoginSignupNav
