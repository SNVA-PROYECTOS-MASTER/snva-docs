// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://odoo-docs.sinova.co',
	integrations: [
		starlight({
			title: 'SNVA Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Documentos para el usuario',
					items: [
						{ 
							label: 'Nómina Electrónica',
							collapsed: true,
							// slug: 'guides/e-payroll',
							items: [
								{
									label: 'Empleado',
									slug: 'guides/e-payroll/employee',
									collapsed: true
								},
								{
									label: 'Contrato',
									slug: 'guides/e-payroll/contract',
									collapsed: true
								}
							]
						},
						{ 
							label: 'Facturación Electrónica',
							collapsed: true,
							// slug: 'guides/e-payroll',
							items: [
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
