import * as S from './styles';
import { useCount } from '../../context/index';

export const MirrorCount = () => {
  const { count } = useCount();
  return (
    <S.Container>
      <S.CountText>Espelho do contador:</S.CountText>
      <S.CountValue>{count}</S.CountValue>
    </S.Container>
  );
};
