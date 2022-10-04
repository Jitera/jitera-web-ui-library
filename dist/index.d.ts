/// <reference types="react" />
import React, { CSSProperties, ReactNode, ReactElement } from 'react'
import { CSSObject } from 'styled-components'
import {
  ButtonProps as ButtonProps$1,
  ColProps as ColProps$1,
  InputProps as InputProps$1,
  MenuProps as MenuProps$1,
  MenuItemProps as MenuItemProps$1,
  SubMenuProps,
  RowProps as RowProps$1,
  ListProps as ListProps$1,
  RadioProps as RadioProps$1,
  RadioGroupProps,
  SpaceProps,
  CheckboxProps as CheckboxProps$1,
  UploadProps,
  DrawerProps,
  TabsProps,
  ModalProps,
  PaginationProps
} from 'antd'
export { CheckboxOptionType as RadioCheckboxOptionType } from 'antd'
import * as react_icons_lib from 'react-icons/lib'
import { IconBaseProps } from 'react-icons/lib'
import { BasicProps } from 'antd/lib/layout/layout'
import { SiderProps as SiderProps$1 } from 'antd/lib/layout/Sider'
import { Props, OptionsOrGroups, GroupBase, SelectInstance } from 'react-select'
export { SelectInstance as SelectRef } from 'react-select'
import { TextAreaProps as TextAreaProps$1 } from 'antd/lib/input/TextArea'
import { CheckboxGroupProps } from 'antd/lib/checkbox'
import { Dayjs } from 'dayjs'
import { PickerDateProps } from 'antd/lib/date-picker/generatePicker'
import { Settings, ResponsiveObject } from 'react-slick'
import {
  RowData,
  DeepKeys,
  ColumnDefTemplate,
  CellContext,
  Row as Row$1,
  Header as Header$1
} from '@tanstack/table-core'
import { DragEndEvent } from '@dnd-kit/core'
import { OtpInputProps } from 'react-otp-input'
export { createColumnHelper } from '@tanstack/react-table'
export { arrayMove } from '@dnd-kit/sortable'

declare type ComponentProps<T> = Omit<T, 'prefixCls' | 'iconPrefixCls'>
interface RadioCheckboxStateColor {
  activeColor?: string
  inactiveColor?: string
  labelStyle?: CSSObject
}
declare type RadioStateColor = RadioCheckboxStateColor
interface CheckboxStateColor extends RadioCheckboxStateColor {
  checkColor?: string
}

interface IResponsiveVisibility {
  value: string
}
interface PreviewProps {
  isPreview?: boolean
  responsiveVisibility?: IResponsiveVisibility[] | string[]
}

interface BoxProps extends PreviewProps, ComponentProps<React.HTMLAttributes<HTMLDivElement>> {}
declare const Box: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>>

declare enum IconSet {
  All = 'all',
  Antd = 'antd',
  Bootstrap = 'bootstrap',
  Feather = 'feather',
  FontAwesome = 'font-awesome',
  Material = 'material'
}
declare function getIconComponent(
  iconName: string,
  props?: IconBaseProps
): React.ReactElement<IconBaseProps, string | React.JSXElementConstructor<any>>
declare function assertUnreachable(value: never): never
declare function getIconSet(iconSet: IconSet): [string, react_icons_lib.IconType][]
interface IconProps extends PreviewProps, ComponentProps<IconBaseProps> {
  iconName: string
}
declare const Icon: React.ForwardRefExoticComponent<
  IconProps & React.RefAttributes<HTMLSpanElement>
>

interface ButtonProps extends PreviewProps, ComponentProps<Omit<ButtonProps$1, 'type'>> {
  iconProps?: IconProps
  buttonType?: ButtonProps$1['type']
}
declare const Button: React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>

interface ColProps extends PreviewProps, ComponentProps<ColProps$1> {}
declare const Col: React.ForwardRefExoticComponent<ColProps & React.RefAttributes<HTMLDivElement>>

interface ContentProps extends PreviewProps, ComponentProps<BasicProps> {}
declare const Content: React.ForwardRefExoticComponent<
  ContentProps & React.RefAttributes<HTMLDivElement>
>

interface FooterProps extends PreviewProps, ComponentProps<BasicProps> {}
declare const Footer: React.ForwardRefExoticComponent<
  FooterProps & React.RefAttributes<HTMLDivElement>
>

declare type FormProps = BoxProps
declare const Form: React.ForwardRefExoticComponent<BoxProps & React.RefAttributes<HTMLDivElement>>

interface HeaderProps extends PreviewProps, ComponentProps<BasicProps> {}
declare const Header: React.ForwardRefExoticComponent<
  HeaderProps & React.RefAttributes<HTMLDivElement>
>

interface ImageProps extends PreviewProps, Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  source?: string
  alt?: string
}
declare const Image: React.ForwardRefExoticComponent<
  ImageProps & React.RefAttributes<HTMLImageElement>
>

interface InputProps extends PreviewProps, ComponentProps<Omit<InputProps$1, 'style'>> {
  style?: Record<string, unknown> | string
  inputStyle?: Record<string, unknown> | string
  isPasswordField?: boolean
  placeholderStyle?: Record<string, unknown> | string
  placeholder?: string
  errorMessage?: string
  prefixIconProps?: IconProps
  suffixIconProps?: IconProps
}
declare const Input: React.ForwardRefExoticComponent<
  InputProps & React.RefAttributes<HTMLDivElement>
>

interface LayoutProps extends PreviewProps, ComponentProps<BasicProps> {}
declare const Layout: React.ForwardRefExoticComponent<
  LayoutProps & React.RefAttributes<HTMLDivElement>
>

interface MenuProps extends PreviewProps, ComponentProps<MenuProps$1> {}
declare const Menu: React.ForwardRefExoticComponent<MenuProps & React.RefAttributes<HTMLDivElement>>

declare enum MenuIconPosition {
  Left = 'left',
  Right = 'right',
  Top = 'top',
  Bottom = 'bottom'
}
interface MenuItemProps extends PreviewProps, ComponentProps<MenuItemProps$1> {
  label: string
  iconProps?: IconProps
  iconPosition?: MenuIconPosition
  spaceBetween?: number
}
declare const MenuItem: React.ForwardRefExoticComponent<
  MenuItemProps & React.RefAttributes<HTMLLIElement>
>

declare const SubMenu: React.ForwardRefExoticComponent<
  SubMenuProps & React.RefAttributes<HTMLUListElement>
>

interface PageProps extends PreviewProps, React.HTMLAttributes<HTMLDivElement> {}
declare const Page: React.ForwardRefExoticComponent<PageProps & React.RefAttributes<HTMLDivElement>>

interface RowProps extends PreviewProps, ComponentProps<RowProps$1> {}
declare const Row: React.ForwardRefExoticComponent<RowProps & React.RefAttributes<HTMLDivElement>>

interface SiderProps extends PreviewProps, ComponentProps<SiderProps$1> {}
declare const Sider: React.ForwardRefExoticComponent<
  SiderProps & React.RefAttributes<HTMLDivElement>
>

declare enum TextTypeEnum {
  Link = 'Link',
  Text = 'Text'
}
declare type BaseTextProps = React.HTMLAttributes<HTMLDivElement>
declare type BaseLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>
declare type TextProps = PreviewProps &
  BaseTextProps &
  BaseLinkProps & {
    textType?: `${TextTypeEnum}`
  }
declare const Text: React.ForwardRefExoticComponent<
  PreviewProps &
    BaseTextProps &
    BaseLinkProps & {
      textType?: `${TextTypeEnum}`
    } & React.RefAttributes<HTMLDivElement & HTMLAnchorElement>
>

interface SelectPropsDatum {
  label: string
  value: string
}
interface SelectProps extends PreviewProps, Props {
  placeholderStyle?: CSSProperties
  containerStyle?: CSSProperties
  dropdownStyle?: CSSProperties
  optionStyle?: CSSProperties
  iconProps?: IconProps
  data?: OptionsOrGroups<SelectPropsDatum, GroupBase<SelectPropsDatum>> | undefined
}
declare const Select: React.ForwardRefExoticComponent<
  SelectProps & React.RefAttributes<SelectInstance<unknown, false, GroupBase<unknown>>>
>

interface ListProps extends PreviewProps, ComponentProps<ListProps$1<any>> {}
declare const List: React.ForwardRefExoticComponent<ListProps & React.RefAttributes<HTMLDivElement>>

interface RadioOptions extends RadioProps$1 {
  label: string
}
interface RadioProps
  extends RadioStateColor,
    PreviewProps,
    ComponentProps<Omit<RadioGroupProps, 'options'>> {
  wrap?: boolean | 'wrap-reverse' | 'wrap' | 'nowrap'
  data: RadioOptions[]
  spaceProps?: SpaceProps
  containerStyle?: Record<string, unknown> | string
  direction?: 'horizontal' | 'vertical' | undefined
}
declare const Radio: React.ForwardRefExoticComponent<
  RadioProps & React.RefAttributes<HTMLDivElement>
>

interface TextAreaProps extends PreviewProps, ComponentProps<Omit<TextAreaProps$1, 'style'>> {
  style?: Record<string, unknown> | string
  inputStyle?: Record<string, unknown> | string
  placeholderStyle?: Record<string, unknown> | string
  placeholder?: string
  errorMessage?: string
}
declare const TextArea: React.ForwardRefExoticComponent<
  TextAreaProps & React.RefAttributes<HTMLDivElement>
>

interface CheckboxOptions extends CheckboxProps$1 {
  label: string
}
interface CheckboxProps
  extends CheckboxStateColor,
    PreviewProps,
    ComponentProps<Omit<CheckboxGroupProps, 'options'>> {
  wrap?: boolean | 'wrap-reverse' | 'wrap' | 'nowrap'
  data: CheckboxOptions[]
  spaceProps?: SpaceProps
  containerStyle?: Record<string, unknown> | string
  direction?: 'horizontal' | 'vertical' | undefined
}
declare const Checkbox: React.ForwardRefExoticComponent<
  CheckboxProps & React.RefAttributes<HTMLDivElement>
>

interface ImagePickerProps extends PreviewProps, ComponentProps<Omit<UploadProps, 'listType'>> {
  errorMessage?: string
}
declare const ImagePicker: React.ForwardRefExoticComponent<
  ImagePickerProps & React.RefAttributes<HTMLDivElement>
>

declare enum PickerEnum {
  TIME = 'time',
  DATE = 'date',
  WEEK = 'week',
  MONTH = 'month'
}
interface DateTimePickerProps
  extends PreviewProps,
    ComponentProps<Omit<PickerDateProps<Dayjs>, 'picker' | 'defaultValue'>> {
  picker?: `${PickerEnum}`
  showTime?: boolean
  errorMessage?: string
  defaultValue?: Pick<PickerDateProps<Dayjs>, 'defaultValue'> | string
}
declare const DateTimePicker: React.ForwardRefExoticComponent<
  DateTimePickerProps & React.RefAttributes<HTMLDivElement>
>

declare enum HamburgerDrawerPlacementEnum {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left'
}
interface HamburgerDrawerProps
  extends Omit<DrawerProps, 'headerStyle' | 'bodyStyle' | 'footerStyle' | 'title'> {
  headerVisible?: boolean
}
interface HamburgerMenuProps extends PreviewProps {
  className?: string
  drawerTitle?: string
  buttonProps?: Omit<ButtonProps, 'style'>
  buttonStyle?: ButtonProps['style']
  drawerProps?: HamburgerDrawerProps
  headerStyle?: DrawerProps['headerStyle']
  bodyStyle?: DrawerProps['bodyStyle']
  iconProps?: IconProps
  children?: React.ReactNode
}
declare const HamburgerMenu: React.ForwardRefExoticComponent<
  HamburgerMenuProps & React.RefAttributes<HTMLDivElement>
>

interface DividerProps extends PreviewProps, ComponentProps<React.HTMLAttributes<HTMLDivElement>> {}
declare const Divider: React.ForwardRefExoticComponent<
  DividerProps & React.RefAttributes<HTMLDivElement>
>

interface CarouselProps extends PreviewProps, ComponentProps<React.HTMLAttributes<HTMLDivElement>> {
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
declare const Carousel: React.ForwardRefExoticComponent<
  CarouselProps & React.RefAttributes<HTMLDivElement>
>

interface TabProps extends PreviewProps, ComponentProps<TabsProps> {
  tabs?: {
    [key: string]: {
      key?: string
      title?: string
    }
  }
  activeColor?: string
  tabType?: TabsProps['type']
  tabLabelStyle?: {
    color?: string
    fontSize?: string
    fontWeight?: string
    fontFamily?: string
  }
}
declare const Tab: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<HTMLDivElement>>

declare enum ModalPositionEnum {
  DEFAULT = 'default',
  TOP = 'top',
  CENTER = 'center'
}
interface ModalShowOptions
  extends Omit<
    ModalProps,
    | 'visible'
    | 'closable'
    | 'footer'
    | 'modalRender'
    | 'cancelText'
    | 'cancelButtonProps'
    | 'okText'
    | 'onOk'
    | 'okButtonProps'
    | 'okType'
    | 'title'
    | 'closeIcon'
    | 'bodyStyle'
  > {
  position?: `${ModalPositionEnum}`
}
declare const Modal: {
  show(ReactComponent: React.ReactNode, options?: ModalShowOptions): void
  hide(): void
  hideAll(): void
}

interface RichTextProps {
  data?: string
  style?: CSSProperties
}

declare const RichText: React.FC<RichTextProps>

declare type PaginationPositionType = 'left' | 'center' | 'right'

declare module '@tanstack/table-core' {
  interface ColumnMeta<TData extends RowData, TValue> {
    action: boolean
  }
}
interface TableColumnDefinition<DataModel extends RowData> {
  name: string
  path?: DeepKeys<DataModel>
  renderColumn?: ColumnDefTemplate<CellContext<DataModel, any>> | undefined
  sortable?: boolean
  filterable?: boolean
}
interface TableProps<DataModel extends RowData> {
  className?: string
  data: DataModel[]
  columns: TableColumnDefinition<DataModel>[]
  actions?: TableColumnDefinition<DataModel>[]
  wrapperStyle?: CSSObject
  tableStyle?: CSSObject
  headerStyle?: CSSObject
  headerRowStyle?: CSSObject
  headerColumnStyle?: CSSObject
  bodyStyle?: CSSObject
  bodyRowStyle?: CSSObject
  bodyColumnStyle?: CSSObject
  sortColumnStyle?: CSSObject
  footerStyle?: CSSObject
  footerRowStyle?: CSSObject
  footerColumnStyle?: CSSObject
  paginationWrapperStyle?: CSSObject
  isColumnResizeable?: boolean
  isHeaderVisible?: boolean
  isFooterVisible?: boolean
  isColumnSortable?: boolean
  onColumnSortingChange?: (currentIndex: number, newIndex: number, event: DragEndEvent) => void
  isRowSortable?: boolean
  onRowSortingChange?: (currentIndex: number, newIndex: number, event: DragEndEvent) => void
  isDataSortable?: boolean
  ascendingIconProps?: IconProps
  descendingIconProps?: IconProps
  onDataSortingChange?: (sortBy: string, sort: string) => void
  isPaginationEnabled?: boolean
  paginationPosition?: PaginationPositionType
  pageSize?: number
  totalPage?: number
  paginationProps?: Omit<
    PaginationProps,
    'current' | 'total' | 'pageSize' | 'defaultPageSize' | 'onChange' | 'style'
  >
  paginationStyle?: PaginationProps['style']
  onPaginationChange?: (pageIndex: string, pageSize: string) => void
}
interface TableRowProps<DataModel extends RowData>
  extends Pick<
    TableProps<DataModel>,
    'isRowSortable' | 'isColumnResizeable' | 'bodyRowStyle' | 'bodyColumnStyle' | 'sortColumnStyle'
  > {
  row: Row$1<DataModel>
}
interface TableHeaderProps<DataModel extends RowData>
  extends Pick<
    TableProps<DataModel>,
    | 'isColumnResizeable'
    | 'isColumnSortable'
    | 'isDataSortable'
    | 'ascendingIconProps'
    | 'descendingIconProps'
    | 'headerColumnStyle'
  > {
  header: Header$1<DataModel, unknown>
}
declare const DEFAULT_TABLE_BORDER_STYLES: {
  borderWidth: string
  borderColor: string
  borderStyle: string
}
declare const TableInner: <DataModel>(
  {
    className,
    data,
    columns,
    actions,
    wrapperStyle,
    tableStyle,
    headerStyle,
    headerRowStyle,
    headerColumnStyle,
    bodyStyle,
    bodyRowStyle,
    bodyColumnStyle,
    sortColumnStyle,
    footerStyle,
    footerRowStyle,
    footerColumnStyle,
    paginationWrapperStyle,
    isColumnResizeable,
    isHeaderVisible,
    isFooterVisible,
    isColumnSortable,
    onColumnSortingChange,
    isRowSortable,
    onRowSortingChange,
    isDataSortable,
    ascendingIconProps,
    descendingIconProps,
    onDataSortingChange,
    isPaginationEnabled,
    paginationPosition,
    pageSize,
    totalPage,
    paginationProps,
    paginationStyle,
    onPaginationChange
  }: TableProps<DataModel>,
  ref: React.ForwardedRef<HTMLDivElement>
) => JSX.Element
declare const Table: <DataModel>(
  props: TableProps<DataModel> & {
    ref?: React.ForwardedRef<HTMLDivElement>
  }
) => ReturnType<typeof TableInner>

declare enum OTPInputType {
  Box = 'box',
  Underline = 'underline'
}
interface OTPInputProps extends PreviewProps, Omit<OtpInputProps, 'onChange' | 'numInputs'> {
  errorMessage?: string
  style?: Record<string, unknown> | string
  cellTextStyle?: Record<string, unknown> | string
  cellStyle: Record<string, unknown> | string
  pinCount: number
  autoFocus?: boolean
  otpInputType?: OTPInputType
  onChange?: (value: string) => void
}
declare const OTPInput: React.ForwardRefExoticComponent<
  OTPInputProps & React.RefAttributes<HTMLDivElement>
>

declare type ThemeProviderProps = {
  children: ReactElement
}
declare const ThemeProvider: ({ children }: ThemeProviderProps) => JSX.Element

declare const defaultTheme: {
  blueBase: string
  blue1: string
  blue2: string
  blue3: string
  blue4: string
  blue5: string
  blue6: string
  blue7: string
  blue8: string
  blue9: string
  blue10: string
  purpleBase: string
  purple1: string
  purple2: string
  purple3: string
  purple4: string
  purple5: string
  purple6: string
  purple7: string
  purple8: string
  purple9: string
  purple10: string
  cyanBase: string
  cyan1: string
  cyan2: string
  cyan3: string
  cyan4: string
  cyan5: string
  cyan6: string
  cyan7: string
  cyan8: string
  cyan9: string
  cyan10: string
  greenBase: string
  green1: string
  green2: string
  green3: string
  green4: string
  green5: string
  green6: string
  green7: string
  green8: string
  green9: string
  green10: string
  magentaBase: string
  magenta1: string
  magenta2: string
  magenta3: string
  magenta4: string
  magenta5: string
  magenta6: string
  magenta7: string
  magenta8: string
  magenta9: string
  magenta10: string
  pinkBase: string
  pink1: string
  pink2: string
  pink3: string
  pink4: string
  pink5: string
  pink6: string
  pink7: string
  pink8: string
  pink9: string
  pink10: string
  redBase: string
  red1: string
  red2: string
  red3: string
  red4: string
  red5: string
  red6: string
  red7: string
  red8: string
  red9: string
  red10: string
  orangeBase: string
  orange1: string
  orange2: string
  orange3: string
  orange4: string
  orange5: string
  orange6: string
  orange7: string
  orange8: string
  orange9: string
  orange10: string
  yellowBase: string
  yellow1: string
  yellow2: string
  yellow3: string
  yellow4: string
  yellow5: string
  yellow6: string
  yellow7: string
  yellow8: string
  yellow9: string
  yellow10: string
  volcanoBase: string
  volcano1: string
  volcano2: string
  volcano3: string
  volcano4: string
  volcano5: string
  volcano6: string
  volcano7: string
  volcano8: string
  volcano9: string
  volcano10: string
  geekblueBase: string
  geekblue1: string
  geekblue2: string
  geekblue3: string
  geekblue4: string
  geekblue5: string
  geekblue6: string
  geekblue7: string
  geekblue8: string
  geekblue9: string
  geekblue10: string
  limeBase: string
  lime1: string
  lime2: string
  lime3: string
  lime4: string
  lime5: string
  lime6: string
  lime7: string
  lime8: string
  lime9: string
  lime10: string
  goldBase: string
  gold1: string
  gold2: string
  gold3: string
  gold4: string
  gold5: string
  gold6: string
  gold7: string
  gold8: string
  gold9: string
  gold10: string
  presetColors: string
  theme: string
  antPrefix: string
  htmlSelector: string
  primaryColor: string
  primaryColorHover: string
  primaryColorActive: string
  primaryColorOutline: string
  processingColor: string
  infoColor: string
  infoColorDeprecatedBg: string
  infoColorDeprecatedBorder: string
  successColor: string
  successColorHover: string
  successColorActive: string
  successColorOutline: string
  successColorDeprecatedBg: string
  successColorDeprecatedBorder: string
  warningColor: string
  warningColorHover: string
  warningColorActive: string
  warningColorOutline: string
  warningColorDeprecatedBg: string
  warningColorDeprecatedBorder: string
  errorColor: string
  errorColorHover: string
  errorColorActive: string
  errorColorOutline: string
  errorColorDeprecatedBg: string
  errorColorDeprecatedBorder: string
  highlightColor: string
  normalColor: string
  white: string
  black: string
  primary1: string
  primary2: string
  primary3: string
  primary4: string
  primary5: string
  primary6: string
  primary7: string
  primary8: string
  primary9: string
  primary10: string
  bodyBackground: string
  componentBackground: string
  popoverBackground: string
  popoverCustomizeBorderColor: string
  fontFamily: string
  codeFamily: string
  textColor: string
  textColorSecondary: string
  textColorInverse: string
  iconColor: string
  iconColorHover: string
  headingColor: string
  textColorDark: string
  textColorSecondaryDark: string
  textSelectionBg: string
  fontVariantBase: string
  fontFeatureSettingsBase: string
  fontSizeBase: string
  fontSizeLg: string
  fontSizeSm: string
  heading1Size: string
  heading2Size: string
  heading3Size: string
  heading4Size: string
  heading5Size: string
  lineHeightBase: string
  borderRadiusBase: string
  borderRadiusSm: string
  paddingLg: string
  paddingMd: string
  paddingSm: string
  paddingXs: string
  paddingXss: string
  controlPaddingHorizontal: string
  controlPaddingHorizontalSm: string
  marginLg: string
  marginMd: string
  marginSm: string
  marginXs: string
  marginXss: string
  heightBase: string
  heightLg: string
  heightSm: string
  itemActiveBg: string
  itemHoverBg: string
  iconfontCssPrefix: string
  linkColor: string
  linkHoverColor: string
  linkActiveColor: string
  linkDecoration: string
  linkHoverDecoration: string
  linkFocusDecoration: string
  linkFocusOutline: string
  easeBaseOut: string
  easeBaseIn: string
  easeOut: string
  easeIn: string
  easeInOut: string
  easeOutBack: string
  easeInBack: string
  easeInOutBack: string
  easeOutCirc: string
  easeInCirc: string
  easeInOutCirc: string
  easeOutQuint: string
  easeInQuint: string
  easeInOutQuint: string
  borderColorBase: string
  borderColorSplit: string
  borderColorInverse: string
  borderWidthBase: string
  borderStyleBase: string
  outlineBlurSize: string
  outlineWidth: string
  outlineColor: string
  outlineFade: string
  backgroundColorLight: string
  backgroundColorBase: string
  disabledColor: string
  disabledBg: string
  disabledActiveBg: string
  disabledColorDark: string
  shadowColor: string
  shadowColorInverse: string
  boxShadowBase: string
  shadow1Up: string
  shadow1Down: string
  shadow1Left: string
  shadow1Right: string
  shadow2: string
  btnFontWeight: string
  btnBorderRadiusBase: string
  btnBorderRadiusSm: string
  btnBorderWidth: string
  btnBorderStyle: string
  btnShadow: string
  btnPrimaryShadow: string
  btnTextShadow: string
  btnPrimaryColor: string
  btnPrimaryBg: string
  btnDefaultColor: string
  btnDefaultBg: string
  btnDefaultBorder: string
  btnDangerColor: string
  btnDangerBg: string
  btnDangerBorder: string
  btnDisableColor: string
  btnDisableBg: string
  btnDisableBorder: string
  btnDefaultGhostColor: string
  btnDefaultGhostBg: string
  btnDefaultGhostBorder: string
  btnFontSizeLg: string
  btnFontSizeSm: string
  btnPaddingHorizontalBase: string
  btnPaddingHorizontalLg: string
  btnPaddingHorizontalSm: string
  btnHeightBase: string
  btnHeightLg: string
  btnHeightSm: string
  btnLineHeight: string
  btnCircleSize: string
  btnCircleSizeLg: string
  btnCircleSizeSm: string
  btnSquareSize: string
  btnSquareSizeLg: string
  btnSquareSizeSm: string
  btnSquareOnlyIconSize: string
  btnSquareOnlyIconSizeSm: string
  btnSquareOnlyIconSizeLg: string
  btnGroupBorder: string
  btnLinkHoverBg: string
  btnTextHoverBg: string
  checkboxSize: string
  checkboxColor: string
  checkboxCheckColor: string
  checkboxCheckBg: string
  checkboxBorderWidth: string
  checkboxBorderRadius: string
  checkboxGroupItemMarginRight: string
  descriptionsBg: string
  descriptionsTitleMarginBottom: string
  descriptionsDefaultPadding: string
  descriptionsMiddlePadding: string
  descriptionsSmallPadding: string
  descriptionsItemPaddingBottom: string
  descriptionsItemTrailingColon: string
  descriptionsItemLabelColonMarginRight: string
  descriptionsItemLabelColonMarginLeft: string
  descriptionsExtraColor: string
  dividerTextPadding: string
  dividerOrientationMargin: string
  dividerColor: string
  dividerVerticalGutter: string
  dropdownSelectedColor: string
  dropdownMenuSubmenuDisabledBg: string
  dropdownSelectedBg: string
  emptyFontSize: string
  radioSize: string
  radioTop: string
  radioBorderWidth: string
  radioDotSize: string
  radioDotColor: string
  radioDotDisabledColor: string
  radioSolidCheckedColor: string
  radioButtonBg: string
  radioButtonCheckedBg: string
  radioButtonColor: string
  radioButtonHoverColor: string
  radioButtonActiveColor: string
  radioButtonPaddingHorizontal: string
  radioDisabledButtonCheckedBg: string
  radioDisabledButtonCheckedColor: string
  radioWrapperMarginRight: string
  screenXs: string
  screenXsMin: string
  screenSm: string
  screenSmMin: string
  screenMd: string
  screenMdMin: string
  screenLg: string
  screenLgMin: string
  screenXl: string
  screenXlMin: string
  screenXxl: string
  screenXxlMin: string
  screenXsMax: string
  screenSmMax: string
  screenMdMax: string
  screenLgMax: string
  screenXlMax: string
  gridColumns: string
  layoutBodyBackground: string
  layoutHeaderBackground: string
  layoutHeaderHeight: string
  layoutHeaderPadding: string
  layoutHeaderColor: string
  layoutFooterPadding: string
  layoutFooterBackground: string
  layoutSiderBackground: string
  layoutTriggerHeight: string
  layoutTriggerBackground: string
  layoutTriggerColor: string
  layoutZeroTriggerWidth: string
  layoutZeroTriggerHeight: string
  layoutSiderBackgroundLight: string
  layoutTriggerBackgroundLight: string
  layoutTriggerColorLight: string
  zindexBadge: string
  zindexTableFixed: string
  zindexAffix: string
  zindexBackTop: string
  zindexPickerPanel: string
  zindexPopupClose: string
  zindexModal: string
  zindexModalMask: string
  zindexMessage: string
  zindexNotification: string
  zindexPopover: string
  zindexDropdown: string
  zindexPicker: string
  zindexPopoconfirm: string
  zindexTooltip: string
  zindexImage: string
  animationDurationSlow: string
  animationDurationBase: string
  animationDurationFast: string
  collapsePanelBorderRadius: string
  dropdownMenuBg: string
  dropdownVerticalPadding: string
  dropdownEdgeChildVerticalPadding: string
  dropdownFontSize: string
  dropdownLineHeight: string
  labelRequiredColor: string
  labelColor: string
  formWarningInputBg: string
  formItemMarginBottom: string
  formItemTrailingColon: string
  formVerticalLabelPadding: string
  formVerticalLabelMargin: string
  formItemLabelFontSize: string
  formItemLabelHeight: string
  formItemLabelColonMarginRight: string
  formItemLabelColonMarginLeft: string
  formErrorInputBg: string
  inputHeightBase: string
  inputHeightLg: string
  inputHeightSm: string
  inputPaddingHorizontal: string
  inputPaddingHorizontalBase: string
  inputPaddingHorizontalSm: string
  inputPaddingHorizontalLg: string
  inputPaddingVerticalBase: string
  inputPaddingVerticalSm: string
  inputPaddingVerticalLg: string
  inputPlaceholderColor: string
  inputColor: string
  inputIconColor: string
  inputBorderColor: string
  inputBg: string
  inputNumberHoverBorderColor: string
  inputNumberHandlerActiveBg: string
  inputNumberHandlerHoverBg: string
  inputNumberHandlerBg: string
  inputNumberHandlerBorderColor: string
  inputAddonBg: string
  inputHoverBorderColor: string
  inputDisabledBg: string
  inputOutlineOffset: string
  inputIconHoverColor: string
  inputDisabledColor: string
  mentionsDropdownBg: string
  mentionsDropdownMenuItemHoverBg: string
  selectBorderColor: string
  selectItemSelectedColor: string
  selectItemSelectedFontWeight: string
  selectDropdownBg: string
  selectItemSelectedBg: string
  selectItemActiveBg: string
  selectDropdownVerticalPadding: string
  selectDropdownFontSize: string
  selectDropdownLineHeight: string
  selectDropdownHeight: string
  selectBackground: string
  selectClearBackground: string
  selectSelectionItemBg: string
  selectSelectionItemBorderColor: string
  selectSingleItemHeightLg: string
  selectMultipleItemHeight: string
  selectMultipleItemHeightLg: string
  selectMultipleItemSpacingHalf: string
  selectMultipleDisabledBackground: string
  selectMultipleItemDisabledColor: string
  selectMultipleItemDisabledBorderColor: string
  cascaderBg: string
  cascaderItemSelectedBg: string
  cascaderMenuBg: string
  cascaderMenuBorderColorSplit: string
  cascaderDropdownVerticalPadding: string
  cascaderDropdownEdgeChildVerticalPadding: string
  cascaderDropdownFontSize: string
  cascaderDropdownLineHeight: string
  anchorBg: string
  anchorBorderColor: string
  anchorLinkTop: string
  anchorLinkLeft: string
  anchorLinkPadding: string
  tooltipMaxWidth: string
  tooltipColor: string
  tooltipBg: string
  tooltipArrowWidth: string
  tooltipDistance: string
  tooltipArrowColor: string
  popoverBg: string
  popoverColor: string
  popoverMinWidth: string
  popoverMinHeight: string
  popoverArrowWidth: string
  popoverArrowColor: string
  popoverArrowOuterColor: string
  popoverDistance: string
  popoverPaddingHorizontal: string
  modalHeaderPaddingVertical: string
  modalHeaderPaddingHorizontal: string
  modalBodyPadding: string
  modalHeaderBg: string
  modalHeaderPadding: string
  modalHeaderBorderWidth: string
  modalHeaderBorderStyle: string
  modalHeaderTitleLineHeight: string
  modalHeaderTitleFontSize: string
  modalHeaderBorderColorSplit: string
  modalHeaderCloseSize: string
  modalContentBg: string
  modalHeadingColor: string
  modalCloseColor: string
  modalFooterBg: string
  modalFooterBorderColorSplit: string
  modalFooterBorderStyle: string
  modalFooterPaddingVertical: string
  modalFooterPaddingHorizontal: string
  modalFooterBorderWidth: string
  modalMaskBg: string
  modalConfirmBodyPadding: string
  modalConfirmTitleFontSize: string
  progressDefaultColor: string
  progressRemainingColor: string
  progressInfoTextColor: string
  progressRadius: string
  progressStepsItemBg: string
  progressTextFontSize: string
  progressTextColor: string
  progressCircleTextFontSize: string
  menuInlineToplevelItemHeight: string
  menuItemHeight: string
  menuItemGroupHeight: string
  menuCollapsedWidth: string
  menuBg: string
  menuPopupBg: string
  menuItemColor: string
  menuInlineSubmenuBg: string
  menuHighlightColor: string
  menuHighlightDangerColor: string
  menuItemActiveBg: string
  menuItemActiveDangerBg: string
  menuItemActiveBorderWidth: string
  menuItemGroupTitleColor: string
  menuItemVerticalMargin: string
  menuItemFontSize: string
  menuItemBoundaryMargin: string
  menuItemPaddingHorizontal: string
  menuItemPadding: string
  menuHorizontalLineHeight: string
  menuIconMarginRight: string
  menuIconSize: string
  menuIconSizeLg: string
  menuItemGroupTitleFontSize: string
  menuDarkColor: string
  menuDarkDangerColor: string
  menuDarkBg: string
  menuDarkArrowColor: string
  menuDarkInlineSubmenuBg: string
  menuDarkHighlightColor: string
  menuDarkItemActiveBg: string
  menuDarkItemActiveDangerBg: string
  menuDarkSelectedItemIconColor: string
  menuDarkSelectedItemTextColor: string
  menuDarkItemHoverBg: string
  spinDotSizeSm: string
  spinDotSize: string
  spinDotSizeLg: string
  tableBg: string
  tableHeaderBg: string
  tableHeaderColor: string
  tableHeaderSortBg: string
  tableBodySortBg: string
  tableRowHoverBg: string
  tableSelectedRowColor: string
  tableSelectedRowBg: string
  tableBodySelectedSortBg: string
  tableSelectedRowHoverBg: string
  tableExpandedRowBg: string
  tablePaddingVertical: string
  tablePaddingHorizontal: string
  tablePaddingVerticalMd: string
  tablePaddingHorizontalMd: string
  tablePaddingVerticalSm: string
  tablePaddingHorizontalSm: string
  tableBorderColor: string
  tableBorderRadiusBase: string
  tableFooterBg: string
  tableFooterColor: string
  tableHeaderBgSm: string
  tableFontSize: string
  tableFontSizeMd: string
  tableFontSizeSm: string
  tableHeaderCellSplitColor: string
  tableHeaderSortActiveBg: string
  tableFixedHeaderSortActiveBg: string
  tableHeaderFilterActiveBg: string
  tableFilterBtnsBg: string
  tableFilterDropdownBg: string
  tableExpandIconBg: string
  tableSelectionColumnWidth: string
  tableStickyScrollBarBg: string
  tableStickyScrollBarRadius: string
  tagDefaultBg: string
  tagDefaultColor: string
  tagFontSize: string
  tagLineHeight: string
  pickerBg: string
  pickerBasicCellHoverColor: string
  pickerBasicCellActiveWithRangeColor: string
  pickerBasicCellHoverWithRangeColor: string
  pickerBasicCellDisabledBg: string
  pickerBorderColor: string
  pickerDateHoverRangeBorderColor: string
  pickerDateHoverRangeColor: string
  pickerTimePanelColumnWidth: string
  pickerTimePanelColumnHeight: string
  pickerTimePanelCellHeight: string
  pickerPanelCellHeight: string
  pickerPanelCellWidth: string
  pickerTextHeight: string
  pickerPanelWithoutTimeCellHeight: string
  calendarBg: string
  calendarInputBg: string
  calendarBorderColor: string
  calendarItemActiveBg: string
  calendarColumnActiveBg: string
  calendarFullBg: string
  calendarFullPanelBg: string
  carouselDotWidth: string
  carouselDotHeight: string
  carouselDotActiveWidth: string
  badgeHeight: string
  badgeHeightSm: string
  badgeDotSize: string
  badgeFontSize: string
  badgeFontSizeSm: string
  badgeFontWeight: string
  badgeStatusSize: string
  badgeTextColor: string
  badgeColor: string
  rateStarColor: string
  rateStarBg: string
  rateStarSize: string
  rateStarHoverScale: string
  cardHeadColor: string
  cardHeadBackground: string
  cardHeadFontSize: string
  cardHeadFontSizeSm: string
  cardHeadPadding: string
  cardHeadPaddingSm: string
  cardHeadHeight: string
  cardHeadHeightSm: string
  cardInnerHeadPadding: string
  cardPaddingBase: string
  cardPaddingBaseSm: string
  cardActionsBackground: string
  cardActionsLiMargin: string
  cardSkeletonBg: string
  cardBackground: string
  cardShadow: string
  cardRadius: string
  cardHeadTabsMarginBottom: string
  cardHeadExtraColor: string
  commentBg: string
  commentPaddingBase: string
  commentNestIndent: string
  commentFontSizeBase: string
  commentFontSizeSm: string
  commentAuthorNameColor: string
  commentAuthorTimeColor: string
  commentActionColor: string
  commentActionHoverColor: string
  commentActionsMarginBottom: string
  commentActionsMarginTop: string
  commentContentDetailPMarginBottom: string
  tabsCardHeadBackground: string
  tabsCardHeight: string
  tabsCardActiveColor: string
  tabsCardHorizontalPadding: string
  tabsCardHorizontalPaddingSm: string
  tabsCardHorizontalPaddingLg: string
  tabsTitleFontSize: string
  tabsTitleFontSizeLg: string
  tabsTitleFontSizeSm: string
  tabsInkBarColor: string
  tabsBarMargin: string
  tabsHorizontalGutter: string
  tabsHorizontalMargin: string
  tabsHorizontalMarginRtl: string
  tabsHorizontalPadding: string
  tabsHorizontalPaddingLg: string
  tabsHorizontalPaddingSm: string
  tabsVerticalPadding: string
  tabsVerticalMargin: string
  tabsScrollingSize: string
  tabsHighlightColor: string
  tabsHoverColor: string
  tabsActiveColor: string
  tabsCardGutter: string
  tabsCardTabActiveBorderTop: string
  backTopColor: string
  backTopBg: string
  backTopHoverBg: string
  avatarSizeBase: string
  avatarSizeLg: string
  avatarSizeSm: string
  avatarFontSizeBase: string
  avatarFontSizeLg: string
  avatarFontSizeSm: string
  avatarBg: string
  avatarColor: string
  avatarBorderRadius: string
  avatarGroupOverlapping: string
  avatarGroupSpace: string
  avatarGroupBorderColor: string
  switchHeight: string
  switchSmHeight: string
  switchMinWidth: string
  switchSmMinWidth: string
  switchDisabledOpacity: string
  switchColor: string
  switchBg: string
  switchShadowColor: string
  switchPadding: string
  switchInnerMarginMin: string
  switchInnerMarginMax: string
  switchSmInnerMarginMin: string
  switchSmInnerMarginMax: string
  paginationItemBg: string
  paginationItemSize: string
  paginationItemSizeSm: string
  paginationFontFamily: string
  paginationFontWeightActive: string
  paginationItemBgActive: string
  paginationItemLinkBg: string
  paginationItemDisabledColorActive: string
  paginationItemDisabledBgActive: string
  paginationItemInputBg: string
  paginationMiniOptionsSizeChangerTop: string
  pageHeaderPadding: string
  pageHeaderPaddingVertical: string
  pageHeaderPaddingBreadcrumb: string
  pageHeaderContentPaddingVertical: string
  pageHeaderBackColor: string
  pageHeaderGhostBg: string
  pageHeaderHeadingTitle: string
  pageHeaderHeadingSubTitle: string
  pageHeaderTabsTabFontSize: string
  breadcrumbBaseColor: string
  breadcrumbLastItemColor: string
  breadcrumbFontSize: string
  breadcrumbIconFontSize: string
  breadcrumbLinkColor: string
  breadcrumbLinkColorHover: string
  breadcrumbSeparatorColor: string
  breadcrumbSeparatorMargin: string
  sliderMargin: string
  sliderRailBackgroundColor: string
  sliderRailBackgroundColorHover: string
  sliderTrackBackgroundColor: string
  sliderTrackBackgroundColorHover: string
  sliderHandleBorderWidth: string
  sliderHandleBackgroundColor: string
  sliderHandleColor: string
  sliderHandleColorHover: string
  sliderHandleColorFocus: string
  sliderHandleColorFocusShadow: string
  sliderHandleColorTooltipOpen: string
  sliderHandleSize: string
  sliderHandleMarginTop: string
  sliderHandleShadow: string
  sliderDotBorderColor: string
  sliderDotBorderColorActive: string
  sliderDisabledColor: string
  sliderDisabledBackgroundColor: string
  treeBg: string
  treeTitleHeight: string
  treeChildPadding: string
  treeDirectorySelectedColor: string
  treeDirectorySelectedBg: string
  treeNodeHoverBg: string
  treeNodeSelectedBg: string
  collapseHeaderPadding: string
  collapseHeaderPaddingExtra: string
  collapseHeaderBg: string
  collapseContentPadding: string
  collapseContentBg: string
  collapseHeaderArrowLeft: string
  skeletonColor: string
  skeletonToColor: string
  skeletonParagraphMarginTop: string
  skeletonParagraphLiMarginTop: string
  skeletonParagraphLiHeight: string
  skeletonTitleHeight: string
  skeletonTitleParagraphMarginTop: string
  transferHeaderHeight: string
  transferItemHeight: string
  transferDisabledBg: string
  transferListHeight: string
  transferItemHoverBg: string
  transferItemSelectedHoverBg: string
  transferItemPaddingVertical: string
  transferListSearchIconTop: string
  messageNoticeContentPadding: string
  messageNoticeContentBg: string
  waveAnimationWidth: string
  alertSuccessBorderColor: string
  alertSuccessBgColor: string
  alertSuccessIconColor: string
  alertInfoBorderColor: string
  alertInfoBgColor: string
  alertInfoIconColor: string
  alertWarningBorderColor: string
  alertWarningBgColor: string
  alertWarningIconColor: string
  alertErrorBorderColor: string
  alertErrorBgColor: string
  alertErrorIconColor: string
  alertMessageColor: string
  alertTextColor: string
  alertCloseColor: string
  alertCloseHoverColor: string
  alertNoIconPaddingVertical: string
  alertWithDescriptionNoIconPaddingVertical: string
  alertWithDescriptionPaddingVertical: string
  alertWithDescriptionPadding: string
  alertIconTop: string
  alertWithDescriptionIconSize: string
  listHeaderBackground: string
  listFooterBackground: string
  listEmptyTextPadding: string
  listItemPadding: string
  listItemPaddingSm: string
  listItemPaddingLg: string
  listItemMetaMarginBottom: string
  listItemMetaAvatarMarginRight: string
  listItemMetaTitleMarginBottom: string
  listCustomizeCardBg: string
  listItemMetaDescriptionFontSize: string
  statisticTitleFontSize: string
  statisticContentFontSize: string
  statisticUnitFontSize: string
  statisticFontFamily: string
  drawerHeaderPadding: string
  drawerBodyPadding: string
  drawerBg: string
  drawerFooterPaddingVertical: string
  drawerFooterPaddingHorizontal: string
  drawerHeaderCloseSize: string
  drawerTitleFontSize: string
  drawerTitleLineHeight: string
  timelineWidth: string
  timelineColor: string
  timelineDotBorderWidth: string
  timelineDotColor: string
  timelineDotBg: string
  timelineItemPaddingBottom: string
  typographyTitleFontWeight: string
  typographyTitleMarginTop: string
  typographyTitleMarginBottom: string
  uploadActionsColor: string
  processTailColor: string
  stepsNavArrowColor: string
  stepsBackground: string
  stepsIconSize: string
  stepsIconCustomSize: string
  stepsIconCustomTop: string
  stepsIconCustomFontSize: string
  stepsIconTop: string
  stepsIconFontSize: string
  stepsIconMargin: string
  stepsTitleLineHeight: string
  stepsSmallIconSize: string
  stepsSmallIconMargin: string
  stepsDotSize: string
  stepsDotTop: string
  stepsCurrentDotSize: string
  stepsDescriptionMaxWidth: string
  stepsNavContentMaxWidth: string
  stepsVerticalIconWidth: string
  stepsVerticalTailWidth: string
  stepsVerticalTailWidthSm: string
  notificationBg: string
  notificationPaddingVertical: string
  notificationPaddingHorizontal: string
  resultTitleFontSize: string
  resultSubtitleFontSize: string
  resultIconFontSize: string
  resultExtraMargin: string
  imageSizeBase: string
  imageFontSizeBase: string
  imageBg: string
  imageColor: string
  imageMaskFontSize: string
  imagePreviewOperationSize: string
  imagePreviewOperationColor: string
  imagePreviewOperationDisabledColor: string
}

declare const useTheme: () => {
  theme: {
    blueBase: string
    blue1: string
    blue2: string
    blue3: string
    blue4: string
    blue5: string
    blue6: string
    blue7: string
    blue8: string
    blue9: string
    blue10: string
    purpleBase: string
    purple1: string
    purple2: string
    purple3: string
    purple4: string
    purple5: string
    purple6: string
    purple7: string
    purple8: string
    purple9: string
    purple10: string
    cyanBase: string
    cyan1: string
    cyan2: string
    cyan3: string
    cyan4: string
    cyan5: string
    cyan6: string
    cyan7: string
    cyan8: string
    cyan9: string
    cyan10: string
    greenBase: string
    green1: string
    green2: string
    green3: string
    green4: string
    green5: string
    green6: string
    green7: string
    green8: string
    green9: string
    green10: string
    magentaBase: string
    magenta1: string
    magenta2: string
    magenta3: string
    magenta4: string
    magenta5: string
    magenta6: string
    magenta7: string
    magenta8: string
    magenta9: string
    magenta10: string
    pinkBase: string
    pink1: string
    pink2: string
    pink3: string
    pink4: string
    pink5: string
    pink6: string
    pink7: string
    pink8: string
    pink9: string
    pink10: string
    redBase: string
    red1: string
    red2: string
    red3: string
    red4: string
    red5: string
    red6: string
    red7: string
    red8: string
    red9: string
    red10: string
    orangeBase: string
    orange1: string
    orange2: string
    orange3: string
    orange4: string
    orange5: string
    orange6: string
    orange7: string
    orange8: string
    orange9: string
    orange10: string
    yellowBase: string
    yellow1: string
    yellow2: string
    yellow3: string
    yellow4: string
    yellow5: string
    yellow6: string
    yellow7: string
    yellow8: string
    yellow9: string
    yellow10: string
    volcanoBase: string
    volcano1: string
    volcano2: string
    volcano3: string
    volcano4: string
    volcano5: string
    volcano6: string
    volcano7: string
    volcano8: string
    volcano9: string
    volcano10: string
    geekblueBase: string
    geekblue1: string
    geekblue2: string
    geekblue3: string
    geekblue4: string
    geekblue5: string
    geekblue6: string
    geekblue7: string
    geekblue8: string
    geekblue9: string
    geekblue10: string
    limeBase: string
    lime1: string
    lime2: string
    lime3: string
    lime4: string
    lime5: string
    lime6: string
    lime7: string
    lime8: string
    lime9: string
    lime10: string
    goldBase: string
    gold1: string
    gold2: string
    gold3: string
    gold4: string
    gold5: string
    gold6: string
    gold7: string
    gold8: string
    gold9: string
    gold10: string
    presetColors: string
    theme: string
    antPrefix: string
    htmlSelector: string
    primaryColor: string
    primaryColorHover: string
    primaryColorActive: string
    primaryColorOutline: string
    processingColor: string
    infoColor: string
    infoColorDeprecatedBg: string
    infoColorDeprecatedBorder: string
    successColor: string
    successColorHover: string
    successColorActive: string
    successColorOutline: string
    successColorDeprecatedBg: string
    successColorDeprecatedBorder: string
    warningColor: string
    warningColorHover: string
    warningColorActive: string
    warningColorOutline: string
    warningColorDeprecatedBg: string
    warningColorDeprecatedBorder: string
    errorColor: string
    errorColorHover: string
    errorColorActive: string
    errorColorOutline: string
    errorColorDeprecatedBg: string
    errorColorDeprecatedBorder: string
    highlightColor: string
    normalColor: string
    white: string
    black: string
    primary1: string
    primary2: string
    primary3: string
    primary4: string
    primary5: string
    primary6: string
    primary7: string
    primary8: string
    primary9: string
    primary10: string
    bodyBackground: string
    componentBackground: string
    popoverBackground: string
    popoverCustomizeBorderColor: string
    fontFamily: string
    codeFamily: string
    textColor: string
    textColorSecondary: string
    textColorInverse: string
    iconColor: string
    iconColorHover: string
    headingColor: string
    textColorDark: string
    textColorSecondaryDark: string
    textSelectionBg: string
    fontVariantBase: string
    fontFeatureSettingsBase: string
    fontSizeBase: string
    fontSizeLg: string
    fontSizeSm: string
    heading1Size: string
    heading2Size: string
    heading3Size: string
    heading4Size: string
    heading5Size: string
    lineHeightBase: string
    borderRadiusBase: string
    borderRadiusSm: string
    paddingLg: string
    paddingMd: string
    paddingSm: string
    paddingXs: string
    paddingXss: string
    controlPaddingHorizontal: string
    controlPaddingHorizontalSm: string
    marginLg: string
    marginMd: string
    marginSm: string
    marginXs: string
    marginXss: string
    heightBase: string
    heightLg: string
    heightSm: string
    itemActiveBg: string
    itemHoverBg: string
    iconfontCssPrefix: string
    linkColor: string
    linkHoverColor: string
    linkActiveColor: string
    linkDecoration: string
    linkHoverDecoration: string
    linkFocusDecoration: string
    linkFocusOutline: string
    easeBaseOut: string
    easeBaseIn: string
    easeOut: string
    easeIn: string
    easeInOut: string
    easeOutBack: string
    easeInBack: string
    easeInOutBack: string
    easeOutCirc: string
    easeInCirc: string
    easeInOutCirc: string
    easeOutQuint: string
    easeInQuint: string
    easeInOutQuint: string
    borderColorBase: string
    borderColorSplit: string
    borderColorInverse: string
    borderWidthBase: string
    borderStyleBase: string
    outlineBlurSize: string
    outlineWidth: string
    outlineColor: string
    outlineFade: string
    backgroundColorLight: string
    backgroundColorBase: string
    disabledColor: string
    disabledBg: string
    disabledActiveBg: string
    disabledColorDark: string
    shadowColor: string
    shadowColorInverse: string
    boxShadowBase: string
    shadow1Up: string
    shadow1Down: string
    shadow1Left: string
    shadow1Right: string
    shadow2: string
    btnFontWeight: string
    btnBorderRadiusBase: string
    btnBorderRadiusSm: string
    btnBorderWidth: string
    btnBorderStyle: string
    btnShadow: string
    btnPrimaryShadow: string
    btnTextShadow: string
    btnPrimaryColor: string
    btnPrimaryBg: string
    btnDefaultColor: string
    btnDefaultBg: string
    btnDefaultBorder: string
    btnDangerColor: string
    btnDangerBg: string
    btnDangerBorder: string
    btnDisableColor: string
    btnDisableBg: string
    btnDisableBorder: string
    btnDefaultGhostColor: string
    btnDefaultGhostBg: string
    btnDefaultGhostBorder: string
    btnFontSizeLg: string
    btnFontSizeSm: string
    btnPaddingHorizontalBase: string
    btnPaddingHorizontalLg: string
    btnPaddingHorizontalSm: string
    btnHeightBase: string
    btnHeightLg: string
    btnHeightSm: string
    btnLineHeight: string
    btnCircleSize: string
    btnCircleSizeLg: string
    btnCircleSizeSm: string
    btnSquareSize: string
    btnSquareSizeLg: string
    btnSquareSizeSm: string
    btnSquareOnlyIconSize: string
    btnSquareOnlyIconSizeSm: string
    btnSquareOnlyIconSizeLg: string
    btnGroupBorder: string
    btnLinkHoverBg: string
    btnTextHoverBg: string
    checkboxSize: string
    checkboxColor: string
    checkboxCheckColor: string
    checkboxCheckBg: string
    checkboxBorderWidth: string
    checkboxBorderRadius: string
    checkboxGroupItemMarginRight: string
    descriptionsBg: string
    descriptionsTitleMarginBottom: string
    descriptionsDefaultPadding: string
    descriptionsMiddlePadding: string
    descriptionsSmallPadding: string
    descriptionsItemPaddingBottom: string
    descriptionsItemTrailingColon: string
    descriptionsItemLabelColonMarginRight: string
    descriptionsItemLabelColonMarginLeft: string
    descriptionsExtraColor: string
    dividerTextPadding: string
    dividerOrientationMargin: string
    dividerColor: string
    dividerVerticalGutter: string
    dropdownSelectedColor: string
    dropdownMenuSubmenuDisabledBg: string
    dropdownSelectedBg: string
    emptyFontSize: string
    radioSize: string
    radioTop: string
    radioBorderWidth: string
    radioDotSize: string
    radioDotColor: string
    radioDotDisabledColor: string
    radioSolidCheckedColor: string
    radioButtonBg: string
    radioButtonCheckedBg: string
    radioButtonColor: string
    radioButtonHoverColor: string
    radioButtonActiveColor: string
    radioButtonPaddingHorizontal: string
    radioDisabledButtonCheckedBg: string
    radioDisabledButtonCheckedColor: string
    radioWrapperMarginRight: string
    screenXs: string
    screenXsMin: string
    screenSm: string
    screenSmMin: string
    screenMd: string
    screenMdMin: string
    screenLg: string
    screenLgMin: string
    screenXl: string
    screenXlMin: string
    screenXxl: string
    screenXxlMin: string
    screenXsMax: string
    screenSmMax: string
    screenMdMax: string
    screenLgMax: string
    screenXlMax: string
    gridColumns: string
    layoutBodyBackground: string
    layoutHeaderBackground: string
    layoutHeaderHeight: string
    layoutHeaderPadding: string
    layoutHeaderColor: string
    layoutFooterPadding: string
    layoutFooterBackground: string
    layoutSiderBackground: string
    layoutTriggerHeight: string
    layoutTriggerBackground: string
    layoutTriggerColor: string
    layoutZeroTriggerWidth: string
    layoutZeroTriggerHeight: string
    layoutSiderBackgroundLight: string
    layoutTriggerBackgroundLight: string
    layoutTriggerColorLight: string
    zindexBadge: string
    zindexTableFixed: string
    zindexAffix: string
    zindexBackTop: string
    zindexPickerPanel: string
    zindexPopupClose: string
    zindexModal: string
    zindexModalMask: string
    zindexMessage: string
    zindexNotification: string
    zindexPopover: string
    zindexDropdown: string
    zindexPicker: string
    zindexPopoconfirm: string
    zindexTooltip: string
    zindexImage: string
    animationDurationSlow: string
    animationDurationBase: string
    animationDurationFast: string
    collapsePanelBorderRadius: string
    dropdownMenuBg: string
    dropdownVerticalPadding: string
    dropdownEdgeChildVerticalPadding: string
    dropdownFontSize: string
    dropdownLineHeight: string
    labelRequiredColor: string
    labelColor: string
    formWarningInputBg: string
    formItemMarginBottom: string
    formItemTrailingColon: string
    formVerticalLabelPadding: string
    formVerticalLabelMargin: string
    formItemLabelFontSize: string
    formItemLabelHeight: string
    formItemLabelColonMarginRight: string
    formItemLabelColonMarginLeft: string
    formErrorInputBg: string
    inputHeightBase: string
    inputHeightLg: string
    inputHeightSm: string
    inputPaddingHorizontal: string
    inputPaddingHorizontalBase: string
    inputPaddingHorizontalSm: string
    inputPaddingHorizontalLg: string
    inputPaddingVerticalBase: string
    inputPaddingVerticalSm: string
    inputPaddingVerticalLg: string
    inputPlaceholderColor: string
    inputColor: string
    inputIconColor: string
    inputBorderColor: string
    inputBg: string
    inputNumberHoverBorderColor: string
    inputNumberHandlerActiveBg: string
    inputNumberHandlerHoverBg: string
    inputNumberHandlerBg: string
    inputNumberHandlerBorderColor: string
    inputAddonBg: string
    inputHoverBorderColor: string
    inputDisabledBg: string
    inputOutlineOffset: string
    inputIconHoverColor: string
    inputDisabledColor: string
    mentionsDropdownBg: string
    mentionsDropdownMenuItemHoverBg: string
    selectBorderColor: string
    selectItemSelectedColor: string
    selectItemSelectedFontWeight: string
    selectDropdownBg: string
    selectItemSelectedBg: string
    selectItemActiveBg: string
    selectDropdownVerticalPadding: string
    selectDropdownFontSize: string
    selectDropdownLineHeight: string
    selectDropdownHeight: string
    selectBackground: string
    selectClearBackground: string
    selectSelectionItemBg: string
    selectSelectionItemBorderColor: string
    selectSingleItemHeightLg: string
    selectMultipleItemHeight: string
    selectMultipleItemHeightLg: string
    selectMultipleItemSpacingHalf: string
    selectMultipleDisabledBackground: string
    selectMultipleItemDisabledColor: string
    selectMultipleItemDisabledBorderColor: string
    cascaderBg: string
    cascaderItemSelectedBg: string
    cascaderMenuBg: string
    cascaderMenuBorderColorSplit: string
    cascaderDropdownVerticalPadding: string
    cascaderDropdownEdgeChildVerticalPadding: string
    cascaderDropdownFontSize: string
    cascaderDropdownLineHeight: string
    anchorBg: string
    anchorBorderColor: string
    anchorLinkTop: string
    anchorLinkLeft: string
    anchorLinkPadding: string
    tooltipMaxWidth: string
    tooltipColor: string
    tooltipBg: string
    tooltipArrowWidth: string
    tooltipDistance: string
    tooltipArrowColor: string
    popoverBg: string
    popoverColor: string
    popoverMinWidth: string
    popoverMinHeight: string
    popoverArrowWidth: string
    popoverArrowColor: string
    popoverArrowOuterColor: string
    popoverDistance: string
    popoverPaddingHorizontal: string
    modalHeaderPaddingVertical: string
    modalHeaderPaddingHorizontal: string
    modalBodyPadding: string
    modalHeaderBg: string
    modalHeaderPadding: string
    modalHeaderBorderWidth: string
    modalHeaderBorderStyle: string
    modalHeaderTitleLineHeight: string
    modalHeaderTitleFontSize: string
    modalHeaderBorderColorSplit: string
    modalHeaderCloseSize: string
    modalContentBg: string
    modalHeadingColor: string
    modalCloseColor: string
    modalFooterBg: string
    modalFooterBorderColorSplit: string
    modalFooterBorderStyle: string
    modalFooterPaddingVertical: string
    modalFooterPaddingHorizontal: string
    modalFooterBorderWidth: string
    modalMaskBg: string
    modalConfirmBodyPadding: string
    modalConfirmTitleFontSize: string
    progressDefaultColor: string
    progressRemainingColor: string
    progressInfoTextColor: string
    progressRadius: string
    progressStepsItemBg: string
    progressTextFontSize: string
    progressTextColor: string
    progressCircleTextFontSize: string
    menuInlineToplevelItemHeight: string
    menuItemHeight: string
    menuItemGroupHeight: string
    menuCollapsedWidth: string
    menuBg: string
    menuPopupBg: string
    menuItemColor: string
    menuInlineSubmenuBg: string
    menuHighlightColor: string
    menuHighlightDangerColor: string
    menuItemActiveBg: string
    menuItemActiveDangerBg: string
    menuItemActiveBorderWidth: string
    menuItemGroupTitleColor: string
    menuItemVerticalMargin: string
    menuItemFontSize: string
    menuItemBoundaryMargin: string
    menuItemPaddingHorizontal: string
    menuItemPadding: string
    menuHorizontalLineHeight: string
    menuIconMarginRight: string
    menuIconSize: string
    menuIconSizeLg: string
    menuItemGroupTitleFontSize: string
    menuDarkColor: string
    menuDarkDangerColor: string
    menuDarkBg: string
    menuDarkArrowColor: string
    menuDarkInlineSubmenuBg: string
    menuDarkHighlightColor: string
    menuDarkItemActiveBg: string
    menuDarkItemActiveDangerBg: string
    menuDarkSelectedItemIconColor: string
    menuDarkSelectedItemTextColor: string
    menuDarkItemHoverBg: string
    spinDotSizeSm: string
    spinDotSize: string
    spinDotSizeLg: string
    tableBg: string
    tableHeaderBg: string
    tableHeaderColor: string
    tableHeaderSortBg: string
    tableBodySortBg: string
    tableRowHoverBg: string
    tableSelectedRowColor: string
    tableSelectedRowBg: string
    tableBodySelectedSortBg: string
    tableSelectedRowHoverBg: string
    tableExpandedRowBg: string
    tablePaddingVertical: string
    tablePaddingHorizontal: string
    tablePaddingVerticalMd: string
    tablePaddingHorizontalMd: string
    tablePaddingVerticalSm: string
    tablePaddingHorizontalSm: string
    tableBorderColor: string
    tableBorderRadiusBase: string
    tableFooterBg: string
    tableFooterColor: string
    tableHeaderBgSm: string
    tableFontSize: string
    tableFontSizeMd: string
    tableFontSizeSm: string
    tableHeaderCellSplitColor: string
    tableHeaderSortActiveBg: string
    tableFixedHeaderSortActiveBg: string
    tableHeaderFilterActiveBg: string
    tableFilterBtnsBg: string
    tableFilterDropdownBg: string
    tableExpandIconBg: string
    tableSelectionColumnWidth: string
    tableStickyScrollBarBg: string
    tableStickyScrollBarRadius: string
    tagDefaultBg: string
    tagDefaultColor: string
    tagFontSize: string
    tagLineHeight: string
    pickerBg: string
    pickerBasicCellHoverColor: string
    pickerBasicCellActiveWithRangeColor: string
    pickerBasicCellHoverWithRangeColor: string
    pickerBasicCellDisabledBg: string
    pickerBorderColor: string
    pickerDateHoverRangeBorderColor: string
    pickerDateHoverRangeColor: string
    pickerTimePanelColumnWidth: string
    pickerTimePanelColumnHeight: string
    pickerTimePanelCellHeight: string
    pickerPanelCellHeight: string
    pickerPanelCellWidth: string
    pickerTextHeight: string
    pickerPanelWithoutTimeCellHeight: string
    calendarBg: string
    calendarInputBg: string
    calendarBorderColor: string
    calendarItemActiveBg: string
    calendarColumnActiveBg: string
    calendarFullBg: string
    calendarFullPanelBg: string
    carouselDotWidth: string
    carouselDotHeight: string
    carouselDotActiveWidth: string
    badgeHeight: string
    badgeHeightSm: string
    badgeDotSize: string
    badgeFontSize: string
    badgeFontSizeSm: string
    badgeFontWeight: string
    badgeStatusSize: string
    badgeTextColor: string
    badgeColor: string
    rateStarColor: string
    rateStarBg: string
    rateStarSize: string
    rateStarHoverScale: string
    cardHeadColor: string
    cardHeadBackground: string
    cardHeadFontSize: string
    cardHeadFontSizeSm: string
    cardHeadPadding: string
    cardHeadPaddingSm: string
    cardHeadHeight: string
    cardHeadHeightSm: string
    cardInnerHeadPadding: string
    cardPaddingBase: string
    cardPaddingBaseSm: string
    cardActionsBackground: string
    cardActionsLiMargin: string
    cardSkeletonBg: string
    cardBackground: string
    cardShadow: string
    cardRadius: string
    cardHeadTabsMarginBottom: string
    cardHeadExtraColor: string
    commentBg: string
    commentPaddingBase: string
    commentNestIndent: string
    commentFontSizeBase: string
    commentFontSizeSm: string
    commentAuthorNameColor: string
    commentAuthorTimeColor: string
    commentActionColor: string
    commentActionHoverColor: string
    commentActionsMarginBottom: string
    commentActionsMarginTop: string
    commentContentDetailPMarginBottom: string
    tabsCardHeadBackground: string
    tabsCardHeight: string
    tabsCardActiveColor: string
    tabsCardHorizontalPadding: string
    tabsCardHorizontalPaddingSm: string
    tabsCardHorizontalPaddingLg: string
    tabsTitleFontSize: string
    tabsTitleFontSizeLg: string
    tabsTitleFontSizeSm: string
    tabsInkBarColor: string
    tabsBarMargin: string
    tabsHorizontalGutter: string
    tabsHorizontalMargin: string
    tabsHorizontalMarginRtl: string
    tabsHorizontalPadding: string
    tabsHorizontalPaddingLg: string
    tabsHorizontalPaddingSm: string
    tabsVerticalPadding: string
    tabsVerticalMargin: string
    tabsScrollingSize: string
    tabsHighlightColor: string
    tabsHoverColor: string
    tabsActiveColor: string
    tabsCardGutter: string
    tabsCardTabActiveBorderTop: string
    backTopColor: string
    backTopBg: string
    backTopHoverBg: string
    avatarSizeBase: string
    avatarSizeLg: string
    avatarSizeSm: string
    avatarFontSizeBase: string
    avatarFontSizeLg: string
    avatarFontSizeSm: string
    avatarBg: string
    avatarColor: string
    avatarBorderRadius: string
    avatarGroupOverlapping: string
    avatarGroupSpace: string
    avatarGroupBorderColor: string
    switchHeight: string
    switchSmHeight: string
    switchMinWidth: string
    switchSmMinWidth: string
    switchDisabledOpacity: string
    switchColor: string
    switchBg: string
    switchShadowColor: string
    switchPadding: string
    switchInnerMarginMin: string
    switchInnerMarginMax: string
    switchSmInnerMarginMin: string
    switchSmInnerMarginMax: string
    paginationItemBg: string
    paginationItemSize: string
    paginationItemSizeSm: string
    paginationFontFamily: string
    paginationFontWeightActive: string
    paginationItemBgActive: string
    paginationItemLinkBg: string
    paginationItemDisabledColorActive: string
    paginationItemDisabledBgActive: string
    paginationItemInputBg: string
    paginationMiniOptionsSizeChangerTop: string
    pageHeaderPadding: string
    pageHeaderPaddingVertical: string
    pageHeaderPaddingBreadcrumb: string
    pageHeaderContentPaddingVertical: string
    pageHeaderBackColor: string
    pageHeaderGhostBg: string
    pageHeaderHeadingTitle: string
    pageHeaderHeadingSubTitle: string
    pageHeaderTabsTabFontSize: string
    breadcrumbBaseColor: string
    breadcrumbLastItemColor: string
    breadcrumbFontSize: string
    breadcrumbIconFontSize: string
    breadcrumbLinkColor: string
    breadcrumbLinkColorHover: string
    breadcrumbSeparatorColor: string
    breadcrumbSeparatorMargin: string
    sliderMargin: string
    sliderRailBackgroundColor: string
    sliderRailBackgroundColorHover: string
    sliderTrackBackgroundColor: string
    sliderTrackBackgroundColorHover: string
    sliderHandleBorderWidth: string
    sliderHandleBackgroundColor: string
    sliderHandleColor: string
    sliderHandleColorHover: string
    sliderHandleColorFocus: string
    sliderHandleColorFocusShadow: string
    sliderHandleColorTooltipOpen: string
    sliderHandleSize: string
    sliderHandleMarginTop: string
    sliderHandleShadow: string
    sliderDotBorderColor: string
    sliderDotBorderColorActive: string
    sliderDisabledColor: string
    sliderDisabledBackgroundColor: string
    treeBg: string
    treeTitleHeight: string
    treeChildPadding: string
    treeDirectorySelectedColor: string
    treeDirectorySelectedBg: string
    treeNodeHoverBg: string
    treeNodeSelectedBg: string
    collapseHeaderPadding: string
    collapseHeaderPaddingExtra: string
    collapseHeaderBg: string
    collapseContentPadding: string
    collapseContentBg: string
    collapseHeaderArrowLeft: string
    skeletonColor: string
    skeletonToColor: string
    skeletonParagraphMarginTop: string
    skeletonParagraphLiMarginTop: string
    skeletonParagraphLiHeight: string
    skeletonTitleHeight: string
    skeletonTitleParagraphMarginTop: string
    transferHeaderHeight: string
    transferItemHeight: string
    transferDisabledBg: string
    transferListHeight: string
    transferItemHoverBg: string
    transferItemSelectedHoverBg: string
    transferItemPaddingVertical: string
    transferListSearchIconTop: string
    messageNoticeContentPadding: string
    messageNoticeContentBg: string
    waveAnimationWidth: string
    alertSuccessBorderColor: string
    alertSuccessBgColor: string
    alertSuccessIconColor: string
    alertInfoBorderColor: string
    alertInfoBgColor: string
    alertInfoIconColor: string
    alertWarningBorderColor: string
    alertWarningBgColor: string
    alertWarningIconColor: string
    alertErrorBorderColor: string
    alertErrorBgColor: string
    alertErrorIconColor: string
    alertMessageColor: string
    alertTextColor: string
    alertCloseColor: string
    alertCloseHoverColor: string
    alertNoIconPaddingVertical: string
    alertWithDescriptionNoIconPaddingVertical: string
    alertWithDescriptionPaddingVertical: string
    alertWithDescriptionPadding: string
    alertIconTop: string
    alertWithDescriptionIconSize: string
    listHeaderBackground: string
    listFooterBackground: string
    listEmptyTextPadding: string
    listItemPadding: string
    listItemPaddingSm: string
    listItemPaddingLg: string
    listItemMetaMarginBottom: string
    listItemMetaAvatarMarginRight: string
    listItemMetaTitleMarginBottom: string
    listCustomizeCardBg: string
    listItemMetaDescriptionFontSize: string
    statisticTitleFontSize: string
    statisticContentFontSize: string
    statisticUnitFontSize: string
    statisticFontFamily: string
    drawerHeaderPadding: string
    drawerBodyPadding: string
    drawerBg: string
    drawerFooterPaddingVertical: string
    drawerFooterPaddingHorizontal: string
    drawerHeaderCloseSize: string
    drawerTitleFontSize: string
    drawerTitleLineHeight: string
    timelineWidth: string
    timelineColor: string
    timelineDotBorderWidth: string
    timelineDotColor: string
    timelineDotBg: string
    timelineItemPaddingBottom: string
    typographyTitleFontWeight: string
    typographyTitleMarginTop: string
    typographyTitleMarginBottom: string
    uploadActionsColor: string
    processTailColor: string
    stepsNavArrowColor: string
    stepsBackground: string
    stepsIconSize: string
    stepsIconCustomSize: string
    stepsIconCustomTop: string
    stepsIconCustomFontSize: string
    stepsIconTop: string
    stepsIconFontSize: string
    stepsIconMargin: string
    stepsTitleLineHeight: string
    stepsSmallIconSize: string
    stepsSmallIconMargin: string
    stepsDotSize: string
    stepsDotTop: string
    stepsCurrentDotSize: string
    stepsDescriptionMaxWidth: string
    stepsNavContentMaxWidth: string
    stepsVerticalIconWidth: string
    stepsVerticalTailWidth: string
    stepsVerticalTailWidthSm: string
    notificationBg: string
    notificationPaddingVertical: string
    notificationPaddingHorizontal: string
    resultTitleFontSize: string
    resultSubtitleFontSize: string
    resultIconFontSize: string
    resultExtraMargin: string
    imageSizeBase: string
    imageFontSizeBase: string
    imageBg: string
    imageColor: string
    imageMaskFontSize: string
    imagePreviewOperationSize: string
    imagePreviewOperationColor: string
    imagePreviewOperationDisabledColor: string
  }
  toggleTheme: (_nextValue: typeof defaultTheme) => void
}

export {
  BaseLinkProps,
  BaseTextProps,
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Carousel,
  CarouselProps,
  Checkbox,
  CheckboxOptions,
  CheckboxProps,
  Col,
  ColProps,
  Content,
  ContentProps,
  DEFAULT_TABLE_BORDER_STYLES,
  DateTimePicker,
  DateTimePickerProps,
  Divider,
  DividerProps,
  Footer,
  FooterProps,
  Form,
  FormProps,
  HamburgerDrawerPlacementEnum,
  HamburgerDrawerProps,
  HamburgerMenu,
  HamburgerMenuProps,
  Header,
  HeaderProps,
  Icon,
  IconProps,
  IconSet,
  Image,
  ImagePicker,
  ImagePickerProps,
  ImageProps,
  Input,
  InputProps,
  Layout,
  LayoutProps,
  List,
  ListProps,
  Menu,
  MenuIconPosition,
  MenuItem,
  MenuItemProps,
  MenuProps,
  Modal,
  ModalPositionEnum,
  ModalShowOptions,
  OTPInput,
  OTPInputProps,
  OTPInputType,
  Page,
  PageProps,
  PickerEnum,
  Radio,
  RadioOptions,
  RadioProps,
  RichText,
  RichTextProps,
  Row,
  RowProps,
  Select,
  SelectProps,
  SelectPropsDatum,
  Sider,
  SiderProps,
  SubMenu,
  Tab,
  TabProps,
  Table,
  TableColumnDefinition,
  TableHeaderProps,
  TableProps,
  TableRowProps,
  Text,
  TextArea,
  TextAreaProps,
  TextProps,
  TextTypeEnum,
  ThemeProvider,
  assertUnreachable,
  defaultTheme,
  getIconComponent,
  getIconSet,
  useTheme
}
