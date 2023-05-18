// /next-rest-framework/client.ts

import { NextRestFramework } from 'next-rest-framework';

export const { defineCatchAllHandler, defineEndpoints } = NextRestFramework({
  //  apiRoutesPath: "src/pages/api", // Only needed if using the src/ folder.
});