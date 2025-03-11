'use client';

import Paperclip from '../../../../assets/paperclip.svg';
import Message from '../../../../assets/message.svg';

import { useUnit } from 'effector-react';
import { $refs } from '@/entities';
import { useTranslation } from 'react-i18next';
import { AnimatedRoutingButton } from '@/shared/ui/components';

export const RefLink = () => {

  const refs = useUnit($refs);

  const { t } = useTranslation('translation', { keyPrefix: 'game.home.navbar' });
  
  return (
      <AnimatedRoutingButton className='relative  active:scale-95 duration-[150ms] ease-in-out' href={'/referral'} setLastPageProp={'game'} move={'right'}>
        <Paperclip />
        {!!refs && refs.referrals_count > 0 && (
          <div className="absolute left-[38px] top-[-2px] size-max">
            <div className="relative h-[24px] w-[24px]">
              <Message />
              <small className="absolute left-0 top-0 size-full text-center text-white">
                {refs.referrals_count}
              </small>
            </div>
          </div>
        )}
        <h6 className='absolute bottom-[-10px] text-[10px] mx-auto left-0 right-0 w-fit'>{t('friends.text')}</h6>
      </AnimatedRoutingButton>
  );
};
