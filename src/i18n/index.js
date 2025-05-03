import { ref } from 'vue'

const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About Us',
      contact: 'Contact',
      getStarted: 'Get Started',
      quickLinks: 'Quick Links',
      connect: 'Connect',
      allRightsReserved: 'All rights reserved'
    },
    services: {
      title: 'Services',
      heading: 'Our Consulting Services',
      subtitle: 'Comprehensive solutions tailored to your business needs',
      learnMore: 'Learn more',
      showLess: 'Show less',
      economia: {
        name: 'Economy',
        summary: '<strong>I want to understand how the economy and regulation affect me</strong><br><em>For people who want to understand what is happening and how to anticipate what is coming, in terms of inflation, unemployment, credit, and education.</em>',
        details: 'Do you want to understand market context and make informed decisions?<br><br><strong>Here you will find:</strong><br><ul style="margin-top: 0.5em;"><li>✅ Clear explanations about macro-economics, current situation, and markets</li><li>✅ The real impact of regulation on business and investment</li><li>✅ Simple models to understand the economic environment</li></ul>'
      },
      finanzas: {
        name: 'Finance',
        summary: '<strong>I want to invest with criteria and discover new opportunities</strong><br><em>For those who already invest (or want to start), but are looking for something more than generic advice: analysis with fundamentals, clear risks and new options.</em>',
        details: 'Do you long to invest with fundamentals and long-term vision?<br><br><strong>Here you will find:</strong><br><ul style="margin-top: 0.5em;"><li>✅ Guides on crypto assets, ESG and new investments</li><li>✅ Risk models explained without technicalities</li><li>✅ Real investment cases with rigorous analysis</li></ul>'
      },
      tecnologia: {
        name: 'Technology',
        summary: '<strong>I want to make better decisions without relying only on intuition</strong><br><em>For professionals, entrepreneurs and leaders who make decisions in uncertain environments and want to use data, AI and economic thinking without being technical experts.</em>',
        details: 'Do you need to decide under pressure and seek more analysis, and have less improvisation?<br><br><strong>Here you will find:</strong><br><ul style="margin-top: 0.5em;"><li>✅ Real cases of AI and predictive models usage</li><li>✅ Guides on how to apply data to make better decisions</li><li>✅ Simple analysis on automation and efficiency</li></ul>'
      },
      cta: {
        title1: 'Ready to transform your business?',
        title2: "Let's get started.",
        description: 'Contact us today to discuss how we can help your business achieve its goals.',
        button: 'Contact Us'
      }
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
      mission: {
        p1: 'My mission is to help companies, professionals and investors make strategic decisions based on data, artificial intelligence and applied economics. I want to reduce uncertainty and bring technical knowledge closer to those seeking clarity, vision and real solutions to their financial and business problems.',
        p2: 'Decisions with criteria, not with noise.',
        p3: 'Clarity in a world that complicates.'
      },
      bio: {
        p1: 'I am a Colombian-Spanish born in Bucaramanga, Colombia, and like many, I grew up with more questions than answers about how money, markets and decisions work that change the course of a family, a company or a country.',
        p2: 'Economics was my way of understanding the world. But I also discovered very early that understanding is not always enough.',
        p3: 'I studied with scholarships, worked while researching, defended a doctoral thesis, and for years I moved in the academic world, explaining complex theories, behavioral sciences in decision-making and developing predictive models. I taught thousands of students and collaborated with brilliant experts. I learned a lot, but I also felt that something was missing.',
        p4: 'Knowledge accumulated... but it did not always reach where it could serve the most.',
        p5: 'That\'s when my transition began. I started working with companies, banks, insurers and consultancies. I saw up close how decisions are made under pressure, with incomplete data, in uncertain environments. There I understood that my role was not just to know.',
        p6: 'It was to translate, connect, make the complex useful.',
        p7: 'Today I dedicate myself to that: to explain what others complicate, to show how artificial intelligence, economics and data can help make better decisions.',
        p8: 'I don\'t sell magic formulas. I don\'t have all the answers.',
        p9: 'But I have the tools, the experience and the clear intention to accompany those who want to move forward with criteria.'
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
    },
    contact: {
      title: 'Contact Us',
      heading: 'Get in Touch',
      subtitle: 'We\'d love to hear from you. Let\'s discuss how we can help your business grow.',
      infoTitle: 'Contact Information',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      businessHours: 'Business Hours',
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        submit: 'Submit'
      }
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Nosotros',
      contact: 'Contacto',
      getStarted: 'Comenzar',
      quickLinks: 'Enlaces Rápidos',
      connect: 'Conectar',
      allRightsReserved: 'Todos los derechos reservados'
    },
    services: {
      title: 'Servicios',
      heading: 'Nuestros Servicios de Consultoría',
      subtitle: 'Soluciones integrales adaptadas a las necesidades de su negocio',
      learnMore: 'Saber más',
      showLess: 'Mostrar menos',
      economia: {
        name: 'Economía',
        summary: '<strong>Quiero entender cómo me afecta la economía y la regulación</strong><br><em>Para personas que quieren entender qué está pasando y cómo anticiparse a lo que viene, en términos de inflación, desempleo, crédito, y educación.</em>',
        details: '¿Quieres comprender el contexto de los mercados y tomar decisiones informadas?<br><br><strong>Aquí encontrarán:</strong><br><ul style="margin-top: 0.5em;"><li>✅ Explicaciones claras sobre macro-economía, coyuntura, y mercados</li><li>✅ El impacto real de la regulación en negocios e inversión</li><li>✅ Modelos simples para entender el entorno económico</li></ul>'
      },
      finanzas: {
        name: 'Finanzas',
        summary: '<strong>Quiero invertir con criterio y conocer nuevas oportunidades</strong><br><em>Para quienes ya invierten (o quieren empezar), pero buscan algo más que consejos genéricos: análisis con fundamentos, riesgos claros y opciones nuevas.</em>',
        details: '¿Anhelas invertir con fundamentos y visión de largo plazo?<br><br><strong>Aquí encontrarán:</strong><br><ul style="margin-top: 0.5em;"><li>✅ Guías sobre criptoactivos, ESG y nuevas inversiones</li><li>✅ Modelos de riesgo explicados sin tecnicismos</li><li>✅ Casos reales de inversión con análisis riguroso</li></ul>'
      },
      tecnologia: {
        name: 'Tecnología',
        summary: '<strong>Quiero tomar mejores decisiones sin depender solo de la intuición</strong><br><em>Para profesionales, empresarios y líderes que toman decisiones en entornos inciertos y quieren usar datos, IA y pensamiento económico sin ser expertos técnicos.</em>',
        details: '¿Necesitas decidir bajo presión y buscar más análisis, y tener menos improvisación?<br><br><strong>Aquí encontrarán:</strong><br><ul style="margin-top: 0.5em;"><li>✅ Casos reales de uso de IA y modelos predictivos</li><li>✅ Guías sobre cómo aplicar datos para decidir mejor</li><li>✅ Análisis sencillos sobre automatización y eficiencia</li></ul>'
      },
      cta: {
        title1: '¿Listo para transformar tu negocio?',
        title2: 'Empecemos.',
        description: 'Contáctanos hoy para conversar sobre cómo podemos ayudar a tu empresa a lograr sus objetivos.',
        button: 'Contáctanos'
      }
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
      mission: {
        p1: 'Mi misión es ayudar a empresas, profesionales e inversores a tomar decisiones estratégicas con base en datos, inteligencia artificial y economía aplicada. Quiero reducir la incertidumbre y acercar el conocimiento técnico a quienes buscan claridad, visión y soluciones reales para sus problemas financieros y de negocio.',
        p2: 'Decisiones con criterio, no con ruido.',
        p3: 'Claridad en un mundo que complica.'
      },
      bio: {
        p1: 'Soy un Colombo-Español Nacido en Bucaramanga, Colombia, y como muchos, crecí con más preguntas que respuestas sobre cómo funciona el dinero, los mercados y las decisiones que cambian el rumbo de una familia, de una empresa o de un país.',
        p2: 'La economía fue mi forma de entender el mundo. Pero también descubrí muy pronto que entender no siempre basta.',
        p3: 'Estudié con becas, trabajé mientras investigaba, defendí una tesis doctoral, y durante años me moví en el mundo académico, explicando teorías complejas, ciencias del comportamiento en toma de decisiones y desarrollando modelos predictivos. Enseñé a miles de estudiantes y colaboré con expertos brillantes. Aprendí mucho, pero también sentí que algo faltaba.',
        p4: 'El conocimiento se acumulaba… pero no siempre llegaba a donde más podía servir.',
        p5: 'Ahí comenzó mi transición. Empecé a trabajar con empresas, bancos, aseguradoras y consultoras. Vi de cerca cómo se toman decisiones bajo presión, con datos incompletos, en entornos inciertos. Ahí entendí que mi rol no era solo saber.',
        p6: 'Era traducir, conectar, hacer útil lo complejo.',
        p7: 'Hoy me dedico a eso: a explicar lo que otros complican, a mostrar cómo la inteligencia artificial, la economía y los datos pueden ayudar a tomar mejores decisiones.',
        p8: 'No vendo fórmulas mágicas. No tengo todas las respuestas.',
        p9: 'Pero tengo las herramientas, la experiencia y la intención clara de acompañar a quienes quieren avanzar con criterio.'
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
    },
    contact: {
      title: 'Contáctanos',
      heading: 'Ponte en Contacto',
      subtitle: 'Nos encantaría saber de ti. Hablemos sobre cómo podemos ayudar a tu negocio a crecer.',
      infoTitle: 'Información de Contacto',
      phone: 'Teléfono',
      email: 'Correo Electrónico',
      address: 'Dirección',
      businessHours: 'Horario de Atención',
      form: {
        name: 'Nombre',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        message: 'Mensaje',
        submit: 'Enviar'
      }
    }
  }
}

// Get language from localStorage or default to 'en'
const storedLanguage = localStorage.getItem('language') || 'en'
const currentLanguage = ref(storedLanguage)

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
    currentLanguage.value = lang
    localStorage.setItem('language', lang)
  }

  return {
    t,
    setLanguage,
    currentLanguage
  }
} 