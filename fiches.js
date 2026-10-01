/* RDZ — Données des fiches PROM (module AMSET).
   Fichier produit par rdz_fiches_editeur.html — à ne pas modifier à la main. */
window.RDZ_FICHES = {
  "format": 1,
  "majLe": "2026-09-24",
  "majPar": "Gimenez",
  "interdictions": {
    "IHEID": {
      "liste": [
        {
          "nom": "TUTAR Mustafa",
          "motif": "Contrevenance à l'article 5 du règlement de la bibliothèque",
          "dateEffet": "26.09.2025",
          "expiration": "25.09.2028 (36 mois)"
        },
        {
          "nom": "VON MEISSNER Bente",
          "motif": "Incident survenu le 30.01.2025 dans les locaux de la Maison de la Paix (comportement jugé inadéquat par l'Institut — motif détaillé non communiqué à RDZ)",
          "dateEffet": "10.09.2025 (notification écrite ; incident du 30.01.2025)",
          "expiration": "30.02.2028",
          "note": "⚠️ Date telle qu'inscrite dans la liste client (invalide — probable erreur de saisie pour 30.01.2028 ; à faire confirmer auprès du client)"
        }
      ],
      "procedure": "Procédure S.03 (M.A.J. 12.09.2026) : en cas de refus de légitimation (pièce d'identité) par une personne présente sur la liste — ne pas insister, ne pas entrer en conflit, appeler immédiatement la Police (117). En cas de non-respect avéré d'une interdiction déjà notifiée — contacter la Police (117). Toute nouvelle interdiction constatée doit être transmise au responsable sécurité IHEID : M. Demonte (+41 22 908 44 40) et M. Barla (+41 22 908 59 63) — copie systématique à la Police Cantonale."
    }
  },
  "sites": [
    {
      "statut": "complet",
      "prom": "466 874 / 466 852",
      "client": "ERGON Bellevue",
      "nomComplet": "ERGON — Site Bellevue",
      "types": [
        "Effraction",
        "Incendie"
      ],
      "adresse": "Chemin des Tuileries 3-5, 1293 Bellevue (accès par portail n°2)",
      "transmetteurs": [
        {
          "label": "Incendie — bâtiment",
          "code": "466 874"
        },
        {
          "label": "Incendie — piscine",
          "code": "466 852"
        },
        {
          "label": "Effraction",
          "code": "461 324"
        },
        {
          "label": "Toutes alarmes",
          "code": "Complément à 30"
        }
      ],
      "population": "Propriétaires (ponctuel) · Agriculteur (M. Cretegny) · Jardinier (M. Toinet) · Intendant (M. Nunes) · Cuisiniers · Visiteurs. Intrus par le bas du terrain : raccompagner à la sortie ; si refus de donner une pièce d'identité → Police.",
      "tenue": "Polo + veste sécurité, pantalon noir, chaussures noires. Interdit : fumer/téléphoner devant les clients, utiliser l'ascenseur, entrer sans sur-chaussures, ouvrir le portail n°3, faire la ronde extérieure en véhicule, utiliser les WC, prendre des photos.",
      "stationnement": "Sous le porche de la porte d'entrée arrière, en respectant le cheminement prescrit. Ronde extérieure à pied uniquement. Prise de poste : annoncer sa position par radio, vérifier le matériel (sur-chaussures), lancer la ronde sur GuardTek.",
      "acces": [
        "Sur-chaussures obligatoires avant d'entrer dans le bâtiment.",
        "Trousseau de clés + badge remis en début de poste (bâtiment BELLEVUE)."
      ],
      "manipulationBase": [
        "##Alarme H24## : prévenir CERTAS avant chaque ouverture/fermeture."
      ],
      "zoning": [
        {
          "zone": "1",
          "desc": "Portail entrée 5 (départ de ronde)"
        },
        {
          "zone": "2",
          "desc": "Porte principale du bâtiment"
        },
        {
          "zone": "3",
          "desc": "Porte droite passerelle"
        },
        {
          "zone": "4",
          "desc": "Porte arrière"
        },
        {
          "zone": "5",
          "desc": "Porte de sortie de secours piscine"
        },
        {
          "zone": "6",
          "desc": "Portail 3"
        },
        {
          "zone": "7",
          "desc": "Porte local technique cascade (extérieur)"
        },
        {
          "zone": "8",
          "desc": "Porte tourniquet"
        },
        {
          "zone": "9",
          "desc": "Porte de sortie de secours du bâtiment (côté)"
        },
        {
          "zone": "10",
          "desc": "Porte de gauche passerelle"
        },
        {
          "zone": "11",
          "desc": "Porte sous passerelle"
        },
        {
          "zone": "12",
          "desc": "Porte escalier de secours parking (fin de ronde extérieure — pointeau qui marque officiellement la fin du parcours extérieur)"
        },
        {
          "zone": "13",
          "desc": "Centrale d'alarme du parking"
        },
        {
          "zone": "14",
          "desc": "Groupe de secours 1 parking"
        },
        {
          "zone": "15",
          "desc": "Local technique entretien"
        },
        {
          "zone": "16",
          "desc": "Groupe de secours 2 parking"
        },
        {
          "zone": "17",
          "desc": "Centrale d'alarme entrée bureau RDC"
        },
        {
          "zone": "18",
          "desc": "Centrale d'alarme loge sécurité 1er étage"
        },
        {
          "zone": "19",
          "desc": "Console local technique chaufferie (près porte d'entrée RDC)"
        },
        {
          "zone": "20",
          "desc": "Console local technique RDC intérieur (production de froid)"
        },
        {
          "zone": "21",
          "desc": "Console local technique « Carrier » RDC intérieur"
        },
        {
          "zone": "22",
          "desc": "Zone piscine 1"
        },
        {
          "zone": "23",
          "desc": "Console technique Minerg piscine"
        },
        {
          "zone": "24",
          "desc": "Zone piscine 2"
        },
        {
          "zone": "25",
          "desc": "Console technique piscine"
        },
        {
          "zone": "26",
          "desc": "Sortie de secours local technique piscine"
        },
        {
          "zone": "27",
          "desc": "Bureau dernier étage"
        },
        {
          "zone": "28",
          "desc": "Portail entrée 5 (sortie)"
        }
      ],
      "contacts": [
        {
          "nom": "M. Ferlicoq",
          "role": "Technical Manager ERGON — responsable de site (pas d'intendant permanent)",
          "tel": "+41 22 959 03 50"
        },
        {
          "nom": "M. Ferlicoq (mobile)",
          "role": "Technical Manager ERGON",
          "tel": "+41 79 917 32 40"
        },
        {
          "nom": "M. Ferlicoq — ligne « Client 24/7 »",
          "role": "Dir. Technique ERGON — usage réservé, nécessite l'accord préalable de Rodolphe ou Guillaume (RDZ)",
          "tel": "+33 6 75 30 04 63 / +41 22 959 07 20"
        },
        {
          "nom": "M. De Zordi",
          "role": "Directeur RDZ",
          "tel": "+41 76 634 17 92"
        },
        {
          "nom": "M. Nunes",
          "role": "Intendant",
          "tel": "+41 79 880 00 65"
        },
        {
          "nom": "M. Toinet",
          "role": "Jardinier — technique jours ouvrables",
          "tel": "+41 79 752 05 57"
        },
        {
          "nom": "M. Cretegny",
          "role": "Agriculteur / éleveur",
          "tel": "+41 22 755 13 50 / +41 79 342 60 47"
        },
        {
          "nom": "M. Guth",
          "role": "Directeur ERGON",
          "tel": "+41 79 450 75 21"
        },
        {
          "nom": "TECHNIK-ALARM",
          "role": "Intrusion/Incendie bâtiment (Tx 466 874)",
          "tel": "+41 22 797 17 27"
        },
        {
          "nom": "SIEMENS",
          "role": "Intrusion/Incendie piscine (Tx 466 852)",
          "tel": "0 842 842 033"
        }
      ],
      "astreinte": "+41 79 339 13 41 (astreinte RDZ — natel dédié) — le numéro +41 79 749 35 36 précédemment indiqué ici est en réalité le natel de l'agent MDP (matériel de site), pas l'astreinte RDZ ; corrigé le 27.08.2026 sur indication du client.",
      "rondes": "Nuit (lun-dim) : 2 rondes complètes + 2 rondes extérieures minimum, ≥1 passage au terrain mitoyen de jour ET ≥1 passage de nuit. En cas de retard, un seul passage au terrain mitoyen est toléré par nuit — à justifier auprès du superviseur. Samedi/dimanche/fériés (jour) : 2 complètes + 2 extérieures (ou 3 complètes), ~40 min/ronde. Varier les heures de passage (dissuasion).",
      "consignes": "Procédure alarme effraction (Tx 461 324) : 1) contrôle extérieur complet et vérification des accès ; 2) prévenir son collègue par radio, si RAS entrer dans le bâtiment ; 3) identifier la zone en alarme et investiguer à l'intérieur ; 4) rendre compte à CERTAS, aviser le client si nécessaire, rapport GuardTek. Si effraction réelle constatée : NE PAS ENTRER — appeler immédiatement la Police (117). Procédure CERTAS : appeler dès la fin du contrôle extérieur, avant d'entrer dans le parking ou le bâtiment, pour limiter le temps de déclenchement. Procédure garage : attendre le « Click » d'ouverture complète avant de lancer le réarmement de la zone Garage (temporisation très courte).",
      "particularites": "Rondes déchets verts : vérifier l'absence de déchets sous les grilles du jardin. Les grilles sont TOUTES sous alarme — ne jamais les déplacer sans accord du client (événement GuardTek avec photos). Fuite d'eau : placer des contenants, protéger moquette/électricité, connaître l'emplacement de la vanne, rester sur place si fuite importante et joindre le superviseur et le client, organiser une intervention externe si besoin. Alarme technique 24h/24 : aviser M. Ferlicoq puis l'astreinte RDZ qui préviendra EQUANS ; en cas de doute, solliciter Rodolphe 24h/24. Incohérences relevées dans le cahier des charges reçu (M.A.J. 01.04.2026, à faire clarifier avec le client) : le document indique à la fois « il n'y a pas d'intendant permanent sur site » et liste M. Nunes comme intendant avec numéro de téléphone actif — statut réel à vérifier ; l'adresse figure comme « Chemin des Tuileries 3 » sur la page de localisation et « 3-5 » ailleurs dans le même document ; la numérotation des annexes ne concorde pas totalement avec les noms de fichiers reçus (A.03/A.04 pour l'interdiction d'entrée selon la source). Le formulaire « Interdiction d'entrée » (annexe A.03/A.04) reçu est un gabarit vierge — aucune interdiction nominative en cours n'a été transmise pour ce site à ce jour.",
      "annexes": [
        "A.01 — Ronde : plan et procédure de ronde du site",
        "A.02 — Liste des pointeaux de ronde (ci-dessus)",
        "A.03 — Fiche réflexe : procédures d'intervention",
        "A.04 — Interdiction d'entrée : formulaire vierge et procédure (aucune interdiction nominative reçue à ce jour)"
      ],
      "majLe": "2026-09-24",
      "majPar": "Gimenez",
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Ce que l'agent doit savoir avant d'arriver",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "PROM incendie — bâtiment",
                  "v": "466 874",
                  "code": true
                },
                {
                  "k": "PROM incendie — piscine",
                  "v": "466 852",
                  "code": true
                },
                {
                  "k": "PROM effraction",
                  "v": "461 324",
                  "code": true
                },
                {
                  "k": "Identification Certas",
                  "v": "Complément à 30, pour les trois transmetteurs"
                },
                {
                  "k": "Client",
                  "v": "ERGON — propriété privée de Bellevue"
                },
                {
                  "k": "Occupation",
                  "v": "Propriétaires de façon ponctuelle · agriculteur, jardinier, intendant, cuisiniers · visiteurs"
                }
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller",
              "items": [
                {
                  "label": "Accès par le portail n°2",
                  "dest": "Chemin des Tuileries 3-5, 1293 Bellevue"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Alarme enclenchée 24h/24",
              "txt": "##Prévenir Certas avant chaque ouverture et chaque fermeture.## Le site n'est jamais désarmé : toute entrée non annoncée déclenche une intervention."
            },
            {
              "t": "liste",
              "titre": "Propriété privée — ce qui est interdit",
              "items": [
                "##Sur-chaussures obligatoires## avant d'entrer dans le bâtiment.",
                "Interdit : fumer ou téléphoner devant les clients, ##utiliser l'ascenseur##, ##utiliser les WC##, ##prendre des photos##.",
                "##Ne pas ouvrir le portail n°3.##",
                "##Ronde extérieure à pied uniquement## — jamais en véhicule.",
                "Stationnement sous le porche de la porte d'entrée arrière, en respectant le cheminement prescrit."
              ]
            },
            {
              "t": "liste",
              "titre": "Personnes rencontrées sur le terrain",
              "items": [
                "##Intrus par le bas du terrain## — raccompagner à la sortie. En cas de refus de présenter une pièce d'identité : ##117##.",
                "##Deux chiens## entrent occasionnellement sur le site, probablement ceux du n°9 (consigne du 16.09.2026) — prendre des photos, noter la position et si possible la voie d'accès, puis rédiger un événement GuardTek. Propriétaire : ##+41 78 202 62 10##."
              ]
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "Trois transmetteurs, deux prestataires",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Incendie bâtiment",
                  "v": "~~466 874~~ — maintenance ##Technik-Alarm##"
                },
                {
                  "k": "Incendie piscine",
                  "v": "~~466 852~~ — maintenance ##Siemens##"
                },
                {
                  "k": "Effraction",
                  "v": "~~461 324~~"
                },
                {
                  "k": "Identification",
                  "v": "Complément à 30"
                }
              ]
            },
            {
              "t": "table",
              "titre": "Où sont les centrales et consoles",
              "items": [
                {
                  "z": "Pointeau 13",
                  "d": "Centrale d'alarme du parking"
                },
                {
                  "z": "Pointeau 17",
                  "d": "Centrale d'alarme, entrée bureau au rez"
                },
                {
                  "z": "Pointeau 18",
                  "d": "Centrale d'alarme, loge sécurité au 1er étage"
                },
                {
                  "z": "Pointeaux 19 · 20 · 21",
                  "d": "Consoles techniques : chaufferie, production de froid, « Carrier » — toutes au rez"
                },
                {
                  "z": "Pointeaux 23 · 25",
                  "d": "Consoles techniques piscine : Minerg, puis console piscine"
                }
              ]
            },
            {
              "t": "manque",
              "txt": "Aucun code d'accès de centrale n'est documenté pour ce site, ni pour l'effraction ni pour l'incendie. Un agent peut constater une alarme mais ne peut rien quittancer. À obtenir."
            }
          ]
        },
        {
          "titre": "Points d'accès",
          "resume": "Comment entrer et circuler",
          "blocs": [
            {
              "t": "liste",
              "items": [
                "##Trousseau de clés et badge## remis en début de poste.",
                "##Sur-chaussures## obligatoires avant d'entrer dans le bâtiment — à vérifier à la prise de poste.",
                "Entrée du site par le ##portail n°2##. Le ##portail n°3 ne s'ouvre pas##.",
                "##Ascenseur interdit## : escaliers uniquement."
              ]
            },
            {
              "t": "stop",
              "lab": "Zone Garage — temporisation très courte",
              "txt": "Avant de réarmer la zone Garage, ##attendre le « Click » d'ouverture complète##. Lancer le réarmement trop tôt fait repartir l'alarme."
            },
            {
              "t": "liste",
              "titre": "Prise de poste",
              "items": [
                "Annoncer sa position par ##radio##.",
                "Vérifier le matériel, sur-chaussures comprises.",
                "##Lancer la ronde sur GuardTek.##"
              ]
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Trousseau remis en début de poste",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Remise",
                  "v": "Trousseau et badge du bâtiment Bellevue, remis à la prise de poste"
                }
              ]
            },
            {
              "t": "manque",
              "txt": "Composition du trousseau, références des clés et correspondance clé ↔ porte : non documentées. Bellevue ne figure pas dans l'inventaire ##Clefs IS / RDZ##. À relever lors d'une prochaine prise de poste."
            },
            {
              "t": "liste",
              "titre": "S'il manque une clé",
              "items": [
                "##Pas d'urgence## — rapport et message à Laurent et Lucas.",
                "##Urgence## (site non hermétique, risque pour le client) — appel direct à Laurent ou Lucas."
              ]
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au technique",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "Bellevue est proche de la frontière : un téléphone y accroche parfois une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu confirmé, doute non levé",
                  "num": "118"
                },
                {
                  "nom": "Police",
                  "role": "##Effraction réelle constatée## · refus de présenter une pièce d'identité",
                  "num": "117"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Centrale et astreinte",
              "items": [
                {
                  "nom": "Certas",
                  "role": "Incendie 466.874 et 466.852 · Effraction 461.324 — complément à 30. ##À prévenir avant chaque ouverture et fermeture.##",
                  "num": "+41 844 800 811"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Ligne hiérarchique. Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence).",
                  "num": "+41 79 339 13 41"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Client",
              "items": [
                {
                  "nom": "M. Ferlicoq",
                  "role": "Technical Manager ERGON — responsable du site, mobile",
                  "num": "+41 79 917 32 40"
                },
                {
                  "nom": "M. Ferlicoq",
                  "role": "Technical Manager ERGON — ligne fixe",
                  "num": "+41 22 959 03 50"
                },
                {
                  "nom": "M. Guth",
                  "role": "Directeur ERGON",
                  "num": "+41 79 450 75 21"
                },
                {
                  "nom": "M. De Zordi",
                  "role": "Directeur RDZ",
                  "num": "+41 76 634 17 92"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Ligne « Client 24/7 » — usage réservé",
              "txt": "Le numéro direct de M. Ferlicoq en 24/7 (##+33 6 75 30 04 63## ou ##+41 22 959 07 20##) ne s'utilise qu'##avec l'accord préalable de Rodolphe ou de Guillaume##. Ce n'est pas une ligne d'astreinte ordinaire."
            },
            {
              "t": "sous",
              "titre": "Personnel du site et prestataires",
              "blocs": [
                {
                  "t": "tel",
                  "items": [
                    {
                      "nom": "M. Nunes",
                      "role": "Intendant — statut à confirmer, voir les réserves en bas de fiche",
                      "num": "+41 79 880 00 65"
                    },
                    {
                      "nom": "M. Toinet",
                      "role": "Jardinier — technique, jours ouvrables",
                      "num": "+41 79 752 05 57"
                    },
                    {
                      "nom": "M. Cretegny",
                      "role": "Agriculteur et éleveur — mobile",
                      "num": "+41 79 342 60 47"
                    },
                    {
                      "nom": "M. Cretegny",
                      "role": "Agriculteur et éleveur — ligne fixe",
                      "num": "+41 22 755 13 50"
                    },
                    {
                      "nom": "Technik-Alarm",
                      "role": "Intrusion et incendie du bâtiment — transmetteur 466 874",
                      "num": "+41 22 797 17 27"
                    },
                    {
                      "nom": "Siemens",
                      "role": "Intrusion et incendie de la piscine — transmetteur 466 852",
                      "num": "+41 842 842 033"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Effraction, alarme technique, fuite d'eau",
          "blocs": [
            {
              "t": "num",
              "titre": "Alarme effraction — transmetteur 461 324",
              "court": "Effraction",
              "items": [
                {
                  "a": "Contrôle extérieur complet",
                  "d": "Faire le tour, vérifier tous les accès. ##Avant d'entrer où que ce soit.##"
                },
                {
                  "a": "Appeler Certas",
                  "d": "##Dès la fin du contrôle extérieur##, avant d'entrer dans le parking ou le bâtiment : cela limite le temps de déclenchement."
                },
                {
                  "a": "Prévenir son collègue par radio",
                  "d": "Si rien n'est constaté à l'extérieur, entrer dans le bâtiment."
                },
                {
                  "a": "Identifier la zone en alarme",
                  "d": "Puis investiguer à l'intérieur."
                },
                {
                  "a": "Rendre compte",
                  "d": "Certas, puis le client si nécessaire. Rapport GuardTek."
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Si une effraction réelle est constatée",
              "txt": "##NE PAS ENTRER.## Appeler immédiatement la police au ##117##, se placer en observation à distance, puis aviser l'astreinte RDZ."
            },
            {
              "t": "num",
              "titre": "Fuite d'eau",
              "court": "Fuite d'eau",
              "items": [
                {
                  "a": "Contenir",
                  "d": "Placer des contenants sous la fuite, protéger la moquette et tout ce qui est électrique."
                },
                {
                  "a": "Couper si nécessaire",
                  "d": "Connaître à l'avance l'emplacement de la vanne — à repérer lors d'une ronde, pas au moment de la fuite."
                },
                {
                  "a": "Si la fuite est importante",
                  "d": "##Rester sur place##, joindre le superviseur et le client."
                },
                {
                  "a": "Faire intervenir",
                  "d": "Organiser une intervention externe si besoin, puis rapport GuardTek avec photos."
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Alarme technique — 24h/24",
              "items": [
                "Aviser ##M. Ferlicoq##, puis l'astreinte RDZ, qui préviendra ##EQUANS##.",
                "En cas de doute, solliciter ##Rodolphe, joignable 24h/24##."
              ]
            },
            {
              "t": "stop",
              "lab": "Les grilles du jardin",
              "txt": "##Toutes les grilles sont sous alarme.## Ne jamais les déplacer sans l'accord du client. En cas de déchets verts accumulés dessous : événement GuardTek avec photos, sans y toucher."
            }
          ]
        }
      ],
      "blocsRondes": [
        {
          "t": "table",
          "titre": "Fréquence",
          "items": [
            {
              "z": "Nuit, lun-dim",
              "d": "##2 rondes complètes et 2 rondes extérieures minimum.## Au moins un passage au terrain mitoyen de jour ##et## un de nuit."
            },
            {
              "z": "Sam · dim · fériés, de jour",
              "d": "2 complètes et 2 extérieures, ou 3 complètes — environ 40 minutes par ronde"
            },
            {
              "z": "En cas de retard",
              "d": "Un seul passage au terrain mitoyen est toléré par nuit, ##à justifier auprès du superviseur##"
            },
            {
              "z": "Règle générale",
              "d": "##Varier les heures de passage## : la régularité se repère de l'extérieur"
            }
          ]
        },
        {
          "t": "table",
          "titre": "Parcours extérieur (1 à 12)",
          "items": [
            {
              "z": "1",
              "d": "Portail entrée 5 — départ de ronde"
            },
            {
              "z": "2 · 3 · 4",
              "d": "Porte principale du bâtiment · porte droite passerelle · porte arrière"
            },
            {
              "z": "5 · 6",
              "d": "Porte de sortie de secours piscine · Portail 3"
            },
            {
              "z": "7 · 8",
              "d": "Porte du local technique cascade, à l'extérieur · porte tourniquet"
            },
            {
              "z": "9 · 10 · 11",
              "d": "Sortie de secours du bâtiment, côté · porte gauche passerelle · porte sous passerelle"
            },
            {
              "z": "12",
              "d": "Porte de l'escalier de secours du parking — ##marque officiellement la fin du parcours extérieur##"
            }
          ]
        },
        {
          "t": "table",
          "titre": "Parcours intérieur (13 à 28)",
          "items": [
            {
              "z": "13 à 16",
              "d": "Centrale d'alarme du parking · groupe de secours 1 · local technique entretien · groupe de secours 2"
            },
            {
              "z": "17 · 18",
              "d": "Centrale d'alarme entrée bureau au rez · centrale d'alarme loge sécurité au 1er"
            },
            {
              "z": "19 · 20 · 21",
              "d": "Consoles techniques : chaufferie près de la porte d'entrée du rez, production de froid, « Carrier »"
            },
            {
              "z": "22 à 26",
              "d": "Zone piscine 1 · console Minerg · zone piscine 2 · console piscine · sortie de secours du local technique piscine"
            },
            {
              "z": "27 · 28",
              "d": "Bureau du dernier étage · Portail entrée 5, sortie"
            }
          ]
        },
        {
          "t": "liste",
          "titre": "À contrôler pendant la ronde",
          "items": [
            "##Déchets verts## : vérifier l'absence d'accumulation sous les grilles du jardin — sans jamais les déplacer.",
            "Absence de problème technique apparent : fuites, dégâts, verrouillage.",
            "Présence de personnes sur le terrain, en particulier par le bas de la propriété."
          ]
        }
      ],
      "blocsNotes": [
        {
          "t": "liste",
          "titre": "Tenue et comportement",
          "items": [
            "Polo et veste sécurité, pantalon noir, chaussures noires, ##sur-chaussures## dans le bâtiment.",
            "Interdit : fumer ou téléphoner devant les clients, utiliser l'ascenseur, utiliser les WC, prendre des photos, ouvrir le portail n°3, faire la ronde extérieure en véhicule."
          ]
        },
        {
          "t": "liste",
          "titre": "Réserves sur les données",
          "items": [
            "Le cahier des charges du 01.04.2026 indique à la fois qu'##il n'y a pas d'intendant permanent## sur site et liste ##M. Nunes comme intendant## avec un numéro actif — statut réel à vérifier.",
            "L'adresse figure comme « Chemin des Tuileries 3 » sur la page de localisation et « 3-5 » ailleurs dans le même document.",
            "La numérotation des annexes ne concorde pas avec les noms de fichiers reçus : l'interdiction d'entrée est tantôt A.03, tantôt A.04.",
            "Le formulaire « Interdiction d'entrée » reçu est un ##gabarit vierge## : aucune interdiction nominative en cours pour ce site.",
            "##Aucun code de centrale## n'a été communiqué pour ce site."
          ]
        }
      ]
    },
    {
      "statut": "complet",
      "prom": "320 805",
      "client": "ERGON Collex",
      "nomComplet": "ERGON — Site Collex",
      "types": [
        "Incendie",
        "Effraction"
      ],
      "adresse": "Route de Collex 45, 1293 Bellevue",
      "transmetteurs": [
        {
          "label": "Incendie",
          "code": "320 805"
        },
        {
          "label": "Effraction",
          "code": "badge/trousseau — pas de code numérique dédié"
        },
        {
          "label": "Toutes alarmes",
          "code": "Complément à 30"
        }
      ],
      "population": "Ponctuellement des techniciens et visiteurs.",
      "tenue": "Polo + veste sécurité, pantalon noir, chaussures noires. Sur-chaussures obligatoires en cas de pluie. Interdit : fumer, appels personnels en présence de clients, prendre des photos.",
      "stationnement": "Devant la grille de chantier d'entrée. Interdiction de faire la ronde extérieure en voiture. Parking occupé le week-end (location probable par le Country Club voisin) : faire un rapport et laisser les véhicules.",
      "acces": [
        "##Entrée## : depuis le parking, longer le bâtiment à gauche, descendre l'escalier caché derrière le buisson, ouvrir la porte rouge avec la clé pass.",
        "##Sortie si portes verrouillées## : ascenseur → niveau -1 → double porte du vestibule (à refermer à clé) → porte de secours au fond du parking.",
        "Trousseau de clés/badge et téléphone de patrouille à récupérer à la loge REGM avant la prise de poste."
      ],
      "manipulationBase": [
        "##Portes automatiques du hall## : bouton rond central = menu, flèche droite → lettre O = Ouvrir, flèche gauche → lettre F = Fermer/verrouiller, valider avec le bouton central.",
        "##Porte automatique du sas## : la programmation ne fait aucune distinction semaine/week-end (le mécanisme fonctionne à l'identique tous les jours, malgré le nom de l'annexe « jours fériés/week-end »)."
      ],
      "zoning": [
        {
          "zone": "1",
          "desc": "Face arrière du bâtiment — étanchéité (les deux portes de secours, fenêtres, grilles), dégradations (graffitis, déchets)"
        },
        {
          "zone": "2",
          "desc": "Cabane — traces de squat, déchets, soirées interdites"
        },
        {
          "zone": "3",
          "desc": "Portes principales — bien verrouillées (la 1ère peut s'ouvrir en semaine, c'est normal)"
        },
        {
          "zone": "4",
          "desc": "Entrée parking (sous-sol)"
        },
        {
          "zone": "5",
          "desc": "Local TGBT / chaufferie — mode « chaud » = normal ; vérifier aussi l'arrivée d'eau du bâtiment"
        },
        {
          "zone": "6-7-8",
          "desc": "RDC / 1er / 2e étage — contrôle du local électrique à chaque étage + vérifier la fermeture des toilettes situées près des ascenseurs"
        }
      ],
      "contacts": [
        {
          "nom": "M. Nunes",
          "role": "Intendant / concierge du site (jusqu'à 23h)",
          "tel": "+41 79 880 00 65"
        },
        {
          "nom": "M. Ferlicoq",
          "role": "Technical Manager ERGON",
          "tel": "+41 22 959 03 50"
        },
        {
          "nom": "M. Ferlicoq (mobile)",
          "role": "Technical Manager ERGON",
          "tel": "+41 79 917 32 40"
        },
        {
          "nom": "M. De Zordi",
          "role": "Directeur RDZ",
          "tel": "+41 76 634 17 92"
        },
        {
          "nom": "Police Municipale",
          "role": "Dim-mer 6h-minuit / Jeu-sam 6h-3h",
          "tel": "+41 22 418 22 22"
        }
      ],
      "astreinte": "+41 22 552 26 99",
      "rondes": "2 rondes minimum par nuit (1 avant et 1 après minuit) — horaires indicatifs, ronde complète si doute ou bruit inhabituel. 2 rondes extérieures les samedis, dimanches et jours fériés. Passer obligatoirement par la cabane à chaque passage.",
      "consignes": "Accompagnement du personnel sur site en cas de besoin. Lors de la fermeture, s'assurer que tous les accès sont verrouillés. Personnes non autorisées, parking sauvage ou cabane occupée dans les bois : signaler et consigner. Porte automatique du sas (jours fériés/week-end) : la programmation ne différencie pas semaine/week-end — la 1ère porte s'ouvre pour le facteur, la 2e doit impérativement rester verrouillée. NE PAS intervenir sur la programmation.",
      "particularites": "Un formulaire « Interdiction d'entrée dans un bâtiment » (Route de Collex 45, 1293 Bellevue — orthographié « Colex » sur le formulaire source, coquille du document d'origine) est disponible en annexe pour notifier une personne interdite de site, avec copie systématique à la Police cantonale ; c'est un gabarit vierge, aucune interdiction nominative n'a été transmise pour ce site à ce jour. Alarme incendie : intervention sur appel client (contacter M. Nunes, concierge). Le tableau des annexes du cahier des charges laisse apparaître une ligne « S.04 / TECHNIQUE / T.03 » tronquée sans description — possible annexe non transmise, à confirmer avec RDZ.",
      "annexes": [
        "S.01 — Porte automatique du sas jours fériés/week-end",
        "S.02 — Ronde extérieure Collex (itinéraire et pointeaux)",
        "S.03 — Interdiction de site (formulaire vierge, procédure)"
      ],
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Ce que l'agent doit savoir avant d'arriver",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "PROM incendie",
                  "v": "320 805",
                  "code": true
                },
                {
                  "k": "Effraction",
                  "v": "##Pas de code numérique dédié## — l'alarme se gère par badge et trousseau"
                },
                {
                  "k": "Identification Certas",
                  "v": "Complément à 30"
                },
                {
                  "k": "Client",
                  "v": "ERGON — site de Collex"
                },
                {
                  "k": "Occupation",
                  "v": "Bâtiment vide la plupart du temps. Ponctuellement des techniciens et des visiteurs."
                }
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller",
              "items": [
                {
                  "label": "Stationner devant la grille de chantier d'entrée",
                  "dest": "Route de Collex 45, 1293 Bellevue"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Recherche dans l'appli",
              "txt": "L'effraction n'a pas de code PROM. Ce site se trouve par le PROM incendie ~~320 805~~ ou en tapant ##Collex## dans le champ nom du client."
            },
            {
              "t": "liste",
              "titre": "Règles du site",
              "items": [
                "##Sur-chaussures obligatoires en cas de pluie.##",
                "##Ronde extérieure à pied uniquement## — jamais en voiture.",
                "Interdit : fumer, appels personnels en présence de clients, ##prendre des photos##.",
                "##Parking occupé le week-end## — location probable par le Country Club voisin : faire un rapport et ##laisser les véhicules en place##."
              ]
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "Un seul transmetteur, pas de code de centrale",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Incendie",
                  "v": "PROM ~~320 805~~, complément à 30"
                },
                {
                  "k": "Effraction",
                  "v": "Gérée par badge et trousseau, sans transmetteur numéroté"
                }
              ]
            },
            {
              "t": "manque",
              "txt": "##Aucun code de centrale n'est documenté pour ce site## — ni pour l'incendie, ni pour l'effraction. Un agent peut constater une alarme mais ne peut rien quittancer sur place. À obtenir."
            }
          ]
        },
        {
          "titre": "Points d'accès",
          "resume": "Une entrée peu évidente, à connaître avant d'arriver",
          "blocs": [
            {
              "t": "num",
              "titre": "Entrer dans le bâtiment",
              "items": [
                {
                  "a": "Depuis le parking, longer le bâtiment par la gauche",
                  "d": ""
                },
                {
                  "a": "Descendre l'escalier",
                  "d": "Il est ##caché derrière le buisson## — c'est le point que personne ne trouve la première fois."
                },
                {
                  "a": "Ouvrir la porte rouge",
                  "d": "Avec la ##clé pass##."
                },
                {
                  "a": "Traverser le parking",
                  "d": "Jusqu'à une ##double porte sur la gauche##."
                },
                {
                  "a": "Traverser le vestibule",
                  "d": "Jusqu'aux ascenseurs."
                },
                {
                  "a": "Monter au rez-de-chaussée",
                  "d": "Puis traverser le hall d'entrée jusqu'aux portes automatiques."
                }
              ]
            },
            {
              "t": "num",
              "titre": "Ressortir si les portes sont verrouillées",
              "items": [
                {
                  "a": "Prendre l'ascenseur jusqu'au niveau -1",
                  "d": ""
                },
                {
                  "a": "Passer la double porte du vestibule",
                  "d": "##À refermer à clé derrière soi.##"
                },
                {
                  "a": "Sortir par la porte de secours",
                  "d": "Au fond du parking."
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Portes automatiques du hall",
              "items": [
                "##Boîtier de commande## : dans le hall, ##sur le mur de gauche##, près des portes automatiques.",
                "Bouton rond central = menu.",
                "Flèche droite jusqu'à la lettre ##O## = ouvrir · flèche gauche jusqu'à la lettre ##F## = fermer et verrouiller.",
                "Valider avec le bouton central."
              ]
            },
            {
              "t": "stop",
              "lab": "Porte automatique du sas",
              "txt": "La programmation ne fait ##aucune distinction entre la semaine et le week-end##, malgré le nom de l'annexe. La première porte s'ouvre pour le facteur ; ##la seconde doit impérativement rester verrouillée##. ##Ne jamais intervenir sur la programmation.##"
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Trousseau et badge — à récupérer à la loge REGM",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Où les récupérer",
                  "v": "##Loge REGM##, avant la prise de poste — trousseau, badge et téléphone de patrouille"
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Élément connu",
              "items": [
                "##Clé pass## — ouvre la porte rouge de l'entrée, en bas de l'escalier caché."
              ]
            },
            {
              "t": "manque",
              "txt": "Composition complète du trousseau et références des clés non documentées. L'inventaire ##Clefs IS / RDZ## contient six clés Papeterie et Collex, toutes sans désignation : c'est l'occasion de les identifier."
            },
            {
              "t": "liste",
              "titre": "S'il manque une clé",
              "items": [
                "##Pas d'urgence## — rapport et message à Laurent et Lucas.",
                "##Urgence## (site non hermétique, risque pour le client) — appel direct à Laurent ou Lucas."
              ]
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au technique",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "Collex est proche de la frontière : un téléphone y accroche parfois une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu confirmé, doute non levé",
                  "num": "118"
                },
                {
                  "nom": "Police",
                  "role": "Effraction réelle, occupation de la cabane, refus de légitimation",
                  "num": "117"
                },
                {
                  "nom": "Police Municipale",
                  "role": "Dim-mer 6h-minuit · Jeu-sam 6h-3h",
                  "num": "+41 22 418 22 22"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Centrale et astreinte",
              "items": [
                {
                  "nom": "Certas",
                  "role": "Incendie 320.805 — complément à 30",
                  "num": "+41 844 800 811"
                },
                {
                  "nom": "Téléphone de patrouille",
                  "role": "Ligne du poste",
                  "num": "+41 22 552 26 99"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Ligne hiérarchique. Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence).",
                  "num": "+41 79 339 13 41"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Client et technique",
              "items": [
                {
                  "nom": "M. Cédric Nunes",
                  "role": "Responsable technique — ##c'est lui qu'on appelle en cas d'alarme incendie##. Joignable à toute heure, par téléphone de préférence.",
                  "num": "+41 79 880 00 65"
                },
                {
                  "nom": "M. Ferlicoq",
                  "role": "Technical Manager ERGON — mobile",
                  "num": "+41 79 917 32 40"
                },
                {
                  "nom": "M. Ferlicoq",
                  "role": "Technical Manager ERGON — ligne fixe",
                  "num": "+41 22 959 03 50"
                },
                {
                  "nom": "M. De Zordi",
                  "role": "Directeur RDZ",
                  "num": "+41 76 634 17 92"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Erreur dans le cahier des charges",
              "txt": "Le CDC du 01.04.2026 annonce « Astreinte téléphonique RDZ 24h/7j : ~~+41 22 552 26 99~~ ». C'est le ##téléphone de patrouille##, pas l'astreinte. L'astreinte RDZ est le ##+41 79 339 13 41##."
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Alarme incendie, intrusions, fermeture",
          "blocs": [
            {
              "t": "num",
              "titre": "Alarme incendie",
              "court": "Alarme feu",
              "items": [
                {
                  "a": "Prendre l'information",
                  "d": "L'intervention part d'un appel du client ou de Certas."
                },
                {
                  "a": "Appeler M. Nunes",
                  "d": "C'est la procédure propre à ce site : le concierge est prévenu dès le départ."
                },
                {
                  "a": "Se rendre sur place et lever le doute",
                  "d": "Entrée par l'escalier caché, porte rouge, clé pass."
                },
                {
                  "a": "Si le feu est confirmé",
                  "d": "##118##, accueil et guidage des secours. Ne pas tenter de réarmer : aucun code de centrale n'est disponible sur ce site."
                },
                {
                  "a": "Rendre compte",
                  "d": "Certas, M. Nunes, puis rapport GuardTek."
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Personnes non autorisées",
              "items": [
                "##Cabane occupée dans les bois##, traces de squat, soirée en cours : signaler et consigner.",
                "##Parking sauvage## : rapport, sans faire déplacer les véhicules.",
                "Refus de légitimation ou occupation persistante : ##117##.",
                "Rapport GuardTek systématique."
              ]
            },
            {
              "t": "liste",
              "titre": "Fermeture",
              "items": [
                "S'assurer que ##tous les accès sont verrouillés##.",
                "Accompagner le personnel présent sur site si nécessaire.",
                "Vérifier que la seconde porte du sas est bien restée verrouillée."
              ]
            }
          ]
        }
      ],
      "blocsRondes": [
        {
          "t": "kv",
          "items": [
            {
              "k": "Nuit",
              "v": "##2 rondes minimum## — une avant minuit, une après. Horaires indicatifs : ronde complète en cas de doute ou de bruit inhabituel."
            },
            {
              "k": "Sam · dim · fériés",
              "v": "2 rondes extérieures"
            },
            {
              "k": "Règle",
              "v": "##Passer obligatoirement par la cabane à chaque passage.##"
            }
          ]
        },
        {
          "t": "table",
          "titre": "Parcours — 8 points",
          "items": [
            {
              "z": "1",
              "d": "Face arrière du bâtiment — étanchéité des deux portes de secours, des fenêtres et des grilles ; dégradations, graffitis, déchets"
            },
            {
              "z": "2",
              "d": "##Cabane## — traces de squat, déchets, soirées interdites"
            },
            {
              "z": "3",
              "d": "Portes principales — vérifier le verrouillage. ##La première peut s'ouvrir en semaine, c'est normal.##"
            },
            {
              "z": "4",
              "d": "Entrée du parking, au sous-sol"
            },
            {
              "z": "5",
              "d": "Local TGBT et chaufferie — ##le mode « chaud » est normal##. Vérifier aussi l'arrivée d'eau du bâtiment."
            },
            {
              "z": "6 · 7 · 8",
              "d": "Rez, 1er et 2e étage — contrôle du local électrique à chaque niveau, et fermeture des toilettes près des ascenseurs"
            }
          ]
        }
      ],
      "blocsNotes": [
        {
          "t": "liste",
          "titre": "Tenue et comportement",
          "items": [
            "Polo et veste sécurité, pantalon noir, chaussures noires.",
            "Sur-chaussures en cas de pluie.",
            "Interdit : fumer, appels personnels devant les clients, prendre des photos."
          ]
        },
        {
          "t": "liste",
          "titre": "Interdiction de site",
          "items": [
            "Formulaire « Interdiction d'entrée dans un bâtiment », notifié par la direction d'Ergon SA.",
            "##Durée maximale : 36 mois.## Prend effet dès la notification.",
            "En cas de non-respect : ##plainte pénale pour violation de domicile, art. 186 CP##.",
            "##Copie systématique à la Police cantonale.##",
            "La personne concernée signe, reçoit une copie en mains propres, et peut demander une reconsidération auprès d'Ergon SA.",
            "C'est un ##gabarit vierge## : aucune interdiction nominative transmise pour ce site à ce jour."
          ]
        },
        {
          "t": "liste",
          "titre": "Réserves sur les données",
          "items": [
            "Le formulaire d'interdiction orthographie l'adresse « Colex » — coquille du document d'origine.",
            "Le tableau des annexes du cahier des charges comporte une ligne ##« S.04 / TECHNIQUE / T.03 » tronquée##, sans description : annexe probablement non transmise, à confirmer.",
            "##Aucun code de centrale## n'a été communiqué pour ce site."
          ]
        }
      ]
    },
    {
      "statut": "complet",
      "prom": "320 917",
      "client": "ERGON Papeterie",
      "nomComplet": "ERGON — Site Papeterie (+ Archives SETE Versoix)",
      "types": [
        "Incendie",
        "Effraction"
      ],
      "adresse": "Chemin de la Papeterie 1, 1290 Versoix",
      "transmetteurs": [
        {
          "label": "Incendie",
          "code": "320 917"
        },
        {
          "label": "Effraction — Archives Versoix",
          "code": "nom « Archives SETE Versoix » — pas de code numérique dédié"
        },
        {
          "label": "Toutes alarmes",
          "code": "Complément à 30"
        }
      ],
      "population": "Responsable technique (bureau sur place) · Entreprises locataires · Protectas · Promeneurs et riverains · SDF / squatteurs · Taggeurs.",
      "tenue": "Polo + veste sécurité, pantalon noir, chaussures noires. Interdit : fumer sur site, appels personnels sur site.",
      "stationnement": "Sur le parking extérieur du site, devant l'entrée principale.",
      "acces": [
        "##Trousseau de clés## : bâtiment principal, locaux techniques, parking, archives.",
        "##Connecteurs de porte## : salle d'archives 5 et porte du couloir menant au SAS ascenseur."
      ],
      "manipulationBase": [
        "##Clavier alarme Archives## : toucher « NO » pour activer le clavier, saisir le code ~~2244~~ pour armer/désarmer.",
        "##Centrale d'alarme Archives## dans la salle Archive 1 — contacter M. Nunes AVANT de faire intervenir Technik Alarm."
      ],
      "zoning": [
        {
          "zone": "Bâtiment principal (pts 1-20)",
          "desc": "Entrée du site, corridor SAS ; contour du bâtiment côté voie ferrée ; une terrasse est explicitement exclue du contrôle (« Ne pas contrôler cette terrasse ») ; pt 4 entrée locaux techniques puis pt 5/6/7 local TGBT / local IT / local sous-station ; pts 12-15 étages 1-4 côté gauche, pts 16-18 étages 1-3 côté droit ; toilettes H/F contrôlées à chaque étage (fuites) ; pt 19 local technique 4e étage côté droit ; pt 20 local ménage RDC."
        },
        {
          "zone": "18 — Sprinkler",
          "desc": "Local SPRINKLER — contrôle pression : seuls les 2 manomètres du haut comptent, ne doivent pas être < 10 bars"
        },
        {
          "zone": "21 — Vanne d'eau",
          "desc": "Local technique — vanne d'arrivée générale d'eau, à couper via la vanne rouge en cas de fuite ou sur ordre du client"
        },
        {
          "zone": "Toit",
          "desc": "Accès via porte de secours 4e étage (descendre 1/2 étage) → escaliers métalliques → toit ; suivre la flèche en restant loin du bord. Contrôle de JOUR uniquement, interdit la nuit et par vent/pluie — informer son binôme avant de monter"
        },
        {
          "zone": "Archives",
          "desc": "6 salles d'archives à parcourir lors d'une levée de doute"
        },
        {
          "zone": "Zone Logements (pts 21-23)",
          "desc": "⚠ Composante résidentielle du site, révélée par l'annexe ronde A.02 — pt 21 Villa, pt 22 zone technique, pt 23 Logements. Contrôle manuel de la fermeture du bâtiment extérieur (porte à la main, fenêtres à l'œil)."
        },
        {
          "zone": "Ronde Parking (pts 24-29)",
          "desc": "Portes intérieures/extérieures sur plusieurs niveaux de parking (1er et 2e étage), escalier de secours 2e étage. Contrôle : fermeture de toutes les portes, état des extincteurs, état des issues de secours, absence de squat/dégradations."
        }
      ],
      "contacts": [
        {
          "nom": "M. Cédric Nunes",
          "role": "Responsable technique, Espace Versoix — demande à être ##appelé directement## pour tout problème technique, pas seulement avisé par rapport (01.10.2026). WhatsApp à toute heure.",
          "tel": "+41 79 880 00 65"
        },
        {
          "nom": "M. Ferlicoq",
          "role": "Technical Manager ERGON",
          "tel": "+41 22 959 03 50"
        },
        {
          "nom": "M. De Zordi",
          "role": "Directeur RDZ",
          "tel": "+41 76 634 17 92"
        },
        {
          "nom": "Police Municipale",
          "role": "Dim-mer 6h-minuit / Jeu-sam 6h-3h",
          "tel": "+41 22 418 22 22"
        },
        {
          "nom": "Protectas",
          "role": "Alerte Archives SETE (centrale « Archives SETE à Versoix »)",
          "tel": "058 123 02 00"
        }
      ],
      "astreinte": "+41 22 552 26 99 (téléphone de patrouille) — astreinte RDZ : +41 79 339 13 41. Correction (27.08.2026) : le numéro +41 79 749 35 36 précédemment relié ici à « l'astreinte RDZ » est en réalité le natel de l'agent MDP (matériel de site, sans rapport avec ce site Papeterie) ; le lien fait dans une version précédente de cette fiche entre le téléphone de patrouille et ce numéro était donc probablement erroné — à reconfirmer avec le client quel numéro joindre en priorité depuis ce site.",
      "rondes": "20h-23h (tous les jours) : ronde complète intérieure + ronde d'étanchéité bâtiment principal (~45 min). Minuit-7h : ronde d'étanchéité + contrôle extérieur parking et village (~30 min). Samedi/dimanche/fériés 7h-20h : ronde d'étanchéité + contrôle extérieur. Parcours complet : 29 pointeaux répartis en 3 zones — voir Zoning ci-dessus (bâtiment principal 1-20, zone Logements 21-23, ronde Parking 24-29).",
      "consignes": "##CONSIGNE TEMPORAIRE — fuite d'eau 1er étage, depuis le 30.09.2026.## Fuite au plafond, goutte-à-goutte, origine probable un cumulus en fin de vie. Un seau de rétention est en place : ##le vider à chaque ronde## pour éviter le débordement, et noter l'évolution au rapport. Consigne à supprimer dès que le technicien est intervenu.\n\nIntervention Archives (24h/7j) : alerte Protectas avec validation de M. Nunes → déplacement du patrouilleur pour levée de doute → désactiver l'alarme et vérifier les 6 salles d'archives → si présence : légitimation + appel 117 si nécessaire ; si RAS : rendre compte à M. Nunes par WhatsApp, réactiver l'alarme, refermer à clé, rédiger un rapport. Bâtiment bureaux : certaines zones sont confiées à des sociétés concurrentes — NE PAS ouvrir ces portes (risque d'intervention armée) ; ne pas entrer dans un bureau privé sans autorisation explicite.",
      "particularites": "##Problème technique constaté (fuite, panne, dégât) : téléphoner à M. Nunes.## Il l'a demandé explicitement le 01.10.2026 — le rapport écrit ne suffit pas, l'appel permet une intervention le jour même. Pression sprinkler < 10 bars → rapport GuardTek immédiat + contact M. Nunes ou astreinte RDZ. Lumières automatiques du parking : rapport GuardTek en cas de dysfonctionnement. Problèmes techniques 1er niveau : consulter le RETEX sur Teams, sinon M. Nunes (jusqu'à 23h), sinon astreinte RDZ. Le site borde une voie ferrée (contour du bâtiment principal côté voie ferrée, à contrôler lors des rondes) et comprend une composante résidentielle (Villa + Logements, pointeaux 21-23 de la ronde) qui n'était pas documentée précédemment. Voisinage identifié sur le plan : « Coty Geneva SA » et « MR menuiserie agencement ».",
      "annexes": [
        "A.01 — Accès toit (procédure sécurisée)",
        "A.02 — Ronde (parcours complet, 29 pointeaux : bâtiment principal, zone Logements, parking)",
        "A.03 — Local archives (accès et procédure d'intervention)"
      ],
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Ce que l'agent doit savoir avant d'arriver",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "PROM incendie",
                  "v": "320 917",
                  "code": true
                },
                {
                  "k": "Effraction",
                  "v": "Transmetteur ##Archives SETE à Versoix##, sans code numérique — alarme gérée par ##Protectas##, pas par Certas"
                },
                {
                  "k": "Identification",
                  "v": "Complément à 30"
                },
                {
                  "k": "Client",
                  "v": "ERGON — site Papeterie, avec les archives SETE Versoix"
                },
                {
                  "k": "Occupation",
                  "v": "Responsable technique avec bureau sur place · entreprises locataires · Protectas. Aux abords : promeneurs et riverains, personnes sans abri, taggeurs."
                }
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller",
              "items": [
                {
                  "label": "Stationnement sur le parking extérieur, devant l'entrée principale",
                  "dest": "Chemin de la Papeterie 1, 1290 Versoix"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Recherche dans l'appli",
              "txt": "L'effraction n'a ##pas de code PROM##. Ce site se trouve par le PROM incendie ~~320 917~~ ou en tapant ##Papeterie## dans le champ nom du client."
            },
            {
              "t": "table",
              "titre": "Organisation du site",
              "items": [
                {
                  "z": "Bâtiment principal",
                  "d": "Bureaux sur 4 étages, locaux techniques au rez, local ménage, local monobloc, local sprinkler, local arrivée d'eau."
                },
                {
                  "z": "Archives SETE",
                  "d": "6 salles d'archives, alarme propre gérée par Protectas, clavier et centrale sur place."
                },
                {
                  "z": "Zone Logements",
                  "d": "Villa, zone technique et logements — contrôle manuel de la fermeture du bâtiment extérieur."
                },
                {
                  "z": "Parking couvert",
                  "d": "Deux niveaux, portes intérieures et extérieures, escalier de secours."
                },
                {
                  "z": "Toit",
                  "d": "Accès par la porte de secours du 4e étage — voir l'étape 6, l'accès est réglementé."
                },
                {
                  "z": "Abords",
                  "d": "Village, façade côté voie ferrée. Une terrasse est explicitement ##exclue## du contrôle."
                }
              ]
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "Deux alarmes, deux centrales distinctes",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Incendie — Certas",
                  "v": "PROM ~~320 917~~, complément à 30"
                },
                {
                  "k": "Effraction Archives — Protectas",
                  "v": "Centrale « Archives SETE à Versoix – chemin de la Papeterie », sans code numérique"
                },
                {
                  "k": "Clavier alarme Archives",
                  "v": "Toucher ##NO## pour activer le clavier, puis saisir ~~2244~~ pour armer ou désarmer. Le chiffre en bas à droite de l'écran indique le nombre de caractères saisis."
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Centrale d'alarme Archives",
              "txt": "Le boîtier se trouve dans la ##salle Archive 1##. ##Contacter M. Nunes avant de faire intervenir Technik Alarm##, jamais directement."
            }
          ]
        },
        {
          "titre": "Points d'accès",
          "resume": "Comment entrer et ouvrir",
          "blocs": [
            {
              "t": "liste",
              "items": [
                "##Trousseau de 4 clés## — bâtiment principal, locaux techniques, parking, archives.",
                "##Connecteurs de porte## — salle d'archives 5 et porte du couloir menant au SAS ascenseur.",
                "##Portails et entrées extérieures## — contrôle à chaque ronde."
              ]
            },
            {
              "t": "stop",
              "lab": "Portes à ne pas ouvrir",
              "txt": "Dans le bâtiment bureaux, certaines zones sont confiées à des ##sociétés de sécurité concurrentes##. ##Ne pas ouvrir ces portes## : le cahier des charges mentionne un risque d'intervention armée. Les bureaux privés ne s'ouvrent pas non plus sans autorisation explicite."
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Trousseau Papeterie — 4 clés",
          "blocs": [
            {
              "t": "liste",
              "titre": "Composition du trousseau",
              "items": [
                "Clé du ##bâtiment principal##.",
                "Clé des ##locaux techniques##.",
                "Clé du ##parking##.",
                "Clé des ##archives##."
              ]
            },
            {
              "t": "manque",
              "txt": "Références des clés non documentées. L'inventaire ##Clefs IS / RDZ## contient six clés Papeterie et Collex, toutes sans désignation : c'est l'occasion de les identifier et de les rattacher à ces quatre usages."
            },
            {
              "t": "liste",
              "titre": "S'il manque une clé",
              "items": [
                "##Pas d'urgence## — rapport et message à Laurent et Lucas.",
                "##Urgence## (site non hermétique, risque pour le client) — appel direct à Laurent ou Lucas."
              ]
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au technique",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "Versoix est proche de la frontière : un téléphone y accroche parfois une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu confirmé, doute non levé — réseau suisse uniquement",
                  "num": "118"
                },
                {
                  "nom": "Police",
                  "role": "Personne présente dans les archives, refus de légitimation, intrusion",
                  "num": "117"
                },
                {
                  "nom": "Police Municipale",
                  "role": "Dim-mer 6h-minuit · Jeu-sam 6h-3h",
                  "num": "+41 22 418 22 22"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Centrales d'alarme",
              "items": [
                {
                  "nom": "Protectas",
                  "role": "Centrale des archives SETE — c'est elle qui déclenche l'intervention Archives",
                  "num": "+41 58 123 02 00"
                },
                {
                  "nom": "Certas",
                  "role": "Incendie — PROM 320 917, complément à 30",
                  "num": "+41 844 800 811"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Client et technique",
              "items": [
                {
                  "nom": "M. Cédric Nunes",
                  "role": "Responsable technique du site, Espace Versoix. ##Joignable à toute heure, par téléphone de préférence## — il l'a demandé explicitement. WhatsApp également.",
                  "num": "+41 79 880 00 65"
                },
                {
                  "nom": "M. Ferlicoq",
                  "role": "Technical Manager ERGON — mobile",
                  "num": "+41 79 917 32 40"
                },
                {
                  "nom": "M. Ferlicoq",
                  "role": "Technical Manager ERGON — ligne fixe",
                  "num": "+41 22 959 03 50"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "RDZ",
              "items": [
                {
                  "nom": "Téléphone de patrouille",
                  "role": "Ligne du poste",
                  "num": "+41 22 552 26 99"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Ligne hiérarchique. Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence).",
                  "num": "+41 79 339 13 41"
                },
                {
                  "nom": "M. De Zordi",
                  "role": "Directeur RDZ",
                  "num": "+41 76 634 17 92"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Deux erreurs dans le cahier des charges",
              "txt": "Le CDC du 01.04.2026 annonce ##deux numéros différents## comme « astreinte RDZ 24h/7j » : le ~~+41 79 749 35 36~~ en page Équipement, qui est le natel de l'agent MDP, et le ~~+41 22 552 26 99~~ en page Contacts, qui est le téléphone de patrouille. ##Ni l'un ni l'autre n'est l'astreinte.## Le bon numéro est le ##+41 79 339 13 41##."
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Archives, incendie, eau, accès toit",
          "blocs": [
            {
              "t": "num",
              "titre": "Intervention Archives SETE — 24h/7j",
              "court": "Archives",
              "items": [
                {
                  "a": "Alerte Protectas",
                  "d": "L'intervention est déclenchée par ##Protectas##, qui a préalablement obtenu la validation de ##M. Nunes##."
                },
                {
                  "a": "Déplacement",
                  "d": "Le patrouilleur se rend sur place pour la levée de doute, avec le renfort de l'agent REGM."
                },
                {
                  "a": "Levée de doute",
                  "d": "Désactiver l'alarme — touche ##NO## puis code ~~2244~~ — et contrôler les ##6 salles d'archives##."
                },
                {
                  "a": "Si quelqu'un est présent",
                  "d": "Demander la légitimation, appeler le ##117## si nécessaire. Ne pas intervenir seul face à une personne."
                },
                {
                  "a": "Si rien n'est constaté",
                  "d": "Rendre compte à ##M. Nunes par WhatsApp, à toute heure##, réactiver l'alarme, refermer la porte à clé."
                },
                {
                  "a": "Consigner",
                  "d": "Rapport d'intervention GuardTek dans tous les cas."
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Alarme incendie",
              "items": [
                "Intervention sur appel du client ou de Certas.",
                "Gestion et quittancement d'une ##petite alarme##.",
                "Si feu confirmé : ##118##, accueil des secours, évacuation des occupants vers les points de rassemblement.",
                "##Appeler M. Nunes## dans tous les cas."
              ]
            },
            {
              "t": "num",
              "titre": "Fuite d'eau — coupure générale",
              "court": "Fuite d'eau",
              "items": [
                {
                  "a": "Se rendre au pointeau 11",
                  "d": "Local d'arrivée d'eau, dans les locaux techniques."
                },
                {
                  "a": "Fermer la vanne rouge",
                  "d": "C'est l'arrivée générale. Coupure ##sur ordre du client ou de l'intendant##, ou en cas de fuite avérée."
                },
                {
                  "a": "Aviser immédiatement",
                  "d": "##Téléphoner à M. Nunes##, puis l'astreinte RDZ si injoignable."
                },
                {
                  "a": "Consigner",
                  "d": "Rapport GuardTek immédiat, avec photo."
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Accès au toit",
              "txt": "##De jour uniquement.## Interdit la nuit, et interdit par vent ou par pluie. ##Informer son binôme avant de monter.##\nItinéraire : porte de secours au milieu du 4e étage, descendre d'un demi-étage, monter les escaliers métalliques jusqu'en haut. Sur le toit, suivre la flèche vers le local technique ##en restant éloigné du bord##."
            },
            {
              "t": "liste",
              "titre": "Problème technique de 1er niveau",
              "items": [
                "Consulter d'abord le ##RETEX sur Teams##.",
                "Si le doute persiste : ##téléphoner à M. Nunes##.",
                "En cas d'urgence ou s'il est injoignable : astreinte RDZ, 24h/7j."
              ]
            },
            {
              "t": "liste",
              "titre": "Personnes non autorisées",
              "items": [
                "Signalement et refoulement des personnes sans abri, squatteurs et taggeurs.",
                "Rapport GuardTek systématique, avec ##photo## pour les graffitis et les dégradations."
              ]
            }
          ]
        }
      ],
      "blocsRondes": [
        {
          "t": "table",
          "titre": "Horaires",
          "items": [
            {
              "z": "Lun-dim 20h-23h",
              "d": "Ronde complète intérieure et ronde d'étanchéité du bâtiment principal — environ 45 minutes"
            },
            {
              "z": "Minuit-7h, tous les jours",
              "d": "Ronde d'étanchéité, contrôle extérieur du parking et du village — environ 30 minutes"
            },
            {
              "z": "Sam · dim · fériés 7h-20h",
              "d": "Ronde d'étanchéité et contrôle extérieur"
            }
          ]
        },
        {
          "t": "stop",
          "lab": "Numérotation des pointeaux",
          "txt": "Le cahier des charges place le sprinkler au pointeau 18 et la vanne d'eau au pointeau 21 : ##c'est faux##. Les numéros ci-dessous sont ceux de l'annexe A.02, qui fait foi."
        },
        {
          "t": "table",
          "titre": "Parcours — bâtiment principal (1 à 20)",
          "items": [
            {
              "z": "1 · 2 · 3",
              "d": "Entrée du site, puis contour du bâtiment côté voie ferrée. ##Ne pas contrôler la terrasse## signalée dans l'annexe."
            },
            {
              "z": "4",
              "d": "Entrée des locaux techniques"
            },
            {
              "z": "5 · 6 · 7",
              "d": "Local TGBT · Local IT · Sous-station"
            },
            {
              "z": "8",
              "d": "##Local SPRINKLER — contrôle de pression.## Seul le ##manomètre du haut## fait foi : il ne doit pas descendre sous ##10 bars##. Les autres jauges à zéro ou presque sont normales (confirmé par M. Nunes, 29.07.2026)."
            },
            {
              "z": "9 · 10",
              "d": "Local monobloc · Porte de secours, vérifier le verrouillage"
            },
            {
              "z": "11",
              "d": "##Local d'arrivée d'eau## — vanne générale rouge, coupure sur ordre ou en cas de fuite"
            },
            {
              "z": "12 à 15",
              "d": "Côté gauche, étages 1 à 4"
            },
            {
              "z": "16 à 18",
              "d": "Côté droit, étages 1 à 3 — les tags peuvent être à l'intérieur comme à l'extérieur"
            },
            {
              "z": "19",
              "d": "Local technique, 4e étage côté droit. Vérifier aussi les toilettes hommes et femmes : absence de fuite."
            },
            {
              "z": "20",
              "d": "Local ménage, rez côté droit"
            }
          ]
        },
        {
          "t": "table",
          "titre": "Parcours — zone Logements (21 à 23)",
          "items": [
            {
              "z": "21 · 22 · 23",
              "d": "Villa · Zone technique · Logements"
            },
            {
              "z": "Contrôle",
              "d": "Fermeture du bâtiment extérieur : ##porte testée manuellement##, fenêtres contrôlées visuellement"
            }
          ]
        },
        {
          "t": "table",
          "titre": "Parcours — parking (24 à 29)",
          "items": [
            {
              "z": "24 · 25 · 26",
              "d": "Porte intérieure, puis les deux portes extérieures"
            },
            {
              "z": "27 · 28 · 29",
              "d": "Parking intérieur 1er étage · 2e étage · escalier de secours 2e étage"
            },
            {
              "z": "À contrôler",
              "d": "Fermeture de toutes les portes, ##état des extincteurs##, issues de secours, et absence de squat ou de dégradation"
            }
          ]
        },
        {
          "t": "liste",
          "titre": "À chaque passage",
          "items": [
            "##Lumières automatiques du parking## — rapport GuardTek en cas de dysfonctionnement.",
            "Issues de secours fermées et non obstruées.",
            "Absence de problèmes techniques apparents : fuites, dégâts, verrouillage, éclairage défaillant.",
            "Contrôle extérieur : village, abords, façade côté voie ferrée."
          ]
        }
      ],
      "blocsNotes": [
        {
          "t": "stop",
          "lab": "Consigne temporaire — fuite d'eau au 1er étage",
          "txt": "Depuis le 30.09.2026 : fuite au plafond, goutte-à-goutte, origine probable un cumulus en fin de vie. Un seau de rétention est en place — ##le vider à chaque ronde## et noter l'évolution au rapport. ##Consigne à supprimer dès que le technicien est intervenu.##"
        },
        {
          "t": "liste",
          "titre": "Consignes permanentes",
          "items": [
            "##Ne pas pénétrer dans le restaurant## — partie locataire, hors périmètre de la mission (17.09.2026).",
            "##Sous-station sud##, au centre du bâtiment face au TGBT : un sol mouillé y est ##normal##, M. Nunes teste l'installation (confirmé le 29.07.2026). Inutile de le signaler à chaque passage."
          ]
        },
        {
          "t": "liste",
          "titre": "Tenue et comportement",
          "items": [
            "Polo et veste sécurité, pantalon noir, chaussures noires.",
            "Interdit : fumer sur le site, appels personnels sur le site."
          ]
        },
        {
          "t": "liste",
          "titre": "Réserves sur les données",
          "items": [
            "Cahier des charges du 01.04.2026 et annexes A.01, A.02 et A.03 de la même date.",
            "##Numérotation des pointeaux## : en cas de divergence, l'annexe A.02 fait foi — elle est illustrée point par point.",
            "Le CDC annonce deux numéros erronés comme astreinte RDZ : correction à faire dans le document.",
            "M. Nunes est désigné tantôt « intendant », tantôt « concierge jusqu'à 23h » : il est responsable technique et joignable à toute heure."
          ]
        }
      ]
    },
    {
      "statut": "complet",
      "prom": "321 482 / 461 025",
      "client": "ERGON Seujet",
      "nomComplet": "ERGON / SETE — Seujet",
      "types": [
        "Incendie",
        "Effraction"
      ],
      "adresse": "Quai du Seujet — accès n°22 (loge intendant, alarme incendie) et n°24 (alarme effraction), 1201 Genève",
      "transmetteurs": [
        {
          "label": "Incendie",
          "code": "321 482"
        },
        {
          "label": "Effraction — RDC/étages",
          "code": "461 025"
        },
        {
          "label": "Effraction — 9e/10e étage",
          "code": "461 309"
        },
        {
          "label": "Toutes alarmes",
          "code": "Complément à 30"
        }
      ],
      "acces": [
        "##Arrivée sur site## : se garer face au portail vert (côté gauche), entrer par la porte battante automatique entre les deux tourniquets, badger sur le lecteur de droite (noir).",
        "##Boîte à clés de la loge## : CODE ~~0741~~.",
        "##Loge de l'intendant## : éclairage à droite de la porte ; centrale effraction, boîte à clés et centrale feu sur/derrière le premier bureau.",
        "##Trousseau bleu « Sécurité »## + porte-clé « coq » dans la boîte à pass (fermée par un simple aimant).",
        "##Sortie## : éteindre l'éclairage, verrouiller la loge avec la clé du coffre, redéposer la clé dans le coffre (code ~~0741~~) en masquant l'affichage du code, puis présenter la main devant le boîtier pour ouvrir la porte automatiquement.",
        "##Ascenseur vers 9e/10e## : badger le clavier puis tourner la clé « ~~LA4545~~ » pour activer le panneau de commande, sélectionner l'étage."
      ],
      "zoning": [
        {
          "zone": "Grp 1",
          "desc": "RDC zones 4/6/8/10/11/13/114 (Porte Quai A, Tourniquet 22 côté loge, Tourniquet 24, Tourniquet 22 côté quai, Porte gauche Arcade rez 24, Passage quai à 22, Porte droite Arcade Rez 24) · 6e étage zone 12 (clé incendie 6e)"
        },
        {
          "zone": "Grp 2",
          "desc": "RDC zones 1/9 — tempo porte quai marchandises, alarme porte quai de marchandises"
        },
        {
          "zone": "Grp 3",
          "desc": "11e étage zone 22 (sortie terrasse 11e) · 12e étage zones 23/24 (sortie balcon 12e, sortie terrasse 12e)"
        },
        {
          "zone": "Grp 4",
          "desc": "RDC zone 7 (sortie de secours 24) · 6e étage zones 14/15/16/17/18 (sorties de secours 22/24/26, 6e) · 10e étage zones 21/150 (sortie terrasse 10e, accès EFG)"
        },
        {
          "zone": "Grp 5",
          "desc": "RDC zones 2/33 (procédure porte sortie de secours, quai A/B, porte B rez)"
        },
        {
          "zone": "Grp 6",
          "desc": "6e étage zones 19/20 (sorties de secours 26, 6e)"
        },
        {
          "zone": "Grp 7",
          "desc": "RDC zone 5 (porte principale n°22)"
        }
      ],
      "contacts": [
        {
          "nom": "M. Nunes",
          "role": "Intendant secteur Seujet",
          "tel": "+41 79 880 00 65"
        },
        {
          "nom": "M. De Zordi",
          "role": "Directeur RDZ",
          "tel": "+41 76 634 17 92"
        }
      ],
      "astreinte": "Astreinte RDZ (natel dédié CERTAS) — voir consignes de prise de service",
      "rondes": "Intervention en 15 minutes après appel CERTAS : passer la centrale feu du site en mode direct (le support de formation RDZ libelle cette étape « Centrale Incendie REGM » — voir la remarque en particularités) et aviser le patrouilleur d'interrompre sa ronde pour faire retour à la base ; récupérer le badge Seujet dans l'armoire à clés « Quai Seujet » ; radio pour liaison entre agents ; natel d'astreinte pour contact CERTAS ; véhicule RDZ (Zoé RDZ 134 389) à prendre avant 6h30 et après 20h00 (sinon vélo).",
      "consignes": "Quittancer une alarme (centrale effraction, loge intendant) : localiser la centrale (diodes rouges clignotantes = groupes en alarme) → activer le boîtier (code 198000 + touche OFF, répété 2 fois avec bip) → l'écran affiche « Groupe? » → taper le numéro du groupe à désenclencher → la diode s'éteint. Enclencher une alarme : même procédure avec la touche ON, puis appeler CERTAS pour vérification que tout est en ordre. Après intervention sur zone : récupérer le fichier PDF du groupe en alarme pour obtenir les plans et se rendre sur zone, puis revenir à la loge une fois l'intervention terminée. — Centrale incendie (Securiton, dans la loge, derrière le premier bureau) — CODE CLIENT 4321 : activer la centrale (bouton 9) → molette (16) sur « Autorisations » → confirmer → entrer 4321 → valider (molette). Levée de doute (dans les 3 minutes après début d'alarme) : bouton 9 → sélectionner « Retardement » (molette) → valider → décompte de 5 minutes avant transmission automatique aux pompiers. Consulter une alarme/dérangement : bouton 10 → sélectionner l'élément (molette) → bouton 15 pour le détail. Activer/désactiver un élément (détecteur) : sélectionner « Elément » → « Groupe » (ensemble de détecteurs) ou « Sortie » → taper le numéro (clavier 21) — ex. 1074 = groupe 1074, 1074.1 = détecteur 1074.1 uniquement.",
      "particularites": "Bâtiment multi-locataires : SETE, ERGON, EFG, Loomis, Fitness, Bibliothèque de Genève, Klesch, Cabinet dentaire (6e étage), FER (5e étage) — bien vérifier l'étage et le locataire concerné avant intervention. Accès monte-charge : depuis le quai de marchandises (commande au 2e bureau de la loge, bouton « ouverture quai marchandises »), badge pour appeler l'ascenseur. Correction (27.08.2026) : une fiche précédente indiquait à tort que le client REGM partageait cette centrale/ce badge avec Seujet — les documents reçus pour REGM (résidence IHEID Grand Morillon, PROM 324 199) confirment qu'il s'agit d'un site totalement distinct, sans lien avec Seujet. Voir fiche REGM séparée. ⚠ Incohérence non résolue : le document RDZ « Intervention Effraction 461025 » (17.06.2024) libelle lui-même l'étape de mise en mode direct de la centrale feu « Centrale Incendie REGM », ce qui semble contredire la correction ci-dessus. Cette mention n'est expliquée par aucun document disponible — possible copier-coller d'un support réutilisé, ou lien historique non documenté entre les deux centrales. Le champ « rondes » ci-dessus a été reformulé prudemment en « la centrale feu du site » plutôt que de reproduire littéralement « REGM » ; à vérifier sur place avant de s'y fier. Ronde/patrouille : les plans (22.02.2024) font apparaître un réseau complet de points de contrôle numérotés sur tous les étages et sous-sols (ex. 151, 251, 1051-1058, 1151/1152, 1251-1254, 1301-1354, 1451-1454, 1551-1553, 1651-1653, 1751-1754, 1851-1854, 1951/1952, 11051) ainsi que plusieurs « consoles monobloc à quittancer » (1er, 2e, 3e étages) — mais aucun document reçu ne précise l'ordre, la fréquence ou la durée d'une ronde régulière sur ce site ; seule la procédure d'intervention d'urgence en 15 minutes (ci-dessus) est documentée. À clarifier auprès du client/CERTAS si une ronde périodique est attendue. Localisation physique : la loge (RDC, accès n°22/24) contient les boîtiers utilisés pour quittancer/enclencher (centrale effraction et centrale feu, sur/derrière le premier bureau). Les plans du 10e étage indiquent en plus des étiquettes « Centrale effraction »/« Centrale feu » dans une zone technique de cet étage — lien avec les boîtiers de la loge non précisé par les documents ; à confirmer sur site.",
      "annexes": [
        "Plans du site (tous étages, 1er sous-sol au 12e étage) — consultés intégralement ; confirment la table des 7 groupes ci-dessus, les connexions monte-charge/escaliers entre étages, et les locataires par étage",
        "Asservissement Securiton (table technique REL4 : points de commande/ventilation) — consulté ; contenu technique non actionnable directement pour un agent, disponible sur demande",
        "Alarme Incendie 321 482 — procédure centrale Securiton (arrivée sur site, code client 4321, levée de doute, consultation, activation/désactivation d'élément) — consultée intégralement",
        "Intervention Effraction 461 025 — procédure complète (quittancement/enclenchement code 198000, table des 7 groupes et zones, intervention 15 minutes) — consultée intégralement",
        "Mode d'emploi Centrale Feu — manuel générique Securiton MIC (2010), aucune donnée spécifique au site — consulté, référence uniquement"
      ],
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Ce que l'agent doit savoir avant d'arriver",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "PROM incendie",
                  "v": "321 482",
                  "code": true
                },
                {
                  "k": "PROM effraction — RDC et étages",
                  "v": "461 025",
                  "code": true
                },
                {
                  "k": "PROM effraction — 9e et 10e",
                  "v": "461 309",
                  "code": true
                },
                {
                  "k": "Identification Certas",
                  "v": "Complément à 30, pour les trois transmetteurs"
                },
                {
                  "k": "Client",
                  "v": "ERGON / SETE — immeuble du Quai du Seujet"
                },
                {
                  "k": "Délai d'intervention",
                  "v": "##15 minutes## après l'appel Certas"
                }
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller — deux accès",
              "items": [
                {
                  "label": "N°22 — loge de l'intendant, alarme incendie",
                  "dest": "Quai du Seujet 22, 1201 Genève"
                },
                {
                  "label": "N°24 — alarme effraction",
                  "dest": "Quai du Seujet 24, 1201 Genève"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Immeuble multi-locataires",
              "txt": "SETE, ERGON, EFG, Loomis, Fitness, Bibliothèque de Genève, Klesch, cabinet dentaire au 6e, FER au 5e. ##Vérifier l'étage et le locataire concernés avant d'intervenir## : on n'entre pas chez un locataire au motif qu'une alarme est partie ailleurs dans le bâtiment."
            },
            {
              "t": "liste",
              "titre": "Moyens à récupérer avant de partir",
              "items": [
                "##Badge Seujet## — armoire à clés « Quai Seujet ».",
                "##Radio## pour la liaison entre agents.",
                "##Natel d'astreinte## pour le contact Certas.",
                "##Véhicule RDZ## (Zoé RDZ 134 389) avant 6h30 et après 20h00 — à vélo le reste du temps."
              ]
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "Deux centrales, dans la loge",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Centrale effraction",
                  "v": "Loge de l'intendant — code ~~198000~~, puis touche ON ou OFF"
                },
                {
                  "k": "Centrale incendie",
                  "v": "Securiton, dans la loge derrière le premier bureau — code client ~~4321~~"
                },
                {
                  "k": "Boîte à clés de la loge",
                  "v": "Code ~~0741~~"
                },
                {
                  "k": "Clé ascenseur 9e / 10e",
                  "v": "~~LA4545~~"
                }
              ]
            },
            {
              "t": "table",
              "titre": "Les 7 groupes d'effraction",
              "items": [
                {
                  "z": "Groupe 1",
                  "d": "RDC — porte Quai A, tourniquets 22 et 24, arcades du 24, passage quai vers 22. Plus le 6e étage, zone 12 (clé incendie)."
                },
                {
                  "z": "Groupe 2",
                  "d": "RDC — porte du quai de marchandises et sa temporisation"
                },
                {
                  "z": "Groupe 3",
                  "d": "11e étage — sortie terrasse · 12e étage — sorties balcon et terrasse"
                },
                {
                  "z": "Groupe 4",
                  "d": "RDC — sortie de secours 24 · 6e étage — sorties de secours 22, 24 et 26 · 10e étage — sortie terrasse et accès EFG"
                },
                {
                  "z": "Groupe 5",
                  "d": "RDC — portes de sortie de secours quai A et B, porte B du rez"
                },
                {
                  "z": "Groupe 6",
                  "d": "6e étage — sorties de secours 26"
                },
                {
                  "z": "Groupe 7",
                  "d": "RDC — porte principale n°22"
                }
              ]
            }
          ]
        },
        {
          "titre": "Points d'accès",
          "resume": "Comment entrer, ouvrir et ressortir",
          "blocs": [
            {
              "t": "num",
              "titre": "Arriver et entrer",
              "items": [
                {
                  "a": "Se garer face au portail vert",
                  "d": "Côté gauche."
                },
                {
                  "a": "Entrer par la porte battante automatique",
                  "d": "Elle se trouve ##entre les deux tourniquets##."
                },
                {
                  "a": "Badger sur le lecteur de droite",
                  "d": "Le lecteur noir."
                },
                {
                  "a": "Ouvrir la loge",
                  "d": "Clé dans la boîte à clés, code ~~0741~~. L'éclairage se trouve ##à droite de la porte##."
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Dans la loge",
              "items": [
                "##Centrale effraction##, ##boîte à clés## et ##centrale feu## sont sur et derrière le ##premier bureau##.",
                "##Trousseau bleu « Sécurité »## et porte-clé « coq » dans la boîte à pass, fermée par un simple aimant.",
                "##Commande du quai de marchandises## au deuxième bureau — bouton « ouverture quai marchandises », puis badge pour appeler le monte-charge."
              ]
            },
            {
              "t": "liste",
              "titre": "Monter aux 9e et 10e étages",
              "items": [
                "Badger le clavier de l'ascenseur, puis ##tourner la clé ~~LA4545~~## pour activer le panneau de commande, et sélectionner l'étage."
              ]
            },
            {
              "t": "num",
              "titre": "Ressortir — à faire dans cet ordre",
              "items": [
                {
                  "a": "Éteindre l'éclairage de la loge",
                  "d": ""
                },
                {
                  "a": "Verrouiller la loge",
                  "d": "Avec la clé du coffre."
                },
                {
                  "a": "Redéposer la clé dans le coffre",
                  "d": "Code ~~0741~~, en ##masquant l'affichage du code## pendant la saisie."
                },
                {
                  "a": "Sortir",
                  "d": "Présenter la main devant le boîtier : la porte s'ouvre automatiquement."
                }
              ]
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Trousseau bleu « Sécurité » — loge de l'intendant",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Boîte à clés de la loge",
                  "v": "Code ~~0741~~"
                },
                {
                  "k": "Boîte à pass",
                  "v": "Fermée par un simple aimant, dans la loge"
                },
                {
                  "k": "Badge Seujet",
                  "v": "Armoire à clés « Quai Seujet », à la base"
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Composition connue",
              "items": [
                "##Trousseau bleu « Sécurité »##.",
                "##Porte-clé « coq »##.",
                "##Clé d'ascenseur ~~LA4545~~## — accès aux 9e et 10e étages.",
                "##Clé du coffre## — sert aussi à verrouiller la loge.",
                "##Clé incendie 6e étage## — mentionnée dans le groupe 1 d'effraction."
              ]
            },
            {
              "t": "manque",
              "txt": "Références des clés et correspondance clé ↔ porte non documentées. Seujet ne figure pas dans l'inventaire ##Clefs IS / RDZ##."
            },
            {
              "t": "liste",
              "titre": "S'il manque une clé",
              "items": [
                "##Pas d'urgence## — rapport et message à Laurent et Lucas.",
                "##Urgence## (site non hermétique, risque pour le client) — appel direct à Laurent ou Lucas."
              ]
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au technique",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "À Genève, un téléphone accroche souvent une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu confirmé, ou doute non levé dans le délai de 5 minutes",
                  "num": "118"
                },
                {
                  "nom": "Police",
                  "role": "Effraction réelle, personne présente, refus de légitimation",
                  "num": "117"
                },
                {
                  "nom": "Police Municipale",
                  "role": "Dim-mer 6h-minuit · Jeu-sam 6h-3h",
                  "num": "+41 22 418 22 22"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Centrale et astreinte",
              "items": [
                {
                  "nom": "Certas",
                  "role": "Incendie 321.482 · Effraction 461.025 et 461.309 — complément à 30",
                  "num": "+41 844 800 811"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Ligne hiérarchique. Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence).",
                  "num": "+41 79 339 13 41"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Intendant du site — côté RDZ",
              "items": [
                {
                  "nom": "Astreinte Seujet",
                  "role": "##Ligne du site, de 06h30 à 18h00.## C'est le numéro à composer en premier pour toute question d'exploitation.",
                  "num": "+41 79 571 45 00"
                },
                {
                  "nom": "M. Romain Soullier",
                  "role": "##Intendant du site, côté RDZ## — référent direct de l'agent, à ne pas confondre avec le client. Mobile privé, ##hors exploitation uniquement## : numéro français, composable depuis la Suisse.",
                  "num": "+33 6 45 74 32 96"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Client et technique",
              "items": [
                {
                  "nom": "M. Cédric Nunes",
                  "role": "Responsable technique, secteur Seujet — également responsable du site Papeterie. ##Joignable à toute heure, par téléphone de préférence.##",
                  "num": "+41 79 880 00 65"
                },
                {
                  "nom": "M. De Zordi",
                  "role": "Directeur RDZ",
                  "num": "+41 76 634 17 92"
                }
              ]
            },
            {
              "t": "manque",
              "txt": "Il manque les interlocuteurs chez les locataires (EFG, Loomis, Bibliothèque de Genève, FER…) : l'immeuble en compte neuf, et l'agent n'a personne à prévenir directement si l'alarme vient d'une de leurs zones. À demander au client."
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Effraction, incendie, les deux centrales de la loge",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Où sont les centrales",
                  "v": "##Loge de l'intendant##, au rez, accès n°22. Centrale effraction et centrale feu sur et derrière le premier bureau."
                },
                {
                  "k": "Délai",
                  "v": "Intervention en ##15 minutes## après l'appel Certas"
                }
              ]
            },
            {
              "t": "num",
              "titre": "Alarme effraction — intervention en 15 minutes",
              "court": "Effraction",
              "items": [
                {
                  "a": "Préparer le départ",
                  "d": "Passer la centrale feu du site en ##mode direct##. Aviser le patrouilleur d'interrompre sa ronde et de rentrer à la base. Récupérer le ##badge Seujet## dans l'armoire « Quai Seujet », la radio et le natel d'astreinte."
                },
                {
                  "a": "Se rendre sur place",
                  "d": "Véhicule RDZ avant 6h30 et après 20h00, à vélo le reste du temps. Entrer par le ##n°24##, qui est l'accès effraction."
                },
                {
                  "a": "Localiser le groupe en alarme",
                  "d": "Sur la centrale effraction de la loge : les ##diodes rouges clignotantes## indiquent les groupes concernés."
                },
                {
                  "a": "Quittancer",
                  "d": "Saisir ~~198000~~ puis la touche ##OFF##, à répéter ##deux fois## — un bip confirme. L'écran affiche « Groupe ? » : taper le numéro du groupe à désenclencher. La diode s'éteint."
                },
                {
                  "a": "Identifier la zone avant de monter",
                  "d": "Récupérer le ##fichier PDF du groupe en alarme## : il donne les plans et la localisation exacte des zones. Se reporter au tableau des 7 groupes, étape 2."
                },
                {
                  "a": "Levée de doute sur zone",
                  "d": "##Ne pas intervenir seul face à une personne présente## : légitimation à distance, et ##117## si nécessaire."
                },
                {
                  "a": "Réenclencher et rendre compte",
                  "d": "De retour à la loge : même procédure avec la touche ##ON##, puis ##appeler Certas## pour vérifier que tout est en ordre. Rapport GuardTek."
                }
              ]
            },
            {
              "t": "num",
              "titre": "Alarme incendie — centrale Securiton",
              "court": "Alarme feu",
              "items": [
                {
                  "a": "Activer la centrale",
                  "d": "Bouton ##9##, puis molette ##16## sur « Autorisations », confirmer, entrer le code client ~~4321~~ et valider avec la molette."
                },
                {
                  "a": "Levée de doute — dans les 3 minutes",
                  "d": "Bouton ##9##, sélectionner « ##Retardement## » à la molette, valider : un décompte de ##5 minutes## démarre avant la transmission automatique aux pompiers."
                },
                {
                  "a": "Consulter l'alarme ou le dérangement",
                  "d": "Bouton ##10##, sélectionner l'élément à la molette, puis bouton ##15## pour le détail."
                },
                {
                  "a": "Si le feu est confirmé",
                  "d": "##118##, accueil et guidage des secours, évacuation. Ne pas réarmer."
                },
                {
                  "a": "Rendre compte",
                  "d": "Appeler M. Nunes, puis rapport GuardTek."
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Activer ou désactiver un détecteur",
              "items": [
                "Sélectionner « Élément », puis « Groupe » pour un ensemble de détecteurs, ou « Sortie ».",
                "Taper le numéro sur le clavier ##21## — par exemple ~~1074~~ pour le groupe entier, ~~1074.1~~ pour ce seul détecteur.",
                "##Une zone désactivée ne détecte plus rien## : à réserver aux travaux, avec surveillance, et à réactiver aussitôt."
              ]
            },
            {
              "t": "stop",
              "lab": "Mention à vérifier sur place",
              "txt": "Le document RDZ « Intervention Effraction 461025 » du 17.06.2024 appelle l'étape de mise en mode direct « ##Centrale Incendie REGM## ». Or REGM est un site distinct, sans lien avec Seujet. Probable copier-coller d'un support réutilisé, mais ##aucun document ne l'explique## : à vérifier sur site avant de s'y fier."
            }
          ]
        }
      ],
      "blocsRondes": [
        {
          "t": "manque",
          "txt": "##Aucune ronde périodique n'est documentée pour ce site.## Seule la procédure d'intervention d'urgence en 15 minutes l'est. Les plans du 22.02.2024 montrent pourtant un réseau complet de points de contrôle numérotés sur tous les étages et sous-sols, ainsi que plusieurs consoles monobloc à quittancer aux 1er, 2e et 3e étages. ##À clarifier avec M. Soullier, intendant du site## (astreinte Seujet, +41 79 571 45 00) : une ronde régulière est-elle attendue, et selon quel parcours ?"
        }
      ],
      "blocsNotes": [
        {
          "t": "liste",
          "titre": "Monte-charge et quai de marchandises",
          "items": [
            "Commande au ##deuxième bureau de la loge##, bouton « ouverture quai marchandises ».",
            "Badge nécessaire pour appeler l'ascenseur de marchandises."
          ]
        },
        {
          "t": "liste",
          "titre": "Réserves sur les données",
          "items": [
            "##Correction du 27.08.2026## : une version précédente de cette fiche indiquait que REGM partageait cette centrale et ce badge. C'est faux — REGM est la résidence IHEID du Grand Morillon, PROM 324 199, sans lien avec Seujet.",
            "##Centrales du 10e étage## : les plans portent des étiquettes « Centrale effraction » et « Centrale feu » dans une zone technique du 10e. Le lien avec les boîtiers de la loge n'est précisé nulle part — à confirmer sur site.",
            "L'annexe « Asservissement Securiton » est une table technique REL4, sans contenu directement actionnable par un agent.",
            "Le « Mode d'emploi Centrale Feu » est un manuel générique Securiton MIC de 2010, sans donnée propre au site."
          ]
        }
      ]
    },
    {
      "statut": "complet",
      "prom": "—",
      "client": "DLCC",
      "nomComplet": "DLCC — David Lloyd Country Club Geneva",
      "types": [
        "Poste"
      ],
      "adresse": "Route de Collex 49, 1293 Bellevue (Genève) — Parking DLCC / Parking Collex (CLX)",
      "population": "Membres et visiteurs du David Lloyd Country Club · Personnel du club · Automobilistes de passage Route de Collex.",
      "tenue": "Journée : tenue réglementaire RDZ complète et visible. Nuit / faible luminosité : gilet jaune obligatoire + bâton lumineux. Pluie : cape de pluie obligatoire. Interdit : quitter le poste, appels personnels en public.",
      "stationnement": "L'agent ne se stationne pas : il est positionné à l'intersection STOP, juste avant les barrières DLCC, visible des véhicules arrivant par la Route de Collex.",
      "manipulationBase": [
        "##Poste fixe de gestion du trafic## — pas d'alarme ni de code PROM.",
        "Si parking DLCC disponible : orienter et autoriser vers le parking DLCC.",
        "Si parking DLCC complet : orienter vers le parking Collex (CLX) avec des gestes clairs."
      ],
      "consignes": "Horaires : semaine 18h00-20h00, week-end 10h00-13h00. Contact client à CHAQUE prise de service ET à chaque fin de service : appeler ou envoyer un message à M. Bouvier. Présence continue, gestes précis et sécuritaires, maintien du poste quelles que soient les conditions météo (cape de pluie obligatoire).",
      "particularites": "Incendie/sinistre : alerter les secours (118), prévenir M. Bouvier, dégager les voies d'accès pompiers, ne jamais obstruer l'entrée principale ; en cas de saturation du parking, orienter immédiatement vers CLX. Tout incident (feu, accident, conflit, saturation anormale) : rapport GuardTek (Vu / Fait / Compris) avec horaires d'appel, d'arrivée et de départ. Renfort lors d'événements sportifs ou d'affluence exceptionnelle au DLCC.",
      "contacts": [
        {
          "nom": "M. Bouvier",
          "role": "Facility Manager DLCC — contact principal",
          "tel": "+41 79 613 99 96"
        },
        {
          "nom": "M. De Zordi",
          "role": "Directeur RDZ",
          "tel": "+41 76 634 17 92"
        }
      ],
      "astreinte": "+41 79 339 13 41 (astreinte RDZ — natel dédié) — le numéro +41 79 749 35 36 précédemment indiqué ici est en réalité le natel de l'agent MDP (matériel de site), pas l'astreinte RDZ ; corrigé le 27.08.2026 sur indication du client.",
      "annexes": [
        "Annexe — Positionnement agent (vue aérienne et vue terrain de l'intersection STOP)"
      ],
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Un poste fixe, pas une intervention sur alarme",
          "blocs": [
            {
              "t": "stop",
              "lab": "Nature du poste",
              "txt": "DLCC est un ##poste fixe de gestion du trafic##, pas un site sous alarme. ##Aucun transmetteur, aucun code PROM, aucune clé.## L'agent est posté à heure fixe pour orienter les véhicules — il n'y a pas d'intervention déclenchée par Certas."
            },
            {
              "t": "kv",
              "items": [
                {
                  "k": "Client",
                  "v": "DLCC — David Lloyd Country Club Geneva"
                },
                {
                  "k": "Adresse",
                  "v": "Route de Collex 49, 1293 Bellevue"
                },
                {
                  "k": "Mission",
                  "v": "Orientation des véhicules entre le ##parking DLCC## et le ##parking Collex (CLX)##"
                },
                {
                  "k": "Occupation",
                  "v": "Membres et visiteurs du club · personnel · automobilistes de passage sur la route de Collex"
                }
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller",
              "items": [
                {
                  "label": "Intersection STOP, juste avant les barrières DLCC",
                  "dest": "Route de Collex 49, 1293 Bellevue"
                }
              ]
            },
            {
              "t": "table",
              "titre": "Horaires du poste",
              "items": [
                {
                  "z": "Semaine",
                  "d": "18h00 – 20h00"
                },
                {
                  "z": "Week-end",
                  "d": "10h00 – 13h00"
                },
                {
                  "z": "Renfort",
                  "d": "Lors d'événements sportifs ou d'affluence exceptionnelle au DLCC"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Recherche dans l'appli",
              "txt": "Ce site n'a pas de code PROM. Il se trouve en tapant ##DLCC## ou ##David Lloyd## dans le champ nom du client."
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "Sans objet sur ce poste",
          "blocs": [
            {
              "t": "manque",
              "txt": "##Aucun transmetteur, aucun code PROM, aucune centrale.## Rien à saisir ni à quittancer : la mission est une présence physique de gestion du trafic."
            }
          ]
        },
        {
          "titre": "Positionnement",
          "resume": "Où se tenir et comment orienter",
          "blocs": [
            {
              "t": "stop",
              "lab": "L'agent ne se stationne pas",
              "txt": "Il se tient ##à l'intersection STOP, juste avant les barrières DLCC##, de façon à être ##visible des véhicules arrivant par la route de Collex##. ##Ne pas quitter le poste.##"
            },
            {
              "t": "liste",
              "titre": "Orientation des véhicules",
              "items": [
                "##Parking DLCC prioritaire## tant qu'il reste des places. ##CLX est le parking de débordement##, pas une alternative équivalente.",
                "##Parking DLCC disponible## — orienter et autoriser l'entrée.",
                "##Parking DLCC complet## — orienter vers le ##parking Collex (CLX)##, avec des gestes clairs.",
                "##Ne jamais obstruer l'entrée principale.##",
                "Gestes précis et sécuritaires : l'agent est au milieu d'un flux de circulation."
              ]
            },
            {
              "t": "liste",
              "titre": "Tenue selon les conditions",
              "items": [
                "##Journée## — tenue réglementaire RDZ complète et visible.",
                "##Nuit ou faible luminosité## — ##gilet jaune obligatoire et bâton lumineux##.",
                "##Pluie## — ##cape de pluie obligatoire##. Le poste se tient quelles que soient les conditions météo.",
                "Interdit : quitter le poste, appels personnels en public."
              ]
            },
            {
              "t": "liste",
              "titre": "Équipement obligatoire",
              "items": [
                "##Tenue réglementaire RDZ## — en toutes circonstances.",
                "##Gilet jaune haute visibilité## — de nuit ou par faible luminosité, par-dessus la tenue.",
                "##Bâton lumineux## — de nuit, pour des gestes précis et visibles.",
                "##Cape de pluie## — en cas de précipitations.",
                "##Téléphone de service## — contact client et signalement des incidents."
              ]
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Sans objet sur ce poste",
          "blocs": [
            {
              "t": "manque",
              "txt": "##Aucune clé, aucun badge, aucun accès à un bâtiment.## L'agent reste à l'extérieur, sur la voie d'accès."
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au client",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "Bellevue est proche de la frontière : un téléphone y accroche parfois une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu ou sinistre",
                  "num": "118"
                },
                {
                  "nom": "Urgences sanitaires",
                  "role": "Accident de la circulation, blessé",
                  "num": "144"
                },
                {
                  "nom": "Police",
                  "role": "Conflit, refus d'obtempérer, accident avec dégâts",
                  "num": "117"
                },
                {
                  "nom": "Police Municipale",
                  "role": "Genève",
                  "num": "+41 22 418 22 22"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Client et astreinte",
              "items": [
                {
                  "nom": "M. Bouvier",
                  "role": "Facility Manager DLCC — contact principal. ##À appeler ou avertir par message à chaque prise de service ET à chaque fin de service.##",
                  "num": "+41 79 613 99 96"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Ligne hiérarchique. Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence).",
                  "num": "+41 79 339 13 41"
                },
                {
                  "nom": "M. De Zordi",
                  "role": "Directeur RDZ",
                  "num": "+41 76 634 17 92"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Erreur dans le cahier des charges",
              "txt": "Le CDC du 01.04.2026 annonce « Astreinte RDZ 24h/7j : ~~+41 79 749 35 36~~ ». C'est le ##natel de l'agent MDP##, pas l'astreinte. L'astreinte RDZ est le ##+41 79 339 13 41##."
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Prise de service, sinistre, incident",
          "blocs": [
            {
              "t": "num",
              "titre": "Prise et fin de service",
              "court": "Prise de poste",
              "items": [
                {
                  "a": "À l'arrivée, contacter M. Bouvier",
                  "d": "Appel ou message. ##C'est une obligation à chaque service##, pas une formalité ponctuelle."
                },
                {
                  "a": "Se positionner",
                  "d": "À l'intersection STOP, visible des véhicules arrivant par la route de Collex."
                },
                {
                  "a": "Vérifier sa tenue",
                  "d": "Gilet jaune et bâton lumineux si la luminosité est faible, cape de pluie s'il pleut."
                },
                {
                  "a": "En fin de service, recontacter M. Bouvier",
                  "d": "Même canal. Noter les horaires pour le rapport."
                }
              ]
            },
            {
              "t": "num",
              "titre": "Incendie ou sinistre",
              "court": "Sinistre",
              "items": [
                {
                  "a": "Alerter les secours",
                  "d": "##118##, ou 112 en cas de doute sur le réseau."
                },
                {
                  "a": "Prévenir M. Bouvier",
                  "d": "Immédiatement après l'appel aux secours."
                },
                {
                  "a": "Dégager les voies d'accès pompiers",
                  "d": "##Ne jamais obstruer l'entrée principale.##"
                },
                {
                  "a": "Si le parking sature",
                  "d": "Orienter ##immédiatement## vers le parking Collex, pour garder les accès libres."
                },
                {
                  "a": "Consigner",
                  "d": "Rapport GuardTek avec les horaires d'appel, d'arrivée et de départ des secours."
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Imprévu — panne de barrière, accident, intrusion",
              "txt": "Alerter ##M. Bouvier ET la hiérarchie RDZ##, les deux. ##Ne pas quitter le poste sans autorisation##, même pour aller constater."
            },
            {
              "t": "liste",
              "titre": "Tout incident",
              "items": [
                "Feu, accident, conflit, saturation anormale du parking : ##rapport GuardTek##, au format ##Vu / Fait / Compris##.",
                "Y faire figurer les ##horaires d'appel, d'arrivée et de départ##."
              ]
            },
            {
              "t": "liste",
              "titre": "Missions ponctuelles",
              "items": [
                "##Assistance aux usagers## — renseigner sur les accès, les places disponibles et le fonctionnement des barrières.",
                "##Événements et périodes de pointe## — renfort de la gestion du trafic lors des manifestations sportives ou d'affluence exceptionnelle.",
                "##Conditions hivernales## — signaler tout problème de visibilité ou de glissance susceptible d'affecter la sécurité du poste."
              ]
            }
          ]
        }
      ],
      "blocsRondes": [
        {
          "t": "manque",
          "txt": "##Pas de ronde sur ce poste## : il s'agit d'une présence statique à l'intersection, pendant les plages horaires définies."
        }
      ],
      "blocsNotes": [
        {
          "t": "liste",
          "titre": "Documents de référence",
          "items": [
            "Annexe « Positionnement agent » — vue aérienne et vue terrain de l'intersection STOP."
          ]
        },
        {
          "t": "liste",
          "titre": "Réserves sur les données",
          "items": [
            "Le site voisin ##ERGON Collex## utilise le même parking CLX : les véhicules du Country Club y stationnent le week-end. Ce n'est pas du stationnement sauvage, et l'agent de Collex ne doit pas les faire déplacer.",
            "Un seul contact client identifié, M. Bouvier. Pas de suppléant connu en cas d'indisponibilité.",
            "Dans la colonne « Sécurité » du CDC, M. Bouvier est mentionné comme joignable ##sur accord RDZ## — alors qu'il est à appeler directement pour l'incendie et la technique. Nuance à confirmer : s'applique-t-elle aux seuls sujets de sécurité ?"
          ]
        }
      ]
    },
    {
      "statut": "complet",
      "prom": "324 199",
      "client": "REGM",
      "blocsRondes": [
        {
          "t": "kv",
          "items": [
            {
              "k": "Ronde de fermeture",
              "v": "01h00 — obligatoire, sécurité incendie"
            },
            {
              "k": "Rondes de prévention",
              "v": "Vers 23h00 puis 00h00 — recommandées, pour prévenir les résidents"
            }
          ]
        },
        {
          "t": "stop",
          "lab": "Avant la ronde de 01h00",
          "txt": "La centrale incendie repasse en transmission directe dès 23h30. La remettre en mode DIFFÉRÉE jusqu'à 01h30, sinon la fermeture des cuisines déclenche une alarme et part aux pompiers."
        },
        {
          "t": "liste",
          "titre": "Ce que couvre la ronde de 01h00",
          "items": [
            "Fermeture des cuisines communes.",
            "Fermeture des jardins et salles de jeux — interdits après 23h00.",
            "Contrôle des risques d'incendie et des dégradations.",
            "Prévention de la consommation d'alcool en cuisine."
          ]
        },
        {
          "t": "num",
          "titre": "Les 4 rondes, dans l'ordre",
          "items": [
            {
              "a": "Cuisines",
              "d": "Éteindre fours, plaques, hottes et micro-ondes. Lumières éteintes, fenêtres fermées (sauf forte odeur). Contrôler le nettoyage (Armanda) et l'état du mobilier."
            },
            {
              "a": "Jardins et potagers",
              "d": "Vérifier qu'il ne reste personne, et contrôler les fuites d'eau."
            },
            {
              "a": "Salle de jeux",
              "d": "Contrôle du mobilier."
            },
            {
              "a": "Annexes",
              "d": "Cuisines du restaurant : contrôle incendie et lumières. Toitures, caves et local vélo doivent être fermés en permanence."
            }
          ]
        },
        {
          "t": "liste",
          "titre": "En cas d'anomalie",
          "items": [
            "Dégradation, oubli d'extinction, présence non autorisée → ##rapport GuardTek##, type Sécurité ou Incendie selon la nature, en mentionnant le ##bloc et le niveau##."
          ]
        }
      ],
      "blocsNotes": [
        {
          "t": "liste",
          "titre": "Stationnement et dénonciation",
          "items": [
            "##Stylo bleu uniquement.##",
            "Codes d'infraction : ~~B31A~~ interdiction de parquer · ~~B32A~~ hors cases · ~~B37B~~ circulation interdite.",
            "##Feuillet 1## (original) remis à la police sous 10 jours · ##feuillet 2## (rose) conservé en loge · ##feuillets 3 et 4## déposés sur le pare-brise.",
            "Rapport de dénonciation dans GuardTek, avec photo du véhicule et de la dénonciation remplie."
          ]
        },
        {
          "t": "liste",
          "titre": "Théâtre REGM",
          "items": [
            "##Cales-portes## à l'accueil pour maintenir la porte ouverte — à retirer en fin d'utilisation.",
            "##Lumières et stores## — boutons muraux I/O et flèches à droite de la porte du bas, ou tablette Crestron sous le pupitre.",
            "##Télécommandes## dans le placard bas de la salle : blanche pour la HiFi, noire pour les écrans et la TV.",
            "En fin d'utilisation : tout éteindre, tout ranger, et vérifier que personne ne reste dans la salle."
          ]
        },
        {
          "t": "sous",
          "titre": "Historique des corrections de la fiche",
          "blocs": [
            {
              "t": "liste",
              "items": [
                "##27.08.2026## — les données du site voisin MDE (bâtiment distinct, av. de France 20-22) ont été retirées de cette fiche : transmetteur, prestataires et numéro Certas propres à MDE. Voir la fiche MDE.",
                "##27.08.2026## — centrale anti-intrusion Bavitech documentée pour la première fois (photo transmise) : code de manipulation et grille des zones à l'étape 2.",
                "##27.08.2026## — procédure complète de la centrale incendie intégrée, d'après la fiche réflexe RDZ v1.0 du 17.08.2026.",
                "##27.08.2026## — le numéro 079 749 35 36 cité dans la fiche réflexe comme astreinte RDZ est en fait le natel de service de l'agent MDP. La vraie astreinte est le +41 79 339 13 41.",
                "##27.08.2026## — M. Verdon n'est pas une ligne d'astreinte RDZ mais le responsable technique REGM uniquement."
              ]
            }
          ]
        }
      ],
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Ce que l'agent doit savoir avant d'arriver",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Code PROM",
                  "v": "324 199",
                  "code": true
                },
                {
                  "k": "Types d'alarme",
                  "v": "Incendie et effraction"
                },
                {
                  "k": "Client",
                  "v": "IHEID — Geneva Graduate Institute"
                },
                {
                  "k": "Occupation",
                  "v": "≈ 318 résidents, présence permanente jour et nuit"
                }
              ]
            },
            {
              "t": "table",
              "titre": "Organisation des bâtiments",
              "items": [
                {
                  "z": "Morillon (Bât. 10)",
                  "d": "4 blocs A · B · C · D — cuisines communes aux niveaux 6-5-4-3-2-1-0"
                },
                {
                  "z": "Budé (Bât. 8)",
                  "d": "4 blocs E · F · G · H — cuisines communes aux niveaux 6-5-4-3-2-1"
                },
                {
                  "z": "Cuisines 24h/24",
                  "d": "10.32 (Morillon) et 8.32 (Budé) — résidents sans cuisine privative, contrôle renforcé"
                },
                {
                  "z": "Salle de jeux",
                  "d": "Bloc B, 5e et 6e étage — 3 portes d'accès depuis le couloir, caméra"
                },
                {
                  "z": "Jardins & potagers",
                  "d": "Morillon 6D · Budé 5H — potager Budé accessible par l'escalier de secours, caméra"
                },
                {
                  "z": "Annexes",
                  "d": "Shop, bibliothèque, théâtre, GISA, salles d'études, fitness, salle polyvalente, toitures, caves, local vélo"
                }
              ]
            },
            {
              "t": "liste",
              "items": [
                "##Identifier un résident## — depuis l'[[application Agent RDZ|https://rdz-2026.github.io/RDZ_Agent/application/mobile.html]] : recherche par n° de chambre ou par nom, onglet Occupancy Details, le locataire en cours porte le statut « In Room »."
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller",
              "items": [
                {
                  "label": "Destination approximative — campus, pas l'entrée",
                  "dest": "Résidence Grand Morillon IHEID, Genève"
                }
              ]
            },
            {
              "t": "manque",
              "txt": "Adresse postale exacte, et surtout le point GPS de chaque entrée utile (Morillon 10A et 10B, Budé 8A et 8B, accès garage). Sur place : appui long sur la carte Google Maps à l'entrée → les coordonnées s'affichent, il suffit de me les transmettre. L'itinéraire ci-dessus vise le campus et ne remplace pas ça."
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "PROM, codes de centrale, décodage des zones",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "PROM incendie (Certas)",
                  "v": "324 199",
                  "code": true
                },
                {
                  "k": "Identification Certas",
                  "v": "complément à 30"
                },
                {
                  "k": "Centrale incendie — code opérateur",
                  "v": "2228",
                  "code": true
                },
                {
                  "k": "Centrale effraction — code de manipulation",
                  "v": "200 280",
                  "code": true
                },
                {
                  "k": "Mot de passe Certas",
                  "v": "Complément numérique à 30 — le même que l'identification ci-dessus"
                }
              ]
            },
            {
              "t": "stop",
              "txt": "À 23h30, la centrale anti-intrusion s'enclenche automatiquement : laisser faire, ne pas taper le code (consigne affichée sur le clavier)."
            },
            {
              "t": "liste",
              "items": [
                "##Centrale effraction## — Bavitech Systems, clavier Honeywell, écran affichant « Grand Morillon » + date/heure.",
                "##Format affiché en cas d'alarme## — [n° de zone] [n° de groupe] [bâtiment] [nom] [étage], par exemple « 1001 A6 Bât Nom étage »."
              ]
            },
            {
              "t": "table",
              "titre": "Décodage des groupes d'effraction",
              "items": [
                {
                  "z": "A1",
                  "d": "Commun"
                },
                {
                  "z": "A2",
                  "d": "Magasin — Shop HUNA"
                },
                {
                  "z": "A3",
                  "d": "Cafétéria — Restaurant Budé, 3e étage"
                },
                {
                  "z": "A4",
                  "d": "Cuisine bâtiment C — RDC Morillon"
                },
                {
                  "z": "A5",
                  "d": "Bouton vert (garage)"
                },
                {
                  "z": "A6",
                  "d": "Issue de secours"
                }
              ]
            },
            {
              "t": "table",
              "titre": "Zones garage",
              "items": [
                {
                  "z": "4031 / A5 — P58",
                  "d": "Porte garage côté véhicules Sécurité"
                },
                {
                  "z": "4034 / A5 — P32",
                  "d": "Garage côté véhicules Maintenance"
                },
                {
                  "z": "4036 / A5 — P20",
                  "d": "Garage côté fourgon IHEID"
                },
                {
                  "z": "4033 / A5 — P02",
                  "d": "Garage côté voitures visiteurs"
                },
                {
                  "z": "4082 / A5 — Vélo",
                  "d": "Garage côté parking à vélo"
                }
              ]
            }
          ]
        },
        {
          "titre": "Points d'accès",
          "resume": "Comment entrer et ouvrir",
          "blocs": [
            {
              "t": "liste",
              "items": [
                "##Badges SALTO## — contrôle d'accès par serrures autonomes à pile sur les logements et les locaux communs.",
                "##Boîtier PPD## (lecteur portable SALTO, en loge) — recharger un badge, relever le rapport d'ouverture d'une porte (menu « Collecte du rapport d'ouverture », poser l'appareil sur le boîtier puis le connecter au PC, logiciel SALTO → Gestion → Rapport d'ouvertures).",
                "##Déverrouillage de secours## — boîtier d'impulsion dans le coffre à l'administration : mettre les 3 griffes en place puis badger.",
                "##Toitures, caves (-1 Budé, 3 accès) et local vélo (2 accès)## — fermés en permanence, cadenas à code ~~118~~.",
                "##Casiers à colis Keynius## — écran d'accueil → « Login with PIN » → code ~~768979~~ (ne pas divulguer) → « Manage lockers » → ouvrir le casier indiqué. Vérifier l'identité du résident et noter l'intervention au rapport."
              ]
            },
            {
              "t": "liste",
              "titre": "Si ça ne s'ouvre pas",
              "items": [
                "##Défaut SALTO ou coupure de courant## — les boîtiers sont autonomes sur batterie, l'accès reste possible. Passer notamment par la porte de la loge sécurité.",
                "##Badge oublié ou perdu## — un badge de secours se trouve dans le pylône devant la porte du garage, code ~~1357~~."
              ]
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Trousseau REGM — inventaire Clefs IS / RDZ",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Où le trouver",
                  "v": "Coffre à clés de la loge sécurité — rangement « trousseau REGM »"
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Composition du trousseau",
              "items": [
                "##Coffres à extincteurs## — ~~EURO LOCKS FH010~~.",
                "##Boîtier pompiers## — ~~SEA 2 A14990-7000~~.",
                "##Boîtier vert SALTO## (Alarm Exit Control) — ~~KABA 8-5000~~.",
                "##Surpression, boîtiers JOMOS## — 2 clés, référence ~~KABA 8-631984~~, repérées sur le trousseau par l'étiquette rouge « Surpression boîtier Jomos » et la pastille ronde ~~101651~~.",
                "##Désenfumage garage## — clé à étiquette bleue « Surpression », gravée ~~631984~~, sur le trousseau REGM FULL. À ne pas confondre avec les clés JOMOS ci-dessus.",
                "##Portes coulissantes## — ~~RB-LOCKS B2A02~~. Sert aussi pour la porte balade et la porte extérieure de l'ascenseur.",
                "##Cadenas SERBECO## (bennes) — ~~ABUS 2745~~, 2 clés."
              ]
            },
            {
              "t": "manque",
              "txt": "Les ##2 clés tempo parking## que tu m'avais citées ne figurent pas dans l'inventaire Clefs IS / RDZ : à confirmer — retirées du trousseau, ou absentes de l'inventaire ?"
            },
            {
              "t": "manque",
              "txt": "Le coffre à clés ne peut toujours pas être fermé : ni code, ni clé."
            },
            {
              "t": "liste",
              "titre": "S'il manque une clé",
              "items": [
                "##Pas d'urgence## (aucun problème de fermeture du site) — rapport et message à Laurent et Lucas.",
                "##Urgence## (site non hermétique, risque pour le client, nécessité d'agir sur le moment) — appel direct à Laurent ou Lucas."
              ]
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au technique",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "À Genève, un téléphone accroche souvent une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu confirmé, doute non levé dans le délai — réseau suisse uniquement",
                  "num": "118"
                },
                {
                  "nom": "Police",
                  "role": "Effraction réelle constatée, refus de légitimation, conflit — réseau suisse uniquement",
                  "num": "117"
                },
                {
                  "nom": "Urgences sanitaires",
                  "role": "Malaise, blessure — réseau suisse uniquement",
                  "num": "144"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Centrale et astreinte",
              "items": [
                {
                  "nom": "Certas",
                  "role": "REGM n° 324.199 — faire le complément à 30",
                  "num": "+41 844 800 811"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence)",
                  "num": "+41 79 339 13 41"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Client et technique du site",
              "items": [
                {
                  "nom": "M. Grégory Barla",
                  "role": "Responsable sécurité et incendie IHEID — astreinte P1",
                  "num": "+33 6 15 84 54 16"
                },
                {
                  "nom": "M. Grégory Barla",
                  "role": "Second numéro, GSM urgence (numéro suisse)",
                  "num": "+41 77 814 23 39"
                },
                {
                  "nom": "M. Christophe Verdon",
                  "role": "Responsable technique REGM — questions techniques du site uniquement",
                  "num": "+41 76 548 48 48"
                }
              ]
            },
            {
              "t": "manque",
              "txt": "Numéros spéciaux suisses — les 0800, 0844 et 0900 (Certas, Otis, Alvazzi, Bouygues, Bavitech) sont souvent injoignables depuis une ligne ou une antenne françaises, même en +41. À vérifier avec chaque prestataire, et à demander en priorité pour Certas : un numéro géographique de secours en +41 22 ou +41 44."
            },
            {
              "t": "sous",
              "titre": "Prestataires techniques (17)",
              "blocs": [
                {
                  "t": "tel",
                  "items": [
                    {
                      "nom": "Chubb Sicli",
                      "role": "Centrale alarme, incendie, vidéo, sono, extinction — site 64100550 · True Vision : admin / Regm@2020",
                      "num": "+41 22 794 37 54"
                    },
                    {
                      "nom": "Bavitech",
                      "role": "Contrôle d'accès, anti-intrusion, interphonie — appeler depuis le natel d'astreinte, le fixe ne passe pas",
                      "num": "+41 900 115 115"
                    },
                    {
                      "nom": "Bavitech (2e numéro)",
                      "role": "Relevé sur l'autocollant du clavier Honeywell — deux numéros selon la source, à vérifier lequel est actif",
                      "num": "+41 22 594 60 60"
                    },
                    {
                      "nom": "Jomos",
                      "role": "Surpression et protection incendie (Morillon/Budé)",
                      "num": "+41 62 386 17 99"
                    },
                    {
                      "nom": "Otis",
                      "role": "Ascenseurs — A=75NJ9379 · B=75NJ9380 · C=75NJ9381 · E=75NJ9382 · G=75NJ9383 · H=75NJ9384",
                      "num": "+41 800 365 24 7"
                    },
                    {
                      "nom": "AS Ascenseur",
                      "role": "Personne bloquée dans l'ascenseur, 24h/24 — installation 10573241",
                      "num": "+41 22 918 50 70"
                    },
                    {
                      "nom": "ElTop",
                      "role": "Électricité Morillon — répondeur avec n° d'astreinte dès 17h et le week-end",
                      "num": "+41 22 338 21 21"
                    },
                    {
                      "nom": "Bouygues",
                      "role": "Électricité Budé · supervision MCR, sous-station, CO2 parking",
                      "num": "+41 844 88 77 88"
                    },
                    {
                      "nom": "Alvazzi",
                      "role": "Chauffage, ventilation, eau chaude",
                      "num": "+41 800 442 884"
                    },
                    {
                      "nom": "Eaux-Secours",
                      "role": "Sanitaire, plomberie",
                      "num": "+41 22 771 40 00"
                    },
                    {
                      "nom": "Amoudruz SA",
                      "role": "Débouchage, curage colonne de chute",
                      "num": "+41 22 329 05 24"
                    },
                    {
                      "nom": "TUS Hotline",
                      "role": "Transmission d'alarme, application TUS",
                      "num": "+41 58 910 73 33"
                    },
                    {
                      "nom": "Léman Nuisible",
                      "role": "Désinfection, dératisation, insectes",
                      "num": "+41 76 475 35 37"
                    },
                    {
                      "nom": "Sottas SA",
                      "role": "Constructions métalliques — volets, fenêtres, portes extérieures",
                      "num": "+41 79 150 08 08"
                    },
                    {
                      "nom": "Lamelle Glass & Store SA",
                      "role": "Vitres",
                      "num": "+41 22 782 08 88"
                    },
                    {
                      "nom": "Frères Ischi",
                      "role": "Laveries, distributeurs, machines fitness",
                      "num": "+41 22 539 18 60"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Centrale incendie, quittance, asservissements, évacuation",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Où est la centrale",
                  "v": "Loge sécurité — c'est aussi là que se trouvent le boîtier SONO, le gilet d'évacuation, le mégaphone et la liste des résidents"
                },
                {
                  "k": "Source",
                  "v": "Fiche réflexe RDZ v1.0 du 17.08.2026"
                }
              ]
            },
            {
              "t": "kv",
              "titre": "Alarme feu — les délais qui courent",
              "items": [
                {
                  "k": "Dès le déclenchement",
                  "v": "3 minutes avant la transmission automatique aux pompiers"
                },
                {
                  "k": "Après le bouton rouge",
                  "v": "5 minutes de plus pour la levée de doute sur zone"
                }
              ]
            },
            {
              "t": "num",
              "titre": "Les premiers gestes, à la centrale",
              "court": "Alarme feu",
              "items": [
                {
                  "a": "Rejoindre la centrale en loge sécurité",
                  "d": "3 minutes s'écoulent entre le déclenchement et la transmission automatique aux pompiers."
                },
                {
                  "a": "Bouton NOIR — Arrêt buzzer",
                  "puce": "noir",
                  "d": "Coupe le buzzer. L'alarme reste active."
                },
                {
                  "a": "Molette — Identifier la zone",
                  "d": "Code opérateur 2228. Lire à l'écran le bâtiment (Morillon ou Budé), le niveau, la zone et le type de détecteur. Confirmer la localisation dans AppVision."
                },
                {
                  "a": "Bouton ROUGE — Arrêt sirène",
                  "puce": "rouge",
                  "d": "Ouvre 5 minutes pour la levée de doute sur zone. Radio ouverte, ne pas courir. À l'échéance, transmission automatique aux pompiers."
                }
              ]
            },
            {
              "t": "choix",
              "titre": "Sur zone, selon ce qui est constaté",
              "items": [
                {
                  "couleur": "vert",
                  "titre": "Rien constaté — fausse alarme",
                  "txt": "Bouton ##VERT## pour quittancer et réarmer. Puis quittancer les asservissements, consigner au classeur REGM et au rapport GuardTek."
                },
                {
                  "couleur": "orange",
                  "titre": "Feu naissant, maîtrisable",
                  "txt": "Attaquer avec l'extincteur ou la couverture anti-feu. Une fois le feu éteint ##et vérifié## : bouton ##VERT##, asservissements, rapport GuardTek."
                },
                {
                  "couleur": "rouge",
                  "titre": "Non maîtrisable, ou délai dépassé",
                  "txt": "Déclencheur manuel ou 118 immédiatement. Déclencher l'évacuation, accueillir et guider les secours. Réarmement par les pompiers uniquement."
                }
              ]
            },
            {
              "t": "stop",
              "txt": "Le bouton vert annule la transmission aux pompiers. Ne jamais réarmer tant que le feu n'est pas éteint et vérifié, ni lorsque les secours sont engagés."
            },
            {
              "t": "liste",
              "titre": "Alarme dérangement",
              "items": [
                "Pas de temporisation, aucune transmission aux pompiers.",
                "Lire l'emplacement du dérangement à l'écran, puis quittancer.",
                "Consigner au classeur REGM et au rapport GuardTek.",
                "##Si la quittance est impossible## ou si l'alarme repart systématiquement : appeler Sicli au 022 794 37 54."
              ]
            },
            {
              "t": "num",
              "titre": "Remise en route des asservissements après alarme incendie",
              "court": "Asservissements",
              "items": [
                {
                  "a": "Quittancer les 3 boîtiers de surpression orange",
                  "d": "##Morillon## — sortie de secours bloc A, RDC.\n##Budé## — entrée 8B bloc H, sur votre gauche.\nMettre la clé et tourner sur ##arrêt##. Attendre ##10 secondes## avant de revenir sur AUTO : trop vite, un contacteur peut rester bloqué et le boîtier ne repasse plus en opérationnel."
                },
                {
                  "a": "Vérifier les diodes des boîtiers",
                  "d": "La diode jaune ##Perturbation## doit cesser de clignoter et la diode bleue ##Opérationnel## rester fixe : la quittance a fonctionné. Si une diode continue de clignoter, un dérangement remonte au central feu — appeler ##JOMOS##."
                },
                {
                  "a": "Acquitter le désenfumage garage",
                  "d": "Boîtier orange ##Désenfumage garage##, sur le même mur que les JOMOS : ##cage d'escalier du bâtiment A, niveau rez supérieur##.\nMême principe que les JOMOS : si le défaut est actif — se fier à la couleur des voyants ##OK / Alarme / Défaut## — acquitter avec la clé, puis remettre sur ##Auto##.\nLa clé est celle à étiquette bleue « Surpression », gravée ~~631984~~ : ce n'est pas celle des boîtiers JOMOS."
                },
                {
                  "a": "Morillon — 8e étage, bouton 1",
                  "d": "Grande salle polyvalente, local sur la gauche (console SST80 MO). Le bouton est allumé : appuyer dessus pour l'éteindre. Même principe pour tous les boutons suivants.\nPrendre ensuite les escaliers et ##vérifier que l'exutoire s'est bien refermé##."
                },
                {
                  "a": "Morillon — 5e étage, bouton 2",
                  "d": "Ratisser chaque niveau en descendant pour remettre les portes coupe-feu en ordre. Au 5e, le bouton se trouve dans un local en face de l'ascenseur, bloc D (console SST50 MO)."
                },
                {
                  "a": "Morillon — sous-sol, bouton 3",
                  "d": "Continuer de ratisser les étages jusqu'au sous-sol. Local ##1.10 Centrale de ventilation## (console SST01 MO)."
                },
                {
                  "a": "Budé — 9e étage",
                  "d": "Vérifier que l'exutoire s'est bien refermé, puis descendre par les escaliers en ratissant chaque niveau."
                },
                {
                  "a": "Budé — 4e étage, bouton 1",
                  "d": "Bloc H, au-dessus du restaurant : local ##2.461 Local monobloc## (console SST40 BU)."
                },
                {
                  "a": "Budé — rez-de-chaussée, bouton 2",
                  "d": "Côté boîtes aux lettres, bloc E, au fond : local ##2.039 Local monobloc## (console SST10 BU)."
                },
                {
                  "a": "Budé — sous-sol, bouton 3",
                  "d": "Local ##2.23 Local de ventilation## (console SST01 Budé)."
                },
                {
                  "a": "Vérifier les ascenseurs",
                  "d": "Ils se quittancent automatiquement, mais il faut contrôler qu'ils sont bien revenus en service."
                },
                {
                  "a": "Consigner",
                  "d": "Classeur REGM et rapport GuardTek. Si les pompiers sont intervenus : aviser M. De Zordi, puis l'IHEID."
                }
              ]
            },
            {
              "t": "num",
              "titre": "Évacuation — 5 phases",
              "court": "Évacuation",
              "items": [
                {
                  "a": "Détection",
                  "d": "Actionner le déclencheur manuel le plus proche (couloirs et issues de secours de tous les étages, sous-sol compris, entrées 8A/8B/10A). Vérifier que la diode rouge clignote."
                },
                {
                  "a": "Déclenchement SONO",
                  "d": "Boîtier en loge sécurité : appuyer sur le bâtiment concerné (Morillon 10A/10B, Budé 8A/8B, ou les deux), attendre la diode bleue HOLD, puis presser le bouton rouge ÉVACUATION."
                },
                {
                  "a": "Coordination",
                  "d": "Gilet d'évacuation, mégaphone et liste des résidents — étagères de la loge, liste affichée sur le placard."
                },
                {
                  "a": "Point de rassemblement",
                  "d": "Rediriger et recenser les résidents. Signaler aux pompiers les chambres des personnes à mobilité réduite."
                },
                {
                  "a": "Fin d'intervention",
                  "d": "Sur autorisation de M. Barla ou des pompiers uniquement : arrêter le message SONO (bouton RESET) et réarmer la centrale."
                }
              ]
            },
            {
              "t": "stop",
              "txt": "Personne ne rentre dans le bâtiment avant autorisation explicite des pompiers ou de M. Barla."
            },
            {
              "t": "liste",
              "titre": "À savoir",
              "items": [
                "##Petite alarme## — fermeture des portes coupe-feu seules. ##Grande alarme## — asservissements complets : ascenseurs, ventilation, clapets, surpression.",
                "##Zone mise hors service## (travaux, permis feu) — plus aucune détection : surveillance humaine obligatoire jusqu'à la remise en service en fin de travaux."
              ]
            },
            {
              "t": "manque",
              "txt": "Conduite à tenir en cas d'alarme effraction sur ce site : aucune procédure REGM dans les documents reçus (celle de Seujet existe, elle ne s'applique pas ici). À demander."
            },
            {
              "t": "manque",
              "txt": "Sur le même mur figurent deux commandes ##VENTILATION A## et ##VENTILATION C## (boîtiers blancs, flèches et STOP), absentes du guide technique du 22.12.2023. À clarifier : doivent-elles être touchées lors de la remise en état après alarme, ou sont-elles indépendantes des asservissements incendie ?"
            }
          ]
        }
      ],
      "nomComplet": "REGM — Résidence Grand Morillon (IHEID / Geneva Graduate Institute), bâtiments Morillon (10A/10B) & Budé (8A/8B)",
      "types": [
        "Incendie",
        "Effraction"
      ],
      "adresse": "Grand Morillon Student House, Rue Michelle- Nicod 8, 1202 Genève",
      "transmetteurs": [
        {
          "label": "Incendie REGM",
          "code": "324 199"
        },
        {
          "label": "Incendie REGM — code opérateur (identification de zone à la centrale)",
          "code": "2228"
        },
        {
          "label": "Effraction REGM — code de manipulation (centrale Bavitech, clavier Honeywell)",
          "code": "200 280"
        },
        {
          "label": "Toutes alarmes (Certas)",
          "code": "Complément à 30"
        }
      ],
      "population": "Résidence étudiante IHEID — environ 318 occupants (chambres/studios), répartis sur les bâtiments Morillon (Bât. 10, blocs A-B-C-D) et Budé (Bât. 8, blocs E-F-G-H). Liste des résidents et statut d'occupation consultables sur Starrez (recherche par n° de chambre ou nom, onglet Occupancy Details — le locataire actuel porte le statut « In Room »).",
      "acces": [
        "##Contrôle d'accès par badges SALTO## (serrures autonomes à pile) sur les logements et locaux communs.",
        "##Boîtier PPD## (lecteur portable SALTO) disponible en loge : pour recharger un badge, pour relever le rapport d'ouverture d'une porte (menu « Collecte du rapport d'ouverture », poser l'appareil sur le boîtier puis le connecter au PC — logiciel SALTO, menu Gestion → Rapport d'ouvertures), ou pour un déverrouillage de secours (boîtier d'impulsion de secours dans le coffre à l'administration : mettre les 3 griffes en place et badger)."
      ],
      "manipulationBase": [
        "##Casiers à colis Keynius## — si un résident ne parvient pas à récupérer son colis, procédure réservée aux agents : écran d'accueil → « Login with PIN » → code PIN sécurité ~~768979~~ (ne pas divulguer) → « Manage lockers » → ouvrir le casier communiqué par le résident (ou tous les casiers si l'info est indisponible) ; vérifier l'identité du résident et noter l'intervention au rapport de service.",
        "##Centrale anti-intrusion## (Bavitech Systems, clavier Honeywell, écran affichant « Grand Morillon » + date/heure) : ⚠ à 23h30, laisser le système s'enclencher automatiquement — ne pas taper le code (consigne affichée directement sur le clavier).",
        "##Assistance Bavitech## : 022 594 60 60 / info@bavitech.ch (numéro relevé sur l'autocollant du clavier — voir aussi le numéro d'astreinte Bavitech en prestataires techniques, à vérifier lequel est actif).",
        "##Centrale incendie REGM## — code opérateur ~~2228~~ : ALARME FEU → bouton NOIR (dans les 3 min suivant la réception de l'alarme) → molette pour valider Utilisateur + code → bouton ROUGE (temporisation 5 min) → bouton VERT (réarmement, uniquement après confirmation qu'il s'agit d'une fausse alarme). Procédure complète (fausse alarme / feu naissant / non maîtrisable) dans les Consignes d'intervention ci-dessous."
      ],
      "zoning": [
        {
          "zone": "Morillon (Bât. 10)",
          "desc": "4 blocs A · B · C · D — cuisines communes aux niveaux 6-5-4-3-2-1-0"
        },
        {
          "zone": "Budé (Bât. 8)",
          "desc": "4 blocs E · F · G · H — cuisines communes aux niveaux 6-5-4-3-2-1"
        },
        {
          "zone": "Cuisines 24h/24 (exception)",
          "desc": "10.32 (Morillon) et 8.32 (Budé) — résidents sans cuisine dans leur logement ; contrôle renforcé (risques incendie/dégradation accrus)"
        },
        {
          "zone": "Salle de jeux",
          "desc": "Bloc B, 5e et 6e étage — accès direct depuis le couloir, 3 portes d'accès, caméra disponible"
        },
        {
          "zone": "Jardins & potagers",
          "desc": "Morillon 6D · Budé 5H — potager Budé accessible par l'escalier de secours malgré la poignée Salto, caméra sur le potager Budé"
        },
        {
          "zone": "Annexes diverses",
          "desc": "Shop, bibliothèque, théâtre, GISA, salles d'études, fitness, salle polyvalente — accès toitures (Morillon et Budé) et caves (-1 Budé, 3 accès) et local vélo (2 accès) fermés en permanence, cadenas code 118"
        },
        {
          "zone": "Effraction — légende groupes (centrale Bavitech)",
          "desc": "A1 = Commun · A2 = Magasin · A3 = Cafétéria · A4 = Cuisine bât. C · A5 = Bouton vert (garage) · A6 = Issue de secours. Format affiché au clavier en cas d'alarme : [n° de zone] [n° de groupe] [bâtiment] [nom] [étage] — ex. « 1001 A6 Bât Nom étage »."
        },
        {
          "zone": "Effraction — Zone 0000 / Grp A2",
          "desc": "Shop HUNA (magasin)"
        },
        {
          "zone": "Effraction — Zone 0000 / Grp A3",
          "desc": "Restaurant BUDE, 3e étage (cafétéria)"
        },
        {
          "zone": "Effraction — Zone 0000 / Grp A4",
          "desc": "Cuisine RDC Monillon (bât. C)"
        },
        {
          "zone": "Effraction — Zone 4031 / Grp A5 (bouton vert A1) — P58",
          "desc": "Porte garage côté véhicules Sécurité"
        },
        {
          "zone": "Effraction — Zone 4034 / Grp A5 (bouton vert C1) — P32",
          "desc": "Garage côté véhicules Maintenance"
        },
        {
          "zone": "Effraction — Zone 4036 / Grp A5 (bouton vert C1) — P20",
          "desc": "Garage côté fourgon IHEID"
        },
        {
          "zone": "Effraction — Zone 4033 / Grp A5 (bouton vert A1) — P02",
          "desc": "Garage côté voitures visiteurs"
        },
        {
          "zone": "Effraction — Zone 4082 / Grp A5 (bouton vert A1) — Vélo",
          "desc": "Garage côté parking à vélo"
        }
      ],
      "rondes": "Ronde de fermeture OBLIGATOIRE à 01h00 (sécurité incendie) : fermeture des cuisines communes, fermeture des jardins/salles de jeux (interdit après 23h00), contrôle des risques incendie/dégradation, prévention de la consommation d'alcool en cuisine. Une ronde préalable vers 23h00 puis 00h00 est recommandée pour prévenir les résidents. Avant la fermeture 01h00 : la centrale incendie repasse en transmission directe dès 23h30 — il faut la repasser en mode DIFFÉRÉE jusqu'à 01h30 pour permettre la fermeture des cuisines sans déclencher d'alarme intempestive. 4 types de rondes : (1) Cuisines — éteindre fours/plaques/hottes/micro-ondes, lumières OFF, fenêtres fermées (sauf forte odeur), contrôle nettoyage (Armanda) et dégradations mobilier ; (2) Jardins & potagers — absence de personnes, vérifier les fuites d'eau ; (3) Salle de jeux — contrôle du mobilier ; (4) Annexes — cuisines restaurant (contrôle incendie, lumières), toitures/caves/local vélo fermés en permanence. Toute anomalie (dégradation, oubli d'extinction, présence non autorisée) → rapport GuardTek (type Sécurité/Incendie selon nature, mentionner bloc + niveau).",
      "contacts": [
        {
          "nom": "M. Barla Gregory",
          "role": "Responsable sécurité & incendie IHEID — astreinte P1",
          "tel": "+33 6 15 84 54 16"
        },
        {
          "nom": "M. Barla Gregory",
          "role": "Astreinte P1 — GSM urgence (second numéro)",
          "tel": "077 814 23 39"
        },
        {
          "nom": "Christophe Verdon",
          "role": "Responsable technique REGM (uniquement — pas une ligne d'astreinte RDZ générale, voir ci-dessous)",
          "tel": "076 548 48 48"
        }
      ],
      "astreinte": "M. Barla (responsable sécurité & incendie IHEID) — Pompiers : 118. Astreinte RDZ générale : +41 79 339 13 41 — personnes d'astreinte RDZ pour l'IHEID : Lucas Gimenez (lun-ven), Laurent Heinrich (week-end/jours fériés), Rodolphe De Zordi (en cas d'absence des autres). M. Verdon (voir contacts ci-dessus) est le responsable technique REGM — à contacter pour les questions techniques du site, pas pour l'astreinte sécurité générale.",
      "prestataires": [
        {
          "service": "Électricité (REGM Morillon)",
          "societe": "ElTop",
          "tel": "022 338 21 21",
          "note": "Répondeur avec n° d'astreinte à partir de 17h et le week-end"
        },
        {
          "service": "Électricité (REGM Budé)",
          "societe": "Bouygues",
          "tel": "0844 88 77 88"
        },
        {
          "service": "Ascenseurs (REGM Morillon/Budé)",
          "societe": "Otis",
          "tel": "0800 365 24 7",
          "note": "Bât. A=75NJ9379 · B=75NJ9380 · C=75NJ9381 · E=75NJ9382 · G=75NJ9383 · H=75NJ9384 (restaurant)"
        },
        {
          "service": "Ascenseurs (REGM Budé)",
          "societe": "AS Ascenseur",
          "tel": "022 918 50 70 / 0848 82 14 11",
          "note": "Personnes bloquées dans l'ascenseur — 24h/24, n° installation 10573241"
        },
        {
          "service": "Chauffage / ventilation / eau chaude",
          "societe": "Alvazzi",
          "tel": "0800 442 884"
        },
        {
          "service": "Transmission d'alarme",
          "societe": "Certas",
          "tel": "0844 800 811",
          "note": "REGM n°324.199 — faire le complément à 30"
        },
        {
          "service": "Centrale alarme / incendie / vidéo / sono / extinction",
          "societe": "Chubb Sicli",
          "tel": "022 794 37 54",
          "note": "N° site 64100550 · True Vision : admin / Regm@2020"
        },
        {
          "service": "Sanitaire / plomberie",
          "societe": "Eaux-Secours",
          "tel": "022 771 40 00"
        },
        {
          "service": "Contrôle accès / anti-intrusion / interphonie",
          "societe": "Bavitech",
          "tel": "0900 115 115",
          "note": "Appeler depuis le n° d'astreinte (le fixe ne fonctionne pas). Autre numéro relevé directement sur l'autocollant du clavier Honeywell de la centrale Grand Morillon : 022 594 60 60 / info@bavitech.ch — deux numéros différents identifiés selon la source, à vérifier lequel est actif."
        },
        {
          "service": "Supervision MCR / sous-station / CO2 parking",
          "societe": "Bouygues MCR",
          "tel": "0844 88 77 88"
        },
        {
          "service": "Surpression / protection incendie (Morillon/Budé)",
          "societe": "Jomos",
          "tel": "062 386 17 99 / 062 386 33 44"
        },
        {
          "service": "Débouchage / curage colonne de chute",
          "societe": "Amoudruz SA",
          "tel": "022 329 05 24"
        },
        {
          "service": "Transmission alarme (appli TUS)",
          "societe": "TUS Hotline",
          "tel": "058 910 73 33"
        },
        {
          "service": "Désinfection / dératisation / insectes",
          "societe": "Léman Nuisible",
          "tel": "076 475 35 37"
        },
        {
          "service": "Constructions métalliques (volets/fenêtres/portes ext.)",
          "societe": "Sottas SA",
          "tel": "079 150 08 08"
        },
        {
          "service": "Vitres",
          "societe": "Lamelle Glass & Store SA",
          "tel": "022 782 08 88"
        },
        {
          "service": "Laveries / distributeurs / machines fitness",
          "societe": "Frères Ischi",
          "tel": "022 539 18 60 / 076 377 64 87"
        }
      ],
      "consignes": "TRAITEMENT ALARME CENTRALE INCENDIE (fiche réflexe RDZ v1.0, 17.08.2026) — ALARME FEU : dès le déclenchement, un délai de 3 minutes s'écoule avant transmission automatique aux pompiers ; rejoindre immédiatement la centrale (loge sécurité) et enchaîner : 1) Bouton NOIR « Arrêt buzzer » — coupe le buzzer, l'alarme reste active. 2) Molette « Identifier la zone » — code opérateur 2228, lire sur l'écran le bâtiment (Morillon/Budé), le niveau, la zone et le type de détecteur, faire confirmer la localisation via l'application AppVision. 3) Bouton ROUGE « Arrêt sirène » — ouvre une temporisation de 5 minutes pour la levée de doute sur zone (radio ouverte, ne pas courir ; à l'échéance, transmission automatique aux pompiers). Sur zone, selon le constat : RIEN CONSTATÉ (fausse alarme) → bouton VERT pour quittancer/réarmer, quittancer les asservissements, consigner dans le classeur REGM + rapport GuardTek. FEU NAISSANT/maîtrisable → attaquer avec l'équipement à disposition (extincteur et/ou CAF), une fois le feu éteint et vérifié → bouton VERT, asservissements + rapport GuardTek. NON MAÎTRISABLE ou délai dépassé → déclencheur manuel (DM) ou 118 immédiatement, déclencher l'évacuation (procédure ci-dessous), accueil/guidage des secours, réarmement PAR LES POMPIERS UNIQUEMENT. ⚠ STOP : le bouton vert annule la transmission aux pompiers — ne jamais réarmer tant que le feu n'est pas éteint et vérifié, ni lorsque les secours sont engagés. ALARME DÉRANGEMENT : pas de temporisation (aucune transmission aux pompiers) — lire l'emplacement du dérangement à l'écran puis quittancer, consigner dans le classeur REGM + rapport GuardTek ; appeler SICLI (022 794 37 54) si quittance impossible ou alarme qui repart systématiquement. APRÈS TOUTE ALARME : remettre en fonction les asservissements du bâtiment concerné (surpression, ascenseurs, portes coupe-feu, à tous les étages), consigner l'événement dans le classeur REGM + rapport GuardTek ; si intervention des pompiers, aviser M. De Zordi puis l'IHEID ; une zone mise hors service (travaux/permis feu) ne génère plus aucune détection — surveillance humaine obligatoire jusqu'à remise en service en fin de travaux. — ÉVACUATION (5 phases) : 1) Détection — actionner le déclencheur manuel (DM) le plus proche (couloirs/issues de secours tous étages y compris sous-sol, entrées 8A/8B/10A) ; vérifier que la diode rouge clignote. 2) Déclenchement SONO — boîtier en loge sécurité : appuyer sur le bâtiment concerné (Morillon 10A/10B, Budé 8A/8B ou les deux), attendre la diode bleue HOLD puis presser le bouton rouge EVACUATION. 3) Coordination — gilet d'évacuation + mégaphone + liste des résidents (étagères loge sécurité, liste affichée sur le placard). 4) Point de rassemblement — rediriger et recenser les résidents, signaler aux pompiers (118) les chambres de personnes à mobilité réduite. 5) Fin d'intervention — sur autorisation de M. Barla ou des pompiers uniquement : arrêter le message SONO (bouton RESET) et réarmer la centrale. EN AUCUN CAS des personnes ne doivent rentrer avant autorisation explicite. Petite alarme = fermeture des portes coupe-feu ; grande alarme = asservissements complets (ascenseurs, ventilation, clapets, surpression). REMISE EN ROUTE DES ASSERVISSEMENTS après alarme incendie : quittancer les 3 boîtiers de surpression orange (sortie de secours bloc A RDC pour Morillon ; entrée 8B bloc H pour Budé — clé sur arrêt, attendre 10 secondes avant de repasser sur AUTO, sinon un contacteur peut rester bloqué) ; ratisser ensuite tous les étages pour remettre les portes coupe-feu en fonction et quittancer les boutons de ventilation dans l'ordre (Morillon : 8e étage → 5e étage → sous-sol local 1.10 ; Budé : 9e étage → 4e étage local 2.461/2.039 → sous-sol local 2.23) ; vérifier enfin que les ascenseurs se sont bien remis en service automatiquement.",
      "particularites": "Correction (27.08.2026) : cette fiche mélangeait auparavant des données propres au site voisin MDE (bâtiment distinct, Av. de France 20-22, sa propre fiche complète existe) avec celles de REGM — ces éléments ont été retirés (transmetteur MDE, prestataires réservés à MDE, numéro Certas MDE) pour éviter toute confusion entre les deux sites ; voir fiche MDE séparée pour ces informations. Nouvelle donnée (27.08.2026, photo transmise) : centrale anti-intrusion Bavitech Systems documentée pour la première fois — voir transmetteurs/zoning ci-dessus pour le code de manipulation et la grille des zones/groupes. Nouvelle donnée (27.08.2026, fiche réflexe RDZ v1.0 du 17.08.2026) : procédure complète de traitement de la centrale incendie (code opérateur 2228) intégrée en tête des consignes d'intervention ci-dessous. Correction (27.08.2026, précisée par le client) : le numéro « 079 749 35 36 » cité dans cette fiche réflexe comme astreinte RDZ est en réalité le natel de service de l'agent MDP (matériel de site, sans lien avec REGM) — la vraie astreinte RDZ est +41 79 339 13 41, voir Astreinte téléphonique RDZ ci-dessus. Clarification (27.08.2026) : M. Verdon n'est pas une ligne d'astreinte RDZ mais le responsable technique REGM uniquement — son rôle a été corrigé en conséquence dans les contacts et dans l'astreinte ci-dessus. Contrôle du stationnement/dénonciation : stylo bleu uniquement, infractions codées B31A (interdiction de parquer) / B32A (hors cases) / B37B (circulation interdite) ; feuillet 1 (original) remis à la police sous 10 jours, feuillet 2 (rose) conservé en loge, feuillets 3&4 déposés sur le pare-brise du véhicule ; rapport de dénonciation à saisir dans GuardTek avec photos du véhicule et de la dénonciation remplie. Théâtre REGM : cales-portes disponibles à l'accueil pour maintenir la porte ouverte (à retirer en fin d'utilisation) ; commandes lumières/stores murales (boutons I/O et flèches, à droite de la porte du bas) ou tablette Crestron sous le pupitre ; télécommandes audiovisuelles dans le placard bas de la salle (blanche = HiFi, noire = écrans/TV) — tout éteindre et ranger en fin d'utilisation, vérifier qu'aucune personne ne reste dans la salle.",
      "annexes": [
        "Résidents REGM Bat 8 & Bat 10 — liste des occupants et accès (usage interne, éd. 12.06.2026)",
        "Guide intervention technique REGM/MDE (menuiserie, plomberie, électricité, asservissements, électroménager)",
        "Contrôles & dénonciations — procédure de contrôle du stationnement",
        "Contacts urgence REGM/MDE — soir & week-end (tableau complet des prestataires)",
        "Évacuation incendie REGM — procédure complète",
        "Ronde de fermeture 01h00 — sécurité incendie",
        "Caméra Reolink — installation et utilisation de l'application",
        "Colis Keynius — procédure sécurité",
        "Rapport d'ouverture SALTO — collecte et lecture PPD",
        "Utilisation Starrez — recherche de locataire",
        "Théâtre REGM — guide d'utilisation agent"
      ],
      "majLe": "2026-09-24",
      "majPar": "Gimenez"
    },
    {
      "statut": "complet",
      "prom": "272 601 (effraction) / 324 478 (incendie)",
      "client": "AJF Barton",
      "nomComplet": "IHEID — Villa Barton et Pavillon AJF",
      "types": [
        "Effraction",
        "Incendie"
      ],
      "adresse": "Rue de Lausanne 132, 1202 Genève",
      "transmetteurs": [
        {
          "label": "Effraction (Villa + AJF)",
          "code": "272 601"
        },
        {
          "label": "Incendie (restaurant / AJF)",
          "code": "324 478"
        },
        {
          "label": "Toutes alarmes",
          "code": "Complément à 30"
        }
      ],
      "acces": [
        "##Boîte à clefs Barton## (pavillon D, buanderie) : code ~~0000~~ — ce code est différent des codes d'alarme, ne pas confondre."
      ],
      "manipulationBase": [
        "##Centrale effraction (Villa + AJF)## — clavier situé dans la Villa Barton au niveau du sas d'entrée, à côté du système d'ouverture Dorma Kaba (5 boutons) : code ~~112233~~ puis 0 ou Enter = armer/désarmer l'ensemble du site (Villa+AJF) ; 1 puis Enter = Pavillon AJF seul ; 2 puis Enter = Villa seule.",
        "##Centrale incendie (restaurant/AJF)## — écran tactile au local technique AJF : bouton Connexion → ID 01 / mot de passe ~~0000~~ → choisir Jour ou Nuit.",
        "##Local technique Villa (sous-sol)## : contrôle de température 40–60°C, sans alarme sonore associée."
      ],
      "zoning": [
        {
          "zone": "0 / Enter",
          "desc": "Armer / désarmer l'ensemble du site (Villa + Pavillon AJF)"
        },
        {
          "zone": "1",
          "desc": "Pavillon AJF seul (puis Enter)"
        },
        {
          "zone": "2",
          "desc": "Villa seule (puis Enter)"
        }
      ],
      "contacts": [
        {
          "nom": "M. Demonte",
          "role": "Responsable direct Villa + AJF — téléphone non communiqué, passer par l'astreinte RDZ",
          "tel": "Non communiqué"
        },
        {
          "nom": "M. Spada (Johnson Controls)",
          "role": "Dérangement centrale AJF — téléphone non communiqué",
          "tel": "Non communiqué"
        }
      ],
      "astreinte": "+41 79 339 13 41 (astreinte RDZ 24h/7j — natel dédié). Personnes d'astreinte RDZ pour l'IHEID : Lucas Gimenez (lun-ven), Laurent Heinrich (week-end/jours fériés), Rodolphe De Zordi (en cas d'absence des autres). Correction (27.08.2026) : le numéro +41 79 749 35 36 précédemment indiqué ici est en réalité le natel de l'agent MDP (matériel de site), pas l'astreinte RDZ.",
      "consignes": "⚠️ Identification client : aucun mécanisme n'est actuellement en place pour ce site (pas de mot de passe ni de code de vérification client). À ce jour, il n'existe pas de procédure fiable pour confirmer l'identité d'une personne se présentant comme le client et demandant par téléphone l'annulation d'une alarme, une mise en test ou une intervention. Point de sécurité opérationnelle à traiter en priorité par RDZ (mot de passe fixe par site, question défi/réponse, ou liste de contacts autorisés avec rappel de vérification). En attendant, toute demande de ce type doit être escaladée à l'astreinte RDZ plutôt que traitée directement sur la base d'un appel entrant. Contrôle du stationnement (voir annexe dédiée) : le site distingue Zone 1 = parking principal, Zone 2 = devant le bâtiment, Zone 3 = accès nord.",
      "particularites": "Site composé de deux bâtiments sous un même cahier des charges : la Villa Barton et le Pavillon AJF, chacun avec son propre transmetteur (effraction pour l'ensemble Villa+AJF, incendie côté restaurant/AJF). Horaires et procédures du portail/portillon disponibles en annexe. Wifi invités IHEID_GUEST : voucher et procédure de connexion disponibles en annexe.",
      "annexes": [
        "Cahier des charges Barton",
        "Résidents Barton (éd. 12.06.2026)",
        "Boîte à clefs Barton",
        "Ouverture Portail",
        "Fermeture Site",
        "Ronde extérieure",
        "Wifi IHEID_GUEST — voucher + procédure (mars 2026)",
        "Portes SAS",
        "Ouverture Restaurant",
        "Contrôle Stationnement"
      ],
      "groupeInterdictions": "IHEID",
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Ce que l'agent doit savoir avant d'arriver",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "PROM effraction",
                  "v": "272 601",
                  "code": true
                },
                {
                  "k": "PROM incendie",
                  "v": "324 478",
                  "code": true
                },
                {
                  "k": "Client",
                  "v": "IHEID — Villa Barton et Pavillon AJF"
                },
                {
                  "k": "Adresse",
                  "v": "Rue de Lausanne 132, 1202 Genève"
                },
                {
                  "k": "Particularité",
                  "v": "##Deux bâtiments sous un même cahier des charges##, avec des transmetteurs distincts : l'effraction couvre la Villa et l'AJF, l'incendie couvre le restaurant et l'AJF."
                }
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller",
              "items": [
                {
                  "label": "Villa Barton et Pavillon AJF",
                  "dest": "Rue de Lausanne 132, 1202 Genève"
                }
              ]
            },
            {
              "t": "table",
              "titre": "Repères du site",
              "items": [
                {
                  "z": "Villa Barton",
                  "d": "Sas d'entrée : clavier de la centrale effraction, à côté du système d'ouverture Dorma Kaba à 5 boutons. Local technique au sous-sol."
                },
                {
                  "z": "Pavillon AJF",
                  "d": "Restaurant. Local technique AJF : écran tactile de la centrale incendie."
                },
                {
                  "z": "Pavillon D",
                  "d": "Buanderie — boîte à clefs. Le petit portail d'accès à la buanderie ne doit plus être verrouillé (consigne du 17.09.2026)."
                },
                {
                  "z": "Local technique Villa",
                  "d": "Sous-sol — contrôle de température 40 à 60 °C, sans alarme sonore associée."
                }
              ]
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "Deux centrales, deux logiques",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "PROM effraction (Villa + AJF)",
                  "v": "272 601",
                  "code": true
                },
                {
                  "k": "Référence de l'objet",
                  "v": "612868 — « Domaine Barton », route de Lausanne 132"
                },
                {
                  "k": "PROM incendie (restaurant / AJF)",
                  "v": "324 478",
                  "code": true
                },
                {
                  "k": "Identification Certas",
                  "v": "Complément à 30, pour les deux transmetteurs"
                },
                {
                  "k": "Installateur effraction",
                  "v": "Tyco Integrated Fire & Security (Johnson Controls), Le Mont-sur-Lausanne"
                },
                {
                  "k": "Feuille de transmission",
                  "v": "Édition du 05.02.2026"
                }
              ]
            },
            {
              "t": "table",
              "titre": "Ce que Certas reçoit du transmetteur",
              "items": [
                {
                  "z": "K01 · K04",
                  "d": "Alarme effraction · Alarme sabotage"
                },
                {
                  "z": "K02 · K15",
                  "d": "Alarme agression · Ouverture sous menace"
                },
                {
                  "z": "K09 · K19",
                  "d": "Perte de connexion urgente · Dérangement de l'installation"
                },
                {
                  "z": "K10 à K13 · K43",
                  "d": "Coupures de ligne non urgentes · Problèmes de batteries"
                },
                {
                  "z": "K16",
                  "d": "Test cyclique 24 heures"
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Centrale effraction — Villa Barton, sas d'entrée",
              "items": [
                "Clavier situé à côté du système d'ouverture ##Dorma Kaba## à 5 boutons.",
                "Code : ~~112233~~, suivi du choix de zone."
              ]
            },
            {
              "t": "table",
              "titre": "Zones de la centrale effraction",
              "items": [
                {
                  "z": "0 puis Enter",
                  "d": "Arme ou désarme l'ensemble du site — Villa et Pavillon AJF"
                },
                {
                  "z": "1 puis Enter",
                  "d": "Pavillon AJF seul"
                },
                {
                  "z": "2 puis Enter",
                  "d": "Villa seule"
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Centrale incendie — local technique AJF",
              "items": [
                "Écran tactile : bouton ##Connexion##, identifiant ~~ID 01~~, mot de passe ~~0000~~.",
                "Puis choisir le mode ##Jour## ou ##Nuit##.",
                "Le mot de passe 0000 est bien le code réel, confirmé au 28.08.2026 — ce n'est pas une valeur de remplissage."
              ]
            },
            {
              "t": "stop",
              "lab": "Aucune identification client sur ce site",
              "txt": "Il n'existe ##aucun mot de passe ni question de vérification## permettant de confirmer l'identité d'une personne qui appelle en se présentant comme le client — pour annuler une alarme, demander une mise en test ou une intervention.\nEn attendant qu'un mécanisme soit mis en place, ##toute demande de ce type est escaladée à l'astreinte RDZ##, jamais traitée directement sur la base d'un appel entrant."
            }
          ]
        },
        {
          "titre": "Points d'accès",
          "resume": "Comment entrer et ouvrir",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Boîte à clefs",
                  "v": "Pavillon D, buanderie — code ~~0000~~. ##Ce code n'est pas un code d'alarme, ne pas confondre.##"
                }
              ]
            },
            {
              "t": "liste",
              "items": [
                "##Portail et portillon## — horaires et manœuvres décrits dans une annexe dédiée, non intégrée à ce jour.",
                "##Portes SAS## — procédure en annexe dédiée, non intégrée.",
                "##Petit portail d'accès à la buanderie## — ne doit ##plus## être verrouillé, il reste ouvert en permanence (consigne du 17.09.2026).",
                "##Porte de la buanderie, pavillon D## — ouverture par badge."
              ]
            },
            {
              "t": "manque",
              "txt": "Cinq annexes de procédure sont citées par le cahier des charges mais n'ont pas été fournies : Ouverture Portail, Fermeture Site, Ronde extérieure, Portes SAS, Ouverture Restaurant. Elles conditionnent la plupart des gestes quotidiens sur ce site."
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Boîte à clefs du pavillon D",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Où",
                  "v": "Boîte à clefs du pavillon D, buanderie — code ~~0000~~"
                }
              ]
            },
            {
              "t": "manque",
              "txt": "Composition du trousseau, références des clés et correspondance clé ↔ porte : non documentées. Barton ne figure pas dans l'inventaire ##Clefs IS / RDZ##."
            },
            {
              "t": "liste",
              "titre": "S'il manque une clé",
              "items": [
                "##Pas d'urgence## — rapport et message à Laurent et Lucas.",
                "##Urgence## (site non hermétique, risque pour le client) — appel direct à Laurent ou Lucas."
              ]
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au technique",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "À Genève, un téléphone accroche souvent une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu confirmé, doute non levé — réseau suisse uniquement",
                  "num": "118"
                },
                {
                  "nom": "Police",
                  "role": "##Effraction réelle constatée##, personne sur place, refus de légitimation",
                  "num": "117"
                },
                {
                  "nom": "Police Municipale",
                  "role": "Dim-mer 6h-minuit · Jeu-sam 6h-3h",
                  "num": "+41 22 418 22 22"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Centrale et astreinte",
              "items": [
                {
                  "nom": "Certas",
                  "role": "Effraction n° 272.601 · Incendie n° 324.478 — complément à 30",
                  "num": "+41 844 800 811"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Ligne hiérarchique, et ##seul recours## pour toute demande d'annulation d'alarme ou de mise en test reçue par téléphone. Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence).",
                  "num": "+41 79 339 13 41"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Client et technique",
              "items": [
                {
                  "nom": "M. Demonte",
                  "role": "Responsable direct Villa Barton et AJF",
                  "num": "+41 79 157 77 39"
                },
                {
                  "nom": "M. Demonte",
                  "role": "Ligne fixe Service FM",
                  "num": "+41 22 908 44 40"
                },
                {
                  "nom": "Sécurité IHEID",
                  "role": "Permanence du campus — appelée par Certas pendant les heures de présence",
                  "num": "+41 22 908 59 11"
                },
                {
                  "nom": "M. Barla",
                  "role": "Responsable sécurité et incendie IHEID",
                  "num": "+41 22 908 59 63"
                },
                {
                  "nom": "M. De Zordi",
                  "role": "Directeur RDZ",
                  "num": "+41 76 634 17 92"
                }
              ]
            },
            {
              "t": "manque",
              "txt": "##Johnson Controls / Tyco## est l'installateur du système effraction : contact connu uniquement par courriel, ##service.romandie@jci.com##. Le numéro de M. Spada reste à obtenir. En cas de dérangement de centrale hors courriel, passer par l'astreinte RDZ."
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Effraction, incendie AJF, fermeture du restaurant",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Centrale effraction",
                  "v": "Villa Barton, sas d'entrée, à côté du Dorma Kaba — code ~~112233~~"
                },
                {
                  "k": "Centrale incendie",
                  "v": "Local technique AJF, écran tactile — ~~ID 01~~ / ~~0000~~"
                }
              ]
            },
            {
              "t": "kv",
              "titre": "Heures de présence du client",
              "items": [
                {
                  "k": "Lundi à jeudi",
                  "v": "07h30 – 18h00"
                },
                {
                  "k": "Vendredi",
                  "v": "07h30 – 17h00"
                },
                {
                  "k": "Le reste du temps",
                  "v": "##Heures d'absence## — ainsi que les jours fériés genevois"
                }
              ]
            },
            {
              "t": "choix",
              "titre": "Qui Certas appelle en premier, selon le moment",
              "items": [
                {
                  "couleur": "rouge",
                  "titre": "Effraction ou sabotage, heures d'absence",
                  "txt": "Certas appelle ##RDZ en premier##, puis envoie le rapport à la Sécurité IHEID et à RDZ. ##C'est le cas de figure de l'agent d'astreinte.##"
                },
                {
                  "couleur": "orange",
                  "titre": "Effraction ou sabotage, heures de présence",
                  "txt": "Certas appelle d'abord le ##client## — Sécurité IHEID ou M. Demonte — et non RDZ. L'agent n'intervient que si le client le demande."
                },
                {
                  "couleur": "rouge",
                  "titre": "Agression ou ouverture sous menace",
                  "txt": "##24h/24##, Certas appelle ##RDZ en premier##, quelle que soit l'heure. Liste d'urgence : ##Police cantonale##."
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Ce que Certas fait de son côté",
              "txt": "Pour toute alarme effraction, sabotage, agression ou menace, la ##Police cantonale## figure en liste d'urgence de Certas. Un appel de Certas ne signifie donc pas que la police est déjà partie : se renseigner à la prise d'appel."
            },
            {
              "t": "num",
              "titre": "Alarme effraction",
              "court": "Effraction",
              "items": [
                {
                  "a": "Identifier la zone en alarme",
                  "d": "Le transmetteur 272 601 couvre la Villa ##et## le Pavillon AJF : il faut déterminer lequel des deux est concerné avant de s'engager."
                },
                {
                  "a": "Faire le tour extérieur avant d'entrer",
                  "d": "Chercher une porte ou une fenêtre forcée, une vitre brisée, un véhicule ou une présence inhabituelle. ##Ne pas entrer si une effraction est visible.##"
                },
                {
                  "a": "Si effraction constatée",
                  "d": "Appeler le ##117##, se placer en observation à distance, ##ne pas intervenir seul face à une personne présente##. Puis aviser l'astreinte RDZ."
                },
                {
                  "a": "Si rien n'est constaté",
                  "d": "Entrer, contrôler le bâtiment concerné, puis réarmer la zone au clavier : code ~~112233~~ puis ##0## (tout le site), ##1## (AJF seul) ou ##2## (Villa seule), suivi de Enter."
                },
                {
                  "a": "Consigner",
                  "d": "Rapport GuardTek dans tous les cas, avec l'heure, la zone et le constat."
                }
              ]
            },
            {
              "t": "manque",
              "txt": "Les étapes 1 à 5 ci-dessus décrivent la conduite ##sur place##, reconstituée à partir des éléments techniques : la feuille Certas définit qui appelle qui, pas ce que l'agent fait une fois arrivé. À faire valider avant diffusion aux agents."
            },
            {
              "t": "liste",
              "titre": "Alarme incendie — restaurant et AJF",
              "items": [
                "Transmetteur ~~324 478~~, complément à 30.",
                "Centrale au ##local technique AJF##, écran tactile : Connexion, ID 01, mot de passe 0000, puis mode Jour ou Nuit.",
                "##Dérangement de centrale## : M. Spada, Johnson Controls — numéro en attente, passer par l'astreinte RDZ."
              ]
            },
            {
              "t": "stop",
              "lab": "Fermeture du restaurant AJF",
              "txt": "Depuis le 17.09.2026, les clients du restaurant ##n'enclenchent plus l'alarme## à leur départ. C'est à l'##agent de l'enclencher lui-même## à la fermeture."
            },
            {
              "t": "manque",
              "txt": "Conduite à tenir détaillée en cas d'alarme incendie AJF — levée de doute, quittance, asservissements éventuels — non documentée. À construire sur site, comme pour les autres bâtiments."
            },
            {
              "t": "liste",
              "titre": "Dérangements — pas d'intervention sur site",
              "items": [
                "##Coupures de ligne non urgentes et batteries## (K10 à K13, K43) — Certas attend 5 minutes un message de rétablissement, puis envoie un rapport à la Sécurité IHEID, à RDZ et à Tyco. ##Aucun appel à l'agent.##",
                "##Test cyclique## (K16) — Certas attend les heures ouvrables pour aviser le client. RDZ n'est en liste d'urgence qu'en dernier recours.",
                "##Perte de connexion urgente et dérangement d'installation## (K09, K19) — RDZ est appelé ##uniquement hors heures de présence##."
              ]
            }
          ]
        }
      ],
      "blocsRondes": [
        {
          "t": "manque",
          "txt": "Les annexes ##Ronde extérieure## et ##Fermeture Site## sont citées par le cahier des charges mais n'ont pas été fournies. La fréquence et le parcours des rondes ne sont donc pas documentés ici."
        },
        {
          "t": "liste",
          "titre": "Éléments connus",
          "items": [
            "##Petit portail d'accès à la buanderie## — reste ouvert en permanence depuis le 17.09.2026, ne plus le verrouiller.",
            "##Restaurant AJF## — enclencher l'alarme à la fermeture, les clients ne le font plus."
          ]
        }
      ],
      "blocsNotes": [
        {
          "t": "liste",
          "titre": "Contrôle du stationnement",
          "items": [
            "##Zone 1## — parking principal.",
            "##Zone 2## — devant le bâtiment.",
            "##Zone 3## — accès nord.",
            "Procédure détaillée en annexe dédiée."
          ]
        },
        {
          "t": "liste",
          "titre": "Divers",
          "items": [
            "##Wifi invités IHEID_GUEST## — voucher et procédure de connexion en annexe (mars 2026).",
            "##Liste des résidents Barton## — édition du 12.06.2026."
          ]
        },
        {
          "t": "liste",
          "titre": "Réserves sur les données",
          "items": [
            "Codes confirmés par le tableau ##Codes divers## du 28.08.2026 : centrale effraction 112233, boîtier buanderie pavillon D 0000.",
            "Le mot de passe 0000 de la centrale incendie AJF est le code réel, et non une valeur de remplissage.",
            "Dix annexes sont référencées par le cahier des charges ; cinq procédures opérationnelles manquent encore."
          ]
        }
      ]
    },
    {
      "statut": "complet",
      "prom": "—",
      "client": "Rothschild",
      "nomComplet": "IHEID — Bâtiment Rothschild, rue Rothschild 20",
      "types": [
        "Incendie"
      ],
      "adresse": "Rue Rothschild 20, 1202 Genève",
      "population": "Étudiants et professeurs de toutes nationalités (IHEID) · Personnel administratif IHEID · Employés d'organisations internationales · Employés d'autres organisations locataires.",
      "tenue": "Polo + veste sécurité, pantalon noir, chaussures noires — tenue obligatoire en tout temps. Interdit : fumer, appels personnels en public, familiarité avec les clients, accès non autorisé aux bureaux.",
      "stationnement": "Autour du bâtiment, selon les règles du code de la route en vigueur.",
      "acces": [
        "##Équipement à récupérer en prise de service## : trousseau (pass bâtiment Rothschild), natel agent MDP +41 79 749 35 36 (téléphone de service du site MDP, disponible 24h/7j/365j — à ne pas confondre avec l'astreinte RDZ, voir ci-dessous), lampe torche (EPI obligatoire pour les rondes nocturnes)."
      ],
      "manipulationBase": [
        "Aucune centrale d'alarme ni code PROM/transmetteur ne figure dans le cahier des charges reçu pour ce site — à vérifier auprès de CERTAS ou de l'astreinte RDZ en cas de doute."
      ],
      "zoning": [
        {
          "zone": "Porte n°20",
          "desc": "Fermeture à 20h du lundi au vendredi — sortie ensuite uniquement par l'issue de secours de la tourelle"
        },
        {
          "zone": "Issues secours",
          "desc": "Vérifiées fermées et dégagées à chaque ronde, intérieur et extérieur — panneaux lumineux OK"
        },
        {
          "zone": "Sous-sol",
          "desc": "Porte du couloir sous-sol verrouillée à chaque fermeture"
        },
        {
          "zone": "Mezzanine",
          "desc": "Étage central, côté restaurant & salles conf. — risque squat/SDF, vérification systématique à chaque ronde de nuit"
        },
        {
          "zone": "Façade",
          "desc": "Vérifier l'absence de tags lors de chaque ronde extérieure"
        }
      ],
      "rondes": "2 rondes de contrôle minimum par nuit (1 avant minuit, 1 après minuit) — vérification des espaces sensibles (issues de secours, mezzanine/étage central, façade) et des problèmes techniques apparents (fuites, dégâts, verrouillage).",
      "contacts": [
        {
          "nom": "M. De Zordi",
          "role": "Directeur RDZ",
          "tel": "+41 76 634 17 92"
        },
        {
          "nom": "M. Barla",
          "role": "Responsable sécurité & incendie",
          "tel": "+41 22 908 59 63"
        },
        {
          "nom": "M. Demonte",
          "role": "Directeur Service FM (interventions sur accord RDZ)",
          "tel": "+41 22 908 44 40"
        },
        {
          "nom": "M. Sicot",
          "role": "Service FM — technique",
          "tel": "+41 79 544 70 74"
        },
        {
          "nom": "M. Labrevoir",
          "role": "Service FM — technique",
          "tel": "+41 22 908 44 41"
        },
        {
          "nom": "Police Municipale",
          "role": "Dim-mer 6h-minuit / Jeu-sam 6h-3h",
          "tel": "+41 22 418 22 22"
        },
        {
          "nom": "Pompiers",
          "role": "Urgence incendie",
          "tel": "118"
        },
        {
          "nom": "Police",
          "role": "Urgence",
          "tel": "117"
        }
      ],
      "astreinte": "+41 79 339 13 41 (astreinte RDZ 24h/7j/365j — natel dédié). Personnes d'astreinte RDZ pour l'IHEID : Lucas Gimenez (lun-ven), Laurent Heinrich (week-end/jours fériés), Rodolphe De Zordi (en cas d'absence des autres). Correction (27.08.2026) : le numéro +41 79 749 35 36 précédemment indiqué ici est en réalité le natel de l'agent MDP (voir manipulation de base ci-dessus), pas l'astreinte RDZ.",
      "consignes": "Gestion des accès : accompagner le personnel IHEID en cas d'oubli de badge. Bureaux loués par des locataires privés : ne pas contrôler les locaux, sauf porte forcée ou doute fondé. En cas de présence d'occupants lors de la fermeture : se légitimer, demander l'heure de départ prévue, puis revenir confirmer la fermeture. Alarme incendie : intervention sur appel du client ou des pompiers, accueil des secours, évacuation des lieux vers les points de rassemblement. Objets trouvés : dépôt à la réception (lun-ven 8h-17h) ; hors horaires, établir un rapport et déposer l'objet dans le coffre-fort de sécurité MDP.",
      "particularites": "Aucun code PROM/transmetteur n'apparaît dans le cahier des charges reçu pour ce site — ne pas en supposer un, vérifier auprès de CERTAS ou de l'astreinte RDZ. Locaux privés occupés par des locataires : ne pas intervenir sauf porte forcée ou doute fondé.",
      "annexes": [
        "Cahier des charges Rothschild"
      ],
      "groupeInterdictions": "IHEID",
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Ce que l'agent doit savoir avant d'arriver",
          "blocs": [
            {
              "t": "stop",
              "lab": "Pas d'alarme transmise",
              "txt": "Ce site n'est ##pas raccordé à Certas## : aucune alarme n'arrive automatiquement et il n'y a pas de code PROM. RDZ intervient uniquement ##sur appel## — locataires, pompiers, ou client. Cette fiche se trouve en cherchant ##Rothschild## par le nom du client."
            },
            {
              "t": "kv",
              "items": [
                {
                  "k": "Client",
                  "v": "IHEID — Bâtiment Rothschild"
                },
                {
                  "k": "Adresse",
                  "v": "Rue Rothschild 20, 1202 Genève"
                },
                {
                  "k": "Occupation",
                  "v": "Étudiants et professeurs, personnel administratif IHEID, employés d'organisations internationales et d'autres organisations locataires"
                },
                {
                  "k": "Stationnement",
                  "v": "Autour du bâtiment, selon le code de la route"
                }
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller — deux accès distincts",
              "items": [
                {
                  "label": "Entrée principale, porte n°20 — fermée dès 20h en semaine",
                  "dest": "Rue Rothschild 20, 1202 Genève"
                },
                {
                  "label": "Issue de secours de la tourelle — angle rue des Pâquis, accès des secours et sortie après 20h",
                  "dest": "Rue des Pâquis 52, 1202 Genève"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Le n°22 n'est pas à nous",
              "txt": "Le concierge du bâtiment gère la ##résidence du n°22##, qui n'est ##pas## dans le périmètre RDZ. Il n'est pas un recours pour le n°20 : ne pas compter sur lui en cas d'alarme."
            },
            {
              "t": "table",
              "titre": "Points de vigilance",
              "items": [
                {
                  "z": "Porte n°20",
                  "d": "Entrée principale. Fermeture à 20h du lundi au vendredi — ensuite, sortie uniquement par l'issue de secours de la tourelle."
                },
                {
                  "z": "Mezzanine et étage central",
                  "d": "Côté restaurant et salles de conférence — risque de squat, à vérifier systématiquement à chaque ronde de nuit."
                },
                {
                  "z": "Porte couloir sous-sol",
                  "d": "À verrouiller à chaque fermeture."
                },
                {
                  "z": "Façade",
                  "d": "Vérifier l'absence de tags à chaque ronde extérieure."
                },
                {
                  "z": "Locaux privés",
                  "d": "Bureaux loués à des locataires : ne pas contrôler les locaux, sauf porte forcée ou doute fondé."
                }
              ]
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "Sans objet sur ce site",
          "blocs": [
            {
              "t": "manque",
              "txt": "##Aucun raccordement Certas, aucun code PROM, aucun transmetteur.## Confirmé par Certas le 29.09.2026. Il n'y a rien à saisir ni à identifier ici : l'agent intervient sur appel, pas sur alarme transmise."
            }
          ]
        },
        {
          "titre": "Points d'accès",
          "resume": "Comment entrer et ouvrir",
          "blocs": [
            {
              "t": "liste",
              "items": [
                "##Trousseau## — pass du bâtiment Rothschild, à récupérer en prise de service.",
                "##Lampe torche## — EPI obligatoire pour les rondes nocturnes.",
                "##Porte n°20## — entrée principale, verrouillée dès 20h en semaine.",
                "##Issue de secours de la tourelle## — angle rue des Pâquis. C'est par là que sortent les occupants après 20h, et par là qu'arrivent les secours.",
                "##Porte du couloir sous-sol## — verrouillée à chaque fermeture."
              ]
            },
            {
              "t": "liste",
              "titre": "Accompagnement et fermeture",
              "items": [
                "Personnel IHEID ayant oublié son badge : accompagner.",
                "##Occupant présent à la fermeture## — se légitimer, demander l'heure de départ prévue, puis ##revenir confirmer la fermeture##.",
                "Leur rappeler que la sortie se fait par l'issue de secours de la tourelle, la porte principale étant verrouillée."
              ]
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Pass Rothschild",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Contenu connu",
                  "v": "Pass pour le bâtiment Rothschild"
                }
              ]
            },
            {
              "t": "manque",
              "txt": "Composition du trousseau, références des clés, endroit exact où le récupérer et correspondance clé ↔ porte : non documentés. Rothschild ne figure pas non plus dans l'inventaire ##Clefs IS / RDZ##."
            },
            {
              "t": "liste",
              "titre": "S'il manque une clé",
              "items": [
                "##Pas d'urgence## — rapport et message à Laurent et Lucas.",
                "##Urgence## (site non hermétique, risque pour le client) — appel direct à Laurent ou Lucas."
              ]
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au technique",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "À Genève, un téléphone accroche souvent une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu constaté ou doute non levé — il n'y a pas de transmission automatique sur ce site",
                  "num": "118"
                },
                {
                  "nom": "Police",
                  "role": "Urgence — réseau suisse uniquement",
                  "num": "117"
                },
                {
                  "nom": "Police Municipale",
                  "role": "Dim-mer 6h-minuit · Jeu-sam 6h-3h",
                  "num": "+41 22 418 22 22"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Terrain et astreinte",
              "items": [
                {
                  "nom": "Natel de service MDP",
                  "role": "Téléphone du site, joignable 24h/7j. Ce n'est PAS l'astreinte RDZ.",
                  "num": "+41 79 749 35 36"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Ligne hiérarchique. Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence).",
                  "num": "+41 79 339 13 41"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Client et technique",
              "items": [
                {
                  "nom": "M. Barla",
                  "role": "Responsable sécurité et incendie IHEID",
                  "num": "+41 22 908 59 63"
                },
                {
                  "nom": "M. Sicot",
                  "role": "Service FM — technique",
                  "num": "+41 79 544 70 74"
                },
                {
                  "nom": "M. Demonte",
                  "role": "Directeur Service FM — interventions sur accord RDZ",
                  "num": "+41 22 908 44 40"
                },
                {
                  "nom": "M. De Zordi",
                  "role": "Directeur RDZ",
                  "num": "+41 76 634 17 92"
                }
              ]
            },
            {
              "t": "sous",
              "titre": "Autres contacts",
              "blocs": [
                {
                  "t": "tel",
                  "items": [
                    {
                      "nom": "M. Labrevoir",
                      "role": "Service FM — technique",
                      "num": "+41 22 908 44 41"
                    }
                  ]
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Erreur dans le cahier des charges",
              "txt": "La page Contacts du CDC du 01.04.2026 annonce « Astreinte RDZ : +41 79 749 35 36 ». C'est le natel de service de l'agent MDP, pas l'astreinte. L'astreinte RDZ est le ##+41 79 339 13 41##."
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Signal sonore, exutoire de fumée, évacuation",
          "blocs": [
            {
              "t": "stop",
              "lab": "Le rôle de l'agent sur ce site",
              "txt": "Pas d'alarme transmise, pas de centrale à quittancer, pas d'asservissement à remettre en route. Sur constat, l'agent ##déclenche le signal sonore d'évacuation##, ##ouvre l'exutoire de fumée##, appelle les secours et guide l'évacuation."
            },
            {
              "t": "kv",
              "titre": "Où se trouvent les deux organes",
              "items": [
                {
                  "k": "Panneau d'évacuation",
                  "v": "À l'entrée, ##derrière l'espace lunch / café##. Boîtier noir encastré, quatre commandes : ##Alarme évacuation## (vert, sous capot), ##Quittance évacuation## (blanc, sous capot), ##Arrêt buzzer## (rouge) et ##Buzzer##."
                },
                {
                  "k": "Exutoire de fumée",
                  "v": "Coffret bleu mural, ##cage d'escalier, devant l'issue de secours## donnant à l'angle rue Rothschild / rue des Pâquis. Voyants ##OK## vert et ##Panne## jaune."
                }
              ]
            },
            {
              "t": "num",
              "titre": "Sur constat d'alarme ou de feu",
              "court": "Alarme feu",
              "items": [
                {
                  "a": "Déclencher le signal sonore d'évacuation",
                  "d": "Panneau à l'entrée, derrière l'espace café. Soulever le capot transparent et actionner ##Alarme évacuation##."
                },
                {
                  "a": "Ouvrir l'exutoire de fumée",
                  "d": "Coffret bleu dans la cage d'escalier, devant l'issue de secours côté rue des Pâquis."
                },
                {
                  "a": "Appeler le 118",
                  "d": "Aucune transmission automatique sur ce site : sans cet appel, ##personne n'est prévenu##."
                },
                {
                  "a": "Guider l'évacuation",
                  "d": "Sortie par l'##issue de secours de la tourelle##, la porte n°20 étant verrouillée après 20h. Assister les personnes à mobilité réduite."
                },
                {
                  "a": "Accueillir et guider les secours",
                  "d": "Les diriger vers l'angle rue des Pâquis, puis rester à disposition."
                },
                {
                  "a": "Aviser et consigner",
                  "d": "Astreinte RDZ, puis rapport GuardTek."
                }
              ]
            },
            {
              "t": "manque",
              "txt": "Trois points à documenter avant que cette procédure soit complète : ce que fait exactement la ##Quittance évacuation## (blanche) et si l'agent est autorisé à réarmer ; si l'##Arrêt buzzer## (rouge) coupe le son sans lever l'alarme ; et la conduite à tenir si le voyant ##Panne## de l'exutoire s'allume et qu'il ne se referme pas."
            },
            {
              "t": "manque",
              "txt": "Emplacement des points de rassemblement : jamais précisé dans le cahier des charges."
            },
            {
              "t": "liste",
              "titre": "Signalétique RDZ",
              "items": [
                "Des panneaux RDZ vont être installés ##à l'entrée## et ##dans la cage d'escalier##, pour donner le réflexe aux occupants d'alerter et d'utiliser les bons organes.",
                "À mettre à jour ici une fois posés, avec leur emplacement et leur contenu."
              ]
            }
          ]
        }
      ],
      "blocsRondes": [
        {
          "t": "kv",
          "items": [
            {
              "k": "Fréquence",
              "v": "2 rondes de contrôle minimum par nuit — une avant minuit, une après"
            }
          ]
        },
        {
          "t": "liste",
          "titre": "À vérifier à chaque passage",
          "items": [
            "Issues de secours fermées et non obstruées, ##intérieur et extérieur##, panneaux lumineux en état.",
            "Porte du couloir sous-sol et porte d'entrée n°20 verrouillées.",
            "##Mezzanine et étage central##, côté restaurant et salles de conférence : risque de squat, vérification systématique.",
            "Façade du bâtiment : absence de tags.",
            "Problèmes techniques apparents : fuites, dégâts, verrouillage.",
            "##Locaux privés occupés## : ne pas intervenir, sauf porte forcée ou doute fondé."
          ]
        }
      ],
      "blocsNotes": [
        {
          "t": "liste",
          "titre": "Objets trouvés",
          "items": [
            "Dépôt à la ##réception##, du lundi au vendredi de 8h à 17h.",
            "##Hors horaires## : rapport écrit, puis dépôt au coffre-fort sécurité MDP."
          ]
        },
        {
          "t": "liste",
          "titre": "Tenue et comportement",
          "items": [
            "Polo et veste sécurité, pantalon noir, chaussures noires — en tout temps.",
            "Interdit : fumer, appels personnels en public, familiarité avec les clients, accès non autorisé aux bureaux."
          ]
        },
        {
          "t": "liste",
          "titre": "Réserves sur les données",
          "items": [
            "Absence de raccordement Certas confirmée le 29.09.2026 : ce site n'a ni PROM ni transmetteur.",
            "Le concierge du bâtiment gère la résidence du n°22, hors périmètre RDZ — il n'est pas un recours pour le n°20.",
            "Emplacement des deux organes relevé lors de la visite de Laurent avec M. Barla, le 15.09.2026."
          ]
        }
      ]
    },
    {
      "statut": "complet",
      "prom": "323 710",
      "client": "MDE",
      "nomComplet": "IHEID — MDE (Maison des Étudiants Picciotto), bâtiment voisin de REGM",
      "types": [
        "Incendie"
      ],
      "adresse": "Av. de France 20-22, 1202 Genève — accès piéton par avenue de France ou passerelle de la Paix",
      "transmetteurs": [
        {
          "label": "Incendie MDE",
          "code": "323 710"
        },
        {
          "label": "Toutes alarmes (TUS, mode direct 24/7)",
          "code": "Complément à 30"
        }
      ],
      "population": "Locataires : étudiants et civils de toutes nationalités · employés des organisations internationales · direction IHEID et administration.",
      "tenue": "Polo + veste sécurité, pantalon noir, chaussures noires. Interdit : fumer/téléphoner en présence des clients, copinage avec clients/staff/étudiants, entrer dans une chambre sans autorisation, regarder dans les chambres lors des rondes en coursives, prendre le pass général hors urgence ou ouverture de chambre (utiliser les clés pompiers dans ce cas).",
      "stationnement": "Idem MDP — parking souterrain MDP uniquement. Stationnement devant P1/P2 interdit sauf urgence. Signaler tout véhicule stationné sur un accès pompiers.",
      "acces": [
        "##Équipement de prise de service## : badge personnel SALTO ; Pass Général à récupérer dans le coffre-fort Sécurité à la MDP (ne pas le prendre hors urgence ou ouverture de chambre) ; natel agent MDP +41 79 749 35 36 (téléphone de service du site MDP, à récupérer à la REGM, disponible 24h/7j/365j — à ne pas confondre avec l'astreinte RDZ, voir ci-dessous) ; matériel de secours sur site (trousse premiers secours, extincteurs, défibrillateur AED).",
        "Rapport/main courante écrit obligatoire pour chaque incident, objet trouvé ou intervention hors routine."
      ],
      "zoning": [
        {
          "zone": "Centrale feu mère",
          "desc": "RDC — poste principal de la centrale incendie Siemens"
        },
        {
          "zone": "Escaliers bât. 20 & 22",
          "desc": "Chacun équipé de sa propre centrale feu secondaire"
        },
        {
          "zone": "Salles PCR",
          "desc": "Côté voie ferrée et côté lac — fermeture à 01h00"
        },
        {
          "zone": "Admin MDE",
          "desc": "Loge admin — doubles de clés de chambre rangés par numéro (accès via clé multipass MDP)"
        },
        {
          "zone": "Fitness",
          "desc": "Fermeture à 22h00 — vérifier les toilettes"
        },
        {
          "zone": "Locaux techniques RDC",
          "desc": "Chaufferie/ventilation SIG, local technique IS, local femme de ménage, local déchets, local vélo, laverie, zone poubelle"
        }
      ],
      "rondes": "2 rondes de contrôle minimum par nuit (1 avant minuit, 1 après minuit). Ronde étanchéité au RDC (tester manuellement) + ronde étage (vérifier le verrouillage des accès balcon, ne jamais regarder dans les chambres). Vérifier à chaque ronde : issues de secours fermées/non obstruées avec panneaux lumineux OK, absence de parking sauvage sur l'esplanade et sur les voies de fuite, éléments de sécurité/éclairages/propreté du local poubelle. Fermetures : Salle PCR à 01h00, Salle Fitness à 22h00 (vérifier les toilettes), espaces communs RDC à 01h00 (ronde étanchéité + fermeture testée manuellement). Porte d'entrée sous vidéosurveillance avec rapport d'ouvertures.",
      "contacts": [
        {
          "nom": "M. De Zordi",
          "role": "Directeur RDZ",
          "tel": "+41 76 634 17 92"
        },
        {
          "nom": "M. Barla",
          "role": "Responsable sécurité & incendie",
          "tel": "+41 22 908 59 63"
        },
        {
          "nom": "M. Barla",
          "role": "Responsable sécurité & incendie — GSM urgence",
          "tel": "+41 77 814 23 39"
        },
        {
          "nom": "M. Verdon",
          "role": "Responsable technique REGM (uniquement, précisé par le client le 27.08.2026 — sa pertinence comme contact pour ce site voisin reste à reconfirmer)",
          "tel": "+41 76 548 48 48"
        },
        {
          "nom": "Service Housing IHEID",
          "role": "Lun-ven 8h-17h (option 2)",
          "tel": "+41 22 908 45 01"
        },
        {
          "nom": "Police Municipale",
          "role": "Dim-mer 6h-minuit / Jeu-sam 6h-3h",
          "tel": "+41 22 418 22 22"
        },
        {
          "nom": "Pompiers",
          "role": "Urgence incendie",
          "tel": "118"
        },
        {
          "nom": "Police",
          "role": "Urgence",
          "tel": "117"
        }
      ],
      "astreinte": "+41 79 339 13 41 (astreinte RDZ 24h/7j/365j — natel dédié). Personnes d'astreinte RDZ pour l'IHEID : Lucas Gimenez (lun-ven), Laurent Heinrich (week-end/jours fériés), Rodolphe De Zordi (en cas d'absence des autres). Correction (27.08.2026) : le numéro +41 79 749 35 36 précédemment indiqué ici est en réalité le natel de l'agent MDP (téléphone de service à récupérer à la REGM, voir manipulation de base ci-dessus), pas l'astreinte RDZ.",
      "prestataires": [
        {
          "service": "Boîtiers centrale alarme incendie",
          "societe": "Siemens",
          "tel": "0842 842 033"
        },
        {
          "service": "Éclairages de secours / exutoires",
          "societe": "Aprotec",
          "tel": "022 343 81 30"
        }
      ],
      "consignes": "ALARME INCENDIE : intervention sur appel du client ou de CERTAS — prise d'info TUS/CERTAS, levée de doute, réarmement ou appel des secours (118), accueil des secours, guidage de l'évacuation vers les points de rassemblement, coordination avec l'agent MDP/REGM (intervention en moins de 10 minutes). Centrale Siemens FC20xx : accès par code utilisateur à 4 chiffres (niveau 1 = tout le monde/arrêt buzzer ; niveau 2.1 = agent de sécurité, droits restreints ; niveau 2.2 = chargé de sécurité, droits élargis ; niveau 3 = technicien Siemens). En cas d'AVERTISSEMENT ou d'ALARME : appuyer sur « Arrêt signaux sonores » + code à 4 chiffres, lire le lieu de la zone concernée, se rendre sur place pour vérifier — feu confirmé → actionner un déclencheur manuel (transmission à distance immédiate) ; alarme bénigne → « Réarmement ». Une zone mise hors service ne génère plus aucune alarme ni avertissement : à réserver aux cas nécessaires (travaux, détecteur défectueux) et remettre en service dès que possible. Quittance des asservissements après alarme : surpression, portes coupe-feu, ascenseurs, monoblocs. — DISTRIBUTEUR DE CLÉS (si un étudiant ne peut pas récupérer sa clé de chambre au check-in) : vérifier d'abord son identité et sa réservation (listing MDE) ; se rendre à la MDP, prendre la clé multipass au coffre puis les 2 clefs « Boîte clef serrure 2 » ; ouvrir le distributeur dans le couloir, récupérer la clé de la chambre, la remettre au client (proposer un badge via l'ordinateur MDE si besoin) et faire un rapport à housing (agent REGM). Si le distributeur est vide : accéder à la loge admin MDE (clé multipass, code du coffre sur le drive/Guardtek), trouver le double rangé par numéro de chambre — clé d'origine remise sans signature, double uniquement avec signature sur le cahier — rapport à housing obligatoire dans tous les cas. — PERMIS DE FEU : obligatoire pour tout travail par point chaud (soudage, tronçonnage, découpage, meulage) ; formulaire à faire remplir et signer par l'entreprise exécutante avant le début des travaux, caches de protection à poser sur les détecteurs concernés, désactivation de la zone via la centrale feu si nécessaire.",
      "particularites": "Gestion des poubelles : sortie des conteneurs entre 19h00 (veille) et 6h00 (jour de collecte), emplacement Avenue de France 20-22 ; jours de collecte organique/papier/ordures selon le calendrier de la Ville de Genève, avec reports lors des jours fériés (voir annexe). Assistance PMR : protocole en cas de crise d'épilepsie disponible sur demande. Salage/déneigement : parvis et allée, en collaboration avec le service FM en semaine — prendre l'initiative le week-end. MDE et REGM partagent la même astreinte RDZ et une partie des mêmes prestataires que la résidence voisine REGM (voir fiche REGM).",
      "annexes": [
        "Cahier des charges MDE",
        "Résidents MDE (éd. 12.06.2026)",
        "Plans SIEMENS — réf. 71013701",
        "Consigne distributeur de clés MDE",
        "Guide intervention technique MDE/REGM (fils rouge)",
        "Gestion des poubelles MDE — calendrier de collecte",
        "Manuel centrale feu Siemens FC20xx/FT2040",
        "Notice permis de feu",
        "Formulaire permis de feu",
        "Plan RDC MDE (implantation SALTO / centrales feu / locaux techniques)"
      ],
      "groupeInterdictions": "IHEID",
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Ce que l'agent doit savoir avant d'arriver",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Code PROM",
                  "v": "323 710",
                  "code": true
                },
                {
                  "k": "Type d'alarme",
                  "v": "Incendie"
                },
                {
                  "k": "Client",
                  "v": "IHEID — Maison des Étudiants Picciotto"
                },
                {
                  "k": "Occupation",
                  "v": "Locataires : étudiants et civils de toutes nationalités, employés d'organisations internationales, direction et administration IHEID"
                },
                {
                  "k": "Voisinage",
                  "v": "Bâtiment voisin de [[REGM|#]] — même astreinte RDZ et une partie des mêmes prestataires. L'intervention se coordonne avec l'agent MDP/REGM."
                }
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller",
              "items": [
                {
                  "label": "Accès piéton par l'avenue de France ou par la passerelle de la Paix",
                  "dest": "Maison des Étudiants Picciotto, Avenue de France 20, 1202 Genève"
                }
              ]
            },
            {
              "t": "table",
              "titre": "Organisation du bâtiment",
              "items": [
                {
                  "z": "Centrale feu mère",
                  "d": "RDC — poste principal de la centrale incendie Siemens"
                },
                {
                  "z": "Escaliers bât. 20 et 22",
                  "d": "Chacun équipé de sa propre centrale feu secondaire"
                },
                {
                  "z": "Salles PCR",
                  "d": "Côté voie ferrée et côté lac — fermeture à 01h00"
                },
                {
                  "z": "Admin MDE",
                  "d": "Loge administration — doubles des clés de chambre rangés par numéro, accès par la clé multipass MDP"
                },
                {
                  "z": "Fitness",
                  "d": "Fermeture à 22h00 — penser à vérifier les toilettes"
                },
                {
                  "z": "Locaux techniques RDC",
                  "d": "Chaufferie et ventilation SIG, local technique IS, local femme de ménage, local déchets, local vélo, laverie, zone poubelle"
                }
              ]
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "PROM, centrale Siemens, niveaux d'accès",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "PROM incendie (Certas)",
                  "v": "323 710",
                  "code": true
                },
                {
                  "k": "Identification Certas",
                  "v": "Complément à 30"
                },
                {
                  "k": "Transmission",
                  "v": "TUS, mode direct 24h/7j"
                },
                {
                  "k": "Code sécurité — niveau agent",
                  "v": "~~7200~~",
                  "code": true
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Centrale incendie Siemens FC20xx",
              "items": [
                "L'accès se fait par un ##code utilisateur à 4 chiffres##, qui détermine ce que l'on a le droit de faire.",
                "##Niveau 1## — tout le monde : arrêt du buzzer uniquement.",
                "##Niveau 2.1## — agent de sécurité : droits restreints.",
                "##Niveau 2.2## — chargé de sécurité : droits élargis.",
                "##Niveau 3## — technicien Siemens."
              ]
            }
          ]
        },
        {
          "titre": "Points d'accès",
          "resume": "Comment entrer et ouvrir",
          "blocs": [
            {
              "t": "liste",
              "items": [
                "##Badge personnel SALTO## — accès courant au bâtiment.",
                "##Pass Général## — à récupérer dans le coffre-fort Sécurité à la MDP. Ne pas le prendre hors urgence ou ouverture de chambre : utiliser les ##clés pompiers## dans ce second cas.",
                "##Loge admin MDE## — ouverture par la clé multipass MDP.",
                "##Porte d'entrée## — sous vidéosurveillance, avec rapport d'ouvertures consultable."
              ]
            },
            {
              "t": "manque",
              "txt": "Par quelle porte l'agent entre la nuit, et laquelle reste accessible en cas de défaut SALTO ou de coupure de courant : non documenté."
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Ce qu'il faut emporter pour pouvoir intervenir",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Coffre à clé Admin MDE",
                  "v": "Code ~~357~~ — consigne permanente du 17.09.2026"
                },
                {
                  "k": "Pass Général",
                  "v": "Coffre-fort Sécurité à la MDP"
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Éléments connus",
              "items": [
                "##Clé SI## — remise en service des ascenseurs après alarme (cylindre rouge pompier).",
                "##Trousseau désenfumage## — boîte à clés du local derrière l'administration, pour ouvrir l'exutoire du 9e étage.",
                "##Pass MDE## — local ménage et local SIG lors de la quittance des asservissements.",
                "##Clé multipass MDP## — ouvre la loge admin MDE.",
                "##2 clefs « Boîte clef serrure 2 »## — à la MDP, pour le distributeur de clés.",
                "##Doubles des chambres## — loge admin MDE, rangés par numéro de chambre.",
                "##Clés pompiers## — pour ouvrir une chambre, à la place du Pass Général."
              ]
            },
            {
              "t": "stop",
              "lab": "Remise de badge ou de clé de chambre",
              "txt": "Depuis le 17.08.2026, aucune remise hors des horaires du Housing (lun-ven 08h00-12h30 et 13h30-17h00, fermé week-ends et fériés), sauf mail préalable du Housing. Étudiant qui se présente hors horaires : rester courtois, le renvoyer au Housing, noter dans GUARDTEK."
            },
            {
              "t": "manque",
              "txt": "Il manque encore la composition complète du trousseau MDE, l'endroit exact où le récupérer, et la conduite à tenir s'il manque une clé au retour."
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au technique",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "À Genève, un téléphone accroche souvent une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu confirmé, doute non levé — réseau suisse uniquement",
                  "num": "118"
                },
                {
                  "nom": "Police",
                  "role": "Urgence — réseau suisse uniquement",
                  "num": "117"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Centrale, terrain et astreinte",
              "items": [
                {
                  "nom": "Certas",
                  "role": "MDE n° 323.710 — faire le complément à 30",
                  "num": "+41 844 800 811"
                },
                {
                  "nom": "Agent MDP — natel de service",
                  "role": "Couvre les urgences MDE en journée et coordonne l'intervention sur place. C'est ce numéro qu'on appelle pour une urgence terrain. À récupérer à la REGM, joignable 24h/7j.",
                  "num": "+41 79 749 35 36"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Ligne hiérarchique, pour décider ou faire remonter. Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence).",
                  "num": "+41 79 339 13 41"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Ne pas confondre les deux numéros",
              "txt": "Le natel finissant par ##35 36## est l'agent MDP en poste : urgence terrain. Celui finissant par ##13 41## est l'astreinte RDZ : décision et remontée. Le cahier des charges du 01.04.2026 présente le premier comme « astreinte RDZ » — c'est une erreur d'étiquette à corriger dans le document."
            },
            {
              "t": "tel",
              "titre": "Client et hiérarchie",
              "items": [
                {
                  "nom": "M. Barla",
                  "role": "Responsable sécurité et incendie IHEID",
                  "num": "+41 22 908 59 63"
                },
                {
                  "nom": "M. Barla",
                  "role": "Second numéro, GSM urgence",
                  "num": "+41 77 814 23 39"
                },
                {
                  "nom": "M. De Zordi",
                  "role": "Directeur RDZ",
                  "num": "+41 76 634 17 92"
                },
                {
                  "nom": "Service Housing IHEID",
                  "role": "Lun-ven 8h-17h, option 2 — clés, badges, arrivées d'étudiants",
                  "num": "+41 22 908 45 01"
                },
                {
                  "nom": "Police Municipale",
                  "role": "Dim-mer 6h-minuit · Jeu-sam 6h-3h",
                  "num": "+41 22 418 22 22"
                }
              ]
            },
            {
              "t": "sous",
              "titre": "Technique et prestataires",
              "blocs": [
                {
                  "t": "tel",
                  "items": [
                    {
                      "nom": "Siemens",
                      "role": "Boîtiers et centrale d'alarme incendie",
                      "num": "+41 842 842 033"
                    },
                    {
                      "nom": "Aprotec",
                      "role": "Éclairages de secours et exutoires",
                      "num": "+41 22 343 81 30"
                    }
                  ]
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Demande d'intervention technique",
              "items": [
                "Par mail à ##maintenance.residences@graduateinstitute.ch##, ou par GuardTek.",
                "Pour tout problème urgent : contacter M. Barla ou la technique avant d'agir."
              ]
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Centrale incendie, quittance, distributeur de clés",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Où est la centrale",
                  "v": "Centrale feu mère au RDC. Les escaliers des bâtiments 20 et 22 ont chacun leur propre centrale secondaire."
                },
                {
                  "k": "Délai d'intervention",
                  "v": "Moins de 10 minutes, en coordination avec l'agent MDP/REGM"
                }
              ]
            },
            {
              "t": "num",
              "titre": "Alarme incendie — les premiers gestes",
              "court": "Alarme feu",
              "items": [
                {
                  "a": "Prendre l'information",
                  "d": "L'intervention part d'un appel du client ou de Certas. Prise d'info auprès de TUS ou de Certas avant de se déplacer."
                },
                {
                  "a": "À la centrale : arrêt des signaux sonores",
                  "d": "Appuyer sur « Arrêt signaux sonores » puis saisir le code utilisateur à 4 chiffres."
                },
                {
                  "a": "Lire la zone concernée",
                  "d": "L'écran indique le lieu de la zone en alarme."
                },
                {
                  "a": "Se rendre sur place pour la levée de doute",
                  "d": "Puis appliquer l'un des trois cas ci-dessous."
                }
              ]
            },
            {
              "t": "choix",
              "titre": "Sur zone, selon ce qui est constaté",
              "items": [
                {
                  "couleur": "vert",
                  "titre": "Alarme bénigne",
                  "txt": "Utiliser la fonction ##Réarmement## de la centrale, puis quittancer les asservissements et rédiger le rapport."
                },
                {
                  "couleur": "orange",
                  "titre": "Doute non levé",
                  "txt": "Ne pas réarmer. Appeler le 118 et faire intervenir les secours."
                },
                {
                  "couleur": "rouge",
                  "titre": "Feu confirmé",
                  "txt": "Actionner un ##déclencheur manuel## : la transmission à distance est immédiate. Appeler le 118, accueillir et guider les secours, diriger l'évacuation vers les points de rassemblement."
                }
              ]
            },
            {
              "t": "num",
              "titre": "Remise en route des asservissements après alarme incendie",
              "court": "Asservissements",
              "items": [
                {
                  "a": "Remettre les ascenseurs des allées 20 et 22",
                  "d": "Ils ne se quittancent ##pas## automatiquement. Prendre la ##clé SI##, l'introduire dans le cylindre rouge pompier, tourner sur ##R##, puis revenir sur la position initiale ##0##. Faire un essai pour vérifier que la quittance a fonctionné."
                },
                {
                  "a": "Local ménage au RDC — boutons 1 et 2",
                  "d": "Entrer avec le ##pass MDE##. Le local se trouve au fond : il contient 2 tableaux. Les diodes des boutons sont allumées en rouge — appuyer dessus pour qu'elles s'éteignent. Même principe pour tous les boutons suivants."
                },
                {
                  "a": "Local SIG côté allée 20 — bouton 3",
                  "d": "Entrer également avec le pass MDE."
                },
                {
                  "a": "Ouvrir l'exutoire pour accéder à la toiture",
                  "d": "Prendre le ##trousseau désenfumage## dans la boîte à clés du local situé derrière l'administration. Dans l'une des deux allées, ouvrir le ##boîtier de désenfumage bleu## et appuyer ##1 fois## sur le bouton central noir : une diode rouge s'allume et l'exutoire du 9e étage s'ouvre."
                },
                {
                  "a": "Monter sur la toiture — boutons 4 et 5",
                  "d": "Ascenseur jusqu'au 9e étage. L'échelle est contre le mur côté lac : retirer le cadenas et monter.\nSur le toit, chaque allée a son monobloc : ouvrir la porte, appuyer sur le bouton ##Quittance alarme incendie##, puis faire de même pour l'autre allée."
                },
                {
                  "a": "Refermer l'exutoire",
                  "d": "Redescendre, ranger l'échelle, revenir au RDC et appuyer ##2 fois## sur le petit bouton du boîtier de désenfumage. L'exutoire se referme et la lumière rouge s'éteint. ##Remonter au 9e étage pour vérifier## qu'il est bien fermé."
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Sur la toiture",
              "txt": "Rester du côté monobloc et ne pas s'attarder sur le toit."
            },
            {
              "t": "stop",
              "lab": "Exutoire qui ne se referme pas",
              "txt": "Si le bouton jaune « Attention » clignote sur le boîtier de désenfumage et que l'exutoire reste ouvert, appeler Aprotec : ils guident une manipulation de fermeture provisoire. ##Ne jamais laisser un exutoire ouvert.##"
            },
            {
              "t": "stop",
              "txt": "Une zone mise hors service ne génère plus aucune alarme ni avertissement. À réserver aux cas nécessaires (travaux, détecteur défectueux), avec surveillance humaine, et à remettre en service dès que possible."
            },
            {
              "t": "num",
              "titre": "Distributeur de clés — étudiant qui ne peut pas récupérer sa clé au check-in",
              "items": [
                {
                  "a": "Vérifier l'identité et la réservation",
                  "d": "Contrôler la personne dans le listing MDE avant toute remise."
                },
                {
                  "a": "Récupérer les clés à la MDP",
                  "d": "Clé multipass au coffre, puis les 2 clefs « Boîte clef serrure 2 »."
                },
                {
                  "a": "Ouvrir le distributeur",
                  "d": "Il se trouve dans le couloir. Récupérer la clé de la chambre et la remettre au client. Un badge peut être proposé via l'ordinateur MDE."
                },
                {
                  "a": "Si le distributeur est vide",
                  "d": "Accéder à la loge admin MDE avec la clé multipass (code du coffre sur le drive ou dans GuardTek) et prendre le double rangé au numéro de la chambre. Clé d'origine remise sans signature ; ##double remis uniquement contre signature## sur le cahier."
                },
                {
                  "a": "Rapport au Housing",
                  "d": "Obligatoire dans tous les cas, par l'agent REGM."
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Permis de feu",
              "items": [
                "Obligatoire pour tout travail par point chaud : soudage, tronçonnage, découpage, meulage.",
                "Formulaire à faire remplir et signer par l'entreprise exécutante ##avant## le début des travaux.",
                "Poser les caches de protection sur les détecteurs concernés, et désactiver la zone via la centrale si nécessaire.",
                "Remettre la zone en service dès la fin des travaux."
              ]
            },
            {
              "t": "manque",
              "txt": "Points de rassemblement en cas d'évacuation : non précisés dans les documents reçus pour ce site."
            },
            {
              "t": "liste",
              "titre": "Intrusion ou dégradation constatée",
              "items": [
                "Signaler ##immédiatement## : police au ##117##, puis astreinte RDZ.",
                "Ne pas intervenir seul face à une personne présente sur place.",
                "Photos, heure, localisation, puis rapport GuardTek."
              ]
            }
          ]
        }
      ],
      "blocsRondes": [
        {
          "t": "kv",
          "items": [
            {
              "k": "Fréquence",
              "v": "2 rondes de contrôle minimum par nuit — une avant minuit, une après minuit"
            }
          ]
        },
        {
          "t": "liste",
          "titre": "Les deux types de ronde",
          "items": [
            "##Ronde étanchéité, au RDC## — tester manuellement la fermeture des accès.",
            "##Ronde étage## — vérifier le verrouillage des accès balcon. ##Ne jamais regarder dans les chambres.##"
          ]
        },
        {
          "t": "liste",
          "titre": "À vérifier à chaque passage",
          "items": [
            "Issues de secours fermées et non obstruées, panneaux lumineux en état.",
            "Absence de stationnement sauvage sur l'esplanade et sur les voies de fuite.",
            "Éléments de sécurité, éclairages, et propreté du local poubelle."
          ]
        },
        {
          "t": "table",
          "titre": "Horaires de fermeture",
          "items": [
            {
              "z": "22h00",
              "d": "Salle Fitness — vérifier les toilettes"
            },
            {
              "z": "01h00",
              "d": "Salle PCR"
            },
            {
              "z": "01h00",
              "d": "Espaces communs du RDC — ronde étanchéité, fermeture testée manuellement"
            }
          ]
        }
      ],
      "blocsNotes": [
        {
          "t": "liste",
          "titre": "Gestion des poubelles",
          "items": [
            "Sortie des conteneurs entre ##19h00 la veille## et ##6h00 le jour de la collecte##, emplacement avenue de France 20-22.",
            "Jours de collecte organique, papier et ordures selon le calendrier de la Ville de Genève, avec reports lors des jours fériés."
          ]
        },
        {
          "t": "liste",
          "titre": "Objets trouvés",
          "items": [
            "Dépôt à la ##réception MDP##, du lundi au vendredi de 8h à 17h.",
            "##Hors horaires## : rapport écrit, puis dépôt au coffre-fort sécurité MDP."
          ]
        },
        {
          "t": "liste",
          "titre": "Gestion d'events",
          "items": [
            "Vérifier le matériel de secours : trousse, extincteurs, défibrillateur.",
            "Contrôler que les voies de fuite restent dégagées.",
            "Filtrage à l'entrée si le client le demande.",
            "Sécurité des biens et des personnes pendant toute la durée de l'événement."
          ]
        },
        {
          "t": "liste",
          "titre": "Divers",
          "items": [
            "##Salage et déneigement## — parvis et allée, avec le service FM en semaine ; prendre l'initiative le week-end.",
            "##Assistance PMR## — protocole en cas de crise d'épilepsie disponible sur demande.",
            "##Rapport écrit obligatoire## pour chaque incident, objet trouvé ou intervention hors routine."
          ]
        },
        {
          "t": "liste",
          "titre": "Tenue et comportement",
          "items": [
            "Polo et veste sécurité, pantalon noir, chaussures noires.",
            "Interdit : fumer ou téléphoner en présence des clients, familiarité avec les clients, le staff ou les étudiants, entrer dans une chambre sans autorisation, regarder dans les chambres lors des rondes en coursives."
          ]
        },
        {
          "t": "liste",
          "titre": "Stationnement",
          "items": [
            "Parking souterrain MDP uniquement, comme pour MDP.",
            "Stationnement devant P1 et P2 interdit sauf urgence.",
            "Signaler tout véhicule stationné sur un accès pompiers."
          ]
        }
      ]
    },
    {
      "statut": "complet",
      "prom": "320 984",
      "client": "MDP",
      "nomComplet": "IHEID — MDP (Maison de la Paix), campus principal — 6 bâtiments « Pétale » P1 à P6",
      "types": [
        "Incendie"
      ],
      "adresse": "Chemin Eugène-Rigot, 1202 Genève (campus Maison de la Paix) — numéro exact non confirmé dans les documents reçus",
      "transmetteurs": [
        {
          "label": "Incendie MDP",
          "code": "320 984"
        }
      ],
      "population": "Campus tertiaire diurne : bureaux et salles de cours/conférence de l'IHEID et de plusieurs organisations partenaires colocalisées (GICHD, GCSP, DCAF, WBSCD) — forte occupation en journée semaine, très faible le soir/week-end. Locaux privés loués par ces organisations : ne pas y intervenir sauf porte forcée ou doute fondé.",
      "tenue": "Idem consignes générales RDZ. Discrétion requise dans les zones bureaux/conférence occupées par du personnel d'organisations internationales.",
      "stationnement": "Parking souterrain P4 (entresol, ~19 places n°16-34) et parkings sous-sol P5 (SS1/SS2) et P6 (SS1, ~730m²). Signaler tout véhicule stationné sur un accès pompiers ou une voie d'évacuation.",
      "acces": [
        "##Accès aux centrales feu et locaux techniques## (sprinklers, monoblocs) : badge « Full Access » + Pass Général obligatoires (voir guide « Installations techniques » — accès nécessaire pour rondes, réarmement des monoblocs après alarme, incidents techniques, ou à la demande des pompiers)."
      ],
      "manipulationBase": [
        "##Centrale de détection incendie Siemens FS20## (contrôleurs FC20x0, terminal d'exploitation FT2040) — même système et mêmes niveaux d'accès que MDE : niveau 1 = tout le monde (arrêt buzzer, défilement) ; niveau 2.1 = utilisateur restreint (ex. concierge) ; niveau 2.2 = utilisateur élargi (chargé de sécurité) ; niveau 3 = maintenance Siemens. Codes utilisateur à 4 chiffres — non communiqués dans le manuel générique reçu, à récupérer auprès du responsable sécurité RDZ.",
        "##RÉARMEMENT DES MONOBLOCS## après levée de doute/quittance d'une alarme incendie (annexe T.01) : 2 groupes de bâtiments, Groupe 1 = Pétale 1 à 4, Groupe 2 = Pétale 5 et 6 (+ parking) ; pour chaque monobloc concerné, sur le boîtier « ~~MCR-TS42~~ » appuyer 5 secondes sur le voyant de quittance rouge, puis contrôler sur le variateur ABB que la fréquence redémarre (≈00.0Hz) ; rouvrir/réenclencher au besoin la porte feu automatique menant à l'interpétale depuis l'escalier du hall Kögler (la pousser suffit). Ascenseurs : après une alarme ils restent bloqués porte ouverte au niveau des sorties — réarmement avec la clé SI (coffre service desk), tourner d'un quart de tour jusqu'à fermeture de la porte.",
        "##PORTES AUTOMATIQUES P1/P2 bloquées ouvertes## (annexe T.02, ne jamais manipuler sans prévenir le superviseur RDZ au préalable) : contrôler d'abord les boîtiers de commande (P1 : derrière la réception, vers la centrale incendie ; P2 : à gauche de l'entrée P2 sous les extincteurs, clé à récupérer dans le coffre derrière la réception — clé P2 intérieur ≠ P2 extérieur) ; ils doivent être en mode AU (automatique), sinon tourner la clé pour resélectionner AU ; si déjà en AU et dysfonctionnement persistant → réinitialiser via le tableau électrique (prendre le pass général dans le coffre réception, disjoncteur ~~245F3~~ pour P1 au local technique P1N3 entre IT Helpdesk et ascenseurs, ou disjoncteur ~~244F1~~ pour P2 au local technique P2N3 à droite de l'ascenseur P2 — appuyer TEST, attendre 1 min sans passage, remettre en marche, attendre 10 min puis recontrôler). Si le problème persiste : contacter M. Alexandre Demonte au +41 79 157 77 39.",
        "##GRILLE DE PARKING## (annexe T.03) : fermeture via le boîtier du local sprinkler P6 (fond, en haut à droite) — appuyer MENU puis 2× sur A ; une main et l'inscription OFF confirment la fermeture.",
        "##BARRIÈRE DE PARKING## (annexe « T.04/T.05 » selon la numérotation du document) : 3 méthodes — 1) boîtier mural à gauche de la sortie parking, bouton ROUGE (bloquer ouverte : bouton rouge + débrancher l'alimentation du panneau au-dessus, prise bleue) ; 2) clés dans le coffre du P1, côté barrière tourner la clé à gauche sur « MANUAL » et soulever manuellement ; 3) à l'arrière de la barrière, ouvrir le boîtier avec la clé et appuyer sur le bouton VERT.",
        "##CHANGEMENT DE PILES SERRURES KABA/DORMAKABA## (annexe « T.05/T.06 » selon la numérotation du document, piles LR03/AAA) : matériel (clé de démontage KABA ou aimant DORMAKABA + piles) à récupérer au Service Desk P1 (armoire dédiée). KABA : insérer la clé de démontage sur le côté de la poignée, retirer la poignée, retirer le cache, changer les piles en moins de 10 secondes puis remonter. DORMAKABA : placer l'aimant au-dessus du boîtier, soulever pour accéder aux piles, changer en moins de 10 secondes. ⚠️ Au-delà de 10 secondes, risque de déprogrammation de la serrure — en cas de déprogrammation accidentelle, contacter le service FM immédiatement."
      ],
      "zoning": [
        {
          "zone": "P1",
          "desc": "100% IHEID. Entresol : 2 auditoires (~400 et ~200 places, dont Auditorium Ivan Pictet). Niv 01 : local serveur, chaufferie gaz, infirmerie, ventilation. Niv 02 : auditoires + bibliothèque. Niv 03 : réception/sécurité/IT/FM/admin, services étudiants, informatique. Niv 04 : bureaux IHEID (P1-401 à 459 — anthropologie/sociologie, économie internationale, droit international, direction), comptabilité, archives. Niv 05-07 : bureaux professeurs. Niv 08 : bureaux + détection incendie par aspiration (VESDA). Niv 09 : accès toiture."
        },
        {
          "zone": "P2",
          "desc": "IHEID + locataire privé. Niv 01 : local serveur (centrale mère P2N1), accès interpétale, local société de ménage TOPNET. Niv 02 : auditoires + accès bibliothèque. Niv 03 : cafétéria (sortie Chemin Eugène-Rigot), salle de classe X4. Niv 04 : cuisine, archives, salles de réunion, bureaux/cafétéria WBSCD (extinction CO2 cuisine) + « The FAB » (espace événementiel — voir annexe S16, réservations sur Google Sheet externe non accessible depuis cet outil). Niv 05-08 : bureaux IHEID et GICHD, salle de conférence GICHD (92m²/32p). Niv 07 : comptabilité (P2N7). Toiture ~799m²."
        },
        {
          "zone": "P3",
          "desc": "IHEID + locataires privés. Entresol : vide au-dessus de la bibliothèque. Niv 01-03 : IHEID — salles polyvalentes/exposition, restaurant-cuisine (coupure climatisation dédiée + extinction CO2), bibliothèque, salles de classe. Niv 04 : PRIVÉ — Peace Dividend Initiative (Green Hydrogen Organisation/GH2, Simon Institute for Longterm Governance, Watch & Jewellery Initiative 2030, Principles for Peace Foundation). Niv 05 : IHEID (Hirschman Centre on Democracy, Gender Center). Niv 06-08 : PRIVÉ — GICHD (3 unités)."
        },
        {
          "zone": "P4",
          "desc": "IHEID + GCSP (privé). Entresol : parking couvert ~1'257m² (19 places n°16-34). Niv 01 : IHEID — groupe électrogène diesel, transformateur, chaufferie (extinction CO2 restaurant P3/P4). Niv 02 : IHEID — accès Chemin Eugène-Rigot, vanne sprinkler, parking. Niv 03-07 : PRIVÉ — GCSP (Geneva Centre for Security Policy), sous-espaces nommés « Discover », « Engage », « Explore », « Shape », « The Creative Spark », salle étudiants IHEID (124m²), réception GCSP. Niv 08/Toiture : locaux techniques/ventilation."
        },
        {
          "zone": "P5",
          "desc": "IHEID + locataires privés (DCAF notamment). Niv 01 : IHEID — parking souterrain (SS2 ~973m², SS1 ~1'053m²) + vestiaire. Niv 02 : IHEID — réception/entrée, centre de conférence (salle de réunion 288m²). Niv 03 : PRIVÉ — DCAF + EOM + SAS ; bibliothèque, zone d'attente côté IHEID. Niv 04 : PRIVÉ — Interpeace ; local polyvalent 287m², porte à contrôle d'accès Kaba côté IHEID. Niv 05-09 : PRIVÉ — DCAF (bureaux 2.BU.01-16 et suivants), salles de conférence, réception. Datacenter DC1.13 en P5N1 (voir accès GCSP ci-dessous)."
        },
        {
          "zone": "P6",
          "desc": "IHEID + DCAF (privé) + NOVAE (privé). Bâtiment de forme allongée (distinct des 5 autres). Niv 01 : IHEID — parking souterrain SS1 (~730m², sprinkler) + caves/stockage SS2. Niv 02 : IHEID — archives ; salles de réunion, WC P5/P6, robinet incendie armé RI 6A. Niv 03 : PRIVÉ — DCAF. Niv 04 : INOCCUPÉ (confirmé par le plan d'occupation du 31.01.2024 — à revérifier si périmé). Niv 05-07 : PRIVÉ — DCAF (bureaux 2.BU/3.BU/4.BU-xx, direction). Niv 08/Superstructure : PRIVÉ — NOVAE (Restaurant de la Paix, accès toiture/terrasse) + local « BAR »."
        },
        {
          "zone": "Centrales mères",
          "desc": "Centrale mère P2N1 (accès 3ème porte) et centrale mère P5N1 (1er couloir à droite en entrant) — voir guide photographique pour l'itinéraire précis."
        },
        {
          "zone": "Monoblocs sous-sol",
          "desc": "Monobloc P1 sous-sol, monobloc sous-sol P3, monobloc sous-sol P4 — itinéraires d'accès détaillés dans le guide « Installations techniques » (portes vitrées/grises comme repères)."
        },
        {
          "zone": "Accès sprinklers",
          "desc": "Vannes sprinkler P1-P4 accessibles en entrant par P4 ; vannes P5-P6 par un accès séparé (prendre immédiatement à droite après la porte)."
        },
        {
          "zone": "Point de rassemblement",
          "desc": "Extérieur du campus — itinéraire fléché dans le guide technique, à confirmer physiquement lors de la prise de service."
        }
      ],
      "rondes": "Fréquence non précisée dans les documents reçus pour ce site — appliquer la fréquence standard RDZ (à confirmer avec le superviseur) en couvrant les 6 bâtiments Pétale, les parkings souterrains et les issues de secours. Vérifier à chaque ronde : fermeture des accès, absence de stationnement sauvage sur voies pompiers, état des extincteurs/RIA, propreté et sécurité des parkings souterrains. — RONDE DE FERMETURE MDP (annexe S07, 7 pointeaux) : P1 Départ (fermer salle S5, éteindre lumières/ordinateur) → Cafétéria (fermer la porte, rentrer les parasols) → Parking/Sprinkler (entrer dans le parking, contrôler toutes les portes, descendre au bas de l'escalier Sprinkler) → parking N1 (sortir via N1 puis via P4) → parking N2/porte coupe-feu (fermer les salles S1 à S4, fermer la porte coupe-feu) → Interpétale/Auditorium (descendre les escaliers, fermer les salles S7 à S9, fermer l'auditorium) → Arrivée/parking N1 (sortie). ⚠️ Le document source contient une incohérence de numérotation des pointeaux entre la séquence écrite (page 3) et les pages photo (pages 4-5) — l'ordre des lieux ci-dessus est fiable, mais les numéros de pointeaux affichés sur les bornes physiques peuvent ne pas correspondre exactement ; à faire vérifier/corriger auprès du client. — FERMETURE SALLES DE COURS (P1/P2) et AUDITORIUMS (annexe S08) : salles de cours — éteindre la vidéoprojection via la tablette murale/bureau (coche ✓), éteindre les lumières (interrupteur variable selon la salle : coin du bureau ou mur), verrouiller les portes. Auditorium Ivan Pictet — si lumières allumées, entrer dans la régie AV (petite salle immédiatement à droite en entrant), appuyer sur l'icône ampoule éteinte en bas à gauche de l'écran de contrôle. Auditorium 2 — tablette noire sur le pupitre blanc au fond de la salle, contrôle lumières + vidéoprojection. — RONDE BIBLIOTHÈQUE (annexe S09, bibliothèque Kathryn et Shelby Cullom Davis) : parcours fléché sur les 2 niveaux (plan disponible), vérifier systématiquement toutes les issues de secours, tous les extincteurs, tous les sanitaires. — MESSAGE DE FERMETURE BIBLIOTHÈQUE (annexe S10, à annoncer 15 min avant fermeture) : « Madame, Monsieur, nous vous informons que la bibliothèque va fermer ses portes dans 15 minutes. Nous vous prions de vous diriger vers la porte de sortie. Si vous avez des documents à emprunter, veuillez le faire dès maintenant. Nous vous remercions de votre attention et vous souhaitons une bonne soirée. » (+ version anglaise disponible).",
      "contacts": [
        {
          "nom": "M. De Zordi",
          "role": "Directeur RDZ",
          "tel": "+41 76 634 17 92"
        },
        {
          "nom": "M. Barla",
          "role": "Responsable sécurité & incendie",
          "tel": "+41 22 908 59 63"
        },
        {
          "nom": "M. Barla",
          "role": "Responsable sécurité & incendie — GSM urgence",
          "tel": "+41 77 814 23 39"
        },
        {
          "nom": "M. Verdon",
          "role": "Responsable technique REGM (uniquement, précisé par le client le 27.08.2026 — sa pertinence comme contact pour ce site voisin reste à reconfirmer)",
          "tel": "+41 76 548 48 48"
        },
        {
          "nom": "M. Alexandre Demonte",
          "role": "IHEID — responsable sécurité / escalade technique (portes automatiques, interdictions de site)",
          "tel": "+41 79 157 77 39"
        },
        {
          "nom": "M. Johan den Arend",
          "role": "IHEID — Responsable IT (accès datacenters MDP hors heures de bureau)",
          "tel": "+41 22 908 57 69"
        },
        {
          "nom": "Police Municipale",
          "role": "Dim-mer 6h-minuit / Jeu-sam 6h-3h",
          "tel": "+41 22 418 22 22"
        },
        {
          "nom": "Pompiers",
          "role": "Urgence incendie",
          "tel": "118"
        },
        {
          "nom": "Police",
          "role": "Urgence",
          "tel": "117"
        }
      ],
      "astreinte": "+41 79 339 13 41 (astreinte RDZ 24h/7j/365j — natel dédié). Personnes d'astreinte RDZ pour l'IHEID : Lucas Gimenez (lun-ven), Laurent Heinrich (week-end/jours fériés), Rodolphe De Zordi (en cas d'absence des autres). Correction (27.08.2026) : le numéro +41 79 749 35 36 précédemment indiqué ici est en réalité le natel de l'agent MDP (matériel de site), pas l'astreinte RDZ.",
      "consignes": "ALARME INCENDIE : intervention sur appel du client ou de CERTAS — prise d'info TUS/CERTAS, levée de doute, réarmement ou appel des secours (118), accueil des secours, guidage de l'évacuation vers le point de rassemblement. Centrale Siemens FS20/FC20x0 : même fonctionnement que MDE (arrêt signaux sonores + code à 4 chiffres, identification de la zone, vérification sur place, déclencheur manuel si feu confirmé, réarmement si alarme bénigne). Une zone mise hors service ne génère plus d'alarme : à réserver aux cas nécessaires et remettre en service dès que possible. Accès technique (sprinklers, monoblocs, centrales mères) : nécessite le badge Full Access + le Pass Général — voir zoning ci-dessus pour les itinéraires. PERMIS DE FEU pour tout travail par point chaud : même procédure que MDE (formulaire à signer par l'entreprise exécutante avant travaux, caches de protection sur les détecteurs concernés, désactivation de zone si nécessaire) — les documents spécifiques « Notice/Formulaire Permis de feu » n'ont pas été retrouvés dans ce lot, se référer à la fiche MDE en cas de doute. — ACCÈS DATACENTERS GCSP HORS HEURES DE BUREAU (annexe S13, racks DC1.13 en P5N1 et DC2.9 en P2N1, clé + pass dans le coffre sécurité MDP) : règle impérative « aucune ouverture sans présence et vérification d'identité ». GCSP appelle la sécurité par téléphone ; l'agent confirme l'identité de l'appelant, le motif et la durée estimée. Sur place : une des personnes GCSP autorisées doit être physiquement présente (liste fermée — Pascal Siegel, Andrew Landow, Olivier Gardet, Christian Palazzolo) ; contrôler une pièce d'identité officielle (carte d'identité ou passeport) avant toute ouverture ; l'agent ouvre le datacenter puis le rack indiqué, reste présent pendant toute l'intervention, puis referme et vérifie visuellement la fermeture, remet les clés au coffre et note l'heure de fin en main courante. — FILTRAGE BIBLIOTHÈQUE EN PÉRIODE D'EXAMENS (annexe S12) : poste tenu à l'entrée principale aux horaires 09h30-11h30 / 13h30-15h00 / 16h00-18h00 (présence aléatoire hors de ces créneaux selon affluence). Jusqu'à 170 personnes : accès ouvert à tous les étudiants ; au-delà de 170 : accès réservé IHEID uniquement (capacité max. 200) ; toujours autorisés quel que soit le comptage : membres IHEID, organisations locataires (ex. DCAF), professeurs, dépôt/retrait d'ouvrages. Gestion des places apparemment inoccupées : poser un talon de contrôle, si personne ne revient après 1h — étudiant IHEID : rappel courtois ; non-IHEID : rappel + rapport d'incident (photo de la carte d'étudiant si possible). Comptage systématique par catégorie (IHEID/UNIGE/HES/Autres) et rapport via GuardTek « Filtrage Bibliothèque IHEID », incluant le nombre d'évictions et de refus d'accès — feuille de comptage horaire à disposition (annexe S12 bis, formulaire vierge à remplir). — RÉCEPTION : OBJETS TROUVÉS ET FAQ (annexe S14) : objet réclamé — clé rose dans le 2e tiroir du bureau de gauche (pot en verre), chercher dans les armoires, restituer l'objet ; les réceptionnistes ne contrôlent PAS l'identité, mais l'agent de sécurité DOIT systématiquement le faire. Objet trouvé/apporté — noter sur le registre : objet, date, lieu de découverte. FAQ visiteurs : salle de classe → 1ère page du classeur à l'accueil (côté droit) ; bibliothèque → hall P2, descendre les escaliers puis à gauche ; auditorium → hall P2, descendre les escaliers, tout droit ; services étudiants/carrière → P1, en face de la réception ; comptabilité → P2N7 ; IT/technique/autre → orienter vers le FM. — VÉHICULES ÉLECTRIQUES EN CHARGE NON AUTORISÉE (annexe S15, parking) : en cas de branchement non autorisé (voiture, vélo, trottinette électrique) sur une prise non prévue à cet effet — prendre un avis/affichette au poste de sécurité MDP (bac noir à gauche), débrancher uniquement la fiche côté mur (sans aller plus loin), poser l'avis sur le pare-brise du véhicule, rédiger un rapport via GuardTek. — URGENCE HÉMOPHILIE (annexe S04, protocole générique, non lié à une personne nommée) : signes d'alerte — douleur/gonflement articulaire soudain, hématome important ou évolutif, saignement externe persistant, céphalée intense/vomissements/troubles visuels ou d'élocution, douleurs abdominales, sang dans les urines/selles, difficultés respiratoires ou gonflement cou/bouche. Action immédiate : mettre la personne au repos en sécurité, compression directe sur saignement externe, froid + immobilisation sur articulation gonflée, ne JAMAIS donner d'aspirine/ibuprofène/anti-inflammatoires, informer immédiatement le responsable hiérarchique. Appel impératif des secours (144/112) si : saignement persistant malgré compression, traumatisme tête/cou/thorax/abdomen (même léger), malaise/perte de connaissance/convulsions, difficulté respiratoire ou hémorragie interne suspectée. Informer les secours : préciser que la personne est hémophile, type de saignement observé, antécédents connus si disponibles, heure de début des symptômes. Après intervention : rapport détaillé (lieu, heure, symptômes, actions, intervenants) transmis au responsable hiérarchique et au service médical compétent.",
      "particularites": "Points à vérifier / non confirmés dans les documents reçus : aucun document ne mentionne littéralement l'acronyme « MDP » (déduction faite à partir des plans « P1-P6 » et de la mention « Chemin Eugène-Rigot » — cohérent avec le campus Maison de la Paix de l'IHEID) ; aucun numéro d'adresse précis, aucune fréquence de ronde officielle (hors annexe S07), aucun numéro d'astreinte ou de code de centrale spécifique à ce site n'apparaissait dans ce lot de documents — clarifié depuis par le client (27.08.2026) : voir Astreinte téléphonique RDZ ci-dessus (+41 79 339 13 41) ; le numéro +41 79 749 35 36 est le natel de service de l'agent MDP (matériel de site), pas une ligne d'astreinte RDZ. Le PROM 320 984 provient des données d'origine (logigramme) et n'a pas été reconfirmé dans les nouveaux documents. Plusieurs documents référencés par le client sont des liens externes non accessibles depuis cet outil (SharePoint « Manipulation Centrale SIEMENS », « Redémarrage AML », « Ouverture manuelle des barrières de parking » ; Google Sheets « Liste EPI IHEID » et « Event La Fab ») — à exporter en PDF/téléchargement direct et transmettre si leur contenu doit être intégré. Un document annoncé (« S17 Affiche Véhicules Électriques ») n'est jamais arrivé dans l'espace de dépôt malgré sa mention dans la liste de fichiers — à renvoyer si nécessaire. La numérotation des annexes T (T.02 à T.06 dans le contenu des documents) ne correspond pas toujours au numéro utilisé dans le nom de fichier fourni par le client (ex. fichier « T04_Barriere_Parking » contient en réalité l'annexe « T.05 ») — signalé pour éviter toute confusion de référence. Campus partagé par plusieurs organisations locataires (GICHD, GCSP, DCAF, WBSCD, Peace Dividend Initiative/GH2, Interpeace, NOVAE) : ne pas intervenir dans leurs bureaux/locaux privés sauf porte forcée ou doute fondé — voir plan d'occupation par bâtiment (annexe S06, 31.01.2024, à revérifier si périmé). Note sur une donnée volontairement NON intégrée : l'annexe S05 « Protocole Épilepsie » décrit un protocole médical personnalisé et nominatif pour une étudiante identifiable (traitement, dosage, contact personnel) — ce type de donnée médicale sensible sur une personne privée identifiable n'a pas été reproduit dans cet outil à usage large ; seule son existence est signalée. Si les agents de terrain doivent y avoir accès, ce document devrait rester sur un support séparé et restreint (dossier confidentiel RH/médical), pas dans ce module de consultation générale. En cas de besoin réel, contacter la sécurité campus 24/7 (+41 22 908 59 11) ou le service Bien-être (+41 22 908 43 84 / +41 22 908 57 45).",
      "annexes": [
        "Mode d'emploi Siemens FS20/FC20x0 (générique, éd. 08.2022)",
        "Plans SIEMENS Pétale 1 à 6 — dossier 71015443",
        "Plan MDP — guide « Installations techniques »",
        "Liste EPI IHEID (lien externe non intégré)",
        "Manipulation Centrale SIEMENS (lien externe non intégré)",
        "S01 Poignées avec Exit Controler",
        "S02 Bouton Poussoir",
        "S04 Urgence Hémophilie",
        "S05 Protocole Épilepsie (non intégré — donnée médicale nominative, voir Particularités)",
        "S06 Plan d'occupation MDP (31.01.2024)",
        "S07 MDP Fermeture",
        "S08 Fermeture Salles Auditoriums",
        "S09 Ronde Bibliothèque",
        "S10 Message Fermeture Bibliothèque",
        "S11 Contacts Étudiant Bibliothèque",
        "S12 Comptages Bibliothèque + Filtrage Bibliothèque RDZ",
        "S13 Accès GCSP (Datacenters)",
        "S14 Procédure Réception",
        "S15 Parking VE",
        "S16 Event La Fab (lien externe non intégré)",
        "T01 Asservissement MDP (réarmement monoblocs/ascenseurs)",
        "T02 Portes Automatiques P1/P2",
        "T03 Grille Parking",
        "T04/T05 Barrière Parking",
        "T05/T06 Piles KABA/DORMAKABA"
      ],
      "groupeInterdictions": "IHEID",
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Ce que l'agent doit savoir avant d'arriver",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Code PROM",
                  "v": "320 984",
                  "code": true
                },
                {
                  "k": "Type d'alarme",
                  "v": "Incendie"
                },
                {
                  "k": "Client",
                  "v": "IHEID — Maison de la Paix, campus principal"
                },
                {
                  "k": "Configuration",
                  "v": "6 bâtiments « Pétale » P1 à P6"
                },
                {
                  "k": "Occupation",
                  "v": "Campus tertiaire diurne : bureaux et salles de cours de l'IHEID et d'organisations partenaires. Forte occupation en semaine, très faible le soir et le week-end."
                }
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller",
              "items": [
                {
                  "label": "Destination approximative — campus, numéro de rue non confirmé",
                  "dest": "Maison de la Paix, Chemin Eugène-Rigot, Genève"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Locaux privés",
              "txt": "Le campus est partagé avec le GICHD, le GCSP, le DCAF, le WBSCD, Peace Dividend Initiative, Interpeace et NOVAE. ##Ne pas intervenir dans leurs bureaux## sauf porte forcée ou doute fondé."
            },
            {
              "t": "table",
              "titre": "Les six pétales",
              "items": [
                {
                  "z": "P1",
                  "d": "100% IHEID. Auditoires (dont Ivan Pictet), bibliothèque, réception/sécurité/IT/FM au niveau 03, bureaux aux niveaux 04 à 08, détection par aspiration VESDA au 08, accès toiture au 09."
                },
                {
                  "z": "P2",
                  "d": "IHEID + locataire privé. Centrale mère en P2N1, auditoires, cafétéria (sortie Chemin Eugène-Rigot), cuisine avec extinction CO2, « The FAB », bureaux GICHD, comptabilité en P2N7."
                },
                {
                  "z": "P3",
                  "d": "IHEID + privés. Restaurant-cuisine (extinction CO2), bibliothèque, salles de classe. Niveau 04 et niveaux 06-08 privés (GICHD et autres)."
                },
                {
                  "z": "P4",
                  "d": "IHEID + GCSP. Entresol : parking couvert, 19 places n°16-34. Groupe électrogène, transformateur, chaufferie, vanne sprinkler. Niveaux 03-07 privés (GCSP)."
                },
                {
                  "z": "P5",
                  "d": "IHEID + privés. Parkings SS1 et SS2, vestiaire, réception et centre de conférence. Niveaux 03 à 09 privés (DCAF, Interpeace). Datacenter DC1.13 en P5N1."
                },
                {
                  "z": "P6",
                  "d": "Bâtiment allongé, distinct des cinq autres. Parking SS1 et caves, archives. Niveaux privés DCAF, et NOVAE (Restaurant de la Paix) en superstructure."
                },
                {
                  "z": "Centrales mères",
                  "d": "P2N1 — 3e porte. P5N1 — 1er couloir à droite en entrant."
                },
                {
                  "z": "Point de rassemblement",
                  "d": "Extérieur du campus, itinéraire fléché — à confirmer physiquement à la prise de service."
                }
              ]
            },
            {
              "t": "manque",
              "txt": "Numéro de rue exact du campus, et fréquence officielle des rondes : absents des documents reçus."
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "PROM, centrale Siemens, niveaux d'accès",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "PROM incendie",
                  "v": "320 984",
                  "code": true
                },
                {
                  "k": "Identification Certas",
                  "v": "Complément à 30 — usage IHEID, à reconfirmer pour ce site"
                },
                {
                  "k": "Centrale",
                  "v": "Siemens FS20, contrôleurs FC20x0, terminal FT2040 — même système qu'à MDE"
                },
                {
                  "k": "Code sécurité — niveau agent",
                  "v": "~~7200~~",
                  "code": true
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Niveaux d'accès de la centrale",
              "items": [
                "L'accès se fait par un ##code utilisateur à 4 chiffres##.",
                "##Niveau 1## — tout le monde : arrêt du buzzer, défilement.",
                "##Niveau 2.1## — utilisateur restreint, par exemple le concierge.",
                "##Niveau 2.2## — utilisateur élargi, chargé de sécurité.",
                "##Niveau 3## — maintenance Siemens."
              ]
            }
          ]
        },
        {
          "titre": "Points d'accès",
          "resume": "Comment entrer et ouvrir",
          "blocs": [
            {
              "t": "liste",
              "items": [
                "##Locaux techniques, sprinklers, monoblocs, centrales mères## — badge ##Full Access## et ##Pass Général## obligatoires tous les deux.",
                "##Centrales mères## — P2N1, 3e porte. P5N1, 1er couloir à droite en entrant.",
                "##Vannes sprinkler## — P1 à P4 en entrant par le P4. P5 et P6 par un accès séparé, immédiatement à droite après la porte.",
                "##Monoblocs## — sous-sols P1, P3 et P4. Itinéraires détaillés dans le guide « Installations techniques », repères par portes vitrées ou grises."
              ]
            },
            {
              "t": "liste",
              "titre": "Serrures KABA et DORMAKABA",
              "items": [
                "Matériel de remplacement des piles au ##Service Desk P1##, armoire dédiée : clé de démontage KABA ou aimant DORMAKABA, piles LR03/AAA.",
                "##KABA## — clé de démontage sur le côté de la poignée, retirer poignée puis cache.",
                "##DORMAKABA## — aimant au-dessus du boîtier, soulever pour accéder aux piles."
              ]
            },
            {
              "t": "stop",
              "lab": "Dix secondes maximum",
              "txt": "Le changement de piles doit être fait en ##moins de 10 secondes##. Au-delà, la serrure risque de se déprogrammer — dans ce cas, contacter le service FM immédiatement."
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Trousseau MDP — inventaire Clefs IS / RDZ",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Coffre service desk P1",
                  "v": "Clé SI (réarmement des ascenseurs)"
                },
                {
                  "k": "Coffre derrière la réception",
                  "v": "Clé du boîtier P2 intérieur, Pass Général pour les tableaux électriques"
                },
                {
                  "k": "Coffre du P1",
                  "v": "Clés de la barrière de parking"
                },
                {
                  "k": "Coffre sécurité MDP",
                  "v": "Clé et pass des datacenters GCSP"
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Composition du trousseau",
              "items": [
                "##Pass général## — ~~SZ9303~~.",
                "##Clé SI## — ~~MH016845~~ — réarmement des ascenseurs après alarme.",
                "##Barrières de parking## — ~~n° 005~~.",
                "##Boîtier des portes automatiques du P2, intérieur## — ~~U15GD~~. Attention : la clé du P2 intérieur n'est pas celle du P2 extérieur.",
                "##Local SIG au P3N1## — pas de référence.",
                "##Casier des vestiaires du parking## — ~~6J3626~~.",
                "##Boîtiers verts du restaurant au P5## — ~~AS168963~~, correspondance encore à vérifier."
              ]
            },
            {
              "t": "manque",
              "txt": "Trois clés du trousseau restent non identifiées, y compris dans l'inventaire officiel : ##ABU 14##, ##N1## et ##BU6906 0000##. Rangement dans le coffre MDP, usage inconnu."
            },
            {
              "t": "liste",
              "titre": "S'il manque une clé",
              "items": [
                "##Pas d'urgence## (aucun problème de fermeture du site) — rapport et message à Laurent et Lucas.",
                "##Urgence## (site non hermétique, risque pour le client, nécessité d'agir sur le moment) — appel direct à Laurent ou Lucas."
              ]
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au technique",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "À Genève, un téléphone accroche souvent une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu confirmé, doute non levé — réseau suisse uniquement",
                  "num": "118"
                },
                {
                  "nom": "Police",
                  "role": "Urgence — réseau suisse uniquement",
                  "num": "117"
                },
                {
                  "nom": "Urgences sanitaires",
                  "role": "Malaise, blessure, hémorragie — réseau suisse uniquement",
                  "num": "144"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Centrale, terrain et astreinte",
              "items": [
                {
                  "nom": "Certas",
                  "role": "MDP n° 320.984",
                  "num": "+41 844 800 811"
                },
                {
                  "nom": "Natel de service MDP",
                  "role": "Téléphone du site, matériel d'agent. Ce n'est PAS l'astreinte RDZ.",
                  "num": "+41 79 749 35 36"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Ligne hiérarchique. Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence).",
                  "num": "+41 79 339 13 41"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Client et hiérarchie",
              "items": [
                {
                  "nom": "M. Barla",
                  "role": "Responsable sécurité et incendie IHEID",
                  "num": "+41 22 908 59 63"
                },
                {
                  "nom": "M. Barla",
                  "role": "Second numéro, GSM urgence",
                  "num": "+41 77 814 23 39"
                },
                {
                  "nom": "M. Alexandre Demonte",
                  "role": "IHEID — escalade technique : portes automatiques, interdictions de site",
                  "num": "+41 79 157 77 39"
                },
                {
                  "nom": "M. De Zordi",
                  "role": "Directeur RDZ",
                  "num": "+41 76 634 17 92"
                },
                {
                  "nom": "Sécurité campus IHEID",
                  "role": "Permanence 24h/7j",
                  "num": "+41 22 908 59 11"
                }
              ]
            },
            {
              "t": "sous",
              "titre": "Autres contacts",
              "blocs": [
                {
                  "t": "tel",
                  "items": [
                    {
                      "nom": "M. Johan den Arend",
                      "role": "IHEID — responsable IT, accès aux datacenters hors heures de bureau",
                      "num": "+41 22 908 57 69"
                    },
                    {
                      "nom": "Police Municipale",
                      "role": "Dim-mer 6h-minuit · Jeu-sam 6h-3h",
                      "num": "+41 22 418 22 22"
                    },
                    {
                      "nom": "Service Bien-être IHEID",
                      "role": "Suivi d'une personne en difficulté",
                      "num": "+41 22 908 43 84"
                    },
                    {
                      "nom": "M. Verdon",
                      "role": "Responsable technique REGM. Le client a précisé le 27.08.2026 qu'il ne couvre que REGM : sa pertinence pour MDP reste à reconfirmer.",
                      "num": "+41 76 548 48 48"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Alarme, monoblocs, portes automatiques, parking",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Où sont les centrales",
                  "v": "Centrale mère P2N1 (3e porte) et centrale mère P5N1 (1er couloir à droite). Badge Full Access et Pass Général nécessaires."
                }
              ]
            },
            {
              "t": "num",
              "titre": "Alarme incendie — les premiers gestes",
              "court": "Alarme feu",
              "items": [
                {
                  "a": "Prendre l'information",
                  "d": "L'intervention part d'un appel du client ou de Certas. Prise d'info auprès de TUS ou de Certas."
                },
                {
                  "a": "À la centrale : arrêt des signaux sonores",
                  "d": "Puis saisir le code utilisateur à 4 chiffres."
                },
                {
                  "a": "Identifier la zone",
                  "d": "Lire à l'écran le bâtiment et le niveau concernés."
                },
                {
                  "a": "Levée de doute sur place",
                  "d": "Se rendre sur zone, puis appliquer l'un des trois cas ci-dessous."
                }
              ]
            },
            {
              "t": "choix",
              "titre": "Sur zone, selon ce qui est constaté",
              "items": [
                {
                  "couleur": "vert",
                  "titre": "Alarme bénigne",
                  "txt": "Réarmer la centrale, puis remettre les asservissements en fonction et rédiger le rapport."
                },
                {
                  "couleur": "orange",
                  "titre": "Doute non levé",
                  "txt": "Ne pas réarmer. Appeler le ##118## et faire intervenir les secours."
                },
                {
                  "couleur": "rouge",
                  "titre": "Feu confirmé",
                  "txt": "Actionner un ##déclencheur manuel##, appeler le ##118##, accueillir et guider les secours, diriger l'évacuation vers le point de rassemblement."
                }
              ]
            },
            {
              "t": "num",
              "titre": "Réarmement des monoblocs et des ascenseurs (annexe T.01)",
              "court": "Asservissements",
              "items": [
                {
                  "a": "Repérer le groupe concerné",
                  "d": "##Groupe 1## — pétales 1 à 4.\n##Groupe 2## — pétales 5 et 6, plus le parking."
                },
                {
                  "a": "Quittancer chaque monobloc",
                  "d": "Sur le boîtier ~~MCR-TS42~~, appuyer ##5 secondes## sur le voyant de quittance rouge."
                },
                {
                  "a": "Contrôler le variateur ABB",
                  "d": "La fréquence doit redémarrer, aux environs de 00.0 Hz."
                },
                {
                  "a": "Rouvrir la porte feu automatique de l'interpétale",
                  "d": "Depuis l'escalier du hall Kögler — la pousser suffit à la réenclencher."
                },
                {
                  "a": "Réarmer les ascenseurs",
                  "d": "Après une alarme, ils restent bloqués porte ouverte au niveau des sorties. Prendre la ##clé SI## au coffre du service desk et tourner d'un quart de tour jusqu'à fermeture de la porte."
                }
              ]
            },
            {
              "t": "num",
              "titre": "Portes automatiques P1 ou P2 bloquées ouvertes (annexe T.02)",
              "court": "Portes auto",
              "items": [
                {
                  "a": "Prévenir le superviseur RDZ",
                  "d": "##Avant toute manipulation##, sans exception."
                },
                {
                  "a": "Contrôler le boîtier de commande",
                  "d": "##P1## — derrière la réception, vers la centrale incendie.\n##P2## — à gauche de l'entrée P2, sous les extincteurs ; la clé est dans le coffre derrière la réception."
                },
                {
                  "a": "Vérifier le mode",
                  "d": "Le boîtier doit être sur ##AU## (automatique). Sinon, tourner la clé pour resélectionner AU."
                },
                {
                  "a": "Si le défaut persiste, réinitialiser au tableau électrique",
                  "d": "Prendre le pass général au coffre réception.\n##P1## — disjoncteur ~~245F3~~, local technique P1N3, entre l'IT Helpdesk et les ascenseurs.\n##P2## — disjoncteur ~~244F1~~, local technique P2N3, à droite de l'ascenseur P2."
                },
                {
                  "a": "Séquence de réinitialisation",
                  "d": "Appuyer sur TEST, attendre 1 minute sans passage, remettre en marche, attendre 10 minutes puis recontrôler."
                },
                {
                  "a": "Si rien n'y fait",
                  "d": "Contacter M. Alexandre Demonte au +41 79 157 77 39."
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Grille de parking (annexe T.03)",
              "items": [
                "Fermeture par le boîtier du ##local sprinkler P6##, au fond, en haut à droite.",
                "Appuyer sur ##MENU## puis ##2 fois sur A##.",
                "Une main et l'inscription ##OFF## confirment la fermeture."
              ]
            },
            {
              "t": "liste",
              "titre": "Barrière de parking — trois méthodes",
              "items": [
                "##Boîtier mural## à gauche de la sortie parking, bouton ##ROUGE##. Pour la bloquer ouverte : bouton rouge, puis débrancher l'alimentation du panneau au-dessus, prise bleue.",
                "##Clés## du coffre du P1 : côté barrière, tourner la clé à gauche sur ##MANUAL## et soulever à la main.",
                "##À l'arrière de la barrière## : ouvrir le boîtier avec la clé et appuyer sur le bouton ##VERT##."
              ]
            },
            {
              "t": "stop",
              "txt": "Une zone mise hors service ne génère plus aucune alarme. À réserver aux cas nécessaires, avec surveillance humaine, et à remettre en service dès que possible."
            },
            {
              "t": "liste",
              "titre": "Permis de feu",
              "items": [
                "Obligatoire pour tout travail par point chaud.",
                "Formulaire signé par l'entreprise exécutante ##avant## le début des travaux.",
                "Caches de protection sur les détecteurs, désactivation de zone si nécessaire.",
                "Les formulaires propres à MDP n'ont pas été retrouvés : se référer à la fiche MDE en cas de doute."
              ]
            },
            {
              "t": "manque",
              "txt": "Procédure d'évacuation propre à MDP et emplacement exact du point de rassemblement : à confirmer physiquement et à documenter."
            }
          ]
        }
      ],
      "blocsRondes": [
        {
          "t": "manque",
          "txt": "Fréquence officielle des rondes non précisée pour ce site : appliquer la fréquence standard RDZ, à confirmer avec le superviseur."
        },
        {
          "t": "liste",
          "titre": "À couvrir à chaque ronde",
          "items": [
            "Les 6 bâtiments Pétale, les parkings souterrains et les issues de secours.",
            "Fermeture des accès, absence de stationnement sauvage sur les voies pompiers.",
            "État des extincteurs et des RIA, propreté et sécurité des parkings."
          ]
        },
        {
          "t": "num",
          "titre": "Ronde de fermeture — 7 pointeaux (annexe S07)",
          "items": [
            {
              "a": "P1 Départ",
              "d": "Fermer la salle S5, éteindre les lumières et l'ordinateur."
            },
            {
              "a": "Cafétéria",
              "d": "Fermer la porte, rentrer les parasols."
            },
            {
              "a": "Parking / Sprinkler",
              "d": "Entrer dans le parking, contrôler toutes les portes, descendre au bas de l'escalier Sprinkler."
            },
            {
              "a": "Parking N1",
              "d": "Sortir via N1 puis via P4."
            },
            {
              "a": "Parking N2 et porte coupe-feu",
              "d": "Fermer les salles S1 à S4, puis la porte coupe-feu."
            },
            {
              "a": "Interpétale et auditorium",
              "d": "Descendre les escaliers, fermer les salles S7 à S9 et l'auditorium."
            },
            {
              "a": "Arrivée parking N1",
              "d": "Sortie."
            }
          ]
        },
        {
          "t": "stop",
          "lab": "Numérotation des pointeaux",
          "txt": "Le document source est incohérent entre la séquence écrite et les pages photo. ##L'ordre des lieux ci-dessus est fiable##, mais les numéros affichés sur les bornes physiques peuvent ne pas correspondre. À faire corriger auprès du client."
        },
        {
          "t": "liste",
          "titre": "Fermeture des salles et auditoriums (annexe S08)",
          "items": [
            "##Salles de cours## — éteindre la vidéoprojection via la tablette murale ou de bureau (coche ✓), éteindre les lumières, verrouiller les portes.",
            "##Auditorium Ivan Pictet## — si les lumières sont allumées, entrer dans la régie AV, petite salle immédiatement à droite en entrant, et appuyer sur l'icône ampoule éteinte en bas à gauche de l'écran.",
            "##Auditorium 2## — tablette noire sur le pupitre blanc au fond de la salle, contrôle des lumières et de la vidéoprojection."
          ]
        },
        {
          "t": "liste",
          "titre": "Bibliothèque (annexes S09 et S10)",
          "items": [
            "Parcours fléché sur les 2 niveaux, plan disponible. Vérifier toutes les issues de secours, tous les extincteurs, tous les sanitaires.",
            "##Message de fermeture##, à annoncer 15 minutes avant : informer que la bibliothèque ferme dans 15 minutes, inviter à se diriger vers la sortie et à emprunter les documents dès maintenant. Version anglaise disponible."
          ]
        }
      ],
      "blocsNotes": [
        {
          "t": "liste",
          "titre": "Accès aux datacenters GCSP hors heures (annexe S13)",
          "items": [
            "Racks ##DC1.13## en P5N1 et ##DC2.9## en P2N1. Clé et pass au coffre sécurité MDP.",
            "##Règle impérative : aucune ouverture sans présence et vérification d'identité.##",
            "Le GCSP appelle la sécurité ; l'agent confirme l'identité de l'appelant, le motif et la durée estimée.",
            "Sur place, une des personnes autorisées doit être ##physiquement présente## — liste fermée : Pascal Siegel, Andrew Landow, Olivier Gardet, Christian Palazzolo.",
            "Contrôler une pièce d'identité officielle avant toute ouverture.",
            "L'agent ouvre, ##reste présent pendant toute l'intervention##, referme, vérifie visuellement, remet les clés au coffre et note l'heure de fin en main courante."
          ]
        },
        {
          "t": "liste",
          "titre": "Filtrage bibliothèque en période d'examens (annexe S12)",
          "items": [
            "Poste à l'entrée principale : 09h30-11h30, 13h30-15h00, 16h00-18h00. Présence aléatoire hors de ces créneaux selon l'affluence.",
            "##Jusqu'à 170 personnes## : accès ouvert à tous les étudiants. ##Au-delà de 170## : accès réservé à l'IHEID, capacité maximale 200.",
            "Toujours autorisés quel que soit le comptage : membres IHEID, organisations locataires, professeurs, dépôt ou retrait d'ouvrages.",
            "##Place inoccupée## : poser un talon de contrôle. Si personne ne revient après 1 heure — étudiant IHEID : rappel courtois ; non-IHEID : rappel et rapport d'incident.",
            "Comptage par catégorie (IHEID, UNIGE, HES, autres) et rapport GuardTek « Filtrage Bibliothèque IHEID », en indiquant évictions et refus d'accès."
          ]
        },
        {
          "t": "liste",
          "titre": "Réception et objets trouvés (annexe S14)",
          "items": [
            "##Objet réclamé## — clé rose dans le 2e tiroir du bureau de gauche, dans le pot en verre. Chercher dans les armoires, puis restituer.",
            "##Les réceptionnistes ne contrôlent pas l'identité : l'agent de sécurité doit systématiquement le faire.##",
            "##Objet trouvé## — noter au registre : objet, date, lieu de découverte.",
            "##Orientation des visiteurs## : salle de classe → 1re page du classeur d'accueil, côté droit · bibliothèque → hall P2, escaliers puis à gauche · auditorium → hall P2, escaliers, tout droit · services étudiants → P1, en face de la réception · comptabilité → P2N7 · technique → FM."
          ]
        },
        {
          "t": "liste",
          "titre": "Véhicules électriques en charge non autorisée (annexe S15)",
          "items": [
            "Prendre une affichette au poste de sécurité MDP, bac noir à gauche.",
            "##Débrancher uniquement la fiche côté mur##, sans aller plus loin.",
            "Poser l'avis sur le pare-brise, puis rapport GuardTek."
          ]
        },
        {
          "t": "liste",
          "titre": "Urgence hémophilie (annexe S04)",
          "items": [
            "##Signes d'alerte## — douleur ou gonflement articulaire soudain, hématome important, saignement persistant, céphalée intense avec vomissements ou troubles visuels, douleurs abdominales, sang dans les urines, gêne respiratoire ou gonflement du cou.",
            "##Gestes## — repos en sécurité, compression directe sur un saignement externe, froid et immobilisation d'une articulation gonflée.",
            "##Ne jamais donner## d'aspirine, d'ibuprofène ni d'anti-inflammatoire.",
            "##Appeler le 144 ou le 112## si : saignement persistant malgré compression, traumatisme à la tête, au cou, au thorax ou à l'abdomen même léger, malaise, perte de connaissance, convulsions, difficulté respiratoire.",
            "##Préciser aux secours## que la personne est hémophile, le type de saignement et l'heure de début.",
            "Rapport détaillé transmis au responsable hiérarchique après l'intervention."
          ]
        },
        {
          "t": "liste",
          "titre": "Tenue et stationnement",
          "items": [
            "Consignes générales RDZ. ##Discrétion## dans les zones bureaux et conférence occupées par du personnel d'organisations internationales.",
            "Stationnement : parking P4 (entresol, places 16-34), P5 (SS1/SS2) et P6 (SS1). Signaler tout véhicule sur un accès pompiers ou une voie d'évacuation."
          ]
        },
        {
          "t": "sous",
          "titre": "Réserves sur les données de cette fiche",
          "blocs": [
            {
              "t": "liste",
              "items": [
                "Aucun document ne mentionne littéralement l'acronyme « MDP » : déduction faite à partir des plans P1-P6 et du Chemin Eugène-Rigot.",
                "Le PROM ##320 984## provient du logigramme d'origine et n'a pas été reconfirmé dans les nouveaux documents.",
                "La numérotation des annexes T ne correspond pas toujours au nom de fichier fourni par le client — le fichier « T04 Barrière Parking » contient en réalité l'annexe T.05.",
                "Plusieurs documents sont des liens externes non intégrés : Manipulation Centrale SIEMENS, Redémarrage AML, Ouverture manuelle des barrières, Liste EPI IHEID, Event La Fab.",
                "L'affiche S17 « Véhicules Électriques » n'a jamais été transmise.",
                "Le plan d'occupation date du 31.01.2024 — à revérifier s'il est périmé.",
                "##Protocole épilepsie (annexe S05)## — volontairement non reproduit ici : il s'agit d'une donnée médicale nominative concernant une personne identifiable. Ce document doit rester sur un support restreint. En cas de besoin, sécurité campus +41 22 908 59 11 ou service Bien-être +41 22 908 43 84."
              ]
            }
          ]
        }
      ]
    },
    {
      "statut": "complet",
      "prom": "351 570",
      "client": "Moynier",
      "nomComplet": "IHEID — Villa Moynier",
      "types": [
        "Incendie"
      ],
      "adresse": "Rue de Lausanne 120B, 1202 Genève",
      "transmetteurs": [
        {
          "label": "Incendie Moynier",
          "code": "351 570"
        },
        {
          "label": "Toutes alarmes (TUS, mode direct 24/7)",
          "code": "Complément à 30"
        }
      ],
      "population": "Étudiants de toutes nationalités, professeurs, employés d'organisations internationales, direction IHEID et administration. Site en accès H24/7 — pas de fermeture du bâtiment.",
      "tenue": "Polo + veste sécurité, pantalon noir, chaussures noires — tenue obligatoire en tout temps. Interdit : fumer, appels personnels en public, familiarité avec les clients.",
      "stationnement": "Devant la villa Moynier en cas d'urgence uniquement ; sinon parking Perle du Lac ou Villa Barton. Respecter le code de la route en vigueur.",
      "acces": [
        "##Équipement à récupérer avant prise de poste## : trousseau de clés (pass bâtiment Moynier — à récupérer à la loge REGM), natel agent MDP +41 79 749 35 36 (téléphone de service du site MDP, disponible 24h/7j/365j — à ne pas confondre avec l'astreinte RDZ, voir ci-dessous), badge d'accès Kaba IHEID (zones sécurisées), lampe torche (EPI obligatoire pour les rondes nocturnes)."
      ],
      "manipulationBase": [
        "##Centrale incendie## au sous-sol — code d'accès ~~7100~~. Transmetteur incendie ~~351 570~~ en mode direct 24h/7j (Complément à 30).",
        "##Quittance des asservissements après alarme## : surpression, portes coupe-feu, ascenseurs, monoblocs."
      ],
      "zoning": [
        {
          "zone": "Sous-sol / centrale",
          "desc": "Centrale incendie (code 7100). Porte du couloir sous-sol donnant sur l'extérieur : vérifier systématiquement, souvent trouvée ouverte — fermer si nécessaire."
        },
        {
          "zone": "Terrasse côté lac",
          "desc": "Évacuation obligatoire en fin de soirée — en cas de refus, appeler la police municipale (022 418 22 22)."
        },
        {
          "zone": "Bâtiments Av. de Lausanne",
          "desc": "De part et d'autre du parking La Perle du Lac — contrôler les façades (graffitis, dégradations) lors des rondes."
        },
        {
          "zone": "Bureaux privés",
          "desc": "Ne pas entrer sans autorisation, sauf porte forcée ou doute fondé."
        },
        {
          "zone": "Abords / escaliers / terrasse",
          "desc": "Contrôle squat SDF lors des rondes (escaliers, terrasse côté lac, abords du bâtiment)."
        }
      ],
      "rondes": "1 ronde extérieure entre 20h et 23h + 1 ronde de contrôle après minuit (contrôle de politesse si de la lumière est encore allumée). À chaque ronde : issues de secours fermées/non obstruées avec panneaux lumineux OK, portes et fenêtres fermées, lumières éteintes, porte d'entrée principale fermée, porte du couloir sous-sol contrôlée (souvent ouverte), absence de squat SDF, façades des bâtiments Av. de Lausanne contrôlées (graffitis/dégradations), stationnement sauvage sur le parvis signalé, accès pompiers dégagé. Assistance aux personnes à mobilité réduite lors des évacuations.",
      "contacts": [
        {
          "nom": "M. De Zordi",
          "role": "Directeur RDZ",
          "tel": "+41 76 634 17 92"
        },
        {
          "nom": "M. Barla",
          "role": "Responsable sécurité & incendie",
          "tel": "+41 22 908 59 63"
        },
        {
          "nom": "M. Demonte",
          "role": "Directeur Service FM IHEID (sur accord RDZ)",
          "tel": "+41 22 908 44 40"
        },
        {
          "nom": "M. Demonte",
          "role": "Directeur Service FM IHEID — GSM (sur accord RDZ)",
          "tel": "+41 79 157 77 39"
        },
        {
          "nom": "M. Sicot David",
          "role": "Service FM — responsable technique (lun-ven 8h-17h)",
          "tel": "+41 79 544 70 74"
        },
        {
          "nom": "M. Labrevoir",
          "role": "Service FM",
          "tel": "+41 22 908 44 41"
        },
        {
          "nom": "Police Municipale",
          "role": "Dim-mer 6h-minuit / Jeu-sam 6h-3h",
          "tel": "+41 22 418 22 22"
        },
        {
          "nom": "Pompiers",
          "role": "Urgence incendie",
          "tel": "118"
        },
        {
          "nom": "Police",
          "role": "Urgence",
          "tel": "117"
        }
      ],
      "astreinte": "+41 79 339 13 41 (astreinte RDZ 24h/7j/365j — natel dédié). Personnes d'astreinte RDZ pour l'IHEID : Lucas Gimenez (lun-ven), Laurent Heinrich (week-end/jours fériés), Rodolphe De Zordi (en cas d'absence des autres). Correction (27.08.2026) : le numéro +41 79 749 35 36 précédemment indiqué ici est en réalité le natel de l'agent MDP (téléphone de service à récupérer à la loge REGM, voir manipulation de base ci-dessus), pas l'astreinte RDZ.",
      "consignes": "ALARME INCENDIE : intervention sur appel du client ou des pompiers — accueil des secours (118), guidage de l'évacuation vers les points de rassemblement, assistance PMR. Reconnaître et quittancer une petite alarme ; quittance des asservissements (surpression, portes coupe-feu, ascenseurs, monoblocs) ; contrôle des voies de fuite incendie et vérification des espaces sensibles. — GESTION DES ACCÈS : accompagner le personnel IHEID en cas d'oubli de badge ; ne pas entrer dans les bureaux privés sans autorisation ; toute personne trouvée dans les bureaux après minuit doit être invitée à quitter les lieux, avec rédaction d'un rapport. — HORAIRES DE FERMETURE DES ESPACES : terrasse côté lac — évacuation obligatoire, en cas de refus appeler la police municipale ; soirée non autorisée sur la terrasse — avertir le binôme et la police municipale immédiatement, ne prendre aucune initiative personnelle ; événement non répertorié — vérifier qu'il est sous contrôle, demander l'heure de fin, contrôler la fermeture des accès extérieurs. — OBJETS TROUVÉS : dépôt à la réception (lun-ven 8h-17h) ; hors horaires, établir un rapport et déposer l'objet dans le coffre-fort de sécurité MDP. — REMPLACEMENT RÉCEPTIONNISTE (au besoin) : recueillir le courrier, renseigner les visiteurs, orienter vers le service FM. — EVENTS AVEC AGENT SUR PLACE : matériel de secours à disposition (trousse premiers secours, extincteurs, défibrillateur AED), surveillance des voies de fuite, filtrage de l'entrée si demandé, sécurité des biens et des personnes. — SALAGE/DÉNEIGEMENT : en collaboration avec le service FM en semaine ; prendre l'initiative le week-end en cas d'événement.",
      "particularites": "Cahier des charges officiel RDZ (M.A.J. 01.04.2026, refonte complète du document) — données considérées fiables et à jour. Le code d'accès de la centrale incendie (7100) et le code PROM (351 570) proviennent tous deux de ce document ; le PROM correspond à celui déjà présent dans les données d'origine (logigramme), confirmant la cohérence. M. Demonte (Directeur Service FM IHEID) est la même personne déjà identifiée comme contact technique/sécurité sur les fiches MDP et l'annexe S.03 (interdictions de site) — ses coordonnées sont cohérentes sur l'ensemble des documents reçus. Villa Moynier ne figure pas dans la liste des bâtiments couverts par l'annexe S.03 « Interdiction de site » (Maison de la Paix, Villa Barton, Bâtiment Rothschild, Résidence Michelle-Nicod, Résidence Av. de France) — aucune interdiction de site n'est donc rattachée à cette fiche à ce stade.",
      "annexes": [
        "Cahier des charges Moynier (M.A.J. 01.04.2026)"
      ],
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Ce que l'agent doit savoir avant d'arriver",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Code PROM",
                  "v": "351 570",
                  "code": true
                },
                {
                  "k": "Type d'alarme",
                  "v": "Incendie"
                },
                {
                  "k": "Client",
                  "v": "IHEID — Villa Moynier"
                },
                {
                  "k": "Occupation",
                  "v": "Étudiants, professeurs, employés d'organisations internationales, direction et administration IHEID"
                },
                {
                  "k": "Ouverture",
                  "v": "Accès H24/7 — le bâtiment ne ferme pas"
                }
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller",
              "items": [
                {
                  "label": "Villa Moynier",
                  "dest": "Rue de Lausanne 120B, 1202 Genève"
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Stationnement",
              "items": [
                "Devant la villa ##en cas d'urgence uniquement##.",
                "Sinon : parking de la Perle du Lac ou Villa Barton.",
                "Code de la route applicable dans tous les cas."
              ]
            },
            {
              "t": "table",
              "titre": "Points de vigilance du site",
              "items": [
                {
                  "z": "Porte couloir sous-sol",
                  "d": "Donne sur l'extérieur — souvent trouvée ouverte. À contrôler systématiquement."
                },
                {
                  "z": "Terrasse côté lac",
                  "d": "Évacuation obligatoire en fin de soirée. Zone à risque de squat."
                },
                {
                  "z": "Escaliers et abords",
                  "d": "Contrôle squat lors des rondes."
                },
                {
                  "z": "Bâtiments av. de Lausanne",
                  "d": "De part et d'autre du parking de la Perle du Lac — contrôler les façades : graffitis, dégradations."
                },
                {
                  "z": "Bureaux privés",
                  "d": "Ne pas entrer sans autorisation, sauf porte forcée ou doute fondé."
                }
              ]
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "PROM et centrale incendie",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "PROM incendie",
                  "v": "351 570",
                  "code": true
                },
                {
                  "k": "Effraction",
                  "v": "##Aucun système ni transmetteur## sur ce site — le seul transmetteur est incendie"
                },
                {
                  "k": "Identification Certas",
                  "v": "Complément à 30"
                },
                {
                  "k": "Transmission",
                  "v": "TUS, mode direct 24h/7j"
                },
                {
                  "k": "Centrale incendie",
                  "v": "Au sous-sol"
                },
                {
                  "k": "Code sécurité — niveau agent",
                  "v": "~~7200~~",
                  "code": true
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Erreur dans le cahier des charges",
              "txt": "Le CDC du 01.04.2026 indique ~~7100~~ pour la centrale de Moynier. C'est faux : le code du niveau sécurité est ##7200##, et 7100 appartient à un autre site (La Tour / Veyrot 39). À corriger dans le document."
            }
          ]
        },
        {
          "titre": "Points d'accès",
          "resume": "Comment entrer et ouvrir",
          "blocs": [
            {
              "t": "liste",
              "items": [
                "##Badge Kaba IHEID## — accès aux zones sécurisées.",
                "##Pass du bâtiment Moynier## — à récupérer ##à la loge REGM avant la prise de poste##.",
                "##Lampe torche## — EPI obligatoire pour les rondes nocturnes.",
                "##Porte d'entrée principale## — fermée lors des rondes.",
                "##Porte du couloir sous-sol## — vérifier à chaque passage, elle est souvent trouvée ouverte ; fermer si nécessaire."
              ]
            },
            {
              "t": "liste",
              "titre": "Accompagnement",
              "items": [
                "Personnel IHEID ayant oublié son badge : accompagner.",
                "Entreprises extérieures : accompagner, et orienter vers le service FM si nécessaire."
              ]
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Pass général Moynier — reçu le 28.09.2026",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Où le récupérer",
                  "v": "Loge REGM, avant la prise de poste"
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Composition connue du trousseau",
              "items": [
                "##Pass général Moynier## — profil ##Yves Liardet SA##, référence ~~BW5898~~, carte ~~0000000~~, clé n° ~~16~~. Tête repérée par un disque ##rouge##."
              ]
            },
            {
              "t": "manque",
              "txt": "Le pass général est le seul élément documenté. Reste à préciser : le trousseau contient-il d'autres clés, et lesquelles ouvrent quoi ? Moynier ne figure pas non plus dans l'inventaire ##Clefs IS / RDZ## — cette référence mériterait d'y être ajoutée."
            },
            {
              "t": "liste",
              "titre": "S'il manque une clé",
              "items": [
                "##Pas d'urgence## (aucun problème de fermeture du site) — rapport et message à Laurent et Lucas.",
                "##Urgence## (site non hermétique, risque pour le client) — appel direct à Laurent ou Lucas."
              ]
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au technique",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "À Genève, un téléphone accroche souvent une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu confirmé, doute non levé — réseau suisse uniquement",
                  "num": "118"
                },
                {
                  "nom": "Police",
                  "role": "Urgence — réseau suisse uniquement",
                  "num": "117"
                },
                {
                  "nom": "Police Municipale",
                  "role": "Refus d'évacuer la terrasse, soirée non autorisée · Dim-mer 6h-minuit, Jeu-sam 6h-3h",
                  "num": "+41 22 418 22 22"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Terrain et astreinte",
              "items": [
                {
                  "nom": "Natel de service MDP",
                  "role": "Téléphone du site, joignable 24h/7j — à récupérer à la loge REGM. Ce n'est PAS l'astreinte RDZ.",
                  "num": "+41 79 749 35 36"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Ligne hiérarchique. Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence).",
                  "num": "+41 79 339 13 41"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Client et technique",
              "items": [
                {
                  "nom": "M. Barla",
                  "role": "Responsable sécurité et incendie IHEID",
                  "num": "+41 22 908 59 63"
                },
                {
                  "nom": "M. Sicot David",
                  "role": "Service FM — accès et technique mineurs, lun-ven 8h-17h",
                  "num": "+41 79 544 70 74"
                },
                {
                  "nom": "M. Demonte",
                  "role": "Directeur Service FM — hors horaires, sur accord RDZ",
                  "num": "+41 79 157 77 39"
                },
                {
                  "nom": "M. De Zordi",
                  "role": "Directeur RDZ",
                  "num": "+41 76 634 17 92"
                }
              ]
            },
            {
              "t": "sous",
              "titre": "Autres contacts",
              "blocs": [
                {
                  "t": "tel",
                  "items": [
                    {
                      "nom": "M. Demonte",
                      "role": "Ligne fixe Service FM",
                      "num": "+41 22 908 44 40"
                    },
                    {
                      "nom": "M. Labrevoir",
                      "role": "Service FM",
                      "num": "+41 22 908 44 41"
                    }
                  ]
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Erreur dans le cahier des charges",
              "txt": "La page Contacts du CDC du 01.04.2026 annonce « Astreinte RDZ : +41 79 749 35 36 ». C'est le natel de service de l'agent MDP, pas l'astreinte. L'astreinte RDZ est le ##+41 79 339 13 41##."
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Primo-intervention et guidage de l'évacuation",
          "blocs": [
            {
              "t": "stop",
              "lab": "Le rôle de l'agent sur ce site",
              "txt": "À Moynier, l'agent est ##primo-intervenant et guide d'évacuation##. Il n'y a ##aucun asservissement à remettre en route## : pas de surpression, pas de portes coupe-feu asservies, pas d'ascenseur, pas de monobloc. Le cahier des charges du 01.04.2026 mentionne ces équipements par erreur — ils n'existent pas sur ce site."
            },
            {
              "t": "kv",
              "items": [
                {
                  "k": "Où est la centrale",
                  "v": "Au sous-sol — code d'accès ~~7200~~"
                }
              ]
            },
            {
              "t": "num",
              "titre": "Alarme incendie — les premiers gestes",
              "court": "Alarme feu",
              "items": [
                {
                  "a": "Prendre l'information",
                  "d": "L'intervention part d'un appel du client ou des pompiers."
                },
                {
                  "a": "Se rendre à la centrale, au sous-sol",
                  "d": "Accès par le code ~~7200~~. Identifier la zone en alarme."
                },
                {
                  "a": "Levée de doute sur place",
                  "d": "Se rendre sur la zone indiquée."
                },
                {
                  "a": "Appliquer l'un des trois cas ci-dessous",
                  "d": ""
                }
              ]
            },
            {
              "t": "choix",
              "titre": "Sur zone, selon ce qui est constaté",
              "items": [
                {
                  "couleur": "vert",
                  "titre": "Petite alarme, rien constaté",
                  "txt": "Reconnaître et quittancer l'alarme à la centrale. Contrôler les voies de fuite et les espaces sensibles. Rapport."
                },
                {
                  "couleur": "orange",
                  "titre": "Feu naissant, maîtrisable",
                  "txt": "Attaquer à l'extincteur en ##primo-intervenant##. Une fois le feu éteint et vérifié, quittancer et rédiger le rapport."
                },
                {
                  "couleur": "rouge",
                  "titre": "Feu non maîtrisable, ou doute non levé",
                  "txt": "Appeler le ##118##. Déclencher et ##guider l'évacuation vers les points de rassemblement##, assister les personnes à mobilité réduite, puis accueillir et guider les secours."
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Situations propres au site",
              "items": [
                "##Terrasse côté lac## — évacuation obligatoire en fin de soirée. En cas de refus, appeler la police municipale.",
                "##Soirée non autorisée sur la terrasse## — avertir le binôme et la police municipale immédiatement. ##Ne prendre aucune initiative personnelle.##",
                "##Événement non répertorié## — vérifier qu'il est sous contrôle, demander l'heure de fin, contrôler la fermeture des accès extérieurs.",
                "##Personne trouvée dans les bureaux après minuit## — l'inviter à quitter les lieux, puis rédiger un rapport."
              ]
            },
            {
              "t": "liste",
              "titre": "Effraction — pas de système sur ce site",
              "items": [
                "##Aucune alarme effraction n'est transmise.## L'agent intervient uniquement ##sur appel## ou sur ##constat lors d'une ronde##.",
                "##Constat d'effraction ou de dégradation## — appeler le ##117##, se placer en observation à distance, ##ne pas intervenir seul face à une personne présente##.",
                "Aviser ensuite l'astreinte RDZ, puis rapport GuardTek avec photos, heure et localisation."
              ]
            },
            {
              "t": "manque",
              "txt": "Emplacement exact des points de rassemblement : jamais précisé dans le cahier des charges alors que le guidage de l'évacuation est la mission principale de l'agent. À confirmer physiquement."
            }
          ]
        }
      ],
      "blocsRondes": [
        {
          "t": "kv",
          "items": [
            {
              "k": "Ronde extérieure",
              "v": "Une, entre 20h00 et 23h00"
            },
            {
              "k": "Ronde de contrôle",
              "v": "Une, après minuit — contrôle de politesse si de la lumière est encore allumée"
            }
          ]
        },
        {
          "t": "liste",
          "titre": "À vérifier à chaque passage",
          "items": [
            "Issues de secours fermées et non obstruées, panneaux lumineux en état.",
            "Portes et fenêtres fermées, lumières éteintes.",
            "Porte d'entrée principale fermée ; ##porte du couloir sous-sol## contrôlée, elle est souvent ouverte.",
            "Absence de squat : escaliers, terrasse côté lac, abords.",
            "Façades des bâtiments de l'avenue de Lausanne : graffitis, dégradations.",
            "Stationnement sauvage sur le parvis à signaler, accès pompiers dégagé.",
            "Problèmes techniques apparents : fuites, dégâts, verrouillage."
          ]
        }
      ],
      "blocsNotes": [
        {
          "t": "liste",
          "titre": "Objets trouvés",
          "items": [
            "Dépôt à la ##réception##, du lundi au vendredi de 8h à 17h.",
            "##Hors horaires## : rapport écrit, puis dépôt au coffre-fort sécurité MDP."
          ]
        },
        {
          "t": "liste",
          "titre": "Missions ponctuelles",
          "items": [
            "##Remplacement de la réceptionniste## — recueillir le courrier, renseigner les visiteurs, orienter vers le service FM.",
            "##Events avec agent sur place## — matériel de secours à disposition (trousse, extincteurs, défibrillateur), surveillance des voies de fuite, filtrage de l'entrée si demandé.",
            "##Salage et déneigement## — avec le service FM en semaine, initiative le week-end en cas d'événement.",
            "##Vidéosurveillance## — surveillance des abords et des espaces communs."
          ]
        },
        {
          "t": "liste",
          "titre": "Tenue et comportement",
          "items": [
            "Polo et veste sécurité, pantalon noir, chaussures noires — en tout temps.",
            "Interdit : fumer, appels personnels en public, familiarité avec les clients."
          ]
        },
        {
          "t": "liste",
          "titre": "Réserves sur les données",
          "items": [
            "Cahier des charges officiel du 01.04.2026, refonte complète — données fiables.",
            "Villa Moynier ne figure pas dans l'annexe S.03 « Interdiction de site » : aucune interdiction rattachée à cette fiche.",
            "La mention des asservissements (surpression, portes coupe-feu, ascenseurs, monoblocs) dans le CDC est une erreur : ces équipements n'existent pas sur le site. À corriger dans le document."
          ]
        }
      ]
    },
    {
      "statut": "partiel",
      "prom": "Accueil",
      "client": "MSF",
      "nomComplet": "MSF — bouton accueil (ligne du logigramme reprise dans la fiche MSF principale)",
      "types": [
        "Agression"
      ],
      "adresse": "Non communiquée",
      "archive": true,
      "archiveLe": "2026-10-01"
    },
    {
      "statut": "complet",
      "prom": "324 333",
      "client": "MSF",
      "nomComplet": "MSF — Médecins Sans Frontières, siège de Genève",
      "types": [
        "Incendie",
        "Agression"
      ],
      "adresse": "Route de Ferney 140, 1202 Genève — accès par l'esplanade piétonne",
      "etapes": [
        {
          "titre": "Le site",
          "resume": "Ce que l'agent doit savoir avant d'arriver",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "PROM incendie",
                  "v": "324 333",
                  "code": true
                },
                {
                  "k": "Alarme agression",
                  "v": "##Bouton accueil## — sans code PROM numéroté"
                },
                {
                  "k": "Identification Certas",
                  "v": "Complément à 30"
                },
                {
                  "k": "Client",
                  "v": "MSF — Médecins Sans Frontières"
                },
                {
                  "k": "Occupation",
                  "v": "Employés MSF et personnalités invitées. ##Présence possible 24h/7j##, y compris la nuit."
                }
              ]
            },
            {
              "t": "gps",
              "titre": "Y aller",
              "items": [
                {
                  "label": "Accès par l'esplanade piétonne",
                  "dest": "Route de Ferney 140, 1202 Genève"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Alarme reliée directement aux pompiers",
              "txt": "L'alarme incendie part ##directement aux pompiers##. ##Ne jamais quittancer avant leur arrivée et leur accord.## C'est la règle la plus importante de ce site."
            },
            {
              "t": "liste",
              "titre": "Règles du site",
              "items": [
                "Interdit : fumer, appels personnels en public, ##familiarité avec les clients et les prestataires##, ##prise de photos##.",
                "##Bureaux privés## : ne pas entrer sans autorisation explicite.",
                "Stationnement au ##parking souterrain REGM##."
              ]
            }
          ]
        },
        {
          "titre": "Transmetteurs et codes",
          "resume": "Incendie Siemens, bouton agression",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Incendie",
                  "v": "PROM ~~324 333~~, complément à 30 — ##transmission directe aux pompiers##"
                },
                {
                  "k": "Agression",
                  "v": "Bouton à l'accueil, sans code PROM"
                },
                {
                  "k": "Centrale",
                  "v": "##Siemens##"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Exclusion de zones",
              "txt": "L'exclusion de zones sur la centrale Siemens se fait ##uniquement sur demande du client ou de RDZ##. Jamais de sa propre initiative. Formation disponible sur SharePoint, onglet Formation (annexe I.01)."
            },
            {
              "t": "manque",
              "txt": "Aucun code d'accès de centrale n'est documenté. À obtenir, en même temps que la confirmation de ce que l'agent est autorisé à manipuler compte tenu de la transmission directe aux pompiers."
            }
          ]
        },
        {
          "titre": "Points d'accès",
          "resume": "Clés, badge et tourniquet",
          "blocs": [
            {
              "t": "liste",
              "items": [
                "##Clés du bâtiment MSF## et ##badge d'accès aux étages##, remis à la prise de poste.",
                "##Téléphone d'astreinte RDZ ou téléphone de patrouille## — à récupérer à la ##REGM##.",
                "##Compteur manuel## — pour le comptage des fenêtres lors des rondes estivales."
              ]
            },
            {
              "t": "num",
              "titre": "Ouvrir l'accès au parking souterrain",
              "court": "Parking MSF",
              "items": [
                {
                  "a": "Se rendre à la descente MSF",
                  "d": "L'accès au parking souterrain se trouve sous le bâtiment, signalé par le logo MSF au-dessus de la porte."
                },
                {
                  "a": "Repérer le lecteur de badge",
                  "d": "Boîtier ##Siemens## blanc, encastré ##sur le mur de gauche##, avant la porte. Il s'allume en bleu."
                },
                {
                  "a": "Présenter le jeton rond vert du trousseau",
                  "d": "C'est le badge qui commande cette porte — pas la clé."
                },
                {
                  "a": "Attendre l'ouverture complète",
                  "d": "Puis dégager le passage."
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Le personnel MSF peut vous appeler directement",
              "txt": "Une affichette est posée à l'entrée du parking : ##« En cas de problème avec l'ouverture de la porte, appeler l'agent de sécurité RDZ au +41 79 339 13 41 »##. Un collaborateur bloqué devant la porte appellera donc directement ce numéro — ce n'est pas une alarme, c'est une demande d'assistance."
            },
            {
              "t": "num",
              "titre": "Fermeture et verrouillage du tourniquet",
              "court": "Tourniquet",
              "items": [
                {
                  "a": "Prendre la petite clé du trousseau",
                  "d": "C'est celle au porte-clé vert."
                },
                {
                  "a": "Tourner la clé vers la gauche",
                  "d": "Mettre la serrure en ##position 0##."
                },
                {
                  "a": "Laisser le tourniquet finir son tour",
                  "d": "Le cercle vient rencontrer le trou du support au plafond : c'est ce qui le bloque."
                },
                {
                  "a": "Vérifier",
                  "d": "##Même verrouillé, le tourniquet reste mobile sur 5 à 10 cm## — c'est normal, ce n'est pas un défaut."
                },
                {
                  "a": "S'il se débloque après un à-coup",
                  "d": "Refaire la manœuvre : revenir en ##position 1##, puis repasser en ##position 0##."
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Accès du personnel",
              "items": [
                "##Oubli de badge## — accompagner la personne.",
                "##Pendant les heures d'exploitation##, les accès sont gérés par la réception MSF.",
                "##Hors heures## : n'ouvrir qu'aux personnes pouvant se légitimer. ##Vigilance : du personnel peut avoir été licencié.## Bienveillance de rigueur, et signalement de tout comportement suspect.",
                "À la fermeture, les occupants qui restent sortent par les ##issues désignées##."
              ]
            }
          ]
        },
        {
          "titre": "Clés",
          "resume": "Trousseau MSF — relevé du 01.10.2026",
          "blocs": [
            {
              "t": "kv",
              "items": [
                {
                  "k": "Remise",
                  "v": "Clés du bâtiment MSF et badge d'accès aux étages, à la prise de poste"
                },
                {
                  "k": "Téléphone",
                  "v": "Astreinte RDZ ou téléphone de patrouille, à récupérer à la REGM"
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Composition du trousseau",
              "items": [
                "##Jeton rond vert## — badge d'accès au ##parking souterrain##, à présenter sur le lecteur Siemens.",
                "##Petite clé à porte-clé vert## — verrouillage du tourniquet d'accès.",
                "##Clé n° ~~300~~##.",
                "##Clé ~~RA205906 / 1000~~##."
              ]
            },
            {
              "t": "manque",
              "txt": "Les deux clés ~~300~~ et ~~RA205906 / 1000~~ sont au trousseau mais ##leur usage n'est pas identifié## : quelles portes ouvrent-elles ? À renseigner."
            },
            {
              "t": "liste",
              "titre": "S'il manque une clé",
              "items": [
                "##Pas d'urgence## — rapport et message à Laurent et Lucas.",
                "##Urgence## (site non hermétique, risque pour le client) — appel direct à Laurent ou Lucas."
              ]
            }
          ]
        },
        {
          "titre": "Qui appeler",
          "resume": "Dans l'ordre, du plus urgent au technique",
          "blocs": [
            {
              "t": "stop",
              "lab": "Si le natel est sur un réseau français",
              "txt": "À Genève, un téléphone accroche souvent une antenne française. Dans ce cas les numéros suisses en 0… ne passent pas, et le 118 ou le 117 tombent sur les secours français. Composer le 112, qui fonctionne sur tous les réseaux, et utiliser les numéros en +41 ci-dessous."
            },
            {
              "t": "tel",
              "titre": "Urgences",
              "items": [
                {
                  "nom": "Urgence tous réseaux",
                  "role": "Fonctionne aussi depuis une antenne française — à privilégier en cas de doute",
                  "num": "112"
                },
                {
                  "nom": "Pompiers",
                  "role": "Feu confirmé — l'alarme leur est de toute façon transmise directement",
                  "num": "118"
                },
                {
                  "nom": "Police",
                  "role": "Agression, intrusion, refus de légitimation",
                  "num": "117"
                },
                {
                  "nom": "Police Municipale",
                  "role": "Dim-mer 6h-minuit · Jeu-sam 6h-3h",
                  "num": "+41 22 418 22 22"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "Client — direction du bâtiment",
              "items": [
                {
                  "nom": "M. Besson",
                  "role": "Direction du bâtiment — ##premier contact hors heures d'exploitation##, notamment pour un dérangement incendie. Mobile.",
                  "num": "+41 79 251 78 31"
                },
                {
                  "nom": "M. Besson",
                  "role": "Direction du bâtiment — ligne fixe",
                  "num": "+41 22 849 83 84"
                },
                {
                  "nom": "M. Salandini",
                  "role": "Coordinateur Services Généraux — ##sur accord RDZ##",
                  "num": "+41 79 765 65 40"
                }
              ]
            },
            {
              "t": "tel",
              "titre": "RDZ",
              "items": [
                {
                  "nom": "M. Privat",
                  "role": "Chargé de sécurité RDZ — mobile suisse",
                  "num": "+41 79 755 24 76"
                },
                {
                  "nom": "M. Privat",
                  "role": "Chargé de sécurité RDZ — mobile français",
                  "num": "+33 6 38 98 91 47"
                },
                {
                  "nom": "Astreinte RDZ",
                  "role": "Ligne hiérarchique. Lucas Gimenez (lun-ven) · Laurent Heinrich (week-end et fériés) · Rodolphe De Zordi (en cas d'absence).",
                  "num": "+41 79 339 13 41"
                },
                {
                  "nom": "M. De Zordi",
                  "role": "Directeur RDZ",
                  "num": "+41 76 634 17 92"
                }
              ]
            },
            {
              "t": "stop",
              "lab": "Erreur dans le cahier des charges",
              "txt": "Le CDC du 01.04.2026 annonce « Astreinte RDZ 24h/7j : ~~+41 79 749 35 36~~ ». C'est le ##natel de l'agent MDP##, pas l'astreinte. L'astreinte RDZ est le ##+41 79 339 13 41##."
            }
          ]
        },
        {
          "titre": "Process d'intervention",
          "resume": "Incendie, dérangement, agression",
          "blocs": [
            {
              "t": "stop",
              "lab": "Règle absolue sur ce site",
              "txt": "L'alarme incendie est ##reliée directement aux pompiers##. ##Ne pas quittancer avant leur arrivée et leur accord explicite.## Quittancer trop tôt revient à annuler leur engagement."
            },
            {
              "t": "num",
              "titre": "Alarme incendie",
              "court": "Alarme feu",
              "items": [
                {
                  "a": "Ne pas quittancer",
                  "d": "Les pompiers sont déjà engagés. Toute manipulation de la centrale attend leur arrivée et leur accord."
                },
                {
                  "a": "Accueillir et guider les secours",
                  "d": "C'est la mission principale de l'agent sur cette alarme."
                },
                {
                  "a": "Diriger l'évacuation",
                  "d": "Vers les points de rassemblement."
                },
                {
                  "a": "Rendre compte",
                  "d": "Certas, direction du bâtiment, puis rapport."
                }
              ]
            },
            {
              "t": "num",
              "titre": "Quittance des asservissements après alarme",
              "court": "Asservissements",
              "items": [
                {
                  "a": "Attendre l'accord",
                  "d": "##Après l'intervention des pompiers seulement.##"
                },
                {
                  "a": "Surpression",
                  "d": "Remise en fonction."
                },
                {
                  "a": "Portes coupe-feu",
                  "d": "Remise en fonction."
                },
                {
                  "a": "Ascenseurs",
                  "d": "Vérifier la remise en service."
                },
                {
                  "a": "Monoblocs",
                  "d": "Réarmer la ventilation."
                }
              ]
            },
            {
              "t": "liste",
              "titre": "Alarme dérangement incendie",
              "items": [
                "##Hors heures d'exploitation## : contacter en priorité ##M. Besson## et/ou ##M. Salandini##.",
                "##Ne pas quittancer sans leur accord.##",
                "Consigner l'intervention dans le rapport."
              ]
            },
            {
              "t": "liste",
              "titre": "Alarme intrusion ou agression",
              "items": [
                "Le ##bouton agression## se trouve à l'accueil.",
                "Assurer une ##présence physique## et des ##rondes renforcées## en cas d'alerte.",
                "Personne non autorisée : signalement systématique. ##117## si la situation l'exige."
              ]
            },
            {
              "t": "manque",
              "txt": "La conduite à tenir précise en cas d'agression déclenchée depuis l'accueil n'est pas documentée : qui l'agent rejoint, dans quel ordre, et ce qu'il fait des personnes présentes. À rédiger."
            }
          ]
        }
      ],
      "blocsRondes": [
        {
          "t": "kv",
          "items": [
            {
              "k": "Nuit",
              "v": "##2 rondes complètes minimum## — une avant minuit, une après"
            },
            {
              "k": "Ronde extérieure",
              "v": "Une entre 21h00 et 23h00"
            }
          ]
        },
        {
          "t": "liste",
          "titre": "À vérifier à chaque passage",
          "items": [
            "Issues de secours fermées et dégagées, panneaux lumineux en état.",
            "Espaces sensibles.",
            "##Terrasse côté restaurant## — squat, dégradations, intrusions.",
            "Problèmes techniques apparents : fuites, dégâts, verrouillage, éclairage de sécurité.",
            "##Fermeture du tourniquet## — procédure à l'étape 3."
          ]
        },
        {
          "t": "stop",
          "lab": "Comptage des fenêtres — rondes d'été",
          "txt": "Compter les fenêtres ouvertes avec le ##compteur manuel## si le nombre est élevé. Noter le ##temps effectif de ronde##. ##Reporting obligatoire à chaque passage##, et rapport après chaque ronde."
        }
      ],
      "blocsNotes": [
        {
          "t": "liste",
          "titre": "Missions ponctuelles",
          "items": [
            "##Objets trouvés## — dépôt à la réception du lundi au vendredi de 8h à 17h. Hors horaires : rapport et dépôt au coffre-fort sécurité.",
            "##Events MSF## — présence assurée, filtrage de l'entrée si demandé, rapport après l'événement."
          ]
        },
        {
          "t": "liste",
          "titre": "Documents de référence",
          "items": [
            "I.01 — Mode d'emploi de la centrale incendie Siemens, avec la formation SharePoint.",
            "S.01 — Fermeture du tourniquet, du 30.05.2025."
          ]
        },
        {
          "t": "liste",
          "titre": "Réserves sur les données",
          "items": [
            "Le CDC annonce un faux numéro d'astreinte — voir l'avertissement de l'étape 5.",
            "##Aucun code de centrale## communiqué.",
            "Le logigramme d'astreinte listait MSF sur deux lignes, « bouton accueil » et incendie 324 333 : les deux sont réunis dans cette fiche.",
            "Procédure d'ouverture du parking relevée sur site le 01.10.2026, à partir de photos — elle ne figure dans aucun document client."
          ]
        }
      ]
    },
    {
      "statut": "partiel",
      "prom": "323 238",
      "client": "CTN",
      "nomComplet": "CTN",
      "types": [
        "Incendie"
      ],
      "adresse": "Non communiquée"
    },
    {
      "statut": "partiel",
      "prom": "324 345",
      "client": "HDLT",
      "nomComplet": "HDLT",
      "types": [
        "Incendie"
      ],
      "adresse": "Non communiquée"
    },
    {
      "statut": "partiel",
      "prom": "—",
      "client": "Michelle-Nicod",
      "nomComplet": "Doublon — la rue Michelle-Nicod 8-10 est l'adresse de la REGM, le n°4 celle de MSF. Voir ces deux fiches.",
      "types": [],
      "adresse": "Rue Michelle-Nicod 8-10, 1202 Genève",
      "groupeInterdictions": "IHEID",
      "archive": true,
      "archiveLe": "2026-10-01"
    }
  ]
};
