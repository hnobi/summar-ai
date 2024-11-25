import { summarize } from '@/actions/openai';
import { generateSummarizationPrompt, Length } from '@/utils/prompt';
import { NextRequest, NextResponse } from 'next/server'

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
    const summary = await summarize(prompt)

    if (!summary) {
      return NextResponse.json(
        { error: 'Summarization failed' },
        { status: 500 }
      )
    }

    return NextResponse.json(summary )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}