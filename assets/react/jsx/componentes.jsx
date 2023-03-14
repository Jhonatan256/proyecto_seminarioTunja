class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.datos,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    // SIDEBAR DROPDOWN
    const allDropdown = document.querySelectorAll("#sidebar .side-dropdown");
    const sidebar = document.getElementById("sidebar");

    allDropdown.forEach((item) => {
      const a = item.parentElement.querySelector("a:first-child");
      a.addEventListener("click", function (e) {
        e.preventDefault();

        if (!this.classList.contains("active")) {
          allDropdown.forEach((i) => {
            const aLink = i.parentElement.querySelector("a:first-child");

            aLink.classList.remove("active");
            i.classList.remove("show");
          });
        }

        this.classList.toggle("active");
        item.classList.toggle("show");
      });
    });

    // SIDEBAR COLLAPSE
    const toggleSidebar = document.querySelector("nav .toggle-sidebar");
    const allSideDivider = document.querySelectorAll("#sidebar .divider");

    if (sidebar.classList.contains("hide")) {
      allSideDivider.forEach((item) => {
        item.textContent = "-";
      });
      allDropdown.forEach((item) => {
        const a = item.parentElement.querySelector("a:first-child");
        a.classList.remove("active");
        item.classList.remove("show");
      });
    } else {
      allSideDivider.forEach((item) => {
        item.textContent = item.dataset.text;
      });
    }

    toggleSidebar.addEventListener("click", function () {
      sidebar.classList.toggle("hide");

      if (sidebar.classList.contains("hide")) {
        allSideDivider.forEach((item) => {
          item.textContent = "-";
        });

        allDropdown.forEach((item) => {
          const a = item.parentElement.querySelector("a:first-child");
          a.classList.remove("active");
          item.classList.remove("show");
        });
      } else {
        allSideDivider.forEach((item) => {
          item.textContent = item.dataset.text;
        });
      }
    });

    sidebar.addEventListener("mouseleave", function () {
      if (this.classList.contains("hide")) {
        allDropdown.forEach((item) => {
          const a = item.parentElement.querySelector("a:first-child");
          a.classList.remove("active");
          item.classList.remove("show");
        });
        allSideDivider.forEach((item) => {
          item.textContent = "-";
        });
      }
    });

    sidebar.addEventListener("mouseenter", function () {
      if (this.classList.contains("hide")) {
        allDropdown.forEach((item) => {
          const a = item.parentElement.querySelector("a:first-child");
          a.classList.remove("active");
          item.classList.remove("show");
        });
        allSideDivider.forEach((item) => {
          item.textContent = item.dataset.text;
        });
      }
    });

    // PROFILE DROPDOWN
    const profile = document.querySelector("nav .profile");
    const imgProfile = profile.querySelector("img");
    const dropdownProfile = profile.querySelector(".profile-link");

    imgProfile.addEventListener("click", function () {
      dropdownProfile.classList.toggle("show");
    });

    // MENU
    const allMenu = document.querySelectorAll("main .content-data .head .menu");

    allMenu.forEach((item) => {
      const icon = item.querySelector(".icon");
      const menuLink = item.querySelector(".menu-link");

      icon.addEventListener("click", function () {
        menuLink.classList.toggle("show");
      });
    });

    window.addEventListener("click", function (e) {
      if (e.target !== imgProfile) {
        if (e.target !== dropdownProfile) {
          if (dropdownProfile.classList.contains("show")) {
            dropdownProfile.classList.remove("show");
          }
        }
      }

      allMenu.forEach((item) => {
        const icon = item.querySelector(".icon");
        const menuLink = item.querySelector(".menu-link");

        if (e.target !== icon) {
          if (e.target !== menuLink) {
            if (menuLink.classList.contains("show")) {
              menuLink.classList.remove("show");
            }
          }
        }
      });
    });

    // PROGRESSBAR
    const allProgress = document.querySelectorAll("main .card .progress");

    allProgress.forEach((item) => {
      item.style.setProperty("--value", item.dataset.value);
    });

    // APEXCHART
    var options = {
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };
  }
  render() {
    var opciones = this.state.data.opciones.map((opcion, i) => (
      <li>
        <a
          href="javascript:void(0);"
          onClick={eval(opcion.z)}
          className={i == 0 ? "active" : ""}
        >
          {" "}
          <i className={opcion.icono} /> {opcion.nombre}
        </a>
      </li>
    ));
    return (
      <div>
        <a
          href="javascript:void(0);"
          onClick={(data) => home()}
          className="brand"
        >
          &nbsp;&nbsp;&nbsp;
          <i className={this.state.data.icono} style={{ color: "#ffffff" }} />
          &nbsp;&nbsp;{this.state.data.rol}
        </a>
        <ul className="side-menu">{opciones}</ul>
      </div>
    );
  }
}
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.nombre,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {}
  render() {
    return (
      <nav class="navbar border-bottom">
        <i class="bx bx-menu toggle-sidebar"></i>
        <div class="d-none d-sm-none d-md-block d-lg-block">Seminario Conciliar Tunja</div>
        <span class="divider"></span>
        {this.state.nombre}
        <div class="profile">
          <img src="../assets/images/escudo.png" alt="" />
          <ul class="profile-link">
            <li>
              <a href="#" onClick={(data) => salir()}>
                <i class="bx bxs-log-out-circle"></i>
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.nombre,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <div class="head">
          <h3>Eventos Seminario</h3>
        </div>
        <div id="slider" style={{ backgroundColor: "yellow" }}>
          <figure>
            <img src="../assets/images/actividad1.jpg" alt="" />
            <img src="../assets/images/actividad1.jpg" alt="" />
            <img src="../assets/images/actividad1.jpg" alt="" />
            <img src="../assets/images/actividad1.jpg" alt="" />
            <img src="../assets/images/actividad1.jpg" alt="" />
            <img src="../assets/images/actividad1.jpg" alt="" />
          </figure>
        </div>
      </div>
    );
  }
}
class CrudEstudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    $("#tablaEstudiantes").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
      },
      responsive: true,
      dom: "Bfrtip",
      pageLength: 20,
      buttons: ["copy", "csv", "excel", "pdf", "print"],
      column: [{
        width: "10000px",
        targets: 0
      },
      {
        width: "40px",
        targets: 1
      },
      {
        width: "100px",
        targets: 2
      },
      {
        width: "70px",
        targets: 3
      },
      {
        width: "70px",
        targets: 4
      },
      {
        width: "70px",
        targets: 4
      },
      {
        width: "70px",
        targets: 4
      },
      {
        width: "70px",
        targets: 5
      }
    ]
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  componentWillUnmount() {}
  render() {
    console.log(this.state.data);
    var datos = this.state.data.registros.map((registro, i) => (
      <tr>
        <th scope="row">{i + 1}</th>
        <td dangerouslySetInnerHTML={{
        __html: registro.acciones
      }}></td>
        <td>{registro.tipoDocumento}</td>
        <td>{registro.identificacion}</td>
        <td>{registro.primerNombre}</td>
        <td>{registro.segundoNombre}</td>
        <td>{registro.primerApellido}</td>
        <td>{registro.segundoApellido}</td>     
        <td>{registro.telefono}</td>
        <td>{registro.direccion}</td>
        <td>{registro.email}</td>
        <td>{registro.estado}</td>
      </tr>
    ));
    return (
      <div>
        <div class="head">
          <h3>Estudiantes</h3>

          <a href="javascript:void(0)" onClick={data =>nuevoUsuario()} class="btn btn-primary d-sm-block d-lg-block">
            Añadir estudiante
          </a>
        </div>
        <div class="table-responsive table-responsive-sm">
          <div class="table table-sm table-striped">
            <table id="tablaEstudiantes" className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>                  
                  <th scope="col">Acciones</th>
                  <th scope="col">TD</th>
                  <th scope="col">Identificación</th>
                  <th scope="col">Primer Nombre</th>
                  <th scope="col">Segundo Nombre</th>
                  <th scope="col">Primer Apellido</th>
                  <th scope="col">Segundo Apellido</th>               
                  <th scope="col">Teléfono</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Email</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>{datos}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ruta: props.ruta,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {}
  render() {
    return (
      <ul class="breadcrumbs">
        <li>
          <a href="javascript:void(0);" onClick={(data) => home()}>
            Home
          </a>
        </li>

        {typeof this.state.ruta != "undefined" ? (
          <li>
            /{" "}
            <a
              href="javascript:void(0);"
              onClick={(data) => eval(this.state.ruta.z)}
            >
              {this.state.ruta.nombre}
            </a>
          </li>
        ) : (
          ""
        )}
        {/* <label id="user-sesion">Bienvenido</label> */}
      </ul>
    );
  }
}
class ModalEstudiante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.data,
      invocacion: props.invocacion,
    };
    this.registrar = this.registrar.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }
  registrar(event) {
    event.preventDefault();
    if ($("#formEstudiante").valid()) {
      let formData =
        $("#formEstudiante").serialize() +
        "&c=AdministradorController&m=registrarEstudiante";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          },
        })
          .done(function (result) {
            if (validarResult(result)) {
              switch (result.cod) {
                case "00":
                  $("#modalAuxiliar").hide();
                  swal("Usuario registrado.", "", "success").then((value) => {
                    vistaEstudiantes();
                  });
                  break;
                case "88":
                  modalLogout();
                  break;
                case "99":
                  alerta("¡Error!", result.msj);
                  $("#modalAuxiliar").modal("show");
                  break;
                default:
                  alerta("¡Error!", "Error de codificación");
                  $("#modalAuxiliar").modal("show");
              }
            }
          })
          .fail(function () {
            console.log("error");
          });
      });
    }
  }
  actualizar(event) {
    event.preventDefault();
    if ($("#formEstudiante").valid()) {
      let formData =
        $("#formEstudiante").serialize() +
        "&c=AdministradorController&m=actualizarEstudiante";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          },
        })
          .done(function (result) {
            if (validarResult(result)) {
              switch (result.cod) {
                case "00":
                  $("#modalAuxiliar").hide();
                  swal("Usuario actualizado.", "", "success").then((value) => {
                    vistaEstudiantes();
                  });
                  break;
                case "88":
                  modalLogout();
                  break;
                case "99":
                  alerta("¡Error!", result.msj);
                  $("#modalAuxiliar").modal("show");
                  break;
                default:
                  alerta("¡Error!", "Error de codificación");
                  $("#modalAuxiliar").modal("show");
              }
            }
          })
          .fail(function () {
            console.log("error");
          });
      });
    }
  }

  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let titulo =
      this.state.invocacion == "registro"
        ? "Nuevo estudiante"
        : "Actualizar datos";
    return (
      <div
        class="modal fade"
        id="modalAuxiliar"
        tabindex="-1"
        aria-labelledby="modalAuxiliarLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header container">
              <h5 class="modal-title" id="modalAuxiliarLabel">
                {titulo}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form id="formEstudiante">
              <div class="modal-body container">
                <div className="form-row">
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Primer nombre</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="primerNombre"
                      name="primerNombre"
                      defaultValue={this.state.datos.primerNombre}
                      placeholder="Primer nombre"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Segundo nombre</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="segundoNombre"
                      name="segundoNombre"
                      defaultValue={this.state.datos.segundoNombre}
                      placeholder="Segundo nombre"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Primer apellido</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="primerApellido"
                      name="primerApellido"
                      defaultValue={this.state.datos.primerApellido}
                      placeholder="Primer apellido"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Segundo apellido</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="segundoApellido"
                      name="segundoApellido"
                      defaultValue={this.state.datos.segundoApellido}
                      placeholder="Segundo apellido"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Tipo documento</label>
                    <select
                      id="tipoDocumento"
                      name="tipoDocumento"
                      class="form-control form-control-sm"
                      defaultValue={this.state.datos.tipoDocumento}
                      required="required"
                    >
                      <option value="">Seleccione...</option>
                      <option value="CC">Cédula</option>
                      <option value="TI">Tarjeta de identidad</option>
                    </select>
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Identificación</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="numeroDocumento"
                      name="numeroDocumento"
                      defaultValue={this.state.datos.numeroDocumento}
                      placeholder="Identificación"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Email</label>
                    <input
                      type="email"
                      className="form-control form-control form-control-sm"
                      id="email"
                      name="email"
                      defaultValue={this.state.datos.email}
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Teléfono</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="telefono"
                      name="telefono"
                      defaultValue={this.state.datos.telefono}
                      placeholder="Teléfono"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Dirección</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="direccion"
                      name="direccion"
                      defaultValue={this.state.datos.direccion}
                      placeholder="Dirección"
                      required="required"
                    />
                  </div>
                  {this.state.invocacion == 'registro' ?  
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Contraseña</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="password"
                      name="password"
                      defaultValue={''}
                      placeholder="Contraseña"
                      required="required"
                    />
                  </div>: ''}
                </div>
              </div>
              <div class="modal-footer container">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                {this.state.invocacion == "registro" ? (
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    onClick={this.registrar}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    onClick={this.actualizar}
                  >
                    Actualizar
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
class CrudDocentes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    $("#tablaDocentes").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
      },
      responsive: true,
      dom: "Bfrtip",
      pageLength: 20,
      buttons: ["copy", "csv", "excel", "pdf", "print"]
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  componentWillUnmount() {}
  render() {
    console.log(this.state.data);
    var datos = this.state.data.registros.map((registro, i) => (
      <tr>
        <th scope="row">{i + 1}</th>
        <td dangerouslySetInnerHTML={{
        __html: registro.acciones
      }}></td>
        <td>{registro.tipoDocumento}</td>
        <td>{registro.identificacion}</td>
        <td>{registro.primerNombre}</td>
        <td>{registro.segundoNombre}</td>
        <td>{registro.primerApellido}</td>
        <td>{registro.segundoApellido}</td>     
        <td>{registro.telefono}</td>
        <td>{registro.direccion}</td>
        <td>{registro.email}</td>
        <td>{registro.estado}</td>
      </tr>
    ));
    return (
      <div>
        <div class="head">
          <h3>Docentes</h3>

          <a href="javascript:void(0)" onClick={data =>nuevoDocente()} class="btn btn-primary d-sm-block d-lg-block">
            Añadir docente
          </a>
        </div>
        <div class="table-responsive table-responsive-sm">
          <div class="table table-sm table-striped">
            <table id="tablaDocentes" className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>                  
                  <th scope="col">Acciones</th>
                  <th scope="col">TD</th>
                  <th scope="col">Identificación</th>
                  <th scope="col">Primer Nombre</th>
                  <th scope="col">Segundo Nombre</th>
                  <th scope="col">Primer Apellido</th>
                  <th scope="col">Segundo Apellido</th>               
                  <th scope="col">Teléfono</th>
                  <th scope="col">Dirección</th>
                  <th scope="col">Email</th>
                  <th scope="col">Estado</th>
                </tr>
              </thead>
              <tbody>{datos}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
class ModalDocente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.data,
      invocacion: props.invocacion,
    };
    this.registrar = this.registrar.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }
  registrar(event) {
    event.preventDefault();
    if ($("#formDocente").valid()) {
      let formData =
        $("#formDocente").serialize() +
        "&c=AdministradorController&m=registrarDocente";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          },
        })
          .done(function (result) {
            if (validarResult(result)) {
              switch (result.cod) {
                case "00":
                  $("#modalAuxiliar").hide();
                  swal("Usuario registrado.", "", "success").then((value) => {
                    vistaEstudiantes();
                  });
                  break;
                case "88":
                  modalLogout();
                  break;
                case "99":
                  alerta("¡Error!", result.msj);
                  $("#modalAuxiliar").modal("show");
                  break;
                default:
                  alerta("¡Error!", "Error de codificación");
                  $("#modalAuxiliar").modal("show");
              }
            }
          })
          .fail(function () {
            console.log("error");
          });
      });
    }
  }
  actualizar(event) {
    event.preventDefault();
    if ($("#formDocente").valid()) {
      let formData =
        $("#formDocente").serialize() +
        "&c=AdministradorController&m=actualizarDocente";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          },
        })
          .done(function (result) {
            if (validarResult(result)) {
              switch (result.cod) {
                case "00":
                  $("#modalAuxiliar").hide();
                  swal("Usuario actualizado.", "", "success").then((value) => {
                    vistaDocente();
                  });
                  break;
                case "88":
                  modalLogout();
                  break;
                case "99":
                  alerta("¡Error!", result.msj);
                  $("#modalAuxiliar").modal("show");
                  break;
                default:
                  alerta("¡Error!", "Error de codificación");
                  $("#modalAuxiliar").modal("show");
              }
            }
          })
          .fail(function () {
            console.log("error");
          });
      });
    }
  }

  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let titulo =
      this.state.invocacion == "registro"
        ? "Nuevo estudiante"
        : "Actualizar datos";
    return (
      <div
        class="modal fade"
        id="modalAuxiliar"
        tabindex="-1"
        aria-labelledby="modalAuxiliarLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header container">
              <h5 class="modal-title" id="modalAuxiliarLabel">
                {titulo}
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form id="formDocente">
              <div class="modal-body container">
                <div className="form-row">
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Primer nombre</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="primerNombre"
                      name="primerNombre"
                      defaultValue={this.state.datos.primerNombre}
                      placeholder="Primer nombre"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Segundo nombre</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="segundoNombre"
                      name="segundoNombre"
                      defaultValue={this.state.datos.segundoNombre}
                      placeholder="Segundo nombre"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Primer apellido</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="primerApellido"
                      name="primerApellido"
                      defaultValue={this.state.datos.primerApellido}
                      placeholder="Primer apellido"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Segundo apellido</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="segundoApellido"
                      name="segundoApellido"
                      defaultValue={this.state.datos.segundoApellido}
                      placeholder="Segundo apellido"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Tipo documento</label>
                    <select
                      id="tipoDocumento"
                      name="tipoDocumento"
                      class="form-control form-control-sm"
                      defaultValue={this.state.datos.tipoDocumento}
                      required="required"
                    >
                      <option value="">Seleccione...</option>
                      <option value="CC">Cédula</option>
                      <option value="TI">Tarjeta de identidad</option>
                    </select>
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Identificación</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="numeroDocumento"
                      name="numeroDocumento"
                      defaultValue={this.state.datos.numeroDocumento}
                      placeholder="Identificación"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Email</label>
                    <input
                      type="email"
                      className="form-control form-control form-control-sm"
                      id="email"
                      name="email"
                      defaultValue={this.state.datos.email}
                      placeholder="Email"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Teléfono</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="telefono"
                      name="telefono"
                      defaultValue={this.state.datos.telefono}
                      placeholder="Teléfono"
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Dirección</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="direccion"
                      name="direccion"
                      defaultValue={this.state.datos.direccion}
                      placeholder="Dirección"
                      required="required"
                    />
                  </div>
                  {this.state.invocacion == 'registro' ?  
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Contraseña</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="password"
                      name="password"
                      defaultValue={''}
                      placeholder="Contraseña"
                      required="required"
                    />
                  </div>: ''}
                </div>
              </div>
              <div class="modal-footer container">
                <button
                  type="button"
                  class="btn btn-secondary btn-sm"
                  data-dismiss="modal"
                >
                  Cerrar
                </button>
                {this.state.invocacion == "registro" ? (
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    onClick={this.registrar}
                  >
                    Guardar
                  </button>
                ) : (
                  <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    onClick={this.actualizar}
                  >
                    Actualizar
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

class CrudAsignaturas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    $("#tablaAsignaturas").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
      },
      responsive: true,
      dom: "Bfrtip",
      pageLength: 10,
      buttons: ["copy", "csv", "excel", "pdf", "print"]
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  componentWillUnmount() {}
  render() {
    console.log(this.state.data);
    var datos = this.state.data.registros.map((registro, i) => (
      <tr>
        <th scope="row">{i + 1}</th>
        <td dangerouslySetInnerHTML={{
        __html: registro.acciones
      }}></td>
        <td>{registro.nombreAsignatura}</td>
        <td>{registro.intensidadHorariaSemanal}</td>
        <td>{registro.descripcion}</td>
        <td>{registro.cod_Grupo}</td>
      </tr>
    ));
    return (
      <div>
        <div class="head">
          <h3>Asignaturas</h3>

          <a href="javascript:void(0)" onClick={data =>console.log('proximamente')} class="btn btn-primary d-sm-block d-lg-block">
            Añadir asignatura
          </a>
        </div>
        <div class="table-responsive table-responsive-sm">
          <div class="table table-sm table-striped">
            <table id="tablaAsignaturas" className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>                  
                  <th scope="col">Acciones</th>
                  <th scope="col">Nombre asignatura</th>
                  <th scope="col">Intensidad horaria</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Código asignatura</th>               
                </tr>
              </thead>
              <tbody>{datos}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}