import { marked } from 'marked';

interface Props {
  content: string;
}

export default function Preview({ content }: Props) {
  const html = marked.parse(content);
  return (
    <div
      className="preview h-full w-1/2 resize-none overflow-y-scroll p-2 outline-none"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
