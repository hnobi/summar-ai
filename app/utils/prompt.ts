
export type Length = 'shorter' | 'concise' | 'longer';

export const generateSummarizationPrompt = (
    text: string,
    tone?: string,
    length?: Length
  ): string => {
    let prompt = `Summarize the following text: ${text}`
  
    if (length) {
      const lengthModifiers = {
        shorter: 'Make it more shorter than the original',
        concise: 'Provide a concise overview',
        longer: 'Expand on the key points with more detail'
      }
      prompt += `, ${lengthModifiers[length]}`
    }
  
    if (tone) {
      prompt += `, using a ${tone} tone`
    }
    return prompt
  }