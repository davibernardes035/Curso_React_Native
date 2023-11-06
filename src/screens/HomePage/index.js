import React, {useState} from 'react';
import {
  Modal,
  TouchableOpacityComponent,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Button,
  Container,
  ContainerButton,
  ContainerText,
  ContainerTitle,
  Line,
  SubTitle,
  Title,
  TextButton,
  ContainerModal,
  TextModal,
  InputModal,
  TextModalButton,
} from './styles';
import More from '../../assets/More.svg';

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [modalButton, setModalButton] = useState('#000000');

  colorButton = [
    '#5CD859',
    '#24A6D9',
    '#5958D9',
    '#8022D9',
    '#D159D8',
    '#D85963',
    '#D88559',
  ];

  const renderButtonColor = () => {
    return colorButton.map(color => {
      return (
        <TouchableOpacity
          key={color}
          style={{
            backgroundColor: color,
            width: 30,
            height: 30,
            margin: 10,
            borderRadius: 8,
          }}
          onPress={() => setModalButton(color)}
        />
      );
    });
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}>
        <ContainerModal>
          <TextModal>Criar Lista</TextModal>
          <InputModal placeholder="Nome da lista"></InputModal>
          <View style={{flexDirection: 'row'}}>{renderButtonColor()}</View>
          <TouchableOpacity
            style={{
              width: '80%',
              height: 47,
              backgroundColor: modalButton,
              borderRadius: 8,
              justifyContent: 'center',
            }}
            onPress={() => setModal(false)}
            >
            <TextModalButton>Criar</TextModalButton>
          </TouchableOpacity>
        </ContainerModal>
      </Modal>
      <Container>
        <ContainerTitle>
          <Line />
          <ContainerText>
            <Title>Davi</Title>
            <SubTitle>List</SubTitle>
          </ContainerText>
          <Line />
        </ContainerTitle>
        <ContainerButton>
          <Button
            onPress={() => {
              setModal(true);
            }}>
            <More />
          </Button>
          <TextButton>Adicionar à lista</TextButton>
        </ContainerButton>
      </Container>
    </>
  );
};

export default HomePage;
