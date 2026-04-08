import { PageLayout } from '../components/layout/PageLayout'
import { FaTelegramPlane, FaFacebook } from 'react-icons/fa'
import { SiZalo } from 'react-icons/si' // Note: If SiZalo doesn't exist, I'll use a generic icon

export function ContactPage() {
  return (
    <PageLayout 
      title="Liên hệ" 
      subtitle="Chúng tôi luôn lắng nghe ý kiến đóng góp từ bạn."
    >
      <div className="space-y-8">
        <p>Nếu bạn có bất kỳ thắc mắc, báo lỗi hoặc đề xuất tính năng mới, vui lòng liên hệ với đội ngũ phát triển <strong>YT NTConvert</strong> qua các kênh sau:</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a href="#" className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
            <div className="w-12 h-12 rounded-full bg-[#0088cc]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaTelegramPlane className="w-6 h-6 text-[#0088cc]" />
            </div>
            <h3 className="text-white font-bold mb-1">Telegram</h3>
          </a>

          <a href="#" className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
            <div className="w-12 h-12 rounded-full bg-[#1877f2]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FaFacebook className="w-6 h-6 text-[#1877f2]" />
            </div>
            <h3 className="text-white font-bold mb-1">Facebook</h3>
          </a>

          <a href="#" className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
            <div className="w-12 h-12 rounded-full bg-[#0068ff]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <div className="text-[#0068ff] font-bold text-lg">Z</div>
            </div>
            <h3 className="text-white font-bold mb-1">Zalo</h3>
          </a>
        </div>

        <section className="pt-6">
          <h2 className="text-white text-xl font-bold mb-4">Thời gian phản hồi</h2>
          <p>Chúng tôi cố gắng phản hồi mọi yêu cầu của bạn trong vòng 24 giờ làm việc. Cảm ơn bạn đã tin tưởng sử dụng dịch vụ của <strong>YT NTConvert</strong>!</p>
        </section>
      </div>
    </PageLayout>
  )
}
