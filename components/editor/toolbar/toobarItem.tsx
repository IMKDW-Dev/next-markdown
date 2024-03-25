import React from 'react';

interface Props {
  children: React.ReactNode;
}
export default function ToolbarItem({ children }: Props) {
  return (
    <li className="ml-0 border-r border-gray-300 h-2/3 w-[60px] flex justify-center items-center hover:bg-gray-200 last:border-none">
      {children}
    </li>
  );
}
