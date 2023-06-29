import Image from "next/image";
import Head from "next/head";
import Card from "@/components/Card";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-0 px-16 ">
      <ToastContainer />
      <Head>
        <title>Aditya Roy - Carde</title>
      </Head>
      <div className="main-container"></div>
      <div className="h-[100vh] w-full lg:w-fit flex items-center justify-center z-10">
        <Card />
      </div>
    </main>
  );
}
