import { HiOutlineLanguage, HiOutlineMoon } from 'react-icons/hi2'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 py-3 border-b border-white/10 relative z-20">
      <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
        <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center glow-red-sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="font-display font-bold text-lg tracking-tight text-white">YT NTConvert</span>
      </Link>
      <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
        <Link to="/features" className="hover:text-white transition-colors font-body">Tính năng</Link>
        <Link to="/formats" className="hover:text-white transition-colors font-body">Định dạng</Link>
        <Link to="/faq" className="hover:text-white transition-colors font-body">FAQ</Link>
        <Link to="/terms" className="hover:text-white transition-colors font-body">Điều khoản</Link>
        <Link to="/privacy" className="hover:text-white transition-colors font-body">Riêng tư</Link>
        <Link to="/contact" className="hover:text-white transition-colors font-body">Liên hệ</Link>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-2 text-white/70 hover:text-white transition-all bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] rounded-xl cursor-pointer">
          <HiOutlineLanguage className="w-5 h-5" />
        </button>
        <button className="p-2 text-white/70 hover:text-white transition-all bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.08] rounded-xl cursor-pointer">
          <HiOutlineMoon className="w-5 h-5" />
        </button>
      </div>
    </nav>
  )
}

