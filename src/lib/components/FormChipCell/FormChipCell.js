import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { get, isEqual } from 'lodash'

import FormChipCellView from './FormChipCellView'

import { isEveryObjectValueEmpty } from '../../utils/common.util'
import { generateChipsList } from '../../utils/generateChipsList.util'
import { CHIP_OPTIONS } from '../../types'
import { CLICK, TAB, TAB_SHIFT } from '../../constants'

const FormChipCell = ({
  chipOptions,
  className,
  delimiter,
  formState,
  initialValues,
  isEditMode,
  name,
  onClick,
  shortChips,
  visibleChipsMaxLength
}) => {
  const [chipsSizes, setChipsSizes] = useState({})
  const [showHiddenChips, setShowHiddenChips] = useState(false)
  const [editConfig, setEditConfig] = useState({
    chipIndex: null,
    isEdit: false,
    isKeyFocused: true,
    isValueFocused: false,
    isNewChip: false
  })
  const [showChips, setShowChips] = useState(false)
  const [visibleChipsCount, setVisibleChipsCount] = useState(8)

  const getFormStateValues = get(formState.values, name)
  const getInitialValues = get(initialValues, name)

  const chipsCellRef = useRef()
  const chipsWrapperRef = useRef()

  const handleShowElements = useCallback(() => {
    if (!isEditMode || (isEditMode && visibleChipsMaxLength)) {
      setShowHiddenChips((state) => !state)
    }
  }, [isEditMode, visibleChipsMaxLength])

  let chips = useMemo(() => {
    return isEditMode || visibleChipsMaxLength === 'all'
      ? {
          visibleChips: getFormStateValues
        }
      : generateChipsList(
          getFormStateValues,
          visibleChipsMaxLength ? visibleChipsMaxLength : visibleChipsCount,
          delimiter
        )
  }, [visibleChipsMaxLength, isEditMode, formState.values, name, visibleChipsCount, delimiter])

  const handleResize = useCallback(() => {
    if (!isEditMode && !isEveryObjectValueEmpty(chipsSizes)) {
      const parentSize = chipsCellRef.current?.getBoundingClientRect().width
      let maxLength = 0
      let chipIndex = 0
      const padding = 65

      Object.values(chipsSizes).every((chipSize, index) => {
        if (
          maxLength + chipSize > parentSize ||
          (Object.values(chipsSizes).length > 1 && maxLength + chipSize + padding > parentSize)
        ) {
          chipIndex = index

          return false
        } else {
          maxLength += chipSize

          if (index === Object.values(chipsSizes).length - 1) {
            chipIndex = 8
          }

          return true
        }
      })

      setVisibleChipsCount(chipIndex)
      setShowChips(true)
    }
  }, [chipsSizes, isEditMode])

  useEffect(() => {
    handleResize()
  }, [handleResize, showChips])

  useEffect(() => {
    if (!isEditMode) {
      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [handleResize, isEditMode])

  useEffect(() => {
    window.addEventListener('mainResize', handleResize)

    return () => window.removeEventListener('mainResize', handleResize)
  }, [handleResize])

  useEffect(() => {
    if (showHiddenChips) {
      window.addEventListener('click', handleShowElements)

      return () => window.removeEventListener('click', handleShowElements)
    }
  }, [showHiddenChips, handleShowElements])

  const checkChipsList = useCallback(
    (currentChipsList) => {
      if (isEqual(getInitialValues, currentChipsList)) {
        getInitialValues = currentChipsList
      }

      formState.form.mutators.setFieldState(name, { modified: true })
      formState.form.mutators.setFieldState(name, { touched: true })
    },
    [initialValues, name, formState]
  )

  const handleAddNewChip = useCallback(
    (event, fields) => {
      if (!editConfig.isEdit && !editConfig.chipIndex) {
        formState.form.mutators.push(name, {
          key: '',
          value: '',
          delimiter: delimiter
        })
      }

      if (showHiddenChips) {
        setShowHiddenChips(false)
      }

      event && event.preventDefault()
      setEditConfig({
        chipIndex: fields.value.length,
        isEdit: true,
        isKeyFocused: true,
        isValueFocused: false,
        isNewChip: true
      })
    },
    [editConfig.isEdit, editConfig.chipIndex, showHiddenChips, formState, name, delimiter]
  )

  const handleRemoveChip = useCallback(
    (event, fields, chipIndex) => {
      checkChipsList(getFormStateValues.filter((_, index) => index !== chipIndex))
      fields.remove(chipIndex)
      event && event.stopPropagation()
    },
    [checkChipsList, formState.values, name]
  )

  const handleEditChip = useCallback(
    (event, fields, nameEvent) => {
      const chip = getFormStateValues[editConfig.chipIndex]
      const isChipNotEmpty = !!(chip.key && chip.value)

      if (nameEvent === CLICK) {
        if (editConfig.isNewChip && !isChipNotEmpty) {
          handleRemoveChip(event, fields, editConfig.chipIndex)
        }

        setEditConfig({
          chipIndex: null,
          isEdit: false,
          isKeyFocused: true,
          isValueFocused: false,
          isNewChip: false
        })
      } else if (nameEvent === TAB) {
        if (editConfig.isNewChip && !isChipNotEmpty) {
          handleRemoveChip(event, fields, editConfig.chipIndex)
        }

        setEditConfig((prevState) => {
          const lastChipSelected = prevState.chipIndex + 1 > fields.value.length - 1

          return {
            chipIndex: lastChipSelected ? null : prevState.chipIndex + 1,
            isEdit: !lastChipSelected,
            isKeyFocused: true,
            isValueFocused: false,
            isNewChip: false
          }
        })
      } else if (nameEvent === TAB_SHIFT) {
        if (editConfig.isNewChip && !isChipNotEmpty) {
          handleRemoveChip(event, fields, editConfig.chipIndex)
        }

        setEditConfig((prevState) => {
          const isPrevChipIndexExists = prevState.chipIndex - 1 < 0

          return {
            chipIndex: isPrevChipIndexExists ? null : prevState.chipIndex - 1,
            isEdit: !isPrevChipIndexExists,
            isKeyFocused: isPrevChipIndexExists,
            isValueFocused: !isPrevChipIndexExists,
            isNewChip: false
          }
        })
      }

      event && event.preventDefault()
      checkChipsList(getFormStateValues)
    },
    [editConfig.chipIndex, editConfig.isNewChip, handleRemoveChip, name, formState, checkChipsList]
  )

  const handleIsEdit = useCallback(
    (event, index) => {
      if (isEditMode) {
        event.stopPropagation()

        setEditConfig({
          chipIndex: index,
          isEdit: true,
          isKeyFocused: true,
          isValueFocused: false
        })
      }

      onClick && onClick()
    },
    [isEditMode, onClick]
  )

  return (
    <FormChipCellView
      chipOptions={chipOptions}
      chips={chips}
      className={className}
      editConfig={editConfig}
      handleAddNewChip={handleAddNewChip}
      handleEditChip={handleEditChip}
      handleIsEdit={handleIsEdit}
      handleRemoveChip={handleRemoveChip}
      handleShowElements={handleShowElements}
      isEditMode={isEditMode}
      name={name}
      ref={{ chipsCellRef, chipsWrapperRef }}
      setChipsSizes={setChipsSizes}
      setEditConfig={setEditConfig}
      shortChips={shortChips}
      showChips={showChips}
      showHiddenChips={showHiddenChips}
    />
  )
}

FormChipCell.defaultProps = {
  chipOptions: {
    background: 'purple',
    boldValue: false,
    borderRadius: 'primary',
    borderColor: 'transparent',
    density: 'dense',
    font: 'purple'
  },
  delimiter: null,
  onClick: () => {},
  shortChips: false,
  isEditMode: false,
  visibleChipsMaxLength: 'all'
}

FormChipCell.propTypes = {
  chipOptions: CHIP_OPTIONS,
  className: PropTypes.string,
  delimiter: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onClick: PropTypes.func,
  shortChips: PropTypes.bool,
  name: PropTypes.string.isRequired,
  formState: PropTypes.shape({}).isRequired,
  initialValues: PropTypes.object.isRequired,
  isEditMode: PropTypes.bool,
  visibleChipsMaxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default React.memo(FormChipCell)
