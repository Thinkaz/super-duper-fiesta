// src/pages/Video.jsx
import React from "react";
import { motion } from "framer-motion";

const Video = () => {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Message d'Éric Fournier
          </h1>
          <p className="text-xl text-blue-200">
            Candidat de la France au poste de Directeur du Bureau des
            radiocommunications de l'UIT
          </p>
        </motion.div>

        {/* Section Vidéo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto bg-blue-800/30 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden mb-16"
        >
          <div className="p-4 md:p-6">
            {/* En attendant la vidéo réelle, on utilise un placeholder */}
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg bg-slate-800">
              {/* Ici, vous remplacerez cet élément par votre iframe de vidéo réelle */}
              <div className="absolute inset-0 flex items-center justify-center"></div>

              {/* Quand vous aurez la vidéo, utilisez ce format:
              <iframe
                src="URL_DE_VOTRE_VIDEO"
                className="absolute top-0 left-0 w-full h-full"
                title="Message d'Éric Fournier"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
          </div>
        </motion.div>

        {/* Espace pour informations sur la vidéo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-semibold text-blue-200 mb-6">
              À propos de cette vidéo
            </h2>

            <div className="prose prose-invert prose-blue max-w-none">
              <p>
                Cette vidéo sera utilisée pour présenter la candidature d'Éric
                Fournier au poste de Directeur du Bureau des radiocommunications
                de l'UIT.
              </p>
              <p>
                Elle mettra en lumière son expérience dans le domaine des
                radiocommunications, sa vision pour le Bureau, et ses
                engagements envers les États membres.
              </p>
              <p>
                Les thèmes abordés incluront la gestion efficace et équitable
                des ressources orbite/spectre, les défis à relever par l'UIT-R,
                et les valeurs qui guideront son action.
              </p>
            </div>

            <div className="mt-8 text-center">
              <p className="italic text-blue-300 text-sm">
                La vidéo sera disponible prochainement.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Liens de navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl mx-auto mt-16 text-center"
        >
          <h3 className="text-xl font-medium text-blue-200 mb-6">
            Découvrez également
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/cv"
              className="p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <h4 className="font-semibold mb-2">Son parcours</h4>
              <p className="text-blue-200 text-sm">
                Une expérience internationale reconnue
              </p>
            </a>
            <a
              href="/vision"
              className="p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <h4 className="font-semibold mb-2">Sa vision</h4>
              <p className="text-blue-200 text-sm">
                Pour des radiocommunications durables
              </p>
            </a>
            <a
              href="/engagements"
              className="p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <h4 className="font-semibold mb-2">Ses engagements</h4>
              <p className="text-blue-200 text-sm">
                Des actions concrètes pour l'UIT
              </p>
            </a>
          </div>
        </motion.div>

        {/* Informations de contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-lg mx-auto mt-16 text-center"
        >
          <h3 className="text-xl font-medium text-blue-200 mb-4">
            Contactez-nous
          </h3>
          <p className="text-blue-300 mb-4">
            Pour plus d'informations sur la candidature d'Éric Fournier
          </p>
          <div className="flex space-x-6 md:flex-row flex-col gap-2 text-center">
            <a
              href="mailto:contact@ericfournier4br.com"
              className="flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>contact@ericfournier4br.com</span>
            </a>
            <a
              href="https://www.ericfournier4br.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <svg
                className="h-5 w-5 mr-2"
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
              <span>www.ericfournier4br.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Video;
