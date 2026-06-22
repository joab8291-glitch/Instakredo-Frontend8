import { Header } from "@/sections/Header";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import { ConfirmationModal } from "@/components/ConfirmationModal";

export const App = () => {
  return (
    <body className="text-[#eef5ef] text-base font-normal overflow-x-hidden overflow-y-auto visible w-full pb-[50px] font-poppins relative bg-[#0a0f0c]">
      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-amber-400/5 blur-3xl pointer-events-none -z-10" />
      <div className="fixed -bottom-20 -right-20 w-[400px] h-[400px] rounded-full bg-green-500/10 blur-3xl pointer-events-none -z-10" />
      <Header />
      <Main />
      <Footer />
      <ConfirmationModal />
    </body>
  );
};