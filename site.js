(function(){
'use strict';
if(window.__lwSite)return;window.__lwSite=1;
var R='https://raw.githubusercontent.com/Stef7609/lilia-img/main/';
var D=[["compta", "Comptable", [["Tes rapports clients en clair", "Les chiffres deviennent un rapport lisible par un client non spécialiste, avec les 3 points à retenir."], ["Les relances qui partent toutes seules", "Des e-mails de relance pour les pièces manquantes, cordiaux mais fermes, adaptés à chaque client."], ["Le tri des justificatifs", "Un petit outil qui renomme et range les PDF par client et par mois. Tu n’y touches plus."]]], ["coiff", "Coiffeur·se", [["Tes publications de la semaine", "Cinq idées de posts et leurs textes, prêts à publier avec tes photos."], ["Les messages répétitifs", "Des réponses toutes prêtes pour les horaires, les tarifs et les prises de rendez-vous."], ["Les rappels et petites attentions", "SMS de rappel la veille, message d’anniversaire, offre pour les clientes absentes depuis 3 mois."]]], ["resto", "Restaurateur", [["Ta carte en trois langues", "Le menu du jour et des descriptions qui donnent faim, en français, néerlandais et anglais."], ["Les avis en ligne", "Une réponse juste à chaque avis, même les plus durs, sans y passer ta soirée."], ["Le coût de chaque plat", "Des fiches techniques à partir de tes prix fournisseurs, avec la marge par assiette."]]], ["shop", "Commerçant·e", [["Tes fiches produits", "Des descriptions claires et vendeuses pour ta boutique en ligne ou tes étiquettes."], ["Ta newsletter du mois", "Une lettre promo prête à envoyer, avec un objet qui donne envie d’ouvrir."], ["Le suivi du stock", "Un tableau simple qui t’alerte quand un article passe sous le seuil."]]], ["artisan", "Artisan", [["Des devis propres", "Tes notes de chantier deviennent un devis clair et professionnel."], ["Les demandes de clients", "Des réponses rapides et précises, avec tes disponibilités."], ["Les comptes-rendus de chantier", "Un résumé du jour avec les photos commentées, envoyé au client le soir même."]]], ["immo", "Agence immo", [["Des annonces qui sortent du lot", "Une annonce vivante et précise, en français et en néerlandais."], ["Les demandes de visite", "Des réponses types qui qualifient l’acheteur dès le premier message."], ["La synthèse d’un dossier", "Les documents d’un bien résumés en une page pour ton client."]]], ["coach", "Coach · formateur", [["Tes programmes de séance", "Un déroulé minute par minute, adapté au niveau du groupe."], ["Tes supports et quiz", "Fiches mémo, exercices et quiz générés à partir de ton cours."], ["Le suivi de tes clients", "Un résumé après chaque séance et les prochaines étapes, envoyés le jour même."]]]];
function h(s){var d=document.createElement('div');d.innerHTML=s;return d.firstElementChild}
var css=[
'.ls-robot{position:relative;margin:8px auto 0;max-width:1180px;border-radius:22px;overflow:hidden;border:1px solid rgba(255,140,154,.28);background:#0B0507 url('+R+'robot.webp) right center/auto 100% no-repeat;min-height:300px;display:flex;align-items:center;box-shadow:0 0 60px -20px rgba(255,59,82,.5)}',
'.ls-robot:before{content:"";position:absolute;inset:0;background:linear-gradient(90deg,#0B0507 28%,rgba(11,5,7,.55) 52%,transparent 78%);pointer-events:none}',
'.ls-robot .in{position:relative;z-index:1;padding:36px clamp(20px,4vw,48px);max-width:560px}',
'.ls-robot h2{font-size:clamp(26px,3.6vw,42px);font-weight:800;letter-spacing:-.01em;margin:8px 0 10px}',
'.ls-robot p{color:var(--ink-soft);margin:0 0 18px}',
'.ls-robot a.go{display:inline-block;padding:12px 20px;border-radius:12px;background:linear-gradient(180deg,#FF3B52,#D81B3A);color:#fff;text-decoration:none;font-weight:700;box-shadow:0 8px 28px -10px #FF3B52}',
'.ls-wrapb{padding:0 max(16px,env(safe-area-inset-left,0px))}',
'.ls-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px;margin-top:26px}',
'.ls-card{border:1px solid var(--line);border-radius:18px;overflow:hidden;background:linear-gradient(160deg,rgba(255,42,68,.12),var(--night-2) 60%);transition:transform .25s,box-shadow .25s}',
'.ls-card:hover{transform:translateY(-3px);box-shadow:0 0 34px -12px rgba(255,59,82,.6)}',
'.ls-card img{display:block;width:100%;aspect-ratio:16/9;object-fit:cover;background:#000}',
'.ls-card .b{padding:16px 18px 18px}',
'.ls-card h3{font-size:20px;margin:0 0 10px;color:#fff}',
'.ls-card ul{list-style:none;margin:0;padding:0;display:grid;gap:10px}',
'.ls-card li{font-size:14.5px;color:var(--ink-soft);line-height:1.45}',
'.ls-card li b{display:block;color:var(--ink);font-size:15px;margin-bottom:1px}',
'.nav .links a{padding-left:5px;padding-right:5px}',
'@media (max-width:700px){.ls-robot{min-height:340px;background-position:70% center}.ls-robot:before{background:linear-gradient(90deg,#0B0507 12%,rgba(11,5,7,.7) 60%,rgba(11,5,7,.3))}}'
].join('');
function init(){
  var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
  var first=document.querySelector('section.bento-wrap')||document.querySelector('main>section');
  if(first&&!document.querySelector('.ls-robot')){
    var rb=h('<div class="ls-wrapb"><section class="ls-robot" aria-label="Lilia, ton assistant IA"><div class="in"><span class="eyebrow">Lilia · IA au service de ton activité</span><h2>Ton assistant IA, pensé pour ton métier.</h2><p>Comptable, coiffeur·se, artisan, commerçant·e… découvre ce que Claude peut faire concrètement pour toi.</p><a class="go" href="#metiers">Voir les cas concrets →</a></div></section></div>');
    first.parentNode.insertBefore(rb,first);
  }
  var ve=document.getElementById('veille');
  if(ve&&!document.getElementById('metiers')){
    var cards=D.map(function(m){return '<article class="ls-card"><img src="'+R+m[0]+'.webp" alt="'+m[1]+'" loading="lazy" width="1100" height="614"><div class="b"><h3>'+m[1]+'</h3><ul>'+m[2].map(function(i){return '<li><b>'+i[0]+'</b>'+i[1]+'</li>'}).join('')+'</ul></div></article>'}).join('');
    var sec=h('<section class="band" id="metiers"><div class="wrap"><div class="sec-head"><span class="eyebrow">Cas concrets · par métier</span><h2>Ce que l’IA peut faire pour ton activité</h2><p>Trois gains de temps concrets pour chaque métier. Tu choisis le tien, tu essaies avec Claude.</p></div><div class="ls-grid">'+cards+'</div></div></section>');
    ve.parentNode.insertBefore(sec,ve);
  }
  var nav=document.querySelector('.nav .links a[href="#veille"]');
  if(nav&&!document.querySelector('.nav .links a[href="#metiers"]')){var a=document.createElement('a');a.href='#metiers';a.textContent='Métiers';nav.parentNode.insertBefore(a,nav)}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
