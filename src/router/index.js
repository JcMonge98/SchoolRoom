import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LGrado from '../components/LGrado.vue'
import LDocente from '../components/LDocente.vue'
import LEncargado from '../components/LEncargado.vue'
import LTarea from '../components/LTarea.vue'
import Fvalidado from '../components/Fvalidado.vue'
import InscripcionD from '../components/InscripcionD.vue'
import InscripcionE from '../components/InscripcionE.vue'
import Grado from '../components/Grado.vue'
import Tarea from '../components/Tarea.vue'
import LIDocente from '../components/LIDocente.vue'
import LIEncargado from '../components/LIEncargado.vue'
import EditarIDocente from '../components/EditarIDocente.vue'
import EditarIEncargado from '../components/EditarIEncargado.vue'
import NuevaTarea from '../components/NuevaTarea.vue'
import EditarTarea from '../components/EditarTarea.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ListaGrado',
        name: 'ListaGrado',
        component: LGrado
    },
    {
        path: '/ListaDocente',
        name: 'ListaDocente',
        component: LDocente
    },
    {
        path: '/ListaEncargado',
        name: 'ListaEncargado',
        component: LEncargado
    },
    {
        path: '/ListaTarea',
        name: 'ListaTarea',
        component: LTarea
    },
    {
        path: '/Fvalidado',
        name: 'Fvalidado',
        component: Fvalidado
    },
    {
        path: '/InscripcionD',
        name: 'InscripcionD',
        component: InscripcionD
    },
    {
        path: '/InscripcionE',
        name: 'InscripcionE',
        component: InscripcionE
    },
    {
        path: '/Grado',
        name: 'Grado',
        component: Grado
    },
    {
        path: '/Tarea',
        name: 'Tarea',
        component: Tarea
    },
    {
        path: '/LIDocente',
        name: 'LIDocente',
        component: LIDocente
    },
    {
        path: '/LIEncargado',
        name: 'LIEncargado',
        component: LIEncargado
    },
    {
        path: '/EditarIDocente',
        name: 'EditarIDocente',
        component: EditarIDocente
    },
    {
        path: '/EditarIEncargado',
        name: 'EditarIEncargado',
        component: EditarIEncargado
    },
    {
        path: '/NuevaTarea',
        name: 'NuevaTarea',
        component: NuevaTarea
    },
    {
        path: '/EditarTarea',
        name: 'EditarTarea',
        component: EditarTarea
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router