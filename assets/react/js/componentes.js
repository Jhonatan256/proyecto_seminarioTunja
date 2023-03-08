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
    return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("i", {
      class: "bx bx-menu toggle-sidebar"
    }), /*#__PURE__*/React.createElement("h1", null, "Seminario Conciliar Tunja"), /*#__PURE__*/React.createElement("span", {
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
    return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("ul", {
      class: "breadcrumbs"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "javascript:void(0);",
      onClick: data => home()
    }, "Home"))), /*#__PURE__*/React.createElement("div", {
      class: "data"
    }, /*#__PURE__*/React.createElement("div", {
      class: "content-data"
    }, /*#__PURE__*/React.createElement("div", {
      class: "head"
    }, /*#__PURE__*/React.createElement("h3", null, "Eventos Seminario")), /*#__PURE__*/React.createElement("div", {
      id: "slider",
      style: {
        backgroundColor: 'yellow'
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
    }))))));
  }
}
class CrudEstudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registros: props.data.registros,
      tipoUser: props.data.tipoUser
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {}
  render() {
    return /*#__PURE__*/React.createElement("table", {
      className: "table"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "#"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "First"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Last"), /*#__PURE__*/React.createElement("th", {
      scope: "col"
    }, "Handle"))), /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, "1"), /*#__PURE__*/React.createElement("td", null, "Mark"), /*#__PURE__*/React.createElement("td", null, "Otto"), /*#__PURE__*/React.createElement("td", null, "@mdo")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, "2"), /*#__PURE__*/React.createElement("td", null, "Jacob"), /*#__PURE__*/React.createElement("td", null, "Thornton"), /*#__PURE__*/React.createElement("td", null, "@fat")), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      scope: "row"
    }, "3"), /*#__PURE__*/React.createElement("td", null, "Larry"), /*#__PURE__*/React.createElement("td", null, "the Bird"), /*#__PURE__*/React.createElement("td", null, "@twitter"))));
  }
}