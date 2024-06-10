import { GeneratedBento } from '@/components/GeneratedBento/GeneratedBento'
import { useBentoStore } from '@/store'
import { renderToStaticMarkup } from 'react-dom/server'
import { toast } from 'sonner'

export function useCopyBentoCode() {
  const bento = useBentoStore((state) => state.bento)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(
        renderToStaticMarkup(<GeneratedBento bento={bento} />)
      )
      toast.info('Copied')
    } catch (err) {
      toast.error('An error occured during the copy of the code')
    }
  }

  return {
    copy,
  }
}
