import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
    marginTop: "64px",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
