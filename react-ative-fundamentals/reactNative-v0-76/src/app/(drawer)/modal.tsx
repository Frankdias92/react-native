import React, { useState } from 'react';
import { View, Text, Modal as ModalView, Button, ViewBase, Alert } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface ModalProps {
  modalStatus: true | false
}

export default function Modal ({modalStatus=false}: ModalProps) {
  const [modalVisible, setModalVisible] = useState(modalStatus);

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex w-full h-96 items-center justify-center bg-black/80'>
        <ModalView
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
          className='m-20 bg-white'
        >
          <Text className='color-white'>test modal</Text>
        </ModalView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

