import { Button } from '../components/button/ui';

export const TokensExchange = ({ referralStatus }: { referralStatus: boolean }) => {
  return <Button referralStatus={referralStatus} />;
};
