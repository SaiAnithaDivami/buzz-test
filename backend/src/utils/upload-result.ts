import { StreamableFile } from '@nestjs/common';

export class UploadResult {
  constructor(
    public readonly fileName: string,
    public readonly mimeType: string,
    public readonly size: number,
    public readonly url: URL,
  ) {}
}
