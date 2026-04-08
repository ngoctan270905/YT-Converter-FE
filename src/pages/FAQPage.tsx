import { PageLayout } from '../components/layout/PageLayout'

export function FAQPage() {
  return (
    <PageLayout 
      title="Câu hỏi thường gặp" 
      subtitle="Giải đáp những thắc mắc phổ biến nhất khi sử dụng dịch vụ."
    >
      <div className="space-y-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-2">Tôi có thể tải video từ YouTube Shorts không?</h3>
          <p>Có, YT NTConvert hoàn toàn hỗ trợ tải video từ YouTube Shorts với chất lượng cao nhất tương tự như video thông thường.</p>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-2">Tại sao một số video 4K không có âm thanh?</h3>
          <p>Một số video YouTube lưu trữ riêng biệt luồng video và âm thanh cho chất lượng cao. YT NTConvert sẽ tự động gộp chúng lại cho bạn trong quá trình xử lý.</p>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-2">Dịch vụ có giới hạn số lượng tải trong ngày không?</h3>
          <p>Hoàn toàn không. Bạn có thể sử dụng YT NTConvert để tải hàng trăm video mỗi ngày mà không bị giới hạn.</p>
        </div>

        <div>
          <h3 className="text-white text-lg font-bold mb-2">Làm thế nào để tải nhạc vào iPhone của tôi?</h3>
          <p>Sau khi tải về máy tính, bạn có thể sử dụng iTunes hoặc ứng dụng Tệp (Files) trên iPhone để đồng bộ nhạc vào máy.</p>
        </div>
      </div>
    </PageLayout>
  )
}
