import { Header } from "@/sections/Header";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import { ConfirmationModal } from "@/components/ConfirmationModal";

export const App = () => {
  return (
    <body className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible w-full pb-[50px] border-separate font-poppins relative bg-white">
      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-green-400/10 blur-3xl pointer-events-none -z-10" />
      <div className="fixed -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-green-400/10 blur-3xl pointer-events-none -z-10" />
      <Header />
      <Main />
      <Footer />
      <ConfirmationModal />
    </body>
  );
};