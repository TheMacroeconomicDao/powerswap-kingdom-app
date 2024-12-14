import { LoadingFallback } from '@/widgets';

export const LoadingPageUI = () => (
  <div className="flex h-[100vh] w-[100vw] items-center justify-center">
    <div className="flex h-[calc(100%-48px)] w-[calc(100%-48px)] items-center justify-center border-[1px] border-white">
      <LoadingFallback />
    </div>
  </div>
);
