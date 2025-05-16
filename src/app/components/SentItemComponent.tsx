import React from 'react'
import { Box, Checkbox, IconButton, Typography, Stack } from '@mui/material'
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
			<Checkbox
				checked={item.selected}
				onChange={(e) => onUpdate(item.id, { selected: e.target.checked })}
			/>
			<Box sx={{ flex: 1 }}>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
					<Typography variant="caption" color="text.secondary">
						{item.timestamp}
					</Typography>
					<Stack direction="row" spacing={1}>
						<IconButton size="small" onClick={onExport}>
							<DownloadIcon fontSize="small" />
						</IconButton>
						<IconButton size="small" onClick={onDelete}>
							<DeleteIcon fontSize="small" />
						</IconButton>
					</Stack>
				</Box>
				{item.text && <Typography sx={{ mb: 1 }}>{item.text}</Typography>}
				<Stack direction="row" spacing={1} flexWrap="wrap">
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
				</Stack>
			</Box>
		</Box>
	)
}
export default SentItemComponent
