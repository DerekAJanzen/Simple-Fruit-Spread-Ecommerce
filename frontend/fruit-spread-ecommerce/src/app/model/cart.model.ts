export interface Cart{
    items: CartItem[],
    total: number,

}


export interface CartItem{
    title: string,
    price: number,
    quantity: number,
    description: string,
    image: string,
}