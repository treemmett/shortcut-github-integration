import {SignatureError, verifySignature} from './security';
import * as fixtureRequest from '../test/fixtures/shortcut_request.json';
import type {Request} from '@google-cloud/functions-framework/build/src/functions';

describe('signature verification', () => {
  beforeEach(() => {
    process.env.SHORTCUT_SECRET = 'foo';
    process.env.NODE_ENV = 'production';
  });

  test('happy path', () => {
    expect(() => verifySignature(fixtureRequest as unknown as Request)).not
      .toThrow;
  });
  test('sad path', () => {
    expect(() =>
      verifySignature({
        rawBody: '{}',
      } as unknown as Request)
    ).toThrowError(SignatureError);
    expect(() =>
      verifySignature({
        rawBody: '{}',
        signature: 'foobar',
      } as unknown as Request)
    ).toThrowError(SignatureError);
  });
});
