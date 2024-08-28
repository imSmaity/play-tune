"use client"
import React, { useState } from "react"
import Card from "./Card"
import img from "./img.png"
import IconButton from "./IconButton"
import gridIcon from "@/public/assets/icons/grid.png"
import listIcon from "@/public/assets/icons/list.png"
import uploadIcon from "@/public/assets/icons/upload.png"
import Play from "./Play"
import Upload from "./Upload"

const Main = () => {
  const [isGridLayout, setIsGridLayout] = useState(false)
  const [isOpenUpload, setIsOpenUpload] = useState(false)
  return (
    <>
      <div className="p-20">
        <div className="flex flex-col gap-3">
          <div className="w-fit">
            <div className="flex gap-4 items-center">
              <div className="flex items-center p-1 gap-1 bg-black rounded-md">
                <IconButton
                  icon={gridIcon}
                  handleClick={() => setIsGridLayout(true)}
                  className={`w-[35px] h-[35px] hover:bg-slate-800 rounded-md p-2 ${
                    isGridLayout ? "bg-slate-800" : ""
                  }`}
                />
                <IconButton
                  icon={listIcon}
                  handleClick={() => setIsGridLayout(false)}
                  className={`w-[35px] h-[35px] hover:bg-slate-800 rounded-md p-3 ${
                    isGridLayout ? "" : "bg-slate-800"
                  }`}
                />
              </div>
              <IconButton
                icon={uploadIcon}
                handleClick={() => setIsOpenUpload(true)}
                className={`w-[35px] h-[35px] hover:bg-slate-800 rounded-md p-2 cursor-pointer `}
              />
            </div>
          </div>
          <Card
            index={1}
            image={img}
            name="Bataas Dake Na"
            singers="Subhamita"
            time="4:44"
            isTableRow={!isGridLayout}
          />
        </div>
      </div>
      <Play />
      <Upload
        isOpen={isOpenUpload}
        handleClose={() => setIsOpenUpload(false)}
      />
    </>
  )
}

export default Main
