import React from 'react'
import {Image} from 'react-native'

const ImageAvatar = props => {
  const {src, size, imageStyle, borderRadius} = props

  const imageDefaultStyle = {
    borderRadius: borderRadius ? borderRadius : size * 0.5,
    width: size,
    height: size,
  }

  const newProps = {
    style: [imageDefaultStyle, imageStyle],
    source: {uri: src},
  }

  return React.createElement(Image, newProps)
}

export default ImageAvatar
