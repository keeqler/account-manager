import React, { Component } from 'react';

import Account from './components/Account';
import api from '~/services/api';

import {
  Button,
  LoadingButton,
  NoAccountContainer,
  AccountContainer,
  LoadingContainer,
} from './styles';

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      accounts: [],
      loading: true,
      nextPage: 1,
      lastRequestedPage: 0,
    };
  }

  async componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);

    await this.requestNextPage();
  }

  async componentDidUpdate(prevState) {
    const { loading, nextPage } = this.state;

    if (prevState.loading !== loading && nextPage === 2) {
      await this.trackScrolling();
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  requestNextPage = async () => {
    const { nextPage, lastRequestedPage, accounts, loading } = this.state;

    if (nextPage !== lastRequestedPage) {
      this.setState(prevState => ({
        ...prevState,
        lastRequestedPage: nextPage,
      }));

      const { data } = await api.get(`accounts?page=${nextPage}`);

      if (data.length) {
        this.setState(prevState => ({
          ...prevState,
          accounts: [...accounts, ...data],
          nextPage: nextPage + 1,
        }));

        if (loading)
          this.setState(prevState => ({ ...prevState, loading: false }));
      }
    }
  };

  trackScrolling = async () => {
    // request next page if user scrolled next to the page bottom
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100)
      await this.requestNextPage();
  };

  render() {
    const { loading, accounts } = this.state;

    if (!loading && !accounts.length)
      return (
        <NoAccountContainer>
          <h1>There are no accounts</h1>
          <Button text="Add account" />
        </NoAccountContainer>
      );

    if (!loading && accounts.length) {
      return (
        <AccountContainer>
          <Button className="button" text="Add account" />
          {accounts.map(({ id, service, label, username }) => (
            <Account key={id} details={{ service, label, username }} />
          ))}
        </AccountContainer>
      );
    }

    return (
      <LoadingContainer>
        <LoadingButton className="button" text="" />
        <Account loading />
        <Account loading />
        <Account loading />
        <Account loading />
        <Account loading />
        <Account loading />
      </LoadingContainer>
    );
  }
}
