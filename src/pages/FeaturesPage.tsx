import { PageLayout } from '../components/layout/PageLayout'

export function FeaturesPage() {
  return (
    <PageLayout 
      title="Tính năng" 
      subtitle="Khám phá sức mạnh của YT NTConvert - Công cụ tải video hàng đầu."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-white text-xl font-bold mb-4">Tải xuống 4K & 8K Siêu Nét</h2>
          <p>YT NTConvert hỗ trợ tải xuống các video với độ phân giải cao nhất hiện có trên YouTube, bao gồm 4K và 8K, đảm bảo bạn có trải nghiệm xem phim offline tuyệt vời nhất.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-4">Chuyển đổi MP3 Chất lượng cao</h2>
          <p>Dễ dàng trích xuất âm thanh từ bất kỳ video nào và lưu dưới dạng MP3 với tốc độ bit lên đến 320kbps. Hoàn hảo cho bộ sưu tập nhạc của bạn.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-4">Xử lý đám mây Siêu tốc</h2>
          <p>Hệ thống máy chủ của chúng tôi thực hiện việc phân tích và chuẩn bị file trong tích tắc, giúp bạn tiết kiệm thời gian chờ đợi tối đa.</p>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-4">Không giới hạn & Miễn phí</h2>
          <p>Bạn có thể tải bao nhiêu video tùy thích mà không mất một xu nào. Không cần tài khoản, không cần đăng ký.</p>
        </section>
      </div>
    </PageLayout>
  )
}
