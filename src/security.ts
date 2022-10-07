import type {Request} from '@google-cloud/functions-framework/build/src/functions';
import {createHmac, timingSafeEqual} from 'crypto';
import {toString} from './utils/query';

export class SignatureError extends Error {
  constructor() {
    super('signature error');
  }
}

export function verifySignature(req: Request) {
  if (process.env.NODE_ENV !== 'production') return;

  const signature = req.headers?.['Payload-Signature'] || '';
  const hmac = createHmac('sha256', process.env.SHORTCUT_SECRET || '');
  hmac.update(req.rawBody || '');
  const trueSignature = hmac.digest();
  const messageSignature = Buffer.from(toString(signature), 'hex');

  if (trueSignature.length !== messageSignature.length)
    throw new SignatureError();

  if (timingSafeEqual(trueSignature, messageSignature)) {
    throw new SignatureError();
  }
}
