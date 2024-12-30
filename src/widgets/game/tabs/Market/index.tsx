import { Placement } from './placement';
import { ReferenceButton } from '@/widgets';

import styles from '../styles/currentTab.module.css';

export const MarketTab = () => {
  return (
    <div className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className="flex justify-between">
        <div className="flex items-center gap-4 border-[3px] border-white px-1 py-[2px]"></div>
        <ReferenceButton
          direction="fromRight"
          reference="This is market. Here you can trade resources with other people."
        />
      </div>
      <div className={styles.section_with_border}>
        <Placement
          placementHolder="user123123123821"
          assetsAvailable={140000}
          assetsInitially={290000}
        />
      </div>
    </div>
  );
};
