"use client";

// from the .env file (public).
const sourceB = `
  BASE_URL : ${process.env.NEXT_PUBLIC_BASE_URL}
  AUTH_SECRET : ${process.env.NEXT_PUBLIC_AUTH_SECRET}
  AUTH_GOOGLE_ID : ${process.env.NEXT_PUBLIC_AUTH_GOOGLE_ID}
  AUTH_GOOGLE_SECRET : ${process.env.NEXT_PUBLIC_AUTH_GOOGLE_SECRET}
`;

const ClientComponent = () => {
  return (
    <div className="border-2 border-slate-700/70 rounded-md p-2">
      <h2 className="text-xl text-center font-mono mb-2 text-sky-500">
        Client Component
      </h2>

      <small className="rounded-t px-2 py-1 bg-zinc-900 text-teal-600 font-semibold mr-2">
        .env
      </small>
      <small className="rounded-t px-2 py-1 bg-zinc-900 text-yellow-600 font-semibold">
        public
      </small>
      <pre className="bg-zinc-900 rounded rounded-tl-none border-slate-700/70 px-2 py-4 text-slate-300">
        {sourceB}
      </pre>
      <br />
    </div>
  );
};

export default ClientComponent;
