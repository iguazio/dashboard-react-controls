import type { DateRange } from 'react-day-picker'

import { Calendar } from '@/components/ui/calendar'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { DATE_PLACEHOLDER_DDMMYYYY, HOUR } from '@/constants'
import { cn } from '@/lib/utils'
import { buildHalfHourOptions12h, formatDateDDMMYYYY } from '@/utils/date.utils'

type Props = {
  label: string
  side: 'start' | 'end'
  dateValue?: Date
  range?: DateRange
  hourValue: string
  singleDate?: boolean
  onHourChange: (value: string) => void
  onSelectDate: (selectedDate?: Date) => void
}

export const DateTimePickerPanel = ({
  label,
  side,
  dateValue,
  range,
  hourValue,
  singleDate,
  onHourChange,
  onSelectDate
}: Props) => {
  const hoursOptions = buildHalfHourOptions12h()

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        <div
          className={cn(
            'flex h-10 flex-1 items-center w-[116px] justify-center border border-[#C4C2C8] rounded-md text-center ',
            dateValue ? 'text-igz-primary' : 'text-muted-foreground text-[#C4C2C8] text-[15px]'
          )}
        >
          {dateValue ? formatDateDDMMYYYY(dateValue) : DATE_PLACEHOLDER_DDMMYYYY}
        </div>

        <Select value={hourValue} onValueChange={onHourChange}>
          <SelectTrigger className="w-[110px] h-10 text-[15px] border-[#C4C2C8] [&_svg]:h-3 [&_svg]:w-3 focus:ring-0 data-[placeholder]:text-[#C4C2C8]">
            <SelectValue placeholder={HOUR} />
          </SelectTrigger>

          <SelectContent className="max-h-[200px] w-[var(--radix-select-trigger-width)] min-w-[var(--radix-select-trigger-width)] text-[13px] bg-white [&_svg]:hidden">
            {hoursOptions.map(time => (
              <SelectItem className="h-12 text-[14px]" key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Calendar
        mode="single"
        defaultMonth={dateValue}
        onSelect={onSelectDate}
        className="[--calendar-padding:0rem] border-none"
        classNames={{
          weekday: 'text-[#ADABB0] uppercase font-normal text-[12px] w-full',
          caption_label: 'text-igz-primary font-normal text-[20px]'
        }}
        range={range}
        activeRangeSide={side}
        captionPrefix={label}
        singleDate={singleDate}
      />
    </div>
  )
}
