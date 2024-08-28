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
  const [songsData, setSongsData] = useState([])
  const [song, setSong] = useState(null)

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
          <div
            className={
              isGridLayout ? "grid grid-cols-4" : "flex flex-col gap-4"
            }
          >
            {songsData.map((song: any, index) => (
              <div key={song?.id} onClick={() => setSong(song)}>
                <Card
                  index={index + 1}
                  image={
                    song.coverImage ? URL.createObjectURL(song.coverImage) : ""
                  }
                  name={song?.title}
                  singers={song?.singers}
                  time="4:44"
                  isTableRow={!isGridLayout}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Play songData={song} />
      <Upload
        isOpen={isOpenUpload}
        handleClose={() => setIsOpenUpload(false)}
        songsData={songsData}
        setSongsData={setSongsData}
      />
    </>
  )
}

export default Main
