import { useCount } from '../../context/index';
import * as S from './styles';

export const Count = () => {
  const { count, addition, subtraction } = useCount();

  return (
    <S.Container>
      <S.Button onClick={subtraction}>-</S.Button>
      <S.Count>
        <S.CountText>Contador:</S.CountText>
        <S.CountValue>{count}</S.CountValue>
      </S.Count>
      <S.Button onClick={addition}>+</S.Button>
    </S.Container>
  );
};
