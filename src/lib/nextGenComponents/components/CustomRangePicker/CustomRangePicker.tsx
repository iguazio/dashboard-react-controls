import { useState } from 'react'
import type { DateRange } from 'react-day-picker'

import { DateTimePickerPanel } from '@/components/CustomRangePicker/DateTimePickerPanel'
import { Button } from '@/components/ui/button'
import { DEFAULT_SINCE_HOUR, DEFAULT_UNTIL_HOUR, FILTER_BUTTON_APPLY, RESET } from '@/constants'
import type { CustomDateRange } from '@/types/table/timeFilter'
import { applyHourToDate, isoToHour, isoToLocalDate, toLocalISO } from '@/utils/date.utils'

type Props = {
  onApply?: (range: CustomDateRange) => void
  singleDate?: boolean
  onReset?: () => void
  initialRange?: CustomDateRange
}

const INITIAL_RANGE: DateRange = { from: undefined, to: undefined }
const INITIAL_HOURS = { from: '', to: '' }

const CustomRangePicker = ({ onApply, singleDate = false, onReset, initialRange }: Props) => {
  const [date, setDate] = useState<DateRange>({
    from: isoToLocalDate(initialRange?.since ?? ''),
    to: isoToLocalDate(initialRange?.until ?? '')
  })
  const [hours, setHours] = useState<{ from: string; to: string }>({
    from: isoToHour(initialRange?.since ?? ''),
    to: isoToHour(initialRange?.until ?? '')
  })

  const handleReset = () => {
    setDate(INITIAL_RANGE)
    setHours(INITIAL_HOURS)
    onReset?.()
  }

  const handleSelectDateFrom = (selectedDate?: Date) =>
    setDate(prev => ({ from: selectedDate, to: prev?.to }))

  const handleSelectDateTo = (selectedDate?: Date) =>
    setDate(prev => ({ from: prev?.from, to: selectedDate }))

  const handleFromHourChange = (hour: string) => {
    setHours(prev => ({ ...prev, from: hour }))
  }

  const handleToHourChange = (hour: string) => {
    setHours(prev => ({ ...prev, to: hour }))
  }

  const hasNoDateSelected = !date.from && !date.to
  const isApplyDisabled = singleDate ? !date.from : !date.from || !date.to

  const handleApply = () => {
    if (!date.from) return

    const since = applyHourToDate(date.from, hours.from, DEFAULT_SINCE_HOUR)

    if (singleDate) {
      onApply?.({ since: toLocalISO(since), until: '' })
      return
    }

    if (!date.to) return
    const until = applyHourToDate(date.to, hours.to, DEFAULT_UNTIL_HOUR)

    onApply?.({ since: toLocalISO(since), until: toLocalISO(until) })
  }

  return (
    <div className="flex flex-col gap-6 bg-white p-6 w-fit">
      <div className={singleDate ? '' : 'grid grid-cols-2 gap-8'}>
        <DateTimePickerPanel
          label={singleDate ? '' : 'From:'}
          side="start"
          dateValue={date?.from}
          range={date}
          hourValue={hours.from}
          singleDate={singleDate}
          onHourChange={handleFromHourChange}
          onSelectDate={handleSelectDateFrom}
        />

        {!singleDate && (
          <DateTimePickerPanel
            label="To:"
            side="end"
            dateValue={date?.to}
            range={date}
            hourValue={hours.to}
            onHourChange={handleToHourChange}
            onSelectDate={handleSelectDateTo}
          />
        )}
      </div>

      <div className="flex justify-end gap-3 pt-4">
        <Button
          variant="secondary"
          className="px-6 py-2 bg-white w-[90px] border-[1.5px] border-igz-gray text-[#4B4760] rounded-md hover:bg-[#483F561F]"
          data-testid="custom-date-reset-btn"
          onClick={handleReset}
          disabled={hasNoDateSelected}
        >
          {RESET}
        </Button>
        <Button
          className="px-6 py-2 bg-igz-light-purple w-[90px] text-white hover:bg-igz-dark-purple rounded-md"
          data-testid="custom-date-apply-btn"
          onClick={handleApply}
          disabled={isApplyDisabled}
        >
          {FILTER_BUTTON_APPLY}
        </Button>
      </div>
    </div>
  )
}

export default CustomRangePicker
