import React from "react";
import myContext from "../../../context/account/myContext";
import postContext from "../../../context/post/postContext";
import PostItself from "../../social/post/PostItself";
import graphqlFetch from "../../../functions/graphqlFetch";
import gqlGetPostsQuery from "../../../functions/gqlGetPostsQuery";

const SinglePostContainer = (props) => {
	const contextPost = React.useContext(postContext);
	const context = React.useContext(myContext);
	//eslint-disable-next-line
	// React.useEffect(() => contextPost.resetPosts(), []);
	React.useEffect(() => {
		getPosts(
			gqlGetPostsQuery("SINGLE", context.accountState.user, props.postID)
		);
		//eslint-disable-next-line
	}, []);

	const getPosts = (query) => {
		graphqlFetch(query, (res) => {
			contextPost.setPosts(res.getPosts);
		});
	};

	return (
		<React.Fragment>
			{contextPost.state.posts &&
				contextPost.state.posts.map((item, index) => (
					<PostItself
						key={item._id}
						_id={item._id}
						index={index}
						userName={item.userName}
						textContent={item.textContent}
						timestamp={item.timestamp}
						isOnline={item.isOnline}
						edited={item.edited}
						imgsmall={item.imgsmall}
					/>
				))}
		</React.Fragment>
	);
};

export default SinglePostContainer;
