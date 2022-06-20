import { getPlayById } from "meta/play-meta-util";

import PlayHeader from "common/playlists/PlayHeader";
import "./todo.css";

function Todo(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="todo">
            <div className="wrapper">
              <header>Todo App</header>

              <div className="inputField">
                <input type="text" placeholder="Add your new todo" />
                <button>
                  <i className="fas fa-plus">+</i>
                </button>
              </div>
              <ul className="todoList"></ul>
              <div className="footer">
                <span>
                  You hava <span className="pendingTasks"></span> pending tasks
                </span>
                <button>Clear All</button>
              </div>
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Todo;
