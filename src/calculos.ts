/**
 * calcula el subtotal a partir de una lista o arreglo de precios de productos
 * * @param precios - un arreglo de números que representa los costos base de los productos
 * @returns el subtotal de la compra, que es la suma de todos los precios 
 */
export function calcularSubtotal(precios: number[]): number {
    return precios.reduce((acumulado, precioActual) => acumulado + precioActual, 0);
}

/**
 * calcula el valor del iva a partir de un subtotal y una tasa especifica
 * * @param subtotal el monto base de la compra sobre el cual se aplicara el impuesto
 * @param tasaIva - el porcentaje del impuesto en formato decimal
 * @returns el monto total por concepto de iva
 */
export function calcularIva(subtotal: number, tasaIva: number): number {
    return subtotal * tasaIva;
}

/**
 * determina el total final de la compra sumando el subtotal y el monto del iva
 * * @param subtotal el monto neto de los productos vendidos
 * @param iva el monto calculado de impuestos a adicionar
 * @returns el total final a pagar por el cliente 
 */
export function calcularTotal(subtotal: number, iva: number): number {
    return subtotal + iva;
}