import { useBentoStore } from '@/store'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import * as Slider from '@radix-ui/react-slider'
import { useTheme } from 'next-themes'

export function CustomizableForm() {
  const columnNumber = useBentoStore((state) => state.columnNumber)
  const rowNumber = useBentoStore((state) => state.rowNumber)
  const setColumnNumber = useBentoStore((state) => state.setColumnNumber)
  const setRowNumber = useBentoStore((state) => state.setRowNumber)
  const isFormFreezed = useBentoStore((state) => state.isFormFreezed)
  const freezeForm = useBentoStore((state) => state.freezeForm)
  const gap = useBentoStore((state) => state.gap)
  const setGap = useBentoStore((state) => state.setGap)
  const setBento = useBentoStore((state) => state.setBento)
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col items-start space-y-4 border-b-2 p-10">
      <div className="flex items-center space-x-2">
        <div>Mode:</div>
        <button
          className="flex items-center space-x-2"
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}
        >
          {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>
      </div>
      <form className="flex flex-col items-start space-y-4">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <label htmlFor="columns" className="font-semibold">
                Number of columns
              </label>
              <span>{columnNumber}</span>
            </div>
            <Slider.Root
              className="relative flex h-5 w-[200px] touch-none select-none items-center"
              value={[columnNumber]}
              defaultValue={[columnNumber]}
              id="columns"
              onValueChange={(value) => setColumnNumber(value[0])}
              min={3}
              max={8}
              step={1}
            >
              <Slider.Track className="relative h-[3px] flex-grow rounded-full bg-[#0D0D0D] dark:bg-white">
                <Slider.Range className="absolute h-full rounded-full" />
              </Slider.Track>
              <Slider.Thumb
                className="block h-5 w-5 rounded-[10px] bg-[white] shadow-[0_2px_10px_var(--black-a7)] hover:bg-[color:var(--violet-3)] focus:shadow-[0_0_0_5px_var(--black-a8)]"
                aria-label="Volume"
              />
            </Slider.Root>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <label htmlFor="rows" className="font-semibold">
                Number of rows
              </label>
              <span>{rowNumber}</span>
            </div>
            <Slider.Root
              className="relative flex h-5 w-[200px] touch-none select-none items-center"
              value={[rowNumber]}
              defaultValue={[rowNumber]}
              id="rows"
              onValueChange={(value) => setRowNumber(value[0])}
              min={3}
              max={8}
              step={1}
            >
              <Slider.Track className="relative h-[3px] flex-grow rounded-full bg-[#0D0D0D] dark:bg-white">
                <Slider.Range className="absolute h-full rounded-full" />
              </Slider.Track>
              <Slider.Thumb
                className="block h-5 w-5 rounded-[10px] bg-[white] shadow-[0_2px_10px_var(--black-a7)] hover:bg-[color:var(--violet-3)] focus:shadow-[0_0_0_5px_var(--black-a8)]"
                aria-label="Volume"
              />
            </Slider.Root>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex justify-between">
              <label htmlFor="rows" className="font-semibold">
                Gap
              </label>
              <span>{gap}</span>
            </div>
            <Slider.Root
              className="relative flex h-5 w-[200px] touch-none select-none items-center"
              value={[gap]}
              defaultValue={[gap]}
              id="rows"
              onValueChange={(value) => setGap(value[0])}
              min={3}
              max={8}
              step={1}
            >
              <Slider.Track className="relative h-[3px] flex-grow rounded-full bg-[#0D0D0D] dark:bg-white">
                <Slider.Range className="absolute h-full rounded-full" />
              </Slider.Track>
              <Slider.Thumb
                className="block h-5 w-5 rounded-full bg-white shadow-[0_2px_10px_var(--black-a7)] hover:bg-[color:var(--violet-3)] focus:shadow-[0_0_0_5px_var(--black-a8)] dark:hover:bg-[#0D0D0D]"
                aria-label="Volume"
              />
            </Slider.Root>
          </div>
        </div>
        <div className="flex items-baseline space-x-2">
          <label htmlFor="lock">Lock values</label>
          <input
            onChange={() => {
              freezeForm(!isFormFreezed)
            }}
            type="checkbox"
            id="lock"
          />
        </div>
      </form>
      <div className="flex w-full justify-end">
        <button
          className="rounded-md border-2 border-transparent bg-orient-900 p-6 uppercase text-white transition-all hover:border-white hover:bg-orient-700"
          onClick={() => {
            setBento({})
          }}
        >
          Generate
        </button>
      </div>
    </div>
  )
}
