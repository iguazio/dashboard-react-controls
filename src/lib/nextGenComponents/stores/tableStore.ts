import type {
  RowSelectionState,
  SortingState,
  ColumnSizingState,
  ColumnFiltersState
} from '@tanstack/react-table'
import { create } from 'zustand'

export type DraftValues = Record<string, string | string[]>

type TableState = {
  rowSelection: RowSelectionState
  sorting: SortingState
  columnSizing: ColumnSizingState
  globalFilter: string
  columnFilters: ColumnFiltersState

  filterPopoverOpen: boolean
  filterDraft: DraftValues

  setRowSelection: (
    selection: RowSelectionState | ((old: RowSelectionState) => RowSelectionState)
  ) => void
  setSorting: (sorting: SortingState | ((old: SortingState) => SortingState)) => void
  setColumnSizing: (
    sizing: ColumnSizingState | ((old: ColumnSizingState) => ColumnSizingState)
  ) => void
  setGlobalFilter: (value: string | ((old: string) => string)) => void
  setColumnFilters: (
    value: ColumnFiltersState | ((old: ColumnFiltersState) => ColumnFiltersState)
  ) => void

  setFilterPopoverOpen: (open: boolean | ((old: boolean) => boolean)) => void
  setFilterDraft: (draft: DraftValues | ((old: DraftValues) => DraftValues)) => void
  resetFilterDraft: (initial: DraftValues) => void
}

export const useTableStore = create<TableState>(set => ({
  rowSelection: {},
  sorting: [],
  columnSizing: {},
  globalFilter: '',
  columnFilters: [],

  filterPopoverOpen: false,
  filterDraft: {},

  setRowSelection: selection =>
    set(old => ({
      rowSelection: typeof selection === 'function' ? selection(old.rowSelection) : selection
    })),

  setSorting: sorting =>
    set(old => ({
      sorting: typeof sorting === 'function' ? sorting(old.sorting) : sorting
    })),

  setColumnSizing: sizing =>
    set(old => ({
      columnSizing: typeof sizing === 'function' ? sizing(old.columnSizing) : sizing
    })),

  setGlobalFilter: value =>
    set(old => ({
      globalFilter: typeof value === 'function' ? value(old.globalFilter) : value
    })),

  setColumnFilters: value =>
    set(old => ({
      columnFilters: typeof value === 'function' ? value(old.columnFilters) : value
    })),

  setFilterPopoverOpen: open =>
    set(old => ({
      filterPopoverOpen: typeof open === 'function' ? open(old.filterPopoverOpen) : open
    })),

  setFilterDraft: draft =>
    set(old => ({
      filterDraft: typeof draft === 'function' ? draft(old.filterDraft) : draft
    })),

  resetFilterDraft: initial => set({ filterDraft: initial })
}))
