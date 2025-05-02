import { ref } from 'vue'

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      getStarted: 'Get Started'
    },
    home: {
      hero: {
        title1: 'Transform Your Business',
        title2: 'With Expert Consulting',
        description: 'We help businesses achieve their full potential through strategic consulting, innovative solutions, and expert guidance.',
        getStarted: 'Get Started',
        ourServices: 'Our Services'
      },
      features: {
        title: 'Services',
        subtitle: 'A better way to grow your business',
        description: 'Our comprehensive consulting services are designed to help your business thrive in today\'s competitive landscape.'
      },
      stats: {
        years: 'Years of Experience',
        clients: 'Happy Clients',
        projects: 'Projects Completed',
        consultants: 'Expert Consultants'
      }
    },
    about: {
      title: 'About Us',
      subtitle: 'Our Story',
      description: 'Helping businesses thrive through expert consulting and strategic guidance',
      story: {
        p1: 'Founded in 2024, EFT Octaris has been at the forefront of business consulting, helping organizations of all sizes navigate complex challenges and achieve sustainable growth. Our team of experienced consultants brings together diverse expertise across industries and functional areas.',
        p2: 'We believe in a collaborative approach to consulting, working closely with our clients to understand their unique needs and develop tailored solutions. Our commitment to excellence and innovation has helped numerous businesses transform their operations and achieve their strategic objectives.'
      },
      values: {
        title: 'Our Values',
        excellence: {
          name: 'Excellence',
          description: 'We strive for excellence in everything we do, delivering the highest quality service to our clients.'
        },
        collaboration: {
          name: 'Collaboration',
          description: 'We believe in working together with our clients to achieve shared success and lasting impact.'
        },
        integrity: {
          name: 'Integrity',
          description: 'We maintain the highest standards of professional ethics and transparency in all our engagements.'
        },
        innovation: {
          name: 'Innovation',
          description: 'We continuously seek new and better ways to solve problems and create value for our clients.'
        }
      },
      team: {
        title: 'Our Leadership Team'
      },
      cta: {
        title1: 'Ready to work with us?',
        title2: 'Let\'s discuss your needs.',
        description: 'Contact us today to learn how we can help your business grow and succeed.',
        button: 'Contact Us'
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto',
      getStarted: 'Comenzar'
    },
    home: {
      hero: {
        title1: 'Transforma Tu Negocio',
        title2: 'Con Consultoría Experta',
        description: 'Ayudamos a las empresas a alcanzar su máximo potencial a través de consultoría estratégica, soluciones innovadoras y orientación experta.',
        getStarted: 'Comenzar',
        ourServices: 'Nuestros Servicios'
      },
      features: {
        title: 'Servicios',
        subtitle: 'Una mejor manera de hacer crecer tu negocio',
        description: 'Nuestros servicios de consultoría integral están diseñados para ayudar a tu negocio a prosperar en el panorama competitivo actual.'
      },
      stats: {
        years: 'Años de Experiencia',
        clients: 'Clientes Satisfechos',
        projects: 'Proyectos Completados',
        consultants: 'Consultores Expertos'
      }
    },
    about: {
      title: 'Nosotros',
      subtitle: 'Nuestra Historia',
      description: 'Ayudando a las empresas a prosperar a través de consultoría experta y orientación estratégica',
      story: {
        p1: 'Fundada en 2024, EFT Octaris ha estado a la vanguardia de la consultoría empresarial, ayudando a organizaciones de todos los tamaños a navegar por desafíos complejos y lograr un crecimiento sostenible. Nuestro equipo de consultores experimentados reúne experiencia diversa en diferentes industrias y áreas funcionales.',
        p2: 'Creemos en un enfoque colaborativo de consultoría, trabajando estrechamente con nuestros clientes para entender sus necesidades únicas y desarrollar soluciones a medida. Nuestro compromiso con la excelencia y la innovación ha ayudado a numerosas empresas a transformar sus operaciones y alcanzar sus objetivos estratégicos.'
      },
      values: {
        title: 'Nuestros Valores',
        excellence: {
          name: 'Excelencia',
          description: 'Nos esforzamos por la excelencia en todo lo que hacemos, brindando el servicio de más alta calidad a nuestros clientes.'
        },
        collaboration: {
          name: 'Colaboración',
          description: 'Creemos en trabajar juntos con nuestros clientes para lograr un éxito compartido y un impacto duradero.'
        },
        integrity: {
          name: 'Integridad',
          description: 'Mantenemos los más altos estándares de ética profesional y transparencia en todos nuestros compromisos.'
        },
        innovation: {
          name: 'Innovación',
          description: 'Buscamos continuamente nuevas y mejores formas de resolver problemas y crear valor para nuestros clientes.'
        }
      },
      team: {
        title: 'Nuestro Equipo Directivo'
      },
      cta: {
        title1: '¿Listo para trabajar con nosotros?',
        title2: 'Hablemos de tus necesidades.',
        description: 'Contáctanos hoy para aprender cómo podemos ayudar a tu negocio a crecer y tener éxito.',
        button: 'Contáctanos'
      }
    }
  }
}

const currentLanguage = ref('en')

export function useI18n() {
  const t = (key) => {
    const keys = key.split('.')
    let value = translations[currentLanguage.value]
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k]
      } else {
        return key
      }
    }
    
    return value
  }

  const setLanguage = (lang) => {
    if (translations[lang]) {
      currentLanguage.value = lang
    }
  }

  return {
    t,
    setLanguage,
    currentLanguage
  }
} 