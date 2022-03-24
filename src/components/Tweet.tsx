import React from 'react';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepeatIcon from '@material-ui/icons/Repeat';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import ReplyIcon from '@material-ui/icons/Reply';
import classNames from 'classnames';
import { Paper, IconButton, Typography, Avatar} from '@material-ui/core';
import { useHomeStyles } from '../pages/Home/theme';



interface TweetProps {
    text: string;
    classes: ReturnType<typeof useHomeStyles>;
    user: {
        fullname: string;
        username: string;
        avatarUrl: string;
    };

};

export const Tweet: React.FC<TweetProps> = ({ text, user, classes }: TweetProps): React.ReactElement => {

    return (
        <Paper className={classNames(classes.tweet, classes.tweetsHeader)} variant='outlined'>
            <div className={classes.tweetUserItems}>
                <Avatar className={classes.tweetAvatar} alt="User avatar" src={user.avatarUrl} />
                <Typography ><b>{user.fullname}</b>
                    <span className={classes.tweetsUserName}>{user.username}</span>
                    <span className={classNames(classes.tweetsUserName, classes.tweetsTime)}>
                        {Math.floor(Math.random() * 10) + "ч"}
                        </span>
                </Typography>
            </div>
            <Typography className={classes.tweetsText} variant='body1'>
                {text}
            </Typography>
            <div className={classes.tweetsFooter}>
                <div>
                    <IconButton color="primary">
                        <CommentIcon style={{ fontSize: 20 }} />
                        <span style={{ fontSize: 16 }}>1</span>
                    </IconButton>
                </div>
                <div>
                    <IconButton color="primary">
                        <RepeatIcon style={{ fontSize: 20 }} />
                    </IconButton>
                </div>
                <div>
                    <IconButton color="primary">
                        <LikeIcon style={{ fontSize: 20 }} />
                    </IconButton>
                </div>
                <div>
                    <IconButton color="primary">
                        <ReplyIcon style={{ fontSize: 20 }} />
                    </IconButton>
                </div>
            </div>
        </Paper>

    )
}
