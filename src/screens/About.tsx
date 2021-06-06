import { RouteProp, useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { Box } from 'components/molecules/Box';
import { Button } from 'components/molecules/Button';
import { Typography } from 'components/molecules/Typography';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CommonStackParamList } from 'screens';
import { theme } from 'theme';

type AboutScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'About'
>;

type AboutScreenRouteProp = RouteProp<CommonStackParamList, 'About'>;

const AboutScreen = () => {
  const navigation = useNavigation<AboutScreenNavigationProp>();
  const route = useRoute<AboutScreenRouteProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Typography>About</Typography>
        <Button onPress={() => {
          navigation.goBack();
          }}>
          <Typography>Back About</Typography>
        </Button>
      </Box>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
  },
});

export default AboutScreen;
