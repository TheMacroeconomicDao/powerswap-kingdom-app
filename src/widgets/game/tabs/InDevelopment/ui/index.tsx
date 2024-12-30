import Power from '@/shared/ui/icons/kingdoms/power.svg';

import styles from '../../styles/currentTab.module.css';

import glitchStyles from '@/shared/ui/styles/glitch/glitch.module.css';
import { TabAnimatedGame } from '@/widgets';

export const InDevelopmentTab = () => {
  return (
    <TabAnimatedGame className={styles.tab_wrapper}>
      <div className={styles.section_with_border}>
        <div className="flex size-full flex-col items-center justify-center text-center uppercase">
          <h6 className="font-bold text-[#FEF164]">In Development</h6>
          <p className="break-words">Coming soon</p>
          <div className="relative mx-auto mt-4 flex size-[48px]">
            <div className={`${glitchStyles.glitch} absolute left-0 top-0 z-20 size-[48px]`}>
              <Power />
            </div>
            <div className={`${glitchStyles.glitch} absolute left-0 top-0 size-[48px]`}>
              <Power />
            </div>
            <div className={`${glitchStyles.glitch} absolute left-0 top-0 size-[48px]`}>
              <Power />
            </div>
          </div>
        </div>
      </div>
    </TabAnimatedGame>
  );
};
