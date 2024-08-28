import React, { ChangeEvent, useState } from "react"
import { v4 as uuid } from "uuid"

interface IUploadProps {
  isOpen: boolean
  handleClose: () => void
}

const Upload = ({ isOpen, handleClose }: IUploadProps) => {
  const [data, setData] = useState({})

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const key = e.target.name
    const value = e.target.value
    setData({ ...data, [key]: value })
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files
    const key = event.target.name

    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i]
        setData({ ...data, [key]: file })
      }
    }
  }

  const handleUpload = () => {
    const uploadData = { ...data, id: uuid() }
  }

  if (!isOpen) return null
  return (
    <React.Fragment>
      <div className="flex justify-center items-center">
        <div className="w-[450px] h-[350px] bg-white shadow-md rounded-md z-50 absolute p-4">
          <div className="flex flex-col h-full justify-between">
            <div className="flex flex-col gap-3">
              <div className="text-black flex text-sm items-center">
                <div>Music:</div>
                <input
                  name="music"
                  type="file"
                  className="p-3"
                  accept="audio/*"
                  onChange={handleFileUpload}
                />
              </div>
              <div className="text-black flex text-sm items-center">
                <div>Cover Image:</div>
                <input
                  name="coverImage"
                  type="file"
                  className="p-3"
                  accept="image/jpeg, image/png, image/gif, image/webp"
                  onChange={handleFileUpload}
                />
              </div>
              <input
                name="title"
                placeholder="Title"
                className="p-3 outline-none border rounded-lg text-sm text-black"
                onChange={handleInputChange}
              />
              <input
                name="singers"
                placeholder="Singers"
                className="p-3 outline-none border rounded-lg text-sm text-black"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-4">
              <button
                className="p-3 w-full rounded-lg text-sm bg-black"
                onClick={handleUpload}
              >
                Upload
              </button>
              <button
                className="p-3 w-full rounded-lg text-sm bg-gray-200 text-black"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#00000075] w-full h-full absolute top-0"></div>
    </React.Fragment>
  )
}

export default Upload
