import React, { useState } from 'react'
import { Box } from '@mui/material'
import UploaderBar from './components/UploaderBar'
import SentItemComponent from './components/SentItem'
import type { Attachment, SentItem } from './types'

const App: React.FC = () => {
	const [items, setItems] = useState<ItemType[]>([]) // store the sent items

	// TODO: handleSend(text, attachments)

	// TODO: handleDelete(ids: number[])

	// TODO: handleExport(ids: number[])
	// - collect payload [{text, attachments: [{name, previewUrl}]}]
	// - create JSON blob and trigger download

	return (
		<Box>
			Render the page here
			{/* TODO: render UploaderBar */}
			{/* TODO: Bulk actions */}
			{/* TODO: map items to their respective components */}
		</Box>
	)
}

export default App
