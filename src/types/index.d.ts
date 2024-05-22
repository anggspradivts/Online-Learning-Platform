declare module 'formidable' {
  import { IncomingMessage } from 'http';
  import { EventEmitter } from 'events';

  interface File {
    size: number;
    path: string;
    name: string;
    type: string;
    mimetype: string;
    mtime: Date;
  }

  interface Fields {
    [key: string]: string | undefined;
  }

  interface Files {
    [key: string]: File | File[] | undefined;
  }

  interface FormidableOptions {
    encoding?: string;
    uploadDir?: string;
    keepExtensions?: boolean;
    maxFileSize?: number;
    maxFields?: number;
    maxFieldsSize?: number;
    hash?: boolean | 'sha1' | 'md5' | 'sha256';
    multiples?: boolean;
  }

  class IncomingForm extends EventEmitter {
    constructor(options?: FormidableOptions);
    parse(req: IncomingMessage, callback?: (err: any, fields: Fields, files: Files) => void): void;
  }
}
