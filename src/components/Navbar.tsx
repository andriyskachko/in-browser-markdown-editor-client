import Sidebar from './Sidebar'
import '@sass/components/Navbar.scss'

function Navbar({
  isOpen,
  handleOpen
}: {
  isOpen: boolean
  handleOpen: () => void
}) {
  return (
    <nav className="Navbar">
      <Sidebar isOpen={isOpen} />
      <div className="container">
        <button
          className={`button button--burger ${isOpen ? 'open' : ''}`}
          onClick={() => handleOpen()}
        />
        <div className="Navbar__control-buttons">
          <button
            className="button button--delete"
            title="Delete Current Document"
          />
          <button
            className="button button--primary"
            title="Save Current Changes"
          >
            Save Changes
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
