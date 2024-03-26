import { ChangeEvent, ForwardedRef, forwardRef } from 'react';

interface Props {
  content: string;
  changeContent: (value: string) => void;
}

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ content, changeContent }, ref: ForwardedRef<HTMLTextAreaElement>) => {
    const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      changeContent(event.target.value);
    };

    return (
      <textarea
        className="h-full w-1/2 resize-none border-r border-gray-300 p-2 outline-none"
        value={content}
        onChange={changeHandler}
        ref={ref}
      />
    );
  },
);

TextArea.displayName = 'TextArea';

export default TextArea;
