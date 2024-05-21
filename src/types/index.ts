declare module 'formidable' {
  import { IncomingHttpHeaders } from 'http';
  import { Stream } from 'stream';

  interface File {
    size: number;
    path: string;
    name: string;
    type: string;
    lastModifiedDate?: Date;
    hash?: string;
    toJSON(): Object;
  }

  interface Files {
    [key: string]: File | File[];
  }

  interface Fields {
    [key: string]: string | string[];
  }

  interface FormidableOptions {
    encoding?: string;
    uploadDir?: string;
    keepExtensions?: boolean;
    maxFileSize?: number;
    maxFields?: number;
    maxFieldsSize?: number;
    hash?: boolean | string;
    multiples?: boolean;
  }

  interface IncomingForm extends FormidableOptions {
    parse(req: import('http').IncomingMessage, callback?: (err: any, fields: Fields, files: Files) => void): void;
    onPart(part: any): void;
    handlePart(part: any): void;
    _parseContentType(str: string): string;
    _fileName(path: string): string;
    _uploadPath(filename?: string): string;
    _maybeEnd(): void;
  }

  function formidable(options?: FormidableOptions): IncomingForm;

  export = formidable;
}
