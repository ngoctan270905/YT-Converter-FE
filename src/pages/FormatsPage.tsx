import { PageLayout } from '../components/layout/PageLayout'

export function FormatsPage() {
  return (
    <PageLayout 
      title="Định dạng" 
      subtitle="Hỗ trợ đa dạng định dạng cho mọi thiết bị của bạn."
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-white text-xl font-bold mb-4">Định dạng Video (MP4)</h2>
          <p>Chúng tôi cung cấp các tùy chọn MP4 tương thích với tất cả các trình phát video, điện thoại thông minh và máy tính bảng hiện nay:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>4320p (8K) - Ultra HD</li>
            <li>2160p (4K) - Ultra HD</li>
            <li>1440p (2K) - Quad HD</li>
            <li>1080p - Full HD</li>
            <li>720p - HD</li>
            <li>480p, 360p, 240p, 144p</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white text-xl font-bold mb-4">Định dạng Âm thanh (MP3, M4A)</h2>
          <p>Dành cho những ai chỉ muốn nghe nhạc hoặc podcast:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>MP3 320kbps (Chất lượng cao nhất)</li>
            <li>MP3 256kbps</li>
            <li>MP3 128kbps</li>
            <li>M4A / AAC</li>
          </ul>
        </section>
      </div>
    </PageLayout>
  )
}
