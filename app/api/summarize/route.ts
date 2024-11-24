import { HfInference } from '@huggingface/inference'
import { NextRequest, NextResponse } from 'next/server'

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY)

// Type definitions
type Length = 'shorter' | 'brief' | 'longer'
type RequestBody = {
  text: string
  tone?: string
  length?: Length
}

/**
 *
 *
 * @param {string} text
 * @param {string} [tone]
 * @param {Length} [length]
 * @return {*}  {string}
 */
const generateSummarizationPrompt = (
  text: string,
  tone?: string,
  length?: Length
): string => {
  let prompt = 'Summarize the following text'

  // Add length modifier if it's provided
  if (length) {
    const lengthModifiers = {
      shorter: 'Make it more concise than the original',
      brief: 'Provide a brief overview',
      longer: 'Expand on the key points with more detail'
    }
    prompt += `, ${lengthModifiers[length]}`
  }

  // Add tone modifier if it's provided
  if (tone) {
    prompt += `, using a ${tone} tone`
  }

  prompt += `:\n\n${text}`
  return prompt
}

// Get max tokens based on length preference
const getMaxTokens = (length?: Length): number => {
  const tokenLimits = {
    shorter: 50,
    brief: 100,
    longer: 200
  }
  return length ? tokenLimits[length] : 200
}

export async function POST(request: NextRequest) {
  try {
    const { text, tone, length } = (await request.json()) as RequestBody

    if (!text) {
      return NextResponse.json(
        { error: 'No text provided' },
        { status: 400 }
      )
    }

    const prompt = generateSummarizationPrompt(text, tone, length)
    const maxTokens = getMaxTokens(length)

    const summary = await hf.summarization({
      model: 'facebook/bart-large-cnn',
      inputs: prompt,
      parameters: {
        max_length: maxTokens,
        temperature: 0.7
      }
    })

    if (!summary) {
      return NextResponse.json(
        { error: 'Summarization failed' },
        { status: 500 }
      )
    }

    return NextResponse.json({ summary })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}