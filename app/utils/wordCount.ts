
export const getWordCount = (text: string) =>{
    const words = text.trim().split(/\s+/);
    return words.filter(word => word !== '').length;
}