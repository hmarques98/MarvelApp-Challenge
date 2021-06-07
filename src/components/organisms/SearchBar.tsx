import { Box } from 'components/molecules/Box';
import { Button } from 'components/molecules/Button';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { theme } from 'theme';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
interface SearchBarProps extends TextInputProps {
  onPress(): void;
  value: string;
  onChangeText(e: string): void;
  placeHolder: string;
}

const SearchBar = ({
  onChangeText,
  onPress,
  value,
  placeHolder,
  ...restProps
}: Partial<SearchBarProps>) => {
  return (
    <Box
      width="100%"
      flexDirection="row"
      alignItems="center"
      justifyContent="center">
      <Box bg="white" width="90%" height={40} px="md" borderRadius="md" my="md">
        <TextInput
          {...restProps}
          placeholder={placeHolder}
          style={{
            height: 40,
            color: theme.colors.primary,
            fontFamily: theme.fonts.body,
          }}
          value={value}
          onChangeText={onChangeText}
        />
      </Box>
      <Button
        hitSlop={{
          right: 20,
        }}
        onPress={onPress}>
        <FontAwesome
          name="search"
          size={20}
          color={theme.colors.white}
          style={{ marginLeft: 16 }}
        />
      </Button>
    </Box>
  );
};
export default SearchBar;
