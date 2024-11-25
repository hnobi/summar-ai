import { rewriteService } from '@/actions/openai';
import { Length } from '@/utils/prompt';
import { NextRequest, NextResponse } from 'next/server'

type RequestBody = {
  text: string
  tone?: string
  length?: Length
}

/**
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

    const rewrite = await rewriteService(text, tone, length)

    if (!rewrite) {
      return NextResponse.json(
        { error: 'Rewriting failed' },
        { status: 500 }
      )
    }

    return NextResponse.json(rewrite )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json({ error: errorMessage }, { status: 500 })
  }
}