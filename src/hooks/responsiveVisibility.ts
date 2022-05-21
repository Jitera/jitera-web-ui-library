import clsx from 'clsx'

import { IResponsiveVisibility } from '@src/types/preview'

export interface UseClassNamesParameters {
  className?: string
  responsiveVisibility?: IResponsiveVisibility[] | string[]
}

export function useResponsiveVisibility({
  className = '',
  responsiveVisibility = []
}: UseClassNamesParameters) {
  return {
    classNames: clsx(
      className,
      responsiveVisibility.length === 3
        ? ''
        : responsiveVisibility
            ?.map((responsiveVisibilityItem) =>
              typeof responsiveVisibilityItem === 'string'
                ? `show-${responsiveVisibilityItem}`
                : `show-${responsiveVisibilityItem.value}`
            )
            .join(' ')
    )
  }
}
