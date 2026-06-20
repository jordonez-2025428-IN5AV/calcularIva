/**
 * calcula el subtotal a partir de una lista o arreglo de precios de productos
 * * @param precios - un arreglo de números que representa los costos base de los productos
 * @returns el subtotal de la compra, que es la suma de todos los precios
 */
export declare function calcularSubtotal(precios: number[]): number;
/**
 * calcula el valor del iva a partir de un subtotal y una tasa especifica
 * * @param subtotal el monto base de la compra sobre el cual se aplicara el impuesto
 * @param tasaIva - el porcentaje del impuesto en formato decimal
 * @returns el monto total por concepto de iva
 */
export declare function calcularIva(subtotal: number, tasaIva: number): number;
/**
 * determina el total final de la compra sumando el subtotal y el monto del iva
 * * @param subtotal el monto neto de los productos vendidos
 * @param iva el monto calculado de impuestos a adicionar
 * @returns el total final a pagar por el cliente
 */
export declare function calcularTotal(subtotal: number, iva: number): number;
//# sourceMappingURL=calculos.d.ts.map