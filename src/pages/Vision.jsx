// src/pages/Vision.jsx
import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            La vision d'Éric Fournier
          </h1>
          <p className="text-xl text-slate-600">
            Pour un avenir connecté, équitable et durable des
            radiocommunications
          </p>
        </motion.div>

        {/* Section Hero avec citation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-blue-900 text-white rounded-xl shadow-xl overflow-hidden mb-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12 flex items-center">
              <div>
                <svg
                  className="h-12 w-12 text-blue-300 mb-6 opacity-50"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <h2 className="text-2xl md:text-3xl font-light italic mb-4 leading-relaxed">
                  Le Bureau des radiocommunications doit anticiper et faciliter
                  l'intégration des technologies émergentes pour garantir une
                  gestion proactive, équitable, efficace et durable des
                  ressources orbite/spectre.
                </h2>
                <p className="text-blue-200 text-lg">— Éric Fournier</p>
              </div>
            </div>
            <div className="bg-blue-800 p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-xl font-semibold mb-6 text-blue-100">
                Principes directeurs
              </h3>
              <ul className="space-y-4">
                {[
                  "Gestion équitable des ressources",
                  "Excellence technique et réglementaire",
                  "Transparence et dialogue constructif",
                  "Accompagnement de l'innovation",
                  "Développement durable",
                ].map((principle, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="h-6 w-6 text-blue-300 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Section Piliers de vision */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Les piliers de sa vision
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
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h2.5a2 2 0 002-2v-1a2 2 0 012-2h1.945M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Connectivité universelle",
                description:
                  "Garantir un accès équitable aux ressources spectrales pour tous les pays, combler la fracture numérique et favoriser la connectivité pour tous.",
                color: "from-blue-600 to-blue-400",
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
                      d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
                    />
                  </svg>
                ),
                title: "Essor du spatial",
                description:
                  "Accompagner le développement des applications spatiales et des constellations, tout en assurant une utilisation durable des orbites.",
                color: "from-indigo-600 to-indigo-400",
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
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Innovation technologique",
                description:
                  "Anticiper et faciliter l'intégration des technologies émergentes comme la 6G tout en protégeant les systèmes existants.",
                color: "from-purple-600 to-purple-400",
              },
            ].map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`rounded-xl overflow-hidden shadow-lg bg-gradient-to-br ${pillar.color} text-white`}
              >
                <div className="p-8">
                  <div className="mb-4">{pillar.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{pillar.title}</h3>
                  <p className="leading-relaxed">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Défis et Solutions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
            Défis et approches concrètes
          </h2>

          <div className="space-y-8">
            {[
              {
                challenge: "Complexité croissante des règles et procédures",
                approach:
                  "Simplification et numérisation des procédures tout en maintenant la rigueur nécessaire pour assurer l'équité du système.",
                icon: (
                  <svg
                    className="h-8 w-8 text-white"
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
              },
              {
                challenge: "Gestion des brouillages préjudiciables",
                approach:
                  "Renforcement des mécanismes de prévention et de résolution des brouillages pour garantir une exploitation sans faille des systèmes de radiocommunication.",
                icon: (
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                    />
                  </svg>
                ),
              },
              {
                challenge: "Accès équitable aux ressources",
                approach:
                  "Soutien aux États membres pour leur assurer un accès équitable aux ressources orbite/spectre, particulièrement pour les pays en développement.",
                icon: (
                  <svg
                    className="h-8 w-8 text-white"
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
              },
              {
                challenge: "Empreinte environnementale du secteur",
                approach:
                  "Promotion d'une gestion durable des ressources spectrales tenant compte des enjeux climatiques et environnementaux.",
                icon: (
                  <svg
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  <div className="col-span-1 md:col-span-1 bg-blue-900 flex items-center justify-center p-6">
                    {item.icon}
                  </div>
                  <div className="col-span-1 md:col-span-11 p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {item.challenge}
                    </h3>
                    <p className="text-slate-600">{item.approach}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section Conclusion */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mt-20 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 shadow-sm"
        >
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            Un leadership visionnaire pour l'UIT-R
          </h2>
          <p className="text-lg text-slate-700 mb-6">
            Éric Fournier s'engage à mettre son expertise et son expérience au
            service d'une gestion durable, équitable et efficace des
            radiocommunications, pour répondre aux défis techniques et
            règlementaires d'aujourd'hui et de demain.
          </p>
          <div className="inline-flex">
            <button
              className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors shadow-md"
              href="/engagements"
            >
              Découvrir ses engagements
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Vision;
