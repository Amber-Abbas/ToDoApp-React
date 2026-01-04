import React from 'react'

function AddToDo() {
    return (
        <div class="container text-center">
          {/* todo item input container start */}
          <div class="row kg-row">
            <div class="col-6">
              <input type="text" placeholder="Enter todo task her " />
            </div>
            <div class="col-4">
              <input type="date" />
            </div>
            <div class="col-2">
              <button type="button" class=" btn btn-success kg-button">
                {" "}
                Add{" "}
              </button>
            </div>
          </div>
          {/* todo item input container end */}
          </div>
    )
}

export default AddToDo
