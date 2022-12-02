import IDocument from '@/shared/IDocument'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import '@sass/components/DocumentListItem.scss'

interface IDocumentListItemProps {
  document: IDocument
  handleClick: (id?: string) => void
}

function dateToShortFormat(date: string) {
  const parseDate = new Date(date)
  const formatting = 'dd MMMM yyyy'
  const formatted = format(parseDate, formatting)
  return formatted
}

function DocumentListItem({ document, handleClick }: IDocumentListItemProps) {
  const { _id, name, createdAt } = document
  const formattedDate = dateToShortFormat(createdAt)

  return (
    <li
      className="DocumentListItem"
      tabIndex={0}
      onClick={() => handleClick(_id)}
    >
      <FontAwesomeIcon icon="file" />
      <div className="DocumentListItem__info">
        <span className="DocumentListItem__date text-body-S clr-heading-body">
          {formattedDate}
        </span>
        <span className="DocumentListItem__name text-heading-M clr-heading">
          {name}
        </span>
      </div>
    </li>
  )
}

export default DocumentListItem
