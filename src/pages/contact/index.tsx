import * as React from "react";
import { Component, ChangeEvent, FormEvent } from "react";
import Layout from "../../components/Layout";
import { graphql } from "gatsby";

export default class ContactPage extends Component<any, any> {
  state = {
    email: undefined,
    name: undefined,
    message: undefined
  };
  render() {
    const { data } = this.props.data.prismicContactpage;
    const {
      page_title,
      email_form_title,
      email_form_placeholder,
      name_form_title,
      name_form_placeholder,
      message_form_title,
      message_form_placeholder
    } = data;
    return (
      <Layout>
        <div className="contact-page">
          <div className="content-wrapper">
            <h1 className="page-title">{page_title.text}</h1>
            <form
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="form-wrapper"
            >
              <label className="input-section">
                <span className="input-title">{email_form_title}</span>
                <input
                  type="email"
                  name="email"
                  placeholder={email_form_placeholder}
                  value={this.state.email}
                  onChange={this.handleFormChange}
                  className="input-field"
                />
              </label>
              <label className="input-section">
                <span className="input-title">{name_form_title}</span>
                <input
                  type="text"
                  name="name"
                  placeholder={name_form_placeholder}
                  className="input-field"
                />
              </label>
              <label className="input-section">
                <span className="input-title">{message_form_title}</span>
                <textarea
                  name="message"
                  placeholder={message_form_placeholder}
                  className="message-field"
                />
              </label>
              <input type="submit" value="Send" className="submit-button" />
            </form>
          </div>
        </div>
      </Layout>
    );
  }

  handleFormChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name == "email")
      this.setState({
        email: event.target.value
      });
    else if (event.target.name == "name")
      this.setState({
        name: event.target.value
      });
    else if (event.target.name == "message")
      this.setState({
        message: event.target.value
      });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
}

export const pageQuery = graphql`
  query {
    prismicContactpage {
      data {
        page_title {
          text
        }
        email_form_title
        email_form_placeholder
        name_form_title
        name_form_placeholder
        message_form_title
        message_form_placeholder
      }
    }
  }
`;
