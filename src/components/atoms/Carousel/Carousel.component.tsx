import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { CSSProperties, ReactNode, useMemo, Children } from 'react'
import Slider, { Settings, ResponsiveObject } from 'react-slick'

import { PreviewProps } from '@src/types/preview'

import { ComponentProps } from '@src/types/component'

import { useResponsiveVisibility } from '@src/hooks/responsiveVisibility'

export interface CarouselProps
  extends PreviewProps,
    ComponentProps<React.HTMLAttributes<HTMLDivElement>> {
  infinite?: boolean
  variableWidth?: boolean
  arrows?: boolean
  adaptiveHeight?: boolean
  focusOnSelect?: boolean
  slidesToShow?: number
  dataSource?: any[]
  className?: string
  style?: CSSProperties
  setting?: Settings
  children?: ReactNode
  itemPaddingHorizontal?: string | number
  xlResponsive?: ResponsiveObject['settings']
  mdResponsive?: ResponsiveObject['settings']
  xsResponsive?: ResponsiveObject['settings']
  renderItem?: (item: any, index?: number) => ReactNode
}

const DEFAULT_RESPONSIVE_SIZE = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 4000
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>((props, ref) => {
  const {
    style,
    children,
    responsiveVisibility,
    dataSource,
    renderItem,
    setting,
    arrows = false,
    slidesToShow = 4,
    variableWidth = false,
    infinite = false,
    adaptiveHeight = true,
    focusOnSelect = false,
    xlResponsive,
    mdResponsive,
    xsResponsive,
    className
  } = props

  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  const sliderProps = useMemo(() => {
    const responsive: Settings['responsive'] = []
    if (typeof xlResponsive === 'object' && xlResponsive?.slidesToShow) {
      responsive.push({
        breakpoint: DEFAULT_RESPONSIVE_SIZE.DESKTOP,
        settings: xlResponsive
      })
    }
    if (typeof mdResponsive === 'object' && mdResponsive?.slidesToShow) {
      responsive.push({
        breakpoint: DEFAULT_RESPONSIVE_SIZE.TABLET,
        settings: mdResponsive
      })
    }
    if (typeof xsResponsive === 'object' && xsResponsive?.slidesToShow) {
      responsive.push({
        breakpoint: DEFAULT_RESPONSIVE_SIZE.MOBILE,
        settings: xsResponsive
      })
    }
    return {
      dots: false,
      arrows,
      infinite,
      slidesToShow,
      swipeToSlide: true,
      variableWidth,
      adaptiveHeight,
      focusOnSelect,
      responsive,
      ...setting
    }
  }, [
    setting,
    arrows,
    infinite,
    slidesToShow,
    variableWidth,
    adaptiveHeight,
    focusOnSelect,
    xlResponsive,
    mdResponsive,
    xsResponsive
  ])
  const items = useMemo(() => {
    if (children && variableWidth) {
      return children
    }
    if (children) {
      return Children.map(children, (child) => {
        return <div>{child}</div>
      })
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
    <div style={style} className={classNames} ref={ref}>
      <Slider {...sliderProps}>{items}</Slider>
    </div>
  )
})

export { Carousel }
