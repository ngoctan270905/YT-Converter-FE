import { useEffect, useState } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { mediaService, type ConvertRequest } from '../../api/media'

export function HeroSection() {
  const [urlInput, setUrlInput] = useState('')
  const [submittedUrl, setSubmittedUrl] = useState('')
  const [activeTab, setActiveTab] = useState<'mp4' | 'mp3' | 'webm'>('mp4')
  const [selectedQuality, setSelectedQuality] = useState<string>('')
  const [selectedQualityLabel, setSelectedQualityLabel] = useState<string>('')

  // Logic tiến trình tải xuống
  const [downloadProgress, setDownloadProgress] = useState(0)
  const [taskId, setTaskId] = useState<string | null>(null)
  const [isPolling, setIsPolling] = useState(false)

  // 1. Lấy thông tin Media
  const { data, isLoading: isInfoLoading, isError, error } = useQuery({
    queryKey: ['mediaInfo', submittedUrl],
    queryFn: () => mediaService.getMediaInfo(submittedUrl),
    enabled: !!submittedUrl,
    retry: 1,
    staleTime: 1000 * 60 * 5,
  })

  // 2. Chuyển đổi và Tải xuống
  const mutation = useMutation({
    mutationFn: (payload: ConvertRequest) => mediaService.convertMedia(payload),
    onSuccess: async (res) => {
      setTaskId(res.task_id)
      setIsPolling(true)
    },
    onError: () => {
      alert('Đã xảy ra lỗi khi chuyển đổi. Vui lòng thử lại!')
    }
  })

  // 3. Polling task status
  const taskStatusQuery = useQuery({
    queryKey: ['taskStatus', taskId],
    queryFn: () => mediaService.getTaskStatus(taskId!),
    enabled: !!taskId && isPolling,
    refetchInterval: 2000,
  })

  useEffect(() => {
    const taskStatus = taskStatusQuery.data

    if (!taskStatus) return

    console.log('Task Status Response:', taskStatus)
    console.log('Setting progress to:', taskStatus.progress)
    setDownloadProgress(taskStatus.progress)

    if (taskStatus.status === 'success' && taskStatus.result) {
      setDownloadProgress(100)
      setIsPolling(false)
      console.log('Task completed successfully, starting download...')
      const result = taskStatus.result

      try {
        mediaService.downloadMedia(taskStatus.task_id)
          .then(blob => {
             console.log('BLOB TYPE:', blob?.type)
             console.log('BLOB SIZE:', blob?.size)
            const url = window.URL.createObjectURL(blob)
            const link = document.createElement('a')
            link.href = url
            link.setAttribute('download', result.file_name)
            document.body.appendChild(link)
            link.click()
            link.remove()
            window.URL.revokeObjectURL(url)
            console.log('Download completed')
          })
          .catch(err => {
            console.error('Lỗi khi tải xuống (Blob):', err)
            alert('Có lỗi khi tải file trực tiếp, hệ thống sẽ mở file trong tab mới để bạn tải xuống.')
            window.open(result.download_url, '_blank')
          })
      } catch (err) {
        console.error('Lỗi khi tải xuống:', err)
        window.open(result.download_url, '_blank')
      }

      window.setTimeout(() => {
        setTaskId(null)
        setDownloadProgress(0)
      }, 1500)
      return
    }

    if (taskStatus.status === 'failed' || taskStatus.error) {
      console.error('Task failed:', taskStatus.error || 'Unknown error')
      alert('Đã xảy ra lỗi khi chuyển đổi: ' + (taskStatus.error || 'Unknown error'))
      setTaskId(null)
      setIsPolling(false)
      setDownloadProgress(0)
    }
  }, [taskStatusQuery.data])

  useEffect(() => {
    if (!taskStatusQuery.isError) return

    alert('Không thể kiểm tra trạng thái task')
    setTaskId(null)
    setIsPolling(false)
    setDownloadProgress(0)
  }, [taskStatusQuery.isError])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (urlInput.trim()) {
      setSubmittedUrl(urlInput.trim())
      setSelectedQuality('')
    }
  }

  const handleTabChange = (tab: 'mp4' | 'mp3' | 'webm') => {
    setActiveTab(tab)
    setSelectedQuality('')
  }

  const handleDownload = () => {
    if (!data || !selectedQuality || mutation.isPending || taskId) return

    // Gọi API Convert
    mutation.mutate({
      url: data.url,
      format: activeTab,
      quality: selectedQuality
    })
  }

  // Format Helpers
  const formatViews = (views: number) => {
    if (views >= 1000000) return (views / 1000000).toFixed(1) + 'M'
    if (views >= 1000) return (views / 1000).toFixed(1) + 'K'
    return views.toString()
  }

  const formatDate = (dateStr: string) => {
    if (!dateStr || dateStr.length !== 8) return dateStr
    const year = dateStr.substring(0, 4)
    const month = dateStr.substring(4, 6)
    const day = dateStr.substring(6, 8)
    return `${day}/${month}/${year}`
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-start pt-20 pb-16 px-4 md:px-8 relative z-10">
      {/* Badge */}

      {/* Headline */}
      <div className="animate-slide-up opacity-0 text-center mb-4" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
        <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] tracking-tight text-white">
          Tải video
          <span className="text-glow" style={{
            background: 'linear-gradient(135deg, #f87171 0%, #ef5350 40%, #e53935 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}> YouTube</span><br />
          <span className="text-white/90">cực nhanh.</span>
        </h1>
      </div>

      <div className="animate-slide-up opacity-0 text-center mb-12" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
        <p className="text-white/60 text-lg max-w-md font-body">
          Hỗ trợ MP4, MP3, WebM — chất lượng lên đến 4K. Không cài đặt, không đăng ký.
        </p>
      </div>

      {/* Search Box */}
      <form onSubmit={handleSearch} className="animate-slide-up opacity-0 w-full max-w-2xl mb-6" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
        <div className="relative glow-red rounded-2xl">
          <div className="flex items-center bg-dark-700 border border-white/15 rounded-2xl overflow-hidden pr-2">
            <div className="pl-4 pr-3 flex-shrink-0">
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path d="M21.45 2.5A2.76 2.76 0 0 0 19.52.55C17.82 0 11 0 11 0S4.18 0 2.48.55A2.76 2.76 0 0 0 .55 2.5 29 29 0 0 0 0 8a29 29 0 0 0 .55 5.5A2.76 2.76 0 0 0 2.48 15.45C4.18 16 11 16 11 16s6.82 0 8.52-.55a2.76 2.76 0 0 0 1.93-1.95A29 29 0 0 0 22 8a29 29 0 0 0-.55-5.5z" fill="#FF0000" />
                <path d="M8.73 11.45L14.55 8 8.73 4.55v6.9z" fill="white" />
              </svg>
            </div>
            <input
              type="text"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="Dán URL YouTube vào đây..."
              className="flex-1 bg-transparent py-4 text-white placeholder-white/40 text-sm input-focus focus:outline-none font-body"
            />
            <button
              type="submit"
              disabled={isInfoLoading}
              className="btn-primary flex-shrink-0 font-display font-semibold text-xs text-white px-5 py-2.5 rounded-xl disabled:opacity-50"
            >
              {isInfoLoading ? 'Đang phân tích...' : 'Phân tích'}
            </button>
          </div>
        </div>
      </form>

      {isError && (
        <div className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm font-body animate-fade-in">
          {(error as Error).message}
        </div>
      )}

      {data && (
        <div className="animate-slide-up w-full max-w-2xl mb-16">
          <div className="grid grid-cols-3 gap-3">
            <div
              onClick={() => handleTabChange('mp4')}
              className={`format-card rounded-xl p-4 flex flex-col items-center gap-2 ${activeTab === 'mp4' ? 'active' : ''}`}
            >
              <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M15 10l4.553-2.277A1 1 0 0 1 21 8.618v6.764a1 1 0 0 1-1.447.894L15 14M3 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-display font-semibold text-sm text-white">MP4</span>
              <span className="text-white/60 text-xs font-body">Video + Audio</span>
            </div>

            <div
              onClick={() => handleTabChange('mp3')}
              className={`format-card rounded-xl p-4 flex flex-col items-center gap-2 ${activeTab === 'mp3' ? 'active' : ''}`}
            >
              <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M9 19V6l12-3v13M9 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm12 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-display font-semibold text-sm text-white">MP3</span>
              <span className="text-white/60 text-xs font-body">Chỉ âm thanh</span>
            </div>

            <div
              onClick={() => handleTabChange('webm')}
              className={`format-card rounded-xl p-4 flex flex-col items-center gap-2 ${activeTab === 'webm' ? 'active' : ''}`}
            >
              <div className="w-10 h-10 rounded-lg feature-icon flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0 0 10 9.87v4.263a1 1 0 0 0 1.555.832l3.197-2.132a1 1 0 0 0 0-1.664z" stroke="#f87171" strokeWidth="1.5" />
                  <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" stroke="#f87171" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="font-display font-semibold text-sm text-white">WebM</span>
              <span className="text-white/60 text-xs font-body">Web format</span>
            </div>
          </div>
        </div>
      )}

      {data && (
        <div className="animate-slide-up w-full max-w-2xl mb-16">
          <div className="bg-dark-700/60 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <div className="w-2 h-2 rounded-full bg-brand-500/80"></div>
              <span className="text-white/50 text-xs flex-1 font-body">Kết quả - Thông tin video</span>
            </div>

            <div className="flex flex-col md:flex-row gap-5 p-5">
              <div className="thumbnail-wrapper flex-shrink-0 w-full md:w-48 h-32 bg-dark-600 relative group overflow-hidden rounded-xl">
                <img src={data.thumbnail} alt={data.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute bottom-2 right-2 z-10 bg-black/70 text-white px-1.5 py-0.5 rounded text-[10px] font-bold font-body">{data.duration_text}</div>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="font-display font-semibold text-base text-white leading-snug mb-1.5 line-clamp-2">{data.title}</h2>
                <div className="text-white/50 text-xs mb-4 font-medium font-body flex flex-wrap gap-x-3">
                  <span>{data.author}</span>
                  <span>•</span>
                  <span>{formatViews(data.views)} lượt xem</span>
                  <span>•</span>
                  <span>{formatDate(data.upload_date)}</span>
                </div>

                <div className="flex items-center gap-2 flex-wrap font-body">
                  <span className="text-white/50 text-xs w-full mb-1">Chọn chất lượng:</span>
                  {activeTab === 'mp4' && data.video_formats.map((f) => (
                    <button
                      key={f.format_id}
                      onClick={() => {
                        setSelectedQuality(f.quality)
                        setSelectedQualityLabel(f.quality)
                      }}
                      className={`quality-btn text-xs px-3 py-1.5 rounded-lg transition-all ${selectedQuality === f.quality
                        ? 'active text-brand-400 font-bold border-brand-400 bg-brand-500/10'
                        : 'text-white/70'
                        }`}
                    >
                      {f.quality}
                    </button>
                  ))}
                  {activeTab === 'webm' && data.webm_formats.map((f) => (
                    <button
                      key={f.format_id}
                      onClick={() => {
                        setSelectedQuality(f.quality)
                        setSelectedQualityLabel(f.quality)
                      }}
                      className={`quality-btn text-xs px-3 py-1.5 rounded-lg transition-all ${selectedQuality === f.quality
                        ? 'active text-brand-400 font-bold border-brand-400 bg-brand-500/10'
                        : 'text-white/70'
                        }`}
                    >
                      {f.quality}
                    </button>
                  ))}
                  {activeTab === 'mp3' && data.audio_formats.map((f) => (
                    <button 
                      key={f.bitrate} 
                      onClick={() => {
                        const q = `${f.bitrate}k`
                        setSelectedQuality(q)
                        setSelectedQualityLabel(`${f.bitrate}kbps`)
                      }} 
                      className={`quality-btn text-xs px-3 py-1.5 rounded-lg transition-all ${selectedQuality === `${f.bitrate}k` 
                        ? 'active text-brand-400 font-bold border-brand-400 bg-brand-500/10' 
                        : 'text-white/70'
                      }`}
                    >
                      {f.bitrate}kbps
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-5 pb-5">
              <button
                disabled={!selectedQuality || mutation.isPending || !!taskId}
                onClick={handleDownload}
                className="btn-primary w-full font-display font-semibold text-sm py-3.5 rounded-xl flex items-center justify-center gap-2 text-white disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {(mutation.isPending || !!taskId) ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Đang chuyển đổi sang {activeTab.toUpperCase()}... {Math.round(downloadProgress)}%
                  </>
                ) : (
                  <>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {selectedQuality
                      ? `Tải xuống ${activeTab.toUpperCase()} · ${selectedQualityLabel}`
                      : 'Vui lòng chọn chất lượng'}
                  </>
                )}
              </button>
            </div>

            <div className="h-1 bg-dark-500 relative overflow-hidden">
              <div
                className="progress-bar absolute h-full transition-all duration-300 ease-out"
                style={{ width: `${downloadProgress}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
