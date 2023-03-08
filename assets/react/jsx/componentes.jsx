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
      <nav>
        <i class="bx bx-menu toggle-sidebar"></i>

        <h1>Seminario Conciliar Tunja</h1>
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
      <main>
        <ul class="breadcrumbs">
          <li>
            <a href="javascript:void(0);" onClick={data=>home()}>Home</a>
          </li>
          {/* <label id="user-sesion">Bienvenido</label> */}
        </ul>
        <div class="data">
          <div class="content-data">
            <div class="head">
              <h3>Eventos Seminario</h3>
            </div>
            <div id="slider" style={{backgroundColor: 'yellow'}}>
              <figure>
                <img src="../assets/images/actividad1.jpg" alt="" />
                <img src="../assets/images/actividad1.jpg" alt="" />
                <img src="../assets/images/actividad1.jpg" alt="" />
                <img src="../assets/images/actividad1.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
class CrudEstudiantes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registros: props.data.registros,
      tipoUser: props.data.tipoUser,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {}
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    );
  }
}