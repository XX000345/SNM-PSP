// Exemple avec D3.js
const svg = d3.select('#diagram')
  .append('svg')
  .attr('width', '100%')
  .attr('height', '100%');

const snm = svg.append('g')
  .attr('transform', 'translate(300, 250)');

snm.append('circle')
  .attr('r', 50)
  .style('fill', '#3498db')
  .on('click', () => {
    alert('(Article L1115-10 Code Transports)\n\nUn SNM est un service numérique qui permet la vente de services de mobilité, stationnement, services fournis par une centrale de réservation. Le SNM assure:\n\n1. La délivrance des produits tarifaires de ces services, en appliquant leurs conditions d\'utilisation, de tarification, de réservation;\n2. La revente des services au prix qu\'il fixe et la vente de ses propres produits tarifaires, sous réserve de l\'accord de l\'autorité organisatrice compétence ou du fournisseur du service.');
  });

const usager = svg.append('g')
  .attr('transform', 'translate(300, 400)');

const linkUsager = svg.append('line')
  .attr('x1', 300)
  .attr('y1', 300)
  .attr('x2', 300)
  .attr('y2', 350)
  .style('stroke', '#000');

const cguCgv = svg.append('rect')
  .attr('x', 250)
  .attr('y', 350)
  .attr('width', 100)
  .attr('height', 50)
  .style('fill', '#e74c3c')
  .on('click', () => {
    alert('1) Rôle : Achète, réserve et utilise les services de mobilité.\n2) Interaction : Recherche, paiement, utilisation.\n3) Régime Juridique : Consommateur / Utilisateur final.\n4) Aspects Juridiques :\n\n* Droit de la Consommation (CGV/CGU (droit des passagers, responsabilité, classement pour les fournisseurs de services, Mention légale, PI...)\n* Droit de la Protection des Données (RGPD)\n* Droit Fiscal (Facturation, TVA)');
  });

const gestionnaires = svg.append('g')
  .attr('transform', 'translate(450, 250)');

const linkGestionnaires = svg.append('line')
  .attr('x1', 400)
  .attr('y1', 250)
  .attr('x2', 450)
  .attr('y2', 250)
  .style('stroke', '#000');

const contratArt28 = svg.append('rect')
  .attr('x', 500)
  .attr('y', 200)
  .attr('width', 150)
  .attr('height', 100)
  .style('fill', '#2ecc71')
  .on('click', () => {
    alert('Article L1115-10 + décret d\'application\n\nLe SNM peut délivrer, de droit, les produits tarifaires des gestionnaires de service\nLe SNM peut assurer la revente des titres + la vente de ses propres titres, sous condition d\'accords du gestionnaire de service\nLes gestionnaires de services doivent fournir une interface pour l\'accès du SNM à leurs services de vente numérique\nLes gestionnaires de services peuvent demander une compensation financière raisonnable et proportionnée au SNM pour les dépenses liées à la fourniture de l\'interface\nLe contrat prévoit les modalités techniques et financières de la vente des titres.');
  });

const aom = svg.append('g')
  .attr('transform', 'translate(600, 400)');

const linkAom = svg.append('line')
  .attr('x1', 600)
  .attr('y1', 300)
  .attr('x2', 600)
  .attr('y2', 350)
  .style('stroke', '#000');

const marcheService = svg.append('rect')
  .attr('x', 550)
  .attr('y', 350)
  .attr('width', 100)
  .attr('height', 50)
  .style('fill', '#f39c12');

const regiePublique = svg.append('rect')
  .attr('x', 650)
  .attr('y', 350)
  .attr('width', 100)
  .attr('height', 50)
  .style('fill', '#d35400');

const concessionSP = svg.append('rect')
  .attr('x', 550)
  .attr('y', 400)
  .attr('width', 100)
  .attr('height', 50)
  .style('fill', '#27ae60');

const cospMandat = svg.append('rect')
  .attr('x', 650)
  .attr('y', 400)
  .attr('width', 100)
  .attr('height', 50)
  .style('fill', '#8e44ad');
