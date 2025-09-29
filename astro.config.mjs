// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sinovaLogo from './src/assets/logo-sinova.png';
import sinovaDarkLogo from './src/assets/logo-sinova-dark.png';

// https://astro.build/config
export default defineConfig({
	site: 'https://odoo-docs.sinova.co',
	trailingSlash: "always",
	i18n: {
		locales: ["es"],
		defaultLocale: "es",
	},
	integrations: [
		starlight({
			title: 'Documentación',			
			customCss: ['./src/styles/global.css'],
			logo: {
				light: sinovaLogo,      // logo para tema claro
				dark: sinovaDarkLogo,  // logo para tema oscuro
				alt: 'SINOVA',
				replacesTitle: false
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://www.sinova.co/', target:"_blank" }],
			sidebar: [
				{
					label: 'Productos',
					items: [
						{ 
							label: '📑 Nómina electrónica',
							collapsed: true,
							items: [
								{
									label: '⚙️ Instalación',
									slug: 'guides/e-payroll/installation',
									collapsed: true
								},
								{
									label: '🧾 Nómina base',
									collapsed: true,
									items: [
										{
											label: '📝 Campos personalizados en contrato',
											slug: 'guides/e-payroll/base_payroll/contract_fields',
											collapsed: true
										},
										{
											label: '📊 Nómina electrónica base',
											slug: 'guides/e-payroll/base_payroll/co_e_payroll',
											collapsed: true
										},
										{
											label: '💡 Nómina electrónica plus',
											slug: 'guides/e-payroll/base_payroll/co_e_payroll_plus',
											collapsed: true
										},
										{
											label: '💰 Retención en nómina',
											slug: 'guides/e-payroll/base_payroll/withholding_payroll',
											collapsed: true
										},
										{
											label: '🤝 Prestaciones sociales',
											slug: 'guides/e-payroll/base_payroll/social_benefits',
											collapsed: true
										},
										{
											label: '🌴 Pasivo vacacional',
											slug: 'guides/e-payroll/base_payroll/vacation_liability',
											collapsed: true
										},
										{
											label: '🎨 Personalización en nómina',
											slug: 'guides/e-payroll/base_payroll/payroll_customization',
											collapsed: true
										},
										{
											label: '🏦 Préstamo para empleados',
											slug: 'guides/e-payroll/base_payroll/employee_loan',
											collapsed: true
										},
										{
											label: '📐 Reglas salariales',
											slug: 'guides/e-payroll/base_payroll/salary_rules',
											collapsed: true
										},
										{
											label: '🛡️ Seguridad social',
											slug: 'guides/e-payroll/base_payroll/social_security',
											collapsed: true
										}
									]
								},
								{
									label: '🧾 Nómina plus',
									collapsed: true,
									items: [
										{
											label: '📑 Reportes DIAN',
											slug: 'guides/e-payroll/plus_payroll/dian_report',
											collapsed: true
										},
										{
											label: '🔄 Novedades de nómina',
											slug: 'guides/e-payroll/plus_payroll/novelty_payroll',
											collapsed: true
										},
										{
											label: '📊 Reportes personalizados de nómina',
											slug: 'guides/e-payroll/plus_payroll/custom_payroll_report',
											collapsed: true
										},
										{
											label: '🌴 Contabilización de pasivo por vacaciones',
											slug: 'guides/e-payroll/plus_payroll/vacation_accounting',
											collapsed: true
										},
										{
											label: '👥 Portal nómina',
											slug: 'guides/e-payroll/plus_payroll/payroll_portal',
											collapsed: true
										},
										{
											label: '💰 Reporte de retención',
											slug: 'guides/e-payroll/plus_payroll/withholding_report',
											collapsed: true
										}
									]
								}
							]
						},

					]
				},
				{
					label: 'Documentos para el usuario',
					items: [
						{ 
							label: 'Facturación Electrónica',
							collapsed: true,
							// slug: 'guides/e-payroll',
							items: [
								{
									label: 'Instalación',
									slug: 'guides/e-invoicing/setup',
									collapsed: true
								},
								{
									label: 'Empresa',
									slug: 'guides/e-invoicing/company',
									collapsed: true
								},
								{
									label: 'Contacto',
									slug: 'guides/e-invoicing/res_partner',
									collapsed: true
								},
								{
									label: 'Diario',
									slug: 'guides/e-invoicing/journal',
									collapsed: true
								},
								{
									label: 'Factura',
									slug: 'guides/e-invoicing/invoice',
									collapsed: true
								},
							]
						},
						{ 
							label: 'Seguridad Social',
							collapsed: true,
							// slug: 'guides/e-payroll',
							items: [
								{
									label: 'Instalación',
									slug: 'guides/social-security/setup',
									collapsed: true
								},
								{
									label: 'Empresa',
									slug: 'guides/social-security/company',
									collapsed: true
								},
								{
									label: 'Empleado',
									slug: 'guides/social-security/employee',
									collapsed: true
								},
								{
									label: 'Contacto',
									slug: 'guides/social-security/contract',
									collapsed: true
								},
								{
									label: 'Entidades Sociales',
									slug: 'guides/social-security/social-entities',
									collapsed: true
								},
								{
									label: 'Datos anuales',
									slug: 'guides/social-security/annual-data',
									collapsed: true
								},
								{
									label: 'Reglas Salariales',
									slug: 'guides/social-security/salary-rules',
									collapsed: true
								},
								{
									label: 'Tipos de entrada de trabajo',
									slug: 'guides/social-security/work-entry-type',
									collapsed: true
								},
							]
						},
						{ 
							label: 'Retención Nómina',
							collapsed: true,
							// slug: 'guides/e-payroll',
							items: [
								{
									label: 'Resumen',
									slug: 'guides/payroll-retention/summary',
									collapsed: true
								},
								{
									label: 'Datos anuales',
									slug: 'guides/payroll-retention/anual_data',
									collapsed: true
								},
								{
									label: 'Rangos de retención',
									slug: 'guides/payroll-retention/retention-table',
									collapsed: true
								},
								{
									label: 'Categorías de Retención',
									slug: 'guides/payroll-retention/retention-category',
									collapsed: true
								},
								{
									label: 'Contrato',
									slug: 'guides/payroll-retention/contract',
									collapsed: true
								},
								{
									label: 'Categorías Salariales',
									slug: 'guides/payroll-retention/salary-categories',
									collapsed: true
								},
								{
									label: 'Reglas Salariales',
									slug: 'guides/payroll-retention/salary-rules',
									collapsed: true
								},
								{
									label: 'Estructuras Salariales',
									slug: 'guides/payroll-retention/salary-structure',
									collapsed: true
								},
								{
									label: 'Paso a paso',
									slug: 'guides/payroll-retention/step-by-step',
									collapsed: true
								}
							]
						},
					],
				},
			],
		}),
	],
});
