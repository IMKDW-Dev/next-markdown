import { ChangeEvent, forwardRef, Ref } from 'react';

interface Props {
  content: string;
  changeContent: (value: string) => void;
}

const TextArea = forwardRef(({ content, changeContent }: Props, ref: Ref<HTMLTextAreaElement>) => {
  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    changeContent(event.target.value);
  };

  return (
    <textarea
      className="resize-none w-1/2 outline-none p-2 border-r border-gray-300 h-full"
      value={content}
      onChange={changeHandler}
      ref={ref}
    />
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
