import IDocument from '@/shared/IDocument'
import { format } from 'date-fns'

function dateToShortFormat(date: string) {
  const parseDate = new Date(date)
  const formatting = 'dd MMMM yyyy'
  const formatted = format(parseDate, formatting)

  return formatted
}

function DocumentListItem({ document }: { document: IDocument }) {
  const { name, createdAt } = document
  const formattedDate = dateToShortFormat(createdAt)

  return (
    <div className="DocumentListItem">
      <span>{name}</span>
      <span>{formattedDate}</span>
    </div>
  )
}

export default DocumentListItem
