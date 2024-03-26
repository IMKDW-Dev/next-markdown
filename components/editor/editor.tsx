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
      setContent(value);
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
      <Toolbar changeContent={changeContentHandler} content={content} ref={textareaRef} />
      <div className="flex h-full w-full flex-row pt-[50px]">
        <TextArea content={content} changeContent={changeContentHandler} ref={textareaRef} />
        <Preview content={content} />
      </div>
    </div>
  );
}
