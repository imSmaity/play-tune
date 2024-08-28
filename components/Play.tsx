import React, { useRef, useState } from "react"
import IconButton from "./IconButton"
import playIcon from "@/public/assets/icons/play-button.png"
import pauseIcon from "@/public/assets/icons/video-pause-button.png"
import nextIcon from "@/public/assets/icons/next.png"
import prevIcon from "@/public/assets/icons/previous.png"

const Play = () => {
  const mediaRef = useRef<HTMLAudioElement>(null)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  const handlePlay = () => {
    setIsPaused(true)
    mediaRef.current?.play()
  }

  const handlePause = () => {
    setIsPaused(false)
    mediaRef.current?.pause()
  }

  return (
    <div className="w-full h-12 bg-black fixed bottom-10 border-t border-gray-800">
      <div className="flex justify-center">
        <audio
          ref={mediaRef}
          controls
          className="hidden"
          src={"/assets/music/tune.mp3"}
        />
        <div className="flex gap-4 items-center pt-3">
          <IconButton
            icon={prevIcon}
            handleClick={() => {}}
            className="w-[20px] h-[20px]"
          />
          {isPaused ? (
            <IconButton icon={pauseIcon} handleClick={handlePause} />
          ) : (
            <IconButton icon={playIcon} handleClick={handlePlay} />
          )}
          <IconButton
            icon={nextIcon}
            handleClick={() => {}}
            className="w-[20px] h-[20px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Play
