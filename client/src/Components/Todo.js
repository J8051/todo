import "../todo.css"
function Todo({ item }) {
  return (
    <div class="card" >
      <ul class="list-group list-group-flush">
        <li class="list-group-item">
          {item}
          <button type="button" class="btn-close" aria-label="Close"></button>
        </li>
      </ul>
    </div>
  );
}

export default Todo;
