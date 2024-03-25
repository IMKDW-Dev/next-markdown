'use client';

import { useRef, useState } from 'react';
import clsx from 'clsx';

import Preview from './preview/preview';
import TextArea from './textarea/textarea';
import Toolbar from './toolbar/toolbar';

import './editor.css';

interface Props {
  /**
   * Width of the Editor
   * @example 500, 100%
   */
  width: number | string;

  /**
   * Height of the Editor
   * @example 500, 100%
   */
  height: number | string;
}
export default function MarkdownEditor({ width, height }: Props) {
  const [content, setContent] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const changeContentHandler = (value: string) => {
    if (textareaRef.current) {
      /**
       * 기존에 문구가 없으면 value 텍스트를 그대로 설정함
       * 기존에 문구가 있다면 value 텍스트를 추가함
       *  단 이때 툴바에 있는 버튼 또는 단축키를 통해 추가되는 텍스트만 적용됨
       */
      if (content) {
        setContent(value);
      } else {
        // const selectionStart = textareaRef.current?.selectionStart ?? 0;
        // const selectionEnd = textareaRef.current?.selectionEnd ?? 0;
        // const start = content.slice(0, selectionStart);
        // const end = content.slice(selectionEnd);
        // setContent(`${start}${value}${end}`);
        setContent(value);
      }

      textareaRef.current.focus();
    }
  };

  return (
    <div
      className={clsx('relative flex flex-col overflow-hidden border border-gray-300')}
      style={{
        height: typeof height === 'number' ? `${height}px` : height,
        width: typeof width === 'number' ? `${width}px` : width,
      }}
    >
      <Toolbar changeContent={changeContentHandler} content={content} />
      <div className="flex h-full w-full flex-row pt-[50px]">
        <TextArea content={content} changeContent={changeContentHandler} ref={textareaRef} />
        <Preview content={content} />
      </div>
    </div>
  );
}
