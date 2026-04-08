export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6 md:px-12 relative z-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-brand-500/80 flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="white" strokeWidth="2.5" />
            </svg>
          </div>
          <span className="font-display font-semibold text-sm text-white/70">YT NTConvert</span>
        </div>
        <p className="text-white/40 text-xs text-center font-medium font-body">
          Chỉ dùng cho mục đích cá nhân. Vui lòng tôn trọng bản quyền nội dung.
        </p>
        <div className="text-white/30 text-[10px] font-medium font-body">
          &copy; {new_line()} YT NTConvert
        </div>
      </div>
    </footer>
  )
}

function new_line() {
  return new Date().getFullYear()
}
