/* istanbul ignore file */
export default {
  id: 1,
  version: 1,
  titleEn: "Test Form",
  titleFr: "Formulaire de test",
  layout: [1, 2, 3, 4, 5, 6, 7, 8],
  brand: {
    name: "cds-snc",
    logoEn: "https://digital.canada.ca/img/cds/cds-lockup-ko-en.svg",
    logoFr: "https://numerique.canada.ca/img/cds/cds-lockup-ko-fr.svg",
    logoTitleEn: "Canadian Digital Service",
    logoTitleFr: "Service numérique canadien",
    urlEn: "https://digital.canada.ca/",
    urlFr: "https://numerique.canada.ca/",
  },
  startPage: {},
  endPage: {
    descriptionEn: "",
    descriptionFr: "",
    referrerUrlEn: "https://digital.canada.ca/",
    referrerUrlFr: "https://numerique.canada.ca/",
  },
  submission: {
    email: "no-reply@cds-snc.ca",
  },

  elements: [
    {
      id: 1,
      type: "textField",
      properties: {
        titleEn: "What is your full name?",
        titleFr: "Quel est votre nom complet?",
        placeholderEn: "I wish I knew",
        placeholderFr: "Je ne sais pas",
        descriptionEn: "This is a description",
        descriptionFr: "Voice une description",
        validation: {
          required: true,
        },
      },
    },
    {
      id: 2,
      type: "textArea",
      properties: {
        titleEn: "What is the problem you are facing",
        titleFr: "Quel est le problème auquel vous êtes confronté?",
        placeholderEn: "Something difficult",
        placeholderFr: "Quelque chose difficile",
        descriptionEn: "Here be a description",
        descriptionFr: "Pour décrire, ou pas décire..",
        validation: {
          required: true,
        },
      },
    },
    {
      id: 3,
      type: "richText",
      properties: {
        titleEn: "",
        titleFr: "",
        descriptionEn:
          "Thank you so much for your interest in the Canadian Digital Service’s Forms product. <br/><br/> Please provide your information below so CDS can contact you about improving, updating, or digitizing a form.",
        descriptionFr:
          "Merci beaucoup de l’intérêt que vous portez au produit de Formulaire du Service Numérique Canadien. <br/><br/> Veuillez fournir vos renseignements ci-dessous afin que le SNC puisse vous contacter pour discuter davantage l'amélioration, la mise à jour ou la numérisation d'un formulaire.",
        validation: {
          required: false,
        },
      },
    },
    {
      id: 4,
      type: "dropdown",
      properties: {
        titleEn: "Province or territory",
        titleFr: "Province ou territoire",
        placeholderEn: "",
        placeholderFr: "",
        descriptionEn: "",
        descriptionFr: "",
        choices: [
          {
            en: "",
            fr: "",
          },
          {
            en: "Alberta",
            fr: "Alberta",
          },
          {
            en: "British Columbia",
            fr: "Colombie-Britannique",
          },
          {
            en: "Manitoba",
            fr: "Manitoba",
          },
          {
            en: "New Brunswick",
            fr: "Nouveau-Brunswick",
          },
          {
            en: "Newfoundland and Labrador",
            fr: "Terre-Neuve-et-Labrador",
          },
          {
            en: "Northwest Territories",
            fr: "Territoires du Nord-Ouest",
          },
          {
            en: "Nova Scotia",
            fr: "Nouvelle-Écosse",
          },
          {
            en: "Nunavut",
            fr: "Nunavut",
          },
          {
            en: "Ontario",
            fr: "Ontario",
          },
          {
            en: "Prince Edward Island",
            fr: "Île-du-Prince-Édouard",
          },
          {
            en: "Quebec",
            fr: "Québec",
          },
          {
            en: "Saskatchewan",
            fr: "Saskatchewan",
          },
          {
            en: "Yukon",
            fr: "Yukon",
          },
        ],
        validation: {
          required: false,
        },
      },
    },
    {
      id: 5,
      type: "radio",
      properties: {
        titleEn: "Status",
        titleFr: "Statut",
        description: "",
        validation: {
          required: false,
        },
        choices: [
          {
            en: "Citizen",
            fr: "Cityoen",
          },
          {
            en: "Permanent Resident",
            fr: "Permanent Resident",
          },
          {
            en: "Student",
            fr: "Student",
          },
          {
            en: "Visitor",
            fr: "Visitor",
          },
          {
            en: "Other",
            fr: "Autre",
          },
        ],
      },
    },
    {
      id: 6,
      type: "checkbox",
      properties: {
        titleEn:
          "Will the project or any of its activities involve or benefit people in English or French linguistic minority communities in Canada, in some way?",
        titleFr:
          " Le projet ou les activités connexes impliquent-ils ou s’adressent-ils d’une façon ou d’une autre aux minorités francophones et anglophones du Canada?",
        validation: {
          required: false,
        },
        choices: [
          {
            en: "Yes",
            fr: "Oui",
          },
          {
            en: "No",
            fr: "Non",
          },
          {
            en: "Not Applicable",
            fr: "Non applicable",
          },
        ],
      },
    },
    {
      id: 7,
      type: "dynamicRow",
      properties: {
        titleEn: "",
        titleFr: "",
        validation: {
          required: false,
        },
        subElements: [
          {
            id: 22,
            type: "textField",
            properties: {
              titleEn: "Family name",
              titleFr: "Nom",
              placeholderEn: "",
              placeholderFr: "",
              descriptionEn: "",
              descriptionFr: "",

              validation: {
                required: false,
              },
            },
          },
          {
            id: 22,
            type: "textField",
            properties: {
              titleEn: "Given name",
              titleFr: "Prénom",
              laceholderEn: "",
              placeholderFr: "",
              descriptionEn: "",
              descriptionFr: "",
              validation: {
                required: false,
              },
            },
          },
          {
            id: 22,
            type: "textField",
            properties: {
              titleEn: "Department or organization",
              titleFr: "Ministère ou organisme",
              placeholderEn: "",
              placeholderFr: "",
              descriptionEn: "",
              descriptionFr: "",
              validation: {
                required: false,
              },
            },
          },
          {
            id: 22,
            type: "checkbox",
            properties: {
              titleEn:
                "Will the project or any of its activities involve or benefit people in English or French linguistic minority communities in Canada, in some way?",
              titleFr:
                " Le projet ou les activités connexes impliquent-ils ou s’adressent-ils d’une façon ou d’une autre aux minorités francophones et anglophones du Canada?",
              validation: {
                required: false,
              },
              choices: [
                {
                  en: "Yes",
                  fr: "Oui",
                },
                {
                  en: "No",
                  fr: "Non",
                },
                {
                  en: "Not Applicable",
                  fr: "Non applicable",
                },
              ],
            },
          },
        ],
      },
    },
    {
      id: 8,
      type: "textField",
      properties: {
        titleEn: "This Answer is empty?",
        titleFr: "Ce reponse est vide?",
        placeholderEn: "yuppers",
        placeholderFr: "oui",
        descriptionEn: "This is a description",
        descriptionFr: "Voice une description",
        validation: {
          required: false,
        },
      },
    },
  ],
};
