export const formatPrice = (price: number, lang:string = 'es-ES', currency:string = 'EUR') => {
    return Intl.NumberFormat(lang, {
        style: 'currency',
        currency
    }).format(price)
}