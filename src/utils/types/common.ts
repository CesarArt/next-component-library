export interface mongoCollection {
    __v: number
    _id: string
    timeStamp: string // e.g:  2025-10-14T20:42:10.790Z"
}
export interface responseApi<T> {
    data?:T
    message:string
    status:number
}