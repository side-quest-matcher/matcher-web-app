"use server";
import { writeFile } from 'fs/promises'
import { join } from 'path'

export async function uploadFile(formData: FormData) {
  try {
    const watchHistoryFile = formData.get('watch-history-file') as File
    const subscriptionsFile = formData.get('subscriptions-file') as File

    if (!watchHistoryFile || watchHistoryFile.name !== 'watch-history.json' || 
        !subscriptionsFile || subscriptionsFile.name !== 'subscriptions.csv') {
      return {
        success: false,
        error: 'Both files are required and must be named correctly'
      }
    }

    // Create unique filenames
    const watchHistoryPath = join(process.cwd(), 'uploads', `watch-history.json`)
    const subscriptionsPath = join(process.cwd(), 'uploads', `subscriptions.csv`)

    // Convert files to array buffers
    const watchHistoryBuffer = await watchHistoryFile.arrayBuffer()
    const subscriptionsBuffer = await subscriptionsFile.arrayBuffer()

    // Write files to the uploads directory
    await writeFile(watchHistoryPath, Buffer.from(watchHistoryBuffer))
    await writeFile(subscriptionsPath, Buffer.from(subscriptionsBuffer))

    return {
      success: true,
      watchHistoryPath,
      subscriptionsPath
    }
  } catch (error) {
    console.error('Upload error:', error)
    return {
      success: false,
      error: 'Failed to upload files'
    }
  }
}
