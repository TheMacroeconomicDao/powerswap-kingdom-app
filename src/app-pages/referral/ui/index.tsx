'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useUnit } from 'effector-react';
import { $refs, getRefs } from '@/entities';
import { $points } from '@/entities/user/referral_points';

import {
  Missions,
  MainPageLink,
  CopySection,
  ReferralInfo,
  LoadingUIMain,
  SideQuestsButton,
  TokensExchange,
} from '@/widgets';

export const ReferralUI = () => {
  const refs = useUnit($refs);
  const refPoints = useUnit($points);
  const getReferrals = useUnit(getRefs);

  const { t } = useTranslation('translation', {
    keyPrefix: 'referral.pages.main',
  });

  useEffect(() => {
    getReferrals();
  }, [getReferrals]);

  return (
    <AnimatePresence>
      {!!refs ? (
        <motion.div
          key="mainui"
          initial={{ opacity: 0, scale: 0.95, translateY: 10 }}
          animate={{ opacity: 1, scale: 1, translateY: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center justify-center"
        >
          <MainPageLink />
          <CopySection copied={t('sections.url.myUrl')} />
          <TokensExchange />
          <ReferralInfo refPoints={refPoints} />
          <Missions
            title={t('sections.quests.inviteQuests.title')}
            refs={refs}
          />
          <SideQuestsButton />
        </motion.div>
      ) : (
        <LoadingUIMain key="loading" />
      )}
    </AnimatePresence>
  );
};
