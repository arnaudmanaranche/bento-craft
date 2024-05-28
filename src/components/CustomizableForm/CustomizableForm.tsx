import { useBentoStore } from '@/store'
import * as Slider from '@radix-ui/react-slider'

export function CustomizableForm() {
  const columnNumber = useBentoStore((state) => state.columnNumber)
  const rowNumber = useBentoStore((state) => state.rowNumber)
  const setColumnNumber = useBentoStore((state) => state.setColumnNumber)
  const setRowNumber = useBentoStore((state) => state.setRowNumber)
  const isFormLocked = useBentoStore((state) => state.isFormLocked)
  const lockForm = useBentoStore((state) => state.lockForm)
  const gap = useBentoStore((state) => state.gap)
  const setGap = useBentoStore((state) => state.setGap)
  const setBento = useBentoStore((state) => state.setBento)

  return (
    <div className="flex flex-col items-start space-y-4 rounded-md border-[1px] border-orient-400 bg-white p-10">
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
              className="SliderRoot"
              value={[columnNumber]}
              defaultValue={[columnNumber]}
              id="columns"
              onValueChange={(value) => setColumnNumber(value[0])}
              min={3}
              max={8}
              step={1}
            >
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
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
              className="SliderRoot"
              value={[rowNumber]}
              defaultValue={[rowNumber]}
              id="rows"
              onValueChange={(value) => setRowNumber(value[0])}
              min={3}
              max={8}
              step={1}
            >
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
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
              className="SliderRoot"
              value={[gap]}
              defaultValue={[gap]}
              id="rows"
              onValueChange={(value) => setGap(value[0])}
              min={3}
              max={8}
              step={1}
            >
              <Slider.Track className="SliderTrack">
                <Slider.Range className="SliderRange" />
              </Slider.Track>
              <Slider.Thumb className="SliderThumb" aria-label="Volume" />
            </Slider.Root>
          </div>
        </div>
        <div className="flex items-baseline space-x-2">
          <label htmlFor="lock">Lock values</label>
          <input
            onChange={() => {
              lockForm(!isFormLocked)
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
