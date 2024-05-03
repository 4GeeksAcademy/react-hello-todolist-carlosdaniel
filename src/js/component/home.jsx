import React, { useState } from "react";

// Create your first component
const Home = () => {
  const [input1, setInput1] = useState("");
  const [listelements, setListelements] = useState([]);

  return (
    <>
      <div className="container container-fluid">
        <div className="header">
          <h1 className="display-2 text-center">Todolist Carlos Daniel</h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="card col-4">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <input
                  className="border-0 w-100"
                  type="text"
                  onChange={(e) => setInput1(e.target.value)}
                  value={input1}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && input1 !== "") {
                      setListelements(listelements.concat(input1));
                      setInput1("");
                    }
                  }}
                />
              </li>
              {listelements.length === 0 ? (
                <li className="list-group-item text-center">
                  No hay pendientes, agrega una tarea
                </li>
              ) : (
                listelements.map((item, index) => (
                  <li className="list-group-item" key={index}>
                    <div className="row">
                      <div className="col-9">{item}</div>
                      <div className="col-3 d-flex justify-content-end">
                        <a
                          className="link-primary delete-button"
                          onClick={() =>
                            setListelements(
                              listelements.filter(
                                (t, currentIndex) => index !== currentIndex
                              )
                            )
                          }
                        >
                          Borrar
                        </a>
                      </div>
                    </div>
                  </li>
                ))
              )}
            </ul>
            <div className="card-footer">
              <p className="numberOfTasks">
                {listelements.length} Pendientes
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
