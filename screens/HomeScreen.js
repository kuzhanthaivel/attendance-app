import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

const SView = styled(View);
const SText = styled(Text);
const STextInput = styled(TextInput);

function HomeScreen() {
  return (
    <SView>
      <SText>HomeScreen</SText>
    </SView>
  )
}
export default withExpoSnack(HomeScreen);