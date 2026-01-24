'use client'

import { useSearchParams } from 'next/navigation'
import VRWrapper from '../components/VRWrapper'

export default function VRPage() {
  const searchParams = useSearchParams()
  const image = searchParams.get('img') || '20067.jpg'

  return <VRWrapper imageUrl={`/${image}`} />
}
