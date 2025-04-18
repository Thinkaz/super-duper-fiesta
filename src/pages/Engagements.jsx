// src/pages/Engagements.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Engagements = () => {
  // Données des engagements tirées de la brochure
  const engagements = [
    {
      id: 1,
      title:
        "Assurer la gestion efficace, équitable et durable des fréquences et des orbites satellitaires",
      description:
        "Dans un monde en constante évolution, Éric Fournier s'engage à maintenir le rôle et la crédibilité de l'UIT dans la gestion rationnelle, équitable, efficace et durable de ces ressources. Il veillera tout particulièrement à ce que cette gestion prenne en compte l'essor des nouvelles applications du spatial et des constellations, ainsi que la rapidité des progrès technologiques, garantissant ainsi que l'UIT soit en phase avec les défis actuels du secteur.",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
      color: "bg-blue-600",
    },
    {
      id: 2,
      title:
        "Garantir le respect des règles de gestion des fréquences et assurer un environnement sans brouillage",
      description:
        "Sous le contrôle du Comité du Règlement des radiocommunications, Éric Fournier s'engage à faire respecter ces règles. Il mettra un accent particulier sur la prévention et la résolution des brouillages afin de garantir une exploitation optimale et sans brouillage des systèmes de radiocommunication.",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
          />
        </svg>
      ),
      color: "bg-indigo-600",
    },
    {
      id: 3,
      title: "Répondre aux enjeux stratégiques et transversaux de l'UIT",
      description:
        "Éric Fournier est résolu à répondre aux enjeux transversaux qui façonnent l'avenir de l'UIT, tels que la connectivité universelle, la transformation numérique durable, l'intelligence artificielle et la stratégie de mobilisation des ressources de l'UIT.",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      color: "bg-purple-600",
    },
    {
      id: 4,
      title: "Garantir le succès de la CMR-27",
      description:
        "Éric Fournier s'engage à faciliter le succès de la CMR-27, en veillant à ce que les compromis nécessaires soient trouvés pour répondre aux défis techniques et réglementaires complexes de son ordre du jour. Il s'assurera que les décisions prises par la Conférence soient mises en œuvre de manière rapide et efficace.",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      color: "bg-teal-600",
    },
    {
      id: 5,
      title: "Promouvoir un dialogue constructif et une équité totale",
      description:
        "Éric Fournier place la confiance et l'équité au cœur de son approche. Il s'engage à maintenir un dialogue constant avec toutes les administrations, tout en veillant à promouvoir un climat de confiance mutuelle et de coopération. Il défendra une approche inclusive et transparente au sein de l'UIT.",
      icon: (
        <svg
          className="h-6 w-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      color: "bg-amber-600",
    },
  ];

  // État pour contrôler l'engagement actuellement développé
  const [activeEngagement, setActiveEngagement] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-slate-100 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Les engagements d'Éric Fournier
          </h1>
          <p className="text-xl text-slate-600">
            Pour un Bureau des radiocommunications réactif, efficace et au
            service de tous
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 mb-16"
        >
          <p className="text-lg text-slate-700 leading-relaxed">
            Éric Fournier s'engage à mobiliser l'ensemble de l'expertise et des
            compétences du Bureau des radiocommunications afin de mettre cette
            institution au service des États membres et face aux défis à venir.
            Sa candidature est portée par des valeurs fortes et des engagements
            concrets pour maintenir l'excellence technique et règlementaire du
            Bureau.
          </p>
        </motion.div>

        {/* Engagements interactifs */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {engagements.map((engagement) => (
              <motion.div
                key={engagement.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300"
                style={{
                  height: activeEngagement === engagement.id ? "auto" : "auto",
                  transition: "height 0.3s ease-in-out",
                }}
              >
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() =>
                    setActiveEngagement(
                      activeEngagement === engagement.id ? null : engagement.id,
                    )
                  }
                >
                  <div
                    className={`${engagement.color} text-white p-6 flex items-center justify-center`}
                  >
                    <span>{engagement.icon}</span>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-semibold text-blue-900">
                        {engagement.id}. {engagement.title}
                      </h3>
                      <button className="text-blue-500 focus:outline-none">
                        <svg
                          className={`h-6 w-6 transform transition-transform ${activeEngagement === engagement.id ? "rotate-180" : ""}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Contenu déplié */}
                <div
                  className={`px-6 pb-6 transition-all duration-300 overflow-hidden ${
                    activeEngagement === engagement.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-slate-200 pt-4 mt-2">
                    <p className="text-slate-700">{engagement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Valeurs section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto mt-20"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Nos valeurs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ),
                title: "Transparence",
                description:
                  "Promouvoir une approche claire et transparente dans tous les processus de décision et d'action du Bureau des radiocommunications.",
                color: "bg-gradient-to-br from-blue-500 to-blue-700",
              },
              {
                icon: (
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                    />
                  </svg>
                ),
                title: "Équité",
                description:
                  "Garantir un traitement juste et équitable pour tous les États membres, quel que soit leur niveau de développement ou leur influence.",
                color: "bg-gradient-to-br from-indigo-500 to-indigo-700",
              },
              {
                icon: (
                  <svg
                    className="h-10 w-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Coopération",
                description:
                  "Favoriser un esprit de collaboration et d'entraide entre toutes les parties prenantes pour atteindre des objectifs communs.",
                color: "bg-gradient-to-br from-violet-500 to-violet-700",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`${value.color} text-white rounded-xl shadow-lg overflow-hidden`}
              >
                <div className="p-8 flex flex-col items-center text-center">
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section informations supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-20"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Informations complémentaires
          </h2>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <p className="text-lg text-slate-700 leading-relaxed">
                Éric Fournier a joué un rôle clé dans l'élaboration des
                compromis les plus complexes lors des Conférences Mondiales des
                Radiocommunications, apportant des solutions novatrices sur les
                plans techniques et réglementaires, répondant aux besoins des
                parties prenantes.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mt-4">
                Sa candidature s'inscrit dans une démarche de continuité et
                d'amélioration des services du Bureau des radiocommunications,
                avec une attention particulière à la transparence et à l'équité
                dans les processus décisionnels.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto mt-20 text-center"
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            En savoir plus
          </h2>
          <p className="text-lg text-slate-700 mb-8">
            Découvrez la vision d'Éric Fournier pour répondre aux défis actuels
            et futurs des radiocommunications et sa feuille de route pour le
            Bureau.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/vision"
              className="px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-md"
            >
              Sa vision
            </a>
            <a
              href="/video"
              className="px-6 py-3 border border-blue-900 text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors"
            >
              Voir son message vidéo
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Engagements;
