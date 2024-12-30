'use client';

export const TextSection = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="mx-auto max-w-[800px] text-start text-sm font-normal">
      <h6 className="text-[#6BE185]">{title}</h6>
      <p className="ml-2 text-xs mt-1">{text}</p>
    </div>
  );
};
