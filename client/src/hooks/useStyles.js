import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  app: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  card: {
    boxSizing: 'border-box',
    width: '300px',
    padding: '20px',
    marginBottom: '30px',
    boxShadow: '0 1px 6px -2px #000',
    borderRadius: '20px',
  },
  h2: {
    margin: '0',
  },
  p: {
    margin: '0',
  },
});
