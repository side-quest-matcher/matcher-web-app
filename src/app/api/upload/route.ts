import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const watchHistoryFile = formData.get('watch-history-file') as File;
    const subscriptionsFile = formData.get('subscriptions-file') as File;

    if (!watchHistoryFile || !subscriptionsFile) {
      return NextResponse.json(
        { error: 'Both files are required' },
        { status: 400 }
      );
    }

    // Create unique filenames
    const timestamp = Date.now();
    const watchHistoryPath = join(process.cwd(), 'uploads', `watch-history-${timestamp}.json`);
    const subscriptionsPath = join(process.cwd(), 'uploads', `subscriptions-${timestamp}.csv`);

    // Convert files to array buffers
    const watchHistoryBuffer = await watchHistoryFile.arrayBuffer();
    const subscriptionsBuffer = await subscriptionsFile.arrayBuffer();

    // Write files to the uploads directory
    await writeFile(watchHistoryPath, Buffer.from(watchHistoryBuffer));
    await writeFile(subscriptionsPath, Buffer.from(subscriptionsBuffer));

    return NextResponse.json({
      success: true,
      watchHistoryPath,
      subscriptionsPath
    });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload files' },
      { status: 500 }
    );
  }
}

export const config = {
  api: {
    bodyParser: false, // Disable body parsing, we'll handle raw form data
  },
}; 