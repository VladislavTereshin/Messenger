import React from 'react';
import { Theme } from '@material-ui/core/styles';
import { Paper, Grid, Typography, withStyles, TextField, InputAdornment, List, ListItemText, ListItem, Divider } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import { Tweet } from '../../components/Tweet';
import { SideMenu } from '../../components/SideMenu';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import { AddTweetForm } from '../../components/addTweetForm';
import { useHomeStyles } from './theme';
import { SearchTextField } from '../../components/SerachTextFild';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionsCreators';
import { selectIsTweetsLoading, selectTweets, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';




export const Home: React.FC = (): React.ReactElement => {
    const classes = useHomeStyles();
    const dispatch = useDispatch();
    const tweets = useSelector(selectTweetsItems);
    const isLoading = useSelector(selectIsTweetsLoading);

    React.useEffect(() => {
        dispatch(fetchTweets());
    }, [dispatch])


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
                            <Paper>
                                <AddTweetForm classes={classes} />
                            </Paper>

                            {isLoading ?  <div className={classes.tweetsCentred}><CircularProgress /></div>
                               : tweets.map((tweet) => (
                                    <Tweet
                                        key={tweet._id}
                                        text={tweet.text}
                                        classes={classes}
                                        user={tweet.user}
                                    />
                                ))
                            }
                        </Paper>
                    </Grid>
                    <Grid className={`${classes.someClass} greedSpace`} sm={3} item md={3}>
                        <div className={classes.rightSide}>
                            <SearchTextField
                                variant="outlined"
                                placeholder="Поиск"
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <CommentIcon style={{ fontSize: 20 }} />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            <Paper className={classes.rightSideBlock}>
                                <Paper className={classes.rightSideBlockHeader}>
                                    <b>Актуальный темы</b>
                                </Paper>
                                <List>
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary="Страна"
                                            secondary={
                                                <Typography component="span" variant='body1'>
                                                    Тввитов: 123
                                            </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                </List>

                                <List>
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary="Страна"
                                            secondary={
                                                <Typography component="span" variant='body1'>
                                                    Тввитов: 123
                                            </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                </List>
                                <List>
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary="Страна"
                                            secondary={
                                                <Typography component="span" variant='body1'>
                                                    Тввитов: 123
                                            </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                </List>
                            </Paper>
                            <Paper className={classes.rightSideBlock}>
                                <Paper className={classes.rightSideBlockHeader}>
                                    <b>Кого читать</b>
                                </Paper>
                                <List>
                                    <ListItem className={classes.rightSideBlockItem}>
                                        <ListItemText
                                            primary="Страна"
                                            secondary={
                                                <Typography component="span" variant='body1'>
                                                    Тввитов: 123
                                            </Typography>
                                            }
                                        />
                                    </ListItem>
                                    <Divider component="li" />
                                </List>
                            </Paper>

                        </div>

                    </Grid>
                </Grid>
            </Container>

        </section>
    );
};


