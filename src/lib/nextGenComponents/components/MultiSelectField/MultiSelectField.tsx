import { useState } from 'react'

import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import type { DraftValues } from '@/stores/tableStore'
import type { FilterFieldDef } from '@/types/table/filter'

// ── Constants ─────────────────────────────────────────────────────────────────

const MAX_INLINE_LABELS = 2

// ── SelectArrow ───────────────────────────────────────────────────────────────

/**
 * Downward-pointing triangle that matches the icon used by TimeFilterDropdown
 * (mirrors select.svg from assets).
 */
export const SelectArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="13"
    height="6"
    viewBox="0 0 13 6"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M6.0625 6L0.000322908 -1.05734e-06L12.1247 -7.59139e-08L6.0625 6Z"
      fill="var(--igz-secondary, #7F7989)"
    />
  </svg>
)

export type MultiSelectFieldProps = {
  filterField: FilterFieldDef
  value: DraftValues[string]
  setFilterDraft: (draft: DraftValues | ((prev: DraftValues) => DraftValues)) => void
}
const MultiSelectField = ({ filterField, value, setFilterDraft }: MultiSelectFieldProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const currentValues: string[] = Array.isArray(value) ? value : []
  const options = filterField.options ?? []
  const allOptionValues = options.map(o => o.value)
  const isAllSelected =
    allOptionValues.length > 0 && allOptionValues.every(v => currentValues.includes(v))

  const selectedLabels = options
    .filter(o => currentValues.includes(o.value))
    .map(o => o.label)

  const triggerText =
    currentValues.length === 0
      ? filterField.placeholder ?? 'Select...'
      : selectedLabels.length <= MAX_INLINE_LABELS
        ? selectedLabels.join(', ')
        : `${selectedLabels.length} items selected`

  const handleToggleAll = () => {
    setFilterDraft(prev => ({
      ...prev,
      [filterField.key]: isAllSelected ? [] : [...allOptionValues]
    }))
  }

  const handleToggle = (optValue: string) => {
    setFilterDraft(prev => {
      const prevValues = Array.isArray(prev[filterField.key])
        ? (prev[filterField.key] as string[])
        : []
      const next = prevValues.includes(optValue)
        ? prevValues.filter(v => v !== optValue)
        : [...prevValues, optValue]
      return { ...prev, [filterField.key]: next }
    })
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        style={{
          height: 40,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
          paddingLeft: 12,
          paddingRight: 12,
          borderRadius: 6,
          border: '1px solid var(--igz-gray, #C4C2C8)',
          background: 'white',
          fontSize: 15,
          color: currentValues.length === 0
            ? 'var(--igz-gray, #C4C2C8)'
            : 'var(--igz-primary, #4B4760)',
          cursor: 'pointer',
          outline: 'none'
        }}
        data-testid={`filter-popover-multiselect-${filterField.key}`}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {triggerText}
        </span>
        <SelectArrow />
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="start"
        sideOffset={4}
        style={{
          width: 'var(--radix-dropdown-menu-trigger-width)',
          color: 'var(--igz-primary, #4B4760)'
        }}
        data-testid={`filter-popover-multiselect-content-${filterField.key}`}
      >
        {/* "All" toggle */}
        <DropdownMenuItem
          className="flex items-center gap-3 text-[15px] h-[42px] px-4 data-[highlighted]:bg-igz-accent-hover cursor-pointer"
          onSelect={e => {
            e.preventDefault()
            handleToggleAll()
          }}
          data-testid={`filter-popover-multiselect-${filterField.key}-all`}
        >
          <Checkbox
            checked={isAllSelected}
            className="shrink-0"
            onClick={e => e.stopPropagation()}
            onCheckedChange={handleToggleAll}
          />
          <span>All</span>
        </DropdownMenuItem>

        {options.map(option => {
          const isChecked = currentValues.includes(option.value)
          const color = option.meta?.color as string | undefined

          return (
            <DropdownMenuItem
              key={option.value || 'empty'}
              className="flex items-center gap-3 text-[15px] h-[42px] px-4 data-[highlighted]:bg-igz-accent-hover cursor-pointer"
              onSelect={e => {
                e.preventDefault()
                handleToggle(option.value)
              }}
              data-testid={`filter-popover-multiselect-${filterField.key}-${option.value}`}
            >
              <Checkbox
                checked={isChecked}
                className="shrink-0"
                onClick={e => e.stopPropagation()}
                onCheckedChange={() => handleToggle(option.value)}
              />
              {/* Label + dot grouped together so the dot sits right after the text */}
              <span className="flex items-center gap-1.5">
                <span>{option.label}</span>
                {color && (
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: color }}
                  />
                )}
              </span>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default MultiSelectField
