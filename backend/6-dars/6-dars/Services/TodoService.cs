using _6_dars.Models;

namespace _6_dars.Services
{
    public class TodoService
    {
        private List<Todo> _todoList;

        public TodoService()
        {
            _todoList = new List<Todo>()
            {
                new Todo()
                {
                    CreatedDate = DateTime.Now,
                    Id = 1,
                    IsDone = true,
                    OperationTime = DateTime.Now,
                    Title = "Uxlash"
                },
                new Todo()
                {
                    CreatedDate = DateTime.Now,
                    Id = 2,
                    IsDone = true,
                    OperationTime = DateTime.Now,
                    Title = "Dars qilish"
                }
            };
        }

        public void AddTodo(Todo todo)
        {
            _todoList.Add(todo);
        }

        public List<Todo> GetTodoList()
        {
            return _todoList;
        }

        public Todo GetTodoById(int id)
        {
            return _todoList.FirstOrDefault(todo => todo.Id == id);
        }

        public void RemoveTodo(int id)
        {
            var todo = this.GetTodoById(id);
            _todoList.Remove(todo);
        }

        public void UpdateTodo(int id, Todo todo)
        {
            var sTodo = this.GetTodoById(id);
            sTodo = todo;
        }

        public void ChangeState(int id, bool isDone)
        {
            var sTodo = this.GetTodoById(id);
            sTodo.IsDone = isDone;
        }
    }
}
