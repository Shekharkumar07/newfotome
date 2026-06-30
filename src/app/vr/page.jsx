import VRWrapper from '../components/VRWrapper'

export default async function VRPage({ searchParams }) {
  const params = await searchParams
  const image = params?.img || '20067.jpg'

  return <VRWrapper imageUrl={`/${image}`} />
}
