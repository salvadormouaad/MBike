import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBike } from "../Features/Slice";
import { Link } from "react-router-dom"; // Corrected import for Link
import axios from "axios";

export default function Admin() {
  const dispatch = useDispatch();
  const { loading, users, error } = useSelector((state) => state.users);
  const admins = useSelector((state) => state.users.admins);
  const Bikes = useSelector((state) => state.users.bikes);

  console.log("Admins from Redux:", admins);

  useEffect(() => {
    dispatch(fetchBike());
    // dispatch(readAdmin());
  }, [dispatch]);

//   function HandleDelete(id) {
//     axios
//       .delete(`http://localhost:3000/users/${id}`)
//       .then(() => dispatch(fetchUsers()))
//       .catch((err) => console.error("Delete failed:", err));
//   }

//   function Handleadmin(id) {
//     const find = users.find((f) => f.id == id);
//     const { name, email , password } = find;
//     dispatch(Addadmin({ name, email , password }));
//     state.users = state.users.filter((user) => user.email !== email);
//   alert(`${name} has been added as an admin!`);
//   }

//   function HandleDelete2(id) {
//     dispatch(DeleteAdmin(id));
//     alert("Admin removed successfully!");
//   }

  return (
    <div
      className="container mt-5"
      style={{
        minHeight: "100vh",
        paddingBottom: "40px",
        background: "linear-gradient(180deg, #ece9f1 0%, #ffffff 100%)",
      }}
    >
      <div
        className="card shadow p-4 mx-auto"
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
          borderRadius: "15px",
          border: "none",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          maxWidth: "1200px",
        }}
      >
        <h2
          className="text-center mb-4"
          style={{
            color: "#764ba2",
            fontWeight: "bold",
            fontSize: "2rem",
            letterSpacing: "1px",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          Admin Dashboard
        </h2>

        {/* Loading and Error States */}
        {loading && (
          <p
            className="text-center mt-3"
            style={{
              fontSize: "1.2rem",
              color: "#555",
              fontStyle: "italic",
            }}
          >
            Loading...
          </p>
        )}
        {error && (
          <p
            className="text-danger text-center mt-3"
            style={{
              fontSize: "1.2rem",
              fontWeight: "500",
              backgroundColor: "#f8d7da",
              padding: "10px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            Error loading data: {error}
          </p>
        )}

        {!loading && !error && (
          <div className="table-responsive">
            {/* Users Table */}
            <h3
              className="mb-3"
              style={{
                color: "#333",
                fontSize: "1.5rem",
                fontWeight: "600",
                borderBottom: "2px solid #764ba2",
                paddingBottom: "5px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Bikes
            </h3>
            <table
              className="table table-striped table-hover"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <thead
                className="table-dark"
                style={{ backgroundColor: "#343a40", color: "#fff" }}
              >
                <tr>
                  <th scope="col" style={{ padding: "12px" }}>
                    Id
                  </th>
                  <th scope="col" style={{ padding: "12px" }}>
                    Name
                  </th>
                  <th scope="col" style={{ padding: "12px" }}>
                    Email
                  </th>
                  <th scope="col" style={{ padding: "12px" }}>
                    Password
                  </th>
                  <th scope="col" style={{ padding: "12px" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(Bikes) && Bikes.length > 0 ? (
                  Bikes.map((bike, index) => (
                    <tr
                      key={index}
                      style={{
                        transition: "background 0.2s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f8f9fa")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <td style={{ padding: "12px", verticalAlign: "middle" }}>
                        {bike.id}
                      </td>
                      <td style={{ padding: "12px", verticalAlign: "middle" }}>
                        {bike.name}
                      </td>
                      <td style={{ padding: "12px", verticalAlign: "middle" }}>
                        {bike.brand}
                      </td>
                      <td style={{ padding: "12px", verticalAlign: "middle" }}>
                        {bike.price}
                      </td>
                      <td style={{ padding: "12px", verticalAlign: "middle" }}>
                        {/* <Link
                          to={`/EditAd/${user.id}`}
                          className="btn btn-primary btn-sm mx-1 px-3"
                          style={{
                            transition: "all 0.3s",
                            borderRadius: "5px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#0056b3")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "#007bff")
                          }
                        >
                          Edit
                        </Link> */}
                        {/* <button
                          className="btn btn-danger btn-sm mx-1 px-3"
                          style={{
                            transition: "all 0.3s",
                            borderRadius: "5px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                          onClick={() => HandleDelete(user.id)}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#c82333")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "#dc3545")
                          }
                        >
                          Delete
                        </button> */}
                        {/* <button
                          className="btn btn-success btn-sm mx-1 px-3"
                          style={{
                            transition: "all 0.3s",
                            borderRadius: "5px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                          onClick={() => Handleadmin(user.id)}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#218838")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "#28a745")
                          }
                        >
                          Add Admin
                        </button> */}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center"
                      style={{
                        padding: "20px",
                        color: "#666",
                        fontStyle: "italic",
                      }}
                    >
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* <h3
              className="mb-3 mt-5"
              style={{
                color: "#333",
                fontSize: "1.5rem",
                fontWeight: "600",
                borderBottom: "2px solid #764ba2",
                paddingBottom: "5px",
                textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              Admins
            </h3>
            <table
              className="table table-striped table-hover"
              style={{ borderRadius: "10px", overflow: "hidden" }}
            >
              <thead
                className="table-dark"
                style={{ backgroundColor: "#343a40", color: "#fff" }}
              >
                <tr>
                  <th scope="col" style={{ padding: "12px" }}>
                    ID
                  </th>
                  <th scope="col" style={{ padding: "12px" }}>
                    Name
                  </th>
                  <th scope="col" style={{ padding: "12px" }}>
                    Password
                  </th>
                  <th scope="col" style={{ padding: "12px" }}>
                    Email
                  </th>
                  <th scope="col" style={{ padding: "12px" }}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(admins) && admins.length > 0 ? (
                  admins.map((admin) => (
                    <tr
                      key={admin.id}
                      style={{
                        transition: "background 0.2s",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#f8f9fa")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <td style={{ padding: "12px", verticalAlign: "middle" }}>
                        {admin.id}
                      </td>
                      <td style={{ padding: "12px", verticalAlign: "middle" }}>
                        {admin.name}
                      </td>
                      <td style={{ padding: "12px", verticalAlign: "middle" }}>
                        {admin.password}
                      </td>
                      <td style={{ padding: "12px", verticalAlign: "middle" }}>
                        {admin.email}
                      </td>
                      <td style={{ padding: "12px", verticalAlign: "middle" }}>
                        <button
                          className="btn btn-danger btn-sm mx-1 px-3"
                          style={{
                            transition: "all 0.3s",
                            borderRadius: "5px",
                            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                          onClick={() => HandleDelete2(admin.id)}
                          onMouseEnter={(e) =>
                            (e.target.style.backgroundColor = "#c82333")
                          }
                          onMouseLeave={(e) =>
                            (e.target.style.backgroundColor = "#dc3545")
                          }
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center"
                      style={{
                        padding: "20px",
                        color: "#666",
                        fontStyle: "italic",
                      }}
                    >
                      No admins found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table> */}
          </div>
        )}
      </div>
    </div>
  );
}
