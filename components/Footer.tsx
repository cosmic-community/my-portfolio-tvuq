export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Developer Portfolio. Crafted with ❤️ and Next.js</p>
      </div>
    </footer>
  )
}