import styled from 'styled-components';
import style from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  background: #eee;
  & > span {
    line-height: 40px;
    color: #000;
    font-size: 20px;
  }
`;
