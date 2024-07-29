import {
     generateUploadButton,
     generateUploadDropzone
} from "@uploadthing/react"

import { ApplicationFileRouter } from "@/app/api/uploadthing/core"

export const UploadButton = generateUploadButton<ApplicationFileRouter>();
export const UploadDropzone = generateUploadDropzone<ApplicationFileRouter>();