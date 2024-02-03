import React from 'react'

interface ImageIconProps {
  src: string
  width: number
  height: number
}

const ImageIcon: React.FC<ImageIconProps> = ({ src, width, height }) => {
  return (
    <img src={`/icons/${src}.png`} alt="Icon" width={width} height={height} />
  )
}

export default ImageIcon
