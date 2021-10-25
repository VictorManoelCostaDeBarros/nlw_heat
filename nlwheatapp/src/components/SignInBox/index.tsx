import React from 'react';

import {
  View
} from 'react-native';
import { useAtuh } from '../../hooks/auth';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SignInBox(){
  const { signIn, isSigningIn } = useAtuh()
  return (
    <View style={styles.container}>
      <Button 
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
        isLoading={isSigningIn}
        onPress={signIn}
      />
    </View>
  );
}