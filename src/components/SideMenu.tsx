import classes from '*.module.css';
import { Button, Hidden, IconButton, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useHomeStyles } from '../pages/Home/theme';
import TwitterIcon from '@material-ui/icons/AccessibleForward';
import SearchIcon from '@material-ui/icons/Search';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ModalBlock from './ModalBlock';
import { AddTweetForm } from './addTweetForm';



interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
};

export const SideMenu: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {

    const [visableAddTweet, setVisableAddTweet] = useState<boolean>(false);

    const handleCloseAddTweet = () => {
        setVisableAddTweet(false);
    };

    const handleClickOpenAddTweet = () => {
        setVisableAddTweet(true);
    };

    return (
        <ul className={classes.sideMenuList}>
            <li className={classes.sideMenuListItem}>
                <IconButton aria-label="delete">
                    <TwitterIcon className={classes.logo} color="primary" />
                </IconButton>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Поиск</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Уведомления</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Сообщения</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Закладики</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Список</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <div>
                    <SearchIcon className={classes.sideMenuListItemIcon} />
                    <Hidden smDown>
                        <Typography className={classes.sideMenuListItemLabel} variant='h6'>Профиль</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideMenuListItem}>
                <Button onClick={handleClickOpenAddTweet}
                    className={classes.sideMenuTweetButton}
                    variant='contained' fullWidth color="primary">
                    <Hidden smDown>Твитнуть </Hidden>
                    <Hidden mdUp>
                        <PostAddIcon />
                    </Hidden>
                </Button>
                <ModalBlock onClose={handleCloseAddTweet}
                    visable={visableAddTweet}>
                    <div style={{ width: 500 }}>
                        <AddTweetForm maxRows={15} classes={classes} />
                    </div>
                </ModalBlock>
            </li>
        </ul>
    )
}
