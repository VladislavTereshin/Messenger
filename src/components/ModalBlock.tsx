import React from 'react';
import { Button, Dialog, DialogContent, DialogContentText, FormControl, FormGroup, makeStyles, TextField, Typography } from '@material-ui/core';
import { useStylesSignIn } from '../pages/Singin';
import TwitterIcon from '@material-ui/icons/AccessibleForward';


interface ModalBlockProps {
    title: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visable?: boolean;
    onClose: () => void;
};

export const ModalBlock: React.FC<ModalBlockProps> = ({ title, classes, children, onClose, visable = false }: ModalBlockProps): React.ReactElement | null => {
    if(!visable){
        return null;
    }
    
   console.log(classes?.registerFild);
   
    
    
    
    return (
        <Dialog className={classes?.dialogFild} open={visable} onClose={onClose}>
            <TwitterIcon onClick={onClose} color='primary' />
            <DialogContentText  variant='h6'>
                {title}
            </DialogContentText>
            <DialogContent>
                {children}
            </DialogContent>
            <Button onClick={onClose} color='primary' variant="contained" fullWidth >Enter</Button>
        </Dialog>
    )
}

export default ModalBlock;