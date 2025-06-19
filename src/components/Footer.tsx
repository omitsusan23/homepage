export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-8">
      <div className="max-w-5xl mx-auto text-center text-sm space-y-2">
        <div>© {new Date().getFullYear()} 株式会社REPLAY</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-primary">Twitter</a>
          <a href="#" className="hover:text-primary">Facebook</a>
        </div>
        <div>https://replay-0417.info</div>
      </div>
    </footer>
  )
}
