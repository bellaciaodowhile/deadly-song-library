const DATA_BOOKS = [
    {
        "NombreLibro": "Al final mueren los dos",
        "Precio": 25,
        "Autor": "Adam Silvera",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/AL%20FINAL%20MUEREN%20LOS%20DOS.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Damián",
        "Precio": 25,
        "Autor": "Alex Mirez",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/DAMI%C3%81N.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Perfectos Mentirosos 1",
        "Precio": 25,
        "Autor": "Alex Mirez",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/PERFECTOS%20MENTIROSOS%201.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Perfectos Mentirosos 2",
        "Precio": 25,
        "Autor": "Alex Mirez",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/PERFECTOS%20MENTIROSOS%202.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Strange",
        "Precio": 25,
        "Autor": "Alex Mirez",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/STRANGE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Matar un reino",
        "Precio": 25,
        "Autor": "Alexandra Christo",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/MATAR%20UN%20REINO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Jaque mate al amor",
        "Precio": 30,
        "Autor": "Ali Hazelwood",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/JAQUE%20MATE%20AL%20AMOR.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La hipótesis del amor",
        "Precio": 30,
        "Autor": "Ali Hazelwood",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20HIP%C3%93TESIS%20DEL%20AMOR.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "La química del amor",
        "Precio": 30,
        "Autor": "Ali Hazelwood",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20QU%C3%8DMICA%20DEL%20AMOR.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La teoría del amor",
        "Precio": 30,
        "Autor": "Ali Hazelwood",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20TEOR%C3%8DA%20DEL%20AMOR.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "No es amor",
        "Precio": 35,
        "Autor": "Ali Hazelwood",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/NO%20ES%20AMOR.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Novia",
        "Precio": 30,
        "Autor": "Ali Hazelwood",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/NOVIA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "23 otoños antes de ti",
        "Precio": 30,
        "Autor": "Alice Kellen",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/23%20OTO%C3%91OS%20ANTES%20DE%20TI.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "33 razones para volver a verte",
        "Precio": 30,
        "Autor": "Alice Kellen",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/33%20RAZONES%20PARA%20VOLVER%20A%20VERTE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "El chico que dibujaba constelaciones",
        "Precio": 30,
        "Autor": "Alice Kellen",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/EL%20CHICO%20QUE%20DIBUJABA%20CONSTELACIONES.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Las alas de Sophie",
        "Precio": 30,
        "Autor": "Alice Kellen",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LAS%20ALAS%20DE%20SOPHIE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Todo lo que nunca fuimos",
        "Precio": 30,
        "Autor": "Alice Kellen",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/TODO%20LO%20QUE%20NUNCA%20FUIMOS.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Todo lo que somos juntos",
        "Precio": 30,
        "Autor": "Alice Kellen",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/TODO%20LO%20QUE%20SOMOS%20JUNTOS.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Tú y yo, invencibles",
        "Precio": 30,
        "Autor": "Alice Kellen",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/T%C3%9A%20Y%20YO%2C%20INVENCIBLES.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Heartstopper 1",
        "Precio": 30,
        "Autor": "Alice Oseman",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/HEARTSTOPPER%201.webp",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Heartstopper 2",
        "Precio": 30,
        "Autor": "Alice Oseman",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/HEARTSTOPPER%202.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Una perfecta confusión",
        "Precio": 45,
        "Autor": "América Rodas ",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNA%20PERFECTA%20CONFUSI%C3%93N.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Twisted Games",
        "Precio": 30,
        "Autor": "Ana Huang",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/TWISTED%20GAMES.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Twisted Hate",
        "Precio": 30,
        "Autor": "Ana Huang",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/TWISTED%20HATE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Twisted Love",
        "Precio": 30,
        "Autor": "Ana Huang",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/TWISTED%20LOVE.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Backstage",
        "Precio": 30,
        "Autor": "Angie Ocampo",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/BACKSTAGE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "El principito",
        "Precio": 20,
        "Autor": "Antoine de Saint-Exupéry",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/EL%20PRINCIPITO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "A través de la lluvia",
        "Precio": 25,
        "Autor": "Ariana Godoy",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/A%20TRAVES%20DE%20LA%20LLUVIA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "A través de mi ventana",
        "Precio": 25,
        "Autor": "Ariana Godoy",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/A%20TRAVES%20DE%20MI%20VENTANA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "A través de ti",
        "Precio": 25,
        "Autor": "Ariana Godoy",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/A%20TR%C3%81VES%20DE%20TI.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Fleur",
        "Precio": 30,
        "Autor": "Ariana Godoy",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/FLEUR.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Heist",
        "Precio": 25,
        "Autor": "Ariana Godoy",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/HEIST.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La revelación",
        "Precio": 30,
        "Autor": "Ariana Godoy",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20REVELACI%C3%93N.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Mi amor de Wattpad",
        "Precio": 25,
        "Autor": "Ariana Godoy",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/MI%20AMOR%20DE%20WATTPAD.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Sigue mi voz",
        "Precio": 30,
        "Autor": "Ariana Godoy",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/SIGUE%20MI%20VOZ.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Si me dices que no",
        "Precio": 25,
        "Autor": "Ava Draw",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/SI%20ME%20DICES%20QUE%20NO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Estuche: Hush-Hush",
        "Precio": 100,
        "Autor": "Becca Fitzpatrick",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ESTUCHE%20HUSH%20HUSH.png",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Mi estúpido niñero",
        "Precio": 25,
        "Autor": "Blue Woods",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/MI%20EST%C3%9APIDO%20NI%C3%91ERO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Elantris",
        "Precio": 30,
        "Autor": "Brandon Sanderson",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ELANTRIS.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Un corazón valiente y roto",
        "Precio": 25,
        "Autor": "Brigid Kemmerer",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UN%20CORAZ%C3%93N%20VALIENTE%20Y%20ROTO.webp",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Una maldición oscura y solitaria",
        "Precio": 25,
        "Autor": "Brigid Kemmerer",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNA%20MALDICI%C3%93N%20OSCURA%20Y%20SOLITARIA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "El rey oscuro",
        "Precio": 30,
        "Autor": "C. S. Pacat",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/EL%20REY%20OSCURO.webp",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Sí, sí es contigo",
        "Precio": 25,
        "Autor": "Calle y Poche",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/SI%2C%20SI%20ES%20CONTIGO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La cadena de oro",
        "Precio": 20,
        "Autor": "Cassandra Clare",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20CADENA%20DE%20ORO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Los manuscritos rojos de la magia",
        "Precio": 20,
        "Autor": "Cassandra Clare",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LOS%20MANUSCRITOS%20ROJOS%20DE%20LA%20MAGIA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Una luna sin miel",
        "Precio": 30,
        "Autor": "Christina Lauren",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNA%20LUNA%20SIN%20MIEL.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Las memorias de Fenrai",
        "Precio": 20,
        "Autor": "Claudia Ramírez",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LAS%20MEMORIAS%20DE%20FENRAI.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "A pesar de ti",
        "Precio": 30,
        "Autor": "Colleen Hoover",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/A%20PESAR%20DE%20TI.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Volver a empezar",
        "Precio": 30,
        "Autor": "Colleen Hoover",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/VOLVER%20A%20EMPEZAR.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": 18,
        "Precio": 30,
        "Autor": "Darlis Stefany",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/%2B18.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": 21,
        "Precio": 30,
        "Autor": "Darlis Stefany",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/%2B21.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Cautivando a Ashton",
        "Precio": 25,
        "Autor": "Darlis Stefany",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CAUTIVANDO%20A%20ASHTON.webp",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Clover",
        "Precio": 30,
        "Autor": "Darlis Stefany",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CLOVER.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Conquistando a Jeremy",
        "Precio": 25,
        "Autor": "Darlis Stefany",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CONQUISTANDO%20A%20JEREMY.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Contradicciones",
        "Precio": 30,
        "Autor": "Darlis Stefany",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CONTRADICCIONES.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "El deseo prohibido de Doug",
        "Precio": 30,
        "Autor": "Darlis Stefany",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/EL%20DESEO%20PROHIBIDO%20DE%20DOUG.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Crueles Instintos",
        "Precio": 45,
        "Autor": "Elena López",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CRUELES%20INSTINTOS.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "El arte de engañar al Karma",
        "Precio": 30,
        "Autor": "Elísabet Benavent",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/EL%20ARTE%20DE%20ENGA%C3%91AR%20AL%20KARMA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Todas esas cosas que te diré mañana",
        "Precio": 30,
        "Autor": "Elísabet Benavent",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/TODAS%20ESAS%20COSAS%20QUE%20TE%20DIR%C3%89%20MA%C3%91ANA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La novela del verano",
        "Precio": 30,
        "Autor": "Emily Henry",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20NOVELA%20DEL%20VERANO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Fabricante de lágrimas",
        "Precio": 30,
        "Autor": "Erin Doom",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/FABRICANTE%20DE%20LAGRIMAS.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Mi ex y otras maldiciones",
        "Precio": 30,
        "Autor": "Erin Sterling",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/MI%20EX%20Y%20OTRAS%20MALDIICIONES.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Lascivia I",
        "Precio": 30,
        "Autor": "Eva Muñoz",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LASCIVIA%20I.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Lascivia II",
        "Precio": 30,
        "Autor": "Eva Muñoz",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LASCIVIA%20II.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Lujuria I",
        "Precio": 30,
        "Autor": "Eva Muñoz",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LUJURIA%20I.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Lujuria II",
        "Precio": 40,
        "Autor": "Eva Muñoz",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LUJURIA%20II.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Boulevard",
        "Precio": 30,
        "Autor": "Flor M. Salvador",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/BOULEVARD.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Boulevard: Después de él",
        "Precio": 25,
        "Autor": "Flor M. Salvador",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/BOULEVARD_%20DESPU%C3%89S%20DE%20%C3%89L.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Silence",
        "Precio": 25,
        "Autor": "Flor M. Salvador",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/SILENCE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Dune",
        "Precio": 25,
        "Autor": "Frank Herbert",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/DUNE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Los hijos de la Elite",
        "Precio": 25,
        "Autor": "Gabriela Melo",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LOS%20HIJOS%20DE%20LA%20ELITE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Fuego y sangre",
        "Precio": 30,
        "Autor": "George R.R. Martin",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/File_009.png",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Bratva",
        "Precio": 30,
        "Autor": "Gleen Black",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/BRATVA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La orden",
        "Precio": 25,
        "Autor": "Gleen Black",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20ORDEN.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La reina",
        "Precio": 25,
        "Autor": "Gleen Black",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20REINA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Romper el hielo",
        "Precio": 35,
        "Autor": "Hannah Grace",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ROMPER%20EL%20HIELO.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "La llave de bronce",
        "Precio": 20,
        "Autor": "Holly Black",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20LLAVE%20DE%20BRONCE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La prueba de Hierro",
        "Precio": 20,
        "Autor": "Holly Black",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/File_011.png",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "El arte de ser nosotros",
        "Precio": 30,
        "Autor": "Inma Rubiales",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/EL%20ARTE%20DE%20SER%20NOSOTROS.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Hasta que nos quedemos sin estrellas",
        "Precio": 30,
        "Autor": "Inma Rubiales",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/HASTA%20QUE%20NOS%20QUEDEMOS%20SIN%20ESTRELLAS.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Todos los lugares que mantuvimos en secreto",
        "Precio": 30,
        "Autor": "Inma Rubiales",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/TODOS%20LOS%20LUGARES%20QUE%20MANTUVIMOS%20EN%20SECRETO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Animales fantásticos: los secretos de Dumbledore",
        "Precio": 25,
        "Autor": "J.K. Rowling",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LOS%20SECRETOS%20DE%20DUMBLEDORE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Corazón de fuego",
        "Precio": 30,
        "Autor": "Jasmín Martinez",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CORAZ%C3%93N%20DE%20FUEGO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Corazón de hielo",
        "Precio": 30,
        "Autor": "Jasmín Martinez",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CORAZ%C3%93N%20DE%20HIELO.webp",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Corazón oscuro",
        "Precio": 30,
        "Autor": "Jasmín Martinez",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CORAZ%C3%93N%20OSCURO.webp",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Unpregnant",
        "Precio": 30,
        "Autor": "Jenni Hendriks",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNPREGNANT.webp",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Antes de diciembre",
        "Precio": 30,
        "Autor": "Joana Marcus",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ANTES%20DE%20DICIEMBRE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Ciudades de humo ",
        "Precio": 30,
        "Autor": "Joana Marcus",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CIUDADES%20DE%20HUMO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Después de diciembre",
        "Precio": 30,
        "Autor": "Joana Marcus",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/DESPU%C3%89S%20DE%20DICIEMBRE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Estuche: Trilogía Fuego",
        "Precio": 100,
        "Autor": "Joana Marcus",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ESTUCHE%20TRILOG%C3%8DA%20FUEGO.png",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Etéreo",
        "Precio": 30,
        "Autor": "Joana Marcus",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/File_012.png",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Las luces de febrero",
        "Precio": 30,
        "Autor": "Joana Marcus",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LAS%20LUCES%20DE%20FEBRERO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Tres meses",
        "Precio": 30,
        "Autor": "Joana Marcus",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/TRES%20MESES.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "El duque y yo",
        "Precio": 30,
        "Autor": "Julia Quinn",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/EL%20DUQUE%20Y%20YO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "El perfume del rey",
        "Precio": 30,
        "Autor": "Karine Bernal Lobo",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/File_013.png",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Las cadenas del rey",
        "Precio": 30,
        "Autor": "Karine Bernal Lobo",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LAS%20CADENAS%20DEL%20REY.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "El Huésped",
        "Precio": 25,
        "Autor": "KendyMadness",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/EL%20HUESPED.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La selección: El principe y el guardián",
        "Precio": 25,
        "Autor": "Kiera Cass",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/EL%20PRINCIPE%20Y%20EL%20GUARDIAN.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La élite",
        "Precio": 20,
        "Autor": "Kiera Cass",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20ELITE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La selección: La reina y la favorita",
        "Precio": 20,
        "Autor": "Kiera Cass",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20REINA%20Y%20LA%20FAVORITA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La letra pequeña",
        "Precio": 30,
        "Autor": "Lauren Asher",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20LETRA%20PEQUE%C3%91A.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Powerless",
        "Precio": 45,
        "Autor": "Lauren Roberts",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/POWERLESS.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Reckless",
        "Precio": 45,
        "Autor": "Lauren Roberts",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/RECKLESS.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Estuche: Shadow and Bone",
        "Precio": 50,
        "Autor": "Leigh Bardugo",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/SHADOW%20AND%20BONE.png",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Estuche: Six of crows",
        "Precio": 50,
        "Autor": "Leigh Bardugo",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/SIX%20OF%20CROWS.png",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Seis de cuervos",
        "Precio": 30,
        "Autor": "Leigh Bardugo",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/SEIS%20DE%20CUERVOS.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Cuando no queden más estrellas que contar",
        "Precio": 30,
        "Autor": "María Martínez",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CUANDO%20NO%20QUEDEN%20M%C3%81S%20ESTRELLAS%20QUE%20CONTAR.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Tú, yo y un tal vez",
        "Precio": 30,
        "Autor": "María Martínez",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/TU%20YO%20Y%20UN%20TAL%20VEZ.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "De Lukov, con amor ",
        "Precio": 35,
        "Autor": "Mariana Zapata",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/DE%20LUKOV%20CON%20AMOR.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Heartless",
        "Precio": 35,
        "Autor": "Marissa Meyer",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/HEARTLESS.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Estuche: Pídeme lo que quieras",
        "Precio": 100,
        "Autor": "Megan Maxwell",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ESTUCHE%20P%C3%8DDEME%20LO%20QUE%20QUIERAS.png",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Culpa mía",
        "Precio": 30,
        "Autor": "Mercedes Ron",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CULPA%20M%C3%8DA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Culpa nuestra",
        "Precio": 30,
        "Autor": "Mercedes Ron",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CULPA%20NUESTRA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Culpa tuya",
        "Precio": 30,
        "Autor": "Mercedes Ron",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CULPA%20TUYA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Ébano",
        "Precio": 30,
        "Autor": "Mercedes Ron",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/%C3%89BANO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Marfil",
        "Precio": 30,
        "Autor": "Mercedes Ron",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/MARFIL.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Arlette",
        "Precio": 30,
        "Autor": "Oscary Arroyo",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ARLETTE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Tanner Reed",
        "Precio": 30,
        "Autor": "Oscary Arroyo",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/File_017.png",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Punk 57",
        "Precio": 30,
        "Autor": "Penelope Douglas",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/PUNK%2057.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "A dos metros de ti",
        "Precio": 25,
        "Autor": "Rachael Lippincott",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/A%20DOS%20METROS%20DE%20TI.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Todo este tiempo",
        "Precio": 25,
        "Autor": "Rachael Lippincott",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/TODO%20ESTE%20TIEMPO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Alas de Hierro. Edición Coleccionista",
        "Precio": 50,
        "Autor": "Rebecca Yarros",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ALAS%20DE%20HIERRO%20COLECCIONISTA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Alas de Ónix. Pasta blanda",
        "Precio": 35,
        "Autor": "Rebecca Yarros",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ALAS%20DE%20%C3%93NIX.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Alas de Ónix. Pasta dura",
        "Precio": 45,
        "Autor": "Rebecca Yarros",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ALAS%20DE%20%C3%93NIX.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Alas de Sangre. Edición Coleccionista",
        "Precio": 50,
        "Autor": "Rebecca Yarros",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ALAS%20DEE%20SANGRE%20COLECCIONISTA_.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Alas de Sangre. Pasta blanda",
        "Precio": 35,
        "Autor": "Rebecca Yarros",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ALAS%20DE%20SANGRE.webp",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Alas de Sangre. Pasta dura",
        "Precio": 40,
        "Autor": "Rebecca Yarros",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ALAS%20DE%20SANGRE.webp",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Las pruebas de Apolo",
        "Precio": 30,
        "Autor": "Rick Riordan",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LAS%20PRUEBAS%20DE%20APOLO%201%20EL%20ORACULO%20OSCURO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Magos y semidioses",
        "Precio": 20,
        "Autor": "Rick Riordan",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/MAGOS%20Y%20SEMIDIOSES.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Esposa de mi jefe",
        "Precio": 30,
        "Autor": "Roxana Aguirre",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ESPOSA%20DE%20MI%20JEFE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Cariño, cuánto te odio",
        "Precio": 35,
        "Autor": "Sally Thorne",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CARI%C3%91O%20CUANTO%20TE%20ODIO.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Ciudad de Medialuna 1",
        "Precio": 30,
        "Autor": "Sarah J. Maas",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CIUDAD%20DE%20MEDIALUNA%201.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Ciudad de Medialuna 2",
        "Precio": 30,
        "Autor": "Sarah J. Maas",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CIUDAD%20DE%20MEDIALUNA%202.webp",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Una corte de alas y ruina",
        "Precio": 30,
        "Autor": "Sarah J. Maas",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNA%20CORTE%20DE%20ALAS%20Y%20RUINA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Una corte de hielo y estrellas",
        "Precio": 25,
        "Autor": "Sarah J. Maas",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ANTIGUA%20-%20UNA%20CORTE%20DE%20HIELO%20Y%20ESTRELLAS.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Una corte de hielo y estrellas",
        "Precio": 25,
        "Autor": "Sarah J. Maas",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNA%20CORTE%20DE%20HIELO%20Y%20ESTRELLAS.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Una corte de llamas plateadas",
        "Precio": 30,
        "Autor": "Sarah J. Maas",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNA%20CORTE%20DE%20LLAMAS%20PLATEADAS.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Una corte de niebla y furia",
        "Precio": 30,
        "Autor": "Sarah J. Maas",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNA%20CORTE%20DE%20NIEBLA%20Y%20FURIA.png",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Una corte de niebla y furia",
        "Precio": 30,
        "Autor": "Sarah J. Maas",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNA%20CORTE%20DE%20NIEBLA%20Y%20FURIA.webp",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Una corte de rosas y espinas",
        "Precio": 30,
        "Autor": "Sarah J. Maas",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNA%20%20CORTE%20DE%20ROSAS%20Y%20ESPINAS.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Una corte de rosas y espinas",
        "Precio": 30,
        "Autor": "Sarah J. Maas",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNA%20CORTE%20DE%20ROSAS%20Y%20ESPINAS.png",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Asesino de brujas 2",
        "Precio": 30,
        "Autor": "Shelby Mahurin",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ASESINO%20DE%20BRUJAS%202.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Asesino de brujas 3",
        "Precio": 30,
        "Autor": "Shelby Mahurin",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ASESINO%20DE%20BRUJAS%203.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Caraval",
        "Precio": 30,
        "Autor": "Stephanie Garber",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/CARAVAL.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Finale",
        "Precio": 30,
        "Autor": "Stephanie Garber",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/FINALE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Legendary",
        "Precio": 30,
        "Autor": "Stephanie Garber",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LEGENDARY.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La canción del lobo",
        "Precio": 35,
        "Autor": "T. J. Klune ",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20CANCI%C3%93N%20DEL%20LOBO.jpg",
        "Destacado": "SI"
    },
    {
        "NombreLibro": "Destrózame",
        "Precio": 30,
        "Autor": "Tahereh Mafi",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/DESTR%C3%93ZAME.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Los siete maridos de Evelyn Hugo",
        "Precio": 30,
        "Autor": "Taylor Jenkins Reid",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LOS%20SIETES%20MARIDOS%20DE%20EVELYN%20HUGO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Anhelo",
        "Precio": 30,
        "Autor": "Tracy Wolff",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/ANHELO.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Furia",
        "Precio": 30,
        "Autor": "Tracy Wolff",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/FURIA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "La vida invisible de Addie LaRue",
        "Precio": 30,
        "Autor": "V.E. Schwab",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/LA%20VIDA%20INVISIBLE%20DE%20ADDIE%20LARUE.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Una obsesión perversa",
        "Precio": 30,
        "Autor": "V.E. Schwab",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/UNA%20OBSESI%C3%93N%20PERVERSA.jpg",
        "Destacado": "NO"
    },
    {
        "NombreLibro": "Penumbra",
        "Precio": 25,
        "Autor": "Yoshíe M. C.",
        "Imagen": "https://github.com/bellaciaodowhile/upload-deadly-song-library/blob/main/images/File_021.png",
        "Destacado": "NO"
    }
];

async function DOLLARS() {
    return {
        bcv: await axios.get('https://ve.dolarapi.com/v1/dolares/oficial'),
        paralelo: await axios.get('https://ve.dolarapi.com/v1/dolares/paralelo')
    }
}

(async () => {
    try {
        const response = await DOLLARS();
        const bcv = response.bcv.data
        const paralelo = response.paralelo.data
        console.log({
            bcv, paralelo
        });
        DATA_BOOKS.forEach((item) => {
            item.BCV = ((item.Precio * paralelo.promedio) / bcv.promedio).toFixed(2)
        })

    } catch (error) {
        console.error('Error fetching data:', error);
    }
})();

export default DATA_BOOKS;