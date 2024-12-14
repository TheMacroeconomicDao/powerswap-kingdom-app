import styles from './styles/ErrorPageUI.module.css';

export const ErrorPageUI = () => (
  <div className="flex h-[100vh] w-[100vw] items-center justify-center">
    <div className="flex h-[calc(100%-48px)] w-[calc(100%-48px)] items-center justify-center rounded-[20px] border-[1px] border-white">
      <h6 className={styles.text_pulsating}>Error</h6>
    </div>
  </div>
);
