const cursos = [
    {img: "./media/icons/estab.png",text: "Juicio oral penal: Marzo de 2023, Casa de estudios profesionales, 30 horas"},
    {img: "./media/icons/handcuffs.png",text: "Audicencia Inicial, Sistema penal acusatorio, 30 horas, por la Juez de Control Olivia Mendieta Cua"},
    {img: "./media/icons/martillo.png",text: "Registro Nacional de Detencion, cuatro horas, impartido por la C.Agente del Ministerio Publico Aurora Cocoletzi Hernandez, Mayo 2020."},
    {img: "./media/icons/balanza.png",text: "Amparo penal, impartido por Sistema Penal Acusatorio y Oral capacitación puebla, treinta horas en línea, mayo 2020"},
    {img: "./media/icons/balanza.png",text: "Que hacer en caso de sismo, impartido por la Coordinacion de protección civil Estatal, tres horas, Septiembre de 2018."},
    {img: "./media/icons/health.png",text: "Primeros Auxilios, impartido por la Coordinacion de Proteccion Civil Estatal, tres horas, Octubre de 2018."},
]
const diplomas = [
    { img: "./media/icons/certificado.png",text: "de Verano Especializado en el Sistema Penal Acusatorio Adversarial,  celebrado en  las instalaciones del Centro Cultural Universitario  CCU de la Facultad de Derecho, Ciencias Políticas y Criminología de la Universidad Autónoma de Tlaxcala, Cien horas clase, Junio – Agosto 2017."},
    { img: "./media/icons/diploma.png",text: "presencial de Juicios Orales en la Universidad Metropolitana del estado de Tlaxcala, en Coordinación con la Secretaria Técnica del Consejo de Coordinación para la implementación  del Sistema de Justicia Penal, Cien Horas clase, Julio de 2016."},
    { img: "./media/icons/certificado.png",text: "en línea Juicios Orales  en  la SETEC Secretaria Técnica del Consejo de Coordinación para la implementación  del Sistema de Justicia Penal, Año  Mayo de 2016, Diploma"},
    { img: "./media/icons/diploma.png",text: "en Justicia penal para adolescentes y prevención de la delincuencia juvenil, Octubre 2022 a enero 2023, 120 horas"},
    { img: "./media/icons/certificado.png",text: "en Derecho Electoral  en la Universidad del Valle de Tlaxcala Año 2011-2012 "},
    { img: "./media/icons/diploma.png",text: "en Derecho Constitucional y Amparo Año 2010-2011, (Diploma)"},
]

cursos.map(({img,text}) => document.querySelector(".cursos section").innerHTML+= component.cajaText({img,text}))
diplomas.map(({img,text}) => document.querySelector(".diplimas section").innerHTML+= component.cajaText({img,text},1))




