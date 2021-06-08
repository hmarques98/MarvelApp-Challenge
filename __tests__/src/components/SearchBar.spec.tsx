import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchBar from 'components/organisms/SearchBar';

describe('SearchBar Component', () => {
  it('should renderer correctly', () => {
    render(<SearchBar />);
  });

  it('should text input start empty', () => {
    const textInput = 'textInput';
    const { getByTestId } = render(<SearchBar testID={textInput} />);

    expect(getByTestId(textInput)).toHaveTextContent('');
  });
  it('should handle input value', () => {
    const placeholderTextInput = 'start empty';
    const onChangeText = jest.fn();

    const { getByPlaceholderText } = render(
      <SearchBar
        placeHolder={placeholderTextInput}
        onChangeText={onChangeText}
      />,
    );

    const input = getByPlaceholderText(placeholderTextInput);
    const wroteText = 'hero';
    expect(input).toHaveTextContent('');
    fireEvent.changeText(input, wroteText);
    expect(onChangeText).toBeCalledWith(wroteText);
  });

  it('should have the icon button', () => {
    const buttonTestId = 'IconButton';
    const { getByTestId } = render(<SearchBar />);
    const iconButton = getByTestId(buttonTestId);
    expect(iconButton).toBeDefined();
  });
  it('should the icon button to be clicked', () => {
    const buttonTestId = 'IconButton';
    const onPress = jest.fn();
    const { getByTestId } = render(<SearchBar onPress={onPress} />);
    const iconButton = getByTestId(buttonTestId);
    expect(onPress).not.toBeCalled();
    fireEvent.press(iconButton);
    expect(onPress).toBeCalled();
  });
  it('should the icon button to be clicked twice', () => {
    const buttonTestId = 'IconButton';
    const onPress = jest.fn();
    const { getByTestId, debug } = render(<SearchBar onPress={onPress} />);
    const iconButton = getByTestId(buttonTestId);
    expect(onPress).not.toBeCalled();
    fireEvent.press(iconButton);
    fireEvent.press(iconButton);
    expect(onPress).toHaveBeenCalledTimes(2);
    debug();
  });
});
