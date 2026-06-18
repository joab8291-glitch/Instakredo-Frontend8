import { Header } from "@/sections/Header";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import { ConfirmationModal } from "@/components/ConfirmationModal";

export const App = () => {
  return (
    <body className="text-neutral-800 text-base not-italic normal-nums font-normal accent-auto caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible w-full pb-[50px] border-separate font-poppins bg-[radial-gradient(circle_at_15%_10%,rgba(34,197,94,0.16),transparent_45%),radial-gradient(circle_at_85%_0%,rgba(253,230,138,0.25),transparent_50%),radial-gradient(circle_at_50%_100%,rgba(34,197,94,0.12),transparent_50%)] bg-white">
      <Header />
      <Main />
      <Footer />
      <ConfirmationModal />
    </body>
  );
};