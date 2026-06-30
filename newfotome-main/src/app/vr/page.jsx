'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import VRWrapper from '../components/VRWrapper'

function VRContent() {
  const searchParams = useSearchParams()
  const image = searchParams.get('img') || '20067.jpg'

  return <VRWrapper imageUrl={`/${image}`} />
}

export default function VRPage() {
  return (
    <Suspense fallback={<div>Loading VR...</div>}>
      <VRContent />
    </Suspense>
  )
}