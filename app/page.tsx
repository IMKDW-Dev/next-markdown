import MarkdownEditor from '../components/editor/editor';

export default function Home() {
  return (
    <main className="w-[1500px] h-[1000px]">
      <MarkdownEditor width="100%" height={800} />
    </main>
  );
}
