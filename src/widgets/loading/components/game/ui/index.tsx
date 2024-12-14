import Spinner from './assets/Spinner.svg';

import styles from './styles/LoadingPageUI.module.css';

export const LoadingFallback = () => (
  <div className="flex items-center justify-center w-full h-full">
    <div
      className={`${styles.pulsating} flex size-[100px] items-center justify-center text-center`}
    >
      <div className={styles.spinner}>
        <Spinner />
      </div>
    </div>
  </div>
);
