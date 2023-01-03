import Link from 'next/link'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function ImageUpload({ handleImageUpload }) {
  const [uploading, setUploading] = useState(false)
  const [currentImage, setCurrentImage] = useState('')
  const [selectedImage, setSelectedImage] = useState([])
  const [selectedFile, setSelectedFile] = useState<File[]>([])
  const handleUpload = async () => {
    setUploading(true)
    try {
      if (!selectedFile) return
      console.log('formData:-', selectedFile)
      handleImageUpload(selectedImage)
    } catch (error: any) {
      console.log(error.response?.data)
    }
    setUploading(false)
  }
  return (
    <div className="max-w-4xl mx-auto p-20 space-y-6">
      <label>
        <input
          type="file"
          hidden
          onChange={({ target }) => {
            if (target.files) {
              const file = target.files[0]
              console.log('file:-', file)
              const imageFile = {
                filePath: URL.createObjectURL(file),
                file: file,
                contentType: file.type,
                filename: file.name,
              }
              setSelectedImage((prev) => [...prev, imageFile])
              setCurrentImage(URL.createObjectURL(file))
              console.log('on Change fiel:-', file, file.type, file.name)
              setSelectedFile((prev) => [...prev, imageFile])
            }
          }}
        />
        <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
          <span>Select Image</span>
        </div>
      </label>
      <button
        onClick={handleUpload}
        disabled={uploading}
        style={{ opacity: uploading ? '.5' : '1' }}
        className="bg-red-600 p-3 w-32 text-center rounded text-white"
      >
        {uploading ? 'Uploading..' : 'Upload'}
      </button>
      <div className="mt-20 flex space-y-3">
        {selectedImage.length > 0 ? (
          selectedImage.map((imgesPath) => (
            <img src={imgesPath.filePath} key={imgesPath.filePath} alt="" />
          ))
        ) : (
          <span>Select Image</span>
        )}
      </div>
    </div>
  )
}

export default ImageUpload
