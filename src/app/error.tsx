"use client";

import { useEffect } from "react";

export default function Erro({ erro, reset }: { erro: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(erro);
  }, [erro]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-bold mb-4">Algo deu errado!</h2>
      <button
        onClick={() => reset()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Tentar novamente
      </button>
    </div>
  );
}
