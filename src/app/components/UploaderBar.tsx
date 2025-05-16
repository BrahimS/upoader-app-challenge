import React, { useState, useRef } from 'react'
import { Box, TextField, IconButton } from '@mui/material'
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
	const fileInputRef = useRef<HTMLInputElement>(null)

	const handleDragOver = (e: React.DragEvent) => {
		e.preventDefault()
		setDragOver(true)
	}

	const handleDragLeave = (e: React.DragEvent) => {
		e.preventDefault()
		setDragOver(false)
	}

	const handleDrop = (e: React.DragEvent) => {
		e.preventDefault()
		setDragOver(false)

		const files = Array.from(e.dataTransfer.files)
		const newAttachments: Attachment[] = files.map((file) => ({
			file,
			previewUrl: URL.createObjectURL(file),
		}))
		setAttachments((prev) => [...prev, ...newAttachments])
	}
	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(e.target.files || [])
		const newAttachments: Attachment[] = files.map((file) => ({
			file,
			previewUrl: URL.createObjectURL(file),
		}))
		setAttachments((prev) => [...prev, ...newAttachments])
	}

	const handleSend = () => {
		onSend(text, attachments)
		setText('')
		setAttachments([])
	}

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
			<TextField
				fullWidth
				size="small"
				value={text}
				onChange={(e) => setText(e.target.value)}
				placeholder="Type your message..."
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				sx={{
					'& .MuiOutlinedInput-root': {
						bgcolor: dragOver ? 'action.hover' : 'background.paper',
					},
				}}
			/>
			<input
				type="file"
				ref={fileInputRef}
				onChange={handleFileChange}
				accept="image/*"
				multiple
				style={{ display: 'none' }}
			/>
			<IconButton onClick={() => fileInputRef.current?.click()} size="small">
				<AttachFileIcon />
			</IconButton>
			<IconButton
				color="primary"
				onClick={handleSend}
				disabled={!text.trim() && attachments.length === 0}
				size="small"
			>
				<SendIcon />
			</IconButton>
		</Box>
	)
}

export default UploaderBar
