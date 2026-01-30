/*
Copyright 2019 Iguazio Systems Ltd.

Licensed under the Apache License, Version 2.0 (the "License") with
an addition restriction as set forth herein. You may not use this
file except in compliance with the License. You may obtain a copy of
the License at http://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
implied. See the License for the specific language governing
permissions and limitations under the License.

In addition, you may not use the software for any purposes that are
illegal under applicable law, and the grant of the foregoing license
under the Apache 2.0 license is conditioned upon your compliance with
such restriction.
*/
import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Tooltip from '../../components/Tooltip/Tooltip'
import TextTooltipTemplate from '../../components/TooltipTemplate/TextTooltipTemplate'

import './tableTagStatusCell.scss'

const TableTagStatusCell = ({ cellData = {}, className = '', item, onClick = null }) => {
  const tableCellClassNames = classnames(
    'table-body__cell',
    'tag-status-cell',
    cellData.className,
    className,
    cellData.bodyCellClassName,
    onClick && 'link'
  )
  const { value: stateValue, label: stateLabel, className: stateClassName } = item?.state ?? {}

  return (
    <td
      data-testid={cellData?.headerId ?? 'table-tag-status-cell'}
      className={tableCellClassNames}
      onClick={() => cellData.value && onClick?.(cellData.value)}
    >
      <div className="cell-wrapper">
        <div className="cell-content">
          <Tooltip
            className="cell-name"
            template={<TextTooltipTemplate text={cellData.tooltip || cellData.value || ''} />}
          >
            {cellData.value}
          </Tooltip>
          {stateValue && stateLabel && (
            <Tooltip className="cell-status" template={<TextTooltipTemplate text={stateLabel} />}>
              <i className={stateClassName} />
            </Tooltip>
          )}
        </div>
        {item?.tag && (
          <Tooltip className="cell-tag" template={<TextTooltipTemplate text={item.tag} />}>
            <span className="cell-subtext">{item.tag}</span>
          </Tooltip>
        )}
      </div>
    </td>
  )
}

TableTagStatusCell.propTypes = {
  cellData: PropTypes.object.isRequired,
  className: PropTypes.string,
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]).isRequired,
  onClick: PropTypes.func
}

export default TableTagStatusCell
