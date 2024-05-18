import React from 'react'
import {View, Text} from 'react-native'
import {abbr} from '../helpers';

const TextAvatar = props => {
  const {name, size, textColor, noUpperCase, textStyle, style = {}} = props

  const textContainerStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -(size / 20),
    height: size,
    width: size,
  }

  return (
    <View style={textContainerStyle}>
      {!!name && (
        <Text
          style={[
            {
              color: textColor,
              fontSize: size / 2.5,
              ...style,
            },
            textStyle,
          ]}
          adjustsFontSizeToFit={true}>
          {abbr(name, noUpperCase)}
        </Text>
      )}
    </View>
  )
}

export default TextAvatar
