import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import React, { CSSProperties, ReactNode, useMemo, Children } from 'react'
import Slider, { Settings, ResponsiveObject } from 'react-slick'

import { PreviewProps } from '@src/types/preview'

import { ComponentProps } from '@src/types/component'

import { ResponsiveSize } from '@src/constants/responsive'
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

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>((props, ref) => {
  const {
    style,
    children,
    responsiveVisibility,
    dataSource,
    renderItem,
    setting,
    arrows = false,
    slidesToShow = 2,
    variableWidth = false,
    infinite = false,
    adaptiveHeight = true,
    focusOnSelect = false,
    itemPaddingHorizontal,
    xlResponsive = {
      slidesToShow: 2
    },
    mdResponsive = {
      slidesToShow: 1
    },
    xsResponsive = {
      slidesToShow: 1
    },
    className
  } = props

  const { classNames } = useResponsiveVisibility({ className, responsiveVisibility })

  const sliderProps = useMemo(() => {
    return {
      dots: false,
      arrows,
      infinite,
      slidesToShow,
      swipeToSlide: true,
      variableWidth,
      adaptiveHeight,
      focusOnSelect,
      responsive: [
        {
          breakpoint: ResponsiveSize.LARGE,
          settings: xlResponsive
        },
        {
          breakpoint: ResponsiveSize.MEDIUM,
          settings: mdResponsive
        },
        {
          breakpoint: ResponsiveSize.SMALL,
          settings: xsResponsive
        }
      ],
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
        return (
          <div
            style={{
              width: '100%',
              paddingLeft: itemPaddingHorizontal,
              paddingRight: itemPaddingHorizontal
            }}
          >
            {child}
          </div>
        )
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
  }, [children, variableWidth, dataSource, renderItem, itemPaddingHorizontal])
  return (
    <div style={style} className={classNames} ref={ref}>
      <Slider {...sliderProps}>{items}</Slider>
    </div>
  )
})

export { Carousel }
