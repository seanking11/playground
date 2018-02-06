import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import AuthForm from './AuthForm'
import mutation from '../mutations/Signup'
import query from '../queries/CurrentUser'

class SignupForm extends Component {
  state = { errors: [] }

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
        <h3>Signup</h3>
        <AuthForm
          onSubmit={this.onSubmit.bind(this)}
          errors={this.state.errors}
        />
      </div>
    )
  }
}

export default graphql(mutation)(SignupForm)
