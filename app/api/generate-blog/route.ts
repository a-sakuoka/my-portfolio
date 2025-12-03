import { NextRequest, NextResponse } from 'next/server';
import { YoutubeTranscript } from 'youtube-transcript';

export async function POST(request: NextRequest) {
  try {
    // リクエストボディからURLを取得
    const body = await request.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // YouTubeの動画IDを抽出
    const videoId = extractVideoId(url);
    if (!videoId) {
      return NextResponse.json(
        { error: 'Invalid YouTube URL' },
        { status: 400 }
      );
    }

    // YouTube字幕を取得
    const transcriptItems = await YoutubeTranscript.fetchTranscript(videoId);
    
    // 字幕配列を結合して1つの文字列にする
    const transcript = transcriptItems
      .map((item) => item.text)
      .join(' ');

    // n8nのWebhook URLにPOST送信
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (!n8nWebhookUrl) {
      return NextResponse.json(
        { error: 'N8N_WEBHOOK_URL is not configured' },
        { status: 500 }
      );
    }

    const n8nResponse = await fetch(n8nWebhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        transcript: transcript,
      }),
    });

    if (!n8nResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to send transcript to n8n' },
        { status: n8nResponse.status }
      );
    }

    // n8nから返ってきたMarkdownを取得
    const markdown = await n8nResponse.text();

    // フロントエンドに返す
    return NextResponse.json({ markdown });
  } catch (error) {
    console.error('Error generating blog:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// YouTube URLから動画IDを抽出する関数
function extractVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
    /^([a-zA-Z0-9_-]{11})$/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match && match[1]) {
      return match[1];
    }
  }

  return null;
}

