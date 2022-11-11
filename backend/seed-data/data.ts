function timestamp() {
  // sometime in the last 30 days
  const stampy = Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30)
  return new Date(stampy).toISOString()
}
import bcryptjs from 'bcryptjs'
export const seedUser = [
  {
    name: 'saurav',
    email: 'saurav@kalkiakhada.com',
    password: bcryptjs.hashSync('password', 10),
  },
  {
    name: 'kartik',
    email: 'kartik@kalkiakhada.com',
    password: bcryptjs.hashSync('password', 10),
  },
  {
    name: 'adamya',
    email: 'adamya@kalkiakhada.com',
    password: bcryptjs.hashSync('password', 10),
  },
]