import React, {useState, useEffect} from 'react'
import {View} from 'react-native'
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only'

import {TextAvatar, ImageAvatar, CustomAvatar} from './components/'
import {
  fetchImage,
  getContainerStyle,
  generateBackgroundStyle,
  generateBackgroundColor,
} from './helpers'

const UserAvatar = props => {
  let {
    name,
    src,
    bgColor,
    bgColors,
    textColor,
    textStyle,
    size,
    imageStyle,
    style,
    borderRadius,
    component,
    noUpperCase,
  } = props

  // Validations
  if (typeof size === 'string') {
    console.warn('size prop should be a number')
    size = parseInt(size)
  }

  const [inner, setInner] = useState(
    <TextAvatar
      textColor={textColor}
      size={size}
      name={name}
      noUpperCase={noUpperCase}
      textStyle={textStyle}
    />,
  )

  useEffect(() => {
    if (component) {
      setInner(<CustomAvatar size={size} component={component} />)
    } else if (src) {
      const controller = new (AbortController || window.AbortController)()
      fetchImage(src, {signal: controller.signal}).then(isImage => {
        if (isImage) {
          setInner(
            <ImageAvatar src={src} size={size} imageStyle={imageStyle} />,
          )
        }
      })
      return () => controller.abort()
    } else {
      setInner(<TextAvatar textColor={textColor} size={size} name={name} />)
    }
  }, [textColor, size, name, component, imageStyle, src])

  return (
    <View
      style={[
        generateBackgroundStyle(name, bgColor, bgColors),
        getContainerStyle(size, src, borderRadius),
        style,
      ]}>
      {inner}
    </View>
  )
}

export {generateBackgroundColor}

export default UserAvatar
