import { CustomizableForm } from '@/components/CustomizableForm/CustomizableForm'
import { GeneratedBento } from '@/components/GeneratedBento/GeneratedBento'
import { useBentoStore } from '@/store'
import { useEffect } from 'react'

const Home = () => {
  const bento = useBentoStore((state) => state.bento)
  const setBento = useBentoStore((state) => state.setBento)

  useEffect(() => {
    setBento({})
  }, [setBento])

  return (
    <div id="main">
      <CustomizableForm />
      <div className="mx-auto max-w-7xl py-10">
        <GeneratedBento bento={bento} />
      </div>
    </div>
  )
}

export default Home
