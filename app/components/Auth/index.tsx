import { signIn, signOut } from "@/auth";

export const SignIn = () => (
    <form
        action={async () => {
            "use server";
            await signIn("github");
        }}
    >
        <button type="submit">Sign in with GitHub</button>
    </form>
);

export const SignOut = () => (
    <form
        action={async () => {
            "use server";
            await signOut();
        }}
    >
        <button type="submit">Sign out</button>
    </form>
);
