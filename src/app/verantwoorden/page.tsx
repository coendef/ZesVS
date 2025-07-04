export default function Verantwoorden() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-full mb-8 shadow-lg">
            <span className="text-3xl">🎯</span>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Verantwoorden
          </h1>
          
          <p className="text-2xl text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
            Waarom is dit onderzoek belangrijk?
          </p>

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-center space-x-2 text-gray-500 mb-8">
            <a href="/" className="hover:text-red-600 transition-colors">🧭 Reisgids</a>
            <span>→</span>
            <span className="text-red-600 font-semibold">🎯 Verantwoorden</span>
          </div>
        </div>

        {/* Content Section - Placeholder for your content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-12 mb-12">
            <h2 className="text-3xl font-bold text-red-700 mb-6">
              Stap 1: Verantwoorden van je onderzoek
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Welkom bij de eerste stap van je onderzoeksreis! Hier ga je ontdekken waarom jouw onderzoek 
                belangrijk is en welke impact het kan hebben.
              </p>
              
              {/* Placeholder content - replace with your actual content */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                <h3 className="text-xl font-semibold text-red-700 mb-3">
                  📝 Inhoud wordt toegevoegd
                </h3>
                <p className="text-red-600">
                  Hier komt de specifieke inhoud die je in de bijlage hebt toegevoegd. 
                  Kun je de inhoud delen zodat ik deze pagina kan voltooien?
                </p>
              </div>
            </div>
          </div>

          {/* Navigation to next step */}
          <div className="flex justify-between items-center">
            <a 
              href="/"
              className="inline-flex items-center px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
            >
              ← Terug naar overzicht
            </a>
            
            <a 
              href="/verkennen"
              className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
            >
              Volgende: Verkennen →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}