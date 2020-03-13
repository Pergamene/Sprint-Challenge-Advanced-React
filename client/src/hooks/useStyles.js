import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  app: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  appDM: {
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: '#666',
  },
  card: {
    boxSizing: 'border-box',
    width: '300px',
    padding: '20px',
    marginBottom: '30px',
    boxShadow: '0 1px 6px -2px #000',
    borderRadius: '20px',
  },
  cardDM: {
    boxSizing: 'border-box',
    width: '300px',
    padding: '20px',
    marginBottom: '30px',
    boxShadow: '0 1px 6px -2px #000',
    borderRadius: '20px',
    backgroundColor: '#333',
  },
  h2: {
    margin: '0',
  },
  h2DM: {
    margin: '0',
    color: '#eee',
  },
  p: {
    margin: '0',
  },
  pDM: {
    margin: '0',
    color: '#eee',
  },
  darkModeToggle: {
    background: '#fffff7',
    borderRadius: '50px',
    border: '1px solid black',
    height: '20px',
    position: 'relative',
    width: '40px',
    margin: '30px 30px 0 0',
  },
  darkModeToggled: {
    background: '#666',
    borderRadius: '50px',
    border: '1px solid black',
    height: '20px',
    position: 'relative',
    width: '40px',
    margin: '30px 30px 0 0',
  },
  toggle: {
    background: '#fff59d',
    borderRadius: '50px',
    height: '18px',
    left: '0',
    position: 'absolute',
    transition: '0.2s',
    width: '20px',
  },
  toggled: {
    background: '#333',
    borderRadius: '50px',
    height: '18px',
    left: '18px',
    position: 'absolute',
    transition: '0.2s',
    width: '20px',
  },
});
