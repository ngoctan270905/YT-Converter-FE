import { PageLayout } from '../components/layout/PageLayout'

export function TermsPage() {
  return (
    <PageLayout 
      title="Điều khoản dịch vụ" 
      subtitle="Các quy định khi sử dụng công cụ của chúng tôi."
    >
      <div className="space-y-6">
        <p>Bằng cách sử dụng YT NTConvert, bạn đồng ý tuân thủ các điều khoản sau đây:</p>
        
        <section>
          <h2 className="text-white text-xl font-bold mb-3">1. Mục đích sử dụng</h2>
          <p>Dịch vụ của chúng tôi chỉ dành cho mục đích sử dụng cá nhân, không thương mại. Người dùng chịu trách nhiệm về nội dung họ tải xuống.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-3">2. Bản quyền nội dung</h2>
          <p>Người dùng phải tôn trọng quyền sở hữu trí tuệ và bản quyền của các tác giả trên YouTube. Không sử dụng công cụ để vi phạm bản quyền hoặc phân phối nội dung trái phép.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-3">3. Miễn trừ trách nhiệm</h2>
          <p>Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại nào phát sinh từ việc sử dụng sai mục đích công cụ này hoặc các vấn đề pháp lý mà người dùng gặp phải.</p>
        </section>

        <p className="pt-4 border-t border-white/5 italic">Cập nhật lần cuối: 08/04/2026</p>
      </div>
    </PageLayout>
  )
}
