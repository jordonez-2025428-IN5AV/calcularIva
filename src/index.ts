import { calcularSubtotal, calcularIva, calcularTotal } from './calculos.js';

// Configuración global del sistema de ventas
const TASA_IVA_GUATEMALA = 0.12; // 12% de IVA estándar


console.log("=== SISTEMA DE VENTAS - LOG DE PRUEBAS ===");

// ---1: Compra de artículos de tecnología ---
console.log("--- Caso de Prueba 1: Carrito de Tecnología ---");
const carritoTecnologia: number[] = [4500.00, 1200.50, 350.00];

const subtotalTec = calcularSubtotal(carritoTecnologia);
const ivaTec = calcularIva(subtotalTec, TASA_IVA_GUATEMALA);
const totalTec = calcularTotal(subtotalTec, ivaTec);

console.log(`Precios base: Q${carritoTecnologia.join(', Q')}`);
console.log(`Subtotal:    Q${subtotalTec.toFixed(2)}`);
console.log(`IVA (12%):   Q${ivaTec.toFixed(2)}`);
console.log(`Total Final: Q${totalTec.toFixed(2)}\n`);


// --- 2: compra basica de supermercado ---
console.log("--- Caso de Prueba 2: Compra de Supermercado ---");
const carritoSuper: number[] = [45.00, 12.50, 85.00, 60.00];

const subtotalSuper = calcularSubtotal(carritoSuper);
const ivaSuper = calcularIva(subtotalSuper, TASA_IVA_GUATEMALA);
const totalSuper = calcularTotal(subtotalSuper, ivaSuper);

console.log(`Precios base: Q${carritoSuper.join(', Q')}`);
console.log(`Subtotal:    Q${subtotalSuper.toFixed(2)}`);
console.log(`IVA (12%):   Q${ivaSuper.toFixed(2)}`);
console.log(`Total Final: Q${totalSuper.toFixed(2)}\n`);