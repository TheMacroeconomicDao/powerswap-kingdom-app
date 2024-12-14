import CopyButton from './button';

export const CopySection = ({ copied }: { copied: string }) => {
  return (
    <div className="mt-6 flex flex-col gap-1">
      <h6 className="text-lg uppercase tracking-widest text-white">{copied}</h6>
      <CopyButton />
    </div>
  );
};
