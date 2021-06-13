import React from 'react';


import { Avatar, TextareaAutosize, IconButton, Button } from '@material-ui/core';
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { useHomeStyles } from '../pages/Home/theme';

interface AddTweetFormProps {
    classes: ReturnType<typeof useHomeStyles>;
    maxRows?: number;
};

export const AddTweetForm: React.FC<AddTweetFormProps> = ({classes, maxRows}:AddTweetFormProps): React.ReactElement => {

    const [text, setText] = React.useState<string>('');
    const textLimitPersent = (text.length / 280 * 100).toFixed(1);
    const textLimitSymbol = text.length;

    const handelCanngeTextAria = (e: React.FormEvent<HTMLTextAreaElement>) => {
        if(e.currentTarget && e.currentTarget.value.length <= 280) {
            setText(e.currentTarget.value);
        }
    };

    const handelClickAddTweet = (): void => {
        setText('');
    }


    return (
        <div className={classes.addForm}>
            <div className={classes.addFormBody}>
                <Avatar
                    className={classes.tweetAvatar}
                    alt="User name"
                    src="http://cdn.onlinewebfonts.com/svg/img_121964.png"
                />
                <TextareaAutosize
                    className={classes.addFormTextAria}
                    onChange={handelCanngeTextAria}
                    placeholder='текстовое поле'
                    value={text}
                    rowsMax={maxRows}
                />
            </div>
            <div className={classes.addFormBottom}>
                <div className={classNames(classes.tweetsFooter, classes.tweetsFooterMain)}>
                    <IconButton color="primary">
                        <CommentIcon style={{ fontSize: 20 }} />
                    </IconButton>
                    <IconButton color="primary">
                        <CommentIcon style={{ fontSize: 20 }} />
                    </IconButton>
                </div>
                {text &&
                <div className={classes.addFormBottomItem}>
                    <span>{textLimitSymbol}</span>
                    <span>{textLimitPersent}%</span>
                </div>
                }
                
                <div className={classes.addFormBottomRight}>
                    <Button onClick={handelClickAddTweet} disabled={Number(textLimitPersent)  === 100} color="primary" variant='contained'>
                        Твитнуть
                    </Button>
                </div>
            </div>
        </div>
    );
}
