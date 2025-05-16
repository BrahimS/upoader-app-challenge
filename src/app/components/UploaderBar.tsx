import React, { useState } from 'react'
import { Box } from '@mui/material'
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
		<Box>
			{/* Bar with TextField, button to trigger file selection, Send button */}
			{/* Optional: Render drag-overlay when dragOver is true */}
			{/* Below: render thumbnails with delete icons */}
		</Box>
	)
}

export default UploaderBar
