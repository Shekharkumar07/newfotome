'use client'

import { useRouter } from 'next/navigation'

const images = [
  { name: 'Sunset Boulevard', file: 'Street View1.jpg' },
  { name: 'Taj Mahal', file: 'Street View2.jpg' },
  { name: 'Ocean Drive', file: 'Street View3.jpg' },
  { name: 'Hilltop View', file: 'Street View4.jpg' },
  { name: 'Old Town Market', file: 'Street View5.jpg' },
  { name: 'City Square', file: 'Street View6.jpg' },
  { name: 'Parkside Lane', file: 'Street View7.jpg' },
  { name: 'Maple Street', file: 'Street View8.jpg' },
  { name: 'Grand Avenue', file: 'Street View9.jpg' },
  { name: 'Riverside Walk', file: 'Street View10.jpg' },
  { name: 'Garden Road', file: 'Street View11.jpg' },
  { name: 'Crystal Bay', file: 'Street View12.jpg' },
  { name: 'Broadway', file: 'Street View13.jpg' },
  // { name: 'Elmwood Lane', file: 'Street View14.jpg' },
  // { name: 'Pinecrest View', file: 'Street View15.jpg' },
  // { name: 'Lakefront Street', file: 'Street View16.jpg' },
  { name: 'Museum Drive', file: 'Street View17.jpg' },
  { name: 'Sunrise Hill', file: 'Street View18.jpg' },
  { name: 'Willow Way', file: 'Street View19.jpg' },
  { name: 'Liberty Street', file: 'Street View20.jpg' },
  { name: 'Stonebridge Path', file: 'Street View21.jpg' },
  { name: 'Heritage Circle', file: 'Street View22.jpg' }
  // Add more as needed
]

export default function HomePage() {
  const router = useRouter()
  const goToVR = (file) => router.push(`/vr?img=${file}`)

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Explore Our 360° Rooms
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img) => (
          <div
            key={img.file}
            onClick={() => goToVR(img.file)}
            className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 bg-white border border-gray-200"
          >
            <div className="relative">
              <img
                src={`/${img.file}`}
                alt={img.name}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 w-full px-4 py-2 text-white font-semibold text-lg bg-black/50 backdrop-blur">
                {img.name}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 mt-16 text-sm">
        Made with ❤️ by <span className="font-medium text-black">Foto Me Studio(Shekhar Kumar)</span>
      </p>
    </div>
  )
}
