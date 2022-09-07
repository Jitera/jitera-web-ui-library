/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useEffect, useMemo } from 'react'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'

import type { RichTextProps } from './types'

const DEFAULT_STATE =
  '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}'

export const Editor: React.FC<Omit<RichTextProps, 'style'>> = ({ data }) => {
  const [editor] = useLexicalComposerContext()
  const internalState = useMemo(() => data || DEFAULT_STATE, [data])
  useEffect(() => {
    editor.update(() => {
      const editorState = editor.parseEditorState(internalState)
      editor.setEditorState(editorState)
    })
  }, [internalState])
  useEffect(() => {
    editor.update(() => {
      editor.setReadOnly(true)
    })
  }, [])

  return (
    <RichTextPlugin
      contentEditable={<ContentEditable />}
      placeholder={<div />}
      initialEditorState={undefined}
    />
  )
}
