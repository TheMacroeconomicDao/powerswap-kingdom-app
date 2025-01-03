import { Button } from '../components/Button/ui';

export const TokensExchange = ({ referralStatus }: { referralStatus: boolean }) => {
  return <Button referralStatus={referralStatus} />;
};
