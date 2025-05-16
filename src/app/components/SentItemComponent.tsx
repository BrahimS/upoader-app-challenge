import React from 'react'
import { Box, Checkbox, IconButton, Stack, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import DownloadIcon from '@mui/icons-material/Download'
import type { SentItem } from '../types'

interface Props {
	item: SentItem
	onUpdate: (id: number, changes: Partial<SentItem>) => void
	onDelete: () => void
	onExport: () => void
}

const SentItemComponent: React.FC<Props> = ({
	item,
	onUpdate,
	onDelete,
	onExport,
}) => {
	const timestamp = item.timestamp || new Date().toLocaleString()
	// TODO: toggleSelect
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'flex-start',
				gap: 2,
				p: 2,
				borderBottom: 1,
				borderColor: 'divider',
			}}
		>
			{/* Checkbox for selection */}
			<Checkbox
				checked={item.selected}
				onChange={() => onUpdate(item.id, { selected: !item.selected })}
			/>
			<Box sx={{ flex: 1 }}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
					<Typography variant="caption" color="text.secondary">
						{timestamp.toLocaleString()}
					</Typography>
					{/* Delete and Export icons */}
					<Stack direction="row" spacing={1}>
						<IconButton size="small" onClick={onExport}>
							<DownloadIcon fontSize="small" />
						</IconButton>
						<IconButton size="small" onClick={onDelete}>
							<DeleteIcon fontSize="small" />
						</IconButton>
					</Stack>
				</Box>
				{/* Sent text */}
				{item.text && <Typography sx={{ mb: 1 }}>{item.text}</Typography>}
				{/* Sent attachments if any*/}
				{item.attachments.map((att, i) => (
					<Box
						key={i}
						component="img"
						src={att.previewUrl}
						sx={{
							width: 100,
							height: 100,
							objectFit: 'cover',
							borderRadius: 1,
						}}
					/>
				))}
			</Box>
		</Box>
	)
}

export default SentItemComponent
