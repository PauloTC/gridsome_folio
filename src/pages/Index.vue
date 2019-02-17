<template lang="pug" >
	div
		section.container 
			.presentation_container
				h3.top-title 
					span.green Diseño. 
					span.red Código. 
					<br/>
					span.purple Música. 
					span.yellow Café.
				p.personal_description Hola.. Mi nombre es  
					span {{ $page.allDatoCmsPortafolio.edges[0].node.name }} 
					| Tengo tres años de experiencia en 
					span Desarrollo Web 
					| y 
					span UIX Designer.  <br/> 
					| Me encanta hacer deporte, leer, y pilotar drones. Autodidacta 100%.
				.button-container
					a.g-button( v-scroll-to="'#contact_container'"  href="#") Contáctame
					a.g-button.rounded(  target="_blank" href="https://www.dropbox.com/s/xgpsnhblttne5s7/cv_Paulo_Tejada.pdf?dl=0") Descarga mi CV
		.portfolio_container
			li(v-for="logo in LogoWorks")
		.work_container.section_container
			h3.general_title   Por Qué Amarás Mi Trabajo
			.g_separator
				span.decoration_lines
				i.icon-heart
				span.decoration_lines
			p Me gusta comprometerme con los proyectos con los que trabajo, investigar sobre diseños posibles mejoras para poder encaminar su proyecto hacia el éxito. Aportar todo mi conocimiento para poder lograr el objetivo en común.
			ul.work_options
				love-work(v-for="(work, index) in LoveWorks"  :key="index"  :work="work" )
		.do_container.section_container( style=" background-image: url('https://i.ibb.co/3WjdfvV/background.png')" )
			h3.general_title.green   Qué Puedo Hacer Por Ti
			.g_separator
				span.decoration_lines.green
				i.icon-code.purple_icon
				span.decoration_lines.green
			p Puedes contratar mis servicios de desarrollo web o diseño web. Ideal para emprendedores que tienen poco tiempo y necesitan resolver el problema de su sitio web o crearlo desde cero de forma personalizada.
			ul.skills_container
				li.skill_item(v-for=" work in Works")
					figure
						img( :src="work.img" )
					.skill_info
						h3 {{ work.title }}
						p {{ work.description }}
						div.skill_container
							span(v-for="skill in work.skills"  :style="{ 'border-color':  '#' + skill.color }" )
								p( :style="{ width: skill.width + '%' , background: '#' + skill.color } ") {{ skill.name }}
		.how_container.section_container
			span.triangle_decoration
			h3.general_title   Como Trabajo
			.g_separator
				span.decoration_lines
				i.icon-laptop.yellow_icon
				span.decoration_lines
			p Es importante seguir un proceso adecuado al momento de desarrollar una web. A lo largo de este tiempo he aprendido que dividir un proyecto en pequeñas tareas ayuda a estimar mejor los tiempos para cada una de ellas. ¡Divide y vencerás! 
			ul.process_work
				li(v-for="(work, index) in HowWorks")
					figure
						img( :src="work.img" width=150 )
						figcaption {{ index + 1 }}
					h4.process_name(style="background-image: url('https://i.ibb.co/zRn6jr6/layer.png')") {{ work.title }}
			a( v-scroll-to="'#contact_container'" href="#")  COMO PUEDO AYUDARTE ?
		.experience_container.section_container( style=" background-image: url('https://i.ibb.co/3WjdfvV/background.png')" )
			div.experience_list(v-for=" history in Histories "  :class="history.type" )
				span.exprience_icon
					i
				em.experience_decoration
				h4.experience_title {{ history.name }}
			.experience_item-container.info_card(v-for="experience in experiences"    :class="experience.type")
				.experience_item
					span.experience_decoration
				.experience_card
					.experience_head
						.experience_year
							span {{ experience.end }}
							span {{ experience.start }}
						.experience_name
							h3 {{ experience.workplace }}
							h2 {{ experience.position }}
					.experience_description
						p {{ experience.description }}
			.experience-laptop
				img( src="https://tinyimg.io/i/USmboMP.png"  alt="laptop" )
		.clients_container.section_container
			h3.general_title    Qué Dicen Mis Clientes
			.g_separator
				span.decoration_lines
				i.icon-commenting.green_icon
				span.decoration_lines
			p Me esfuerzo en cada proyecto para cumplir con las expectativas de mis clientes, y sus comentarios positivos son solo la recompensa al trabajo realizado.
			ul.client_list
				li.client_user( v-for="(client, index) in $page.allDatoCmsClient.edges" :key="index" )
					.client_coment
						p {{ client.node.description }}
						span {{ client.node.name }},
							a(  :href="client.node.website" )  {{ client.node.industry }}
					figure.client_image( )
						img(  :src="client.node.image.url.src"  width=140 height=140 )
		.contact_container.section_container(  id="contact_container" style=" background-image: url('https://i.ibb.co/3WjdfvV/background.png')" )
			h3.general_title.purple    Ponte En Contacto
			.g_separator
				span.decoration_lines.purple
				i.icon-paper-plane.yellow_icon
				span.decoration_lines.purple
			p ¿Alguna idea para salvar al mundo? Soy todo oídos.
			form.contact_form
				.form-left-side
					input(placeholder="Nombre completo" type="text" )
					input(placeholder="Direccion de E-mail" type="email" )
				textarea(rows="4" cols="50" placeholder="Mensaje")
				.form-right-side
					input(placeholder=" Sitio Web ")
					button(  type="submit" ) Enviar Mensaje
			ul.contact_info
				li
					img( src="https://tinyimg.io/i/A0Z6cMu.png"  alt="mail" )
					span info
					p paulotejada.123a@gmail.com
				li
					img( src="https://tinyimg.io/i/JpWvJOC.png"  alt="location" )
					span DIRECCIÓN
					p Villa El Salvador, Mz.D lt.43
				li
					img( src="https://i.ibb.co/WVdkFbS/mobile.png"  alt="mobile" )
					span TELÉFONO
					p (+51) 945-583090
				li
					img( src="https://tinyimg.io/i/wu33gik.png"  alt="world" )
					span Sitio Web
					a( href="https://github.com/PauloTC/portafolio" ) www.portafolio.com
		.social_container
			ul
				li( v-for="(social, index) in $page.allDatoCmsSocial.edges "   :key="index" )
					a( :href="social.node.link" )
						i
</template>
<page-query>
{
	allDatoCmsPortafolio{
		edges{
			node{
				name
			}
		}
	},
	allDatoCmsClient{
		edges{
			node{
				name
				image{
					url
				}
				description
				website
				industry
			}
		}
	},
	allDatoCmsSocial{
		edges{
			node{
				link
			}
		}
	}
}
</page-query>
<script>
import LoveWork from '~/components/LoveWork.vue'
export default {
	components: {
		LoveWork
	},
	data() {
		return{
			LogoWorks:[
				{
					img: "https://tinyimg.io/i/Lc1NNkM.jpg"
				},
				{
					img: "https://tinyimg.io/i/Lc1NNkM.jpg"
				},
				{
					img: "https://tinyimg.io/i/Lc1NNkM.jpg"
				},
				{
					img: "https://tinyimg.io/i/Lc1NNkM.jpg"
				}
			],
			LoveWorks: [
				{
					name: "Muchas variaciones",
					img:"https://i.ibb.co/Hhbmph5/colours.png",
					width: 80,
					description: " Los cambios pueden determinar el éxito en un proyecto."
				},
				{
					name: "A tiempo",
					img:"https://i.ibb.co/7X3sjyt/time.png",
					width: 100,
					description: " El valor de la puntualidad es muy importante en la entrega de un proyecto."
				},
				{
					name: "Revisiones ilimitadas",
					img:"https://i.ibb.co/8czGMJf/infinity.png",
					width: 120,
					description: "La calidad es lo más importante, es necesario hacer todas las revisiones que sean necesarias."
				},
				{
					name: "Cuidado En Detalles",
					img:"https://i.ibb.co/0tkCPKz/retina.png",
					width: 80,
					description: "Cuidar los detalles en los proyectos marca una gran diferencia."
				},
				{
					name: "Apoyo Constante",
					img:"https://i.ibb.co/hFy5S6j/chat.png",
					width: 80,
					description: " Si tiene alguna duda o alguna mejora en el proyecto, soy todo oidos ! ."
				}
			],
			Works: [
				{
					title: "Desarrollo De Sitios Web",
					price: 99,
					description: "Si cuentas con el diseño web de tu emprendimiento ya establecido, puedes contratar mis servicios como desarrollador web. Utilizando tecnologías acordes a la escalabilidad del proyecto, buscaremos darte a conocer en la web. Aquí menciono algunas de ellas .",
					skills: [
						{
							name: "HTML / CSS3",
							width: 85,
							color: "f1b533"
						},
						{
							name: "Javascript",
							width: 80,
							color: "eb9933"
						},
						{
							name: "Vue",
							width: 85,
							color: "e17f36"
						},
						{
							name: "JQuery",
							width: 90,
							color: "d56130"
						}
					],
					img:"https://tinyimg.io/i/QmwlHdG.png"
				},
				// {
				//     title: "Mobile App Development",
				//     price: 99,
				//     description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
				//     skills: [
				//         {
				//             name: "iOS",
				//             width: 85,
				//             color: "65abcc"
				//         },
				//         {
				//             name: "Android",
				//             width: 75,
				//             color: "4796bf"
				//         },
				//         {
				//             name: "Windows Phone",
				//             width: 90,
				//             color: "3a7fb6"
				//         },
				//         {
				//             name: "Other Mobile",
				//             width: 65,
				//             color: "2867ac"
				//         }
				//     ],
				//     img: "https://tinyimg.io/i/RPE4wcz.png"
				// },
				{
					title: "Diseño De Sitios Web",
					price: 99,
					description: "Te propongo que descubramos juntos la identidad de tu emprendimiento o proyecto para entender la historia que quieres contar. Te voy a hacer propuestas de diseño basadas en lo que investigue de tu proyecto y vas a elegir la que más te guste. La vamos a adaptar y modificar hasta llegar al resultado exacto que vienes buscando.",
					skills: [
						{
							name: "Photoshop",
							width: 75,
							color: "9ec05f"
						},
						{
							name: "Illustrator",
							width: 50,
							color: "7bb346"
						},
						{
							name: "AdobexD",
							width: 85,
							color: "549c30"
						},
						{
							name: "Marvel App",
							width: 80,
							color: "409226"
						}
					],
					img: "https://tinyimg.io/i/hZUBRFV.png"
				}
			],
			HowWorks: [
				{
					img: "https://i.ibb.co/9VTSML3/sketching.png",
					title: "Dibujo"
				},
				{
					img: "https://i.ibb.co/wNsy2B3/designing.png",
					title: "Diseño"
				},
				{
					img: "https://i.ibb.co/fCvVjMX/developing.png",
					title: "Desarrollo"
				},
				{
					img: "https://i.ibb.co/HxwPRMx/testing.png",
					title: "Testeo"
				},
				{
					img: "https://i.ibb.co/Y2Kz78T/sending.png",
					title: "Envio"
				},
			],
			Histories:[
				{
					name: "Experiencia Laboral",
					type: "work"
				},
				{
					name: "Educación",
					type: "education"
				},
				{
					name: "Talleres",
					type: "workshop"
				},
				{
					name: "StartUp",
					type: "startup"
				}
			],
			experiences: [
				{
					workplace: "TiSmart",
					position: "Frontend Development",
					start: 2018,
					end: 2018,
					description: "Desarrollando aplicaciones web utilizando VueJs + Pug + Sass. Con librerías como Element, Vuetify, Vuelidate, Nuxt.",
					stack: "Vue + Pug + Sass",
					type: "work"
				},
				{
					workplace: "StaffCreativa",
					position: "Frontend Development",
					start: 2016,
					end: 2018,
					description: "Desarollo de sitios web dinámicos utilizando JQuery + HTML + Stylus. Utilizando  librerías como OwlCarrousel, LightBox, etc.",
					stack: "Jquery + Html + Stylus",
					type: "work"
				},
				{
					workplace: "Freelancer",
					position: "Frontend Development",
					start: 2015,
					end: 2019,
					description: "Como desarrollador apasionado siempre estoy en busca de nuevos proyectos. Utilizando las tecnologías antes mencionadas.",
					stack: "Jquery + Html + Stylus + Drupal 7",
					type: "work"
				},
				{
					workplace: "Sgh Peru",
					position: "Help Desk",
					start: 2013,
					end: 2015,
					description: "Brindando soporte al sistema provado SHIOL. Mayormente trabajando con Javascript Puro (VanillaJS).",
					stack: "",
					type: "work"
				},
				{
					workplace: "Testing with Jest",
					position: "Javascript",
					start: 2018,
					end: 2019,
					description: "Develop web applications using frontend frameworks like Element, Vuetify, Vuelidate, Nuxt.",
					stack: "",
					type: "education"
				},
				{
					workplace: "Vue",
					position: "Javascript",
					start: 2018,
					end: 2018,
					description: "Develop web applications using frontend frameworks like Element, Vuetify, Vuelidate, Nuxt.",
					stack: "",
					type: "education"
				},
				{
					workplace: "FlexBox - Grid  Layout",
					position: "Css",
					start: 2017,
					end: 2017,
					description: "Develop web applications using frontend frameworks like Element, Vuetify, Vuelidate, Nuxt.",
					stack: "",
					type: "education"
				},
				{
					workplace: "Universidad Inca Garcilazo de la Vega",
					position: "Ing. Sistemas",
					start: 2013,
					end: 2017,
					description: "Develop web applications using frontend frameworks like Element, Vuetify, Vuelidate, Nuxt.",
					stack: "",
					type: "education"
				},
				{
					workplace: "Hackatrix",
					position: "Belatrix Software",
					start: 2017,
					end: 2017,
					description: "Develop web applications using frontend frameworks like Element, Vuetify, Vuelidate, Nuxt.",
					stack: "",
					type: "workshop"
				},
				{
					workplace: "Hackspace",
					position: "Hackpace Developer",
					start: 2017,
					end: 2017,
					description: "Develop web applications using frontend frameworks like Element, Vuetify, Vuelidate, Nuxt.",
					stack: "",
					type: "workshop"
				}
			]
		}
  },
}
</script>
