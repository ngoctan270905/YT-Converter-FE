import { PageLayout } from '../components/layout/PageLayout'

export function PrivacyPage() {
  return (
    <PageLayout 
      title="Chính sách riêng tư" 
      subtitle="Chúng tôi cam kết bảo vệ dữ liệu và sự riêng tư của bạn."
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-white text-xl font-bold mb-3">1. Thu thập dữ liệu</h2>
          <p>YT NTConvert KHÔNG thu thập hoặc lưu trữ bất kỳ thông tin cá nhân nào từ người dùng. Chúng tôi không yêu cầu đăng ký tài khoản hoặc đăng nhập.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-3">2. Lưu trữ video</h2>
          <p>Mọi quá trình xử lý video đều được thực hiện tức thời. Chúng tôi không lưu giữ bản sao của các video bạn đã tải trên máy chủ của mình lâu hơn mức cần thiết để hoàn tất quá trình tải về.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-3">3. Cookies & Quảng cáo</h2>
          <p>Chúng tôi có thể sử dụng cookies để cải thiện trải nghiệm người dùng và phục vụ các quảng cáo không mang tính chất định danh cá nhân.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-3">4. Bảo mật</h2>
          <p>Trang web sử dụng giao thức HTTPS để đảm bảo rằng mọi yêu cầu và phản hồi đều được mã hóa và bảo vệ khỏi sự can thiệp của bên thứ ba.</p>
        </section>
      </div>
    </PageLayout>
  )
}
