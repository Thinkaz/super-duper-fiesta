// src/pages/CV.jsx
import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "flowbite-react";
import {
  HiCalendar,
  HiAcademicCap,
  HiBriefcase,
  HiGlobe,
} from "react-icons/hi";

const CV = () => {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Parcours professionnel
          </h1>
          <p className="text-xl text-slate-600">
            Plus de 30 ans d'expérience dans le domaine des radiocommunications
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Section principale avec photo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-1"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg">
                <img
                  src="./eric-fournier.png" // Assurez-vous d'avoir cette image
                  alt="Eric Fournier"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = "/api/placeholder/400/500"; // Image de substitution
                    e.target.alt = "Photo d'Eric Fournier";
                  }}
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-2">
                    Éric Fournier
                  </h3>
                  <p className="text-slate-700 mb-2">
                    Directeur de la planification du spectre et des affaires
                    internationales (ANFR)
                  </p>
                  <p className="text-sm text-slate-500">
                    Chevalier de l'Ordre National du Mérite (2003)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-2"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 h-full">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  À propos
                </h3>
                <p className="text-slate-700 mb-3">
                  Fort d'une expérience internationale et d'une expertise
                  reconnue dans le domaine des radiocommunications, Éric
                  Fournier est candidat de la France au poste de Directeur du
                  Bureau des radiocommunications de l'UIT.
                </p>
                <p className="text-slate-700 mb-3">
                  Son expertise s'étend à travers la mise en place des
                  réglementations internationales et européennes sur des sujets
                  majeurs comme l'identification de bandes de fréquences pour
                  les technologies 4G, 5G et 6G, les réglementations relatives à
                  l'orbite géostationnaire et aux constellations de satellites.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Gestion du Spectre",
                    "Relations Internationales",
                    "Réglementation",
                    "Planification Stratégique",
                  ].map((skill, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline avec Flowbite */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
              Parcours chronologique
            </h2>

            <Timeline>
              <Timeline.Item>
                <Timeline.Point icon={HiBriefcase} />
                <Timeline.Content>
                  <Timeline.Time>Depuis 2007</Timeline.Time>
                  <Timeline.Title>
                    Directeur pour la planification du spectre et les affaires
                    internationales
                  </Timeline.Title>
                  <Timeline.Body>
                    <p className="text-slate-700">
                      Agence nationale des fréquences (ANFR)
                    </p>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-slate-600 text-sm">
                      <li>Management d'une équipe de 30 personnes</li>
                      <li>
                        Planification stratégique et technique de l'utilisation
                        des fréquences
                      </li>
                      <li>
                        Préparation et défense des positions nationales dans les
                        instances internationales
                      </li>
                      <li>
                        Coordination des assignations spatiales françaises
                        auprès de l'UIT
                      </li>
                    </ul>
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Point icon={HiGlobe} />
                <Timeline.Content>
                  <Timeline.Time>2022-2023</Timeline.Time>
                  <Timeline.Title>
                    Président du Radio Spectrum Policy Group (RSPG)
                  </Timeline.Title>
                  <Timeline.Body>
                    Groupe consultatif de haut niveau de l'Union européenne
                    assistant la Commission européenne dans l'élaboration de la
                    politique du spectre radioélectrique.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Point icon={HiGlobe} />
                <Timeline.Content>
                  <Timeline.Time>2012-2018</Timeline.Time>
                  <Timeline.Title>
                    Co-président de la CEPT et président du Comité des
                    communications électroniques (ECC)
                  </Timeline.Title>
                  <Timeline.Body>
                    Harmonisation des fréquences en Europe et coordination des
                    contributions européennes aux réunions de l'UIT-R.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Point icon={HiBriefcase} />
                <Timeline.Content>
                  <Timeline.Time>2004-2007</Timeline.Time>
                  <Timeline.Title>
                    Directeur adjoint pour la planification du spectre et les
                    affaires internationales
                  </Timeline.Title>
                  <Timeline.Body>
                    Agence nationale des fréquences (ANFR)
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Point icon={HiGlobe} />
                <Timeline.Content>
                  <Timeline.Time>2008-2012</Timeline.Time>
                  <Timeline.Title>
                    Président du groupe préparatoire CEPT pour la CMR-12
                  </Timeline.Title>
                  <Timeline.Body>
                    Développement et adoption de propositions européennes
                    communes pour tous les points à l'ordre du jour de la
                    CMR-12.
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Point icon={HiBriefcase} />
                <Timeline.Content>
                  <Timeline.Time>1997-2003</Timeline.Time>
                  <Timeline.Title>
                    Responsable du département ingénierie du spectre
                  </Timeline.Title>
                  <Timeline.Body>
                    Agence nationale des fréquences (ANFR)
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Point icon={HiBriefcase} />
                <Timeline.Content>
                  <Timeline.Time>1991-1997</Timeline.Time>
                  <Timeline.Title>
                    Chercheur en ingénierie du spectre
                  </Timeline.Title>
                  <Timeline.Body>
                    Centre national d'études des télécommunications (CNET/Orange
                    Labs)
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Point icon={HiAcademicCap} />
                <Timeline.Content>
                  <Timeline.Time>1991</Timeline.Time>
                  <Timeline.Title>
                    Diplômé de SUPELEC (École CentraleSupélec)
                  </Timeline.Title>
                  <Timeline.Body>
                    Formation d'ingénieur en électricité et électronique
                  </Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </Timeline>
          </motion.div>

          {/* Section réalisations */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 bg-white rounded-xl shadow-lg p-6 md:p-8"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
              Réalisations principales
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Harmonisation des fréquences",
                  description:
                    "Participation directe aux études menant à l'harmonisation des bandes de télécommunications mobiles internationales (IMT) utilisées en Europe.",
                },
                {
                  title: "Dividendes numériques",
                  description:
                    "Études conduisant à la réaffectation des bandes 800MHz et 700MHz pour la radiotéléphonie mobile et négociations transfrontalières.",
                },
                {
                  title: "Radionavigation par satellite",
                  description:
                    "Études préalables pour la CMR-2000, facilitant l'attribution de nouvelles fréquences pour le développement de systèmes globaux.",
                },
                {
                  title: "Coopération internationale",
                  description:
                    "Développement de la coopération avec 22 accords bilatéraux entre l'ANFR et ses homologues et mise en œuvre de plans d'action concrets.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-blue-100 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CV;
