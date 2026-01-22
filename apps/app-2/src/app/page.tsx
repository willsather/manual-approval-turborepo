export default async function Home() {
  return (
    <main className="flex h-screen min-h-screen w-full items-center justify-center overflow-hidden bg-white p-6">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center justify-center text-center">
        <h1 className="mb-4 font-extrabold text-gray-900">Application #2</h1>
      </div>
    </main>
  );
}
