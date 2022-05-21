import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { CSSProperties, ReactNode, useMemo } from 'react'
import Slider, { Settings, ResponsiveObject } from 'react-slick'

import { PreviewProps } from '@src/types/preview'

import { ComponentProps } from '@src/types/component'

import VisibilityComponent from '@components/common/ResponsiveVisibility/ResponsiveVisibility.component'
import { ResponsiveSize } from '@src/constants/responsive'

export interface CarouselProps
  extends PreviewProps,
    ComponentProps<React.HTMLAttributes<HTMLDivElement>> {
  infinite?: boolean
  variableWidth?: boolean
  adaptiveHeight?: boolean
  focusOnSelect?: boolean
  slidesToShow?: number
  dataSource: any[]
  className?: string
  style?: CSSProperties
  setting?: Settings
  children?: ReactNode
  xl?: ResponsiveObject['settings']
  md?: ResponsiveObject['settings']
  xs?: ResponsiveObject['settings']
  renderItem?: (item: any, index?: number) => ReactNode
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>((props, ref) => {
  const {
    style,
    children,
    responsiveVisibility,
    isPreview,
    dataSource,
    renderItem,
    setting,
    slidesToShow = 4,
    variableWidth = false,
    infinite = false,
    adaptiveHeight = true,
    focusOnSelect = false,
    xl = {
      slidesToShow: 3
    },
    md = {
      slidesToShow: 2
    },
    xs = {
      slidesToShow: 1
    },
    className
  } = props

  const sliderProps = useMemo(() => {
    return {
      dots: false,
      infinite,
      slidesToShow,
      swipeToSlide: true,
      variableWidth,
      adaptiveHeight,
      focusOnSelect,
      responsive: [
        {
          breakpoint: ResponsiveSize.LARGE,
          settings: xl
        },
        {
          breakpoint: ResponsiveSize.MEDIUM,
          settings: md
        },
        {
          breakpoint: ResponsiveSize.SMALL,
          settings: xs
        }
      ],
      ...setting
    }
  }, [setting, infinite, slidesToShow, variableWidth, adaptiveHeight, focusOnSelect, xl, md, xs])
  const items = useMemo(() => {
    if (children) {
      return children
    }
    if (!dataSource?.length || !renderItem) {
      // eslint-disable-next-line consistent-return
      return
    }
    // eslint-disable-next-line consistent-return
    return dataSource.map((item, index) => {
      if (variableWidth) {
        return renderItem(item, index)
      }
      // eslint-disable-next-line react/no-array-index-key
      return <div key={`${item.id}_${index}`}>{renderItem(item, index)}</div>
    })
  }, [children, variableWidth, dataSource, renderItem])
  return (
    <VisibilityComponent visibility={responsiveVisibility} isPreview={isPreview}>
      <div style={style} ref={ref}>
        <Slider {...sliderProps} className={className}>
          {items}
        </Slider>
      </div>
    </VisibilityComponent>
  )
})

export { Carousel }
