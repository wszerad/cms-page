import ComponentView from '@/pages/ComponentView.vue'
import HomeView from '@/pages/HomeView.vue'
import PageView from '@/pages/PageView.vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const homeRoute = {
	path: '/',
	component: HomeView
}

const pageRoute = {
	name: 'page',
	path: '/page/:id',
	component: PageView,
	meta: {
		resolvers: ['page']
	}
}

const componentRoute = {
	name: 'component',
	path: '/page/:id/component/:componentId',
	component: ComponentView,
	meta: {
		resolvers: ['page', 'component']
	}
}

const routes: RouteRecordRaw[] = [
	homeRoute,
	pageRoute,
	componentRoute
]

export const router = createRouter({
	history: createWebHistory(),
	routes
})
