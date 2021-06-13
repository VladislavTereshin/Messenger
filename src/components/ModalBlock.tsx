import React from 'react';
import { Button, Dialog, DialogContent, DialogContentText, FormControl, FormGroup, makeStyles, TextField, Typography } from '@material-ui/core';
import { useStylesSignIn } from '../pages/Singin';
import CloseIcon from '@material-ui/icons/Close';
import { grey } from '@material-ui/core/colors';


interface ModalBlockProps {
    title?: string;
    children: React.ReactNode;
    classes?: ReturnType<typeof useStylesSignIn>;
    visable?: boolean;
    onClose: () => void;
};

export const ModalBlock: React.FC<ModalBlockProps> = ({ title, classes, children, onClose, visable = false }: ModalBlockProps): React.ReactElement | null => {
    if(!visable){
        return null;
    }
    
    
    return (
        <Dialog maxWidth="md" className={classes?.dialogFild} open={visable} onClose={onClose}>
            <CloseIcon style={{cursor: "pointer"}} onClick={onClose} color='primary' />
            <div style={{width: '100%', height: 3, backgroundColor: grey[500], marginTop: 10}}></div>
            <DialogContentText  variant='h6'>
                {title}
            </DialogContentText>
            <DialogContent>
                {children}
            </DialogContent>
        </Dialog>
    )
}

export default ModalBlock;