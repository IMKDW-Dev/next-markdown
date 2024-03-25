interface Props {
  content: string;
  changeContent: (value: string) => void;
}

export default function Bold({ changeContent, content }: Props) {
  const clickHandler = () => {
    const data = `${content}${content.length !== 0 ? '\n' : ''}# `;
    changeContent(data);
  };

  return (
    <button className="flex h-full w-full items-center justify-center pl-4  pr-4" type="button" onClick={clickHandler}>
      <span className="font-bold">H1</span>
    </button>
  );
}
