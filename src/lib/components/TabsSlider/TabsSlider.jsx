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
import React, { useCallback, useEffect, useState, useRef } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Tip from '../Tip/Tip'

import { SLIDER_TABS } from '../../types'
import { generateUrlFromRouterPath } from '../../utils/common.util'

import Arrow from '../../images/arrow.svg?react'

const TabsSlider = ({
  fontSize = 'sm',
  initialTab = '',
  isDetailsPopUp = false,
  onClick = () => {},
  skipLink = false,
  tabsList
}) => {
  const [selectedTab, setSelectedTab] = useState(initialTab)
  const [arrowsAreHidden, setArrowsAreHidden] = useState(true)
  const [scrolledWidth, setScrolledWidth] = useState(0)
  const [rightArrowDisabled, setRightArrowDisabled] = useState(false)
  const tabsWrapperRef = useRef()
  const tabsRef = useRef()
  const location = useLocation()
  const params = useParams()
  const menuOffsetHalfWidth = 2
  const tabOffset = 1.5

  const leftArrowClassNames = classnames(
    'tabs-slider__arrow',
    'tabs-slider__arrow_left',
    arrowsAreHidden && 'tabs-slider__arrow_hidden',
    scrolledWidth === 0 && 'tabs-slider__arrow_disabled'
  )
  const rightArrowClassNames = classnames(
    'tabs-slider__arrow',
    'tabs-slider__arrow_right',
    arrowsAreHidden && 'tabs-slider__arrow_hidden',
    rightArrowDisabled && 'tabs-slider__arrow_disabled'
  )

  const scrollTabs = toRight => {
    let scrollWidth

    if (toRight) {
      if (
        tabsRef.current?.scrollWidth <
        tabsWrapperRef.current?.offsetWidth * tabOffset + scrolledWidth
      ) {
        scrollWidth = tabsRef.current?.scrollWidth - tabsWrapperRef.current?.offsetWidth

        setRightArrowDisabled(true)
      } else {
        scrollWidth = scrolledWidth + tabsWrapperRef.current?.offsetWidth / menuOffsetHalfWidth
      }
    } else {
      scrollWidth = Math.max(
        0,
        scrolledWidth - tabsWrapperRef.current?.offsetWidth / menuOffsetHalfWidth
      )

      setRightArrowDisabled(false)
    }

    setScrolledWidth(scrollWidth)
  }

  const handleHideArrows = useCallback(() => {
    const scrollIsHidden = tabsRef.current?.offsetWidth === tabsRef.current?.scrollWidth

    setArrowsAreHidden(scrollIsHidden)

    if (rightArrowDisabled) {
      setScrolledWidth(tabsRef.current?.scrollWidth - tabsWrapperRef.current?.offsetWidth)
    }

    if (scrollIsHidden) {
      setScrolledWidth(0)
      setRightArrowDisabled(false)
    }
  }, [rightArrowDisabled, tabsRef, tabsWrapperRef])

  const moveToSelectedTab = useCallback(() => {
    const selectedTabNode = document.querySelector(`[data-tab='${selectedTab}']`)
    const centeredTabPosition =
      selectedTabNode?.offsetLeft -
      tabsWrapperRef.current?.offsetWidth / menuOffsetHalfWidth +
      selectedTabNode?.offsetWidth / menuOffsetHalfWidth

    if (centeredTabPosition <= 0) {
      setScrolledWidth(0)
      setRightArrowDisabled(false)
    } else if (
      tabsRef.current?.scrollWidth <
      tabsWrapperRef.current?.offsetWidth / menuOffsetHalfWidth +
        selectedTabNode?.offsetLeft +
        selectedTabNode?.offsetWidth
    ) {
      setScrolledWidth(tabsRef.current?.scrollWidth - tabsWrapperRef.current?.offsetWidth)
      setRightArrowDisabled(true)
    } else {
      setScrolledWidth(centeredTabPosition)
      setRightArrowDisabled(false)
    }
  }, [selectedTab])

  const onSelectTab = newTab => {
    setSelectedTab(newTab)
    onClick && onClick(newTab)
  }

  useEffect(() => {
    window.addEventListener('resize', handleHideArrows)

    return () => window.removeEventListener('resize', handleHideArrows)
  }, [handleHideArrows])

  useEffect(() => {
    window.addEventListener('resize', moveToSelectedTab)

    return () => window.removeEventListener('resize', moveToSelectedTab)
  }, [moveToSelectedTab])

  useEffect(() => {
    handleHideArrows()
  }, [tabsList, handleHideArrows])

  useEffect(() => {
    moveToSelectedTab()
  }, [moveToSelectedTab])

  useEffect(() => {
    if (params.tab && params.tab !== selectedTab && !isDetailsPopUp) {
      setSelectedTab(tabsList.find(tab => tab.id === params.tab)?.id)
    }
  }, [isDetailsPopUp, params.tab, selectedTab, tabsList])

  return (
    <div className="content-menu">
      <div
        className={leftArrowClassNames}
        onClick={() => {
          scrollTabs(false)
        }}
      >
        <Arrow />
      </div>
      <div className="content-menu__tabs-wrapper" ref={tabsWrapperRef}>
        <div
          ref={tabsRef}
          className="content-menu__tabs"
          style={{
            transform: `translateX(${-scrolledWidth}px)`
          }}
        >
          {tabsList.map(tab => {
            const tabClassName = classnames(
              'content-menu__tab',
              `content-menu__tab-${fontSize}`,
              selectedTab === tab.id && 'content-menu__tab_active'
            )

            return (
              !tab.hidden &&
              (!skipLink ? (
                <Link
                  to={generateUrlFromRouterPath(
                    `${window.location.pathname?.replace(/^$|([^/]+$)/, tab.id)}${location.search ?? ''}${tab.query ?? ''}`
                  )}
                  className={tabClassName}
                  key={tab.id}
                >
                  <span
                    className={
                      (tab.icon && 'content-menu__tab-icon') || (tab.tip && 'content-menu__tab-tip')
                    }
                    data-tab={tab.id}
                    onClick={() => onSelectTab(tab)}
                  >
                    {tab.icon && <div>{tab.icon}</div>}
                    {tab.label}
                    {tab.tip && <Tip text={tab.tip} />}
                  </span>
                </Link>
              ) : (
                <div
                  className={tabClassName}
                  data-tab={tab.id}
                  key={tab.id}
                  onClick={() => onSelectTab(tab.id)}
                >
                  {tab.icon && <div className="content-menu_tab-icon">{tab.icon}</div>}
                  {tab.label}
                  {tab.tip && <Tip className="content-menu__tab-tip" text={tab.tip} />}
                </div>
              ))
            )
          })}
        </div>
      </div>
      <div className={rightArrowClassNames} onClick={() => scrollTabs(true)}>
        <Arrow />
      </div>
    </div>
  )
}

TabsSlider.propTypes = {
  fontSize: PropTypes.oneOf(['sm', 'md', 'lg']),
  initialTab: PropTypes.string,
  isDetailsPopUp: PropTypes.bool,
  onClick: PropTypes.func,
  skipLink: PropTypes.bool,
  tabsList: SLIDER_TABS.isRequired
}

export default TabsSlider
