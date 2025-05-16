export interface Attachment {
	file: File
	previewUrl?: string
}

export interface SentItem {
	id: number
	text: string | null
	attachments: Attachment[]
	selected: boolean
	timestamp?: string
}
