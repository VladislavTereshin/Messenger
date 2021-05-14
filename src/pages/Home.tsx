import React from 'react';
import { createStyles, Theme } from '@material-ui/core/styles';
import { Paper, Grid,  Typography, makeStyles, withStyles, InputBase } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import grey from '@material-ui/core/colors/grey';
import { Tweet } from '../components/Tweet';
import { SideMenu } from '../components/SideMenu';


const SearchTextField = withStyles(() =>
    createStyles({
        input: {
            borderRadius: 30,
            backgroundColor: '#E6ECF0',
            height: 35,
            padding: '0px 20px 0px 20px',

        },
    }),
)(InputBase);

export const useHomeStyles = makeStyles((theme: Theme) => ({

    someClass: {
        "&.greedSpace": {
            paddingBottom: 0,
        },
    },
    wpapper: {
        height: '100vh',
    },
    logo: {
        fontSize: 36,
        margin: '15px 0',
    },
    sideMenuList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 230,
    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29,161, 242,0.1)',
                '& h6':{
                    color: theme.palette.primary.main,
                },
                '& svg path':{
                    fill: theme.palette.primary.main,
                },
            },
        },
        '& div': {
            display: 'inline-flex',
            alignItems: 'center',
            position: 'relative',
            left: -10,
            padding: '0 25px 0 20px',
            borderRadius: 30,
            height: 55,
            marginBotton: 10,
            transition: 'background-color 0.15s ease-in-out',
        },
    },
    sideMenuListItemLabel: {
        fontWeight: 700,
        fontSize: 20,
        marginLeft: 15,
    },
    sideMenuListItemIcon: {
        fontSize: 28,
    },
    tweet: {
        paddingTop: 15,
        paddingLeft: 15,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgb(245,248,250)',
        }
    },
    tweetAvatar: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100vh',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetsHeader: {
        borderLeft: 0,
        borderRight: 0,
        padding: '20px 15px',
        '& h6': {
            fontWeight: 700,
        }
    },
    tweetsFooter: {
        display: 'flex',
        position: 'relative',

        justifyContent: 'space-between',
        maxWidth: 400,
    },
    tweetsUserName: {
        color: grey[500],
    },
    tweetsText: {
        marginBottom: 10,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3),
        marginTop: 30,
    },

}));

export const Home: React.FC = (): React.ReactElement => {
    const classes = useHomeStyles();
    return (
        <section>
            <Container className={classes.wpapper} maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid className={`${classes.someClass} greedSpace`} item xs={3}>
                        <SideMenu classes={classes} />
                    </Grid>
                    <Grid className={`${classes.someClass} greedSpace`} item xs={6}>
                        <Paper className={classes.tweetsWrapper} variant='outlined'>
                            <Paper className={classes.tweetsHeader} variant='outlined'>
                                <Typography variant='h6'>Главная</Typography>
                            </Paper>
                            {
                                [...new Array(20).fill(<Tweet
                                    text='fsddddddddd fsdf sdddddddddddddd dsfffffffff fsddddddddddd fffffffffffew'
                                    classes={classes}
                                    user={{
                                        fullname: 'victor ivanin',
                                        username: '@Victor',
                                        avatarUrl: 'http://cdn.onlinewebfonts.com/svg/img_121964.png',
                                    }}
                                />
                                ),
                                ]}
                        </Paper>
                    </Grid>
                    <Grid className={`${classes.someClass} greedSpace`} item xs={3}>
                        <SearchTextField
                            placeholder="Поиск"
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </Container>

        </section>
    );
};


