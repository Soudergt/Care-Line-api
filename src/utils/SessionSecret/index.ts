import * as config from "config";
import { createHmac } from "crypto";

export function getSessionSecret() {
  const hash = createHmac('sha512', config.get("session.salt"));

  // hash.update(process.env.npm_package_version);

  return hash.digest('hex');
}