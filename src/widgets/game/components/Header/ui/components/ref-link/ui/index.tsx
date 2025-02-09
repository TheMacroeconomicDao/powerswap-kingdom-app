'use client';

import { useRouter } from 'next/navigation';

import Paperclip from '../../../../assets/paperclip.svg';
import Message from '../../../../assets/message.svg';

import { LinkButton } from '../../../styled';

import { useUnit } from 'effector-react';
import { $refs, setLastOpenedPage } from '@/entities';
import { useTranslation } from 'react-i18next';

export const RefLink = () => {
  const router = useRouter();
  const setLastPage = useUnit(setLastOpenedPage);

  const refs = useUnit($refs);

  const handleClick = () => {
    router.push('/referral');
    setLastPage('referral');
  };

  const { t } = useTranslation('translation', { keyPrefix: 'game.home.navbar' });
  
  return (
      <LinkButton className='relative' onClick={handleClick}>
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
        <h6 className='absolute bottom-[-20px] text-[14px] mx-auto left-0 right-0 w-fit'>{t('friends.text')}</h6>
      </LinkButton>
  );
};
