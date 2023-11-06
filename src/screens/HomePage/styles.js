import styled from 'styled-components/native';

export const Title = styled.Text`
  color: #000000;
  font-size: 28px;
  font-weight: bold;
`;

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const ContainerButton = styled.View`
  align-items: center;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  margin-bottom: 55px;
`;

export const ContainerText = styled.View`
  flex-direction: row;
`;

export const ContainerModal = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const SubTitle = styled.Text`
  color: #72bfe8;
  font-weight: 400;
  font-size: 28px;
`;

export const Line = styled.View`
  width: 71px;
  height: 1px;
  background-color: #a6aeae;
`;

export const Button = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border: 1px solid #72bfe8;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-bottom: 7px;
`;

export const TextButton = styled.Text`
  font-size: 10px;
  color: #72bfe8;
`;

export const TextModal = styled.Text`
  font-size: 28px;
  color: #000000;
  font-weight: 700;
  margin-bottom: 14px;
`;

export const InputModal = styled.TextInput`
  width: 80%;
  color: #000;
  height: 47px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 18px;
`;

export const TextModalButton = styled.Text`
  font-size: 20px;
  color: #FFFFFF;
  font-weight: bold;
  text-align: center;
`;