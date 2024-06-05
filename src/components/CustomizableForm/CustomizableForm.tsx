import { useBentoStore } from '@/store'
import * as Dialog from '@radix-ui/react-dialog'
import {
  Cross2Icon,
  ExternalLinkIcon,
  MoonIcon,
  SunIcon,
} from '@radix-ui/react-icons'
import * as Slider from '@radix-ui/react-slider'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Toaster, toast } from 'sonner'

export function CustomizableForm() {
  const columnNumber = useBentoStore((state) => state.columnNumber)
  const rowNumber = useBentoStore((state) => state.rowNumber)
  const setColumnNumber = useBentoStore((state) => state.setColumnNumber)
  const setRowNumber = useBentoStore((state) => state.setRowNumber)
  const gap = useBentoStore((state) => state.gap)
  const setGap = useBentoStore((state) => state.setGap)
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Dialog.Root>
      <div className="flex flex-col items-start shadow-sm dark:shadow-[#2d2d34]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <button
                className="flex w-full items-center border-b-0 p-8 dark:border-b-2 dark:border-b-[#2d2d34] dark:bg-[#111111]"
                onClick={() => {
                  setTheme('dark')
                }}
              >
                <MoonIcon />
              </button>
              <button
                className="flex w-full items-center border-b-2 p-8 dark:border-b-0 dark:bg-[#111111]"
                onClick={() => {
                  setTheme('light')
                }}
              >
                <SunIcon />
              </button>
            </div>
            <form className="p- flex flex-col items-start">
              <div className="flex items-center space-x-6">
                <div className="flex flex-col space-y-5">
                  <div className="flex justify-between">
                    <label
                      htmlFor="columns"
                      className="text-[#111111] dark:text-[#f9fafb]"
                    >
                      Columns
                    </label>
                    <span>{columnNumber}</span>
                  </div>
                  <Slider.Root
                    className="relative flex w-[200px] touch-none select-none items-center"
                    value={[columnNumber]}
                    defaultValue={[columnNumber]}
                    id="columns"
                    onValueChange={(value) => setColumnNumber(value[0])}
                    min={3}
                    max={6}
                    step={1}
                  >
                    <Slider.Track className="dark-bg[#d4d4d4cc] relative h-[3px] flex-grow rounded-full bg-slate-200">
                      <Slider.Range className="absolute h-full rounded-full bg-[#111111] dark:bg-[#f9fafb]" />
                    </Slider.Track>
                    <Slider.Thumb className="block h-4 w-4 rounded-[10px] bg-[#111111] dark:bg-[#f9fafb]" />
                  </Slider.Root>
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="flex justify-between">
                    <label
                      htmlFor="rows"
                      className="text-[#111111] dark:text-[#f9fafb]"
                    >
                      Rows
                    </label>
                    <span>{rowNumber}</span>
                  </div>
                  <Slider.Root
                    className="relative flex w-[200px] touch-none select-none items-center"
                    value={[rowNumber]}
                    defaultValue={[rowNumber]}
                    id="rows"
                    onValueChange={(value) => setRowNumber(value[0])}
                    min={3}
                    max={6}
                    step={1}
                  >
                    <Slider.Track className="dark-bg[#d4d4d4cc] relative h-[3px] flex-grow rounded-full bg-slate-200">
                      <Slider.Range className="absolute h-full rounded-full bg-[#111111] dark:bg-[#f9fafb]" />
                    </Slider.Track>
                    <Slider.Thumb className="block h-4 w-4 rounded-[10px] bg-[#111111] dark:bg-[#f9fafb]" />
                  </Slider.Root>
                </div>
                <div className="flex flex-col space-y-5">
                  <div className="flex justify-between">
                    <label
                      htmlFor="rows"
                      className="text-[#111111] dark:text-[#f9fafb]"
                    >
                      Gap
                    </label>
                    <span>{gap}</span>
                  </div>
                  <Slider.Root
                    className="relative flex w-[200px] touch-none select-none items-center"
                    value={[gap]}
                    defaultValue={[gap]}
                    id="rows"
                    onValueChange={(value) => setGap(value[0])}
                    min={2}
                    max={8}
                    step={2}
                  >
                    <Slider.Track className="dark-bg[#d4d4d4cc] relative h-[3px] flex-grow rounded-full bg-slate-200">
                      <Slider.Range className="absolute h-full rounded-full bg-[#111111] dark:bg-[#f9fafb]" />
                    </Slider.Track>
                    <Slider.Thumb className="block h-4 w-4 rounded-[10px] bg-[#111111] dark:bg-[#f9fafb]" />
                  </Slider.Root>
                </div>
              </div>
            </form>
          </div>
          <Dialog.Trigger asChild>
            <button className="mr-4 flex items-center rounded-full bg-black/80 p-4 font-bold text-white hover:bg-black/90 dark:bg-white dark:text-black/80">
              Export
              <ExternalLinkIcon className="ml-2" />
            </button>
          </Dialog.Trigger>
        </div>
      </div>
      <Dialog.Portal>
        <Toaster />
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-black/60" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="my-4 text-lg text-[#111111]">
            Export your bento
          </Dialog.Title>
          <div className="flex flex-col items-center space-y-2">
            <button
              className="flex w-full justify-center rounded-full bg-black/80 p-4 font-bold text-white"
              onClick={() => toast.info('Coming soon..')}
            >
              As code
            </button>
            <button
              className="flex w-full flex-grow cursor-not-allowed justify-center rounded-full bg-black/40 p-4 font-bold text-white"
              onClick={() => toast.info('Coming soon..')}
            >
              As image
            </button>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
