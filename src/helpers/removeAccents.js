export function removeAccents(str) {
    return String(str)
        .normalize('NFD') // Normalize to "decomposed" form
        .replace(/[\u0300-\u036f]/g, ''); // Remove diacritics
}