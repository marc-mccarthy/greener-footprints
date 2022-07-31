import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Grid, Input, Stack, Typography } from '@mui/material';
import './AvatarUpload.css';

function AvatarUpload(props) {

    const dispatch = useDispatch();
    const [avatar, setAvatar] = useState(null);

    const uploadImage = (event) => {
        setAvatar(event.target.files[0]);
		let newAvatar = new FormData();
		newAvatar.append('file', event.target.files[0]);
		console.log('this my avatar', newAvatar);
		dispatch({ type: 'NEW_AVATAR_SAGA', payload: newAvatar });
	};


	return (
		<Grid item xs={12}>
            <Button sx={{height: 100, width: 100}}variant='outlined'>
                <label>
                    <input onChange={uploadImage} type='file' accept='image/*' />
                    Avatar Upload
                </label>
            </Button>
		</Grid>
	);
}

export default AvatarUpload;
