import { Link } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'トップ' },
  { to: '/about', label: '会社概要' },
  { to: '/services', label: 'サービス' },
  { to: '/solutions', label: '業界別ソリューション' },
  { to: '/contact', label: 'お問い合わせ' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow z-10">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="font-bold text-xl tracking-wide">
          株式会社 <span className="font-extrabold">REPLAY</span>
        </Link>
        <nav className="space-x-4" aria-label="メインナビゲーション">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} className="hover:text-primary font-medium">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
