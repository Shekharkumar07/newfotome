'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

// ✅ Dynamically load VRViewer only inside the client component
const VRViewer = dynamic(() => import('./VRViewer'), {
  ssr: false,
  loading: () => <p className="text-white">Loading VR...</p>,
})

export default function VRWrapper({ imageUrl }) {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <div className="relative h-screen w-screen bg-black">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="absolute top-4 left-4 z-50 bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        ← Back
      </button>

      {/* VR Viewer */}
      <VRViewer imageUrl={imageUrl} />
    </div>
  )
}
