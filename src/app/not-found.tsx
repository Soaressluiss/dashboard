import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <h2 className="text-4xl dark:text-light-gray-250 font-['Manrope'] font-bold mb-8 text-center">
        Página não Encontrada!
      </h2>
      <Link href="/">
        <button className=" w-max-w-max max-h-max p-2 rounded-full bg-light-primaryBlue text-light-gray-200 dark:text-light-gray-250 font-manrope hover:bg-dark-background dark:hover:bg-black  dark:hover:outline dark:hover:outline-2 ">
          Voltar a Dashboard
        </button>
      </Link>
    </div>
  );
}
