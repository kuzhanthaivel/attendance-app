import { View, Text } from 'react-native'
import React from 'react'
import { withExpoSnack } from 'nativewind';
import { styled } from 'nativewind';

const SView = styled(View);
const SText = styled(Text);
const STextInput = styled(TextInput);

function SectionScreen() {
  return (
    <SView>
      <SText className="text-bold" >SectionScreen</SText>
    </SView>
  )
}

export default withExpoSnack(SectionScreen);