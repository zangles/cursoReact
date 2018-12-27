import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './media.css'

class Media extends PureComponent {
  state = {
    author: this.props.author
  }
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     author: props.author,
  //   }
  // }

  render() {
    const styles = {
      container: {
        color: '#44546b',
        cursor: 'pointer',
        width: 260,
        border: '1px solid red'
      }
    }
    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img
            className="Media-image"
            src={this.props.cover}
            alt=""
            idth={260}
            height={160}
          />
          <h3 className="Media-title">{this.props.title}</h3>
          <p className="Media-author">{this.state.author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['video', 'audio']).isRequired,
}

export default Media;