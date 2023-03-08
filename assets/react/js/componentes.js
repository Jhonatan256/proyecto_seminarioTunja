class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      identificacion: props.identificacion,
      pass: props.pass
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  componentDidMount() {}
  render() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
      id: "sidebar"
    }, /*#__PURE__*/React.createElement("a", {
      href: "HomeAdmin.php",
      className: "brand"
    }, "\xA0\xA0\xA0", /*#__PURE__*/React.createElement("i", {
      className: "bx bxs-user-pin",
      style: {
        color: "#ffffff"
      }
    }), "\xA0\xA0Administrador"), /*#__PURE__*/React.createElement("ul", {
      className: "side-menu"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "HomeAdmin.php",
      className: "active"
    }, " ", /*#__PURE__*/React.createElement("i", {
      className: "bx bxs-dashboard icon"
    }), " Home")), /*#__PURE__*/React.createElement("li", {
      className: "divider",
      "data-text": "M\xD3DULOS"
    }, "M\xD3DULOS"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bx bxs-notepad icon"
    }), "Estudiantes ", /*#__PURE__*/React.createElement("i", {
      className: "bx bx-chevron-right icon-right"
    })), /*#__PURE__*/React.createElement("ul", {
      className: "side-dropdown"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "registerStudent.php"
    }, "Registrar Estudiante")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "updateStudent.php"
    }, "Actualizar Estudiante")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "listStudent.php"
    }, "Listar Estudiante")))), /*#__PURE__*/React.createElement("li", {
      className: "divider",
      "data-text": "Docente"
    }, "Docente"), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bx bxs-notepad icon"
    }), "Docente ", /*#__PURE__*/React.createElement("i", {
      className: "bx bx-chevron-right icon-right"
    })), /*#__PURE__*/React.createElement("ul", {
      className: "side-dropdown"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "registerTeacher.php"
    }, "Registrar Docente")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "updateTeacher.php"
    }, "Actualizar Docente")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "listTeacher.php"
    }, "Listar Docente")))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bx bxs-inbox icon"
    }), "Asignatura ", /*#__PURE__*/React.createElement("i", {
      className: "bx bx-chevron-right icon-right"
    })), /*#__PURE__*/React.createElement("ul", {
      className: "side-dropdown"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "registerSubject.php"
    }, "Registrar Asignatura")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "updateSubject.php"
    }, "Actualizar Asignatura")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "listSubject.php"
    }, "Listar Asignatura")))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bx bxs-inbox icon"
    }), "Horario ", /*#__PURE__*/React.createElement("i", {
      className: "bx bx-chevron-right icon-right"
    })), /*#__PURE__*/React.createElement("ul", {
      className: "side-dropdown"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "registerTimeTable.php"
    }, "Registrar Horario")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "updateTimeTable.php"
    }, "Actualizar Horario")), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "viewTimeTable.php"
    }, "Ver Horario")))), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: "#"
    }, /*#__PURE__*/React.createElement("i", {
      className: "bx bxs-widget icon"
    }), "Plan de Estudios ", /*#__PURE__*/React.createElement("i", {
      className: "bx bx-chevron-right icon-right"
    })), /*#__PURE__*/React.createElement("ul", {
      className: "side-dropdown"
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
      href: ""
    }, "Ver Plan de estudios")))))));
  }
}