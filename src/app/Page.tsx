import React from 'react'
import { Box, Typography } from '@mui/material'
import UploaderBar from './components/UploaderBar'
import SentItemComponent from './components/SentItemComponent'
import type { Attachment, SentItem } from './types'

interface PageProps {
	items: SentItem[]
	onSend: (text: string, attachments: Attachment[]) => void
	onDelete: (ids: number[]) => void
	onExport: (ids: number[]) => void
	onUpdate: (id: number, changes: Partial<SentItem>) => void
}
const Page: React.FC<PageProps> = ({
	items,
	onSend,
	onDelete,
	onExport,
	onUpdate,
}) => {
	const selectedItem = items.find((item) => item.selected)

	const handleExport = () => {
		if (selectedItem) {
			onExport([selectedItem.id])
		}
	}

	const handleDelete = () => {
		if (selectedItem) {
			onDelete([selectedItem.id])
		}
	}

	return (
		<Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
			<Box sx={{ bgcolor: 'primary.main', p: 2 }}>
				<Typography variant="h6" color="white">
					Content Uploader
				</Typography>
			</Box>

			<Box sx={{ flex: 1, overflow: 'auto' }}>
				{items.map((item) => (
					<SentItemComponent
						key={item.id}
						item={item}
						onUpdate={onUpdate}
						onDelete={handleDelete}
						onExport={handleExport}
					/>
				))}
				{items.length === 0 && (
					<Typography
						variant="body1"
						color="text.secondary"
						align="center"
						sx={{ mt: 4 }}
					>
						No items yet. Start by sending a message or dropping images!
					</Typography>
				)}
			</Box>
			<UploaderBar onSend={onSend} />
		</Box>
	)
}

export default Page
