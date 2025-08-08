export const truncateText = (text: string, length: number = 20): string => {
    if (text.length > length) {
        return text.slice(0, length) + '...'
    }
    return text
}

export const capitalizeWord = (word: string): string => {
    if (word.length === 0) return "";
    if (word.length === 1) return word.toUpperCase();
    return word.charAt(0).toUpperCase() + word.slice(1);
}