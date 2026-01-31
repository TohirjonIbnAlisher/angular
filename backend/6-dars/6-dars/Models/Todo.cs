namespace _6_dars.Models
{
    public class Todo
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime OperationTime { get; set; }
        public bool IsDone { get; set; }
    }
}
