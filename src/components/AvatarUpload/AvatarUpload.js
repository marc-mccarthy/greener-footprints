import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Box, Button, Grid, Input, Stack, Typography } from '@mui/material';
import './AvatarUpload.css';

function AvatarUpload({ user }) {
	const dispatch = useDispatch();
	const [avatar, setAvatar] = useState(null);

	const uploadImage = event => {
		setAvatar(event.target.files[0]);
		let newAvatar = new FormData();
		newAvatar.append('file', event.target.files[0]);
		console.log('this my avatar', newAvatar);
		dispatch({ type: 'NEW_AVATAR_SAGA', payload: newAvatar });
	};

	let initial = user.username.charAt(0).toUpperCase();

	return (
		<Grid container spacing={3}>
			<Grid item xs={12}>
                <Avatar
                    alt={user.name}
                    src={user.avatar}
                    sx={{ width: 250, height: 250 }}
                />
			</Grid>
			<Grid item xs={12}>
				<Button sx={{ width: 130 }} size='small' variant='contained'>
					<label>
						<input
							onChange={uploadImage}
							type='file'
							accept='image/*'
						/>
						Change Avatar
					</label>
				</Button>
			</Grid>
		</Grid>
	);
}

export default AvatarUpload;
