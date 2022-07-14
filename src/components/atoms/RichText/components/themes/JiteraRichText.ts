/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { EditorThemeClasses } from 'lexical'

const theme: EditorThemeClasses = {
  characterLimit: 'JiteraRichText__characterLimit',
  code: 'JiteraRichText__code',
  codeHighlight: {
    atrule: 'JiteraRichText__tokenAttr',
    attr: 'JiteraRichText__tokenAttr',
    boolean: 'JiteraRichText__tokenProperty',
    builtin: 'JiteraRichText__tokenSelector',
    cdata: 'JiteraRichText__tokenComment',
    char: 'JiteraRichText__tokenSelector',
    class: 'JiteraRichText__tokenFunction',
    'class-name': 'JiteraRichText__tokenFunction',
    comment: 'JiteraRichText__tokenComment',
    constant: 'JiteraRichText__tokenProperty',
    deleted: 'JiteraRichText__tokenProperty',
    doctype: 'JiteraRichText__tokenComment',
    entity: 'JiteraRichText__tokenOperator',
    function: 'JiteraRichText__tokenFunction',
    important: 'JiteraRichText__tokenVariable',
    inserted: 'JiteraRichText__tokenSelector',
    keyword: 'JiteraRichText__tokenAttr',
    namespace: 'JiteraRichText__tokenVariable',
    number: 'JiteraRichText__tokenProperty',
    operator: 'JiteraRichText__tokenOperator',
    prolog: 'JiteraRichText__tokenComment',
    property: 'JiteraRichText__tokenProperty',
    punctuation: 'JiteraRichText__tokenPunctuation',
    regex: 'JiteraRichText__tokenVariable',
    selector: 'JiteraRichText__tokenSelector',
    string: 'JiteraRichText__tokenSelector',
    symbol: 'JiteraRichText__tokenProperty',
    tag: 'JiteraRichText__tokenProperty',
    url: 'JiteraRichText__tokenOperator',
    variable: 'JiteraRichText__tokenVariable'
  },
  embedBlock: {
    base: 'JiteraRichText__embedBlock',
    focus: 'JiteraRichText__embedBlockFocus'
  },
  hashtag: 'JiteraRichText__hashtag',
  heading: {
    h1: 'JiteraRichText__h1',
    h2: 'JiteraRichText__h2',
    h3: 'JiteraRichText__h3',
    h4: 'JiteraRichText__h4',
    h5: 'JiteraRichText__h5',
    h6: 'JiteraRichText__h6'
  },
  image: 'editor-image',
  link: 'JiteraRichText__link',
  list: {
    listitem: 'JiteraRichText__listItem',
    listitemChecked: 'JiteraRichText__listItemChecked',
    listitemUnchecked: 'JiteraRichText__listItemUnchecked',
    nested: {
      listitem: 'JiteraRichText__nestedListItem'
    },
    olDepth: [
      'JiteraRichText__ol1',
      'JiteraRichText__ol2',
      'JiteraRichText__ol3',
      'JiteraRichText__ol4',
      'JiteraRichText__ol5'
    ],
    ul: 'JiteraRichText__ul'
  },
  ltr: 'JiteraRichText__ltr',
  mark: 'JiteraRichText__mark',
  markOverlap: 'JiteraRichText__markOverlap',
  paragraph: 'JiteraRichText__paragraph',
  quote: 'JiteraRichText__quote',
  rtl: 'JiteraRichText__rtl',
  table: 'JiteraRichText__table',
  tableCell: 'JiteraRichText__tableCell',
  tableCellHeader: 'JiteraRichText__tableCellHeader',
  text: {
    bold: 'JiteraRichText__textBold',
    code: 'JiteraRichText__textCode',
    italic: 'JiteraRichText__textItalic',
    strikethrough: 'JiteraRichText__textStrikethrough',
    subscript: 'JiteraRichText__textSubscript',
    superscript: 'JiteraRichText__textSuperscript',
    underline: 'JiteraRichText__textUnderline',
    underlineStrikethrough: 'JiteraRichText__textUnderlineStrikethrough'
  }
}

export default theme
