import { format, parse } from 'date-fns'

export const formatDateDDMMYYYY = (d: Date) =>
  new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  }).format(d)

export const buildHalfHourOptions12h = () =>
  Array.from({ length: 48 }, (_, i) =>
    format(new Date(2000, 0, 1, Math.floor(i / 2), (i % 2) * 30), 'h:mm a')
  )

export const toLocalISO = (d: Date): string => d.toISOString()

export const applyHourToDate = (date: Date, hour: string, defaultHour?: string): Date => {
  const effectiveHour = hour || defaultHour
  if (!effectiveHour) return date
  const parsed = parse(effectiveHour, 'h:mm a', date)
  return Number.isNaN(parsed.getTime()) ? date : parsed
}

export const isoToLocalDate = (iso: string): Date | undefined => {
  if (!iso) return undefined
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return undefined
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export const isoToHour = (iso: string): string => {
  if (!iso) return ''
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return ''
  return format(new Date(2000, 0, 1, d.getHours(), d.getMinutes()), 'h:mm a')
}

const SHORT_DATE_FORMAT: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' }

export const formatCustomRangeLabel = (since: string, until?: string): string => {
  const from = isoToLocalDate(since)
  if (!from) return ''

  const fromStr = from.toLocaleDateString('en-US', SHORT_DATE_FORMAT)

  if (!until) return fromStr

  const to = isoToLocalDate(until)
  if (!to) return fromStr

  return `${fromStr} - ${to.toLocaleDateString('en-US', SHORT_DATE_FORMAT)}`
}
