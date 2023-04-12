import classes from "./pageContainer.module.css";

const PageContainer = (props) => {
	return <div className={classes.main}>{props.children}</div>;
};

export default PageContainer;
