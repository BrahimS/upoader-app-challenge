import React, { useState } from 'react'
import { Box, IconButton, TextField } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendIcon from '@mui/icons-material/Send'
import type { Attachment } from '../types'

interface Props {
	onSend: (text: string, attachments: Attachment[]) => void
}

const UploaderBar: React.FC<Props> = ({ onSend }) => {
	const [text, setText] = useState('')
	const [attachments, setAttachments] = useState<Attachment[]>([])
	const [dragOver, setDragOver] = useState(false)

	// TODO: handleFiles(files: File[])
	// - create previewUrl for images

	// TODO: [optional] drag & drop handlers on TextField area

	// TODO: onFileChange -> handleFiles + reset input

	// TODO: removeAttachment(index)

	// TODO: onSend -> invoke onSend(text, attachments), reset text & attachments

	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				gap: 1,
				p: 2,
				bgcolor: 'background.paper',
			}}
		>
			{/* Bar with TextField, button to trigger file selection, Send button */}
			<TextField
				variant="outlined"
				placeholder="Type your message here..."
				value={text}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					setText(e.target.value)
				}
				sx={{ flexGrow: 1 }}
			/>
			{/* Optional: Render drag-overlay when dragOver is true */}
			{/* Below: render thumbnails with delete icons */}
			<input
				type="file"
				accept="image/*"
				multiple
				style={{ display: 'none' }}
			/>
			<IconButton size="small" onClick={() => {}}>
				<AttachFileIcon />
			</IconButton>
			<IconButton
				size="small"
				color="primary"
				disabled={!text.trim() && attachments.length === 0}
				onClick={() => onSend(text, attachments)}
			>
				<SendIcon />
			</IconButton>
		</Box>
	)
}

export default UploaderBar
