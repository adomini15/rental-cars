import { Order } from "@prisma/client"

export type ReservesTableProps = {
    orders: Order[]
}