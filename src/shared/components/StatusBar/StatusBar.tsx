import React from 'react'
import { StatusBar, StatusBarProps } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import styled from 'styled-components/native'

interface Container {
  pt: number
  bgColor: string
}

const ContainerComponent = styled.View<Container>`
  padding-top: ${({ pt }) => `${pt}px`};
  background-color: ${({ bgColor }) => bgColor};
`

const CustomStatusBar = ({ backgroundColor, ...props }: StatusBarProps) => {
  const { top } = useSafeAreaInsets()

  return (
    <ContainerComponent pt={top} bgColor={backgroundColor as string}>
      <StatusBar
        animated
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
    </ContainerComponent>
  )
}

export default CustomStatusBar
