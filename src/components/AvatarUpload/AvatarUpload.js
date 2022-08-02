import { useDispatch } from 'react-redux';
import { Avatar, Button, Grid } from '@mui/material';

function AvatarUpload({ user }) {
	const dispatch = useDispatch();

	const uploadImage = event => {
		let newAvatar = new FormData();
		newAvatar.append('file', event.target.files[0]);
		console.log('this my avatar', newAvatar);
		dispatch({ type: 'NEW_AVATAR_SAGA', payload: newAvatar });
	};

	return (
		<Grid container spacing={3}>
			<Grid m={1} mb={3} item xs={12}>
                <Avatar
                    alt={user.name}
                    src={user.avatar}
                    sx={{ width: 500, height: 500 }}
                />
			</Grid>
			<Grid item xs={12}>
				<Button sx={{ width: 180 }} size='large' variant='contained'>
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
