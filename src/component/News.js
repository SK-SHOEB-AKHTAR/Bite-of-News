import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
    article=[
        {
        "source": {
        "id": null,
        "name": "CNET"
        },
        "author": "Kourtnee Jackson",
        "title": "Crunchyroll Review: Unmatched Simulcasts and Vast Catalog Set It Apart - CNET",
        "description": "Crunchyroll is a leading platform for streaming anime, despite some areas that could be enhanced.",
        "url": "https://www.cnet.com/tech/services-and-software/crunchyroll-review-unmatched-simulcasts-and-vast-catalog-make-it-a-winner/",
        "urlToImage": "https://www.cnet.com/a/img/resize/c539695885f6c89eadc6a043d1a87c9c0ea98ef4/hub/2023/07/20/6373581a-46a0-4ece-9c48-6bc1db775401/crunchyroll-logo-1.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2024-03-10T16:00:08Z",
        "content": "For anime enthusiasts, there are multiple ways to watch anime in the US and internationally, but Crunchyroll has become a go-to streaming service for fans to find the latest releases and beloved clas… [+15326 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MacRumors"
        },
        "author": "Mitchel Broussard",
        "title": "Samsung's Spring Sale Expands With Big Discounts on Galaxy Smartphones, Watches, Tablets, and Laptops",
        "description": "This weekend, we're tracking a new sale at Samsung with savings on the company's best smartphones, smartwatches, tablets, and laptops. These discounts are part of Samsung's larger Discover Samsung Spring Sale, which we started covering last week with deals on…",
        "url": "https://www.macrumors.com/2024/03/10/samsungs-spring-sale-expands/",
        "urlToImage": "https://images.macrumors.com/t/lulyy5z8sCC5bSsGPkL6HbFRKQk=/1920x/article-new/2024/03/samsung-hero-blue.jpg",
        "publishedAt": "2024-03-10T14:37:44Z",
        "content": "This weekend, we're tracking a new sale at Samsung with savings on the company's best smartphones, smartwatches, tablets, and laptops. These discounts are part of Samsung's larger Discover Samsung Sp… [+2337 chars]"
        },
        {
        "source": {
        "id": "business-insider",
        "name": "Business Insider"
        },
        "author": "Katherine Tangalakis-Lippert,Lloyd Lee",
        "title": "Zuck roasts the Apple headset again",
        "description": "In a Threads post, Mark Zuckerberg slammed Apple's Vision Pro, saying Meta's Oculus Quest is better and the Apple headset is \"not what we aspire to.\"",
        "url": "https://www.businessinsider.com/mark-zuckerberg-slams-apple-vision-pro-again-meta-quest-vr-2024-3",
        "urlToImage": "https://i.insider.com/65ed2a0390413ab8e1db371a?width=1200&format=jpeg",
        "publishedAt": "2024-03-10T04:28:16Z",
        "content": "Facebook CEO Mark Zuckerberg introduced the new Oculus Quest at the Facebook F8 Conference at McEnery Convention Center in San Jose, California.AMY OSBORNE via Getty Images\r\n<ul><li>Mark Zuckerberg h… [+2621 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Javier Lacort",
        "title": "Hay rumores de que Apple está valorando lanzar un anillo inteligente. Tiene mucho sentido, pese al Apple Watch",
        "description": "El rumore rumore con el anillo inteligente de Apple viene de lejos, pero en estas últimas semanas se ha fortalecido gracias a una filtración de Mark Gurman en Bloomberg, quien confirmó que es uno de los productos sobre los que Apple está trabajando —lo cual n…",
        "url": "https://www.xataka.com/wearables/hay-rumores-que-apple-esta-valorando-lanzar-anillo-inteligente-tiene-mucho-sentido-pese-a-que-tenga-apple-watch",
        "urlToImage": "https://i.blogs.es/932c47/1366_2000/840_560.jpeg",
        "publishedAt": "2024-03-10T10:00:53Z",
        "content": "El rumore rumore con el anillo inteligente de Apple viene de lejos, pero en estas últimas semanas se ha fortalecido gracias a una filtración de Mark Gurman en Bloomberg, quien confirmó que es uno de … [+3452 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xataka.com"
        },
        "author": "Yúbal Fernández",
        "title": "Cómo liberar espacio en tu cuenta de Google de forma rápida y sencilla con estos consejos básicos",
        "description": "Vamos a decirte varios métodos y trucos para liberar espacio en tu cuenta de Google. Es ahí donde se centraliza el almacenamiento disponible tanto para Google Drive como para Gmail, Google Fotos y el resto de aplicaciones nativas de Google o de terceros que h…",
        "url": "https://www.xataka.com/basics/como-liberar-espacio-tu-cuenta-google-forma-rapida-sencilla-estos-consejos-basicos",
        "urlToImage": "https://i.blogs.es/975423/cuenta-google/840_560.jpeg",
        "publishedAt": "2024-03-10T13:00:54Z",
        "content": "Vamos a decirte varios métodos y trucos para liberar espacio en tu cuenta de Google. Es ahí donde se centraliza el almacenamiento disponible tanto para Google Drive como para Gmail, Google Fotos y el… [+6557 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Dan Girolamo",
        "title": "10 most Oscar-nominated movies ever, ranked",
        "description": "From Titanic and La La Land to Oppenheimer and The Lord of the Rings: The Fellowship of the Ring, these are the 10 most Oscar-nominated movies ever.",
        "url": "https://www.digitaltrends.com/movies/10-most-oscar-nominated-movies-ranked/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/03/Leonardo-DiCaprio-and-Danny-Nucci-in-Titanic-1-e1709838723800.jpg?resize=1200%2C630&p=1",
        "publishedAt": "2024-03-10T12:15:07Z",
        "content": "Paramount Pictures\r\nThe Oscars are still the pinnacle of achievement for anyone working in movies. It’s not the be-all and end-all of success, however, it’s undeniable that an Oscar win elevates a fi… [+10818 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Digital Trends"
        },
        "author": "Phil Nickinson",
        "title": "The upcoming sports streaming service is a textbook case of a ‘trollout’",
        "description": "Information about a major new sports streaming service continues to be released in dribs and drabs, which doesn't really help anyone.",
        "url": "https://www.digitaltrends.com/home-theater/super-sports-streaming-service-trollout/",
        "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2024/03/espn-sports.jpg?resize=1200%2C630&p=1",
        "publishedAt": "2024-03-10T14:30:03Z",
        "content": "Phil Nickinson / Digital Trends\r\nThere’s a phenomenon in the phone world that’s as smart as it is frustrating. That’s the one where a company announces an exciting new feature, only to eventually not… [+4309 chars]"
        },
        {
        "source": {
        "id": "bbc-news",
        "name": "BBC News"
        },
        "author": "https://www.facebook.com/bbcnews",
        "title": "Apple 'like Godfather' with new App Store rules",
        "description": "As Apple begins to allow other app stores on iPhones one entrepreneur criticises its behaviour.",
        "url": "https://www.bbc.co.uk/news/technology-68517246",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/156F5/production/_132879778_e1a592cf-c09f-4c16-86e7-a7b459c3c0dd.jpg",
        "publishedAt": "2024-03-10T00:49:42Z",
        "content": "This week Apple made the long-awaited landmark move to allow other companies to launch app stores on iPhones.\r\nThe tech giant was forced to act by EU lawmakers concerned about it having a market mono… [+5852 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "heise online"
        },
        "author": "Nico Ernst",
        "title": "Zwangsverkauf von TikTok könnte Hunderte Milliarden Dollar kosten",
        "description": "In den USA gibt es laut Medienberichten Gespräche unter Unternehmern über einen Kauf von TikTok. Der könnte bald erzwungen werden.",
        "url": "https://www.heise.de/news/Zwangsverkauf-von-TikTok-koennte-Hunderte-Milliarden-Dollar-kosten-9650851.html",
        "urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/5/5/4/3/6/6/shutterstock_634024823-24a4da6aea5ab43f.jpg",
        "publishedAt": "2024-03-10T16:56:00Z",
        "content": "Weil eine politische Entscheidung über die Zukunft von TikTok in den USA unmittelbar bevorsteht, überlegen einige Größen der Tech-Branche gemeinsam, wie ein möglicher Zwangsverkauf abgewickelt werden… [+2002 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Arin Waichulis",
        "title": "Security Bite: Hackers breach CISA, forcing the agency to take some systems offline",
        "description": "The Cybersecurity and Infrastructure Security Agency (CISA) says two systems were hacked in February through vulnerabilities in Ivanti products. In response, the agency had to shut down both systems, which reportedly had critical ties to U.S. infrastructure.\n…",
        "url": "https://9to5mac.com/2024/03/10/security-bite-hackers-breach-cisa-forcing-the-agency-to-take-some-systems-offline/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/maxresdefault.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2024-03-10T11:30:00Z",
        "content": "The Cybersecurity and Infrastructure Security Agency (CISA) says two systems were hacked in February through vulnerabilities in Ivanti products. In response, the agency had to shut down both systems,… [+3051 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "9to5Mac"
        },
        "author": "Bradley Chambers",
        "title": "Dear Tim, It’s time to get lost in the music",
        "description": "Dear Tim,\n\n\n\nI bought my first Apple product back in 2004, an HP-branded iPod. In 2005, I purchased a PowerBook G4 and have never looked back. I’ve been an Apple customer ever since, acquiring multiple iPhones, iPads, Apple TVs, and Apple Watches along the wa…",
        "url": "https://9to5mac.com/2024/03/10/dear-tim-its-time-to-get-lost-in-the-music/",
        "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/bradley-unplug.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
        "publishedAt": "2024-03-10T14:00:00Z",
        "content": "Dear Tim,\r\nI bought my first Apple product back in 2004, an HP-branded iPod. In 2005, I purchased a PowerBook G4 and have never looked back. Ive been an Apple customer ever since, acquiring multiple … [+4584 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Genbeta.com"
        },
        "author": "Eva Rodriguez de Luis",
        "title": "Esta empresa ha vuelto a Windows tras pasar años en Mac: estas son sus razones",
        "description": "Hay quien dice que una vez das el paso a Apple, ya no hay vuelta atrás. Sin embargo, haberlos, haylos. Aplicado a la informática de escritorio, desde un punto de vista personal supone un cambio de hábitos importante, pero en un entorno empresarial pasar de ma…",
        "url": "https://www.genbeta.com/a-fondo/esta-empresa-ha-vuelto-a-windows-pasar-anos-mac-estas-sus-razones",
        "urlToImage": "https://i.blogs.es/ad6c19/mac/840_560.jpeg",
        "publishedAt": "2024-03-10T16:00:54Z",
        "content": "Hay quien dice que una vez das el paso a Apple, ya no hay vuelta atrás. Sin embargo, haberlos, haylos. Aplicado a la informática de escritorio, desde un punto de vista personal supone un cambio de há… [+2744 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Genbeta.com"
        },
        "author": "Bárbara Bécares",
        "title": "Las plataformas de streaming líderes en cada país, representadas en un fabuloso mapa",
        "description": "Netflix es la plataforma con más usuarios de España, aunque ha caído tanto en nuestro país, tras un año de muchos cambios, como a nivel global, sigue estando por encima de otras plataformas. Hace unos días publicábamos sus buenas cifras a nivel global.\n<!-- B…",
        "url": "https://www.genbeta.com/a-fondo/plataformas-streaming-lideres-cada-pais-representadas-fabuloso-mapa-1",
        "urlToImage": "https://i.blogs.es/cb5f4d/captura-de-pantalla-2024-03-07-a-las-13.57.59-1-/840_560.jpeg",
        "publishedAt": "2024-03-10T14:00:53Z",
        "content": "Netflix es la plataforma con más usuarios de España, aunque ha caído tanto en nuestro país, tras un año de muchos cambios, como a nivel global, sigue estando por encima de otras plataformas. Hace uno… [+2585 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Joythebaker.com"
        },
        "author": "Toby Rose",
        "title": "Let It Be Sunday, 457!",
        "description": "Hello, friends!\nWhat’s your hidden talent?\nEarlier this week I was chauffeuring my son and his friend around town when the other kid was talking about how his mom can make anything. Her own clothes! Furniture! Songs! And it’s true. His mom is very creative; I…",
        "url": "https://joythebaker.com/2024/03/hidden-talents/",
        "urlToImage": "https://joythebaker.com/wp-content/uploads/2024/03/IMG_0516_VSCO-scaled.jpeg",
        "publishedAt": "2024-03-10T08:55:31Z",
        "content": "Hello, friends!\r\nWhats your hidden talent?\r\nEarlier this week I was chauffeuring my son and his friend around town when the other kid was talking about how his mom can make anything. Her own clothes!… [+2327 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "AppleInsider"
        },
        "author": "news@appleinsider.com (Charles Martin)",
        "title": "New iPads, Pencil, Magic Keyboard are still on the way",
        "description": "After the release of MacBook Air with M3, a report insists that updated iPad models are still on the way, accompanied by new accessories.Apple was expected to launch a number of new products in quick succession, with the MacBook Air and iPad Pro changes arriv…",
        "url": "https://appleinsider.com/articles/24/03/10/new-ipads-pencil-magic-keyboard-are-still-on-the-way",
        "urlToImage": "https://photos5.appleinsider.com/gallery/58902-120115-0-71381-8-xl-xl.jpg",
        "publishedAt": "2024-03-10T14:48:35Z",
        "content": "After the release of MacBook Air with M3, a report insists that updated iPad models are still on the way, accompanied by new accessories.\r\nApple was expected to launch a number of new products in qui… [+3117 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "CNET"
        },
        "author": "Lisa Eadicicco",
        "title": "Why iOS 18 Could Be a Bigger Deal Than the iPhone 16 - CNET",
        "description": "Commentary: Everyone's waiting to see how Apple incorporates generative AI into the iPhone. iOS 18 could provide the answer.",
        "url": "https://www.cnet.com/tech/mobile/why-ios-18-could-be-a-bigger-deal-than-the-iphone-16/",
        "urlToImage": "https://www.cnet.com/a/img/resize/d5e6d8754491f0d56c13d7180dc8102271e8ddc5/hub/2024/02/07/2b9e39ce-009e-4b8c-af54-a2113420cddd/many-phones-iphones-three-6623.jpg?auto=webp&fit=crop&height=675&width=1200",
        "publishedAt": "2024-03-10T12:00:21Z",
        "content": "Apple's annual software upgrades are always a big deal in the tech world. But that's truer than ever in 2024 as Apple is expected to sprinkle more AI into its upcoming iOS 18 software update, accordi… [+6698 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Journal du geek"
        },
        "author": "Journal du Geek",
        "title": "Le meilleur antivirus Mac est français, il profite aujourd’hui d’une remise dingue (-60%)",
        "description": "Intego est un éditeur de logiciels d'origine française qui s'est spécialisé sur MacOS depuis plus de 25 ans. Ce dernier édite un antivirus mondialement réputé, exclusivement pour les ordinateurs d'Apple. Ce week-end, celui-ci profite justement d'une remise fo…",
        "url": "https://www.journaldugeek.com/bon-plan/le-meilleur-antivirus-mac-est-francais-et-il-profite-aujourdhui-dune-remise-dingue-60/",
        "urlToImage": "https://www.journaldugeek.com/app/uploads/2024/03/Mac.jpg",
        "publishedAt": "2024-03-10T07:47:11Z",
        "content": "Sur la marché des antivirus, un éditeur se démarque de la concurrence, en proposant une solution exclusivement développée pour les Mac. Il s’agit de Intego, une société à la base française, ayant auj… [+4499 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "A Beautiful Mess"
        },
        "author": "Elsie Larson",
        "title": "Cape Cod Cocktail",
        "description": "A Cape Cod cocktail is a Vodka Cranberry. It’s also sometimes called a Cape Codder. The name Cape Cod comes from East Coast town in Massachusetts which is famous for growing cranberries. More cranberry drinks: Cosmo, Washington Apple Shot, Cranberry Spritz, O…",
        "url": "https://abeautifulmess.com/cape-cod-cocktail/",
        "urlToImage": "https://abeautifulmess.com/wp-content/uploads/2024/02/Cape-Cod-Drink.jpg",
        "publishedAt": "2024-03-10T13:05:00Z",
        "content": "A Cape Cod cocktail is a Vodka Cranberry. It’s also sometimes called a Cape Codder. The name Cape Cod comes from East Coast town in Massachusetts which is famous for growing cranberries. \r\nMore cranb… [+3615 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Isra Fdez",
        "title": "Qué significan los iconos, colores y errores que aparecen en la pantalla de los Apple Vision Pro",
        "description": "Aunque todavía no están disponibles para comprar en España, los Vision Pro se han convertido en el dispositivo más sorprendente de 2024. En la actualidad, sus capacidades técnicas son inimitables y ya son el rival a batir tanto en realidad virtual como realid…",
        "url": "https://www.applesfera.com/nuevo/que-significan-iconos-colores-errores-que-aparecen-pantalla-apple-vision-pro",
        "urlToImage": "https://i.blogs.es/029303/alerta-de-vision-pro/840_560.jpeg",
        "publishedAt": "2024-03-10T11:00:53Z",
        "content": "Aunque todavía no están disponibles para comprar en España, los Vision Pro se han convertido en el dispositivo más sorprendente de 2024. En la actualidad, sus capacidades técnicas son inimitables y y… [+7854 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Applesfera.com"
        },
        "author": "Álvaro García M.",
        "title": "He reconvertido mi viejo Mac en algo que pondría los pelos de punta a Steve Jobs: un Windows para jugar",
        "description": "Tener un ordenador de adorno, salvo que sea uno icónico como el primer Mac no es algo que se me pase por la cabeza. Menos cuando me costó un buen dinero y hoy día sigue siendo funcional. Se trata de mi iMac de 21,5 pulgadas con un Intel iCore 7 que por culpa …",
        "url": "https://www.applesfera.com/tutoriales/he-reconvertido-mi-viejo-mac-algo-que-pondria-pelos-punta-a-steve-jobs-windows-para-jugar",
        "urlToImage": "https://i.blogs.es/63989e/mac-windows-1/840_560.jpeg",
        "publishedAt": "2024-03-10T16:00:53Z",
        "content": "Tener un ordenador de adorno, salvo que sea uno icónico como el primer Mac no es algo que se me pase por la cabeza. Menos cuando me costó un buen dinero y hoy día sigue siendo funcional. Se trata de … [+6241 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "MakeUseOf"
        },
        "author": "Will Graf",
        "title": "How to Factory Reset Your MacBook or iMac",
        "description": "Here's what you need to do to wipe your Mac and revert all its settings to default.",
        "url": "https://www.makeuseof.com/factory-reset-mac/",
        "urlToImage": "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/wm/2024/03/macos-recovery-screen-appearing-on-a-macbook-air.jpg",
        "publishedAt": "2024-03-10T12:00:12Z",
        "content": "Key Takeaways\r\n<ul><li> Factory reset your Mac before you give it away or sell it to ensure none of your data is on it. </li><li> Modern macOS versions let you factory reset your Mac from the System … [+4439 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Faz.net"
        },
        "author": "Andreas Platthaus",
        "title": "Bücher-Podcast vom Rheingau Literatur Festival: Stephanie Barts „Erzählung zur Sache“",
        "description": "Eine RAF-Terroristin verstehen und beim Schreiben auf Distanz halten: Stephanie Bart stellt im Gespräch mit Andreas Platthaus beim Rheingau Literatur Festival ihr Buch „Erzählung zur Sache“ vor.",
        "url": "https://www.faz.net/podcasts/f-a-z-buecher-podcast/stephanie-bart-im-buecher-podcast-mit-erzaehlung-zur-sache-19570254.html",
        "urlToImage": "https://media0.faz.net/ppmedia/aktuell/520562530/1.9557208/facebook_teaser/stephanie-bart.jpg",
        "publishedAt": "2024-03-10T04:01:00Z",
        "content": "Am 24. Mai 1972 explodierten zwei Bomben der RAF auf dem Heidelberger Gelände des Hauptquartiers der US-Armee in Europa, drei Menschen starben. Mit dem Tag dieses Anschlags, an dem Gudrun Ensslin bet… [+1681 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Les Numériques"
        },
        "author": "Louis Paillat",
        "title": "Actualité : Le test des écouteurs true wireless Sennheiser Momentum True Wireless 4 a rejoint notre comparatif",
        "description": "Notre comparatif de 89 écouteurs true wireless accueille le test du Sennheiser Momentum True Wireless 4, disponible à partir de 299 €. Il vient en alternative de l'Apple AirPods Pro (2e génération) au prix de 245 €.",
        "url": "https://www.lesnumeriques.com/intra-ecouteur-true-wireless/le-test-des-ecouteurs-true-wireless-sennheiser-momentum-true-wireless-4-a-rejoint-notre-comparatif-n219335.html",
        "urlToImage": "https://cdn.lesnumeriques.com/optim/test/21/218977/a3360f69-sennheiser-momentum-true-wireless-4-des-ecouteurs-un-peu-en-avance-sur-leur-temps__1200_630__161-369-2838-1774_wtmk.jpg",
        "publishedAt": "2024-03-10T07:55:00Z",
        "content": "Il ny a certes rien à redire sur leurs prestations sonores, mais les Momentum True Wireless 4 accusent quelques lacunes qui les empêchent de briller véritablement. Sur le papier, les écouteurs de Sen… [+991 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Les Numériques"
        },
        "author": "lesnums",
        "title": "Actualité : PSG-Reims : comment regarder le match de Ligue 1 en streaming ?",
        "description": "Ce dimanche 10 mars, Paris affronte Reims dans un match de 25e journée de Ligue 1 Uber Eats. Voici comment voir le match en streaming.",
        "url": "https://www.lesnumeriques.com/evenement-sportif/psg-reims-comment-regarder-le-match-de-ligue-1-en-streaming-n219309.html",
        "urlToImage": "https://cdn.lesnumeriques.com/optim/news/21/219309/b71d5f40-psg-reims-comment-regarder-le-match-de-ligue-1-en-streaming__1200_630__0-37-2001-1087.jpg",
        "publishedAt": "2024-03-10T10:30:00Z",
        "content": "Cette saison 2023-2024 de Ligue 1 Uber Eats, 80 % des rencontres sont retransmises sur la plateforme de streaming Prime Video. Le service d'Amazon s'est en effet offert sept matchs sur neuf de chaque… [+2894 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xatakamovil.com"
        },
        "author": "Fran León",
        "title": "El Apple Watch que no necesita tener el iPhone al lado para funcionar marca su mínimo histórico en esta tienda",
        "description": "El Apple Watch SE es el modelo de reloj inteligente de Apple más económico, aunque si te decantas por la versión GPS + Cellular tendrás que pagar un poco más. Aunque ahora, en PcComponentes, puedes conseguir este modelo en oferta, por 295 euros.\n<!-- BREAK 1 …",
        "url": "https://www.xatakamovil.com/ofertas/apple-watch-que-no-necesita-tener-iphone-al-lado-para-funcionar-marca-su-minimo-historico-esta-tienda",
        "urlToImage": "https://i.blogs.es/28af15/ofertas_cpa_v3-copia-18-/840_560.jpeg",
        "publishedAt": "2024-03-10T10:00:53Z",
        "content": "El Apple Watch SE es el modelo de reloj inteligente de Apple más económico, aunque si te decantas por la versión GPS + Cellular tendrás que pagar un poco más. Aunque ahora, en PcComponentes, puedes c… [+1482 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xatakamovil.com"
        },
        "author": "Eduardo Marín",
        "title": "Convierte tu iPhone en un reloj de mesa con este truco de iOS 17",
        "description": "Con cada nueva versión de su sistema operativo iOS, Apple incorpora nuevas funciones dedicadas a hacernos la vida (digital) más fácil y a permitirnos aprovechar al máximo nuestros móviles. iOS 17 está lleno de novedades, y todavía siguen llegando mediante act…",
        "url": "https://www.xatakamovil.com/tutoriales/convierte-tu-iphone-reloj-mesa-este-truco-ios-17",
        "urlToImage": "https://i.blogs.es/83290f/modo-reloj-mesa-iphone/840_560.png",
        "publishedAt": "2024-03-10T13:00:54Z",
        "content": "Con cada nueva versión de su sistema operativo iOS, Apple incorpora nuevas funciones dedicadas a hacernos la vida (digital) más fácil y a permitirnos aprovechar al máximo nuestros móviles. iOS 17 est… [+3440 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Xatakamovil.com"
        },
        "author": "Eva Rodriguez de Luis",
        "title": "Ni Gcam ni App Store alternativa: lo que más envidio de Android como usuaria de iPhone es el filtro de llamadas de los Google Pixel",
        "description": "Desde hace años que la elección entre Android o iOS tiene que ver más con gusto que con funcionalidades e incluso creo que la personalización ya ha alcanzado el suficiente nivel como para que no sea determinante. Sí, Android sigue siendo más flexible y ni siq…",
        "url": "https://www.xatakamovil.com/movil-y-sociedad/gcam-app-store-alternativa-que-envidio-android-como-usuaria-iphone-filtro-llamadas-google-pixel",
        "urlToImage": "https://i.blogs.es/203216/sp/840_560.jpeg",
        "publishedAt": "2024-03-10T15:00:54Z",
        "content": "Desde hace años que la elección entre Android o iOS tiene que ver más con gusto que con funcionalidades e incluso creo que la personalización ya ha alcanzado el suficiente nivel como para que no sea … [+3175 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Frandroid"
        },
        "author": "Guillaume Sonnet",
        "title": "La Société Générale offre une belle enveloppe de 160 € rien qu’en ouvrant un compte",
        "description": "Besoin de renflouer les caisses ? Changer de banque peut vous faire gagner jusqu'à 160 euros avec un premier compte carte et c'est chez la Société Générale que ça se passe en ce moment.",
        "url": "https://www.frandroid.com/bons-plans/1958504_la-societe-generale-offre-une-belle-enveloppe-de-160-e-rien-quen-ouvrant-un-compte",
        "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/03/sg-160-euros-offre-mars-2024.jpg",
        "publishedAt": "2024-03-10T08:21:15Z",
        "content": "Besoin de renflouer les caisses ? Changer de banque peut vous faire gagner jusqu'à 160 euros avec un premier compte carte et c'est chez la Société Générale que ça se passe en ce moment.\r\nLa SG (ancie… [+4021 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Quartz India"
        },
        "author": "Kyle Barr / Gizmodo",
        "title": "The new MacBook Air is closer to the Pro — but that's not necessarily a good thing",
        "description": "If I had to think of the tech I’ve used most often in my day-to-day, I wouldn’t usually consider my phone first. If I ruminate long and hard enough, considering the number of person-hours that go into my work, I would consider my 13-inch M1-powered MacBook Ai…",
        "url": "https://qz.com/apple-macbook-air-m3-review-specs-performance-1851321613",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/f02701a67fc04193c1cef07616f5c1e8.jpg",
        "publishedAt": "2024-03-10T09:00:00Z",
        "content": "MacBook Air with M3 13- and 15-Inch\r\nThe Macbook Air redesign from two years ago is still just as silent, slim, and comfortable as you expect, but you won't see a massive difference from M2.\r\nThe Mac… [+15471 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Yahoo Entertainment"
        },
        "author": "Daniel Howley",
        "title": "Apple MacBook Air 2024 review: The best keeps getting better",
        "description": "Apple's M3-powered MacBook Air 13-inch and 15-inch promise strong performance and exceptional battery life.",
        "url": "https://finance.yahoo.com/news/apple-macbook-air-2024-review-the-best-keeps-getting-better-150017212.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/m3WqFBBn4Oa3.jZy0Nb7vQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://s.yimg.com/os/creatr-uploaded-images/2024-03/cf45a5d0-dd7e-11ee-9ff6-5a1e53e2f4b4",
        "publishedAt": "2024-03-10T14:53:59Z",
        "content": "Apples (AAPL) MacBook Air is one of the best laptops on the market. From its stylish design to its powerful performance and long-lasting battery, its hard to top what Apple has to offer. Well, except… [+5932 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "01net.com"
        },
        "author": "Gabriel Manceau",
        "title": "Quels sont les meilleurs smartphones haut de gamme en 2024 ?",
        "description": "Si vous avez un budget confortable et que vous n'arrivez pas à choisir parmi les nombreux smartphones haut de gamme disponibles, vous êtes au bon endroit. On vous présente notre sélection des meilleurs téléphones « premium » du moment.",
        "url": "https://www.01net.com/actualites/meilleurs-smartphones-haut-de-gamme.html",
        "urlToImage": "https://www.01net.com/app/uploads/2024/02/OnePlus-12-8-P1002505.jpg",
        "publishedAt": "2024-03-10T08:09:11Z",
        "content": "Si vous avez un budget confortable et que vous n’arrivez pas à choisir parmi les nombreux smartphones haut de gamme disponibles, vous êtes au bon endroit. On vous présente notre sélection des meilleu… [+8745 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smartworld.it"
        },
        "author": "Antonio Lepore",
        "title": "L'SSD interno di MacBook Air M3 base è più veloce del modello precedente",
        "description": "Apple recentemente ha lanciato il suo nuovo MacBook Air M3, che dovrebbe garantire performance migliori, Wi-Fi 6E ed il supporto...\r\nL'articolo L'SSD interno di MacBook Air M3 base è più veloce del modello precedente sembra essere il primo su Smartworld.",
        "url": "https://www.smartworld.it/news/ssd-macbook-air-m3-base.html",
        "urlToImage": "https://www.smartworld.it/images/2024/03/04/macbook-air-m3---10_1200x675.jpg",
        "publishedAt": "2024-03-10T13:03:00Z",
        "content": "Apple recentemente ha lanciato il suo nuovo MacBook Air M3, che dovrebbe garantire performance migliori, Wi-Fi 6E ed il supporto ai display esterni. Inoltre, la società di Cupertino avrebbe superato … [+1117 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Netzpolitik.org"
        },
        "author": "Bianca Kastl",
        "title": "Degitalisierung: Dann fährt den Zug halt die KI",
        "description": "Mehr Automatisierung, weniger Probleme? – Gemeinfrei-ähnlich freigegeben durch unsplash.com Christian Lue\r\nWas wäre, wenn wir statt Lokführer*innen einfach KIs die Züge fahren lassen? Die würden niemals streiken und aufmucken, oder? Toll? Eine Idee, bei der d…",
        "url": "https://netzpolitik.org/2024/degitalisierung-dann-faehrt-den-zug-halt-die-ki/",
        "urlToImage": "https://cdn.netzpolitik.org/wp-upload/2024/03/stuttgart_bahnhof-1200x675.jpg",
        "publishedAt": "2024-03-10T09:13:11Z",
        "content": "Die heutige Ausgabe von Degitalisierung kann sich nach dieser streiklustigen Woche ja eigentlich nur mit Zügen beschäftigen. Genauer gesagt mit deren Digitalisierung. Aber vielleicht beschäftigt sich… [+10397 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Creative Bloq"
        },
        "author": "joe.foley@futurenet.com (Joseph Foley)",
        "title": "People forlornly recall when Apple used to put things in the box",
        "description": "Apple used to care (sob).",
        "url": "https://www.creativebloq.com/news/apple-things-in-box",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/mzz3x6HUAVqTadWxjaaG2M-1200-80.jpg",
        "publishedAt": "2024-03-10T14:00:59Z",
        "content": "We've already heard a bunch of rumours about the iPhone 16, which we presume Apple will launch in September 2024. But while nothing of what we have heard can is guaranteed to be fact so far, there is… [+1412 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Fran Besora",
        "title": "Epic Games recupera su cuenta de desarrollador de Apple",
        "description": "Apple finalmente ha decidido volver a activar la cuenta de desarrollador de Epic Games tras haberla desactivado esta misma semana. Esto significa que la compañía detrás del famoso juego Fortnite podrá lanzar la Epic Games Store, un mercado alternativo al App …",
        "url": "https://www.lavanguardia.com/andro4all/apple/epic-games-recupera-su-cuenta-de-desarrollador-de-apple",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/03/fortnite-iphone.jpg?width=1200",
        "publishedAt": "2024-03-10T13:19:44Z",
        "content": "Epic Games podrá lanzar su propia tienda alternativa\r\nApple finalmente ha decidido volver a activar la cuenta de desarrollador de Epic Games tras haberla desactivado esta misma semana. Esto significa… [+1960 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Fran Besora",
        "title": "Cómo evitar la descarga de apps fuera del App Store en el iPhone",
        "description": "Apple ha lanzado recientemente la versión final de iOS 17.4, una versión muy importante al incluir, entre otras cosas, la posibilidad de descargar aplicaciones a través de tiendas de terceros alternativas al App Store. Una novedad que no es del agrado de todo…",
        "url": "https://www.lavanguardia.com/andro4all/apple/como-evitar-la-descarga-de-apps-fuera-del-app-store-en-el-iphone",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/03/tiendas-app-de-terceros.jpg?width=1200",
        "publishedAt": "2024-03-10T08:01:35Z",
        "content": "Cómo bloquear la descarga de apps fuera del App Store\r\nApple ha lanzado recientemente la versión final de iOS 17.4, una versión muy importante al incluir, entre otras cosas, la posibilidad de descarg… [+2450 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Fran Besora",
        "title": "En Japón, la mitad de los smartphone vendidos son iPhone",
        "description": "Apple es la clara dominadora en Estados Unidos. No hay quien pueda con la cuota de mercado de la compañía de la manzana mordida. Y es que allá donde vayas te encontrarás un iPhone, y es por eso que Apple se centra tanto en que las novedades siempre estén en E…",
        "url": "https://www.lavanguardia.com/andro4all/apple/en-japon-la-mitad-de-los-smartphone-vendidos-son-iphone",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/03/iphone-15-japon.jpg?width=1200",
        "publishedAt": "2024-03-10T14:31:20Z",
        "content": "El iPhone es el claro dominador en Japón\r\nApple es la clara dominadora en Estados Unidos. No hay quien pueda con la cuota de mercado de la compañía de la manzana mordida. Y es que allá donde vayas te… [+2238 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Fran Besora",
        "title": "MacBook Air M2 vs. MacBook Air M3: estas son todas las diferencias",
        "description": "Esta semana, Apple ha presentado el MacBook Air con procesador M3 y es natural que te preguntes si existen muchas diferencias respecto al MacBook Air con procesador M2. Por eso, a lo largo de este artículo, te vamos a contar todas las diferencias entre el Mac…",
        "url": "https://www.lavanguardia.com/andro4all/apple/macbook-air-m2-vs-macbook-air-m3-estas-son-todas-las-diferencias",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/03/macbook-air-con-m3-diferencias-m2.jpg?width=1200",
        "publishedAt": "2024-03-10T11:31:35Z",
        "content": "MacBook Air M2 vs. MacBook Air M3\r\nEsta semana, Apple ha presentado el MacBook Air con procesador M3 y es natural que te preguntes si existen muchas diferencias respecto al MacBook Air con procesador… [+2170 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "La Vanguardia"
        },
        "author": "Christian Collado",
        "title": "Consiguen instalar Mac OS en una Nintendo DS. Lo mejor de todo es que funciona",
        "description": "¿Te acuerdas del prototipo de Mac con pantalla táctil que salió a la luz hace unos meses? El mismo youtuber que, en su día, nos mostró esta rareza, está de vuelta con otro de sus experimentos. En esta ocasión, ha conseguido instalar una versión clásica de Mac…",
        "url": "https://www.lavanguardia.com/andro4all/tecnologia/consiguen-instalar-mac-os-en-una-nintendo-ds-lo-mejor-de-todo-es-que-funciona",
        "urlToImage": "https://www.lavanguardia.com/andro4all/hero/2024/03/macos-en-una-nintendo-ds.jpg?width=1200",
        "publishedAt": "2024-03-10T16:31:22Z",
        "content": "Una Nintendo DS con macOS en su interior\r\n¿Te acuerdas del prototipo de Mac con pantalla táctil que salió a la luz hace unos meses? El mismo youtuber que, en su día, nos mostró esta rareza, está de v… [+1696 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Clubic"
        },
        "author": "Mérouan Goumiri",
        "title": "Apple ne va finalement pas supprimer le compte développeur d'Epic Games (Fortnite)",
        "description": "Contre toute attente, Apple vient d'annoncer qu'elle allait rétablir le compte développeur d'Epic Games. Par conséquent, Fortnite va prochainement pouvoir faire son grand retour sur iPhone.",
        "url": "https://www.clubic.com/actualite-521146-apple-ne-va-finalement-pas-supprimer-le-compte-developpeur-d-epic-games-fortnite.html",
        "urlToImage": "https://pic.clubic.com/v1/images/2159974/raw",
        "publishedAt": "2024-03-10T12:52:00Z",
        "content": "Le 6 mars dernier, soit le jour de l'entrée en vigueur du Digital Markets Act (DMA), Apple a banni le compte développeur d'Epic Games. Selon les nouvelles règles établies par la firme de Cupertino, l… [+543 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Nextpit.de"
        },
        "author": "Benjamin Lucks",
        "title": "Die besten In-Ear-Kopfhörer mit ANC 2024 im Test und Vergleich",
        "description": "Ihr wollt Kopfhörer, die Euch mit gutem ANC versorgen? nextpit vergleicht die besten Kopfhörer von Sony, Bose und Apple mit aktiver Geräuschunterdrückung.",
        "url": "https://www.nextpit.de/die-besten-in-ear-kopfhoerer-mit-anc-2024-im-test-und-vergleich",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Best_In_Ear_Headphones_2023.jpg",
        "publishedAt": "2024-03-10T13:00:01Z",
        "content": "Die besten In-Ear-Kopfhörer 2023 im Vergleich\r\n<table><tr><td> </td><th>Beste In-Ears</th><th>Beste Alternative</th><th>Beste Audioqualität</th><th>Beste In-Ears von Apple</th><th>ANC-Champion</th><t… [+23145 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Indian Express"
        },
        "author": "Vivek Umashankar",
        "title": "Apple Podcasts lets you read podcast transcripts in iOS 17.4: Here’s how it works",
        "description": "Apple Podcasts upgrades your experience with automatic transcripts. Discover how to follow along, jump to key points, and even share quotes with the latest iOS update.",
        "url": "https://indianexpress.com/article/technology/techook/apple-podcasts-transcripts-9206297/",
        "urlToImage": "https://images.indianexpress.com/2024/03/apple-podcasts-transcripts-main.jpg",
        "publishedAt": "2024-03-10T11:00:23Z",
        "content": "With the release of the iOS 17.4 update, Apple has introduced a plethora of new features on eligible iPhones, including the introduction of auto-generated transcripts on Apple Podcasts.For Apple Podc… [+3012 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Googlewatchblog.de"
        },
        "author": "Jens",
        "title": "Pixel Watch 3: Endlich kommt ein größeres Display – Google behebt eine der größten Schwächen",
        "description": "Mit der Pixel Watch 3 geht Google die aus Nutzersicht größte Schwäche der Smartwatch an: Diese wird ein größeres Display erhalten.Pixel Watch 3: Endlich kommt ein größeres Display – Google behebt eine der größten SchwächenKeine Google-News mehr verpassen: Goo…",
        "url": "https://www.googlewatchblog.de/?p=221837",
        "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/pixel-watch-und-grosse-smartwatch.jpg",
        "publishedAt": "2024-03-10T07:30:07Z",
        "content": "In diesem Jahr wird Google schon die dritte Generation der Pixel-Smartwatch auf den Markt bringen, die als Pixel Watch 3 bereits ihre langen Schatten vorauswirft. Die ersten Leaks verraten uns, dass … [+4458 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Googlewatchblog.de"
        },
        "author": "Jens",
        "title": "Android: Microsoft schmeißt das gesamte Android-Ökosystem aus Windows 11 – warum gerade jetzt?",
        "description": "Microsoft zieht Android unter Windows 11 den Stecker - aber warum gerade jetzt?Android: Microsoft schmeißt das gesamte Android-Ökosystem aus Windows 11 – warum gerade jetzt?Keine Google-News mehr verpassen: GoogleWatchBlog bei Google News abonnieren",
        "url": "https://www.googlewatchblog.de/2024/03/android-microsoft-oekosystem-windows11/",
        "urlToImage": "https://www.googlewatchblog.de/wp-content/uploads/microsoft-android-1.jpg",
        "publishedAt": "2024-03-10T06:00:52Z",
        "content": "Microsoft hat über einen langen Zeitraum daran gearbeitet, eine Brücke zwischen den Android-Smartphones und Windows zu schaffen, zu der seit einiger Zeit auch die Nutzung von Android-Apps auf dem Win… [+3383 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Nextpit.de"
        },
        "author": "Edwin Kee",
        "title": "Top 5 Android- & iOS-Apps der Woche: Golf, Workouts, Rezepte und mehr!",
        "description": "Mit diesen fünf besten Apps der Woche, die wir im Apple App Store und im Google Play Store gefunden haben, könnt Ihr Euer Wochenende richtig genießen.",
        "url": "https://www.nextpit.de/top-5-android-ios-apps-der-woche-2024-10",
        "urlToImage": "https://fscl01.fonpit.de/userfiles/7687254/image/Top_Apps.jpg",
        "publishedAt": "2024-03-10T09:00:00Z",
        "content": "Wirf einen Blick auf die Liste der Apps, die diese Woche im Angebot sind. Hermit verwandelt Webseiten in eigenständige Apps und ermöglicht so einen schnellen und einfachen Zugriff, während Whispp ein… [+9290 chars]"
        },
        {
        "source": {
        "id": "espn",
        "name": "ESPN"
        },
        "author": "Brianna Williams",
        "title": "Top antics from the 'Villanova Knicks': Jalen Brunson, Josh Hart and Donte DiVincenzo",
        "description": "The three pros shared the court together at Villanova, and have had a blast doing so in the NBA as well. Here are their top moments so far.",
        "url": "https://www.espn.com/nba/story/_/id/39680432/jalen-brunson-josh-hart-donte-divincenzo-knicks-villanova-antics",
        "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F0308%2Fr1301784_1296x729_16%2D9.jpg",
        "publishedAt": "2024-03-10T14:41:23Z",
        "content": "Planning a trip with a group of friends can be challenging enough, but the New York Knicks might have the blueprint.\r\nEditor's Picks\r\nLed by college teammates-turned-friends-turned-NBA teammates, Jal… [+3107 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tomshw.it"
        },
        "author": "Andrea Maiellano",
        "title": "Nvidia scalza i giganti grazie all'IA, supera Amazon e punta alla vetta",
        "description": "Nvidia ha raggiunto il terzo posto nella classifica mondiale delle aziende più valutate, superando Saudi Aramco, e cercando di sorpassare Apple per raggiungere la seconda posizione.\nSecondo qu...",
        "url": "https://www.tomshw.it/hardware/nvidia-scalza-i-giganti-grazie-allia-supera-amazon-e-punta-alla-vetta",
        "urlToImage": "https://www.tomshw.it/storage/media/2023/10/2387/Zuqr4BxnUNH5WyEz5JQPgF-1200-80-png.webp",
        "publishedAt": "2024-03-10T09:56:52Z",
        "content": "Nvidia ha raggiunto il terzo posto nella classifica mondiale delle aziende più valutate, superando Saudi Aramco, e cercando di sorpassare Apple per raggiungere la seconda posizione.\r\nSecondo quanto r… [+2546 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Techbang.com"
        },
        "author": "cnBeta",
        "title": "搭配microLED的Apple Watch Ultra可能已夭折，原因是成本太高賺不到錢",
        "description": "傳聞中配備microLED的Apple Watch Ultra可能已夭折 歐司朗股價大跌四成\n據傳蘋果突然取消了被認為是用於Apple Watch Ultra的microLED顯示器訂單，導致歐司朗（ams Osram）的股價下跌了40%。\n雖然歐司朗和蘋果公司都沒有證實這家奧地利公司是下一代 Apple Watch Ultra 的微型 LED 螢幕供應商，但該公司此前曾與蘋果公司有過聯絡，並在 2023年發佈公告稱，2025年該公司的收入將有所增加，令外界預計屆時蘋果公司將推出採用該技術的 Apple Watc…",
        "url": "https://www.techbang.com/posts/113524-microledapple-watch-ultra",
        "urlToImage": "https://cdn1.techbang.com/system/excerpt_images/113524/original/b407c50f2038a242d220c075cd10d244.jpg?1709535169",
        "publishedAt": "2024-03-10T01:30:00Z",
        "content": "Apple Watch UltramicroLEDams Osram40%\r\n Apple Watch Ultra LED 20232025 Apple Watch Ultra 3\r\nams Osram microLED SIX Swiss Exchange\r\n Aldo Kamper 14.1 \r\n Rainer Irle Irle \r\n 2024 microLED 6.5 9.7 \r\n 40… [+236 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "B9.com.br"
        },
        "author": "Juliana Vilhena Nascimento",
        "title": "SXSW 2024 – (MAIS) Um tsunami vem aí",
        "description": "Amy Webb, Whurley e o MIT Tech Review concordam: não há momento melhor para se estar vivo do que o atual. Aliás, me impressionou o tanto de coisas em comum que estas três palestras trouxeram. Amy e o MIT trouxeram conteúdos densos, profundos e mais uma vez um…",
        "url": "https://www.b9.com.br/167032/sxsw-2024-mais-um-tsunami-vem-ai/",
        "urlToImage": "https://assets.b9.com.br/wp-content/uploads/2024/03/amywebb_sxsw2024.jpg",
        "publishedAt": "2024-03-10T03:38:46Z",
        "content": "Amy Webb, Whurley e o MIT Tech Review concordam: não há momento melhor para se estar vivo do que o atual.\r\nAliás, me impressionou o tanto de coisas em comum que estas três palestras trouxeram. Amy e … [+3427 chars]"
        },
        {
        "source": {
        "id": "marca",
        "name": "Marca"
        },
        "author": "BAZAR",
        "title": "Los chollos de la semana en Amazon: la camiseta de Bellingham con descuentazo, unas zapatillas Nike casi a mitad de precio...",
        "description": "En Amazon podemos encontrar productos con una excelente relación calidad-precio, comentarios positivos de los usuarios... y a muy buen precio. Entre ellos, destacamos desde ideas m",
        "url": "https://www.marca.com/regalos-promociones/2024/03/10/65ec9b2322601d12488b4577.html",
        "urlToImage": "https://phantom-marca.unidadeditorial.es/2a3166c519d20da15e51de7b41233a25/resize/1200/f/webp/assets/multimedia/imagenes/2024/03/10/17100264461306.png",
        "publishedAt": "2024-03-10T09:52:55Z",
        "content": "En Amazon podemos encontrar productos con una excelente relación calidad-precio, comentarios positivos de los usuarios... y a muy buen precio. Entre ellos, destacamos desde ideas muy prácticas para e… [+66411 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Gizmodo.com"
        },
        "author": "Rhett Jones",
        "title": "La mejor aplicación de todos los tiempos Día 10: Skype vs. Duolingo",
        "description": "¡Es el décimo día del desafío March Madness de Gizmodo para nombrar la mejor aplicación de todos los tiempos! SwiftKey realizó una sorpresa ayer, eliminando Telegram y avanzando a la siguiente ronda. Hoy, tenemos dos aplicaciones que no reciben mucha atención…",
        "url": "https://es.gizmodo.com/la-mejor-aplicacion-de-todos-los-tiempos-skype-duoling-1851323738",
        "urlToImage": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/dff7c05cce7309ee327e697d966f9a44.jpg",
        "publishedAt": "2024-03-10T17:00:00Z",
        "content": "¡Es el décimo día del desafío March Madness de Gizmodo para nombrar la mejor aplicación de todos los tiempos! SwiftKey realizó una sorpresa ayer, eliminando Telegram y avanzando a la siguiente ronda.… [+3647 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Ascii.jp"
        },
        "author": "ASCII",
        "title": "マツダの売れ筋SUV「CX-5」の中で「FIELD JOURNEY」をオススメしたい理由",
        "description": "マツダでイチバン売れていると言われているのが「CX-5」。それゆえ、グレード展開が多く、何を選んだらいいのかわからない。そんな人に「買うならFIELD JOURNEYのディーゼルエンジン仕様しかない」と提案します。",
        "url": "https://weekly.ascii.jp/elem/000/004/188/4188452/",
        "urlToImage": "https://ascii.jp/img/2024/03/08/3699136/l/be9a94411b3f4702.jpg",
        "publishedAt": "2024-03-10T03:00:00Z",
        "content": "CX-5 XD FIELD JOURNEY3839000\r\nSUVCX-5\r\nFIELD JOURNEY\r\nFIELD JOURNEY\r\nCX-5FIELD JOURNEY2021HP\r\nCX-5FIELD JOURNEY\r\nSUV\r\nCX-5 XD FIELD JOURNEY\r\nCX-54575×1845×1690mmFIELD JOURNEY\r\nMi-DRIVE\r\nOFF-ROAD\r\nMi-… [+180 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Corriere.it"
        },
        "author": "Giacomo Fasola",
        "title": "Le serie tv da vedere questa settimana: Manhunt, Endless Love e Bandidos",
        "description": "Tra le nuove uscite anche Mano De Hierro e Young Royals 3, entrambe su Netflix",
        "url": "https://www.corriere.it/spettacoli/cinema-serie-tv/24_marzo_10/serie-tv-da-vedere-netflix-amazon-sky-rai-b3133cc0-daee-11ee-96be-d6d12839d1dd.shtml",
        "urlToImage": "https://images2.corriereobjects.it/methode_image/socialshare/2024/03/05/b5a34362-daef-11ee-96be-d6d12839d1dd.jpg",
        "publishedAt": "2024-03-10T10:15:35Z",
        "content": "di Giacomo FasolaTra le nuove uscite anche Mano De Hierro e Young Royals 3, entrambe su Netflix\r\nManhunt (da venerdì 15 marzo su Apple TV+) \r\nIl libro Manhunt: The 12-Day Chase for Lincoln’s Killer, … [+3495 chars]"
        },
        {
        "source": {
        "id": "techradar",
        "name": "TechRadar"
        },
        "author": "amelia.schwanke@futurenet.com (Amelia Schwanke)",
        "title": "Millie Bobby Brown's new Netflix movie Damsel is a dud – watch these 3 great fantasy movies instead",
        "description": "Critics don't think Netflix's Damsel movie is worth saving – here are three better rated fantasy films to watch instead.",
        "url": "https://www.techradar.com/streaming/netflix/millie-bobby-browns-new-netflix-movie-damsel-is-a-dud-watch-these-3-great-fantasy-movies-instead",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/kH9hmGmFVEgTB3A3xnr4nj-1200-80.jpeg",
        "publishedAt": "2024-03-10T09:00:54Z",
        "content": "Millie Bobby Brown's latest Netflix venture Damsel, in which the Stranger Things' actor faces a fiery showdown with a dragon, is proving to be truly in distress after early reviews call it a flop. Th… [+3001 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
        "title": "Apple Suddenly Confirms New iPhone Update’s Controversial Surprise",
        "description": "The latest iPhone software has an unwelcome surprise for some users and Apple has just revealed more details.",
        "url": "https://www.forbes.com/sites/davidphelan/2024/03/10/apple-suddenly-confirms-new-iphone-updates-controversial-surprise/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/6595c48e88c659d5565ce984/0x0.jpg?format=jpg&crop=2309,1298,x0,y212,safe&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-03-10T17:04:28Z",
        "content": "Apples latest iPhone software, iOS 17.4 is just out and comes with plenty of feature updates. But in a development to be filed under unintended consequences, a surprise detail emerged for EU users wa… [+6301 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Zak Doffman, Contributor, \n Zak Doffman, Contributor\n https://www.forbes.com/sites/zakdoffman/",
        "title": "Google’s Surprise Update Just Made Android More Like iPhone",
        "description": "Why you need Android’s latest update on your phone…",
        "url": "https://www.forbes.com/sites/zakdoffman/2024/03/10/google-upgrade-samsung-s24-s23-pixel-towards-apple-iphone-15-pro-max/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65aeed369be3a016e61b4a9a/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-03-10T15:32:41Z",
        "content": "There is little to choose between premium Samsung or Apple or even Google smartphones these days. Its the iPhone versus Android operating systems that set them apart. Now thats changing as welland Go… [+5850 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Energy Innovation: Policy and Technology, Contributor, \n Energy Innovation: Policy and Technology, Contributor\n https://www.forbes.com/sites/energyinnovation/",
        "title": "Right To Repair: Making Products Last Longer Saves Money And The Climate",
        "description": "What are the benefits for a good right to repair law? Saving consumers money and helping the environment.",
        "url": "https://www.forbes.com/sites/energyinnovation/2024/03/10/right-to-repair-making-products-last-longer-saves-money-and-the-climate/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65ea155640360554064be50f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-03-10T12:30:00Z",
        "content": "Nik Sawe is a Policy Analyst, Industry at Energy Innovation, a nonpartisan energy and climate policy think tank. Energy Innovations new book, Zero-Carbon Industry, is the definitive guide to the brea… [+8145 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Brad Japhe, Senior Contributor, \n Brad Japhe, Senior Contributor\n https://www.forbes.com/sites/bradjaphe/",
        "title": "The World’s Best Bourbon—According To The 2024 American Craft Spirits Competition",
        "description": "This unapologetically aggressive Texas whiskey can be bottled as high as 140.9-proof.",
        "url": "https://www.forbes.com/sites/bradjaphe/2024/03/10/the-worlds-best-bourbon-according-to-the-2024-american-craft-spirits-competition/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65ecb7345c0a8fad1bc06d6c/0x0.jpg?format=jpg&crop=759,426,x6,y0,safe&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-03-10T08:30:00Z",
        "content": "Barrel strength Cowboy Bourbon from Garrison Brothers distillery out of Hye, Texas\r\nPhoto Illustration: Brad Japhe\r\nThe American Craft Spirits Association just announced the results of its 10th annua… [+3314 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Mark Sparrow, Senior Contributor, \n Mark Sparrow, Senior Contributor\n https://www.forbes.com/sites/marksparrow/",
        "title": "Saramonic Blink500 B2+ Is The Ideal And Most Affordable TikTok Mic",
        "description": "This handy wireless microphone kit from Saramonic is affordable and works like a charm. It's ideal for TikTRok and Instagram Reels.",
        "url": "https://www.forbes.com/sites/marksparrow/2024/03/10/saramonic-blink500-b2-is-the-ideal-and-most-affordable-tiktok-mic/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65e8776104d43bb474dcbbc7/0x0.jpg?format=jpg&crop=1330,748,x83,y92,safe&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-03-10T11:00:00Z",
        "content": "The Blink500 B2+ from Saramonic is a complete wireless microphone kit for making videos and ... [+] podcasts.\r\nSaramonic\r\nWho could have guessed that the rise of TikTok could have invigorated a secto… [+4779 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Zak Doffman, Contributor, \n Zak Doffman, Contributor\n https://www.forbes.com/sites/zakdoffman/",
        "title": "Beware—Do Not Click These Dangerous New Google Meet And Zoom Links",
        "description": "Online meetings just became a lot more dangerous...",
        "url": "https://www.forbes.com/sites/zakdoffman/2024/03/10/new-warning-for-microsoft-windows-11-samsung-google-pixel-users/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65edbed6f688886a182d27d9/0x0.jpg?format=jpg&crop=2516,1328,x245,y12,safe&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-03-10T14:45:00Z",
        "content": "We have all come to live with the endless succession of online meetings that dominate our working lives. But beware, some of those meetings might suddenly be more dangerous than you think...\r\nBewareo… [+4695 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Bill Stone, Contributor, \n Bill Stone, Contributor\n https://www.forbes.com/sites/bill_stone/",
        "title": "Does The Jobs Report Signal Recession And A June Fed Rate Cut?",
        "description": "A jobs report bolstered the case for a soft landing and a June Fed rate cut but inches toward triggering a recession warning. CPI and retail sales will be watched.",
        "url": "https://www.forbes.com/sites/bill_stone/2024/03/10/does-the-jobs-report-signal-recession-and-a-june-fed-rate-cut/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65ec8aeeedd725302eb3bb61/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-03-10T11:00:00Z",
        "content": "The unemployment rate rose to 3.9%. Notably, the rise is inching closer to triggering s recession ... [+] indicator with an unblemished track record.\r\ngetty\r\nStocks took a slight hiatus, and the Magn… [+4421 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Forbes"
        },
        "author": "Felicity Carter, Contributor, \n Felicity Carter, Contributor\n https://www.forbes.com/sites/felicitycarter/",
        "title": "London’s Culture Crush: What To See, Do And Experience In March",
        "description": "From wellness activities to gardening workshops, here’s what to see and do in London this month.",
        "url": "https://www.forbes.com/sites/felicitycarter/2024/03/10/londons-culture-crush-what-to-see-do-and-experience-in-march/",
        "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/65de09e18886b67e9514ce03/0x0.jpg?format=jpg&crop=2260,1270,x0,y162,safe&height=900&width=1600&fit=bounds",
        "publishedAt": "2024-03-10T12:45:36Z",
        "content": "LONDON, UNITED KINGDOM - Tower Bridge, The Tower of London and The Shard can be seen in this image, ... [+] taken by a drone from St Katharine Docks. (Photo by Chris Gorman/Getty Images)\r\nGetty Image… [+6549 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tom's Hardware UK"
        },
        "author": "Anton Shilov",
        "title": "Extra NAND chip makes Apple MacBook Air M3 256GB SSD drastically faster than predecessor",
        "description": "Apple fixes SSD performance on the latest M3-based MacBook Air laptops, but it is still not that fast.",
        "url": "https://www.tomshardware.com/laptops/macbooks/extra-nand-chip-makes-apple-macbook-air-m3-256gb-ssd-drastically-faster-than-predecessor",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/YNzYQ9cZmsqpRkWPALAg6h-1200-80.jpg",
        "publishedAt": "2024-03-10T15:36:34Z",
        "content": "Apple's entry-level MacBook Air notebooks based on M2 processors were heavily criticized for their low-performance solid state drives, as the company decided to cut costs and sacrifice parallelism. H… [+3378 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tom's Hardware UK"
        },
        "author": "Mark Tyson",
        "title": "Compal Rover Play 2-in-1 PC offers fold-out rear controller grips for gamers - wins an iF Design Award",
        "description": "An innovative new 2-in-1 gaming PC design features rear panels that can be articulated to form hand grips. Compal, a major PC and device ODM in Taiwan, is behind this gamer-focused concept which has recently won an iF Design Award.",
        "url": "https://www.tomshardware.com/laptops/gaming-laptops/compal-rover-play-2-in-1-pc-offers-fold-out-rear-controller-grips-for-gamers-wins-an-if-design-award",
        "urlToImage": "https://cdn.mos.cms.futurecdn.net/yRU3e4RfzC9EQwFAfzxC8i-1200-80.jpg",
        "publishedAt": "2024-03-10T14:25:12Z",
        "content": "An innovative new 2-in-1 laptop PC design features rear panels that can be articulated to form hand grips. Compal, a big PC and devices ODM in Taiwan, is behind this gamer-focused concept that has wo… [+2035 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Iphoneblog.de"
        },
        "author": "Alex Olma",
        "title": "Apple klickt den Browser-Back-Button: Progressive Web Apps bleiben auch in der EU",
        "description": "Progressive Web Apps waren Mitte Februar der Aufreger; Anfang März rollte Apple zurück. Previously, Apple announced plans to remove the Home Screen web apps capability in the EU as part of our efforts to comply with the DMA. The need to remove the capability …",
        "url": "https://www.iphoneblog.de/2024/03/10/apple-klickt-den-browser-back-button-progressive-web-apps-bleiben-auch-in-der-eu/",
        "urlToImage": "https://www.iphoneblog.de/wp-content/uploads/2024/03/image-10.3.2024-14.01.png",
        "publishedAt": "2024-03-10T12:32:44Z",
        "content": "Progressive Web Apps waren Mitte Februar derAufreger; Anfang März rollte Apple zurück.\r\nPreviously, Apple announced plans to remove the Home Screen web apps capability in the EU as part of our effort… [+1659 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Antyweb.pl"
        },
        "author": "Kamil Świtalski",
        "title": "Czekam na powrót elektroniki w tej estetyce. Nie wszystko musi być stalowe, tytanowe i nudne",
        "description": "Podobno moda powraca. Mam cichą nadzieję, że ta na przeźroczyste obudowy w elektronice również jeszcze do nas zawita.\n \n The post Czekam na powrót elektroniki w tej estetyce. Nie wszystko musi być stalowe, tytanowe i nudne appeared first on AntyWeb.",
        "url": "https://antyweb.pl/czekam-na-powrot-elektroniki-w-tej-estetyce-nie-wszystko-musi-byc-stalowe-tytanowe-i-nudne",
        "urlToImage": "https://antyweb.pl/img/1250/550/fit/wp-content/uploads/2024/02/sbo64j47m5/levi-meir-clancy-jdIT3puximI-unsplash.jpg",
        "publishedAt": "2024-03-10T08:30:44Z",
        "content": "Z przekonaniami dotyczcymi designu jest jak z ulubion zup: kady ma swoj. Przez lata bylimy wiadkami tego jak zmienia si design w wiecie elektroniki. Daleki jestem od twierdzenia, e kiedy byo lepiej i… [+2742 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "The 4-Pack Apple AirTag is $21 Off",
        "description": "Apple’s tracking device is so good that you can use it on almost anything. Today, the Apple AirTag 4-Pack is down to just $78.99 from its original price of $100 on Amazon. Instead of a single AirTag, why not get a 4-pack and a discount in the process? The ite…",
        "url": "https://www.ilounge.com/news/the-4-pack-apple-airtag-is-21-off",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2024/03/Apple-AirTag.png",
        "publishedAt": "2024-03-10T10:23:02Z",
        "content": "Apple’s tracking device is so good that you can use it on almost anything. Today, the Apple AirTag 4-Pack is down to just $78.99 from its original price of $100 on Amazon.\r\nInstead of a single AirTag… [+650 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "Epic’s developer account to be restored",
        "description": "Apple did a turnaround and has promised to restore the developer account of Epic Games in the EU. Epic recently disclosed that they could not guarantee following the App Store developer rules, and hence had their App Store developer account revoked. However, …",
        "url": "https://www.ilounge.com/news/apple/epics-developer-account-to-be-restored",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2024/03/Epic.png",
        "publishedAt": "2024-03-10T10:16:01Z",
        "content": "Apple did a turnaround and has promised to restore the developer account of Epic Games in the EU.\r\nEpic recently disclosed that they could not guarantee following the App Store developer rules, and h… [+689 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "New document outlines 30-day third-party App Store restrictions",
        "description": "A support document spells out the limitations of third party app stores in EU. Apple published an online document, stating that EU customers will be able to download or purchase iPhone apps from third party app stores beginning March 7. The Cupertino-based co…",
        "url": "https://www.ilounge.com/news/new-document-outlines-30-day-third-party-app-store-restrictions",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2024/03/App-Store.png",
        "publishedAt": "2024-03-10T10:18:49Z",
        "content": "A support document spells out the limitations of third party app stores in EU.\r\nApple published an online document, stating that EU customers will be able to download or purchase iPhone apps from thi… [+699 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "iLounge"
        },
        "author": "Samantha Wiley",
        "title": "PayPal business Tap to Pay option now supported on iPhone",
        "description": "PayPal business users for Venmo and Zettle will now be able to offer Tap to Pay using their iPhones for taking payments. PayPal recently announced that US customers can now use Tap to Pay nationwide. Apple Pay support had been declared since September last ye…",
        "url": "https://www.ilounge.com/news/paypal-business-tap-to-pay-option-now-supported-on-iphone",
        "urlToImage": "https://www.ilounge.com/wp-content/uploads/2024/03/PayPal.png",
        "publishedAt": "2024-03-10T10:21:14Z",
        "content": "PayPal business users for Venmo and Zettle will now be able to offer Tap to Pay using their iPhones for taking payments.\r\nPayPal recently announced that US customers can now use Tap to Pay nationwide… [+660 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Olhardigital.com.br"
        },
        "author": "Alessandro Di Lorenzo",
        "title": "Big techs investem mais em pesquisa do que todos os países da União Europeia juntos",
        "description": "Um estudo aponta que as regras aprovadas para combater o monopólio das big techs na União Europeia não bastam para reverter o quadro\nO post Big techs investem mais em pesquisa do que todos os países da União Europeia juntos apareceu primeiro em Olhar Digital.",
        "url": "https://olhardigital.com.br/2024/03/10/pro/big-techs-investem-mais-em-pesquisa-do-que-todos-os-paises-da-uniao-europeia-juntos/",
        "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2023/07/Uniao-Europeia-695x500.jpg",
        "publishedAt": "2024-03-10T16:05:00Z",
        "content": "Um estudo encomendado pela União Europeia aponta que as regras aprovadas para combater o monopólio das big techs não serão suficientes para alavancar a pesquisa e o desenvolvimento dentro do bloco. O… [+3437 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Olhardigital.com.br"
        },
        "author": "Rodrigo Mozelli",
        "title": "Jogos de hoje (10/03/24): onde assistir futebol ao vivo e horários das partidas",
        "description": "Confira horários e onde assistir ao vivo aos jogos de hoje (10/03/24) do futebol do Brasil e do mundo na TV e no streaming\nO post Jogos de hoje (10/03/24): onde assistir futebol ao vivo e horários das partidas apareceu primeiro em Olhar Digital.",
        "url": "https://olhardigital.com.br/2024/03/10/internet-e-redes-sociais/jogos-de-hoje-10-03-24-onde-assistir-futebol-ao-vivo-e-horarios-das-partidas/",
        "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2023/06/futebol-streaming-695x500.jpg",
        "publishedAt": "2024-03-10T11:00:00Z",
        "content": "Confira aqui no Olhar Digital onde assistir ao vivo às partidas de hoje, 10 de março de 2024. Veja a seguir os horários dos jogos de hoje, com atenção especial para as partidas dos campeonatos estadu… [+5315 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Olhardigital.com.br"
        },
        "author": "Bruno Capozzi",
        "title": "Oscar 2024: quem deve ganhar e quem poderia ganhar",
        "description": "Fizemos nossas apostas! Quem deve ganhar em cada categoria?\nO post Oscar 2024: quem deve ganhar e quem poderia ganhar apareceu primeiro em Olhar Digital.",
        "url": "https://olhardigital.com.br/2024/03/10/cinema-e-streaming/oscar-2024-quem-deve-ganhar-e-quem-poderia-ganhar/",
        "urlToImage": "https://olhardigital.com.br/wp-content/uploads/2023/03/oscar-2023-695x500.jpg",
        "publishedAt": "2024-03-10T15:43:50Z",
        "content": "Falta pouco para a maior premiação do cinema! O Oscar 2024 acontece neste domingo. E o Olhar Digital fez suas apostas! Ok, não quero comprometer toda a equipe em caso de múltiplos erros. Então vou me… [+6508 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Osnews.com"
        },
        "author": "Thom Holwerda",
        "title": "The Apple curl security incident 12604",
        "description": "When this command line option is used with curl on macOS, the version shipped by Apple, it seems to fall back and checks the system CA store in case the provided set of CA certs fail the verification. A secondary check that was not asked for, is not documente…",
        "url": "https://www.osnews.com/story/138761/the-apple-curl-security-incident-12604/",
        "urlToImage": null,
        "publishedAt": "2024-03-10T13:09:21Z",
        "content": "When this command line option is used with curl on macOS, the version shipped by Apple, it seems to fall back and checks the system CA store in case the provided set of CA certs fail the verification… [+453 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "Самый дешёвый MacBook Air с чипом M3 получил более скоростной SSD, чем у предшественника",
        "description": "На этой неделе Apple представила обновлённые 13- и 15-дюймовые ноутбуки MacBook Air, которые получили более мощные процессоры Apple M3. Теперь же стало известно, что вендор решил ещё одну проблему, которая беспокоила владельцев базовой версии MacBook Air пред…",
        "url": "https://3dnews.ru/1101471/obnovlyonniy-macbook-air-s-chipom-m3-osnastili-bolee-bistrim-nakopitelem-ssd-chem-u-predshestvennika",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/03/10/1101471/210.jpg",
        "publishedAt": "2024-03-10T07:57:00Z",
        "content": "Apple 13- 15- MacBook Air, Apple M3. , , MacBook Air . (SSD).\r\n: Apple\r\n, MacBook Air M2 256 256 , 128 , MacBook Air M1. MacBook Air M2 , SSD , .\r\n, MacBook Air M3 , . , , MacBook Air M3 256 NAND 128… [+100 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "Марк Цукерберг снова раскритиковал гарнитуру Apple Vision Pro и заявил, что Quest лучше",
        "description": "Генеральный директор M**a Platforms Марк Цукерберг (Mark Zuckerberg) продолжает критиковать гарнитуру смешанной реальности Apple Vision Pro, продажи которой начались в прошлом месяце. На этот раз в беседе с партнёром венчурного фонда Mosaic Ventures Бенедикто…",
        "url": "https://3dnews.ru/1101485/mark-tsukerberg-prodolgaet-kritikovat-arvrgarnituru-apple-vision-pro",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/03/10/1101485/221.jpg",
        "publishedAt": "2024-03-10T16:54:00Z",
        "content": "Meta Platforms (Mark Zuckerberg) Apple Vision Pro, . Mosaic Ventures (Benedict Evans) Threads , «», Apple Vision Pro, $3500 Meta Quest $500.\r\n: Mark Zuckerberg\r\n« Vision Pro , , Meta VR , \" \", Quest.… [+244 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "Чистая прибыль NVIDIA способна расти рекордными темпами, увеличившись на $60 млрд всего за три года",
        "description": "Анализ динамики курса акций NVIDIA в привязке к одной только выручке не даёт инвесторам полной картины развития бизнеса компании, поэтому ресурс Nikkei Asian Review решила обратить их внимание на другую особенность. В условиях бума искусственного интеллекта ч…",
        "url": "https://3dnews.ru/1101467/chistaya-pribil-nvidia-sposobna-rasti-rekordnimi-tempami-uvelichivshis-na-60-mlrd-vsego-za-tri-goda",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/03/10/1101467/nvidia_01.jpg",
        "publishedAt": "2024-03-10T05:31:00Z",
        "content": "NVIDIA , Nikkei Asian Review . NVIDIA , Apple Microsoft . NVIDIA $60 .\r\n: NVIDIA\r\n, , NVIDIA $64,3 , $60 . , Apple Microsoft . , Apple , $3,5 $53,3 iPhone 2007 . Microsoft , , $56 .\r\n NVIDIA . , 50 %… [+141 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Eonline.com"
        },
        "author": "Marenah Dobin",
        "title": "You Only Have 12 Hours To Save 30% on Poppi Prebiotic Soda",
        "description": "We independently selected these products because we love them, and we think you might like them at these prices. E! has affiliate relationships, so we may get a commission if you purchase...",
        "url": "https://www.eonline.com/news/1396864/poppi-soda-flash-deal",
        "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202429/rs_1200x1200-240309112329-Poppi_1.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
        "publishedAt": "2024-03-10T14:30:00Z",
        "content": "Poppi has such a devoted following. Here are some rave reviews from shoppers who adore these drinks.\r\nPoppi Sparkling Prebiotic Soda Reviews\r\nA shopper urged, \"ORDER NOW! I was so hesitant to order t… [+2360 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "DC Rainmaker"
        },
        "author": "DC Rainmaker",
        "title": "Sports Tech Week in Review: March 10th, 2024",
        "description": "The Week in Review is a collection of both all the goodness I’ve written during the past week around the internet, as well as a small pile of links I found interesting – generally endurance sports related. I’ve often wondered … Read More Here →",
        "url": "https://www.dcrainmaker.com/2024/03/sports-review-march.html",
        "urlToImage": "https://media.dcrainmaker.com/images/2024/03/WeekinREvewi.jpeg",
        "publishedAt": "2024-03-10T12:34:07Z",
        "content": "The Week in Review is a collection of both all the goodness Ive written during the past week around the internet, as well as a small pile of links I found interesting generally endurance sports relat… [+4214 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (Anh Tú.), Anh Tú.",
        "title": "Camera trước iPad Air 6 có thể được đặt theo chiều ngang, Apple vẫn muốn biến iPad thành laptop?",
        "description": "Như những tin đồn trước đây, Apple dường như sắp giới thiệu iPad Pro và iPad Air mới vào tháng này. Ngoài những thay đổi về thiết kế lẫn kích thước màn hình thì iPad Air được cho rằng sẽ có camera trước được đặt nằm ngang…",
        "url": "https://tinhte.vn/thread/camera-truoc-ipad-air-6-co-the-duoc-dat-theo-chieu-ngang-apple-van-muon-bien-ipad-thanh-laptop.3768925/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/03/8281314_Cover-ipadairr6-tinhte-anhtu.jpg",
        "publishedAt": "2024-03-10T07:05:16Z",
        "content": "Mod Nam Air ang s dng iPad Gen 10 theo chiu ngang vi bàn phím Magic Keyboard FolioTrc ó, mt s on code trong iPadOS 17.4 ã cho thy iPad Pro mi cng có camera c t theo chiu ngang tng t. 9to5mac cho bit … [+402 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (Pnghuy), Pnghuy",
        "title": "Google xác nhận sự tồn tại của Pixel 8a và tính năng theo dõi pin mới",
        "description": "Mới đây, trên trang hỗ trợ báo cáo lỗi Issue Tracker của mình, Google xác nhận với người dùng rằng Piel 8a sẽ được ra mắt trong tương lai gần và bên cạnh đó là tính năng theo dõi pin mới, bao gồm hiển thị chu kỳ sạc và thông tin về ngày sản xuất.",
        "url": "https://tinhte.vn/thread/google-xac-nhan-su-ton-tai-cua-pixel-8a-va-tinh-nang-theo-doi-pin-moi.3768982/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/03/8281456_cover-pixel-8a.jpg",
        "publishedAt": "2024-03-10T05:05:46Z",
        "content": "Mi ây, trên trang h tr báo cáo li Issue Tracker ca mình, Google xác nhn vi ngi dùng rng Piel 8a s c ra mt trong tng lai gn và bên cnh ó là tính nng theo dõi pin mi, bao gm hin th chu k sc và thông ti… [+624 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (P.W), P.W",
        "title": "Thử nghiệm MacBook Air M3: Không quạt, CPU có lúc lên 114 độ C, kém MacBook Pro 14 inch khoảng 33%",
        "description": "Đó là thử nghiệm của kênh YouTube Max Tech, so sánh hiệu năng sử dụng trong thời gian dài giữa chiếc MacBook Air M3 mới ra mắt, với một chiếc MacBook Pro 14 inch cũng sở hữu con chip xử lý y hệt nhưng ra mắt cuối năm ngoái:\n \n\n \nKhông ngoài dự đoán…",
        "url": "https://tinhte.vn/thread/thu-nghiem-macbook-air-m3-khong-quat-cpu-co-luc-len-114-do-c-kem-macbook-pro-14-inch-khoang-33.3768928/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/03/8281333_cover-mac.jpg",
        "publishedAt": "2024-03-10T06:50:58Z",
        "content": "ó là th nghim ca kênh YouTube Max Tech, so sánh hiu nng s dng trong thi gian dài gia chic MacBook Air M3 mi ra mt, vi mt chic MacBook Pro 14 inch cng s hu con chip x lý y ht nhng ra mt cui nm ngoái:K… [+1506 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (AudioPsycho), AudioPsycho",
        "title": "FiiO R9 - máy nghe nhạc all in one, công suất cao, đầy đủ công nghệ và kết nối, giá ~ 40.000.000đ",
        "description": "FiiO R9 là đầu phát nhạc kiêm headphone amplifier và streamer, gọi tóm gọn là All-in-one đi ha. Nó dựa trên thành công của R7 cũ với hàng loạt nâng cấp nhưng vẫn giữ nguyên kiểu dáng nhỏ gọn độc đáo với màn hình LCD lớn gợi nhớ đến các máy nghe…",
        "url": "https://tinhte.vn/thread/fiio-r9-may-nghe-nhac-all-in-one-cong-suat-cao-day-du-cong-nghe-va-ket-noi-gia-40-000-000d.3765752/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/02/8271893_tinhte-fiio-r9-dap-streamer_2.jpg",
        "publishedAt": "2024-03-10T13:51:08Z",
        "content": "Bn cng có th nhn thy R9 không có các nút tùy chnh nh trên R7, giúp mt trc ca máy tr nên gn gàng hn. èn RGB s thay i màu sc theo bitrate/codec. c bit, màu xanh lam theo phong cách TRON rt n tng.\r\nèn c… [+3821 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "3dnews.ru"
        },
        "author": null,
        "title": "Процессор нового MacBook Air разогревается до 114 ºC под нагрузкой",
        "description": "На этой неделе Apple представила обновлённые 13- и 15-дюймовые ноутбуки MacBook Air, которые оснастили производительным процессором Apple M3. Авторы YouTube-канала Max Tech уже успели протестировать одну из новинок и выяснить, что под высокой нагрузкой процес…",
        "url": "https://3dnews.ru/1101481/protsessor-novogo-macbook-air-razogrelsya-do-114-c-pod-nagruzkoy",
        "urlToImage": "https://3dnews.ru/assets/external/illustrations/2024/03/10/1101481/215.jpg",
        "publishedAt": "2024-03-10T12:38:00Z",
        "content": "Apple 13- 15- MacBook Air, Apple M3. YouTube- Max Tech , MacBook Air 114 ºC. - 100 ºC, .\r\n: Max Tech / YouTube\r\n15- MacBook Air M3 3D Mark Wild Life Extreme Cinebench 2024, , . 107 ºC, — 103 ºC. 46 º… [+234 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (Pnghuy), Pnghuy",
        "title": "Parallels Desktop 19.3 có thể đồng bộ clipboard với macOS, cải thiện hiệu suất chơi game",
        "description": "Bản cập nhật Parallels 19.3 mới dành cho những người dùng Pro và Business mang theo hai sự cải tiến để nâng cao trải nghiệm người dùng: đồng bộ clipboard giữa máy Mac và máy ảo Windows, thứ hai là hỗ trợ chơi game tốt hơn…",
        "url": "https://tinhte.vn/thread/parallels-desktop-19-3-co-the-dong-bo-clipboard-voi-macos-cai-thien-hieu-suat-choi-game.3768962/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/03/8281413_cover-parallels19-macOS-sonoma-tinhte-1.png",
        "publishedAt": "2024-03-10T01:54:08Z",
        "content": "Ch ng b clipboard giúp vic copy/paste gia máy Mac và máy o Windows linh hot hn. Ngi dùng có th chn bt copy/paste t Mac sang Windows và ngc li. Thm chí vi máy o Linux, nhà phát trin còn ci thin v kh n… [+409 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (vn_ninja), vn_ninja",
        "title": "iOS 18 sẽ cho phép thay đổi app bản đồ mặc định?",
        "description": "Apple vừa cập nhật tài liệu “DMA Compliance Report Non-Confidential Summary”, đề cập đến những thay đổi trong tương lai với iOS để đáp ứng Đạo luật Thị trường Kỹ thuật số mới của EU. Và một trong số đó chính là cho phép người dùng ở Châu Âu thay…",
        "url": "https://tinhte.vn/thread/ios-18-se-cho-phep-thay-doi-app-ban-do-mac-dinh.3768868/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/03/8281157_cover-Google-Maps-Apple-Maps-tinhte.jpg",
        "publishedAt": "2024-03-10T01:06:15Z",
        "content": "Apple t mc tiêu cung cp tu chn này vào tháng 3 nm 2025, ngha là có th xut hin trên nhng bn cp nht iOS 18 sp ti. S thay i này nhm mc ích áp ng các yêu cu ca DMA, trao cho ngi dùng quyn la chn app iu h… [+242 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Tinhte.vn"
        },
        "author": "no-reply@tinhte.vn (cuhiep), cuhiep",
        "title": "MacBook Air M3 bản base có tốc độ SSD nhanh hơn M2 nhiều đã bằng bản M1",
        "description": "Mình coi so sánh trên X và Youtube thấy SSD trên bản MacBook Air M3 base (8GB RAM và 256 GB SSD) nhanh hơn đáng kể so với bản base (8GB RAM và 256 GB SSD) của MacBook Air M2. Như vậy là có lý do để đổi máy mới chứ không phải là không nha anh em…\n…",
        "url": "https://tinhte.vn/thread/macbook-air-m3-ban-base-co-toc-do-ssd-nhanh-hon-m2-nhieu-da-bang-ban-m1.3768970/",
        "urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2024/03/8281440_Macbook-air-m3-base-ssd.jpg",
        "publishedAt": "2024-03-10T02:58:17Z",
        "content": "Mình coi so sánh trên X và Youtube thy SSD trên bn MacBook Air M3 base (8GB RAM và 256 GB SSD) nhanh hn áng k so vi bn base (8GB RAM và 256 GB SSD) ca MacBook Air M2. Nh vy là có lý do i máy mi ch kh… [+410 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Cult of Mac"
        },
        "author": "Cult of Mac Deals",
        "title": "$18 travel charger can handle iPhone, Apple Watch and more",
        "description": "Enjoy seamless wireless charging when you grab this Foldable Wireless Magnetic Charging Station on sale for just $17.59.\n(via Cult of Mac - Apple news, rumors, reviews and how-tos)",
        "url": "https://www.cultofmac.com/848114/compact-folding-travel-charger/",
        "urlToImage": "https://www.cultofmac.com/wp-content/uploads/2024/03/sale_324064_article_image-2.jpg",
        "publishedAt": "2024-03-10T13:30:19Z",
        "content": "Need a compact travel charger for iPhone, Apple Watch and more? This Foldable Wireless Magnetic Charging Station does the trick, with its two MagSafe-compatible charging pads and integrated adapters.… [+1692 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Daily Beast"
        },
        "author": "The Daily Beast",
        "title": "Katie Britt Should Have Known the SOTU Response Was a Trap",
        "description": "Photo Illustration by Erin O'Flynn/The Daily Beast/Getty Images\r\nListen to this full episode of The New Abnormal on Apple Podcasts, Spotify, Amazon and Stitcher.After listening to Alabama Sen. Katie Britt’s response to President Joe Biden’s State of the Union…",
        "url": "https://www.thedailybeast.com/katie-britt-should-have-known-the-sotu-response-was-a-trap-just-ask-bobby-jindal-or-blake-masters",
        "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1688,w_3000,x_0,y_0/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1710014207/240309-tna-bonus-katie-britt-hero_huoc3o",
        "publishedAt": "2024-03-10T02:09:09Z",
        "content": "Listen to this full episode of The New Abnormal on Apple Podcasts, Spotify, Amazon and Stitcher.\r\nAfter listening to Alabama Sen. Katie Britts response to President Joe BidensState of the Union addre… [+1631 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Taisy0.com"
        },
        "author": "taisy0",
        "title": "新型iPad Proや新型iPad Airは3月末〜4月に発表へ ｰ Bloombergの著名記者が改めて報告",
        "description": "BloombergのMark Gurman氏が、以前から何度か報告している通り、Appleは新型iPad Proなどを3月末か4月に発表する予定だと改めて報告しています。 同氏は以前にAppleは今春に新型MacBook Airと新型iPa",
        "url": "https://taisy0.com/2024/03/11/196036.html",
        "urlToImage": "https://taisy0.com/wp-content/uploads/2022/10/ipadpro2022.jpg",
        "publishedAt": "2024-03-10T15:59:39Z",
        "content": "BloombergMark GurmanAppleiPad Pro34\r\nAppleMacBook AiriPadMac\r\nAppleiPad ProiPad AirApple PencilMagic Keyboard34\r\niPad ProELiPad Air12.9"
        },
        {
        "source": {
        "id": null,
        "name": "Taisy0.com"
        },
        "author": "taisy0",
        "title": "Mac向け人気ゲームの期間限定セール開催中 ｰ ｢デススト｣や｢バイオハザード｣シリーズ、｢Stray｣など、11タイトルが対象",
        "description": "現在、AppleのMac App Storeで11タイトルを対象としたゲームアプリの期間限定セールが開催されています。 セールでは、今年1月末に配信が開始された「DEATH STRANDING DIRECTOR’S CUT」が40％オフの3",
        "url": "https://taisy0.com/2024/03/10/196026.html",
        "urlToImage": "https://taisy0.com/wp-content/uploads/2024/03/macgamesale202403.jpg",
        "publishedAt": "2024-03-10T01:45:31Z",
        "content": "AppleMac App Store11\r\n1DEATH STRANDING DIRECTORS CUT403,000Stray352,6004 RE:4504,000 for Mac601,990\r\n<ul><li>DEATH STRANDING DIRECTORS CUT3,000</li><li>Stray2,600</li><li> RE:44,000</li><li> for Mac1… [+184 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macitynet.it"
        },
        "author": "Mauro Notarianni",
        "title": "L’unità SSD del MacBook Air M3 base più veloce del precedente modello",
        "description": "Nel MacBook Air M3 versione base Apple sfrutta due chip flash da 128GB in parallelo e non uno, scelta che permette di ottenere una velocità di lettura e scrittura dell'unità SSD superiore rispetto al precedente modello base.\n- su macitynet.it L’unità SSD del …",
        "url": "https://www.macitynet.it/lunita-ssd-del-macbook-air-m3-base-piu-veloce-del-precedente-modello/",
        "urlToImage": "https://www.macitynet.it/wp-content/uploads/2024/03/macbookairm3-esempio.jpg",
        "publishedAt": "2024-03-10T06:29:08Z",
        "content": "Nel MacBook Air M3 versione base Apple sfrutta due chip flash da 128GB in parallelo e non uno, scelta che permette di ottenere una velocità di lettura e scrittura dell’unità SSD superiore rispetto al… [+1825 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "Ecco i migliori tablet su Amazon! Da 99 a 139, LTE, imbattibili per caratteristiche e risoluzioni!",
        "description": "Se cercate un tablet senza alcun tipo di rinuncia e spendendo poco, ecco i migliori 3 tablet su Amazon. Si parte da un 8,4\" 2K LTE a soli 99, ma attenzione anche agli altri due perché sono più grandi, capienti e costano veramente pochissimo.",
        "url": "https://www.hwupgrade.it/news/tablet/ecco-i-migliori-tablet-su-amazon-da-99-a-139-lte-imbattibili-per-caratteristiche-e-risoluzioni_125088.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/ama_doogee_t10pro_720.jpg",
        "publishedAt": "2024-03-10T06:10:55Z",
        "content": "Su Amazon ci sono molte occasioni di risparmio: si concretizzano in offerte a tempo che vanno da un modello all'altro, anche nell'arco di pochi giorni. Oggi sono in promozione i tablet \r\nDOOGEE T10 P… [+1858 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Hwupgrade.it"
        },
        "author": null,
        "title": "Tutte le migliori offerte Amazon Weekend: PC Lenovo 24GB RAM 519, Google Pixel 8 (anche Pro), iPhone, PC low cost e svendite lampo!",
        "description": "Ecco la rassegna delle migliori offerte Amazon per questo weekend! Ci trovate di tutto e attenzione ai prezzi, perché li abbiamo selezionati ad uno ad uno per un risparmio assicurato!",
        "url": "https://www.hwupgrade.it/news/multimedia/tutte-le-migliori-offerte-amazon-weekend-pc-lenovo-24gb-ram-519-google-pixel-8-anche-pro-iphone-pc-low-cost-e-svendite-lampo_125087.html",
        "urlToImage": "https://www.hwupgrade.it/i/n/Aamzonsconti111120_720.jpg",
        "publishedAt": "2024-03-10T06:57:41Z",
        "content": "In collaborazione con Amazon\r\nEcco la rassegna delle migliori offerte Amazon per questo weekend! Ci trovate di tutto e attenzione ai prezzi, perché li abbiamo selezionati ad uno ad uno per un risparm… [+10035 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sapo.pt"
        },
        "author": "Vítor M.",
        "title": "Apple vai bloquear atualizações de aplicações de terceiros se sair da UE durante 30 dias",
        "description": "A Apple está a ser obrigada a permitir lojas de aplicações alternativas na UE. Contudo, não está a fazer mais do que o explicitamente exigido por lei. Isto é, se sair mais de 30...",
        "url": "https://pplware.sapo.pt/apple/apple-vai-bloquear-atualizacoes-de-aplicacoes-de-terceiros-se-sair-da-ue-durante-30-dias/",
        "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2024/03/apple_lojas_terceiros00.jpg",
        "publishedAt": "2024-03-10T06:30:01Z",
        "content": "A Apple está a ser obrigada a permitir lojas de aplicações alternativas na UE. Contudo, não está a fazer mais do que o explicitamente exigido por lei. Isto é, se sair mais de 30 dias da União Europei… [+3584 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Sapo.pt"
        },
        "author": "Pedro Simões",
        "title": "SpaceX revelou que o seu serviço de satélite arrasou em testes com o Android e iPhone",
        "description": "Cada vez mais os utilizadores dependem das comunicações e por isso querem adotar a comunicação por satélite. Os fabricantes seguem este caminho e a SpaceX não quer ficar para trás. Por isso tem em...",
        "url": "https://pplware.sapo.pt/smartphones-tablets/android/spacex-revelou-que-o-seu-servico-de-satelite-arrasou-nos-testes-com-o-android-e-com-o-iphone/",
        "urlToImage": "https://pplware.sapo.pt/wp-content/uploads/2024/03/spacex_android_iphone_1.jpg",
        "publishedAt": "2024-03-10T16:00:54Z",
        "content": "Cada vez mais os utilizadores dependem das comunicações e por isso querem adotar a comunicação por satélite. Os fabricantes seguem este caminho e a SpaceX não quer ficar para trás. Por isso tem em te… [+2459 chars]"
        },
        {
        "source": {
        "id": "fox-sports",
        "name": "Fox Sports"
        },
        "author": null,
        "title": "2024 MLS odds: How to bet Inter Miami, Messi vs. CF Montreal",
        "description": "Can Lionel Messi and Inter Miami continue to set the pace atop the MLS standings? Check out what the odds say about their match against CF Montreal on Sunday.",
        "url": "https://www.foxsports.com/stories/mls/2024-mls-odds-how-to-bet-inter-miami-vs-montreal",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/messi-wide-020724.jpg?ve=1&tl=1",
        "publishedAt": "2024-03-10T17:08:09Z",
        "content": "Lionel Messi\r\n and Inter Miami\r\n are playing host this weekend to CF Montreal for a must-see match on Sunday.\r\nThe excitement kicks off at 5 p.m. ET on March 10 and can be streamed on Apple TV.\r\nRELA… [+1494 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smhn.info"
        },
        "author": "ryoppi913",
        "title": "新生活、ノートパソコン選びの「コツ」と「思考法」を伝授します！",
        "description": "3月といえば新生活。これから始まる大学生活や一人暮らしなどで、初めてノートパソコンが必要になったり新調したりする方も少なくないでしょう。一筋縄ではいかないノートパソコン選び。その選び方を解説していきます。自分の用途を考えよう！筆者が強い信条として持っているのが、「ノートパソコンは...smhn.infoにアクセスすると、全文を読むことができます。",
        "url": "https://smhn.info/202403-how-to-choise-laptop-pc-when-a-new-chapter",
        "urlToImage": "https://smhn.info/wp-content/uploads/2024/03/laptop-pc-choise.png",
        "publishedAt": "2024-03-10T07:08:49Z",
        "content": "3\r\nPCPCPC\r\nCPUGPU(=)\r\nPCSSDGPU\r\nPC\r\nWindows/MacMacMacBookWindowsLinuxWindows\r\nOS\r\n6UMPC\r\nPC\r\nDVD LIFEBOOK AHVAIO S15\r\nLIFEBOOK AH :FMV\r\n10\r\nThinkPad EInspiron 1410PC\r\nLG GramVAIO Z/SX LIFEBOOK UH\r\n1k… [+2664 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Smhn.info"
        },
        "author": "ryoppi913",
        "title": "Apple、iPhoneからAndroidへの「乗り換え」機能を開発！原因はまた「あの地域」",
        "description": "Appleは、ブラウザの自由化やサードパーティ製アプリストアなど、ユーザーがAndroidへ乗り換える際の負担を軽減する取り組みを行っていると発表しました。これはEUで制定された規制への対応の一環。EUが3月7日に発効したDMA、デジタル市場法に対して、Appleが今後行う対応を...smhn.infoにアクセスすると、全文を読むことができます。",
        "url": "https://smhn.info/202403-apple-iphone-android",
        "urlToImage": "https://smhn.info/wp-content/uploads/2024/03/236794_iPhone_15_pro_pro_Max_VPavic_0011.webp",
        "publishedAt": "2024-03-10T10:40:02Z",
        "content": "EU\r\n2024-02-20 19:11:43\r\nDMA\r\n28EUDMAiOSApp StoreApp StoreiOS...\r\niPhone5\r\n2024-01-12 16:03:23\r\nApple\r\nApple59to5MacApple20171iOS 10.2.1CPUAppleApple202035...\r\nApple CarPlay\r\n2023-12-24 17:28:25ryopp… [+541 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Macotakara.jp"
        },
        "author": "danbo",
        "title": "Adobe、Apple Vision用画像生成AIアプリ「Adobe Firefly Apple Vision Pro」をリリース",
        "description": "Adobe Firefly Apple Vision Pro\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nAdobeが、Apple Vision用画像生成AIアプリ「Adobe Firefly: Generative AI」を、App Storeにて配信を開始しています。\nAIによるクリエイティブな表現を探求するための遊び場です。\nテキストプロンプトを使用し、コンテンツスタイルを適用することで、美しい画像を生成します。\nAdob…",
        "url": "https://www.macotakara.jp/VisionApp/entry-46339.html",
        "urlToImage": "https://www.macotakara.jp/archives/001/202403/713d79bc9a320e6d.jpg",
        "publishedAt": "2024-03-10T07:33:40Z",
        "content": "Adobe Firefly Apple Vision Pro\r\nAdobeApple VisionAIAdobe Firefly: Generative AIApp Store\r\nAI\r\nAdobe Firefly Apple Vision Pro 0\r\nAdobe Firefly Apple Vision Pro\r\nAdobe Firefly Image 2 ModelFirefly"
        }
        ]
    constructor(){
        super();
        this.state={
            article:this.article
        }
    }
  render() {
    return (
        <div className='my-1 bg-secondary'>
            <h1>Here Are Your Bits Of News</h1>
        <div className='container my-3'>
            <div className='row'>
            {this.state.article.map((element)=>{
                return  <div className='col-md-4' key={element.url}>
                <NewsItem title={element.title.slice(0,40)} discription={element.description.slice(0,80)} imageUrl= {element.urlToImage} NewsUrl={element.url}/>
                </div>
            })}
                
            </div>
      
      </div>
      <div className='conatiner d-flex justify-content-between'>
        <button type="button" className="btn btn-info ">&larr; Privious</button>
        <button type="button" className="btn btn-info ">Next &rarr;</button>
        </div>
      </div>
    )
  }
}
