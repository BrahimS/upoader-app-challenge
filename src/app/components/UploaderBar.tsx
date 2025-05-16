import React, { useState, useRef } from 'react'
import { Box, TextField, IconButton, Stack, Paper } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import SendIcon from '@mui/icons-material/Send'
import CloseIcon from '@mui/icons-material/Close'
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

	const handleDragLeave = () => {
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

	const removeAttachment = (index: number) => {
		setAttachments((prev) => {
			const url = prev[index].previewUrl
			if (url) URL.revokeObjectURL(url)
			return prev.filter((_, i) => i !== index)
		})
	}

	const handleSend = () => {
		onSend(text, attachments)
		setText('')
		setAttachments([])
	}

	return (
		<Paper elevation={3} sx={{ p: 2 }}>
			{attachments.length > 0 && (
				<Box sx={{ mb: 2 }}>
					<Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
						{attachments.map((att, index) => (
							<Box
								key={index}
								sx={{
									position: 'relative',
									width: 100,
									height: 100,
									borderRadius: 1,
									overflow: 'hidden',
									boxShadow: 1,
								}}
							>
								<img
									src={att.previewUrl}
									alt={att.file.name}
									style={{
										width: '100%',
										height: '100%',
										objectFit: 'cover',
									}}
								/>
								<IconButton
									size="small"
									sx={{
										position: 'absolute',
										top: 4,
										right: 4,
										bgcolor: 'rgba(255,255,255,0.8)',
										'&:hover': {
											bgcolor: 'error.light',
											color: 'white',
										},
									}}
									onClick={() => removeAttachment(index)}
								>
									<CloseIcon fontSize="small" />
								</IconButton>
							</Box>
						))}
					</Stack>
				</Box>
			)}

			<Box sx={{ display: 'flex', gap: 1 }}>
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
		</Paper>
	)
}

export default UploaderBar
