import re
import os

HOUSING_DATA = {
    'en': {
        'uk': {
            'title': '🏢 Real Estate, Renting & Housing',
            'items': [
                {'name': 'Rightmove', 'desc': 'UK\'s #1 property portal for buying & renting apartments.', 'url': 'https://www.rightmove.co.uk/'},
                {'name': 'Zoopla', 'desc': 'Homes for sale, property values & flats to rent.', 'url': 'https://www.zoopla.co.uk/'},
                {'name': 'SpareRoom', 'desc': 'Flatshares, room rentals & sublets across the UK.', 'url': 'https://www.spareroom.co.uk/'},
                {'name': 'Gumtree UK', 'desc': 'Classifieds for property, rooms, furniture & local services.', 'url': 'https://www.gumtree.com/'}
            ]
        },
        'us': {
            'title': '🏢 Real Estate, Renting & Housing',
            'items': [
                {'name': 'Zillow', 'desc': 'US leading real estate & rental marketplace.', 'url': 'https://www.zillow.com/'},
                {'name': 'Apartments.com', 'desc': 'Homes, condos & apartments for rent nationwide.', 'url': 'https://www.apartments.com/'},
                {'name': 'Realtor.com', 'desc': 'Listings for buying, selling & renting homes.', 'url': 'https://www.realtor.com/'},
                {'name': 'Craigslist US', 'desc': 'Local classifieds, sublets, rooms & housing.', 'url': 'https://www.craigslist.org/'}
            ]
        },
        'ca': {
            'title': '🏢 Real Estate, Renting & Housing',
            'items': [
                {'name': 'Realtor.ca', 'desc': 'Canada\'s premier property & real estate marketplace.', 'url': 'https://www.realtor.ca/'},
                {'name': 'Rentals.ca', 'desc': 'Apartments, condos & houses for rent across Canada.', 'url': 'https://rentals.ca/'},
                {'name': 'Kijiji CA', 'desc': 'Buy, sell & rent property, cars & items locally.', 'url': 'https://www.kijiji.ca/'}
            ]
        },
        'au': {
            'title': '🏢 Real Estate, Renting & Housing',
            'items': [
                {'name': 'Realestate.com.au', 'desc': 'Australia\'s #1 property & rental portal.', 'url': 'https://www.realestate.com.au/'},
                {'name': 'Domain', 'desc': 'Property for sale, rent & share houses.', 'url': 'https://www.domain.com.au/'},
                {'name': 'Flatmates', 'desc': 'Australia\'s largest share accommodation site.', 'url': 'https://flatmates.com.au/'}
            ]
        }
    },
    'fr': {
        'fr': {
            'title': '🏢 Logement, Location & Immobilier',
            'items': [
                {'name': 'SeLoger', 'desc': '1er site d\'annonces immobilières et location d\'appartements.', 'url': 'https://www.seloger.com/'},
                {'name': 'Leboncoin', 'desc': 'Petites annonces, ventes, logements et services.', 'url': 'https://www.leboncoin.fr/'},
                {'name': 'Bien\'ici', 'desc': 'Recherche immobilière avec carte interactive 3D.', 'url': 'https://www.bienici.com/'},
                {'name': 'PAP', 'desc': 'Location et vente immobilière de particulier à particulier.', 'url': 'https://www.pap.fr/'}
            ]
        },
        'be': {
            'title': '🏢 Logement, Location & Immobilier',
            'items': [
                {'name': 'Immoweb', 'desc': 'Le premier site immobilier en Belgique.', 'url': 'https://www.immoweb.be/'},
                {'name': 'Zimmo', 'desc': 'Annonces immobilières, maisons et appartements.', 'url': 'https://www.zimmo.be/'}
            ]
        },
        'ch': {
            'title': '🏢 Logement, Location & Immobilier',
            'items': [
                {'name': 'ImmoScout24 CH', 'desc': 'Portail immobilier suisse pour louer et acheter.', 'url': 'https://www.immoscout24.ch/'},
                {'name': 'Homegate', 'desc': 'Plateforme immobilière et appartements en Suisse.', 'url': 'https://www.homegate.ch/'}
            ]
        },
        'ca': {
            'title': '🏢 Logement, Location & Immobilier',
            'items': [
                {'name': 'Centris', 'desc': 'Le site immobilier numéro 1 au Québec.', 'url': 'https://www.centris.ca/'},
                {'name': 'DuProprio', 'desc': 'Immobilier sans commission au Québec.', 'url': 'https://duproprio.com/'}
            ]
        }
    },
    'it': {
        'it': {
            'title': '🏢 Casa, Affitti & Immobiliare',
            'items': [
                {'name': 'Immobiliare.it', 'desc': 'Il primo sito di case e appartamenti in Italia.', 'url': 'https://www.immobiliare.it/'},
                {'name': 'Idealista IT', 'desc': 'Case e stanze in vendita e in affitto.', 'url': 'https://www.idealista.it/'},
                {'name': 'Subito.it', 'desc': 'Il sito n.1 in Italia per affitti, vendite e servizi.', 'url': 'https://www.subito.it/'},
                {'name': 'Casa.it', 'desc': 'Annunci immobiliari di case e appartamenti.', 'url': 'https://www.casa.it/'}
            ]
        }
    },
    'es': {
        'es': {
            'title': '🏢 Vivienda, Alquiler e Inmobiliaria',
            'items': [
                {'name': 'Idealista ES', 'desc': 'El portal inmobiliario líder en España para alquilar y comprar.', 'url': 'https://www.idealista.com/'},
                {'name': 'Fotocasa', 'desc': 'Pisos y habitaciones en alquiler en España.', 'url': 'https://www.fotocasa.es/'},
                {'name': 'Milanuncios', 'desc': 'Clasificados de viviendas, coches y servicios.', 'url': 'https://www.milanuncios.com/'},
                {'name': 'Habitaclia', 'desc': 'Portal inmobiliario de viviendas y alquileres.', 'url': 'https://www.habitaclia.com/'}
            ]
        },
        'mx': {
            'title': '🏢 Vivienda, Alquiler e Inmobiliaria',
            'items': [
                {'name': 'Inmuebles24', 'desc': 'Portal inmobiliario líder en México.', 'url': 'https://www.inmuebles24.com/'},
                {'name': 'Mercado Libre MX', 'desc': 'Inmuebles, alquileres y mercado online.', 'url': 'https://www.mercadolibre.com.mx/'}
            ]
        },
        'ar': {
            'title': '🏢 Vivienda, Alquiler e Inmobiliaria',
            'items': [
                {'name': 'Zonaprop', 'desc': 'Departamentos y casas en alquiler en Argentina.', 'url': 'https://www.zonaprop.com.ar/'},
                {'name': 'Mercado Libre AR', 'desc': 'Bienes raíces, inmuebles y mercado general.', 'url': 'https://www.mercadolibre.com.ar/'}
            ]
        }
    },
    'de': {
        'de': {
            'title': '🏢 Immobilien, Mieten & Wohnen',
            'items': [
                {'name': 'ImmobilienScout24', 'desc': 'Deutschlands Nr. 1 für Wohnungen & Häuser.', 'url': 'https://www.immobilienscout24.de/'},
                {'name': 'Kleinanzeigen', 'desc': 'Deutschlands größtes Portal für Wohnungen & Dinge.', 'url': 'https://www.kleinanzeigen.de/'},
                {'name': 'Immowelt', 'desc': 'Wohnungen und Häuser mieten & kaufen.', 'url': 'https://www.immowelt.de/'},
                {'name': 'WG-Gesucht', 'desc': 'Portal für WG-Zimmer & Wohnungen.', 'url': 'https://www.wg-gesucht.de/'}
            ]
        },
        'at': {
            'title': '🏢 Immobilien, Mieten & Wohnen',
            'items': [
                {'name': 'Willhaben', 'desc': 'Österreichs größtes Marktplatz- und Immobilienportal.', 'url': 'https://www.willhaben.at/'},
                {'name': 'Immowelt AT', 'desc': 'Immobilien in Österreich mieten & kaufen.', 'url': 'https://www.immowelt.at/'}
            ]
        },
        'ch': {
            'title': '🏢 Immobilien, Mieten & Wohnen',
            'items': [
                {'name': 'ImmoScout24 CH', 'desc': 'Schweizer Immobilienportal für Miete & Kauf.', 'url': 'https://www.immoscout24.ch/'},
                {'name': 'Tutti.ch', 'desc': 'Schweizer Online-Marktplatz für Kleinanzeigen.', 'url': 'https://www.tutti.ch/'}
            ]
        }
    },
    'ru': {
        'ru': {
            'title': '🏢 Недвижимость, Аренда и Жилье',
            'items': [
                {'name': 'ЦИАН', 'desc': 'База недвижимости, аренда и покупка квартир.', 'url': 'https://www.cian.ru/'},
                {'name': 'Авито', 'desc': 'Главный сервис объявлений, аренды жилья и товаров.', 'url': 'https://www.avito.ru/'},
                {'name': 'Яндекс Недвижимость', 'desc': 'Поиск и аренда проверенных квартир.', 'url': 'https://realty.yandex.ru/'},
                {'name': 'Домклик', 'desc': 'Поиск жилья и ипотека от Сбера.', 'url': 'https://domclick.ru/'}
            ]
        },
        'by': {
            'title': '🏢 Недвижимость, Аренда и Жилье',
            'items': [
                {'name': 'Kufar', 'desc': 'Главная площадка объявлений и жилья в Беларуси.', 'url': 'https://www.kufar.by/'},
                {'name': 'Realt.by', 'desc': 'Недвижимость в Минске и по всей Беларуси.', 'url': 'https://realt.by/'}
            ]
        },
        'kz': {
            'title': '🏢 Недвижимость, Аренда и Жилье',
            'items': [
                {'name': 'Krisha.kz', 'desc': 'Недвижимость и аренда квартир в Казахстане.', 'url': 'https://krisha.kz/'},
                {'name': 'OLX.kz', 'desc': 'Объявления, жилье и услуги в Казахстане.', 'url': 'https://www.olx.kz/'}
            ]
        }
    },
    'el': {
        'gr': {
            'title': '🏢 Ακίνητα, Ενοικιάσεις & Σπίτια',
            'items': [
                {'name': 'Spitogatos', 'desc': 'Η #1 ιστοσελίδα ακινήτων στην Ελλάδα.', 'url': 'https://www.spitogatos.gr/'},
                {'name': 'Χρυσή Ευκαιρία (XE)', 'desc': 'Ακίνητα, ενοικιάσεις διαμερισμάτων και αγγελίες.', 'url': 'https://www.xe.gr/'},
                {'name': 'Plot.gr', 'desc': 'Αναζήτηση σπιτιών και διαμερισμάτων.', 'url': 'https://www.plot.gr/'}
            ]
        },
        'cy': {
            'title': '🏢 Ακίνητα, Ενοικιάσεις & Σπίτια',
            'items': [
                {'name': 'Bazaraki', 'desc': 'The #1 marketplace & property portal in Cyprus.', 'url': 'https://www.bazaraki.com/'},
                {'name': 'Cyprus Property', 'desc': 'Homes and apartments for rent & sale in Cyprus.', 'url': 'https://www.realestate.com.cy/'}
            ]
        }
    },
    'pt': {
        'pt': {
            'title': '🏢 Habitação, Arrendamento e Imobiliário',
            'items': [
                {'name': 'Idealista PT', 'desc': 'O principal portal imobiliário em Portugal.', 'url': 'https://www.idealista.pt/'},
                {'name': 'Imovirtual', 'desc': 'Imóveis para comprar e arrendar em Portugal.', 'url': 'https://www.imovirtual.com/'},
                {'name': 'OLX Portugal', 'desc': 'Anúncios grátis de casas, quartos e serviços.', 'url': 'https://www.olx.pt/'}
            ]
        },
        'br': {
            'title': '🏢 Habitação, Arrendamento e Imobiliário',
            'items': [
                {'name': 'Viva Real', 'desc': 'Imóveis para alugar e comprar no Brasil.', 'url': 'https://www.vivareal.com.br/'},
                {'name': 'Zap Imóveis', 'desc': 'Venda e aluguel de apartamentos e casas.', 'url': 'https://www.zapimoveis.com.br/'},
                {'name': 'OLX Brasil', 'desc': 'O maior site de compra, venda e aluguel do Brasil.', 'url': 'https://www.olx.com.br/'}
            ]
        }
    },
    'hy': {
        'hy': {
            'title': '🏢 Բնակարաններ, Վարձակալություն և Անշարժ Գույք',
            'items': [
                {'name': 'List.am', 'desc': 'Հայաստանի խոշորագույն հայտարարությունների և բնակարանների կայքը:', 'url': 'https://www.list.am/'},
                {'name': 'Estate.am', 'desc': 'Անշարժ գույքի և բնակարանների վարձակալություն Երևանում:', 'url': 'https://www.estate.am/'},
                {'name': 'Bnakaran.am', 'desc': 'Բնակարանների առք, վաճառք և վարձակալություն:', 'url': 'https://www.bnakaran.am/'}
            ]
        }
    },
    'ka': {
        'ka': {
            'title': '🏢 უძრავი ქონება, ბინები და გაქირავება',
            'items': [
                {'name': 'MyHome.ge', 'desc': 'საქართველოს წამყვანი უძრავი ქონების პორტალი.', 'url': 'https://www.myhome.ge/'},
                {'name': 'SS.ge', 'desc': 'ბინების გაქირავება, ყიდვა-გაყიდვა და განცხადებები.', 'url': 'https://ss.ge/'},
                {'name': 'Place.ge', 'desc': 'უძრავი ქონების პორტალი საქართველოში.', 'url': 'https://place.ge/'}
            ]
        }
    },
    'tt': {
        'tt': {
            'title': '🏢 Недвижимость, Аренда и Жилье',
            'items': [
                {'name': 'ЦИАН Казань', 'desc': 'Аренда и покупка квартир в Казани и Татарстане.', 'url': 'https://kazan.cian.ru/'},
                {'name': 'Авито Казань', 'desc': 'Объявления и аренда жилья в Казани.', 'url': 'https://www.avito.ru/kazan/nedvizhimost'},
                {'name': 'Яндекс Недвижимость', 'desc': 'Проверенное жилье в Татарстане.', 'url': 'https://realty.yandex.ru/tatarstan/'}
            ]
        }
    },
    'ba': {
        'ba': {
            'title': '🏢 Недвижимость, Аренда и Жилье',
            'items': [
                {'name': 'ЦИАН Уфа', 'desc': 'Аренда и покупка квартир в Уфе и Башкортостане.', 'url': 'https://ufa.cian.ru/'},
                {'name': 'Авито Уфа', 'desc': 'Объявления и аренда жилья в Уфе.', 'url': 'https://www.avito.ru/ufa/nedvizhimost'},
                {'name': 'Яндекс Недвижимость', 'desc': 'Поиск квартир и домов в Башкортостане.', 'url': 'https://realty.yandex.ru/bashkortostan/'}
            ]
        }
    },
    'br': {
        'br': {
            'title': '🏢 Logement, Location & Immobilier (Breizh)',
            'items': [
                {'name': 'Ouest-France Immo', 'desc': 'Le 1er site immobilier en Bretagne.', 'url': 'https://www.ouestfrance-immo.com/'},
                {'name': 'SeLoger Bretagne', 'desc': 'Immobilier et location d\'appartements en Bretagne.', 'url': 'https://www.seloger.com/'},
                {'name': 'Leboncoin Bretagne', 'desc': 'Petites annonces et logements en Bretagne.', 'url': 'https://www.leboncoin.fr/'}
            ]
        }
    }
}

def format_housing_category(cat_data):
    title = cat_data['title']
    items = cat_data['items']
    cards_html = []
    for item in items:
        cards_html.append(f'''          <a href="{item['url']}" target="_blank" class="shop-card">
            <div class="sc-name">{item['name']}</div>
            <div class="sc-desc">{item['desc']}</div>
          </a>''')
    cards_str = '\n'.join(cards_html)
    return f'''      <div class="shop-category">
        <h4>{title}</h4>
        <div class="shop-grid">
{cards_str}
        </div>
      </div>'''

def process_file(lang):
    filepath = f'languages/{lang}/index.html'
    if not os.path.exists(filepath):
        print(f"Skipping missing file: {filepath}")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    lang_housing = HOUSING_DATA.get(lang, {})

    # We want to insert the housing category into each country panel <div class="country-panel" id="country-XX">
    def replace_panel(match):
        panel_html = match.group(0)
        panel_id_match = re.search(r'id=["\']country-([a-z]+)["\']', panel_html)
        if not panel_id_match:
            return panel_html
        country_code = panel_id_match.group(1)

        # Check if country_code has housing data
        cat_data = lang_housing.get(country_code)
        if not cat_data:
            # Fallback to first available country in lang_housing
            if lang_housing:
                cat_data = list(lang_housing.values())[0]
            else:
                return panel_html

        # Check if already inserted
        if 'Real Estate' in panel_html or 'Logement' in panel_html or 'Casa, Affitti' in panel_html or 'Vivienda' in panel_html or 'Immobilien' in panel_html or 'Недвижимость' in panel_html or 'Անշարժ Գույք' in panel_html or 'უძრავი ქონება' in panel_html or 'Ακίνητα' in panel_html or 'Habitação' in panel_html:
            return panel_html

        housing_html = format_housing_category(cat_data)

        # Insert housing_html right after <div class="country-name">...</div>
        name_match = re.search(r'(<div class="country-name">.*?</div>)', panel_html)
        if name_match:
            end_pos = name_match.end()
            panel_html = panel_html[:end_pos] + '\n' + housing_html + panel_html[end_pos:]
        return panel_html

    new_content = re.sub(r'<div class="country-panel".*?</div>\s*</div>', replace_panel, content, flags=re.DOTALL)

    # If panel replacement didn't catch due to regex trailing div differences, let's use a simpler pattern
    if new_content == content:
        # Match each <div class="country-panel" id="country-XX"> ... jusqu'au panel suivant ou fin de section
        def replace_panel_simple(match):
            p_head = match.group(1)
            c_code = match.group(2)
            p_rest = match.group(3)

            cat_data = lang_housing.get(c_code) or (list(lang_housing.values())[0] if lang_housing else None)
            if not cat_data:
                return match.group(0)

            if 'Real Estate' in p_rest or 'Logement' in p_rest or 'Immobilier' in p_rest or 'Casa' in p_rest or 'Vivienda' in p_rest or 'Immobilien' in p_rest or 'Недвижимость' in p_rest or 'Անշարժ Գույք' in p_rest or 'უძრავი ქონება' in p_rest or 'Ακίνητα' in p_rest or 'Habitação' in p_rest:
                return match.group(0)

            housing_html = format_housing_category(cat_data)

            name_m = re.search(r'(<div class="country-name">.*?</div>)', p_rest)
            if name_m:
                pos = name_m.end()
                p_rest = p_rest[:pos] + '\n' + housing_html + p_rest[pos:]
            return p_head + p_rest

        new_content = re.sub(r'(<div class="country-panel"\s+id=["\']country-([a-z]+)["\']>)(.*?)(?=<div class="country-panel"|</section>)', replace_panel_simple, content, flags=re.DOTALL)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Updated {filepath}")

for lang in HOUSING_DATA.keys():
    process_file(lang)
