import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Student from '@/views/Student.vue'
import CreateStudent from '@/views/CreateStudent.vue'
import EditStudent from '@/views/EditStudent.vue'
import Classes from '@/views/Classes.vue'
import CreateClass from '@/views/CreateClass.vue'
import EditClass from '@/views/EditClass.vue'
import Exams from '@/views/Exams.vue'
import CreateExam from '@/views/CreateExam.vue'
import EditExam from '@/views/EditExam.vue'

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
    path: '/edit-student/:id',
    name: 'Editar aluno',
    component: EditStudent
  },
  {
    path: '/classes',
    name: 'Matérias',
    component: Classes
  },
  {
    path: '/create-class',
    name: 'Criar matéria',
    component: CreateClass
  },
  {
    path: '/edit-class/:id',
    name: 'Editar matéria',
    component: EditClass
  },
  {
    path: '/exams',
    name: 'Provas',
    component: Exams
  },
  {
    path: '/create-exam',
    name: 'Criar Prova',
    component: CreateExam
  },
  {
    path: '/edit-exam/:id',
    name: 'Editar Prova',
    component: EditExam
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
