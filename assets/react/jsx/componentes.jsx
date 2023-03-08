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
  
    componentDidMount() {
      
    }
    render() {
      
      return (
        <div>
          	<section id="sidebar">
  <a href="HomeAdmin.php" className="brand">
    &nbsp;&nbsp;&nbsp;
    <i className="bx bxs-user-pin" style={{ color: "#ffffff" }} />
    &nbsp;&nbsp;Administrador
  </a>
  <ul className="side-menu">
    <li>
      <a href="HomeAdmin.php" className="active">
        {" "}
        <i className="bx bxs-dashboard icon" /> Home
      </a>
    </li>
    <li className="divider" data-text="MÓDULOS">
      MÓDULOS
    </li>
    <li>
      <a href="#">
        <i className="bx bxs-notepad icon" />
        Estudiantes <i className="bx bx-chevron-right icon-right" />
      </a>
      <ul className="side-dropdown">
        <li>
          <a href="registerStudent.php">Registrar Estudiante</a>
        </li>
        <li>
          <a href="updateStudent.php">Actualizar Estudiante</a>
        </li>
        <li>
          <a href="listStudent.php">Listar Estudiante</a>
        </li>
      </ul>
    </li>
    <li className="divider" data-text="Docente">
      Docente
    </li>
    <li>
      <a href="#">
        <i className="bx bxs-notepad icon" />
        Docente <i className="bx bx-chevron-right icon-right" />
      </a>
      <ul className="side-dropdown">
        <li>
          <a href="registerTeacher.php">Registrar Docente</a>
        </li>
        <li>
          <a href="updateTeacher.php">Actualizar Docente</a>
        </li>
        <li>
          <a href="listTeacher.php">Listar Docente</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">
        <i className="bx bxs-inbox icon" />
        Asignatura <i className="bx bx-chevron-right icon-right" />
      </a>
      <ul className="side-dropdown">
        <li>
          <a href="registerSubject.php">Registrar Asignatura</a>
        </li>
        <li>
          <a href="updateSubject.php">Actualizar Asignatura</a>
        </li>
        <li>
          <a href="listSubject.php">Listar Asignatura</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">
        <i className="bx bxs-inbox icon" />
        Horario <i className="bx bx-chevron-right icon-right" />
      </a>
      <ul className="side-dropdown">
        <li>
          <a href="registerTimeTable.php">Registrar Horario</a>
        </li>
        <li>
          <a href="updateTimeTable.php">Actualizar Horario</a>
        </li>
        <li>
          <a href="viewTimeTable.php">Ver Horario</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="#">
        <i className="bx bxs-widget icon" />
        Plan de Estudios <i className="bx bx-chevron-right icon-right" />
      </a>
      <ul className="side-dropdown">
        <li>
          <a href="">Ver Plan de estudios</a>
        </li>
      </ul>
    </li>
  </ul>
</section>

        </div>
      );
    }
  }