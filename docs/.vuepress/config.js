module.exports = {
    title: 'Desarrollo de Aplicaciones 2021',
    dest: 'public',
    base: '/CGS2021/',
    themeConfig: {
        nav: [
          { text: 'Inicio', link: '/' }
        ],
        sidebar: {

          '/AntipatronesComunes/':[''],

          '/BeneficiosDespliegue/':[
            ['BeneficiosDespliegue/', 'Beneficios del despliegue']
          ],
          
          '/PrincipiosDespliegue/':[''],

          '/GestionDeLaConfiguracion/':[
            ['ControlVersiones/','Control de versiones'],
            ['Configuracion','...']
          ],
      
        }

    }
}