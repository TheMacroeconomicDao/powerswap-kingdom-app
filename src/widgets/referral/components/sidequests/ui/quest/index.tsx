'use client';

import { useRouter } from 'next/navigation';

export const Quest = ({
  title,
  reward,
  image,
}: {
  title: string;
  reward: React.ReactNode;
  image: React.ReactNode;
}) => {
  const router = useRouter();
  return (
    <button
      className="mx-auto flex w-full max-w-[400px] items-center gap-4 p-4 text-white transition-transform duration-75 ease-in-out active:scale-95"
      onClick={() => {
        router.push('');
      }}
    >
      {image}
      <div className="flex flex-col items-start uppercase">
        <h6 className="text-start text-[14px]">{title}</h6>
        <p className="text-[13px]">{reward}</p>
      </div>
    </button>
  );
};
