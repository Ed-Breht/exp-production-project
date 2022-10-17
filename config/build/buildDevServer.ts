import { BuildOptions } from "./types/config";
import { Configuration as DevServerConfigurations } from "webpack-dev-server";

export function buildDevServer(options: BuildOptions): DevServerConfigurations {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
