import React, { useState } from 'react';
import { FaPiggyBank, FaChartLine, FaMoneyBillWave, FaCalculator, FaArrowRight } from 'react-icons/fa';

type Concepto = {
  id: number;
  titulo: string;
  descripcion: string;
  ejemplo: string;
  icono: JSX.Element;
};

const FinanzasPersonales = () => {
  const [conceptoActual, setConceptoActual] = useState<number>(0);
  const [mostrarEjemplo, setMostrarEjemplo] = useState<boolean>(false);
  const [ahorroMensual, setAhorroMensual] = useState<string>('');
  const [tasaInteres, setTasaInteres] = useState<string>('');
  const [anios, setAnios] = useState<string>('');
  const [resultado, setResultado] = useState<string>('');

  const conceptos: Concepto[] = [
    {
      id: 0,
      titulo: 'Ahorro',
      descripcion: 'El ahorro es la parte del ingreso que no se gasta en el consumo, sino que se reserva para necesidades futuras o inversión.',
      ejemplo: 'Si ganas $1,000 al mes y gastas $800, tu ahorro mensual es de $200.',
      icono: <FaPiggyBank className="text-4xl text-green-500 mb-4" />
    },
    {
      id: 1,
      titulo: 'Inversión',
      descripcion: 'La inversión es el acto de destinar recursos con el objetivo de obtener un beneficio económico en el futuro.',
      ejemplo: 'Comprar acciones de una empresa o invertir en un negocio propio son ejemplos de inversión.',
      icono: <FaChartLine className="text-4xl text-blue-500 mb-4" />
    },
    {
      id: 2,
      titulo: 'Presupuesto',
      descripcion: 'Un presupuesto es una estimación de ingresos y gastos durante un período de tiempo futuro, generalmente un mes o un año.',
      ejemplo: 'Planificar gastar $300 en alimentos, $200 en transporte y $100 en entretenimiento cada mes.',
      icono: <FaMoneyBillWave className="text-4xl text-yellow-500 mb-4" />
    }
  ];

  const siguienteConcepto = () => {
    setMostrarEjemplo(false);
    setConceptoActual((prev) => (prev + 1) % conceptos.length);
  };

  const conceptoAnterior = () => {
    setMostrarEjemplo(false);
    setConceptoActual((prev) => (prev - 1 + conceptos.length) % conceptos.length);
  };

  const calcularInteresCompuesto = (e: React.FormEvent) => {
    e.preventDefault();
    const P = parseFloat(ahorroMensual);
    const r = parseFloat(tasaInteres) / 100 / 12; // Tasa mensual
    const t = parseInt(anios) * 12; // Meses
    
    if (P && r && t) {
      const A = P * ((Math.pow(1 + r, t) - 1) / r);
      setResultado(`$${A.toFixed(2)}`);
    }
  };

  const concepto = conceptos[conceptoActual];

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">
        Finanzas Personales Básicas
      </h2>
      
      <div className="mb-8 p-6 bg-slate-50 rounded-lg">
        <div className="text-center">
          {concepto.icono}
          <h3 className="text-2xl font-semibold text-slate-700 mb-4">{concepto.titulo}</h3>
          <p className="text-slate-600 mb-6">{concepto.descripcion}</p>
          
          <button
            onClick={() => setMostrarEjemplo(!mostrarEjemplo)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors mb-4"
          >
            {mostrarEjemplo ? 'Ocultar ejemplo' : 'Ver ejemplo'}
          </button>
          
          {mostrarEjemplo && (
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-md text-slate-700">
              <p className="font-medium">Ejemplo:</p>
              <p>{concepto.ejemplo}</p>
            </div>
          )}
          
          <div className="flex justify-between mt-6">
            <button
              onClick={conceptoAnterior}
              className="px-4 py-2 bg-slate-200 text-slate-700 rounded hover:bg-slate-300 transition-colors"
            >
              Anterior
            </button>
            <button
              onClick={siguienteConcepto}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors flex items-center"
            >
              Siguiente <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-slate-50 rounded-lg">
        <h3 className="text-xl font-semibold text-center text-slate-700 mb-6">
          Calculadora de Interés Compuesto
        </h3>
        <form onSubmit={calcularInteresCompuesto} className="max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-slate-700 mb-2">Ahorro mensual ($):</label>
            <input
              type="number"
              value={ahorroMensual}
              onChange={(e) => setAhorroMensual(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-slate-700 mb-2">Tasa de interés anual (%):</label>
            <input
              type="number"
              step="0.1"
              value={tasaInteres}
              onChange={(e) => setTasaInteres(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-slate-700 mb-2">Años de inversión:</label>
            <input
              type="number"
              value={anios}
              onChange={(e) => setAnios(e.target.value)}
              className="w-full p-2 border border-slate-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors flex items-center justify-center"
          >
            <FaCalculator className="mr-2" /> Calcular
          </button>
        </form>
        
        {resultado && (
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md text-center">
            <p className="text-lg font-medium text-green-800">
              Después de {anios} años, tendrías aproximadamente: 
              <span className="text-2xl font-bold block mt-2">{resultado}</span>
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-8 text-center text-sm text-slate-500">
        <p>Desliza para ver más conceptos financieros básicos</p>
      </div>
    </div>
  );
};

export default FinanzasPersonales;
