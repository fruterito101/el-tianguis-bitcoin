import { useState } from 'react';
import { Puesto } from './Puesto';
import { LessonModal } from './LessonModal';

interface TianguisProps {
  sats: number;
  completedLessons: string[];
  onPurchase: (cost: number, lessonId: string) => boolean;
}

export const puestos = [
  {
    id: 'tacos',
    nombre: 'Doña Pelos',
    emoji: '🌮',
    tipo: 'Tacos',
    descripcion: 'Los mejores tacos del tianguis',
    color: 'from-red-400 to-orange-400',
    lessons: [
      {
        id: 'tacos-1',
        titulo: '¿Qué son las comisiones?',
        contenido: 'Cuando pagas con tarjeta, el banco le quita hasta el 3% a Doña Pelos. Con Bitcoin Lightning, paga menos del 1%. Más dinero para ella, mejores tacos para ti.',
        precio: 500,
        producto: 'Taco al pastor'
      },
      {
        id: 'tacos-2',
        titulo: 'Bitcoin vs Peso',
        contenido: 'En 2015, un taco costaba $10 pesos. Hoy cuesta $20. El peso pierde valor (inflación). Bitcoin tiene un límite de 21 millones - no se puede imprimir más.',
        precio: 500,
        producto: 'Taco de suadero'
      },
      {
        id: 'tacos-3',
        titulo: 'Lightning Network',
        contenido: 'Imagina pagar un taco y esperar 10 minutos. Lightning hace pagos Bitcoin instantáneos, perfectos para el tianguis. ¡Zas y listo!',
        precio: 500,
        producto: 'Taco de carnitas'
      }
    ]
  },
  {
    id: 'taller',
    nombre: 'Don Chuy',
    emoji: '🔧',
    tipo: 'Taller Mecánico',
    descripcion: 'Arregla tu carro y tu mente',
    color: 'from-blue-400 to-cyan-400',
    lessons: [
      {
        id: 'taller-1',
        titulo: '¿Qué es un nodo?',
        contenido: 'Don Chuy tiene su propio nodo Bitcoin - es como tener su propio banco en el taller. Verifica las transacciones él mismo, sin intermediarios. Nadie le puede decir que no.',
        precio: 2000,
        producto: 'Cambio de aceite'
      },
      {
        id: 'taller-2',
        titulo: 'Descentralización',
        contenido: 'Bitcoin no tiene dueño ni jefe. Es como si todos los talleres mecánicos fueran dueños del manual de reparación - nadie puede cambiarlo solo. Todos tienen el poder.',
        precio: 2000,
        producto: 'Afinación'
      },
      {
        id: 'taller-3',
        titulo: 'Proof of Work (Minería)',
        contenido: 'Los mineros son como mecánicos que compiten por arreglar carros. El que resuelve el problema primero, se gana los bitcoins nuevos. Requiere trabajo real, energía real.',
        precio: 2000,
        producto: 'Balanceo'
      }
    ]
  },
  {
    id: 'micheladas',
    nombre: 'La Chela',
    emoji: '🍺',
    tipo: 'Micheladas',
    descripcion: 'Para la cruda y la sed',
    color: 'from-amber-400 to-yellow-400',
    lessons: [
      {
        id: 'chela-1',
        titulo: 'Transacciones Rápidas',
        contenido: 'Una michelada bien fría no puede esperar. Lightning procesa miles de transacciones por segundo. Los bancos cierran los domingos - Bitcoin nunca.',
        precio: 800,
        producto: 'Michelada clásica'
      },
      {
        id: 'chela-2',
        titulo: 'Comisiones vs Bancos',
        contenido: 'Enviar $100 USD a México por banco: $15 de comisión + mal tipo de cambio. Con Bitcoin Lightning: centavitos. La Chela te explica que eso es un chingo de micheladas.',
        precio: 800,
        producto: 'Clamato preparado'
      },
      {
        id: 'chela-3',
        titulo: 'Pagos sin Fronteras',
        contenido: 'El primo de La Chela en USA le manda Bitcoin directo. Sin bancos, sin papeleos, sin "límite de retiro". Bitcoin no conoce fronteras.',
        precio: 800,
        producto: 'Cubeta fría'
      }
    ]
  },
  {
    id: 'frutas',
    nombre: 'Doña Lucha',
    emoji: '🧺',
    tipo: 'Frutas y Verduras',
    descripcion: 'Frescas del campo',
    color: 'from-green-400 to-emerald-400',
    lessons: [
      {
        id: 'frutas-1',
        titulo: 'Custodia Propia',
        contenido: 'Doña Lucha guarda su Bitcoin en su propia wallet. "Tus llaves, tus monedas", dice. El banco puede congelar tu cuenta - tu wallet Bitcoin, jamás.',
        precio: 1000,
        producto: 'Kilo de aguacates'
      },
      {
        id: 'frutas-2',
        titulo: 'Seed Phrase (Frase Semilla)',
        contenido: 'Doña Lucha tiene 12 palabras escritas que son su Bitcoin wallet. Mientras tenga esas palabras, nadie le puede quitar sus ahorros. Ni gobierno, ni banco, nadie.',
        precio: 1000,
        producto: 'Canasta mixta'
      },
      {
        id: 'frutas-3',
        titulo: 'Seguridad y Libertad',
        contenido: 'En México, 56% no tiene cuenta bancaria. Con Bitcoin solo necesitas celular. Doña Lucha ahorra sin pedir permiso a nadie. Eso es libertad financiera.',
        precio: 1000,
        producto: 'Frutas de temporada'
      }
    ]
  }
];

export function Tianguis({ sats, completedLessons, onPurchase }: TianguisProps) {
  const [selectedLesson, setSelectedLesson] = useState<any>(null);
  const [selectedPuesto, setSelectedPuesto] = useState<any>(null);

  const handleBuy = (lesson: any, puesto: any) => {
    setSelectedLesson(lesson);
    setSelectedPuesto(puesto);
  };

  const handleCloseLe = () => {
    if (selectedLesson && selectedPuesto) {
      const success = onPurchase(selectedLesson.precio, selectedLesson.id);
      if (success) {
        // Compra exitosa
      }
    }
    setSelectedLesson(null);
    setSelectedPuesto(null);
  };

  const totalLessons = puestos.reduce((acc, p) => acc + p.lessons.length, 0);
  const progress = (completedLessons.length / totalLessons) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-orange-200 p-4 md:p-8">
      {/* Header con balance */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="bg-white rounded-3xl shadow-xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">
                🛒 El Tianguis Bitcoin
              </h1>
              <p className="text-gray-600">¡A aprender comprando!</p>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600 mb-1">Tu billetera:</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-6 py-3 rounded-2xl">
                {sats.toLocaleString()} sats ₿
              </div>
            </div>
          </div>
          {/* Barra de progreso */}
          <div className="mt-6">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Progreso de aprendizaje</span>
              <span>{completedLessons.length}/{totalLessons} lecciones</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div 
                className="bg-gradient-to-r from-orange-500 to-yellow-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Grid de puestos */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {puestos.map(puesto => (
          <Puesto
            key={puesto.id}
            puesto={puesto}
            completedLessons={completedLessons}
            onBuy={handleBuy}
          />
        ))}
      </div>

      {/* Mensaje de victoria */}
      {completedLessons.length === totalLessons && (
        <div className="max-w-2xl mx-auto mt-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-3xl shadow-2xl p-8 text-center text-white">
          <div className="text-6xl mb-4">🏆</div>
          <h2 className="text-4xl font-bold mb-4">¡CHINGÓN!</h2>
          <p className="text-xl">
            Completaste todas las lecciones del tianguis. Ya sabes más de Bitcoin que el 90% de México. 
            ¡Comparte lo que aprendiste!
          </p>
        </div>
      )}

      {/* Modal de lección */}
      {selectedLesson && selectedPuesto && (
        <LessonModal
          lesson={selectedLesson}
          puesto={selectedPuesto}
          onClose={handleCloseLe}
        />
      )}
    </div>
  );
}
