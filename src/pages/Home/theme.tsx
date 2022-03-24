import { makeStyles, Theme } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const useHomeStyles = makeStyles((theme: Theme) => ({

    someClass: {
        "&.greedSpace": {
            paddingBottom: 0,
        },
    },
    wpapper: {
        height: '100%',
    },
    logo: {
        fontSize: 36,
        margin: '15px 0',
    },
    sideMenuList: {
        position: 'sticky',
        top: 0,
        listStyle: 'none',
        padding: 0,
        margin: 0,
        maxWidth: 230,

    },
    sideMenuListItem: {
        cursor: 'pointer',
        '&:hover': {
            '& div': {
                backgroundColor: 'rgba(29,161, 242,0.1)',
                '& h6': {
                    color: theme.palette.primary.main,
                },
                '& svg path': {
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
        marginRight: 20,
    },
    tweetsWrapper: {
        borderRadius: 0,
        height: '100%',
        borderTop: '0',
        borderBottom: '0',
    },
    tweetsHeader: {
        borderLeft: 0,
        borderRight: 0,
        padding: '20px 15px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid rgba(0, 0, 0, 0.12)',

        '& h6': {
            fontWeight: 700,
        }
    },
    tweetsFooter: {
        display: 'flex',
        position: 'relative',
        justifyContent: 'space-between',
        maxWidth: 570,
        width: '100%',
        marginLeft: 60,

    },
    tweetsFooterMain: {
        justifyContent: 'end',
    },
    tweetsUserName: {
        color: grey[500],
        marginLeft: 20,
    },
    tweetsTime: {
        marginLeft: 10,
    },
    tweetsText: {
        marginBottom: 10,
        marginLeft: 60,
    },
    tweetUserItems: {
        display: 'flex',
        alignItems: 'center',
    },
    tweetsCentred: {
        textAlign: 'center',
        marginTop: 50,
    },
    sideMenuTweetButton: {
        padding: theme.spacing(3),
        marginTop: 30,
    },
    rightSide: {
        paddingTop: 20,
        position: 'sticky',
        top: 0,
    },
    rightSideBlock: {
        backgroundColor: '#F5F8FA',
        borderRadius: 15,
        marginTop: 20,
        '& .MuiList-root': {
            paddingTop: 0,
        },
    },
    rightSideBlockHeader: {
        borderTop: 0,
        borderLeft: 0,
        borderRight: 0,
        backgroundColor: 'transparent',
        padding: '13px 18px',
        '& b': {
            fontSize: 20,
            fontWeight: 800,
        },
    },
    rightSideBlockItem: {
        cursor: 'pointer',
        '& .MuiTypography-body1': {
            fontWeight: 700,
        },
        '& .MuiListItemAvatar-root': {
            minWidth: 500,
        },
        '& .MuiListItemText-root': {
            minWidth: 50,
        },
        '&:hover': {
            backgroundColor: '#edf3f6',
        },
    },
    addForm: {
        padding: 20,
    },
    addFormBody: {
        display: 'flex',
        width: '100%',
    },
    addFormBottom: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addFormBottomItem: {
        '& span': {
            marginRight: 20,
        }
    },
    addFormBottomActions: {
        MarginTop: 10,
        paddingLeft: 70,
    },
    addFormTextAria: {
        width: '100%',
        minHeight: '60px !important',
        border: '1px solid rgba(0,0,1,0.1)',
        borderRadius: 5,
        fontSize: 20,
        marginBottom: 20,
        outline: 'none',
        fontFamily: 'inherit',
        resize: 'none',
    },
    addFormBottomLine: {
        height: 12,
        backgroundColor: '#E6ECF0',

    },
    addFormBottomRight: {
        display: 'flex',
        alignItems: 'center',
    },
    
}));
