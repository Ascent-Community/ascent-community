import { mergeConfig } from "vitest/config";

import config from "../vitest.config";

export default mergeConfig(config, {
  test: {
    include: ["tests/**/*.e2e-spec.ts"],
  },
});
