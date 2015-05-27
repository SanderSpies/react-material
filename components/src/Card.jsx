import React from 'react';
import StyleSheet from 'react-style';

import Shadow from './Shadow';

const CardStyles = StyleSheet.create({
  normalCardStyle: {
    backgroundColor: 'white',
    borderRadius: 2,
    margin: 8,
    height: 250,
    padding: 16,
    position: 'relative'
  },

  headerStyle: {
    cursor: 'default',
    marginBottom: 35,
    marginTop: 0
  }
});

export default class extends React.Component {
  static displayName = 'Card';
  static propTypes = {
    children: React.PropTypes.node,
    styles: React.PropTypes.object,
    title: React.PropTypes.string
  }

  render() {
    const {
      styles,
      title
    } = this.props;

    return (
      <div styles={ CardStyles.normalCardStyle }>
        <Shadow size={1} />
        { title &&
          <h3 styles={styles.headerStyle}>
            { title }
          </h3>
        }
        { this.props.children }
      </div>
    );
  }

}
