'use client';

import ProgressBorder from './assets/progress-border.svg';
import ProgressFill from './assets/progress-fill.svg';
import SuccessMark from './assets/success-mark.svg';
import NotFinishedMark from './assets/not-finished-mark.svg';

const QuestProgress = ({ progress = 0 }: { progress: number }) => {
  return (
    <div className="relative size-fit mx-auto">
      <div className="relative z-20">
        <ProgressBorder
          width={262}
          style={{ objectFit: 'fill', width: '100%' }}
        />
        <div className="absolute right-2 top-0 flex h-[27px] items-center">
          {progress >= 100 ? <SuccessMark /> : <NotFinishedMark />}
        </div>
      </div>
      <div className="absolute max-w-[262px] left-0 top-0 z-10">
        <ProgressFill
          width={262}
          style={{ objectFit: 'fill', width: `${progress}%`, maxWidth: '100%' }}
        />
      </div>
    </div>
  );
};

export default QuestProgress;
