class Login extends React.Component {
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
    return /*#__PURE__*/React.createElement("div", null);
  }
}