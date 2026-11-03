import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    slug: 'rag-local',
    title: 'Système RAG local',
    year: '2026',
    type: 'IA',
    shortDescription: "Pipeline d'ingestion de documents, recherche sémantique et réponses d'un LLM local avec traçabilité des sources.",
    description: [
      "Développement d'un pipeline d'ingestion complet : extraction de texte, chunking optimisé, vectorisation avec HuggingFaceEmbeddings et stockage dans une base vectorielle ChromaDB.",
      "Implémentation d'un mode double (recherche sémantique pure / génération augmentée) via une interface Streamlit interactive, avec prompt engineering pour contraindre les réponses du LLM aux documents fournis.",
      "Intégration d'un LLM local (Ollama – Mistral) avec traçabilité des sources : affichage des extraits et métadonnées utilisés pour chaque réponse.",
    ],
    tech: ['LangChain', 'ChromaDB', 'HuggingFaceEmbeddings', 'Ollama', 'Mistral', 'Streamlit', 'Python'],
    githubUrl: 'https://github.com/Thony-dev-pro/notebooklm-clone.git',
    images: [
      { src: '/assets/projects/rag-local/rag_system_picture.png', alt: 'Système RAG local' },
    ],
  },
  {
    slug: 'prediction-voitures',
    title: 'Prédiction de prix de voitures',
    year: '2026',
    type: 'IA',
    shortDescription: "Projet de Machine Learning utilisant la régression linéaire pour prédire le prix des voitures.",
    description: [
      "Développement d'un modèle de prédiction de prix de voitures d'occasion à l'aide de la régression linéaire.",
      "Analyse et prétraitement des données : année, marque, modèle, kilométrage, carburant, transmission, statut du titre, type et état.",
      "Évaluation du modèle et visualisation des performances pour une prédiction précise des prix.",
    ],
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter'],
    githubUrl: 'https://github.com/Thony-dev-pro/used_cars_prediction.git',
    images: [
      { src: '/used-car-prediction/used_car_prediction_picture.png', alt: 'Prédiction de prix de voitures' },
    ],
  },
  {
    slug: 'modules-ecommerce',
    title: 'Modules e-commerce',
    year: '2025–2026',
    type: 'Web',
    shortDescription: "Maintenance de modules PrestaShop et WordPress, et développement du Back Office client.",
    description: [
      "Développement de nouvelles fonctionnalités pour le Back Office Client et Administrateur.",
      "Amélioration et maintenance des modules PrestaShop et WordPress, support et assistance technique aux clients, analyse et correction des bugs signalés par les utilisateurs.",
    ],
    tech: ['PrestaShop', 'WordPress', 'JavaScript'],
    images: [],
  },
];
