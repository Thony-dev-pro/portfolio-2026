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
      { src: 'rag-local/rag_system_picture.png', alt: 'Système RAG local' },
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
      { src: 'used-car-prediction/used_car_prediction_picture.png', alt: 'Prédiction de prix de voitures' },
    ],
  },
  {
    slug: 'plateforme-centre-commercial',
    title: 'Plateforme Centre Commercial',
    year: '2026',
    type: 'Web',
    shortDescription: "Application web de gestion d'un centre commercial en ligne avec trois espaces : acheteurs, boutiques et administrateur.",
    description: [
      "Application web de gestion d'un centre commercial en ligne, qui regroupe plusieurs boutiques sur une même plateforme. Ce projet a été réalisé en binôme.",
      "Chaque boutique gère ses produits (avec images), suit ses commandes (payées, à valider, annulées) et contrôle ses stocks, grâce à l'historique des mouvements, au réapprovisionnement et à des graphiques comparant les ajouts et les ventes. Un tableau de bord affiche son chiffre d'affaires, ses commandes et ses ventes par produit sur la période choisie.",
      "L'administrateur valide les comptes des boutiques, gère les catégories et la liste des acheteurs. Son tableau de bord affiche les ventes et le chiffre d'affaires de chaque boutique. L'acheteur consulte les produits, remplit son panier, renseigne son adresse de livraison et paie sa commande après s'être connecté ou inscrit.",
    ],
    tech: ['MongoDB', 'Node.js', 'Express', 'React', 'JavaScript'],
    githubUrl: 'https://github.com/Thony-dev-pro/m1p13mean-Thony-Manoa-back.git',
    extraLinks: [
      { label: 'Frontend Acheteurs', url: 'https://github.com/ManoaNyavo04/m1p13mean-Thony-Manoa_front_acheteur.git' },
      { label: 'Frontend Boutique', url: 'https://github.com/ManoaNyavo04/m1p13mean-Thony-Manoa_front_admin_boutique.git' },
    ],
    images: [
      { src: 'plateforme-centre-commercial/commerce_1.png', alt: 'Plateforme Centre Commercial - Vue d\'ensemble' },
      { src: 'plateforme-centre-commercial/commerce_2.png', alt: 'Plateforme Centre Commercial - Espace boutique' },
      { src: 'plateforme-centre-commercial/commerce_3.png', alt: 'Plateforme Centre Commercial - Tableau de bord' },
      { src: 'plateforme-centre-commercial/commerce_4.png', alt: 'Plateforme Centre Commercial - Gestion produits' },
      { src: 'plateforme-centre-commercial/commerce_5.png', alt: 'Plateforme Centre Commercial - Commandes' },
      { src: 'plateforme-centre-commercial/commerce_6.png', alt: 'Plateforme Centre Commercial - Espace administrateur' },
    ],
  },
];
