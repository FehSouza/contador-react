import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #d3d3d3;
  border-radius: 8px;
  border: none;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: 900;
  color: #000000;
  margin: 0 20px;

  &:hover {
    cursor: pointer;
    background-color: #d3d3d3bf;
    transition-duration: 250ms;
  }
`;

export const Count = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`;

export const CountText = styled.span`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #000000;
`;

export const CountValue = styled.span`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #000000;
`;
