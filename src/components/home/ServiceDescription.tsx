export function ServiceDescription() {
  return (
    <div className="w-full max-w-4xl mx-auto mb-20 relative z-10 px-4">
      {/* How to use section */}
      <div className="mb-16">
        <h2 className="font-display font-bold text-2xl text-white mb-8 text-center text-glow">
          Làm thế nào để tải video YouTube?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="font-display font-bold text-brand-400">01</span>
            </div>
            <h3 className="font-display font-semibold text-white mb-2">Sao chép link</h3>
            <p className="text-white/50 text-sm font-body">
              Sao chép địa chỉ URL của video YouTube bạn muốn tải xuống từ thanh địa chỉ trình duyệt.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="font-display font-bold text-brand-400">02</span>
            </div>
            <h3 className="font-display font-semibold text-white mb-2">Dán liên kết</h3>
            <p className="text-white/50 text-sm font-body">
              Dán liên kết vào ô tìm kiếm ở trên và nhấn nút "Phân tích" để hệ thống xử lý video.
            </p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-12 h-12 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <span className="font-display font-bold text-brand-400">03</span>
            </div>
            <h3 className="font-display font-semibold text-white mb-2">Tải xuống</h3>
            <p className="text-white/50 text-sm font-body">
              Chọn định dạng (MP4, MP3) và chất lượng mong muốn, sau đó nhấn nút "Tải về".
            </p>
          </div>
        </div>
      </div>

      {/* FAQ & Info section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/5">
        <div>
          <h3 className="font-display font-bold text-xl text-white mb-6">Tại sao chọn chúng tôi?</h3>
          <div className="space-y-4 text-white/60 text-sm leading-relaxed font-body">
            <p>
              <strong className="text-white/90">Hoàn toàn miễn phí:</strong> Chúng tôi cung cấp dịch vụ chuyển đổi và tải video YouTube mà không thu bất kỳ khoản phí nào.
            </p>
            <p>
              <strong className="text-white/90">Không cần đăng ký:</strong> Bạn có thể sử dụng mọi tính năng ngay lập tức mà không cần tạo tài khoản hay cung cấp thông tin cá nhân.
            </p>
            <p>
              <strong className="text-white/90">Chất lượng đa dạng:</strong> Hỗ trợ tất cả các độ phân giải từ 144p đến 4K, cùng với định dạng âm thanh MP3 chất lượng cao lên đến 320kbps.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-xl text-white mb-6">Câu hỏi thường gặp</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-display font-semibold text-white/90 text-sm mb-2">Dịch vụ này có an toàn không?</h4>
              <p className="text-white/50 text-sm font-body">
                Có, chúng tôi không lưu trữ video trên máy chủ và sử dụng kết nối mã hóa SSL để đảm bảo an toàn cho người dùng.
              </p>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white/90 text-sm mb-2">Tôi có thể tải video dài bao nhiêu?</h4>
              <p className="text-white/50 text-sm font-body">
                Hệ thống hỗ trợ tải các video có độ dài lên đến 2 giờ với tốc độ xử lý nhanh nhất hiện nay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
