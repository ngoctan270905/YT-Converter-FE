export function FeaturesSection() {
  return (
    <div className="w-full max-w-4xl mb-20 relative z-10 mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-dark-700/40 border border-white/10 rounded-2xl p-6 group hover:border-white/20 transition-all">
          <div
            className="w-11 h-11 rounded-xl feature-icon flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-base text-white mb-2">Siêu nhanh</h3>
          <p className="text-white/60 text-sm leading-relaxed font-body">
            Tốc độ tải xuống tối đa với máy chủ phân tán toàn cầu. Không giới hạn băng thông.
          </p>
        </div>

        <div className="bg-dark-700/40 border border-white/10 rounded-2xl p-6 group hover:border-white/20 transition-all">
          <div
            className="w-11 h-11 rounded-xl feature-icon flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="#f87171" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-base text-white mb-2">Chất lượng cao</h3>
          <p className="text-white/60 text-sm leading-relaxed font-body">
            Hỗ trợ 8K, 4K, 1080p, 720p. Giữ nguyên chất lượng gốc không nén thêm.
          </p>
        </div>

        <div className="bg-dark-700/40 border border-white/10 rounded-2xl p-6 group hover:border-white/20 transition-all">
          <div
            className="w-11 h-11 rounded-xl feature-icon flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#f87171" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="font-display font-semibold text-base text-white mb-2">An toàn & riêng tư</h3>
          <p className="text-white/60 text-sm leading-relaxed font-body">
            Không lưu trữ dữ liệu. File tự động xóa sau 1 giờ. Kết nối mã hóa HTTPS.
          </p>
        </div>
      </div>
    </div>
  )
}
