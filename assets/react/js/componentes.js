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
      href: "#",
      onClick: data => salir()
    }, /*#__PURE__*/React.createElement("i", {
      class: "bx bxs-log-out-circle"
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
    }, /*#__PURE__*/React.createElement("h3", null, "Eventos Seminario")), /*#__PURE__*/React.createElement("div", {
      id: "slider",
      style: {
        backgroundColor: "yellow"
      }
    }, /*#__PURE__*/React.createElement("figure", null, /*#__PURE__*/React.createElement("img", {
      src: "../assets/images/actividad1.jpg",
      alt: ""
    }), /*#__PURE__*/React.createElement("img", {
      src: "../assets/images/actividad1.jpg",
      alt: ""
    }), /*#__PURE__*/React.createElement("img", {
      src: "../assets/images/actividad1.jpg",
      alt: ""
    }), /*#__PURE__*/React.createElement("img", {
      src: "../assets/images/actividad1.jpg",
      alt: ""
    }))));
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
  componentWillUnmount() {}
  render() {
    console.log(this.state.data);
    var datos = this.state.data.registros.map((registro, i) => /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, i + 1), /*#__PURE__*/React.createElement("td", {
      dangerouslySetInnerHTML: {
        __html: registro.acciones
      }
    }), /*#__PURE__*/React.createElement("td", null, registro.primerNombre), /*#__PURE__*/React.createElement("td", null, registro.segundoNombre), /*#__PURE__*/React.createElement("td", null, registro.primerApellido), /*#__PURE__*/React.createElement("td", null, registro.segundoApellido), /*#__PURE__*/React.createElement("td", null, registro.identificacion), /*#__PURE__*/React.createElement("td", null, registro.tipoDocumento), /*#__PURE__*/React.createElement("td", null, registro.telefono), /*#__PURE__*/React.createElement("td", null, registro.direccion), /*#__PURE__*/React.createElement("td", null, registro.email), /*#__PURE__*/React.createElement("td", null, registro.estado)));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      class: "head"
    }, /*#__PURE__*/React.createElement("h3", null, "Estudiantes"), /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0)",
      onClick: data => nuevoUsuario(),
      class: "btn btn-primary"
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
    }, "Primer Nombre"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Segundo Nombre"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Primer Apellido"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Segundo Apellido"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Identificaci\xF3n"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "TD"), /*#__PURE__*/React.createElement("th", {
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
    })), this.state.invocacion == 'registro' ? /*#__PURE__*/React.createElement("div", {
      className: "form-group col-12 col-sm-12 col-md-6 col-lg-6"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "inputAddress"
    }, "Contrase\xF1a"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      className: "form-control form-control form-control-sm",
      id: "password",
      name: "password",
      defaultValue: '',
      placeholder: "Contrase\xF1a",
      required: "required"
    })) : '')), /*#__PURE__*/React.createElement("div", {
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