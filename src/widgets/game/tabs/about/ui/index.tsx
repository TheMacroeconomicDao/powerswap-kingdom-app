import GyberLogoGreen from './assets/gyber-logo-green.svg';

import { ReferenceButton, TabAnimatedGame } from '@/widgets';

import styles from '../../styles/currentTab.module.css';

import tabStyles from './styles/AboutTab.module.css';

export const AboutTab = () => {
  return (
    <TabAnimatedGame className={`${styles.tab_wrapper} flex flex-col gap-1`}>
      <div className="flex justify-end">
        <ReferenceButton
          reference="About us page"
          direction="fromRight"
        />
      </div>
      <div className={`${styles.section_with_border} flex flex-col items-center`}>
        <div className="mt-4">
          <GyberLogoGreen />
        </div>
        <div
          className={`${tabStyles.about_text} mt-6 max-h-[calc(100%-170px)] w-full flex-grow overflow-y-scroll break-words`}
        >
          <p className="text-center text-[14px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ut facere
            reprehenderit voluptas, nemo magnam magni minima recusandae soluta. Eos nulla nihil hic
            itaque modi quas repudiandae placeat tempore esse. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Expedita nam at hic, quasi aut nihil pariatur incidunt
            consequuntur fugit amet cupiditate eum voluptatibus ipsa. Ipsam distinctio consequuntur
            iusto a quibusdam.
          </p>
        </div>
      </div>
    </TabAnimatedGame>
  );
};
