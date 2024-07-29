import { Car } from "@prisma/client"
import { Dispatch, SetStateAction } from "react"

export type EditCarFormProps = {
    data: Car,
    setOpenDialog: Dispatch<SetStateAction<boolean>>
}