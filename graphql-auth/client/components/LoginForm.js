import React, { Component } from 'react'
import { graphql, compose } from 'react-apollo'
import { hashHistory } from 'react-router'
import AuthForm from './AuthForm'
import mutation from '../mutations/Login'
import query from '../queries/CurrentUser'

class LoginForm extends Component {
  state = { errors: [] }

  componentWillUpdate(nextProps) {
    if (!this.props.data.user && nextProps.data.user) {
      hashHistory.push('/dashboard')
    }
  }

  onSubmit({ email, password }) {
    this.props.mutate({
      variables: { email, password },
      refetchQueries: [{ query }]
    }).catch(err => {
      const errors = err.graphQLErrors.map(error => error.message)
      this.setState({ errors })
    })
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    )
  }
}

export default compose(
  graphql(mutation),
  graphql(query)
)(LoginForm)
