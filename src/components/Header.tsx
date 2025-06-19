import { Link } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-lg">
          REPLAY
        </Link>
        <nav className="space-x-4">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-primary">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
