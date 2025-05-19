import React, { useState } from "react";
import { FaFlask, FaBolt, FaLock, FaQuestionCircle } from "react-icons/fa";

/**
 * Componente educativo interactivo sobre almacenamiento de datos en moléculas sintéticas.
 */
const molecularAlphabet = [
  { symbol: "A", voltage: 1.2 },
  { symbol: "B", voltage: 1.5 },
  { symbol: "C", voltage: 1.8 },
  { symbol: "D", voltage: 2.1 },
];

function encodeMessage(message: string): number[] {
  // Simple encoding: map each character to a voltage (A-D only for demo)
  return message.split("").map((char) => {
    const found = molecularAlphabet.find((m) => m.symbol === char);
    return found ? found.voltage : 0;
  });
}

function decodeVoltages(voltages: number[]): string {
  return voltages
    .map((v) => {
      const found = molecularAlphabet.find((m) => m.voltage === v);
      return found ? found.symbol : "?";
    })
    .join("");
}

const EXAMPLE_PASSWORD = "ABCD";
const EXAMPLE_VOLTAGES = encodeMessage(EXAMPLE_PASSWORD);

const MolecularDataStorage: React.FC = () => {
  const [userMessage, setUserMessage] = useState("");
  const [encoded, setEncoded] = useState<number[]>([]);
  const [decoded, setDecoded] = useState("");

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow mt-8">
      <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
        <FaFlask className="text-blue-500" />
        Almacenamiento de Datos en Moléculas
      </h1>
      <p className="mb-4 text-gray-700">
        Imagina almacenar información en moléculas, como lo hace el ADN, pero usando plásticos sintéticos que pueden leerse con electricidad. Esto permite guardar datos por mucho tiempo sin energía, ¡y con materiales cotidianos!
      </p>
      <div className="mb-6">
        <h2 className="font-semibold flex items-center gap-2">
          <FaBolt className="text-yellow-500" /> ¿Cómo funciona?
        </h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>
            <b>Codificación:</b> Cada carácter se representa con una molécula con propiedades eléctricas únicas.
          </li>
          <li>
            <b>Lectura:</b> Se degradan las moléculas una a una y se mide el voltaje para identificar el carácter.
          </li>
          <li>
            <b>Ejemplo:</b> Un mensaje como <code>"ABCD"</code> se transforma en voltajes: <span className="text-blue-600">{EXAMPLE_VOLTAGES.join(", ")}</span>
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="font-semibold flex items-center gap-2">
          <FaLock className="text-green-600" /> Ventajas y Desafíos
        </h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Almacenamiento a largo plazo sin energía.</li>
          <li>Materiales cotidianos pueden usarse para guardar datos.</li>
          <li>La lectura puede ser lenta y destructiva (solo una vez).</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="font-semibold flex items-center gap-2">
          <FaQuestionCircle className="text-purple-600" /> ¡Practica!
        </h2>
        <div className="flex flex-col gap-2">
          <label className="text-gray-700">Escribe un mensaje usando solo las letras A, B, C o D:</label>
          <input
            className="border rounded px-2 py-1"
            value={userMessage}
            maxLength={8}
            onChange={(e) => setUserMessage(e.target.value.toUpperCase().replace(/[^ABCD]/g, ""))}
            placeholder="Ejemplo: ABCD"
          />
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 w-fit"
            onClick={() => {
              const encoded = encodeMessage(userMessage);
              setEncoded(encoded);
              setDecoded("");
            }}
          >
            Codificar
          </button>
          {encoded.length > 0 && (
            <div className="mt-2">
              <div className="text-sm text-gray-600">Voltajes codificados:</div>
              <div className="font-mono text-blue-700">{encoded.join(", ")}</div>
              <button
                className="mt-2 bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                onClick={() => setDecoded(decodeVoltages(encoded))}
              >
                Decodificar
              </button>
            </div>
          )}
          {decoded && (
            <div className="mt-2 text-green-700 font-bold">Mensaje decodificado: {decoded}</div>
          )}
        </div>
      </div>
      <div className="text-xs text-gray-500 mt-6">
        Inspirado en el artículo de ScienceDaily (2025): "Researchers encode data in molecules readable by electricity".
      </div>
    </div>
  );
};

export default MolecularDataStorage;
