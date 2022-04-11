
type OrderType = {
    _id?:string
    userId? :string,
    teacherId?:string,
    productId?:string,
    schedule?: {
        day: string,
        hour:string,
    },
    time?:string
    status: boolean
}

export default OrderType;
