import React from 'react';
import { ThemeProvider, makeStyles } from '@material-ui/styles';
import { Container } from '@material-ui/core';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graphql';
import theme from './theme';
import UsersList from './components/UsersList';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '30px 0',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Container maxWidth={false} className={classes.root}>
          <UsersList />
        </Container>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
