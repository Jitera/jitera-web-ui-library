import { LexicalComposer } from '@lexical/react/LexicalComposer'
import React from 'react'

import PlaygroundNodes from './components/nodes/PlaygroundNodes'
import JiteraRichTextTheme from './components/themes/JiteraRichText'
import { Editor } from './Editor'

import type { RichTextProps } from './types'

export * from './types'

export const RichText: React.FC<RichTextProps> = React.forwardRef<HTMLDivElement, RichTextProps>(
  (props, ref) => {
    const initialConfig = {
      editorState: undefined,
      namespace: 'Playground',
      nodes: [...PlaygroundNodes],
      onError: (error: Error) => {
        throw error
      },
      theme: JiteraRichTextTheme
    }
    return (
      <LexicalComposer initialConfig={initialConfig}>
        <div ref={ref}>
          <Editor {...props} />
        </div>
      </LexicalComposer>
    )
  }
)
