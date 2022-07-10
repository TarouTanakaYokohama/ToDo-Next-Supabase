import { FC, ReactNodee } from "react";
import Head from "next/head";
import { BadgeCheckIcon } from "@heroicons/react/solid";

type Title = {
    title: string;
    children: ReactNode;
};

export const Layout: FC<Title> = ({ children, title = "ToDo app" }) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center font-mono text-gray-800">
            <Head>
                <title>{title}</title>
                <header></header>
                <main className="flex w-screen flex-1 flex-col items-center justify-center">
                    {children}
                </main>
                <footer className="items-conter flex h-12 w-full justify-center border-t">
                    <BadgeCheckIcon className="h-6 w-6 text-blue-500"></BadgeCheckIcon>
                </footer>
            </Head>
        </div>
    );
};
