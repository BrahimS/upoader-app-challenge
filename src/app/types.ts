export interface Attachment {
	file: File
	previewUrl?: string
}

export interface SentItem {
	id: any
	text: string | null
	attachments: Attachment[]
	selected: boolean
}
