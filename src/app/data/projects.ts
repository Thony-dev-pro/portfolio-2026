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
    slug: 'paiement-mobile-money',
    title: 'API de paiement mobile money',
    year: '2025–2026',
    type: 'Paiement',
    shortDescription: "Intégration de MVola, Orange Money et Airtel Money, et conception d'API de paiement USSD.",
    description: [
      "Intégration des solutions de paiement mobile money : MVola, Orange Money et Airtel Money.",
      "Conception et développement d'API de paiement USSD pour Airtel Money et Orange Money, destinées aux offres de YAS Madagascar.",
    ],
    tech: ['JavaScript', 'API REST', 'USSD'],
    images: [],
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
