import DocumentsList from '@/components/DocumentsList'
import ThemeToggler from './ThemeToggler'
import '@sass/components/Sidebar.scss'

function Sidebar({ isOpen }: { isOpen: boolean }) {
  return (
    <div className={`Sidebar ${isOpen ? '' : 'hidden'}`}>
      <h1 className="text-heading-S Sidebar__header">MY DOCUMENTS</h1>
      <button
        className="button button--primary"
        onClick={() => console.log('New Document Create Clicked')}
      >
        + New Document
      </button>
      <DocumentsList />
      <div className="Sidebar__footer">
        <ThemeToggler />
      </div>
    </div>
  )
}

export default Sidebar
