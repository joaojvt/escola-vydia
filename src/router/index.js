import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Student from '@/views/Student.vue'
import CreateStudent from '@/views/CreateStudent.vue'
import Classes from '@/views/Classes.vue'
import Exams from '@/views/Exams.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/students',
    name: 'Alunos',
    component: Student
  },
  {
    path: '/create-student',
    name: 'Criar aluno',
    component: CreateStudent
  },
  {
    path: '/classes',
    name: 'Matérias',
    component: Classes
  },
  {
    path: '/exams',
    name: 'Provas',
    component: Exams
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
