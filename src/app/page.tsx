// react components.
import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";
import BasicInformation from "@/components/BasicInformation";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20">
      <div className="z-10 w-full max-w-5xl grid grid-cols-2 gap-4 justify-between font-mono">
        <ClientComponent />
        <ServerComponent />
        <BasicInformation />
      </div>
    </main>
  );
};

export default Home;
