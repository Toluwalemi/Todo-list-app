import AppHeader from './components/AppHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';
import Pagination from './components/Pagination.vue';

export default {
  name: 'App',
  data() {
    return {
      todos: [
        {id: 0, text: "Create as many tasks as you want."},
        {id: 1, text: "E.g. Learn more Javascript"},
        {id: 2, text: "Study for exams."},
        {id: 3, text: "Never argue with Chelsea fans"},
      ],
      nextId: 4,
      currentPage: 0,
      pageSize: 3,
      visibleTodos: []
    };
  },
  components: {
    AppHeader,
    TodoInput,
    TodoItem,
    Pagination
  },

  beforeMount: function() {
    this.updateVisibleTodos();
  },
  methods: {
    addTodo(text) {
      this.todos.push({id: this.nextId, text: text});
      this.nextId++;
      this.updateVisibleTodos();
    },
    removeTodo(id) {
      let todos = this.todos;
      this.todos = todos. filter((todo) => todo.id != id);
      this.updateVisibleTodos();
    },
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleTodos();
    },
    updateVisibleTodos() {
      this.visibleTodos = this.todos.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

      //go back a page if there is no visibletodo
      if(this.visibleTodos.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    }
  }
}
