'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<null | string>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target

    if (!files) {
      return
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={(value) => onFileSelected(value)}
        type="file"
        name="coverUrl"
        id="media"
        accept="image/*, video/*"
        className="invisible h-0 w-0"
      />

      {preview && (
        <Image
          src={preview}
          width={300}
          height={100}
          className="aspect-video w-full rounded-lg object-cover"
          alt="preview image"
        />
      )}
    </>
  )
}
