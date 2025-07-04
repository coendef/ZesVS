import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const researchSteps = [
    {
      title: "Verantwoorden",
      description: "Waarom is dit onderzoek belangrijk?",
      icon: "🎯",
      color: "bg-red-500 hover:bg-red-600",
      lightColor: "bg-red-50 border-red-200",
      textColor: "text-red-700",
      href: "/verantwoorden"
    },
    {
      title: "Verkennen", 
      description: "Wat is er al bekend over dit onderwerp?",
      icon: "🔍",
      color: "bg-blue-500 hover:bg-blue-600",
      lightColor: "bg-blue-50 border-blue-200",
      textColor: "text-blue-700",
      href: "/verkennen"
    },
    {
      title: "Verdiepen",
      description: "Hoe ga je dieper graven in de materie?",
      icon: "⛏️",
      color: "bg-green-500 hover:bg-green-600", 
      lightColor: "bg-green-50 border-green-200",
      textColor: "text-green-700",
      href: "/verdiepen"
    },
    {
      title: "Verbeelden",
      description: "Hoe visualiseer je je bevindingen?",
      icon: "🎨",
      color: "bg-purple-500 hover:bg-purple-600",
      lightColor: "bg-purple-50 border-purple-200", 
      textColor: "text-purple-700",
      href: "/verbeelden"
    },
    {
      title: "Verbinden",
      description: "Hoe koppel je theorie aan praktijk?",
      icon: "🔗",
      color: "bg-orange-500 hover:bg-orange-600",
      lightColor: "bg-orange-50 border-orange-200",
      textColor: "text-orange-700",
      href: "/verbinden"
    },
    {
      title: "Vormgeven",
      description: "Hoe geef je vorm aan je onderzoeksresultaten?",
      icon: "🏗️", 
      color: "bg-indigo-500 hover:bg-indigo-600",
      lightColor: "bg-indigo-50 border-indigo-200",
      textColor: "text-indigo-700",
      href: "/vormgeven"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full mb-8 shadow-lg">
            <span className="text-3xl">🧭</span>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-800 mb-4 leading-tight">
            Reisgids voor leraren
          </h1>
          
          <p className="text-2xl text-gray-600 font-medium mb-8 max-w-2xl mx-auto">
            Onderzoek als avontuurlijke reis
          </p>

          <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              Welkom bij jouw persoonlijke gids voor onderzoek in het onderwijs! Net zoals elke goede reis begint met een kaart, 
              begint goed onderzoek met een duidelijke route.
            </p>
            <p>
              Ontdek de zes essentiële stappen die je helpen om van een onderzoeksvraag naar betekenisvolle resultaten te reizen.
            </p>
          </div>
        </div>

        {/* Research Steps Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchSteps.map((step, index) => (
              <Link
                key={step.title}
                href={step.href}
                className={`${step.lightColor} border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer group relative overflow-hidden block`}
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                    {index + 1}
                  </div>
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className={`text-2xl font-bold ${step.textColor} group-hover:text-gray-800 transition-colors`}>
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {step.description}
                  </p>

                  {/* Action Button */}
                  <div className="pt-4">
                    <div className={`w-full ${step.color} text-white py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1 text-center`}>
                      Start {step.title}
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Journey Metaphor Section */}
        <div className="mt-20 bg-white rounded-3xl shadow-xl p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Jouw onderzoeksreis in vogelvlucht
            </h2>
            <p className="text-gray-600 text-lg">
              Elke stap brengt je dichter bij je bestemming: betekenisvol onderzoek dat impact heeft.
            </p>
          </div>

          {/* Journey Path */}
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              {researchSteps.map((step, index) => (
                <div key={step.title} className="flex flex-col items-center relative">
                  {/* Connection Line */}
                  {index < researchSteps.length - 1 && (
                    <div className="absolute top-6 left-12 w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-400 hidden lg:block"></div>
                  )}
                  
                  {/* Step Icon */}
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg mb-3`}>
                    {step.icon}
                  </div>
                  
                  {/* Step Title */}
                  <span className={`text-sm font-semibold ${step.textColor} text-center`}>
                    {step.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 max-w-2xl mx-auto text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Klaar om je onderzoeksreis te beginnen?
            </h3>
            <p className="text-blue-100 mb-6">
              Kies een stap hierboven en start je avontuur in de wereld van onderzoek!
            </p>
            <div className="flex items-center justify-center space-x-4 text-blue-100">
              <span>🎒</span>
              <span>Pak je onderzoeksrugzak</span>
              <span>🗺️</span>
              <span>Volg de kaart</span>
              <span>🏆</span>
              <span>Bereik je doel</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 text-gray-500">
            <span>🧭</span>
            <span>Veel succes op je onderzoeksreis!</span>
            <span>🧭</span>
          </div>
          <p className="text-gray-400 text-sm mt-2">
            Reisgids voor leraren • Onderzoek als avontuurlijke reis
          </p>
        </div>
      </div>
    </div>
  )
}