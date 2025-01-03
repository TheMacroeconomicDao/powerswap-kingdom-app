import { Button } from '../components/Button/ui';

export const TokensExchange = ({ refPoints = 0, referralStatus }: { refPoints: number, referralStatus: boolean }) => {
  return <Button refPoints={refPoints}  referralStatus={referralStatus} />;
};
