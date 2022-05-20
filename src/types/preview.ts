export interface IResponsiveVisibility {
  value: string
}

export interface PreviewProps {
  isPreview?: boolean
  responsiveVisibility?: IResponsiveVisibility[] | string[]
}
