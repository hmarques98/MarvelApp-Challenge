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

type SearchScreenNavigationProp = StackNavigationProp<
  CommonStackParamList,
  'Search'
>;

type SearchScreenRouteProp = RouteProp<CommonStackParamList, 'Search'>;

const SearchScreen = () => {
  const navigation = useNavigation<SearchScreenNavigationProp>();
  const route = useRoute<SearchScreenRouteProp>();

  return (
    <SafeAreaView style={styles.safeArea}>
      <Box alignItems="center" justifyContent="center" flex={1}>
        <Typography>Search</Typography>
        <Button onPress={() => {
          navigation.goBack();
          }}>
          <Typography>Back Search</Typography>
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

export default SearchScreen;
