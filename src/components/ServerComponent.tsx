// from the .env file.
const sourceA = `
  BASE_URL : ${process.env.BASE_URL}
  AUTH_SECRET : ${process.env.AUTH_SECRET}
  AUTH_GOOGLE_ID : ${process.env.AUTH_GOOGLE_ID}
  AUTH_GOOGLE_SECRET : ${process.env.AUTH_GOOGLE_SECRET}
`;

const ServerComponent = () => {
  return (
    <div className="border-2 border-slate-700/70 rounded-md p-2">
      <h2 className="text-xl text-center font-mono mb-2 text-red-500">
        Server Component
      </h2>

      <small className="rounded-t px-2 py-1 bg-zinc-900 text-teal-600 font-semibold">
        .env
      </small>
      <pre className="bg-zinc-900 rounded rounded-tl-none border-slate-700/70 px-2 py-4 text-slate-300">
        {sourceA}
      </pre>
      <br />
    </div>
  );
};

export default ServerComponent;
