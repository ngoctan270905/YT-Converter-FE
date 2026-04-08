import axios from 'axios'

// --- INTERFACES ---
export interface VideoFormat {
  format_id: string
  quality: string
  ext: string
}

export interface AudioFormat {
  bitrate: number
  ext: string
}

export interface MediaData {
  title: string
  thumbnail: string
  duration: number
  duration_text: string
  author: string
  views: number
  upload_date: string
  url: string
  video_formats: VideoFormat[]
  webm_formats: VideoFormat[]
  audio_formats: AudioFormat[]
}

export interface MediaResponse {
  success: boolean
  message: string
  data: MediaData
}

// --- AXIOS INSTANCE ---
const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/v1',
  timeout: 30000,
})

export interface ConvertRequest {
  url: string
  format: string
  quality: string
}

export interface ConvertData {
  file_path: string
  file_name: string
  file_size: number
  download_url: string
}

export interface ConvertResponse {
  success: boolean
  message: string
  data: ConvertData
}

// --- SERVICES ---
export const mediaService = {
  getMediaInfo: async (url: string): Promise<MediaData> => {
    const response = await api.get<MediaResponse>(`/media/info`, {
      params: { url }
    })
    
    if (!response.data.success) {
      throw new Error(response.data.message || 'Không thể lấy thông tin video')
    }
    
    return response.data.data
  },

  convertMedia: async (payload: ConvertRequest): Promise<ConvertData> => {
    const response = await api.post<ConvertResponse>(`/media/convert`, payload)
    
    if (!response.data.success) {
      throw new Error(response.data.message || 'Chuyển đổi thất bại')
    }
    
    return response.data.data
  }
}
