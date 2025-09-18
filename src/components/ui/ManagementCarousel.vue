<template>
  <div class="management-carousel py-8">
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :space-between="30"
      :loop="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: true,
      }"
      :navigation="true"
      :effect="'fade'"
      :fade-effect="{
        crossFade: true,
      }"
      class="management-swiper"
    >
      <!-- Element 1: Comité présidentiel -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase"># 
              <span v-if="currentLanguage === 'en'">CHAIRMAN'S COMMITTEE</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Comité présidentiel</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Chair</span>
                  <span v-else-if="currentLanguage === 'fr'">Présidence</span>
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'"
                    >Chairman & Executive Officer</span
                  >
                  <span v-else-if="currentLanguage === 'fr'"
                    >Président Directeur Général</span
                  >
                </h6>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">6</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Meeting Frequency</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Fréquence de réunions</span
                  >
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'">Monthly</span
                  ><span v-else-if="currentLanguage === 'fr'">Mensuelle</span>
                </h6>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Chairman's Committee is responsible for steering the Group's
                strategy. It must prioritise between transversal or critical
                issues reported by the Group Executive Committee. The Chairman's
                Committee is chaired by the Chairman & Chief Executive Officer
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Chargé du pilotage stratégique du Groupe. Il rend, par ailleurs,
                des arbitrages sur les thématiques transverses ou critiques,
                remontées notamment par le Comité Exécutif Groupe. Le comité
                Présidentiel est présidé par Monsieur le Président Directeur
                Général
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire la suite</span>
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 2: Comité exécutif groupe -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              # <span v-if="currentLanguage === 'en'">Governing bodies</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Organes de dirigeance</span
              >
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              # <span v-if="currentLanguage === 'en'"
                >GROUP EXECUTIVE COMMITTEE</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Comité exécutif groupe</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Chair</span>
                  <span v-else-if="currentLanguage === 'fr'">Présidence</span>
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'"
                    >Meeting chaired by one of the 3 Executive General
                    Managers</span
                  >
                  <span v-else-if="currentLanguage === 'fr'"
                    >Désignation parmi les 3 Directions Générales Exécutives du
                    Président de la séance</span
                  >
                </h6>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">3</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Meeting Frequency</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Fréquence de réunions</span
                  >
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'">Once a fortnight</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Une fois toutes les deux semaines</span
                  >
                </h6>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Group Executive Committee is responsible for implementing
                strategy and development plans based on the Board of Directors'
                guidelines. It is also responsible for managing and steering
                performance on a consolidated basis, within the remit of the
                powers delegated to it. It ensures that a Group-wide approach is
                fostered by steering the Group's subsidiaries, managing risk,
                generating synergies and pooling skills to ensure a more
                efficient commercial approach and to enhance value creation.
                Chair : Meetings chaired by one of the 3 Executives General
                Managers
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Chargé de la déclinaison en actions et mesures opérationnelles
                des orientations stratégiques du Groupe et de leur suivi au
                niveau du périmètre Maroc et des filiales internationales hors
                Afrique subsaharienne et ce, selon les délégations de pouvoirs
                qui lui sont conférées. Il assure la gestion des opérations et
                des activités courantes et veille à la réalisation des objectifs
                annuels commerciaux et budgétaires et prend les mesures
                correctives nécessaires le cas échéant. Présidence :
                Alternativement tous les 3 mois parmi les 2 directeurs généraux
                exécutifs.
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire la suite</span>
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 3: Comité exécutif Maroc & International -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              # <span v-if="currentLanguage === 'en'">Governing bodies</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Organes de dirigeance</span
              >
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              # <span v-if="currentLanguage === 'en'"
                >EXECUTIVE COMMITTEE MOROCCO AND INTERNATIONAL</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >COMITÉ EXÉCUTIF MAROC & INTERNATIONAL</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Chair</span>
                  <span v-else-if="currentLanguage === 'fr'">Présidence</span>
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'"
                    >Meetings chaired alternatively by one of the 3 Executive
                    General Managers</span
                  >
                  <span v-else-if="currentLanguage === 'fr'"
                    >Alternativement tous les 3 mois parmi les 2 Directeurs
                    Généraux Exécutifs</span
                  >
                </h6>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">6</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Meeting Frequency</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Fréquence de réunions</span
                  >
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'">Weekly</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Hebdomadaire</span
                  >
                </h6>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Executive Committee – Morocco and International is the
                decisionmaking body responsible for translating the Group's
                strategy into operational initiatives and measures and
                monitoring them for Moroccan operations and those of the Group's
                international subsidiaries outside sub-Saharan Africa, within
                the remit of the powers delegated to it. It ensures that
                day-to-day operations and activities are managed effectively and
                ensures that annual commercial and budgetary goals are achieved,
                taking the necessary corrective measures if required. Chair :
                Meetings chaired alternatively by one of the 3 Executive General
                Managers
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Chargé de la déclinaison en actions et mesures opérationnelles
                des orientations stratégiques du Groupe et de leur suivi au
                niveau du périmètre Maroc et des filiales internationales hors
                Afrique subsaharienne et ce, selon les délégations de pouvoirs
                qui lui sont conférées. Il assure la gestion des opérations et
                des activités courantes et veille à la réalisation des objectifs
                annuels commerciaux et budgétaires et prend les mesures
                correctives nécessaires le cas échéant. Présidence :
                Alternativement tous les 3 mois parmi les 2 directeurs généraux
                exécutifs
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire la suite</span>
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 4: Comité de coordination du contrôle interne groupe -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              # <span v-if="currentLanguage === 'en'">Governing bodies</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Organes de dirigeance</span
              >
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              # <span v-if="currentLanguage === 'en'"
                >GROUP INTERNAL CONTROL COORDINATION COMMITTEE</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Comité de coordination du contrôle interne groupe</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Chair</span>
                  <span v-else-if="currentLanguage === 'fr'">Présidence</span>
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'"
                    >Director and General Manager</span
                  >
                  <span v-else-if="currentLanguage === 'fr'"
                    >L'Administrateur Directeur Général Délégué</span
                  >
                </h6>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">7</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Meeting Frequency</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Fréquence de réunions</span
                  >
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'">Quarterly</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Trimestrielle</span
                  >
                </h6>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Group Internal Control Coordination Committee's role is to
                effectively manage and monitor, at an operating level,
                Group-wide control systems. The Group Internal Control
                Coordination Committee is chaired by Director and General
                Manager
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Le Comité de Coordination du Contrôle Interne Groupe veille à la
                gestion et au suivi effectifs et opérationnels des dispositifs
                de contrôle mis en place sur le périmètre du Groupe. Le Comité
                de Coordination du Contrôle Interne Groupe est présidé par
                Monsieur l'Administrateur Directeur Général Délégué
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire la suite</span>
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 5: Comité technique ALM groupe -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              # <span v-if="currentLanguage === 'en'">Governing bodies</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Organes de dirigeance</span
              >
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              # <span v-if="currentLanguage === 'en'"
                >GROUP ALM TECHNICAL COMMITTEE</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Comité technique ALM groupe</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Chair</span>
                  <span v-else-if="currentLanguage === 'fr'">Présidence</span>
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'"
                    >Director and General Manager</span
                  >
                  <span v-else-if="currentLanguage === 'fr'"
                    >Directeur Général Exécutif en charge des Fonctions Groupe
                    et Opérations</span
                  >
                </h6>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">9</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Meeting Frequency</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Fréquence de réunions</span
                  >
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'">Quarterly</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Trimestrielle</span
                  >
                </h6>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Group ALM Committee is tasked with drawing up and
                implementing the Group's asset-liability management strategy in
                line with the strategy approved by the Board of Directors. The
                Technical Committee is a consultative committee which helps the
                Group Executive Committee manage the Group's financial balances
                and the appetite for liquidity and interest rate risk for each
                entity within BANK OF AFRICA Group. The Group ALM Committee is
                chaired by the Executive General Manager responsible for Group
                functions and Operations.
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Groupe Chargé de l'élaboration et l'exécution de la stratégie de
                gestion Actif – Passif du Groupe et ce, conformément aux
                orientations stratégiques validées par le Conseil
                d'Administration. Le Comité Technique est un Comité consultatif
                qui assiste le Comité Exécutif Groupe dans la gestion des
                équilibres bilanciels à Moyen et Long Termes ainsi que
                l'appétence du Groupe aux risques de liquidité et de Taux
                d'intérêt au niveau des différentes Entités du Groupe BANK OF
                AFRICA. Le Comité Technique ALM est présidé par Monsieur le
                Directeur Général Exécutif en charge des fonctions Groupe et
                Opérations.
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire la suite</span>
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 6: Comité de pilotage & de gestion des risques groupe -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              # <span v-if="currentLanguage === 'en'">Governing bodies</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Organes de dirigeance</span
              >
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              # <span v-if="currentLanguage === 'en'"
                >GROUP RISK STEERING AND MANAGEMENT COMMITTEE</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Comité de pilotage & de gestion des risques groupe</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Chair</span>
                  <span v-else-if="currentLanguage === 'fr'">Présidence</span>
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'"
                    >Delegate General Manager Officer Responsible for Group
                    Risks</span
                  >
                  <span v-else-if="currentLanguage === 'fr'"
                    >Directeur Général Délégué en charge des Risques
                    Groupe</span
                  >
                </h6>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">7</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Meeting Frequency</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Fréquence de réunions</span
                  >
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'">Bi-monthly</span
                  ><span v-else-if="currentLanguage === 'fr'">Bimensuelle</span>
                </h6>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Group Risk Steering and Management Committee, which reports
                to the Chairman's Committee, helps it to effectively manage and
                monitor, at an operating level, the risk management system of
                the Group – BANK OF AFRICA S.A and its direct and indirect
                subsidiaries – and ensures that the operations of the Group, of
                BANK OF AFRICA and of its direct and indirect subsidiaries, are
                consistent with the risk policies and limits set. The Committee
                also ensures that the Group's risk steering policy relating to
                credit, market, country and operational risk is effective and
                consistent with its level of risk appetite. The Group Risk
                Steering and Management Committee is chaired by the Delegate
                General Manager Officer responsible for Group Risks
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Rattaché au Comité Présidentiel, le Comité de Pilotage et
                Gestion des Risques Groupe l'assiste en matière de gestion et
                suivi effectif et opérationnel du dispositif de pilotage des
                risques du Groupe (BANK OF AFRICA et ses filiales directes et
                indirectes) et de la cohérence des activités du Groupe, de BANK
                OF AFRICA et de ses filiales directes et indirectes avec les
                Politiques des Risques et limites fixées. Il s'assure de
                l'efficience du dispositif de pilotage des risques (crédit,
                marché, pays et opérationnels) et de la surveillance de la
                cohérence du profil de risque avec le niveau de l'appétit au
                risque. Le Comité de Pilotage et Gestion des Risques Groupe est
                présidé par Monsieur le Directeur Général Délégué en charge des
                Risques Groupe.
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire la suite</span>
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 7: Comité de fonctionnement / comité PCA -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              # <span v-if="currentLanguage === 'en'">Governing bodies</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Organes de dirigeance</span
              >
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              # <span v-if="currentLanguage === 'en'"
                >OPERATING COMMITTEE / BCP COMMITTEE</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Comité de fonctionnement / comité PCA</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Chair</span>
                  <span v-else-if="currentLanguage === 'fr'">Présidence</span>
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'"
                    >Head of Group Technologies, Processes & Organisation
                    Division</span
                  >
                  <span v-else-if="currentLanguage === 'fr'"
                    >Responsable du Pôle Technologies, Process & Organisation
                    Groupe</span
                  >
                </h6>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">11</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Meeting Frequency</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Fréquence de réunions</span
                  >
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'">Weekly</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Hebdomadaire</span
                  >
                </h6>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Operating Committee is responsible for reporting, sharing
                information and ruling on any issue relating to the Bank's
                operations. It therefore provides business line as well as
                technical expertise and makes recommendations to the Executive
                Committee – Morocco and International to assist with
                decisionmaking relating to these aspects. The Operating
                Committee is chaired by Head of Group Technologies, Processes &
                Organisation Division
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Instance de remontée, de partage de l'information et d'arbitrage
                de toute problématique liée au fonctionnement des activités de
                la Banque. Il apporte ainsi une expertise métier / technique et
                émet des recommandations au Comité Exécutif Maroc &
                International afin d'éclairer ses décisions sur ces aspects. Le
                Comité de Fonctionnement est présidé par Monsieur le Responsable
                du Pôle Technologies, Process et Organisation Groupe.
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire la suite</span>
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 8: Comité environnemental, social et soutenabilité -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              # <span v-if="currentLanguage === 'en'">Governing bodies</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Organes de dirigeance</span
              >
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              # <span v-if="currentLanguage === 'en'"
                >ENVIRONMENTAL AND SOCIAL SUSTAINABILITY COMMITTEE</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Comité environnemental, social et soutenabilité</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Chair</span>
                  <span v-else-if="currentLanguage === 'fr'">Présidence</span>
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'"
                    >Director and General Manager</span
                  >
                  <span v-else-if="currentLanguage === 'fr'"
                    >L'Administrateur Directeur Général Délégué</span
                  >
                </h6>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">14</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Meeting Frequency</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Fréquence de réunions</span
                  >
                </h5>
                <h6 class="text-accent text-2xl">
                  <span v-if="currentLanguage === 'en'">Every 4 months</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Tous les 4 mois</span
                  >
                </h6>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Environmental, Social and Sustainability Committee enables
                environmental, social and governance (ESG) aspects to be
                incorporated within the Group's governance system, thereby
                ensuring that sustainability is fully embedded within its
                organisational structure. The Environmental, Social and
                Sustainability Committee is chaired by the Director and General
                Manager
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Surveiller et superviser la mise en œuvre et mise à jour des
                objectifs Environnementaux, Sociaux et de Soutenabilité définis
                pour le groupe. Le comité Environnemental, Social et de
                Soutenabilité est présidé par Monsieur l'Administrateur
                Directeur Général Délégué
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire la suite</span>
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 9: Strategy task force -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              # <span v-if="currentLanguage === 'en'">Specialized COMMITTEE</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Comité spécialisé</span
              >
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              # <span v-if="currentLanguage === 'en'">STRATEGY TASK FORCE</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Strategy task force</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">4</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">25%</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Independent shares</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Parts indépendantes</span
                  >
                </h5>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Strategy Task Force, which reports directly to BANK OF
                AFRICA BMCE Group's Board of Directors, has a Group-wide remit.
                The Strategy Task Force helps to define and formulate the
                Group's mediumand long-term strategic ambitions and oversee
                implementation of its strategic development plans. It is tasked
                by the Board with working on any matter relating to the Group's
                strategy. The Strategy Task Force is chaired by Mr Mohamed
                Kabbaj, Independent Director
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Émanation du Conseil d'Administration de BANK OF AFRICA BMCE
                Group, dont le périmètre est de dimension Groupe, la Strategy
                Task Force est responsable de contribuer à la définition et à la
                formulation des ambitions stratégiques du Groupe à Moyen et Long
                termes et de superviser la mise en œuvre des Plans Stratégiques
                de Développement. Elle est chargée par le Conseil
                d'Administration de travailler sur tout sujet stratégique du
                Groupe. Le comité Strategy Task Force est présidé par Monsieur
                Mohamed Kabbaj, Administrateur Indépendant
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire la suite</span>
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 10: Comité de gouvernance, nominations et rémunérations -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              # <span v-if="currentLanguage === 'en'">Specialized COMMITTEE</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Comité spécialisé</span
              >
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              # <span v-if="currentLanguage === 'en'"
                >GOVERNANCE, APPOINTMENTS AND REMUNERATION COMMITTEE</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Comité de gouvernance, nominations et rémunérations</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">2</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">-</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Independent shares</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Parts indépendantes</span
                  >
                </h5>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Governance, Appointments and Remuneration Committee, which
                reports directly to the Board of Directors, advises and makes
                recommendations to the Board on establishing and maintaining a
                good governance policy, designing a remuneration system and
                ensuring that it functions properly and establishing a process
                for appointing and reappointing its members and those of the
                General Management team. The Governance, Appointments and
                Remuneration Committee is chaired by Mr Azeddine Guessous,
                Intuitu Personae Director
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Instance émanant du Conseil d'Administration, le Comité de
                Gouvernance, Nomination et Rémunération émet avis et
                recommandations au Conseil d'Administration sur la mise en place
                et le maintien d'une politique de bonne gouvernance, la
                conception, le suivi et le bon fonctionnement du système de
                rémunération, et la mise en œuvre du processus de nomination et
                de renouvellement de ses Membres ainsi que ceux de la Direction
                Générale. Le comité de Gouvernance, Nomination et Rémunération
                est présidé par Monsieur Azeddine Guessous, Administrateur
                intuitu personae
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire la suite</span>
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 11: Comité des risques groupe -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              # <span v-if="currentLanguage === 'en'">Specialized COMMITTEE</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Comité spécialisé</span
              >
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              #<span v-if="currentLanguage === 'en'">GROUP RISKS COMMITTEE</span>
              <span v-else-if="currentLanguage === 'fr'"
                >Comité des risques groupe</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">5</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">20%</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Independent shares</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Parts indépendantes</span
                  >
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">4</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Number of meetings</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Nombre de réunions</span
                  >
                </h5>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Group Risks Committee reports directly to BANK OF AFRICA
                BMCE Group's Board of Directors. Its remit has been extended to
                direct and indirect subsidiaries within the Group's scope of
                consolidation. It assists the Board of Directors in matters such
                as risk strategy, monitoring and management. In particular, it
                ensures that overall risk policy is adapted to the risk profile
                of both the Bank and the Group, the degree of risk aversion, its
                systemic importance, size and capital base. The Group Risks
                Committee is chaired by Mr Hicham El Amrani, Non-Executive
                Director
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Instance émanant du Conseil d'Administration de BANK OF AFRICA
                BMCE GROUP, dont les prérogatives sont élargies aux filiales
                directes et indirectes intégrées dans le périmètre de
                consolidation du Groupe. Il assiste le Conseil d'Administration
                en matière de stratégie et de surveillance et gestion des
                risques, notamment en veillant à ce que la stratégie globale des
                risques soit adaptée au profil de risque de la Banque et du
                Groupe, au degré d'aversion aux risques, à son importance
                systémique, à sa taille et à son assise financière. Le comité
                des Risques Groupe est présidé par Monsieur Hicham El Amrani,
                Administrateur Non Exécutif
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire la suite</span>
            </button>
          </div>
        </div>
      </swiper-slide>

      <!-- Element 12: Comité d'audit et de contrôle interne groupe -->
      <swiper-slide class="h-auto px-2 lg:px-64">
        <div class="slide-card overflow-hidden h-full">
          <div class="p-8">
            <h5
              class="text-white text-2xl font-semibold uppercase bg-accent inline-block px-4 py-2 mb-4"
            >
              # <span v-if="currentLanguage === 'en'">Specialized COMMITTEE</span>
              <span v-else-if="currentLanguage === 'fr'"
                >COMITÉ spécialisé</span
              >
            </h5>
            <h3 class="text-2xl font-bold text-primary mb-3 uppercase">
              # <span v-if="currentLanguage === 'en'"
                >GROUP AUDIT AND INTERNAL CONTROL COMMITTEE</span
              >
              <span v-else-if="currentLanguage === 'fr'"
                >Comité d'audit et de contrôle interne groupe</span
              >
            </h3>
            <!-- DEBUT -->
            <div
              class="flex justify-evenly items-center pt-3 pb-8 font-bold text-center"
            >
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">4</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Members</span
                  ><span v-else-if="currentLanguage === 'fr'">Membres</span>
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">50%</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Independent shares</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Parts indépendantes</span
                  >
                </h5>
              </div>
              <div class="flex-1 flex flex-col gap-2">
                <div class="text-7xl text-accent">4</div>
                <h5 class="text-secondary text-2xl">
                  <span v-if="currentLanguage === 'en'">Number of meetings</span
                  ><span v-else-if="currentLanguage === 'fr'"
                    >Nombre de réunions</span
                  >
                </h5>
              </div>
            </div>
            <!-- FIN -->
            <div class="space-y-4 text-gray-700 mb-6">
              <p
                v-if="currentLanguage === 'en'"
                class="text-base leading-relaxed"
              >
                The Group Audit and Internal Control Committee -Group CACI- is a
                specialised committee which reports directly to the Board of
                Directors. It has a Group-wide remit in matters of internal
                control and financial information. The Group CACI is responsible
                for monitoring the internal control system's quality and
                assessing whether the latter is adequately adapted to the
                Group's risk profile, systemic importance, size and complexity
                as well as the nature and volume of its activities. The Group
                CACI is required to report back to the Board of Directors on the
                results of its work and inform the latter of any event or
                dysfunction likely to adversely impact the internal control
                system's proper functioning or the institution's financial
                position. The Group Audit and Internal Control Committee is
                chaired by Mrs Nezha Lahrichi, Independent Director
              </p>
              <p
                v-else-if="currentLanguage === 'fr'"
                class="text-base leading-relaxed"
              >
                Comité spécialisé émanant du Conseil d'Administration de BANK OF
                AFRICA BMCE GROUP, dont le périmètre de ses prérogatives, dans
                les domaines du Contrôle Interne et de l'information financière,
                est de dimension Groupe. Le CACI Groupe est chargé d'assurer la
                surveillance et l'évaluation de la qualité et de l'adéquation du
                dispositif de Contrôle Interne au profil de risque, à
                l'importance systémique, à la taille et à la complexité du
                Groupe ainsi qu'à la nature et au volume de ses activités. Il
                est tenu de rendre compte au Conseil d'Administration des
                résultats de ses travaux et l'informer de tout évènement ou
                dysfonctionnement susceptible de porter atteinte au bon
                fonctionnement du système de contrôle interne ou à la situation
                financière de l'établissement. Le comité d'Audit et de Contrôle
                Interne Groupe est présidé par Madame Nezha Lahrichi,
                Administratrice Indépendante
              </p>
            </div>
            <button
              @click="openPDF()"
              class="px-6 py-3 bg-primary text-white rounded-lg hover:bg-accent transition-colors duration-300 cursor-pointer"
            >
              <span v-if="currentLanguage === 'en'">Read more</span>
              <span v-else-if="currentLanguage === 'fr'">Lire plus</span>
            </button>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { useLanguage } from "@/composables/useLanguage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const { currentLanguage } = useLanguage();
const modules = [Navigation, Pagination, Autoplay, EffectFade];

const openPDF = () => {
  const pdfUrl =
    currentLanguage.value === "en"
      ? "/assets/pdfs/Comite_UK.pdf"
      : "/assets/pdfs/Comites.pdf";
  window.open(pdfUrl, "_blank");
};
</script>

<style lang="scss" scoped>
.management-carousel {
  .management-swiper {
    :deep(.swiper-pagination) {
      bottom: 10px;

      .swiper-pagination-bullet {
        background-color: #cbd5e1;
        opacity: 1;
        width: 12px;
        height: 12px;

        &.swiper-pagination-bullet-active {
          background-color: var(--color-primary, #1e40af);
        }
      }
    }

    :deep(.swiper-button-next),
    :deep(.swiper-button-prev) {
      color: var(--color-primary, #1e40af);
      width: 22px;
      height: 22px;
      border-radius: 50%;

      &:after {
        font-size: 16px;
        font-weight: bold;
      }
    }
  }
}
</style>
