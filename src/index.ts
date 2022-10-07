// eslint-disable-next-line node/no-unpublished-import
import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';

export const main: HttpFunction = (req, res) => {
  res.send('Hello, World');
};
