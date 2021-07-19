import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    students: [
      {
        id: 1,
        name: "João Vitor da Silva",
        email: "joao@email.com",
      },
      {
        id: 2,
        name: "Sofia Beiras",
        email: "sofia@gmail.com",
      },
      {
        id: 3,
        name: "Pedro dos Santos",
        email: "pedro@outlook.com",
      },
      {
        id: 4,
        name: "Carlos Oliveira",
        email: "carlos@hotmail.com",
      },
    ],
    classes: [
      {
        id: 1,
        name: 'Matemática',
        teacher: 'Maria Clara'
      },
      {
        id: 2,
        name: 'Protuguês',
        teacher: 'Terezinha'
      },
      {
        id: 3,
        name: 'História',
        teacher: 'Pedro Paulo'
      },
      {
        id: 4,
        name: 'Ciências',
        teacher: 'Júlio'
      },
      {
        id: 5,
        name: 'Ed. Física',
        teacher: 'Suzana'
      }
    ],
    exams: [
      {
        id: 1,
        grade: 9,
        student: {
          id: 1,
          name: "João Vitor da Silva",
          email: "joao@email.com",
        },
        class: {
          id: 1,
          name: 'Matemática',
          teacher: 'Maria Clara'
        },
      }
    ]
  },
  mutations: {
    addStudent(state, { student }) {
      student.id = state.students.length + 1
      state.students.push(student)
    },
    editStudent(state, { newStudent }) {
      const index = state.students.findIndex(student => student.id === newStudent.id)
      if (index !== -1) {
        Vue.set(state.students, index, newStudent);
      }
    },
    deleteStudentConfirm(state, { student }) {
      const studentIndex = state.students.indexOf(student)
      state.students.splice(studentIndex, 1)
    },

    addClass(state, { classe }) {
      classe.id = state.classes.length + 1
      state.classes.push(classe)
    },
    editClass(state, { newClass }) {
      const index = state.classes.findIndex(classe => classe.id === newClass.id)
      if (index !== -1) {
        Vue.set(state.classes, index, newClass);
      }
    },
    deleteClassConfirm(state, { classe }) {
      const classIndex = state.classes.indexOf(classe)
      state.classes.splice(classIndex, 1)
    },

    addExam(state, { exam }) {
      exam.id = state.exams.length + 1
      state.exams.push(exam)
    },
    editExam(state, { newExam }) {
      const index = state.exams.findIndex(exams => exams.id === newExam.id)
      if (index !== -1) {
        state.exams[index] = newExam
      }
    },
  },
  getters: {
    getStudentById: state => id => state.students.find(student => student.id === id),
    getClassById: state => id => state.classes.find(classe => classe.id === id),
    getExamById: state => id => state.exams.find(exam => exam.id === id),
    getStudentExams: state => id => state.exams.filter(student => student.id === id),
    getStudentClasses: state => id => {
      const studentExams = state.exams.filter(exam => id === exam.student.id)

      return state.classes.map(classe => {
        const examsClass = studentExams.filter(exam => exam.class.id === classe.id)
        classe.averageGrade = '--'
        if (examsClass.length) {
          const total = examsClass.reduce((totala, exam) => {
            return totala + parseInt(exam.grade, 10)
          }, 0)
          classe.averageGrade = total / examsClass.length
        }
        return classe;
      })
    },
  }
})
