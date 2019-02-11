import React from 'react';

class Selector extends React.Component {
  state = {
    value: ''
  };

  onChange = event => {
    const { value } = event.target;
    this.setState({ value });
    const { onChange } = this.props;
    if (onChange) {
      onChange(value);
    }
  };

  render() {
    const { value } = this.state;
    const { name, options, render } = this.props;
    return (
      <select value={value} onChange={this.onChange} name={name}>
        {options.map(render)}
      </select>
    );
  }
}

export default Selector;
