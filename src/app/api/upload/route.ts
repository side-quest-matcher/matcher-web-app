import { NextRequest, NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import crypto from 'crypto';

export async function POST(request: NextRequest) {
  // Handle CORS
  if (request.method === 'OPTIONS') {
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  try {
    // Ensure uploads directory exists
    const uploadsDir = join(process.cwd(), 'uploads');
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    const formData = await request.formData();
    const watchHistoryFile = formData.get('watch-history-file') as File;
    const subscriptionsFile = formData.get('subscriptions-file') as File;

    // Verify both files exist and have correct names
    if (!watchHistoryFile || watchHistoryFile.name !== 'watch-history.json' || 
        !subscriptionsFile || subscriptionsFile.name !== 'subscriptions.csv') {
      return NextResponse.json(
        { 
          error: 'Files must be named exactly "watch-history.json" and "subscriptions.csv"' 
        },
        { 
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    // Generate a unique upload ID
    const uploadId = crypto.randomBytes(8).toString('hex');
    const timestamp = Date.now();
    
    // Create upload directory for this specific upload
    const uploadDir = join(uploadsDir, uploadId);
    await mkdir(uploadDir, { recursive: true });

    // Keep original filenames as required
    const watchHistoryPath = join(uploadDir, 'watch-history.json');
    const subscriptionsPath = join(uploadDir, 'subscriptions.csv');

    // Convert files to array buffers
    const watchHistoryBuffer = await watchHistoryFile.arrayBuffer();
    const subscriptionsBuffer = await subscriptionsFile.arrayBuffer();

    // Write files to the uploads directory
    await writeFile(watchHistoryPath, Buffer.from(watchHistoryBuffer));
    await writeFile(subscriptionsPath, Buffer.from(subscriptionsBuffer));

    // Create a metadata file for this upload
    const metadata = {
      uploadId,
      timestamp,
      watchHistoryFile: watchHistoryFile.name,
      subscriptionsFile: subscriptionsFile.name,
      status: 'processing'
    };

    await writeFile(
      join(uploadDir, 'metadata.json'),
      JSON.stringify(metadata, null, 2)
    );

    return NextResponse.json(
      {
        success: true,
        uploadId,
        watchHistoryPath,
        subscriptionsPath,
        message: 'Files uploaded successfully. Use your upload ID to check results.'
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to upload files' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
}; 