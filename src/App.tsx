import React, { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from './app/theme'

import type { Attachment, SentItem } from './app/types'
import Page from './app/Page'

const App: React.FC = () => {
	const [sentItems, setSentItems] = useState<SentItem[]>([])
	const [nextId, setNextId] = useState(0) // Move nextId to state

	const handleSend = (text: string, attachments: Attachment[]) => {
		const newItem: SentItem = {
			id: nextId,
			text: text || null,
			attachments,
			selected: false,
			timestamp: new Date().toLocaleString(),
		}
		setNextId((prev) => prev + 1)
		setSentItems((prev) => [newItem, ...prev])
	}

	const handleUpdate = (id: number, changes: Partial<SentItem>) => {
		setSentItems((prev) =>
			prev.map((item) => ({
				...item,
				selected: item.id === id ? changes.selected ?? item.selected : false,
			}))
		)
	}

	const handleDelete = (ids: number[]) => {
		setSentItems((prev) => prev.filter((item) => !ids.includes(item.id)))
	}

	const handleExport = (ids: number[]) => {
		const exportedItems = sentItems.filter((item) => ids.includes(item.id))
		const blob = new Blob([JSON.stringify(exportedItems, null, 2)], {
			type: 'application/json',
		})
		const url = URL.createObjectURL(blob)
		const a = document.createElement('a')
		a.href = url
		a.download = 'export.json'
		document.body.appendChild(a)
		a.click()
		document.body.removeChild(a)
		URL.revokeObjectURL(url)
	}

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Page
				items={sentItems}
				onSend={handleSend}
				onDelete={handleDelete}
				onExport={handleExport}
				onUpdate={handleUpdate}
			/>
		</ThemeProvider>
	)
}

export default App
