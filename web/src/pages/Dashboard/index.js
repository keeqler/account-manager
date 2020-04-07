import React, { Component } from 'react';

import api from '~/services/api';

import Account from './components/Account';
import AccountDataModal from './components/AccountDataModal';

import {
  Button,
  LoadingButton,
  NoAccountContainer,
  AccountContainer,
  LoadingContainer,
} from './styles';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      showModal: false,
      modalAccountId: null,
      modalIsCreatorType: false,
      accounts: [],
      nextPage: 1,
      lastRequestedPage: 0,
    };
  }

  async componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);

    await this.requestNextPage();
  }

  async componentDidUpdate(prevState) {
    const { loading, nextPage, showModal } = this.state;

    if (prevState.loading !== loading && nextPage === 2) {
      await this.trackScrolling();
    }

    if (prevState.showModal !== showModal) {
      if (showModal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'unset';
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }

  requestNextPage = async () => {
    const { nextPage, lastRequestedPage, accounts, loading } = this.state;

    if (nextPage !== lastRequestedPage) {
      this.setState(state => ({
        ...state,
        lastRequestedPage: nextPage,
      }));

      const { data } = await api.get(`accounts?page=${nextPage}`);

      if (data.length)
        this.setState(state => ({
          ...state,
          accounts: [...accounts, ...data],
          nextPage: nextPage + 1,
        }));
      if (loading) this.setState(state => ({ ...state, loading: false }));
    }
  };

  trackScrolling = async () => {
    // request next page if user scrolled next to the page bottom
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight - 100)
      await this.requestNextPage();
  };

  addAccount = account =>
    this.setState(state => ({
      ...state,
      accounts: [account, ...state.accounts],
    }));

  replaceAccount = account =>
    this.setState(state => ({
      ...state,
      accounts: [
        account,
        ...state.accounts.filter(
          stateAccount => stateAccount.id !== account.id,
        ),
      ],
    }));

  removeAccount = id =>
    this.setState(state => ({
      ...state,
      accounts: state.accounts.filter(account => account.id !== id),
    }));

  showCreatorModal = () =>
    this.setState(state => ({
      ...state,
      showModal: true,
      modalIsCreatorType: true,
    }));

  render() {
    const {
      loading,
      showModal,
      modalAccountId,
      modalIsCreatorType,
      accounts,
    } = this.state;

    if (loading)
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

    return (
      <>
        <AccountDataModal
          id={modalAccountId}
          show={showModal}
          hide={() => this.setState(state => ({ ...state, showModal: false }))}
          addAccount={this.addAccount}
          replaceAccount={this.replaceAccount}
          removeAccount={this.removeAccount}
          isCreator={modalIsCreatorType}
        />
        {!loading && !accounts.length && (
          <NoAccountContainer>
            <h1>There are no accounts</h1>
            <Button text="Add account" onClick={this.showCreatorModal} />
          </NoAccountContainer>
        )}
        {!loading && !!accounts.length && (
          <AccountContainer>
            <Button
              className="button"
              text="Add account"
              onClick={this.showCreatorModal}
            />
            {accounts.map(({ id, service, label, username }) => (
              <Account
                key={id}
                details={{ service, label, username }}
                onClick={() =>
                  this.setState(state => ({
                    ...state,
                    showModal: true,
                    modalAccountId: id,
                    modalIsCreatorType: false,
                  }))
                }
              />
            ))}
          </AccountContainer>
        )}
      </>
    );
  }
}
