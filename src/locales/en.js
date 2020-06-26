export default {
  header: {
    description: "Hi, I'm Stefano and I'm a full-stack web developer. Welcome to my site!",
    navbar: {
      about: "About me",
      portfolio: "Portfolio",
      resume: "Resume",
      contact: "Contact",
      blog: "Blog"
    },
    footer: "If you think you need my help for any reason, please write me an email at <a class=\"text-vivid-sky-blue\" href=\"mailto:sellostefano@gmail.com\" target=\"_top\">sellostefano[at]gmail[dot]com</a>. See you soon!",
  },
  home_page: {
    description: "Hi everybody! I'm Stefano, a young software developer who loves coding and everything concerning innovation and new technologies. If you want to know more about me, check the links below!",
    skills_section: {
      title: "Skills",
      description: "Thanks to my college years and work tasks I had the opportunity to learn a lot about different frameworks, languages and technologies. Here what I think of some of them.",
      skills: [
        {
          icons: [
            {
              classes: ['fab', 'js-square'],
              color: "#F1DE4F"
            }
          ],
          title: "Vanilla javascript",
          description: "I developed a lot of experience with vanilla javascript, thanks to my current job. I think javascript is one of the most powerfull tolls a web developer has."
        },
        {
          icons: [
            {
              classes: ['fab', 'vuejs'],
              color: "#64B687"
            },
            {
              classes: ['fab', 'angular'],
              color: "#CA3327"
            }
          ],
          title: "Angular & Vue",
          description: "I developed a lot of experience with vanilla javascript, thanks to my current job. I think javascript is one of the most powerfull tolls a web developer has."
        },
        {
          icons: [
            {
              classes: ['fab', 'html5'],
              color: "#DE6E3C"
            },
            {
              classes: ['fab', 'css3-alt'],
              color: "#53A7DC"
            }
          ],
          title: "HTML5 & CSS3",
          description: "I developed a lot of experience with vanilla javascript, thanks to my current job. I think javascript is one of the most powerfull tolls a web developer has."
        },
        {
          icons: [
            {
              url: '/ruby-logo.png'
            },
            {
              url: 'rails-logo.svg'
            }
          ],
          title: "Ruby & Rails",
          description: "I developed a lot of experience with vanilla javascript, thanks to my current job. I think javascript is one of the most powerfull tolls a web developer has."
        },
        {
          icons: [
            {
              url: '/psql-logo.png'
            }
          ],
          title: "PostgreSQL",
          description: "I developed a lot of experience with vanilla javascript, thanks to my current job. I think javascript is one of the most powerfull tolls a web developer has."
        },
        {
          icons: [
            {
              classes: ['fab', 'node-js'],
              color: "#54B689"
            }
          ],
          title: "Node.js",
          description: "I developed a lot of experience with vanilla javascript, thanks to my current job. I think javascript is one of the most powerfull tolls a web developer has."
        },
        {
          icons: [
            {
              classes: ['fab', 'php'],
              color: "#777BAF"
            }
          ],
          title: "PHP",
          description: "I developed a lot of experience with vanilla javascript, thanks to my current job. I think javascript is one of the most powerfull tolls a web developer has."
        },
        {
          icons: [
            {
              url: "/mongo-logo.png"
            }
          ],
          title: "MongoDB",
          description: "I developed a lot of experience with vanilla javascript, thanks to my current job. I think javascript is one of the most powerfull tolls a web developer has."
        },
      ]
    },
    projects_section: {
      title: "Projects",
      description: "Here some of the projects I'm most proud of. Thanks to them I've grown up, making a lot of experience and developing a deep knowledge of the skills I've mentioned above.",
      projects: [
        {
          title: "H-FARM.COM",
          image: {
            url: "./hfarmcom.PNG"
          },
          category: {
            title: "website",
            color: "light-pink"
          },
          description: "I took part to the development process of the H-Farm corporate website. Check out the result!",
          link: {
            url: "https://h-farm.com"
          }
        },
        {
          title: "H-FARM.COM",
          image: {
            url: "./hfarmcom.PNG"
          },
          category: {
            title: "web app",
            color: "light-green"
          },
          description: "I took part to the development process of the H-Farm corporate website. Check out the result!",
          link: {
            url: "https://h-farm.com"
          }
        },
        {
          title: "H-FARM.COM",
          image: {
            url: "./hfarmcom.PNG"
          },
          description: "I took part to the development process of the H-Farm corporate website. Check out the result!",
          link: {
            url: "https://h-farm.com"
          }
        },
        {
          title: "H-FARM.COM",
          image: {
            url: "./hfarmcom.PNG"
          },
          description: "I took part to the development process of the H-Farm corporate website. Check out the result!",
          link: {
            url: "https://h-farm.com"
          }
        }
      ]
    },
  }
}