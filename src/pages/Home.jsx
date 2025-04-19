// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero section avec split-screen */}
      <section className="relative h-screen min-h-screen flex flex-col md:flex-row md:-mt-10 bg-blue-900 mb-48 md:mb-0">
        {/* Image */}
        <div className="h-1/2 md:h-full md:w-1/2 relative">
          <img
            src="/eric-fournier.png" // Chemin commence par /
            alt="Portrait d'Éric Fournier"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent"></div>
        </div>

        {/* Texte */}
        <div className="h-1/2 md:h-full md:w-1/2 flex items-center bg-blue-900 text-white flex-col pt-16">
          <motion.div
            className="p-8 md:p-12 lg:p-16 max-w-lg mx-auto bg-blue-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Éric Fournier
            </motion.h1>

            <motion.h2
              className="text-xl md:text-2xl lg:text-3xl font-medium text-blue-200 mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Candidat de la France au poste de Directeur du Bureau des
              radiocommunications de l’UIT{" "}
            </motion.h2>

            <motion.p
              className="text-lg leading-relaxed text-blue-100 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Un candidat engagé, à l'écoute des enjeux internationaux et des
              besoins du secteur
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-1"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <Link
                to="/vision"
                className="px-6 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors text-center"
              >
                Découvrir sa vision
              </Link>
              <Link
                to="/engagements"
                className="px-6 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Ses engagements
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="bottom-24 absolute"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <a
              href="#candidature"
              className="flex flex-col items-center text-white opacity-0 md:opacity-100"
            >
              <span className="text-sm font-light mb-2">Découvrir</span>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Section Candidature */}
      <section id="candidature" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Une candidature pour l'excellence
            </h2>
            <p className="text-lg text-slate-600">
              Maintenir l'excellence technique et réglementaire du Bureau des
              radiocommunications, sa compréhension des défis de la gestion des
              fréquences et de l'innovation, son écoute et sa réactivité face
              aux besoins du secteur et des administrations.
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-500"
              >
                <div className="p-8">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="h-12 w-12 text-blue-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                    Parcours
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Plus de 30 ans d'expertise dans le domaine des
                    radiocommunications et de la gestion internationale du
                    spectre.
                  </p>
                  <div className="text-center">
                    <Link
                      to="/cv"
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Découvrir son parcours
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-indigo-500"
              >
                <div className="p-8">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="h-12 w-12 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                    Vision
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Une vision claire pour relever les défis actuels et futurs
                    du Bureau des radiocommunications.
                  </p>
                  <div className="text-center">
                    <Link
                      to="/vision"
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Découvrir sa vision
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-purple-500"
              >
                <div className="p-8">
                  <div className="flex justify-center mb-4">
                    <svg
                      className="h-12 w-12 text-purple-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">
                    Engagements
                  </h3>
                  <p className="text-slate-600 mb-6">
                    Des engagements concrets pour une gestion efficace,
                    équitable et durable des fréquences et des orbites.
                  </p>
                  <div className="text-center">
                    <Link
                      to="/engagements"
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                    >
                      Découvrir ses engagements
                      <svg
                        className="ml-2 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Expérience */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Expérience internationale
            </h2>
            <p className="text-lg text-slate-600">
              Un profil unique, fruit d'une longue expérience dans les instances
              internationales des radiocommunications
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  year: "2022-2023",
                  title: "Président du Radio Spectrum Policy Group (RSPG)",
                  description:
                    "Groupe consultatif de haut niveau de l'Union européenne pour la politique du spectre radioélectrique.",
                },
                {
                  year: "2012-2018",
                  title: "Co-président de la CEPT",
                  description:
                    "Président du Comité des communications électroniques (ECC) au sein de l'organisation régionale reconnue par l'UIT pour l'Europe.",
                },
                {
                  year: "Depuis 2007",
                  title: "Directeur pour la planification du spectre",
                  description:
                    "Direction des affaires internationales à l'Agence nationale des fréquences (ANFR).",
                },
                {
                  year: "2008-2012",
                  title: "Président du groupe préparatoire CEPT pour la CMR-12",
                  description:
                    "Développement et adoption de propositions européennes communes pour tous les points à l'ordre du jour de la CMR-12.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -30 : 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <div className="text-blue-600 font-bold mb-2">
                    {item.year}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-12"
            >
              <Link
                to="/cv"
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-md"
              >
                Voir le parcours complet
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section Engagements */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Engagements clés
            </h2>
            <p className="text-lg text-slate-600">
              Un Bureau des radiocommunications au service des États membres
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                {
                  number: "01",
                  title: "Gestion efficace et équitable",
                  description:
                    "Assurer la gestion rationnelle, équitable, efficace et durable des fréquences et des orbites satellitaires.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  ),
                },
                {
                  number: "02",
                  title: "Respect des règles",
                  description:
                    "Garantir le respect des règles de gestion des fréquences et assurer un environnement sans brouillage.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-blue-700"
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
                  number: "03",
                  title: "Enjeux stratégiques",
                  description:
                    "Répondre aux enjeux transversaux comme la connectivité universelle, la transformation numérique et l'intelligence artificielle.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-blue-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  ),
                },
                {
                  number: "04",
                  title: "Succès des conférences",
                  description:
                    "Faciliter le succès de la CMR-27 en trouvant les compromis nécessaires pour répondre aux défis techniques et réglementaires.",
                  icon: (
                    <svg
                      className="h-8 w-8 text-blue-700"
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
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex group"
                >
                  <div className="mr-6 mt-1">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-blue-700 mb-1">
                      Engagement {item.number}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-16"
            >
              <Link
                to="/engagements"
                className="inline-flex items-center px-6 py-3 border-2 border-blue-900 text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors"
              >
                Découvrir tous les engagements
                <svg
                  className="ml-2 h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              En savoir plus sur cette candidature
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Une candidature pour maintenir l'excellence technique et
              règlementaire du Bureau des radiocommunications.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/vision"
                className="px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
              >
                Découvrir sa vision
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
