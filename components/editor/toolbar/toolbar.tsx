import Heading1 from './buttons/h1';
import Heading2 from './buttons/h2';
import Heading3 from './buttons/h3';
import Heading4 from './buttons/h4';
import ToolbarItem from './toobarItem';

interface Props {
  content: string;
  changeContent: (value: string) => void;
}

export default function Toolbar({ changeContent, content }: Props) {
  const TOOLBAR_DATA = [
    {
      id: 1,
      icon: <Heading1 changeContent={changeContent} content={content} />,
    },
    {
      id: 2,
      icon: <Heading2 changeContent={changeContent} content={content} />,
    },
    {
      id: 3,
      icon: <Heading3 changeContent={changeContent} content={content} />,
    },
    {
      id: 4,
      icon: <Heading4 changeContent={changeContent} content={content} />,
    },
    // {
    //   id: 5,
    //   icon: <FormatBold />,
    // },
    // {
    //   id: 6,
    //   icon: <FormatColorText />,
    // },
    // {
    //   id: 7,
    //   icon: <FormatPaint />,
    // },
    // {
    //   id: 8,
    //   icon: <FormatUnderlined />,
    // },
    // {
    //   id: 9,
    //   icon: <StrikethroughS />,
    // },
    // {
    //   id: 10,
    //   icon: <FormatListBulleted />,
    // },
    // {
    //   id: 11,
    //   icon: <FormatListNumbered />,
    // },
    // {
    //   id: 12,
    //   icon: <FormatQuote />,
    // },
    // {
    //   id: 13,
    //   icon: <Code />,
    // },
  ];

  return (
    <ul className="absolute top-0 z-10 flex h-[50px] w-full flex-row items-center border-b border-gray-300 bg-white">
      {TOOLBAR_DATA.map((item) => (
        <ToolbarItem key={item.id}>{item.icon}</ToolbarItem>
      ))}
    </ul>
  );
}
