import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import UploaderBar from './components/UploaderBar'
import SentItemComponent from './components/SentItem'
import type { Attachment, SentItem } from './types'

const App: React.FC = () => {
	const [items, setItems] = useState<ItemType[]>([]) // store the sent items

	// TODO: handleSend(text, attachments)
	const handleSend = (text: string, attachments: Attachment[]) => {
		console.log('Sending:', text, attachments)
	}

	// TODO: handleDelete(ids: number[])

	// TODO: handleExport(ids: number[])
	// - collect payload [{text, attachments: [{name, previewUrl}]}]
	// - create JSON blob and trigger download

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
			<Box sx={{ bgcolor: 'primary.main', p: 2 }}>
				<Typography variant="h3" color="white">
					Content Uploader
				</Typography>
			</Box>
			Render the page here
			{/* TODO: render UploaderBar */}
			<Box sx={{ borderTop: 1, borderColor: 'divider' }}>
				<UploaderBar onSend={handleSend} />
			</Box>
			{/* TODO: Bulk actions */}
			{/* TODO: map items to their respective components */}
		</Box>
	)
}

export default App
