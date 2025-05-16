import React from 'react'
import { Box } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DownloadIcon from '@mui/icons-material/Download'
import ImageIcon from '@mui/icons-material/Image'
import type { SentItem } from '../types'

interface Props {
	item: ItemType
	onUpdate: (id: number, changes: Partial<ItemType>) => void
	onDelete: () => void
	onExport: () => void
}

const SentItemComponent: React.FC<Props> = ({
	item,
	onUpdate,
	onDelete,
	onExport,
}) => {
	// TODO: toggleSelect

	return (
		<Box>
			{/* Checkbox for selection */}
			{/* Delete and Export icons */}
			{/* Sent text */}
			{/* Sent attachments if any*/}
		</Box>
	)
}

export default SentItemComponent
