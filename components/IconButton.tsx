import Image, { StaticImageData } from "next/image"
import React, { MouseEventHandler } from "react"

interface IconButtonProps {
  icon: string | StaticImageData
  handleClick: () => void
  className?: string
}

const IconButton = ({ icon, handleClick, className }: IconButtonProps) => {
  return (
    <Image
      src={icon}
      onClick={handleClick}
      alt="Button"
      className={className}
    />
  )
}

export default IconButton
