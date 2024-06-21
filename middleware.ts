// export { auth as middleware } from "@/auth";

import { auth } from "@/auth";

export default auth(req => {
    // req.auth
    if (!req.auth) {
        return Response.redirect(new URL("/", req.url));
    }
});

export const config = {
    matcher: ["/modules/:path*"],
};
