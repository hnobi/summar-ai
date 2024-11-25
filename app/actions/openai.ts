import { generateRewritetionPrompt, Length } from '@/utils/prompt';
import { OpenAI } from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});


export const rewriteService = async (content: string, tone: string= '', length?: Length) => {
  const gpt4MaxToken = 8192;
  const contentLength = content.split(" ").length ;
  const maxTokens = Math.min(gpt4MaxToken - contentLength, 1500);

  const prompt = generateRewritetionPrompt(content, tone, length)

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: 'system',
          content: `You are an expert writer. Rewrite the given text to improve clarity, conciseness,
           and tone. Return your response in JSON format with the following structure:
          "rewritten_text": "Your rewritten text here.",
          "explanation": "Explanation of why the rewritten version is better."
           Ensure the output is a valid JSON object.`
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: maxTokens,
    });
    

    return JSON.parse(response.choices[0].message?.content || "");
  
  } catch (error) {
    console.error('Error fetching data', error);
    throw new Error('Failed to fetch data');
  }
};
