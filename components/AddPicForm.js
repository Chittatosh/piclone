import React from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';

import { LoadingAlert, ErrorAlert } from './Alerts';

const propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  mutateFunc: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string.isRequired,
  picUrl: PropTypes.string.isRequired,
};

class AddPicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { picUrl: '', picTitle: '' };
    this.handleChange = ({ target }) =>
      this.setState({ [target.name]: target.value });
    this.handleSubmit = event => {
      event.preventDefault();
      this.props.mutateFunc({ variables: this.state });
    };
  }
  componentDidUpdate() {
    const { picUrl, history } = this.props;
    if (picUrl) history.push('/');
  }
  render() {
    const { loading, errorMessage } = this.props;
    const { picUrl, picTitle } = this.state;
    const disableSubmit = !picUrl || !picTitle;
    return (
      <div className="card">
        <div className="card-body">
          {loading && <LoadingAlert text="Saving your picture..." />}
          {errorMessage && <ErrorAlert text={errorMessage} />}
          {this.props.picUrl && (
            <p className="text-light bg-success text-center mt-3">
              Successfully Saved!
            </p>
          )}
          <form onSubmit={this.handleSubmit}>
            <h2 className="mb-3">
              Add a Picture <i className="far fa-image" />
            </h2>
            <div className="form-group">
              <label htmlFor="urlInputId">
                Picture Url
                <input
                  name="picUrl"
                  type="text"
                  className="form-control"
                  id="urlInputId"
                  aria-describedby="urlInputHelp"
                  placeholder="Enter picture's url"
                  value={picUrl}
                  onChange={this.handleChange}
                  size="200"
                  required
                />
              </label>
            </div>
            <div className="form-group">
              <label htmlFor="titleInputId">
                Picture Title
                <input
                  name="picTitle"
                  type="text"
                  className="form-control"
                  id="titleInputId"
                  placeholder="Enter picture's title"
                  value={picTitle}
                  onChange={this.handleChange}
                  size="200"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={disableSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

AddPicForm.propTypes = propTypes;

export default withRouter(AddPicForm);
