import { View, Text } from 'react-native'
import React from 'react'
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

const SView = styled(View);
const SText = styled(Text);


 function AddStudent() {
  return (
    <SView>
      <SText>AddStudent</SText>
    </SView>
  )
}
export default withExpoSnack(AddStudent);