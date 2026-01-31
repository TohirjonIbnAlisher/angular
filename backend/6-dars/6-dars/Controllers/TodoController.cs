using _6_dars.Models;
using _6_dars.Services;
using Microsoft.AspNetCore.Mvc;

namespace _6_dars.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController: ControllerBase
    {
        private TodoService _todoService;

        public TodoController()
        {
            _todoService = new TodoService();
        }

        [HttpPost]
        public void CreateTodo(Todo todo)
        {
            this._todoService.AddTodo(todo);
        }
        [HttpGet]
        public IList<Todo> GetAll()
        {
            var a = this._todoService.GetTodoList();
            return a;
        }

        [HttpGet("id")]
        public Todo GetById(int id)
        {
            return this._todoService.GetTodoById(id);
        }

        [HttpPut]
        public void Update(int id, Todo todo)
        {
            _todoService.UpdateTodo(id, todo);  
        }

        [HttpPut("status")]
        public void UpdateStatus(int status, bool isDone)
        {
            this._todoService.ChangeState(status, isDone);
        }
    }
}
