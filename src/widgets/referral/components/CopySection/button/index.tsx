'use client';

// import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInitData } from '@telegram-apps/sdk-react';
import CopyIcon from './assets/copy-button.svg';
// import { useTranslation } from 'react-i18next';

const CopyButton = () => {
  const initData = useInitData();
  const userId = initData?.user?.id;
  // const { t } = useTranslation('translation', {
  //   keyPrefix: 'referral.pages.main.sections.url',
  // });
  // const [copied, setCopied] = useState(false);

  const handleOpenMiniApp = () => {
    const miniAppUrl = `${process.env.NEXT_PUBLIC_REF_LINK}${userId}`;
    window.open(miniAppUrl, '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.05 }}
      className="relative flex h-[110px] flex-col items-center gap-6"
      onClick={async e => {
        // setCopied(true);
        handleOpenMiniApp();
        // setTimeout(() => setCopied(false), 1000);
      }}
    >
      <CopyIcon />
      {/* {copied && (
        <h6 className="absolute bottom-0 left-0 flex w-full justify-center text-lg uppercase text-[#83FF9E]">
          {t('copied')}
        </h6>
      )} */}
    </motion.button>
  );
};

export default CopyButton;
