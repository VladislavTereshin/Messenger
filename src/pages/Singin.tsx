import React from 'react';
import { Button, Dialog, DialogContentText, FormControl, FormGroup, makeStyles, Modal, TextField, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/AccessibleForward';
import SearchIcon from '@material-ui/icons/Search';
import ModalBlock from '../components/ModalBlock';

export const useStylesSignIn = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: 'calc(100vh - 84px)',
    },
    blueSide: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1DA1F2',
        flex: '0 0 50%',
        position: 'relative',
        overflow: 'hidden',
    },
    blueSideListInfo: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        zIndex: 2,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
        }
    },
    blueSideInfoItem: {
        marginBottom: 40,
    },
    blueSideIncon: {
        marginRight: 20,
    },
    blueSideBigIncon: {
        position: 'absolute',
        top: 0,
        left: 0,
        color: '#F0A0F0',
        width: '100%',
        height: '100%',
        transform: 'translate(-30%, -20%)',
        zIndex: 1,
    },
    loginSide: {
        flex: '0 0 50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        overflow: 'hidden',
    },
    button__blue: {
        backgroundColor: '#1DA1F2',
        width: '100%',
        marginBottom: 25,
        color: '#FFF',
    },
    button__white: {
        backgroundColor: '#FFFFFF',
        border: '1px solid #1DA1F2',
        width: '100%',
        color: 'rgb(29,161,242)',
        '& :hover': {
            color: '#FFF',
        }

    },
    loginSideTwitterIcon: {
        fontSize: '50px',
    },
    loginSideWrapper: {
        minWidth: 280,
        textAlign: 'center',
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 45,
        marginTop: 10,
    },
    dialogFild: {
        minWidth: 600,
        minHeight: 600,
    },
    registerFild: {
        marginBottom: theme.spacing(4),
    },
}));


export const SignIn: React.FC = (): React.ReactElement => {
    const classes = useStylesSignIn();
    const [visableModal, setVisableModal] = React.useState<'singIn' | 'singOut'>();


    const handleClickOnSingIn = (): void => {
        setVisableModal('singIn');
    };

    const handleClickOpenSingUp = (): void => {
        setVisableModal('singOut');
    };

    const handleCloseModel = (): void => {
        setVisableModal(undefined);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.blueSide}>
                <TwitterIcon color='primary' className={classes.blueSideBigIncon} />
                <ul className={classes.blueSideListInfo} >
                    <li><Typography className={classes.blueSideInfoItem} variant='h6'><SearchIcon className={classes.blueSideIncon} />Read Read Read Read</Typography></li>
                    <li><Typography className={classes.blueSideInfoItem} variant='h6'><SearchIcon className={classes.blueSideIncon} />Read</Typography></li>
                    <li><Typography className={classes.blueSideInfoItem} variant='h6'><SearchIcon className={classes.blueSideIncon} />Read</Typography></li>
                </ul>

            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
                    <Typography className={classes.loginSideTitle} variant='h4' >Read</Typography>
                    <Typography>Read</Typography>
                    <Button color='primary' onClick={handleClickOpenSingUp} variant="contained" className={classes.button__blue}>Регистрация</Button>
                    <Button variant="contained" onClick={handleClickOnSingIn} color='primary' className={classes.button__white}>Вход</Button>
                    <ModalBlock classes={classes} visable={visableModal === 'singOut'} onClose={handleCloseModel} title='Создайте учетную запись'>
                        <FormControl>
                            <FormGroup>
                                <TextField
                                    className={classes.registerFild}
                                    autoFocus
                                    margin='dense'
                                    id='email'
                                    label='Email'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type='email'
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerFild}
                                    autoFocus
                                    margin='dense'
                                    id='name'
                                    label='name'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type='name'
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerFild}
                                    autoFocus
                                    margin='dense'
                                    id='password'
                                    label='Пароль'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type='password'
                                    fullWidth
                                />
                                <Button onClick={handleCloseModel} color='primary' variant="contained" fullWidth >Enter</Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                    <ModalBlock classes={classes} visable={visableModal === 'singIn'} onClose={handleCloseModel} title='Вход'>
                        <FormControl>
                            <FormGroup>
                                <TextField
                                    className={classes.registerFild}
                                    autoFocus
                                    margin='dense'
                                    id='name'
                                    label='name'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type='name'
                                    fullWidth
                                />
                                <TextField
                                    className={classes.registerFild}
                                    autoFocus
                                    margin='dense'
                                    id='password'
                                    label='Пароль'
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    type='password'
                                    fullWidth
                                />
                                <Button onClick={handleCloseModel} color='primary' variant="contained" fullWidth >Enter</Button>
                            </FormGroup>
                        </FormControl>
                    </ModalBlock>
                </div>
                
            </section>
        </div>

    );
}
