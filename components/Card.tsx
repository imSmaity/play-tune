import Image, { StaticImageData } from "next/image"
import React from "react"

interface ICardProps {
  index: number | string
  image: string | StaticImageData
  name: string
  singers: string
  time: string
  isTableRow?: boolean
}

const Card = ({
  index,
  image,
  name,
  singers,
  time,
  isTableRow,
}: ICardProps) => {
  return (
    <div
      className={isTableRow ? "flex items-center gap-4" : `flex flex-col gap-3`}
    >
      <div className={isTableRow ? "text-gray-500" : "hidden"}>{index}</div>
      <Image
        src={image}
        alt="Image"
        className={
          isTableRow
            ? "w-[50px] h-[50px] rounded-lg"
            : "w-[250px] h-[250px] rounded-lg"
        }
      />
      <div>
        <div className="text-xl font-semibold">{name}</div>
        <div className="text-gray-500">{singers}</div>
      </div>
      <div className="text-gray-500 text-sm">{time}</div>
    </div>
  )
}

export default Card
