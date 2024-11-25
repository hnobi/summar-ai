import { OpenAI } from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});


export const summarize = async (content: string) => {
  const gpt4MaxToken = 8192;
  const contentLength = content.split(" ").length ;
  const maxTokens = Math.min(gpt4MaxToken - contentLength, 1500);

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: 'system',
          content: `You are an expert summarizer.`,
        },
        {
          role: 'user',
          content,
        },
      ],
      max_tokens: maxTokens,
    });
    
    const summary = response.choices[0].message?.content;
    
    return { summary_text: summary };
  } catch (error) {
    console.error('Error fetching data from OpenAI:', error);
    throw new Error('Failed to fetch data from OpenAI');
  }
};
