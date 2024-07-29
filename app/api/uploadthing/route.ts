import { createRouteHandler } from "uploadthing/next";
import { applicationFileRouter } from "./core";

export const { GET, POST } = createRouteHandler({
    router: applicationFileRouter,
});