class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.datos
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
    allDropdown.forEach(item => {
      const a = item.parentElement.querySelector("a:first-child");
      a.addEventListener("click", function (e) {
        e.preventDefault();
        if (!this.classList.contains("active")) {
          allDropdown.forEach(i => {
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
      allSideDivider.forEach(item => {
        item.textContent = "-";
      });
      allDropdown.forEach(item => {
        const a = item.parentElement.querySelector("a:first-child");
        a.classList.remove("active");
        item.classList.remove("show");
      });
    } else {
      allSideDivider.forEach(item => {
        item.textContent = item.dataset.text;
      });
    }
    toggleSidebar.addEventListener("click", function () {
      sidebar.classList.toggle("hide");
      if (sidebar.classList.contains("hide")) {
        allSideDivider.forEach(item => {
          item.textContent = "-";
        });
        allDropdown.forEach(item => {
          const a = item.parentElement.querySelector("a:first-child");
          a.classList.remove("active");
          item.classList.remove("show");
        });
      } else {
        allSideDivider.forEach(item => {
          item.textContent = item.dataset.text;
        });
      }
    });
    sidebar.addEventListener("mouseleave", function () {
      if (this.classList.contains("hide")) {
        allDropdown.forEach(item => {
          const a = item.parentElement.querySelector("a:first-child");
          a.classList.remove("active");
          item.classList.remove("show");
        });
        allSideDivider.forEach(item => {
          item.textContent = "-";
        });
      }
    });
    sidebar.addEventListener("mouseenter", function () {
      if (this.classList.contains("hide")) {
        allDropdown.forEach(item => {
          const a = item.parentElement.querySelector("a:first-child");
          a.classList.remove("active");
          item.classList.remove("show");
        });
        allSideDivider.forEach(item => {
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
    allMenu.forEach(item => {
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
      allMenu.forEach(item => {
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
    allProgress.forEach(item => {
      item.style.setProperty("--value", item.dataset.value);
    });

    // APEXCHART
    var options = {
      series: [{
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100]
      }, {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chart: {
        height: 350,
        type: "area"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        type: "datetime",
        categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }
  render() {
    var opciones = this.state.data.opciones.map((opcion, i) => /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0);",
      onClick: eval(opcion.z),
      className: i == 0 ? "active" : ""
    }, " ", /*#__PURE__*/React.createElement("i", {
      className: opcion.icono
    }), " ", opcion.nombre)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0);",
      onClick: data => home(),
      className: "brand"
    }, "\xA0\xA0\xA0", /*#__PURE__*/React.createElement("i", {
      className: this.state.data.icono,
      style: {
        color: "#ffffff"
      }
    }), "\xA0\xA0", this.state.data.rol), /*#__PURE__*/React.createElement("ul", {
      className: "side-menu"
    }, opciones));
  }
}
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.nombre
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {}
  render() {
    return /*#__PURE__*/React.createElement("nav", {
      class: "navbar border-bottom"
    }, /*#__PURE__*/React.createElement("i", {
      class: "bx bx-menu toggle-sidebar"
    }), /*#__PURE__*/React.createElement("div", {
      class: "d-none d-sm-none d-md-block d-lg-block"
    }, "Seminario Conciliar Tunja"), /*#__PURE__*/React.createElement("span", {
      class: "divider"
    }), this.state.nombre, /*#__PURE__*/React.createElement("div", {
      class: "profile"
    }, /*#__PURE__*/React.createElement("img", {
      src: "../assets/images/escudo.png",
      alt: ""
    }), /*#__PURE__*/React.createElement("ul", {
      class: "profile-link"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: data => editarPerfilUsuario()
    }, /*#__PURE__*/React.createElement("i", {
      class: "bx bx-user-circle"
    }), "Perfil")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#",
      onClick: data => salir()
    }, /*#__PURE__*/React.createElement("i", {
      class: "bx bxs-log-out"
    }), "Cerrar Sesi\xF3n")))));
  }
}
class Principal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.nombre
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {}
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: "head"
    }, /*#__PURE__*/React.createElement("center", null, /*#__PURE__*/React.createElement("h3", null, "POL\xCDTICA DE TRATAMIENTO DE PROTECCI\xD3N DE DATOS PERSONALES DE LOS TITULARES DEL SEMINARIO CONCILIAR DE TUNJA"))), /*#__PURE__*/React.createElement("div", {
      id: "slider"
    }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("p", null, "El Seminario Conciliar de Tunja, como instituci\xF3n de educaci\xF3n superior, busca garantizar la protecci\xF3n de los datos personales como objetivo primordial enmarcado en el derecho Constitucional que tienen todas las personas al conocimiento, actualizaci\xF3n y rectificaci\xF3n de las informaciones que de ellas se hubiera recogido y que reposen en bases de datos y archivos. Por ello en cumplimiento a lo dispuesto en la Ley estatutaria 1581 de 2012 y a su Decreto Reglamentario 1377 de 2013, el Seminario Conciliar de Tunja informa la pol\xEDtica aplicable a la entidad para el tratamiento protecci\xF3n de datos personales."), /*#__PURE__*/React.createElement("br", null)));
  }
}
class CrudEstudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {
    $("#tablaEstudiantes").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
      },
      responsive: true,
      dom: "Bfrtip",
      pageLength: 20,
      buttons: ["copy", "csv", "excel", "pdf", "print"],
      column: [{
        width: "1000px",
        targets: 0
      }, {
        width: "40px",
        targets: 1
      }, {
        width: "100px",
        targets: 2
      }, {
        width: "70px",
        targets: 3
      }, {
        width: "70px",
        targets: 4
      }, {
        width: "70px",
        targets: 4
      }, {
        width: "70px",
        targets: 4
      }, {
        width: "70px",
        targets: 5
      }]
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  render() {
    var datos = this.state.data.registros.map((registro, i) => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      dangerouslySetInnerHTML: {
        __html: registro.acciones
      }
    }), /*#__PURE__*/React.createElement("td", null, registro.tipoDocumento), /*#__PURE__*/React.createElement("td", null, registro.identificacion), /*#__PURE__*/React.createElement("td", null, registro.primerNombre), /*#__PURE__*/React.createElement("td", null, registro.segundoNombre), /*#__PURE__*/React.createElement("td", null, registro.primerApellido), /*#__PURE__*/React.createElement("td", null, registro.segundoApellido), /*#__PURE__*/React.createElement("td", null, registro.telefono), /*#__PURE__*/React.createElement("td", null, registro.direccion), /*#__PURE__*/React.createElement("td", null, registro.email), /*#__PURE__*/React.createElement("td", null, registro.estado)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: "head"
    }, /*#__PURE__*/React.createElement("h3", null, "Estudiantes"), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: data => nuevoUsuario(),
      class: "btn btn-primary d-sm-block d-lg-block"
    }, "A\xF1adir estudiante")), /*#__PURE__*/React.createElement("div", {
      class: "table-responsive table-responsive-sm"
    }, /*#__PURE__*/React.createElement("div", {
      class: "table table-sm table-striped"
    }, /*#__PURE__*/React.createElement("table", {
      id: "tablaEstudiantes",
      className: "table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "#"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Acciones"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "TD"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Identificaci\xF3n"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Primer Nombre"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Segundo Nombre"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Primer Apellido"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Segundo Apellido"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Tel\xE9fono"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Email"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Estado"))), /*#__PURE__*/React.createElement("tbody", null, datos)))));
  }
}
class Route extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ruta: props.ruta
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {}
  render() {
    return /*#__PURE__*/React.createElement("ul", {
      class: "breadcrumbs"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0);",
      onClick: data => home()
    }, "Home")), typeof this.state.ruta != "undefined" ? /*#__PURE__*/React.createElement("li", null, "/", " ", /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0);",
      onClick: data => eval(this.state.ruta.z)
    }, this.state.ruta.nombre)) : "");
  }
}
class ModalEstudiante extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.data,
      invocacion: props.invocacion
    };
    this.registrar = this.registrar.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }
  registrar(event) {
    event.preventDefault();
    if ($("#formEstudiante").valid()) {
      let formData = $("#formEstudiante").serialize() + "&c=AdministradorController&m=registrarEstudiante";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Usuario registrado.", "", "success").then(value => {
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  actualizar(event) {
    event.preventDefault();
    if ($("#formEstudiante").valid()) {
      let formData = $("#formEstudiante").serialize() + "&c=AdministradorController&m=actualizarEstudiante";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Usuario actualizado.", "", "success").then(value => {
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let titulo = this.state.invocacion == "registro" ? "Nuevo estudiante" : "Actualizar datos";
    return /*#__PURE__*/React.createElement("div", {
      class: "modal fade",
      id: "modalAuxiliar",
      tabindex: "-1",
      "aria-labelledby": "modalAuxiliarLabel",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-dialog modal-lg"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-header container"
    }, /*#__PURE__*/React.createElement("h5", {
      class: "modal-title",
      id: "modalAuxiliarLabel"
    }, titulo), /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), /*#__PURE__*/React.createElement("form", {
      id: "formEstudiante"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-body container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Primer nombre"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "primerNombre",
      name: "primerNombre",
      defaultValue: this.state.datos.primerNombre,
      placeholder: "Primer nombre",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Segundo nombre"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "segundoNombre",
      name: "segundoNombre",
      defaultValue: this.state.datos.segundoNombre,
      placeholder: "Segundo nombre"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Primer apellido"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "primerApellido",
      name: "primerApellido",
      defaultValue: this.state.datos.primerApellido,
      placeholder: "Primer apellido",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Segundo apellido"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "segundoApellido",
      name: "segundoApellido",
      defaultValue: this.state.datos.segundoApellido,
      placeholder: "Segundo apellido"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Tipo documento"), /*#__PURE__*/React.createElement("select", {
      id: "tipoDocumento",
      name: "tipoDocumento",
      class: "form-control form-control-sm",
      defaultValue: this.state.datos.tipoDocumento,
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), /*#__PURE__*/React.createElement("option", {
      value: "CC"
    }, "C\xE9dula"), /*#__PURE__*/React.createElement("option", {
      value: "TI"
    }, "Tarjeta de identidad"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Identificaci\xF3n"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "numeroDocumento",
      name: "numeroDocumento",
      defaultValue: this.state.datos.numeroDocumento,
      placeholder: "Identificaci\xF3n",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Email"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      className: "form-control form-control form-control-sm",
      id: "email",
      name: "email",
      defaultValue: this.state.datos.email,
      placeholder: "Email",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Tel\xE9fono"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "telefono",
      name: "telefono",
      defaultValue: this.state.datos.telefono,
      placeholder: "Tel\xE9fono",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "direccion",
      name: "direccion",
      defaultValue: this.state.datos.direccion,
      placeholder: "Direcci\xF3n",
      required: "required"
    })), this.state.invocacion == "registro" ? /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Contrase\xF1a"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "password",
      name: "password",
      defaultValue: "",
      placeholder: "Contrase\xF1a",
      required: "required"
    })) : "", this.state.invocacion != "registro" ? /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm d-none",
      id: "idUsuario",
      name: "idUsuario",
      defaultValue: this.state.datos.idUsuario,
      placeholder: "",
      required: "required"
    }) : "")), /*#__PURE__*/React.createElement("div", {
      class: "modal-footer container"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-secondary btn-sm",
      "data-dismiss": "modal"
    }, "Cerrar"), this.state.invocacion == "registro" ? /*#__PURE__*/React.createElement("button", {
      type: "submit",
      class: "btn btn-primary btn-sm",
      onClick: this.registrar
    }, "Guardar") : /*#__PURE__*/React.createElement("button", {
      type: "submit",
      class: "btn btn-primary btn-sm",
      onClick: this.actualizar
    }, "Actualizar"))))));
  }
}
class CrudDocentes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {
    $("#tablaDocentes").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
      },
      responsive: true,
      dom: "Bfrtip",
      pageLength: 20,
      buttons: ["copy", "csv", "excel", "print"]
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  render() {
    var datos = this.state.data.registros.map((registro, i) => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      dangerouslySetInnerHTML: {
        __html: registro.acciones
      }
    }), /*#__PURE__*/React.createElement("td", null, registro.tipoDocumento), /*#__PURE__*/React.createElement("td", null, registro.identificacion), /*#__PURE__*/React.createElement("td", null, registro.primerNombre), /*#__PURE__*/React.createElement("td", null, registro.segundoNombre), /*#__PURE__*/React.createElement("td", null, registro.primerApellido), /*#__PURE__*/React.createElement("td", null, registro.segundoApellido), /*#__PURE__*/React.createElement("td", null, registro.telefono), /*#__PURE__*/React.createElement("td", null, registro.direccion), /*#__PURE__*/React.createElement("td", null, registro.email), /*#__PURE__*/React.createElement("td", null, registro.estado)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: "head"
    }, /*#__PURE__*/React.createElement("h3", null, "Docentes"), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: data => nuevoDocente(),
      class: "btn btn-primary d-sm-block d-lg-block"
    }, "A\xF1adir docente")), /*#__PURE__*/React.createElement("div", {
      class: "table-responsive table-responsive-sm"
    }, /*#__PURE__*/React.createElement("div", {
      class: "table table-sm table-striped"
    }, /*#__PURE__*/React.createElement("table", {
      id: "tablaDocentes",
      className: "table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "#"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Acciones"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "TD"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Identificaci\xF3n"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Primer Nombre"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Segundo Nombre"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Primer Apellido"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Segundo Apellido"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Tel\xE9fono"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Email"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Estado"))), /*#__PURE__*/React.createElement("tbody", null, datos)))));
  }
}
class ModalDocente extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.data,
      invocacion: props.invocacion
    };
    this.registrar = this.registrar.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }
  registrar(event) {
    event.preventDefault();
    if ($("#formDocente").valid()) {
      let formData = $("#formDocente").serialize() + "&c=AdministradorController&m=registrarDocente";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Usuario registrado.", "", "success").then(value => {
                  vistaDocente();
                });
                break;
              case "88":
                modalLogout();
                break;
              case "99":
                $("#modalAuxiliar").modal("show");
                alerta("¡Error!", result.msj);
                break;
              default:
                alerta("¡Error!", "Error de codificación");
                $("#modalAuxiliar").modal("show");
            }
          }
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  actualizar(event) {
    event.preventDefault();
    if ($("#formDocente").valid()) {
      let formData = $("#formDocente").serialize() + "&c=AdministradorController&m=actualizarDocente";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Usuario actualizado.", "", "success").then(value => {
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let titulo = this.state.invocacion == "registro" ? "Nuevo docente" : "Actualizar datos";
    return /*#__PURE__*/React.createElement("div", {
      class: "modal fade",
      id: "modalAuxiliar",
      tabindex: "-1",
      "aria-labelledby": "modalAuxiliarLabel",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-dialog modal-lg"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-header container"
    }, /*#__PURE__*/React.createElement("h5", {
      class: "modal-title",
      id: "modalAuxiliarLabel"
    }, titulo), /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), /*#__PURE__*/React.createElement("form", {
      id: "formDocente"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-body container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Primer nombre"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "primerNombre",
      name: "primerNombre",
      defaultValue: this.state.datos.primerNombre,
      placeholder: "Primer nombre",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Segundo nombre"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "segundoNombre",
      name: "segundoNombre",
      defaultValue: this.state.datos.segundoNombre,
      placeholder: "Segundo nombre"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Primer apellido"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "primerApellido",
      name: "primerApellido",
      defaultValue: this.state.datos.primerApellido,
      placeholder: "Primer apellido",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Segundo apellido"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "segundoApellido",
      name: "segundoApellido",
      defaultValue: this.state.datos.segundoApellido,
      placeholder: "Segundo apellido"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Tipo documento"), /*#__PURE__*/React.createElement("select", {
      id: "tipoDocumento",
      name: "tipoDocumento",
      class: "form-control form-control-sm",
      defaultValue: this.state.datos.tipoDocumento,
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), /*#__PURE__*/React.createElement("option", {
      value: "CC"
    }, "C\xE9dula"), /*#__PURE__*/React.createElement("option", {
      value: "TI"
    }, "Tarjeta de identidad"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Identificaci\xF3n"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "numeroDocumento",
      name: "numeroDocumento",
      defaultValue: this.state.datos.numeroDocumento,
      placeholder: "Identificaci\xF3n",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Email"), /*#__PURE__*/React.createElement("input", {
      type: "email",
      className: "form-control form-control form-control-sm",
      id: "email",
      name: "email",
      defaultValue: this.state.datos.email,
      placeholder: "Email",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Tel\xE9fono"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "telefono",
      name: "telefono",
      defaultValue: this.state.datos.telefono,
      placeholder: "Tel\xE9fono",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "direccion",
      name: "direccion",
      defaultValue: this.state.datos.direccion,
      placeholder: "Direcci\xF3n",
      required: "required"
    })), this.state.invocacion == "registro" ? /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Contrase\xF1a"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "password",
      name: "password",
      defaultValue: "",
      placeholder: "Contrase\xF1a",
      required: "required"
    })) : "", this.state.invocacion != "registro" ? /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm d-none",
      id: "idUsuario",
      name: "idUsuario",
      defaultValue: this.state.datos.idUsuario,
      placeholder: "",
      required: "required"
    }) : "")), /*#__PURE__*/React.createElement("div", {
      class: "modal-footer container"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-secondary btn-sm",
      "data-dismiss": "modal"
    }, "Cerrar"), this.state.invocacion == "registro" ? /*#__PURE__*/React.createElement("button", {
      type: "submit",
      class: "btn btn-primary btn-sm",
      onClick: this.registrar
    }, "Guardar") : /*#__PURE__*/React.createElement("button", {
      type: "submit",
      class: "btn btn-primary btn-sm",
      onClick: this.actualizar
    }, "Actualizar"))))));
  }
}
class CrudAsignaturas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {
    $("#tablaAsignaturas").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
      },
      responsive: true,
      dom: "Bfrtip",
      pageLength: 10,
      buttons: ["copy", "csv", "excel", "print"]
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  componentWillUnmount() {}
  render() {
    var datos = this.state.data.registros.map((registro, i) => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      dangerouslySetInnerHTML: {
        __html: registro.acciones
      }
    }), /*#__PURE__*/React.createElement("td", null, registro.nombreAsignatura), /*#__PURE__*/React.createElement("td", null, registro.intensidadHorariaSemanal), /*#__PURE__*/React.createElement("td", null, registro.descripcion), /*#__PURE__*/React.createElement("td", null, registro.ciclo)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: "head"
    }, /*#__PURE__*/React.createElement("h3", null, "Asignaturas"), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: data => nuevaAsignatura(),
      class: "btn btn-primary d-sm-block d-lg-block"
    }, "A\xF1adir asignatura")), /*#__PURE__*/React.createElement("div", {
      class: "table-responsive table-responsive-sm"
    }, /*#__PURE__*/React.createElement("div", {
      class: "table table-sm table-striped"
    }, /*#__PURE__*/React.createElement("table", {
      id: "tablaAsignaturas",
      className: "table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "#"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Acciones"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Nombre asignatura"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Intensidad horaria"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Descripci\xF3n"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Ciclo"))), /*#__PURE__*/React.createElement("tbody", null, datos)))));
  }
}
class ModalAsignatura extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.data,
      invocacion: props.invocacion,
      select: props.select
    };
    this.registrar = this.registrar.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }
  registrar(event) {
    event.preventDefault();
    if ($("#formAsignatura").valid()) {
      let formData = $("#formAsignatura").serialize() + "&c=AdministradorController&m=registrarAsignatura";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Asignatura registrada.", "", "success").then(value => {
                  vistaAsignaturas();
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  actualizar(event) {
    event.preventDefault();
    if ($("#formAsignatura").valid()) {
      let formData = $("#formAsignatura").serialize() + "&c=AdministradorController&m=actualizarAsignatura";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Asignatura actualizada.", "", "success").then(value => {
                  vistaAsignaturas();
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let titulo = this.state.invocacion == "registro" ? "Nueva asignatura" : "Actualizar asignatura";
    let opciones = this.state.select.map((opcion, i) => /*#__PURE__*/React.createElement("option", {
      value: opcion.idCiclo
    }, opcion.nombreCiclo));
    return /*#__PURE__*/React.createElement("div", {
      class: "modal fade",
      id: "modalAuxiliar",
      tabindex: "-1",
      "aria-labelledby": "modalAuxiliarLabel",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-dialog modal-lg"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-header container"
    }, /*#__PURE__*/React.createElement("h5", {
      class: "modal-title",
      id: "modalAuxiliarLabel"
    }, titulo), /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), /*#__PURE__*/React.createElement("form", {
      id: "formAsignatura"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-body container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Nombre asignatura"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "nombreAsignatura",
      name: "nombreAsignatura",
      defaultValue: this.state.datos.nombreAsignatura,
      placeholder: "Nombre asignatura",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Intensidad semanal"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      className: "form-control form-control form-control-sm",
      id: "intensidadHorariaSemanal",
      name: "intensidadHorariaSemanal",
      defaultValue: this.state.datos.intensidadHorariaSemanal,
      placeholder: "Intensidad semanal",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Descripci\xF3n"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "descripcion",
      name: "descripcion",
      defaultValue: this.state.datos.descripcion,
      placeholder: "Descripci\xF3n "
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Ciclo"), /*#__PURE__*/React.createElement("select", {
      id: "idCiclo",
      name: "idCiclo",
      class: "form-control form-control-sm",
      defaultValue: this.state.datos.idCiclo,
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), opciones)), this.state.invocacion != "registro" ? /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm d-none",
      id: "idAsignatura",
      name: "idAsignatura",
      defaultValue: this.state.datos.idAsignatura,
      placeholder: " "
    }) : "")), /*#__PURE__*/React.createElement("div", {
      class: "modal-footer container"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-secondary btn-sm",
      "data-dismiss": "modal"
    }, "Cerrar"), this.state.invocacion == "registro" ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-primary btn-sm",
      onClick: this.registrar
    }, "Guardar") : /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-primary btn-sm",
      onClick: this.actualizar
    }, "Actualizar"))))));
  }
}
class CrudHorarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {
    $("#tablaHorarios").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
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
    var datos = this.state.data.registros.map((registro, i) => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      dangerouslySetInnerHTML: {
        __html: registro.acciones
      }
    }), /*#__PURE__*/React.createElement("td", null, registro.dia), /*#__PURE__*/React.createElement("td", null, registro.horaInicio), /*#__PURE__*/React.createElement("td", null, registro.horaFin)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: "head"
    }, /*#__PURE__*/React.createElement("h3", null, "Horarios"), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: data => nuevoHorario(),
      class: "btn btn-primary d-sm-block d-lg-block"
    }, "A\xF1adir Horario")), /*#__PURE__*/React.createElement("div", {
      class: "table-responsive table-responsive-sm"
    }, /*#__PURE__*/React.createElement("div", {
      class: "table table-sm table-striped"
    }, /*#__PURE__*/React.createElement("table", {
      id: "tablaHorarios",
      className: "table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "#"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Acciones"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Dia"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Hora Inicio"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Hora Fin"))), /*#__PURE__*/React.createElement("tbody", null, datos)))));
  }
}
class ModalHorarios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.data,
      invocacion: props.invocacion,
      select: props.select
    };
    this.registrar = this.registrar.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }
  registrar(event) {
    event.preventDefault();
    if ($("#formHorarios").valid()) {
      let formData = $("#formHorarios").serialize() + "&c=AdministradorController&m=registrarHorarios";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Horario registrado.", "", "success").then(value => {
                  vistaHorarios();
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  actualizar(event) {
    event.preventDefault();
    if ($("#formHorarios").valid()) {
      let formData = $("#formHorarios").serialize() + "&c=AdministradorController&m=actualizarHorario";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Horario actualizado.", "", "success").then(value => {
                  vistaAsignaturas();
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let titulo = this.state.invocacion == "registro" ? "Nuevo Horario" : "Actualizar Horario";
    let opciones = this.state.select.map((opcion, i) => /*#__PURE__*/React.createElement("option", {
      value: opcion.idCiclo
    }, opcion.nombreCiclo));
    return /*#__PURE__*/React.createElement("div", {
      class: "modal fade",
      id: "modalAuxiliar",
      tabindex: "-1",
      "aria-labelledby": "modalAuxiliarLabel",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-dialog modal-lg"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-header container"
    }, /*#__PURE__*/React.createElement("h5", {
      class: "modal-title",
      id: "modalAuxiliarLabel"
    }, titulo), /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), /*#__PURE__*/React.createElement("form", {
      id: "formHorarios"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-body container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Nombre Asignatura"), /*#__PURE__*/React.createElement("select", {
      id: "codAsignaturaH",
      name: "codAsignaturaH",
      defaultValue: this.state.datos.codAsignaturaH,
      class: "form-control form-control-sm",
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), opciones)), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Nombre Ciclo"), /*#__PURE__*/React.createElement("select", {
      id: "codCiclo",
      name: "codCiclo",
      class: "form-control form-control-sm",
      defaultValue: this.state.datos.codCiclo,
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), opciones)), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Dia"), /*#__PURE__*/React.createElement("select", {
      id: "dia",
      name: "dia",
      class: "form-control form-control-sm",
      defaultValue: this.state.datos.dia,
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), /*#__PURE__*/React.createElement("option", {
      value: "Lunes"
    }, "lunes"), /*#__PURE__*/React.createElement("option", {
      value: "Martes"
    }, "Martes"), /*#__PURE__*/React.createElement("option", {
      value: "Miercoles"
    }, "Miercoles"), /*#__PURE__*/React.createElement("option", {
      value: "Jueves"
    }, "Jueves"), /*#__PURE__*/React.createElement("option", {
      value: "Viernes"
    }, "Viernes"), /*#__PURE__*/React.createElement("option", {
      value: "Sabado"
    }, "Sabado"), /*#__PURE__*/React.createElement("option", {
      value: "Domingo"
    }, "Domingo"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Hora Inicio"), /*#__PURE__*/React.createElement("input", {
      type: "time",
      className: "form-control form-control form-control-sm",
      name: "horaInicio",
      defaultValue: this.state.datos.horaInicio,
      value: "08:15:00",
      max: "12:00:00",
      min: "08:00:00",
      step: "1",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Hora Fin"), /*#__PURE__*/React.createElement("input", {
      type: "time",
      className: "form-control form-control form-control-sm",
      name: "horaFin",
      defaultValue: this.state.datos.horaFin,
      value: "14:15",
      min: "14:00",
      max: "18:00",
      step: "1",
      required: "required"
    })), this.state.invocacion != "registro" ? /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm d-none",
      id: "idHorario",
      name: "idHorario",
      defaultValue: this.state.datos.idHorario,
      placeholder: " "
    }) : "")), /*#__PURE__*/React.createElement("div", {
      class: "modal-footer container"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-secondary btn-sm",
      "data-dismiss": "modal"
    }, "Cerrar"), this.state.invocacion == "registro" ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-primary btn-sm",
      onClick: this.registrar
    }, "Guardar") : /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-primary btn-sm",
      onClick: this.actualizar
    }, "Actualizar"))))));
  }
}

// PALN ESTUDIOS INICIOS

//****************** */
/*
class CrudPlanEstudios extends React.Component {
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
    $("#tablaPlanEstudios").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json",
      },
    responsive: true,
      dom: "Bfrtip",
      pageLength: 20,
      buttons: ["copy", "csv", "excel", "pdf", "print"],
      column: [
        {
          width: "10000px",
          targets: 0,
        },
        {
          width: "40px",
          targets: 1,
        },
        {
          width: "100px",
          targets: 2,
        },
        {
          width: "70px",
          targets: 3,
        },
        {
          width: "70px",
          targets: 4,
        },
        {
          width: "70px",
          targets: 4,
        },
        {
          width: "70px",
          targets: 4,
        },
        {
          width: "70px",
          targets: 5,
        },
      ],
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }

  render() {
    var datos = this.state.data.registros.map((registro, i) => (
      <tr>
        <th scope="row">{i + 1}</th>
        <td
          dangerouslySetInnerHTML={{
            __html: registro.acciones,
          }}
        ></td>
        <td>{registro.idCiclo}</td>
        <td>{registro.nombreCiclo}</td>
        <td>{registro.nombreAsignatura}</td>
        <td>{registro.intensidadHorariaSemanal}</td>
        </tr>
    ));
    return (
      <div>
        <div class="head">
          <h3>Plan Estudios</h3>
<a
            href="javascript:void(0)"
            onClick={(data) => nuevoCiclo()}
            class="btn btn-primary d-sm-block d-lg-block"
          >
            Añadir Ciclo
          </a>

          
        </div>
        <div class="table-responsive table-responsive-sm">
          <div class="table table-sm table-striped">
            <table id="tablaPlanEstudios" className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">ID</th>
                  <th scope="col">Ciclo</th>
                  <th scope="col">Asignatura</th>
                  <th scope="col">Intensidad Horaria</th>
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
class ModalPlanEstudios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.data,
      invocacion: props.invocacion,
      select: props.select,
    };
    this.registrar = this.registrar.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }
  registrar(event) {
    event.preventDefault();
    if ($("#formPlanEstudios").valid()) {
      let formData =
        $("#formPlanEstudios").serialize() +
        "&c=AdministradorController&m=registrarCiclo";
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
                    vistaPlanEstudios;
                  });
                  break;
                case "88":
                  modalLogout();
                  break;
                case "99":
                  $("#modalAuxiliar").modal("show");
                  alerta("¡Error!", result.msj);
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
    if ($("#formCiclo").valid()) {
      let formData =
        $("#formCiclo").serialize() +
        "&c=AdministradorController&m=actualizarCiclo";
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
                  swal("Ciclo actualizado.", "", "success").then(
                    (value) => {
                      vistaCiclo();
                    }
                  );
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
        ? "Nuevo ciclo"
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
            <form id="formCiclo">
              <div class="modal-body container">
                <div className="form-row">
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Nombre Ciclo</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="nombreCiclo"
                      name="nombreCiclo"
                      defaultValue={this.state.datos.nombreCiclo}
                      placeholder="Nombre ciclo"
                      required="required"
                      
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Nombre Grupo</label>
                    <select
                      id="idGrupo"
                      name="idGrupo"
                      defaultValue={this.state.datos.idGrupo}
                      class="form-control form-control-sm"
                      required="required"
                    >
                      <option value="">Seleccione...</option>
                      {opciones}
                    </select>
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Semestre</label>
                    <select
                      id="semestre"
                      name="semestre"
                      class="form-control form-control-sm"
                      defaultValue={this.state.datos.semestre}
                      required="required"
                    >
                      <option value="">Seleccione...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>

                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Descripción</label>
                    <input
                      type="text"
                      className="form-control form-control form-control-sm"
                      id="descripcion"
                      name="descripcion"
                      defaultValue={this.state.datos.descripcion}
                      placeholder="Descripción"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Fecha Inicio</label>
                    <input
                      type="date"
                      className="form-control form-control form-control-sm"
                      name="fechaInicio"
                      defaultValue={this.state.datos.fechaInicio}
                      required="required"
                    />
                  </div>
                  <div className="form-group col-12 col-sm-12 col-md-6 col-lg-6">
                    <label htmlFor="inputAddress">Fecha Fin</label>
                    <input
                      type="date"
                      className="form-control form-control form-control-sm"
                      name="fechaFin"
                      defaultValue={this.state.datos.fechaFinalizacion}
                      required="required"
                    />
                  </div>
                  {this.state.invocacion != "registro" ? (
                    <input
                      type="text"
                      className="form-control form-control form-control-sm d-none"
                      id="idCiclo"
                      name="idCiclo"
                      defaultValue={this.state.datos.idCiclo}
                      placeholder=" "
                    />
                  ) : (
                    ""
                  )}
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
}*/

class CrudPlanEstudios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {
    $("#tablaPlanEstudios").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
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
    var datos = this.state.data.registros.map((registro, i) => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      dangerouslySetInnerHTML: {
        __html: registro.acciones
      }
    }), /*#__PURE__*/React.createElement("td", null, registro.nombreCiclo), /*#__PURE__*/React.createElement("td", null, registro.nombreAsignatura), /*#__PURE__*/React.createElement("td", null, registro.intensidadHorariaSemanal)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: "head"
    }, /*#__PURE__*/React.createElement("h3", null, "Plan de Estudios"), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: data => nuevoHorario(),
      class: "btn btn-primary d-sm-block d-lg-block"
    }, "A\xF1adir Plan estudios")), /*#__PURE__*/React.createElement("div", {
      class: "table-responsive table-responsive-sm"
    }, /*#__PURE__*/React.createElement("div", {
      class: "table table-sm table-striped"
    }, /*#__PURE__*/React.createElement("table", {
      id: "tablaPlanEstuidios",
      className: "table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "#"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Acciones"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Ciclo"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Asignatura"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Intensidad Semanal"))), /*#__PURE__*/React.createElement("tbody", null, datos)))));
  }
}
class ModalPlanEstudios extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.data,
      invocacion: props.invocacion,
      select: props.select
    };
    this.registrar = this.registrar.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }
  registrar(event) {
    event.preventDefault();
    if ($("#formPlanEstudios").valid()) {
      let formData = $("#formPlanEstudios").serialize() + "&c=AdministradorController&m=registrarHorarios";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Plan estudios registrado.", "", "success").then(value => {
                  vistaPlanEstudios();
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  actualizar(event) {
    event.preventDefault();
    if ($("#formPlanEstudios").valid()) {
      let formData = $("#formPlanEstudios").serialize() + "&c=AdministradorController&m=actualizarHorario";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Plan de estudios actualizado.", "", "success").then(value => {
                  vistaAsignaturas();
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let titulo = this.state.invocacion == "registro" ? "Nuevo Horario" : "Actualizar Horario";
    let opciones = this.state.select.map((opcion, i) => /*#__PURE__*/React.createElement("option", {
      value: opcion.idCiclo
    }, opcion.nombreCiclo));
    return /*#__PURE__*/React.createElement("div", {
      class: "modal fade",
      id: "modalAuxiliar",
      tabindex: "-1",
      "aria-labelledby": "modalAuxiliarLabel",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-dialog modal-lg"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-header container"
    }, /*#__PURE__*/React.createElement("h5", {
      class: "modal-title",
      id: "modalAuxiliarLabel"
    }, titulo), /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), /*#__PURE__*/React.createElement("form", {
      id: "formHorarios"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-body container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Nombre Asignatura"), /*#__PURE__*/React.createElement("select", {
      id: "codAsignaturaH",
      name: "codAsignaturaH",
      defaultValue: this.state.datos.codAsignaturaH,
      class: "form-control form-control-sm",
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), opciones)), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Nombre Ciclo"), /*#__PURE__*/React.createElement("select", {
      id: "codCiclo",
      name: "codCiclo",
      class: "form-control form-control-sm",
      defaultValue: this.state.datos.codCiclo,
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), opciones)), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Dia"), /*#__PURE__*/React.createElement("select", {
      id: "dia",
      name: "dia",
      class: "form-control form-control-sm",
      defaultValue: this.state.datos.dia,
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), /*#__PURE__*/React.createElement("option", {
      value: "Lunes"
    }, "lunes"), /*#__PURE__*/React.createElement("option", {
      value: "Martes"
    }, "Martes"), /*#__PURE__*/React.createElement("option", {
      value: "Miercoles"
    }, "Miercoles"), /*#__PURE__*/React.createElement("option", {
      value: "Jueves"
    }, "Jueves"), /*#__PURE__*/React.createElement("option", {
      value: "Viernes"
    }, "Viernes"), /*#__PURE__*/React.createElement("option", {
      value: "Sabado"
    }, "Sabado"), /*#__PURE__*/React.createElement("option", {
      value: "Domingo"
    }, "Domingo"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Hora Inicio"), /*#__PURE__*/React.createElement("input", {
      type: "time",
      className: "form-control form-control form-control-sm",
      name: "horaInicio",
      defaultValue: this.state.datos.horaInicio,
      value: "08:15:00",
      max: "12:00:00",
      min: "08:00:00",
      step: "1",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Hora Fin"), /*#__PURE__*/React.createElement("input", {
      type: "time",
      className: "form-control form-control form-control-sm",
      name: "horaFin",
      defaultValue: this.state.datos.horaFin,
      value: "14:15",
      min: "14:00",
      max: "18:00",
      step: "1",
      required: "required"
    })), this.state.invocacion != "registro" ? /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm d-none",
      id: "idHorario",
      name: "idHorario",
      defaultValue: this.state.datos.idHorario,
      placeholder: " "
    }) : "")), /*#__PURE__*/React.createElement("div", {
      class: "modal-footer container"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-secondary btn-sm",
      "data-dismiss": "modal"
    }, "Cerrar"), this.state.invocacion == "registro" ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-primary btn-sm",
      onClick: this.registrar
    }, "Guardar") : /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-primary btn-sm",
      onClick: this.actualizar
    }, "Actualizar"))))));
  }
}

//********************** */

// CICLO
class CrudCiclo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {
    $("#tablaCiclo").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
      },
      responsive: true,
      dom: "Bfrtip",
      pageLength: 20,
      buttons: ["copy", "csv", "excel", "pdf", "print"],
      column: [{
        width: "10000px",
        targets: 0
      }, {
        width: "40px",
        targets: 1
      }, {
        width: "100px",
        targets: 2
      }, {
        width: "70px",
        targets: 3
      }, {
        width: "70px",
        targets: 4
      }, {
        width: "70px",
        targets: 4
      }, {
        width: "70px",
        targets: 4
      }, {
        width: "70px",
        targets: 5
      }]
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  render() {
    var datos = this.state.data.registros.map((registro, i) => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      dangerouslySetInnerHTML: {
        __html: registro.acciones
      }
    }), /*#__PURE__*/React.createElement("td", null, registro.idCiclo), /*#__PURE__*/React.createElement("td", null, registro.nombreCiclo), /*#__PURE__*/React.createElement("td", null, registro.semestre), /*#__PURE__*/React.createElement("td", null, registro.descripcion), /*#__PURE__*/React.createElement("td", null, registro.fechaInicio), /*#__PURE__*/React.createElement("td", null, registro.fechaFinalizacion), /*#__PURE__*/React.createElement("td", null, registro.nombreGrupo)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: "head"
    }, /*#__PURE__*/React.createElement("h3", null, "Ciclo"), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: data => nuevoCiclo(),
      class: "btn btn-primary d-sm-block d-lg-block"
    }, "A\xF1adir Ciclo")), /*#__PURE__*/React.createElement("div", {
      class: "table-responsive table-responsive-sm"
    }, /*#__PURE__*/React.createElement("div", {
      class: "table table-sm table-striped"
    }, /*#__PURE__*/React.createElement("table", {
      id: "tablaCiclo",
      className: "table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "#"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Acciones"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "ID"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Nombre"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Semestre"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Descripci\xF3n"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Fecha Inicio"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Fecha Finalizaci\xF3n"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Nombre Grupo"))), /*#__PURE__*/React.createElement("tbody", null, datos)))));
  }
}
class ModalCiclo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.data,
      invocacion: props.invocacion,
      select: props.select
    };
    this.registrar = this.registrar.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }
  registrar(event) {
    event.preventDefault();
    if ($("#formCiclo").valid()) {
      let formData = $("#formCiclo").serialize() + "&c=AdministradorController&m=registrarCiclo";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Ciclo registrado.", "", "success").then(value => {
                  vistaCiclo();
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  actualizar(event) {
    event.preventDefault();
    if ($("#formCiclo").valid()) {
      let formData = $("#formCiclo").serialize() + "&c=AdministradorController&m=actualizarCiclo";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Ciclo actualizado.", "", "success").then(value => {
                  vistaCiclo();
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    let titulo = this.state.invocacion == "registro" ? "Nuevo ciclo" : "Actualizar ciclo";
    let opciones = this.state.select.map((opcion, i) => /*#__PURE__*/React.createElement("option", {
      value: opcion.IdGrupo
    }, opcion.nombreGrupo));
    return /*#__PURE__*/React.createElement("div", {
      class: "modal fade",
      id: "modalAuxiliar",
      tabindex: "-1",
      "aria-labelledby": "modalAuxiliarLabel",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-dialog modal-lg"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-header container"
    }, /*#__PURE__*/React.createElement("h5", {
      class: "modal-title",
      id: "modalAuxiliarLabel"
    }, titulo), /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), /*#__PURE__*/React.createElement("form", {
      id: "formCiclo"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-body container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Nombre Ciclo"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "nombreCiclo",
      name: "nombreCiclo",
      defaultValue: this.state.datos.nombreCiclo,
      placeholder: "Nombre ciclo",
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Nombre Grupo"), /*#__PURE__*/React.createElement("select", {
      id: "idGrupo",
      name: "idGrupo",
      defaultValue: this.state.datos.idGrupo,
      class: "form-control form-control-sm",
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), opciones)), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Semestre"), /*#__PURE__*/React.createElement("select", {
      id: "semestre",
      name: "semestre",
      class: "form-control form-control-sm",
      defaultValue: this.state.datos.semestre,
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), /*#__PURE__*/React.createElement("option", {
      value: "1"
    }, "1"), /*#__PURE__*/React.createElement("option", {
      value: "2"
    }, "2"))), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Descripci\xF3n"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "descripcion",
      name: "descripcion",
      defaultValue: this.state.datos.descripcion,
      placeholder: "Descripci\xF3n"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Fecha Inicio"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      className: "form-control form-control form-control-sm",
      name: "fechaInicio",
      defaultValue: this.state.datos.fechaInicio,
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Fecha Fin"), /*#__PURE__*/React.createElement("input", {
      type: "date",
      className: "form-control form-control form-control-sm",
      name: "fechaFin",
      defaultValue: this.state.datos.fechaFinalizacion,
      required: "required"
    })), this.state.invocacion != "registro" ? /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm d-none",
      id: "idCiclo",
      name: "idCiclo",
      defaultValue: this.state.datos.idCiclo,
      placeholder: " "
    }) : "")), /*#__PURE__*/React.createElement("div", {
      class: "modal-footer container"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-secondary btn-sm",
      "data-dismiss": "modal"
    }, "Cerrar"), this.state.invocacion == "registro" ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-primary btn-sm",
      onClick: this.registrar
    }, "Guardar") : /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-primary btn-sm",
      onClick: this.actualizar
    }, "Actualizar"))))));
  }
}
// CALIFICACIONES
class CrudCalificaciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {
    $("#tablaCalificaciones").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
      },
      responsive: true,
      dom: "Bfrtip",
      pageLength: 20,
      buttons: ["copy", "csv", "excel", "print"],
      column: [{
        width: "10000px",
        targets: 0
      }, {
        width: "40px",
        targets: 1
      }, {
        width: "100px",
        targets: 2
      }, {
        width: "70px",
        targets: 3
      }, {
        width: "70px",
        targets: 4
      }, {
        width: "70px",
        targets: 4
      }, {
        width: "70px",
        targets: 4
      }, {
        width: "70px",
        targets: 5
      }]
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  render() {
    var datos = this.state.data.registros.map((registro, i) => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      dangerouslySetInnerHTML: {
        __html: registro.acciones
      }
    }), /*#__PURE__*/React.createElement("td", null, registro.idclase), /*#__PURE__*/React.createElement("td", null, registro.docente), /*#__PURE__*/React.createElement("td", null, registro.estudiante), /*#__PURE__*/React.createElement("td", null, registro.numerodocumento), /*#__PURE__*/React.createElement("td", null, registro.nombreasignatura), /*#__PURE__*/React.createElement("td", null, registro.notahabilitacion), /*#__PURE__*/React.createElement("td", null, registro.notatutoria), /*#__PURE__*/React.createElement("td", null, registro.notafinal)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: "head"
    }, /*#__PURE__*/React.createElement("h3", null, "Calificaciones"), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: data => nuevaCalificacion(),
      class: "btn btn-primary d-sm-block d-lg-block"
    }, "A\xF1adir Calificaci\xF3n")), /*#__PURE__*/React.createElement("div", {
      class: "table-responsive table-responsive-sm"
    }, /*#__PURE__*/React.createElement("div", {
      class: "table table-sm table-striped"
    }, /*#__PURE__*/React.createElement("table", {
      id: "tablaCalificaciones",
      className: "table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "#"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Acciones"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "ID Clase"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Docente"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Estudiante"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "N\xFAmero identificaci\xF3n"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Nombre asginatura"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Nota Habilitaci\xF3n"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Nota Tutoria"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Nota Final"))), /*#__PURE__*/React.createElement("tbody", null, datos)))));
  }
}
class ModalCalificaciones extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.data,
      invocacion: props.invocacion,
      select: props.select
    };
    this.registrar = this.registrar.bind(this);
    this.actualizar = this.actualizar.bind(this);
  }
  registrar(event) {
    event.preventDefault();
    if ($("#formCalificacion").valid()) {
      let formData = $("#formCalificacion").serialize() + "&c=DocenteController&m=registrarCalificacion";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Calificación registrada.", "", "success").then(value => {
                  vistaCalificaciones();
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  actualizar(event) {
    event.preventDefault();
    if ($("#formCalificacion").valid()) {
      let formData = $("#formCalificacion").serialize() + "&c=DocenteController&m=actualizarNota";
      Pace.track(function () {
        $.ajax({
          url: "../Route.php",
          type: "POST",
          data: formData,
          beforeSend: function () {
            $("#modalAuxiliar").modal("hide");
          }
        }).done(function (result) {
          if (validarResult(result)) {
            switch (result.cod) {
              case "00":
                $("#modalAuxiliar").hide();
                swal("Calificación actualizada.", "", "success").then(value => {
                  vistaCalificaciones();
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
        }).fail(function () {
          console.log("error");
        });
      });
    }
  }
  componentDidMount() {}
  componentWillUnmount() {} //Fin will

  render() {
    let titulo = this.state.invocacion == "registro" ? "Nueva calificacion" : "Actualizar calificacion";
    //Mapeo 

    let opcionesEstudiante = this.state.select[1].map((opcion, i) => /*#__PURE__*/React.createElement("option", {
      value: opcion.idUsuario
    }, opcion.numeroDocumento));
    let opciones = this.state.select[0].map((opcion, i) => /*#__PURE__*/React.createElement("option", {
      value: opcion.idAsignatura
    }, opcion.nombreAsignatura));
    return /*#__PURE__*/React.createElement("div", {
      class: "modal fade",
      id: "modalAuxiliar",
      tabindex: "-1",
      "aria-labelledby": "modalAuxiliarLabel",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-dialog modal-lg"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-header container"
    }, /*#__PURE__*/React.createElement("h5", {
      class: "modal-title",
      id: "modalAuxiliarLabel"
    }, titulo), /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))), /*#__PURE__*/React.createElement("form", {
      id: "formCalificacion"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-body container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "N\xFAmero Identificaci\xF3n"), /*#__PURE__*/React.createElement("select", {
      id: "idUsuario",
      name: "idUsuario",
      defaultValue: this.state.datos.idEstudiante,
      class: "form-control form-control-sm",
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), opcionesEstudiante)), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Asignatura"), /*#__PURE__*/React.createElement("select", {
      id: "idAsignatura",
      name: "idAsignatura",
      defaultValue: this.state.datos.idAsignatura,
      class: "form-control form-control-sm",
      required: "required"
    }, /*#__PURE__*/React.createElement("option", {
      value: ""
    }, "Seleccione..."), opciones)), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Nota Habilitaci\xF3n"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      className: "form-control form-control form-control-sm",
      id: "notaHabilitacion",
      name: "notaHabilitacion",
      placeholder: "0.00",
      step: "0.01",
      min: "0",
      max: "5",
      defaultValue: this.state.datos.notaHabilitacion,
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Nota tutoria"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      className: "form-control form-control form-control-sm",
      id: "notaTutoria",
      name: "notaTutoria",
      placeholder: "0.00",
      step: "0.01",
      min: "0",
      max: "5",
      defaultValue: this.state.datos.notaTutoria,
      required: "required"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Nota Final"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      className: "form-control form-control form-control-sm",
      id: "notaFinal",
      name: "notaFinal",
      placeholder: "0.00",
      step: "0.01",
      min: "0",
      max: "5",
      defaultValue: this.state.datos.notaFinal,
      required: "required"
    })), this.state.invocacion != "registro" ? /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm d-none",
      id: "idClase",
      name: "idClase",
      defaultValue: this.state.datos.idClase,
      placeholder: " "
    }) : "")), /*#__PURE__*/React.createElement("div", {
      class: "modal-footer container"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-secondary btn-sm",
      "data-dismiss": "modal"
    }, "Cerrar"), this.state.invocacion == "registro" ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-primary btn-sm",
      onClick: this.registrar
    }, "Guardar") : /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "btn btn-primary btn-sm",
      onClick: this.actualizar
    }, "Actualizar"))))));
  }
}
// NOTA

class CrudNota extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {
    $("#tablaNota").DataTable({
      language: {
        url: "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/Spanish.json"
      },
      responsive: true,
      dom: "Bfrtip",
      pageLength: 10,
      buttons: ["copy", "csv", "excel", "print"]
    });
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  componentWillUnmount() {}
  render() {
    var datos = this.state.data.registros.map((registro, i) => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      dangerouslySetInnerHTML: {
        __html: registro.acciones
      }
    }), /*#__PURE__*/React.createElement("td", null, registro.nombreCiclo), /*#__PURE__*/React.createElement("td", null, registro.nombreAsignatura), /*#__PURE__*/React.createElement("td", null, registro.intensidadHorariaSemanal)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: "head"
    }, /*#__PURE__*/React.createElement("h3", null, "Notas estudiante")), /*#__PURE__*/React.createElement("div", {
      class: "table-responsive table-responsive-sm"
    }, /*#__PURE__*/React.createElement("div", {
      class: "table table-sm table-striped"
    }, /*#__PURE__*/React.createElement("table", {
      id: "tablaNota",
      className: "table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "#"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Acciones"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Ciclo"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Asignatura"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Intensidad Semanal"))), /*#__PURE__*/React.createElement("tbody", null, datos)))));
  }
}
class ModalNota extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datos: props.data,
      invocacion: props.invocacion,
      select: props.select
    };
  }
  componentDidMount() {}
  componentWillUnmount() {}
  render() {
    return /*#__PURE__*/React.createElement("div", {
      class: "modal fade",
      id: "modalAuxiliar",
      tabindex: "-1",
      "aria-labelledby": "modalAuxiliarLabel",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-dialog modal-lg"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-content"
    }, /*#__PURE__*/React.createElement("div", {
      class: "modal-header container"
    }, /*#__PURE__*/React.createElement("h5", {
      class: "modal-title",
      id: "modalAuxiliarLabel"
    }, titulo), /*#__PURE__*/React.createElement("button", {
      type: "button",
      class: "close",
      "data-dismiss": "modal",
      "aria-label": "Close"
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))))));
  }
}

// notas