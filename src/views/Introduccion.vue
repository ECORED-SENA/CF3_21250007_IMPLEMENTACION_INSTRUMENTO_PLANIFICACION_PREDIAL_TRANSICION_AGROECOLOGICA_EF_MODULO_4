<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo___color_1
      .px-5

        p.mb-5 Este componente formativo se enfoca en la sistematización rigurosa de los resultados obtenidos durante el diagnóstico participativo del predio, aplicando técnicas de recolección de información, interpretación de indicadores agroecológicos y estimación del Estado de Transición Agroecológica (ETA). A través de métodos como la observación participativa, las entrevistas familiares y la cartografía social, se construye una lectura integral del agroecosistema, identificando sus fortalezas, desequilibrios y potencialidades. Esta etapa permite consolidar la información en la plataforma IPPTA, generar el diagrama radial y proyectar acciones estratégicas con base en criterios técnicos, territoriales y comunitarios, fortaleciendo la planificación predial agroecológica.

        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/img2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 La recolección de información y la seguridad en campo constituyen la base del acompañamiento agroecológico. A través de métodos participativos, se integran el conocimiento técnico y los saberes locales, permitiendo comprender el territorio como un sistema vivo. Las técnicas de observación participativa, entrevistas familiares y registro fotográfico o audiovisual no solo recolectan datos, sino que promueven la construcción colectiva del conocimiento y la apropiación comunitaria del proceso de diagnóstico.
        
        .row.align-items-center.m-0.style___box_1(data-aos="zoom-in")
          .col-xl
            p.mb-0 De forma complementaria, la seguridad y la bioseguridad en campo garantizan el bienestar de las personas y la protección del entorno. El uso adecuado de los Elementos de Protección Personal (EPP), junto con la aplicación de protocolos preventivos, fortalece la responsabilidad compartida y el respeto por la vida en todas sus formas. Este enfoque técnico y ético refleja el compromiso del IPPTA con la sostenibilidad, la autonomía campesina y la planificación territorial responsable.
          .col-xl-auto(data-aos="fade-left")
            igure.d-none.d-xl-block
              img(src='@/assets/curso/intro/img3.svg', alt="" ).m-auto

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
