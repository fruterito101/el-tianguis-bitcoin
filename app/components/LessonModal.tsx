interface LessonModalProps {
  lesson: any;
  puesto: any;
  onClose: () => void;
}

export function LessonModal({ lesson, puesto, onClose }: LessonModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fadeIn">
      <div className={`bg-gradient-to-br ${puesto.color} rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="text-8xl mb-4">{puesto.emoji}</div>
            <h2 className="text-4xl font-bold text-white mb-2">{puesto.nombre}</h2>
            <p className="text-white opacity-90 text-xl">te enseña:</p>
          </div>

          {/* Contenido de la lección */}
          <div className="bg-white rounded-2xl p-6 mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{lesson.titulo}</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {lesson.contenido}
            </p>
            
            {/* Info de la compra */}
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 border-2 border-orange-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Compraste:</p>
                  <p className="text-xl font-bold text-gray-800">{lesson.producto}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 mb-1">Pagaste:</p>
                  <p className="text-xl font-bold text-orange-600">
                    {lesson.precio.toLocaleString()} sats ₿
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="w-full bg-white hover:bg-gray-100 text-gray-800 font-bold text-xl py-4 px-8 rounded-2xl transform hover:scale-105 transition-all shadow-lg"
          >
            ¡Entendido! 👍
          </button>
        </div>
      </div>
    </div>
  );
}
