interface PuestoProps {
  puesto: any;
  completedLessons: string[];
  onBuy: (lesson: any, puesto: any) => void;
}

export function Puesto({ puesto, completedLessons, onBuy }: PuestoProps) {
  const completedCount = puesto.lessons.filter((l: any) => 
    completedLessons.includes(l.id)
  ).length;

  return (
    <div className={`bg-gradient-to-br ${puesto.color} rounded-3xl shadow-xl p-6 transform hover:scale-105 transition-all`}>
      {/* Header del puesto */}
      <div className="text-center mb-6">
        <div className="text-7xl mb-3">{puesto.emoji}</div>
        <h2 className="text-3xl font-bold text-white mb-1">{puesto.nombre}</h2>
        <p className="text-white opacity-90 text-lg">{puesto.tipo}</p>
        <p className="text-white opacity-75 text-sm mt-2">{puesto.descripcion}</p>
      </div>

      {/* Progreso del puesto */}
      <div className="bg-white bg-opacity-30 rounded-2xl p-3 mb-4">
        <div className="flex justify-between text-white text-sm mb-2">
          <span className="font-semibold">Lecciones:</span>
          <span className="font-bold">{completedCount}/{puesto.lessons.length}</span>
        </div>
        <div className="w-full bg-white bg-opacity-40 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-500"
            style={{ width: `${(completedCount / puesto.lessons.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Lista de productos/lecciones */}
      <div className="space-y-3">
        {puesto.lessons.map((lesson: any) => {
          const isCompleted = completedLessons.includes(lesson.id);
          return (
            <button
              key={lesson.id}
              onClick={() => onBuy(lesson, puesto)}
              disabled={isCompleted}
              className={`w-full text-left p-4 rounded-xl transition-all ${
                isCompleted 
                  ? 'bg-white bg-opacity-50 cursor-default' 
                  : 'bg-white hover:bg-opacity-100 bg-opacity-90 hover:shadow-lg transform hover:-translate-y-1'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    {isCompleted && <span className="text-green-600 text-xl">✓</span>}
                    <h3 className="font-bold text-gray-800">{lesson.producto}</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{lesson.titulo}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded">
                      {lesson.precio.toLocaleString()} sats
                    </span>
                    {isCompleted && (
                      <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded">
                        Completado
                      </span>
                    )}
                  </div>
                </div>
                {!isCompleted && (
                  <div className="text-2xl">🛒</div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Mensaje de completado */}
      {completedCount === puesto.lessons.length && (
        <div className="mt-4 bg-white bg-opacity-90 rounded-2xl p-4 text-center">
          <div className="text-3xl mb-2">🎉</div>
          <p className="font-bold text-gray-800">
            ¡Completaste todas las lecciones de {puesto.nombre}!
          </p>
        </div>
      )}
    </div>
  );
}
