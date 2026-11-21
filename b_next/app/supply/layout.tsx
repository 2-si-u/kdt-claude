export default function SupplyLayout({ children }: LayoutProps<"/supply">) {
    return (
        <main className="mx-auto w-full max-w-[1040px] px-4 py-16">
            {children}
        </main>
    );
}
