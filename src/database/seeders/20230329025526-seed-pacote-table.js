'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("pacotes",
     [
      {
        name: "Thermas dos Laranjais",
        synopsis_card : "Hot Beach Resort, 4 noites",
        position: 1,
        price: "R$ 3,462",
        synopsis: "O destino mais legal do Brasil está aqui em Olímpia. Venha se divertir nas águas quentes, se deslumbrar com as belezas naturais. Aqui tem atrações especiais todos os meses. Músicas, danças, esporte e muito mais...",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Hot Park",
        synopsis_card: "Hotel Turismo , 3 noite",
        position: 2,
        price: "R$ 3,022",
        synopsis: "O parque aquático mais legal do Brasil está localizado no cerrado goiano. Tenha acesso ilimitado ao Hot Park",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Lagoa Parques e Hotéis",
        synopsis_card: "Lagoa Eco Towers Resorts, 3 noites",
        position : 3,
        price: "R$ 1,080",
        synopsis: "O Lagoa Quente Hotel traz detalhes que farão sua experiência em Caldas Novas ser memorável. Seu apartamento de férias dentro de um resort de luxo",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Beach Park",
        synopsis_card: "Suites Beach Park Resort, 4 noites",
        position: 4,
        price: "R$ 1,699",
        synopsis: "Relaxe com segurança e muito conforto no Suites Beach Park Resort. Com uma ampla área de lazer e fácil acesso ao Parque Aquático, o Resort é perfeito para famílias com crianças pequenas.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Prive Diversão",
        synopsis_card: "Prive Boulevard, 3 noites",
        position: 5,
        price: "R$ 1,368",
        synopsis: "Pioneiro da categoria superluxo na cidade, possui 402 apartamentos, todos com dois ambientes, é a opção perfeita para quem preza pela variedade de eventos e pela facilidade de locomoção pelo centro turístico de Caldas Novas.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Gramado Park",
        synopsis_card: "Bella Gramado Resort , 5 noites",
        position: 6,
        price: "R$ 2,115",
        synopsis: "A beleza da arquitetura colonial, o alto padrão de qualidade tipicamente europeia e a excelência do atendimento da Gramado Parks, se unem no Bella Gramado. Hotel exclusivo e charmoso que oferece uma experiência única na Serra Gaúcha.",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "SnowLand Gramado",
        synopsis_card: "Buona Vitta Gramado Resort, 4 noites",
        position: 7, 
        price: "R$ 1,592",
        synopsis: "No reino de Snowland, tem neve de verdade o ano inteiro. Em qualquer estação o clima é de diversão, com atrações incríveis para todas as idades! Viva a emoção de deslizar pelo gelo, descer a montanha de neve e até praticar esportes de neve como esqui e snowboard. Snowland Gramado, neve de verdade!",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Carmel Cumbuco Resort",
        synopsis_card: "Carmel Cumbuco Resort, 4 noites",
        position: 8,
        price: "R$ 3,128",
        synopsis: "Inserido em uma paisagem deslumbrante, distante apenas 40 minutos de Fortaleza, o Carmel Cumbuco Resort está localizado na Praia do Cumbuco, lugar internacionalmente conhecido pelos ventos favoráveis à prática de kitesurf, windsurf e outros esportes náuticos",  
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
  await queryInterface.bulkDelete('pacotes', null, {})
  }
};
