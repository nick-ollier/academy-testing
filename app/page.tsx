import { auth } from "@/auth";
import Link from "next/link";

export const getUser = async () => {
    const session = await auth();

    return session?.user?.name;
};

export const User = async () => {
    const session = await auth();

    return <p>{session?.user && session.user.name}</p>;
};

export default function Home() {
    return (
        <>
            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center text-center space-y-8">
                        <div className="space-y-2 text-left">
                            <p className="text-lg font-medium">Welcome to</p>
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                                Booking Academy 🧪
                            </h1>
                        </div>
                        <Link
                            href="/modules/beginner/01"
                            className="inline-flex h-10 items-center justify-center place-self-end rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-[#003b95] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                            prefetch={false}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </section>
            <section className="w-full py-8">
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                    Beginner
                </h2>
            </section>
            <section className="w-full py-8">
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                    Intermediate
                </h2>
            </section>
            <section className="w-full py-8">
                <h2 className="text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl lg:text-4xl">
                    Advanced
                </h2>
            </section>
        </>
    );
}
