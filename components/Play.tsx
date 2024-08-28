import React, { useEffect, useRef, useState } from "react"
import IconButton from "./IconButton"
import playIcon from "@/public/assets/icons/play-button.png"
import pauseIcon from "@/public/assets/icons/video-pause-button.png"
import nextIcon from "@/public/assets/icons/next.png"
import prevIcon from "@/public/assets/icons/previous.png"

interface ISongDataProps {
  songData: any
}

const Play = ({ songData }: ISongDataProps) => {
  const mediaRef = useRef<HTMLAudioElement>(null)
  const [isPaused, setIsPaused] = useState<boolean>(true)

  useEffect(() => {
    if (songData && mediaRef.current) {
      const audioElement = mediaRef.current
      audioElement.src = URL.createObjectURL(songData.music)
      audioElement
        .play()
        .then(() => setIsPaused(false))
        .catch((error) => console.error(error))
    }
  }, [songData])

  const handlePlay = () => {
    if (mediaRef.current) {
      mediaRef.current
        .play()
        .then(() => setIsPaused(false))
        .catch((error) => console.error(error))
    }
  }

  const handlePause = () => {
    if (mediaRef.current) {
      mediaRef.current.pause()
      setIsPaused(true)
    }
  }

  return (
    <div className="w-full h-12 bg-black fixed bottom-10 border-t border-gray-800">
      <div className="flex justify-center">
        <audio ref={mediaRef} controls className="hidden" />
        <div className="flex gap-4 items-center pt-3">
          <IconButton
            icon={prevIcon}
            handleClick={() => {}}
            className="w-[20px] h-[20px]"
          />
          {isPaused ? (
            <IconButton icon={playIcon} handleClick={handlePlay} />
          ) : (
            <IconButton icon={pauseIcon} handleClick={handlePause} />
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
